
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Shield, 
  Wifi, 
  Utensils, 
  Car, 
  Washing, 
  Users,
  MapPin,
  Phone,
  Star,
  ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const PGServices = () => {
  const navigate = useNavigate();

  const amenities = [
    { icon: Shield, title: 'Safe & Secure', description: '24/7 Security with CCTV surveillance' },
    { icon: Wifi, title: 'High-Speed WiFi', description: 'Unlimited internet access' },
    { icon: Utensils, title: 'Quality Food', description: 'Hygienic homemade meals' },
    { icon: Car, title: 'Parking', description: 'Secure vehicle parking' },
    { icon: Washing, title: 'Laundry', description: 'Professional laundry service' },
    { icon: Users, title: 'Common Areas', description: 'Recreation and study rooms' }
  ];

  const roomTypes = [
    {
      type: 'Single Occupancy',
      price: '₹12,000/month',
      features: ['Private room', 'Attached bathroom', 'Study table', 'Wardrobe']
    },
    {
      type: 'Double Sharing',
      price: '₹8,000/month',
      features: ['Shared room', 'Common bathroom', 'Study area', 'Storage space']
    },
    {
      type: 'Triple Sharing',
      price: '₹6,000/month',
      features: ['Shared room', 'Common facilities', 'Basic amenities', 'Budget-friendly']
    }
  ];

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

      {/* Room Types & Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Room Types & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {roomTypes.map((room, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{room.type}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-6">{room.price}</div>
                  <ul className="space-y-3 mb-8">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Book Now
                  </Button>
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
