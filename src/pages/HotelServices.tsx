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
  Wine,
  Play,
  Sparkles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SEO from '@/components/SEO';
import LazyImage from '@/components/LazyImage';

const HotelServices = () => {
  const navigate = useNavigate();
  const [selectedHotel, setSelectedHotel] = useState('high-view');

  const hotelStructuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@graph": [
      {
        "@type": "Hotel",
        "name": "Hotel High View - Near YMCA Faridabad",
        "description": "Premium luxury hotel near YMCA Faridabad with modern amenities, restaurant, conference facilities, and exceptional service.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Premium Location, Near YMCA",
          "addressLocality": "Faridabad",
          "addressRegion": "Haryana",
          "postalCode": "121006",
          "addressCountry": "IN"
        },
        "telephone": "+91-9876543210",
        "priceRange": "₹1,500 - ₹2,500",
        "starRating": {
          "@type": "Rating",
          "ratingValue": "4.8",
          "bestRating": "5"
        },
        "nearbyAttractions": [
          "YMCA Faridabad",
          "J.C. Bose University",
          "YAMCA University"
        ]
      },
      {
        "@type": "Hotel",
        "name": "La Casa Hotel - Budget Hotels in Faridabad Sector 11", 
        "description": "Budget-friendly hotel in Sector 11 Faridabad with elegant suites designed for extended stays and business travelers.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sector 11, Near YMCA",
          "addressLocality": "Faridabad",
          "addressRegion": "Haryana",
          "postalCode": "121006",
          "addressCountry": "IN"
        },
        "telephone": "+91-9876543210",
        "priceRange": "₹1,000 - ₹1,500",
        "starRating": {
          "@type": "Rating",
          "ratingValue": "4.7",
          "bestRating": "5"
        },
        "nearbyAttractions": [
          "YMCA Faridabad",
          "Sector 11 Market",
          "Business District"
        ]
      }
    ]
  };

  const hotels = [
    {
      id: 'high-view',
      name: 'Hotel High View',
      location: 'Premium Location, Near YMCA Faridabad',
      rating: 4.8,
      description: 'Experience luxury and comfort at our flagship hotel near YMCA with premium amenities and exceptional service.',
      features: ['Premium Rooms', 'Restaurant', 'Conference Hall', 'Valet Parking'],
      startingPrice: '₹1,500/night',
      image: '/lovable-uploads/c3f76efa-9afd-41ef-acc6-32e5bbe61bee.png',
      gallery: [
        '/lovable-uploads/77cf6a49-c93f-415f-82ae-a8587e4b76cc.png',
        '/lovable-uploads/c2629b0b-5bea-4c04-9892-121c65a0d314.png',
        '/lovable-uploads/8107c401-3efc-4393-a985-ddaed493672e.png',
        '/lovable-uploads/6ad7f9e1-f419-4f9b-bf20-8450f09c352d.png'
      ],
      videos: [
        'https://res.cloudinary.com/dklff68b9/video/upload/v1752135522/VID-20250709-WA0007_b9xk7j.mp4',
        'https://res.cloudinary.com/dklff68b9/video/upload/v1752135519/VID-20250709-WA0004_q2qqr7.mp4',
        'https://res.cloudinary.com/dklff68b9/video/upload/v1752135519/VID-20250709-WA0005_zamvrg.mp4',
        'https://res.cloudinary.com/dklff68b9/video/upload/v1752135521/VID-20250709-WA0002_cyay2v.mp4'
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
      location: 'Budget Hotels in Sector 11 Faridabad',
      rating: 4.7,
      description: 'Budget-friendly hotel in Sector 11 with elegant suites designed for extended stays and business travelers.',
      features: ['Luxury Suites', 'Kitchenette', 'Business Center', 'Gym Access'],
      startingPrice: '₹1,000/night',
      image: 'https://res.cloudinary.com/dklff68b9/image/upload/v1751288088/Screenshot_2025-06-30_182305_kfllsk.png',
      gallery: [
        'https://res.cloudinary.com/dklff68b9/image/upload/v1751288088/Screenshot_2025-06-30_182305_kfllsk.png',
        'https://res.cloudinary.com/dklff68b9/image/upload/v1751288087/Screenshot_2025-06-30_182327_pejro7.png',
        'https://res.cloudinary.com/dklff68b9/image/upload/v1751288087/Screenshot_2025-06-30_182347_rrxkq0.png',
        'https://res.cloudinary.com/dklff68b9/image/upload/v1751288086/Screenshot_2025-06-30_182334_pqe9av.png',
        'https://res.cloudinary.com/dklff68b9/image/upload/v1751288086/Screenshot_2025-06-30_182340_dpjuwe.png',
        'https://res.cloudinary.com/dklff68b9/image/upload/v1751288074/Screenshot_2025-06-30_182357_dcduhd.png'
      ],
      videos: [],
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
    <>
      <div className="min-h-screen bg-background">
        <SEO
          title="Hotels near YMCA Faridabad | Hotel High View & La Casa Hotel | Budget Hotels Sector 11"
          description="Premium hotels near YMCA Faridabad. Hotel High View from ₹1,500/night, La Casa Hotel from ₹1,000/night. Budget hotels in Sector 11 Faridabad with modern amenities, business facilities."
          keywords="Hotel near YMCA Faridabad, Hotels in Sector 11 Faridabad, Budget hotels in Faridabad Sector 11, High View Hotel Faridabad, La Casa Hotel Faridabad, Hotels near YAMCA University, Business hotels Faridabad, Extended stay hotels, Premium accommodation near YMCA"
          url="https://ashiyanapg.com/hotel-services"
          structuredData={hotelStructuredData}
        />
        
        {/* Enhanced Header with Background Pattern */}
        <section className="relative bg-gradient-to-br from-orange-900 via-red-900 to-pink-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-white hover:bg-white/20 mb-8 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
            
            <div className="text-center animate-fade-in">
              <div className="inline-flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-yellow-400 mr-3 animate-pulse" />
                <Building className="w-12 h-12 text-orange-400" />
                <Sparkles className="w-8 h-8 text-yellow-400 ml-3 animate-pulse" />
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-300 via-yellow-300 to-red-300 bg-clip-text text-transparent animate-scale-in">
                Luxury Hotels
              </h1>
              <p className="text-xl md:text-2xl text-slate-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience World-Class Hospitality near YMCA Faridabad
              </p>
              
              {/* Enhanced Stats Section */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/20 transition-all duration-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 font-semibold">4.7/5 Rating</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/20 transition-all duration-300">
                  <MapPin className="w-5 h-5 mr-2 text-orange-300" />
                  <span className="font-medium">Near YMCA, Sector 11 Faridabad</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/20 transition-all duration-300">
                  <Users className="w-5 h-5 mr-2 text-green-300" />
                  <span className="font-medium">500+ Happy Guests</span>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => window.location.href = 'tel:+919876543210'}
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Book Now - Call Direct
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                  onClick={() => navigate('/contact')}
                >
                  View Rooms & Pricing
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Hotel Selection Tabs */}
        <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Perfect Stay</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Select from our premium hotels, each offering unique experiences and exceptional amenities</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {hotels.map((hotel) => (
                <button
                  key={hotel.id}
                  onClick={() => setSelectedHotel(hotel.id)}
                  className={`group relative px-8 py-4 rounded-2xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedHotel === hotel.id
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-xl'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Building className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-semibold">{hotel.name}</div>
                      <div className="text-xs opacity-75">Starting from {hotel.startingPrice}</div>
                    </div>
                  </div>
                  {selectedHotel === hotel.id && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Detailed Hotel Information */}
        {selectedHotelData && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                {/* Enhanced Hotel Images and Videos */}
                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <LazyImage 
                      src={selectedHotelData.image} 
                      alt={`${selectedHotelData.name} - Premium hotel near YMCA Faridabad`}
                      className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold">{selectedHotelData.name}</h3>
                      <p className="text-sm">{selectedHotelData.location}</p>
                    </div>
                  </div>
                  
                  {/* Enhanced Image Gallery */}
                  <div className="grid grid-cols-3 gap-3">
                    {selectedHotelData.gallery.map((img, idx) => (
                      <div key={idx} className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                        <LazyImage 
                          src={img} 
                          alt={`${selectedHotelData.name} interior view ${idx + 1} - Hotel near YMCA Faridabad`}
                          className="w-full h-28 object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Play className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Video Gallery */}
                  {selectedHotelData.videos && selectedHotelData.videos.length > 0 && (
                    <div className="mt-8">
                      <div className="flex items-center mb-4">
                        <Play className="w-6 h-6 text-orange-600 mr-2" />
                        <h3 className="text-2xl font-bold text-gray-800">Hotel Video Tour</h3>
                      </div>
                      <p className="text-gray-600 mb-6">Take a virtual tour of our premium facilities and rooms</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedHotelData.videos.map((video, idx) => (
                          <div key={idx} className="relative overflow-hidden rounded-xl shadow-lg group">
                            <video 
                              controls 
                              muted
                              className="w-full h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                              preload="metadata"
                              poster={selectedHotelData.image}
                            >
                              <source src={video} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                            <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                              Tour {idx + 1}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Enhanced Hotel Details */}
                <div className="space-y-8">
                  <div className="animate-fade-in">
                    <h2 className="text-4xl font-bold text-gray-800 mb-3">{selectedHotelData.name}</h2>
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 text-orange-500 mr-2" />
                      <span className="text-gray-600 font-medium">{selectedHotelData.location}</span>
                    </div>
                    <div className="flex items-center mb-6">
                      <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-bold text-yellow-700">{selectedHotelData.rating}</span>
                        <span className="text-yellow-600 ml-1 text-sm">Excellent</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{selectedHotelData.description}</p>
                  </div>

                  {/* Enhanced Room Types */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <Bed className="w-6 h-6 text-orange-600 mr-2" />
                      Room Types & Pricing
                    </h3>
                    <div className="space-y-4">
                      {selectedHotelData.roomTypes.map((room, idx) => (
                        <div key={idx} className="flex justify-between items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
                          <div className="flex-1">
                            <h4 className="font-bold text-lg text-gray-800 group-hover:text-orange-600 transition-colors">{room.name}</h4>
                            <p className="text-sm text-gray-500 mb-3">{room.size}</p>
                            <div className="flex flex-wrap gap-2">
                              {room.features.map((feature, fidx) => (
                                <span key={fidx} className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-right ml-6">
                            <div className="text-2xl font-bold text-orange-600 mb-2">{room.price}</div>
                            <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6">
                              Book Now
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Hotel Amenities */}
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <Wine className="w-6 h-6 text-orange-600 mr-2" />
                      Premium Amenities
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedHotelData.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Enhanced All Amenities Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                World-Class Amenities Near YMCA
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience luxury and comfort with our comprehensive range of premium facilities and services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {allAmenities.map((amenity, index) => (
                <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-100 to-red-100 mb-6 group-hover:from-orange-200 group-hover:to-red-200 transition-all duration-300">
                      <amenity.icon className="w-10 h-10 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                      {amenity.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {amenity.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20L0 0v20h20zM0 20v20l20-20H0z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Experience Luxury Near YMCA</h2>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
                Book your stay at our premium hotels near YMCA Faridabad and enjoy world-class hospitality 
                with exceptional amenities and personalized service that exceeds expectations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  onClick={() => window.location.href = 'tel:+919876543210'}
                >
                  <Phone className="mr-3 w-6 h-6" />
                  Call Now - Instant Booking
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-10 py-4 text-lg font-bold transition-all duration-300 hover:scale-105"
                  onClick={() => navigate('/contact')}
                >
                  Get Best Rates
                </Button>
              </div>
              
              <div className="text-center">
                <p className="text-lg opacity-80 mb-2">🌟 Special Offer: Book Direct & Save 15% 🌟</p>
                <p className="text-sm opacity-70">Limited time offer. Terms and conditions apply.</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default HotelServices;
