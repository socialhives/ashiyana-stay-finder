import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Room title is required'],
    trim: true
  },
  type: {
    type: String,
    required: [true, 'Room type is required'],
    enum: ['single', 'double', 'triple', 'hotel-basic', 'hotel-standard', 'hotel-premium', 'hotel-suite']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['pg', 'hotel']
  },
  property: {
    type: String,
    required: [true, 'Property name is required'],
    enum: ['ashiyana-boys', 'ashiyana-girls', 'hotel-high-view', 'la-casa-hotel']
  },
  price: {
    monthly: {
      type: Number,
      required: function() { return this.category === 'pg'; }
    },
    daily: {
      type: Number,
      required: function() { return this.category === 'hotel'; }
    }
  },
  capacity: {
    type: Number,
    required: [true, 'Room capacity is required'],
    min: 1,
    max: 4
  },
  amenities: [{
    type: String,
    required: true
  }],
  features: [{
    type: String,
    required: true
  }],
  images: [{
    url: String,
    alt: String,
    isPrimary: {
      type: Boolean,
      default: false
    }
  }],
  specifications: {
    size: String,
    bedType: String,
    bathroom: String,
    storage: String,
    studyArea: String,
    power: String
  },
  availability: {
    type: Boolean,
    default: true
  },
  totalRooms: {
    type: Number,
    required: [true, 'Total rooms count is required'],
    min: 1
  },
  occupiedRooms: {
    type: Number,
    default: 0,
    min: 0
  },
  description: {
    type: String,
    required: [true, 'Room description is required']
  },
  location: {
    address: String,
    landmark: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  }
}, {
  timestamps: true
});

// Virtual for available rooms
roomSchema.virtual('availableRooms').get(function() {
  return this.totalRooms - this.occupiedRooms;
});

// Index for better query performance
roomSchema.index({ category: 1, type: 1, availability: 1 });
roomSchema.index({ property: 1 });

export default mongoose.model('Room', roomSchema);