import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Shield, 
  Wifi, 
  Utensils, 
  Car, 
  Shirt, 
  Users,
  MapPin,
  Phone,
  Star,
  ArrowLeft,
  Bed,
  Bath,
  Table,
  Tv,
  AirVent,
  Clock,
  CheckCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const PGServices = () => {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState('single');

  const amenities = [
    { icon: Shield, title: 'Safe & Secure', description: '24/7 Security with CCTV surveillance' },
    { icon: Wifi, title: 'High-Speed WiFi', description: 'Unlimited internet access' },
    { icon: Utensils, title: 'Quality Food', description: 'Hygienic homemade meals' },
    { icon: Car, title: 'Parking', description: 'Secure vehicle parking' },
    { icon: Shirt, title: 'Laundry', description: 'Professional laundry service' },
    { icon: Users, title: 'Common Areas', description: 'Recreation and study rooms' }
  ];

  const roomTypes = [
    {
      id: 'single',
      type: 'Single Occupancy',
      price: '₹12,000/month',
      features: ['Private room', 'Attached bathroom', 'Study table', 'Wardrobe', 'AC/Fan', 'Personal fridge'],
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      specifications: {
        'Room Size': '120 sq ft',
        'Bed Type': 'Single bed with mattress',
        'Storage': '3-door wardrobe',
        'Study Area': 'Dedicated study table with chair',
        'Bathroom': 'Attached with geyser',
        'Power': '24/7 electricity with backup'
      }
    },
    {
      id: 'double',
      type: 'Double Sharing',
      price: '₹8,000/month',
      features: ['Shared room', 'Common bathroom', 'Study area', 'Storage space', 'AC/Fan', 'Shared fridge'],
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      specifications: {
        'Room Size': '180 sq ft',
        'Bed Type': 'Two single beds with mattresses',
        'Storage': '2 separate wardrobes',
        'Study Area': 'Two study tables with chairs',
        'Bathroom': 'Shared with 2 other rooms',
        'Power': '24/7 electricity with backup'
      }
    },
    {
      id: 'triple',
      type: 'Triple Sharing',
      price: '₹6,000/month',
      features: ['Shared room', 'Common facilities', 'Basic amenities', 'Budget-friendly', 'Fan', 'Shared fridge'],
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      specifications: {
        'Room Size': '200 sq ft',
        'Bed Type': 'Three single beds with mattresses',
        'Storage': '3 separate lockers',
        'Study Area': 'Common study room access',
        'Bathroom': 'Shared with 4 other rooms',
        'Power': '24/7 electricity with backup'
      }
    }
  ];

  const selectedRoomData = roomTypes.find(room => room.id === selectedRoom);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/20 mb-8"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Ashiyana PG
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-8">
              Premium Paying Guest Accommodation in Faridabad
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2">4.7/5 Rating</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Sector 11, Faridabad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Selection Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {roomTypes.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(room.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedRoom === room.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {room.type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Room Information */}
      {selectedRoomData && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Room Images */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={selectedRoomData.image} 
                    alt={selectedRoomData.type}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {selectedRoomData.gallery.map((img, idx) => (
                    <div key={idx} className="relative overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={img} 
                        alt={`${selectedRoomData.type} view ${idx + 1}`}
                        className="w-full h-24 object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Room Details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedRoomData.type}</h2>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{selectedRoomData.price}</div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {selectedRoomData.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Specifications */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Room Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(selectedRoomData.specifications).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-sm text-gray-500 font-medium">{key}</span>
                        <span className="text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  Book This Room
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Premium Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                    <amenity.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600">
                    {amenity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Move In?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience comfortable and secure living at Ashiyana PG. 
            Contact us today to book your room or schedule a visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4"
              onClick={() => window.location.href = 'tel:+919876543210'}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default PGServices;
