import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Room from '../models/Room.js';
import Review from '../models/Review.js';

dotenv.config();

const seedDatabase = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nst_hospitality');
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Room.deleteMany({});
    await Review.deleteMany({});
    console.log('Cleared existing data');

    // Create admin user
    const adminPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123456', 12);
    const admin = new User({
      name: 'Admin',
      email: process.env.ADMIN_EMAIL || 'admin@nsthospitality.com',
      phone: '9876543210',
      password: adminPassword,
      role: 'admin',
      isVerified: true
    });
    await admin.save();
    console.log('Admin user created');

    // Create sample users
    const users = [];
    const sampleUsers = [
      { name: 'Rahul Saini', email: 'rahul@example.com', phone: '9876543211' },
      { name: 'Chirag Bhardwaj', email: 'chirag@example.com', phone: '9876543212' },
      { name: 'Sahil Tiwari', email: 'sahil@example.com', phone: '9876543213' },
      { name: 'Munna Singh', email: 'munna@example.com', phone: '9876543214' }
    ];

    for (const userData of sampleUsers) {
      const hashedPassword = await bcrypt.hash('password123', 12);
      const user = new User({
        ...userData,
        password: hashedPassword,
        isVerified: true
      });
      await user.save();
      users.push(user);
    }
    console.log('Sample users created');

    // Create rooms
    const rooms = [
      // Ashiyana PG Boys
      {
        title: 'Single Occupancy Room - Boys',
        type: 'single',
        category: 'pg',
        property: 'ashiyana-boys',
        price: { monthly: 12000 },
        capacity: 1,
        amenities: ['WiFi', 'AC', 'Attached Bathroom', 'Study Table', 'Wardrobe'],
        features: ['Private room', 'Attached bathroom', 'Study table', 'Wardrobe', 'AC/Fan', 'Personal fridge'],
        images: [
          { url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7', alt: 'Single room', isPrimary: true }
        ],
        specifications: {
          size: '120 sq ft',
          bedType: 'Single bed with mattress',
          bathroom: 'Attached with geyser',
          storage: '3-door wardrobe',
          studyArea: 'Dedicated study table with chair',
          power: '24/7 electricity with backup'
        },
        totalRooms: 10,
        occupiedRooms: 7,
        description: 'Spacious single room with attached bathroom, study table, and wardrobe',
        location: {
          address: 'Sector 11, Faridabad',
          landmark: 'Near YMCA Chowk'
        }
      },
      {
        title: 'Double Sharing Room - Boys',
        type: 'double',
        category: 'pg',
        property: 'ashiyana-boys',
        price: { monthly: 8000 },
        capacity: 2,
        amenities: ['WiFi', 'AC', 'Common Bathroom', 'Study Area', 'Storage'],
        features: ['Shared room', 'Common bathroom', 'Study area', 'Storage space', 'AC/Fan', 'Shared fridge'],
        images: [
          { url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04', alt: 'Double sharing room', isPrimary: true }
        ],
        specifications: {
          size: '180 sq ft',
          bedType: 'Two single beds with mattresses',
          bathroom: 'Shared with 2 other rooms',
          storage: '2 separate wardrobes',
          studyArea: 'Two study tables with chairs',
          power: '24/7 electricity with backup'
        },
        totalRooms: 15,
        occupiedRooms: 12,
        description: 'Comfortable double occupancy room with individual storage spaces',
        location: {
          address: 'Sector 11, Faridabad',
          landmark: 'Near YMCA Chowk'
        }
      },
      {
        title: 'Triple Sharing Room - Boys',
        type: 'triple',
        category: 'pg',
        property: 'ashiyana-boys',
        price: { monthly: 6000 },
        capacity: 3,
        amenities: ['WiFi', 'Fan', 'Common Bathroom', 'Basic Storage'],
        features: ['Shared room', 'Common facilities', 'Basic amenities', 'Budget-friendly', 'Fan', 'Shared fridge'],
        images: [
          { url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625', alt: 'Triple sharing room', isPrimary: true }
        ],
        specifications: {
          size: '200 sq ft',
          bedType: 'Three single beds with mattresses',
          bathroom: 'Shared with 4 other rooms',
          storage: '3 separate lockers',
          studyArea: 'Common study room access',
          power: '24/7 electricity with backup'
        },
        totalRooms: 8,
        occupiedRooms: 6,
        description: 'Budget-friendly shared room with basic amenities',
        location: {
          address: 'Sector 11, Faridabad',
          landmark: 'Near YMCA Chowk'
        }
      },

      // Ashiyana PG Girls
      {
        title: 'Single Occupancy Room - Girls',
        type: 'single',
        category: 'pg',
        property: 'ashiyana-girls',
        price: { monthly: 14000 },
        capacity: 1,
        amenities: ['WiFi', 'AC', 'Attached Bathroom', 'Study Table', 'Wardrobe', 'Security'],
        features: ['Private room', 'Attached bathroom', 'Study table', 'Wardrobe', 'AC/Fan', 'Personal fridge'],
        images: [
          { url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7', alt: 'Single room girls', isPrimary: true }
        ],
        specifications: {
          size: '120 sq ft',
          bedType: 'Single bed with mattress',
          bathroom: 'Attached with geyser',
          storage: '3-door wardrobe',
          studyArea: 'Dedicated study table with chair',
          power: '24/7 electricity with backup'
        },
        totalRooms: 8,
        occupiedRooms: 6,
        description: 'Secure single room for girls with all modern amenities',
        location: {
          address: 'Sector 11, Faridabad',
          landmark: 'Near YMCA Chowk'
        }
      },
      {
        title: 'Double Sharing Room - Girls',
        type: 'double',
        category: 'pg',
        property: 'ashiyana-girls',
        price: { monthly: 9000 },
        capacity: 2,
        amenities: ['WiFi', 'AC', 'Common Bathroom', 'Study Area', 'Storage', 'Security'],
        features: ['Shared room', 'Common bathroom', 'Study area', 'Storage space', 'AC/Fan', 'Shared fridge'],
        images: [
          { url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04', alt: 'Double sharing room girls', isPrimary: true }
        ],
        specifications: {
          size: '180 sq ft',
          bedType: 'Two single beds with mattresses',
          bathroom: 'Shared with 2 other rooms',
          storage: '2 separate wardrobes',
          studyArea: 'Two study tables with chairs',
          power: '24/7 electricity with backup'
        },
        totalRooms: 12,
        occupiedRooms: 9,
        description: 'Safe and comfortable double sharing for girls',
        location: {
          address: 'Sector 11, Faridabad',
          landmark: 'Near YMCA Chowk'
        }
      },

      // Hotel High View
      {
        title: 'Basic Room - Hotel High View',
        type: 'hotel-basic',
        category: 'hotel',
        property: 'hotel-high-view',
        price: { daily: 1500 },
        capacity: 2,
        amenities: ['WiFi', 'AC', 'TV', 'Room Service', 'Parking'],
        features: ['AC', 'TV', 'Attached Bathroom', 'Room Service'],
        images: [
          { url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7', alt: 'Hotel basic room', isPrimary: true }
        ],
        specifications: {
          size: '200 sq ft',
          bedType: 'Double bed',
          bathroom: 'Attached with modern fixtures',
          storage: 'Wardrobe and side tables',
          studyArea: 'Work desk available',
          power: '24/7 electricity'
        },
        totalRooms: 20,
        occupiedRooms: 12,
        description: 'Comfortable basic room with essential amenities',
        location: {
          address: 'Premium Location, Faridabad',
          landmark: 'City Center'
        }
      },
      {
        title: 'Standard Room - Hotel High View',
        type: 'hotel-standard',
        category: 'hotel',
        property: 'hotel-high-view',
        price: { daily: 2000 },
        capacity: 2,
        amenities: ['WiFi', 'AC', 'LED TV', 'Mini Bar', 'Room Service', 'Balcony'],
        features: ['AC', 'LED TV', 'Mini Bar', 'Balcony', 'Premium Bathroom'],
        images: [
          { url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04', alt: 'Hotel standard room', isPrimary: true }
        ],
        specifications: {
          size: '300 sq ft',
          bedType: 'Queen bed',
          bathroom: 'Premium bathroom with bathtub',
          storage: 'Large wardrobe and mini bar',
          studyArea: 'Executive work desk',
          power: '24/7 electricity'
        },
        totalRooms: 15,
        occupiedRooms: 8,
        description: 'Spacious standard room with premium amenities',
        location: {
          address: 'Premium Location, Faridabad',
          landmark: 'City Center'
        }
      },

      // La Casa Hotel
      {
        title: 'Normal Room - La Casa Hotel',
        type: 'hotel-basic',
        category: 'hotel',
        property: 'la-casa-hotel',
        price: { daily: 1000 },
        capacity: 2,
        amenities: ['WiFi', 'AC', 'TV', 'Kitchenette'],
        features: ['AC', 'TV', 'Attached Bathroom', 'WiFi'],
        images: [
          { url: 'https://res.cloudinary.com/dklff68b9/image/upload/v1751288088/Screenshot_2025-06-30_182305_kfllsk.png', alt: 'La Casa normal room', isPrimary: true }
        ],
        specifications: {
          size: '180 sq ft',
          bedType: 'Double bed',
          bathroom: 'Attached bathroom',
          storage: 'Wardrobe',
          studyArea: 'Small work area',
          power: '24/7 electricity'
        },
        totalRooms: 25,
        occupiedRooms: 15,
        description: 'Comfortable and affordable room for budget travelers',
        location: {
          address: 'Luxury Suites, Faridabad',
          landmark: 'Business District'
        }
      },
      {
        title: 'Super Deluxe - La Casa Hotel',
        type: 'hotel-suite',
        category: 'hotel',
        property: 'la-casa-hotel',
        price: { daily: 1500 },
        capacity: 3,
        amenities: ['WiFi', 'AC', 'Smart TV', 'Kitchenette', 'Living Area'],
        features: ['AC', 'Smart TV', 'Kitchenette', 'Separate Living Area', 'Premium Amenities'],
        images: [
          { url: 'https://res.cloudinary.com/dklff68b9/image/upload/v1751288087/Screenshot_2025-06-30_182327_pejro7.png', alt: 'La Casa super deluxe', isPrimary: true }
        ],
        specifications: {
          size: '350 sq ft',
          bedType: 'King bed',
          bathroom: 'Premium bathroom',
          storage: 'Large wardrobe and kitchenette',
          studyArea: 'Separate living area with work space',
          power: '24/7 electricity'
        },
        totalRooms: 10,
        occupiedRooms: 6,
        description: 'Spacious suite with kitchenette and living area',
        location: {
          address: 'Luxury Suites, Faridabad',
          landmark: 'Business District'
        }
      }
    ];

    await Room.insertMany(rooms);
    console.log('Sample rooms created');

    // Create sample reviews
    const reviews = [
      {
        user: users[0]._id,
        property: 'ashiyana-boys',
        rating: 5,
        title: 'Excellent PG with great facilities',
        comment: 'Aashiyana Pg is very affordable and good in all facilities like spacious rooms, hygiene, healthy food, management, etc. I think this is the best hostel I have ever lived in. Specially owner ( Mr. Sanjay Singh ) he is very supportive, polite, and helpful.',
        aspects: {
          cleanliness: 5,
          food: 5,
          staff: 5,
          location: 4,
          value: 5
        },
        isVerified: true,
        isPublished: true
      },
      {
        user: users[1]._id,
        property: 'ashiyana-boys',
        rating: 5,
        title: 'Good experience and friendly management',
        comment: 'It was a good experience staying in Ashiyana Pg. It was affordable and the management family has very good manners and very homely. I loved the owner he was very friendly.',
        aspects: {
          cleanliness: 4,
          food: 5,
          staff: 5,
          location: 4,
          value: 5
        },
        isVerified: true,
        isPublished: true
      },
      {
        user: users[2]._id,
        property: 'ashiyana-boys',
        rating: 4,
        title: 'Nice place with tasty food',
        comment: 'Nice place as a boys PG in crossing republik to live, with nice tasty food.',
        aspects: {
          cleanliness: 4,
          food: 5,
          staff: 4,
          location: 4,
          value: 4
        },
        isVerified: true,
        isPublished: true
      },
      {
        user: users[3]._id,
        property: 'hotel-high-view',
        rating: 5,
        title: 'Understanding management and spacious rooms',
        comment: 'The management is very understanding and helpful. The rooms are spacious and well-maintained. Highly recommend to anyone looking for quality accommodation.',
        aspects: {
          cleanliness: 5,
          food: 4,
          staff: 5,
          location: 4,
          value: 4
        },
        isVerified: true,
        isPublished: true
      }
    ];

    await Review.insertMany(reviews);
    console.log('Sample reviews created');

    console.log('Database seeded successfully!');
    console.log('Admin credentials:');
    console.log('Email:', process.env.ADMIN_EMAIL || 'admin@nsthospitality.com');
    console.log('Password:', process.env.ADMIN_PASSWORD || 'admin123456');

  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

seedDatabase();