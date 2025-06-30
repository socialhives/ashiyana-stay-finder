
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Building, 
  Star, 
  Wifi, 
  Car, 
  Utensils, 
  Shield,
  Users,
  MapPin,
  Phone,
  ArrowLeft,
  Coffee,
  Tv,
  Bath,
  Bed,
  AirVent,
  CheckCircle,
  Wine
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const HotelServices = () => {
  const navigate = useNavigate();
  const [selectedHotel, setSelectedHotel] = useState('high-view');

  const hotels = [
    {
      id: 'high-view',
      name: 'Hotel High View',
      location: 'Premium Location, Faridabad',
      rating: 4.8,
      description: 'Experience luxury and comfort at our flagship hotel with premium amenities and exceptional service.',
      features: ['Premium Rooms', 'Restaurant', 'Conference Hall', 'Valet Parking'],
      startingPrice: '₹1,500/night',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      roomTypes: [
        {
          name: 'Basic Room',
          price: '₹1,500/night',
          features: ['AC', 'TV', 'Attached Bathroom', 'Room Service'],
          size: '200 sq ft'
        },
        {
          name: 'Standard Room',
          price: '₹2,000/night',
          features: ['AC', 'LED TV', 'Mini Bar', 'Balcony', 'Premium Bathroom'],
          size: '300 sq ft'
        },
        {
          name: 'Premium Room',
          price: '₹2,500/night',
          features: ['AC', 'Smart TV', 'Mini Bar', 'City View', 'Luxury Bathroom', 'Complimentary Breakfast'],
          size: '400 sq ft'
        }
      ],
      amenities: ['Free WiFi', '24/7 Room Service', 'Restaurant', 'Valet Parking', 'Conference Hall', 'Laundry Service']
    },
    {
      id: 'la-casa',
      name: 'La Casa Hotel',
      location: 'Luxury Suites, Faridabad',
      rating: 4.7,
      description: 'Elegant suites designed for extended stays with home-like comfort and hotel-quality service.',
      features: ['Luxury Suites', 'Kitchenette', 'Business Center', 'Gym Access'],
      startingPrice: '₹1,000/night',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://res.cloudinary.com/dklff68b9/image/upload/v1751288088/Screenshot_2025-06-30_182305_kfllsk.png',
        'https://res.cloudinary.com/dklff68b9/image/upload/v1751288087/Screenshot_2025-06-30_182327_pejro7.png',
        'https://res.cloudinary.com/dklff68b9/image/upload/v1751288087/Screenshot_2025-06-30_182347_rrxkq0.png',
        'https://res.cloudinary.com/dklff68b9/image/upload/v1751288086/Screenshot_2025-06-30_182334_pqe9av.png',
        'https://res.cloudinary.com/dklff68b9/image/upload/v1751288086/Screenshot_2025-06-30_182340_dpjuwe.png',
        'https://res.cloudinary.com/dklff68b9/image/upload/v1751288074/Screenshot_2025-06-30_182357_dcduhd.png'
      ],
      roomTypes: [
        {
          name: 'Normal Room',
          price: '₹1,000/night',
          features: ['AC', 'TV', 'Attached Bathroom', 'WiFi'],
          size: '180 sq ft'
        },
        {
          name: 'Super Deluxe',
          price: '₹1,500/night',
          features: ['AC', 'Smart TV', 'Kitchenette', 'Separate Living Area', 'Premium Amenities'],
          size: '350 sq ft'
        }
      ],
      amenities: ['Free WiFi', 'Kitchenette', 'Business Center', 'Gym Access', 'Housekeeping', 'Concierge Service']
    }
  ];

  const allAmenities = [
    { icon: Wifi, title: 'High-Speed WiFi', description: 'Complimentary internet access' },
    { icon: Car, title: 'Valet Parking', description: 'Secure vehicle parking service' },
    { icon: Utensils, title: 'Fine Dining', description: 'Multi-cuisine restaurant' },
    { icon: Shield, title: '24/7 Security', description: 'Round-the-clock security' },
    { icon: Coffee, title: 'Room Service', description: '24-hour room service' },
    { icon: Tv, title: 'Entertainment', description: 'Premium TV channels' },
    { icon: Bath, title: 'Spa Services', description: 'Relaxation and wellness' },
    { icon: Users, title: 'Concierge', description: 'Personal assistance service' }
  ];

  const selectedHotelData = hotels.find(hotel => hotel.id === selectedHotel);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-800 text-white py-16">
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
              Luxury Hotels
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-8">
              Premium Hotel Experiences in Faridabad
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
                <span>Multiple Locations, Faridabad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Selection Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {hotels.map((hotel) => (
              <button
                key={hotel.id}
                onClick={() => setSelectedHotel(hotel.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedHotel === hotel.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {hotel.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Hotel Information */}
      {selectedHotelData && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Hotel Images */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={selectedHotelData.image} 
                    alt={selectedHotelData.name}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {selectedHotelData.gallery.map((img, idx) => (
                    <div key={idx} className="relative overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={img} 
                        alt={`${selectedHotelData.name} view ${idx + 1}`}
                        className="w-full h-24 object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Hotel Details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedHotelData.name}</h2>
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                    <span className="text-gray-600">{selectedHotelData.location}</span>
                    <div className="flex items-center ml-4">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-semibold">{selectedHotelData.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{selectedHotelData.description}</p>
                </div>

                {/* Room Types */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Room Types & Pricing</h3>
                  <div className="space-y-4">
                    {selectedHotelData.roomTypes.map((room, idx) => (
                      <div key={idx} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                        <div>
                          <h4 className="font-semibold text-gray-800">{room.name}</h4>
                          <p className="text-sm text-gray-600">{room.size}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {room.features.map((feature, fidx) => (
                              <span key={fidx} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-orange-600">{room.price}</div>
                          <Button size="sm" className="mt-2 bg-gradient-to-r from-orange-500 to-red-600">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hotel Amenities */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Hotel Amenities</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedHotelData.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Luxury Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allAmenities.map((amenity, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4">
                    <amenity.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {amenity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Luxury</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay at our premium hotels and enjoy world-class hospitality 
            with exceptional amenities and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4"
              onClick={() => window.location.href = 'tel:+919876543210'}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4"
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

export default HotelServices;
