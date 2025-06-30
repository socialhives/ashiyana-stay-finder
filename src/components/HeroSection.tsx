
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Phone, 
  ArrowRight, 
  MapPin, 
  Star, 
  Wifi, 
  Car, 
  Utensils, 
  Building, 
  Home,
  Shield,
  Users,
  Clock,
  Heart,
  Play,
  Eye
} from 'lucide-react';

const HeroSection = () => {
  const [selectedService, setSelectedService] = useState('ashiyana-boys');

  const services = [
    {
      id: 'ashiyana-boys',
      title: 'Ashiyana PG - Boys',
      subtitle: 'Faridabad Sector 11',
      icon: Home,
      description: 'Modern paying guest facilities for boys with premium amenities',
      features: ['24×7 Availability', 'Food & Wi-Fi Included', 'Safe Environment', 'Affordable Rooms'],
      price: '₹6,500/month',
      virtualTour: 'https://www.google.com/maps/embed?pb=!4v1751213104768!6m8!1m7!1sDmf-NLSvLKjcw4VI5OPrBg!2m2!1d28.37242671307965!2d77.31701542750908!3f179.46771648654584!4f-2.6347485845922165!5f0.7820865974627469',
      category: 'pg'
    },
    {
      id: 'ashiyana-girls',
      title: 'Shree ji Girls PG',
      subtitle: 'Faridabad Sector 11',
      icon: Home,
      description: 'Secure and comfortable accommodation exclusively for girls',
      features: ['24×7 Security', 'Food & Wi-Fi Included', 'Girls Only', 'Safe Environment'],
      price: '₹7,500/month',
      virtualTour: 'https://www.google.com/maps/embed?pb=!4v1751284546039!6m8!1m7!1sKmpIZZ1QouzUiquGJ5a_Jw!2m2!1d28.36901273072034!2d77.31719588996407!3f6.082243843581333!4f32.700283243794814!5f0.4000000000000002',
      category: 'pg'
    },
    {
      id: 'hotel-high-view',
      title: 'Hotel High View',
      subtitle: 'Premium Location',
      icon: Building,
      description: 'Premium hotel experience with world-class facilities',
      features: ['Basic: ₹1,500', 'Standard: ₹2,000', 'Premium: ₹2,500', 'Room Service'],
      price: 'Starting ₹1,500/night',
      virtualTour: 'https://www.google.com/maps/embed?pb=!4v1751213579389!6m8!1m7!1sWLnwIKMutcmsRsq-D5se8w!2m2!1d28.36873826141216!2d77.31457806147561!3f280.0104165379419!4f-5.018538503390701!5f0.7820865974627469',
      category: 'hotel'
    },
    {
      id: 'la-casa-hotel',
      title: 'La Casa Hotel',
      subtitle: 'Luxury Accommodation',
      icon: Building,
      description: 'Elegant hotel with comfortable rooms and excellent service',
      features: ['Normal: ₹1,000', 'Super Deluxe: ₹1,500', 'Quality Service', 'Modern Amenities'],
      price: 'Starting ₹1,000/night',
      virtualTour: 'https://www.google.com/maps/embed?pb=!4v1751213618963!6m8!1m7!1sR5mHxyypiMT4JIEIxIQpUA!2m2!1d28.36857648635734!2d77.31687475599934!3f2.3960502838757476!4f4.761660405021786!5f0.5138692359333277',
      category: 'hotel'
    }
  ];

  const quickStats = [
    { number: '200+', label: 'Happy Guests', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '4.8', label: 'Rating', icon: Star },
    { number: '24/7', label: 'Support', icon: Shield }
  ];

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi, I would like to inquire about NST Hospitality services', '_blank');
  };

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-slate-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Brand Header */}
          <div className="mb-12 space-y-6">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                NST HOSPITALITY
              </h1>
            </div>
            
            <h2 className="text-xl md:text-3xl font-semibold text-white/90">
              Your Premium Hospitality Partner
            </h2>
          </div>

          {/* Service Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedService === service.id
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Selected Service Details */}
          {selectedServiceData && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
              {/* Service Info Card */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/20 flex items-center justify-center">
                    <selectedServiceData.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedServiceData.title}</h3>
                    <h4 className="text-lg text-white/80 mb-4">{selectedServiceData.subtitle}</h4>
                    <p className="text-white/70 text-sm mb-4">{selectedServiceData.description}</p>
                    <div className="text-2xl font-bold text-yellow-400 mb-4">{selectedServiceData.price}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {selectedServiceData.features.map((feature, idx) => (
                      <div key={idx} className="bg-white/10 rounded-lg p-2 text-xs text-white/80">
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 360° Virtual Tour */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
                      <Eye className="w-3 h-3" />
                      360° Virtual Tour
                    </div>
                    
                    <iframe 
                      src={selectedServiceData.virtualTour}
                      width="100%" 
                      height="400" 
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
            {quickStats.map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105 group">
                <CardContent className="p-4 text-center space-y-2">
                  <stat.icon className="w-6 h-6 mx-auto text-white/80 group-hover:text-white transition-colors" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex gap-3">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/50 text-white hover:bg-white hover:text-gray-900 px-6 py-4 text-lg transform hover:scale-105 transition-all duration-300 group backdrop-blur-sm"
                  onClick={handleCall}
                >
                  <Phone className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                  Call
                </Button>
                
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={handleWhatsApp}
                >
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Location & Rating */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Faridabad, Haryana</span>
              </div>
              
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm">4.8/5 Rating</span>
                <Heart className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-white/60">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
              </div>
              <span className="text-xs">Scroll to explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
