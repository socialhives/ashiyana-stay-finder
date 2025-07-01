import express from 'express';
import { body, query, validationResult } from 'express-validator';
import Booking from '../models/Booking.js';
import Room from '../models/Room.js';
import User from '../models/User.js';
import { auth, adminAuth } from '../middleware/auth.js';

const router = express.Router();

// @route   POST /api/bookings
// @desc    Create new booking
// @access  Private
router.post('/', auth, [
  body('room').isMongoId().withMessage('Valid room ID is required'),
  body('bookingType').isIn(['pg', 'hotel']).withMessage('Booking type must be pg or hotel'),
  body('checkIn').isISO8601().withMessage('Valid check-in date is required'),
  body('duration').isInt({ min: 1 }).withMessage('Duration must be at least 1'),
  body('guestDetails.name').trim().isLength({ min: 2 }).withMessage('Guest name is required'),
  body('guestDetails.phone').matches(/^[6-9]\d{9}$/).withMessage('Valid phone number is required'),
  body('guestDetails.email').isEmail().withMessage('Valid email is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { room: roomId, bookingType, checkIn, checkOut, duration, guestDetails, specialRequests } = req.body;

    // Check if room exists and is available
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({
        success: false,
        message: 'Room not found'
      });
    }

    if (!room.availability || room.availableRooms <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Room is not available'
      });
    }

    // Calculate total amount
    let totalAmount;
    let securityDeposit = 0;

    if (bookingType === 'pg') {
      totalAmount = room.price.monthly * duration;
      securityDeposit = room.price.monthly; // One month security deposit for PG
    } else {
      totalAmount = room.price.daily * duration;
    }

    // Create booking
    const booking = new Booking({
      user: req.user.userId,
      room: roomId,
      bookingType,
      checkIn: new Date(checkIn),
      checkOut: checkOut ? new Date(checkOut) : undefined,
      duration,
      totalAmount,
      securityDeposit,
      guestDetails,
      specialRequests,
      paymentDetails: {
        dueAmount: totalAmount + securityDeposit
      }
    });

    await booking.save();

    // Update room occupancy
    await Room.findByIdAndUpdate(roomId, {
      $inc: { occupiedRooms: 1 }
    });

    // Populate booking details
    await booking.populate([
      { path: 'user', select: 'name email phone' },
      { path: 'room', select: 'title type category property price' }
    ]);

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: { booking }
    });
  } catch (error) {
    console.error('Create booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating booking'
    });
  }
});

// @route   GET /api/bookings
// @desc    Get user bookings or all bookings (admin)
// @access  Private
router.get('/', auth, [
  query('status').optional().isIn(['pending', 'confirmed', 'checked-in', 'checked-out', 'cancelled']),
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 50 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Invalid query parameters',
        errors: errors.array()
      });
    }

    const { status, page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    // Build filter
    const filter = {};
    if (status) filter.status = status;

    // If not admin, only show user's bookings
    const user = await User.findById(req.user.userId);
    if (user.role !== 'admin') {
      filter.user = req.user.userId;
    }

    const bookings = await Booking.find(filter)
      .populate('user', 'name email phone')
      .populate('room', 'title type category property price')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Booking.countDocuments(filter);

    res.json({
      success: true,
      data: {
        bookings,
        pagination: {
          current: parseInt(page),
          pages: Math.ceil(total / limit),
          total,
          hasNext: page * limit < total,
          hasPrev: page > 1
        }
      }
    });
  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching bookings'
    });
  }
});

// @route   GET /api/bookings/:id
// @desc    Get single booking
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('user', 'name email phone')
      .populate('room', 'title type category property price amenities');

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Check if user owns this booking or is admin
    const user = await User.findById(req.user.userId);
    if (user.role !== 'admin' && booking.user._id.toString() !== req.user.userId) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    res.json({
      success: true,
      data: { booking }
    });
  } catch (error) {
    console.error('Get booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching booking'
    });
  }
});

// @route   PUT /api/bookings/:id/status
// @desc    Update booking status (Admin only)
// @access  Private/Admin
router.put('/:id/status', adminAuth, [
  body('status').isIn(['pending', 'confirmed', 'checked-in', 'checked-out', 'cancelled']),
  body('notes').optional().isString()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { status, notes } = req.body;
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Handle room occupancy changes
    if (status === 'cancelled' && booking.status !== 'cancelled') {
      // Free up the room
      await Room.findByIdAndUpdate(booking.room, {
        $inc: { occupiedRooms: -1 }
      });
      booking.cancelledAt = new Date();
    }

    booking.status = status;
    if (notes) booking.notes = notes;
    
    await booking.save();

    res.json({
      success: true,
      message: 'Booking status updated successfully',
      data: { booking }
    });
  } catch (error) {
    console.error('Update booking status error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating booking status'
    });
  }
});

// @route   PUT /api/bookings/:id/payment
// @desc    Update payment details (Admin only)
// @access  Private/Admin
router.put('/:id/payment', adminAuth, [
  body('method').isIn(['cash', 'card', 'upi', 'bank-transfer']),
  body('paidAmount').isFloat({ min: 0 }),
  body('transactionId').optional().isString()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { method, paidAmount, transactionId } = req.body;
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Update payment details
    booking.paymentDetails.method = method;
    booking.paymentDetails.paidAmount += paidAmount;
    booking.paymentDetails.transactionId = transactionId;

    // Update payment status
    const totalDue = booking.totalAmount + booking.securityDeposit;
    if (booking.paymentDetails.paidAmount >= totalDue) {
      booking.paymentStatus = 'paid';
    } else if (booking.paymentDetails.paidAmount > 0) {
      booking.paymentStatus = 'partial';
    }

    await booking.save();

    res.json({
      success: true,
      message: 'Payment updated successfully',
      data: { booking }
    });
  } catch (error) {
    console.error('Update payment error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating payment'
    });
  }
});

export default router;