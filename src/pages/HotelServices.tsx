
import React from 'react';
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
  Bath
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const HotelServices = () => {
  const navigate = useNavigate();

  const hotels = [
    {
      name: 'Hotel High View',
      location: 'Premium Location, Faridabad',
      rating: 4.8,
      description: 'Experience luxury and comfort at our flagship hotel with premium amenities and exceptional service.',
      features: ['Premium Rooms', 'Restaurant', 'Conference Hall', 'Valet Parking'],
      startingPrice: '₹3,500/night'
    },
    {
      name: 'LA Casa Residence',
      location: 'Luxury Suites, Faridabad',
      rating: 4.7,
      description: 'Elegant suites designed for extended stays with home-like comfort and hotel-quality service.',
      features: ['Luxury Suites', 'Kitchenette', 'Business Center', 'Gym Access'],
      startingPrice: '₹4,200/night'
    }
  ];

  const amenities = [
    { icon: Wifi, title: 'High-Speed WiFi', description: 'Complimentary internet access' },
    { icon: Car, title: 'Valet Parking', description: 'Secure vehicle parking service' },
    { icon: Utensils, title: 'Fine Dining', description: 'Multi-cuisine restaurant' },
    { icon: Shield, title: '24/7 Security', description: 'Round-the-clock security' },
    { icon: Coffee, title: 'Room Service', description: '24-hour room service' },
    { icon: Tv, title: 'Entertainment', description: 'Premium TV channels' },
    { icon: Bath, title: 'Spa Services', description: 'Relaxation and wellness' },
    { icon: Users, title: 'Concierge', description: 'Personal assistance service' }
  ];

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

      {/* Hotels */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Premium Hotels
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {hotels.map((hotel, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-orange-500 to-red-600"></div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{hotel.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-semibold">{hotel.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{hotel.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {hotel.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {hotel.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 mr-3"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">Starting from</span>
                      <div className="text-2xl font-bold text-orange-600">{hotel.startingPrice}</div>
                    </div>
                    <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Luxury Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
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
