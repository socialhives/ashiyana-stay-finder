import express from 'express';
import { body, query, validationResult } from 'express-validator';
import Review from '../models/Review.js';
import Booking from '../models/Booking.js';
import { auth, adminAuth } from '../middleware/auth.js';

const router = express.Router();

// @route   POST /api/reviews
// @desc    Create new review
// @access  Private
router.post('/', auth, [
  body('property').isIn(['ashiyana-boys', 'ashiyana-girls', 'hotel-high-view', 'la-casa-hotel']),
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
  body('title').trim().isLength({ min: 5, max: 100 }).withMessage('Title must be between 5 and 100 characters'),
  body('comment').trim().isLength({ min: 10, max: 1000 }).withMessage('Comment must be between 10 and 1000 characters'),
  body('booking').optional().isMongoId()
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

    const { property, rating, title, comment, aspects, booking } = req.body;

    // Check if user has already reviewed this property
    const existingReview = await Review.findOne({
      user: req.user.userId,
      property
    });

    if (existingReview) {
      return res.status(400).json({
        success: false,
        message: 'You have already reviewed this property'
      });
    }

    // If booking ID provided, verify it belongs to user
    if (booking) {
      const userBooking = await Booking.findOne({
        _id: booking,
        user: req.user.userId,
        status: { $in: ['checked-out', 'completed'] }
      });

      if (!userBooking) {
        return res.status(400).json({
          success: false,
          message: 'Invalid booking or booking not completed'
        });
      }
    }

    const review = new Review({
      user: req.user.userId,
      property,
      rating,
      title,
      comment,
      aspects,
      booking
    });

    await review.save();
    await review.populate('user', 'name');

    res.status(201).json({
      success: true,
      message: 'Review submitted successfully',
      data: { review }
    });
  } catch (error) {
    console.error('Create review error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating review'
    });
  }
});

// @route   GET /api/reviews
// @desc    Get reviews with filtering
// @access  Public
router.get('/', [
  query('property').optional().isIn(['ashiyana-boys', 'ashiyana-girls', 'hotel-high-view', 'la-casa-hotel']),
  query('rating').optional().isInt({ min: 1, max: 5 }),
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
      property,
      rating,
      page = 1,
      limit = 10
    } = req.query;

    // Build filter
    const filter = { isPublished: true };
    if (property) filter.property = property;
    if (rating) filter.rating = parseInt(rating);

    const skip = (page - 1) * limit;

    const reviews = await Review.find(filter)
      .populate('user', 'name')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Review.countDocuments(filter);

    // Calculate average rating for the property
    let averageRating = null;
    if (property) {
      const ratingStats = await Review.aggregate([
        { $match: { property, isPublished: true } },
        {
          $group: {
            _id: null,
            averageRating: { $avg: '$rating' },
            totalReviews: { $sum: 1 }
          }
        }
      ]);
      
      if (ratingStats.length > 0) {
        averageRating = {
          average: Math.round(ratingStats[0].averageRating * 10) / 10,
          total: ratingStats[0].totalReviews
        };
      }
    }

    res.json({
      success: true,
      data: {
        reviews,
        averageRating,
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
    console.error('Get reviews error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching reviews'
    });
  }
});

// @route   GET /api/reviews/stats
// @desc    Get review statistics
// @access  Public
router.get('/stats', async (req, res) => {
  try {
    const { property } = req.query;
    
    const matchFilter = { isPublished: true };
    if (property) matchFilter.property = property;

    const stats = await Review.aggregate([
      { $match: matchFilter },
      {
        $group: {
          _id: '$property',
          averageRating: { $avg: '$rating' },
          totalReviews: { $sum: 1 },
          ratingDistribution: {
            $push: '$rating'
          }
        }
      }
    ]);

    // Calculate rating distribution
    const processedStats = stats.map(stat => {
      const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      stat.ratingDistribution.forEach(rating => {
        distribution[rating]++;
      });

      return {
        property: stat._id,
        averageRating: Math.round(stat.averageRating * 10) / 10,
        totalReviews: stat.totalReviews,
        ratingDistribution: distribution
      };
    });

    res.json({
      success: true,
      data: { stats: processedStats }
    });
  } catch (error) {
    console.error('Get review stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching review statistics'
    });
  }
});

// @route   PUT /api/reviews/:id/helpful
// @desc    Mark review as helpful
// @access  Public
router.put('/:id/helpful', async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { $inc: { helpfulVotes: 1 } },
      { new: true }
    );

    if (!review) {
      return res.status(404).json({
        success: false,
        message: 'Review not found'
      });
    }

    res.json({
      success: true,
      message: 'Thank you for your feedback',
      data: { helpfulVotes: review.helpfulVotes }
    });
  } catch (error) {
    console.error('Mark helpful error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   PUT /api/reviews/:id/publish
// @desc    Publish/unpublish review (Admin only)
// @access  Private/Admin
router.put('/:id/publish', adminAuth, [
  body('isPublished').isBoolean()
], async (req, res) => {
  try {
    const { isPublished } = req.body;
    
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { isPublished },
      { new: true }
    ).populate('user', 'name');

    if (!review) {
      return res.status(404).json({
        success: false,
        message: 'Review not found'
      });
    }

    res.json({
      success: true,
      message: `Review ${isPublished ? 'published' : 'unpublished'} successfully`,
      data: { review }
    });
  } catch (error) {
    console.error('Publish review error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating review'
    });
  }
});

export default router;