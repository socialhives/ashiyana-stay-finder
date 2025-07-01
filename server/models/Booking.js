import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required']
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: [true, 'Room is required']
  },
  bookingType: {
    type: String,
    enum: ['pg', 'hotel'],
    required: [true, 'Booking type is required']
  },
  checkIn: {
    type: Date,
    required: [true, 'Check-in date is required']
  },
  checkOut: {
    type: Date,
    required: function() { return this.bookingType === 'hotel'; }
  },
  duration: {
    type: Number, // in months for PG, in days for hotel
    required: [true, 'Duration is required']
  },
  totalAmount: {
    type: Number,
    required: [true, 'Total amount is required'],
    min: 0
  },
  securityDeposit: {
    type: Number,
    default: 0,
    min: 0
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'checked-in', 'checked-out', 'cancelled'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'partial', 'paid', 'refunded'],
    default: 'pending'
  },
  paymentDetails: {
    method: {
      type: String,
      enum: ['cash', 'card', 'upi', 'bank-transfer']
    },
    transactionId: String,
    paidAmount: {
      type: Number,
      default: 0
    },
    dueAmount: {
      type: Number,
      default: 0
    }
  },
  guestDetails: {
    name: String,
    phone: String,
    email: String,
    idProof: {
      type: String,
      number: String,
      document: String // URL to uploaded document
    },
    emergencyContact: {
      name: String,
      phone: String,
      relation: String
    }
  },
  specialRequests: String,
  notes: String,
  cancelledAt: Date,
  cancellationReason: String
}, {
  timestamps: true
});

// Index for better query performance
bookingSchema.index({ user: 1, status: 1 });
bookingSchema.index({ room: 1, checkIn: 1, checkOut: 1 });
bookingSchema.index({ status: 1, bookingType: 1 });

// Calculate due amount before saving
bookingSchema.pre('save', function(next) {
  if (this.paymentDetails.paidAmount) {
    this.paymentDetails.dueAmount = this.totalAmount - this.paymentDetails.paidAmount;
  }
  next();
});

export default mongoose.model('Booking', bookingSchema);