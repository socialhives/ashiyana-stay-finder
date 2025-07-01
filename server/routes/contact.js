import express from 'express';
import { body, query, validationResult } from 'express-validator';
import Contact from '../models/Contact.js';
import { auth, adminAuth } from '../middleware/auth.js';
import { sendEmail } from '../utils/email.js';

const router = express.Router();

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', [
  body('name').trim().isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Please enter a valid email'),
  body('phone').matches(/^[6-9]\d{9}$/).withMessage('Please enter a valid Indian phone number'),
  body('enquiryType').isIn(['general', 'booking', 'pricing', 'facilities', 'complaint']),
  body('message').trim().isLength({ min: 10, max: 1000 }).withMessage('Message must be between 10 and 1000 characters')
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

    const { name, email, phone, enquiryType, message } = req.body;

    // Create contact entry
    const contact = new Contact({
      name,
      email,
      phone,
      enquiryType,
      message,
      source: 'website'
    });

    await contact.save();

    // Send confirmation email to user
    try {
      await sendEmail({
        to: email,
        subject: 'Thank you for contacting NST Hospitality',
        template: 'contact-confirmation',
        data: {
          name,
          enquiryType,
          message
        }
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you within 24 hours.',
      data: { contact }
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while submitting contact form'
    });
  }
});

// @route   GET /api/contact
// @desc    Get all contact messages (Admin only)
// @access  Private/Admin
router.get('/', adminAuth, [
  query('status').optional().isIn(['new', 'in-progress', 'resolved', 'closed']),
  query('priority').optional().isIn(['low', 'medium', 'high', 'urgent']),
  query('enquiryType').optional().isIn(['general', 'booking', 'pricing', 'facilities', 'complaint']),
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

    const {
      status,
      priority,
      enquiryType,
      page = 1,
      limit = 20
    } = req.query;

    // Build filter
    const filter = {};
    if (status) filter.status = status;
    if (priority) filter.priority = priority;
    if (enquiryType) filter.enquiryType = enquiryType;

    const skip = (page - 1) * limit;

    const contacts = await Contact.find(filter)
      .populate('assignedTo', 'name email')
      .populate('response.respondedBy', 'name email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Contact.countDocuments(filter);

    res.json({
      success: true,
      data: {
        contacts,
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
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching contacts'
    });
  }
});

// @route   GET /api/contact/:id
// @desc    Get single contact message (Admin only)
// @access  Private/Admin
router.get('/:id', adminAuth, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
      .populate('assignedTo', 'name email')
      .populate('response.respondedBy', 'name email');

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }

    res.json({
      success: true,
      data: { contact }
    });
  } catch (error) {
    console.error('Get contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching contact'
    });
  }
});

// @route   PUT /api/contact/:id
// @desc    Update contact message status/priority (Admin only)
// @access  Private/Admin
router.put('/:id', adminAuth, [
  body('status').optional().isIn(['new', 'in-progress', 'resolved', 'closed']),
  body('priority').optional().isIn(['low', 'medium', 'high', 'urgent']),
  body('assignedTo').optional().isMongoId()
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

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('assignedTo', 'name email');

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact updated successfully',
      data: { contact }
    });
  } catch (error) {
    console.error('Update contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating contact'
    });
  }
});

// @route   POST /api/contact/:id/respond
// @desc    Respond to contact message (Admin only)
// @access  Private/Admin
router.post('/:id/respond', adminAuth, [
  body('message').trim().isLength({ min: 10, max: 1000 }).withMessage('Response message must be between 10 and 1000 characters')
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

    const { message } = req.body;
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }

    // Update contact with response
    contact.response = {
      message,
      respondedBy: req.user.userId,
      respondedAt: new Date()
    };
    contact.status = 'resolved';

    await contact.save();

    // Send response email to user
    try {
      await sendEmail({
        to: contact.email,
        subject: 'Response to your inquiry - NST Hospitality',
        template: 'contact-response',
        data: {
          name: contact.name,
          originalMessage: contact.message,
          response: message
        }
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    await contact.populate('response.respondedBy', 'name email');

    res.json({
      success: true,
      message: 'Response sent successfully',
      data: { contact }
    });
  } catch (error) {
    console.error('Respond to contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while responding to contact'
    });
  }
});

export default router;