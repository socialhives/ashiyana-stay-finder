
import React, { useState, useEffect } from 'react';
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
  Eye,
  Calendar,
  Camera,
  CheckCircle,
  Sparkles,
  Zap,
  Award,
  BadgeCheck
} from 'lucide-react';

const HeroSection = () => {
  const [selectedService, setSelectedService] = useState('ashiyana-boys');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animationTrigger, setAnimationTrigger] = useState(false);

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
      category: 'pg',
      highlights: ['Study Tables', 'AC Rooms', 'Laundry Service', 'Security Cameras']
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
      category: 'pg',
      highlights: ['Women Safety', 'CCTV Monitoring', 'Warden Available', 'Nutritious Meals']
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
      category: 'hotel',
      highlights: ['City View', 'Restaurant', 'Parking', 'Conference Room']
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
      category: 'hotel',
      highlights: ['Elegant Design', 'Premium Service', 'Modern Facilities', 'Great Location']
    }
  ];

  const testimonials = [
    { name: 'Priya Sharma', text: 'Amazing experience at Ashiyana PG! Safe and comfortable.', rating: 5 },
    { name: 'Rohit Kumar', text: 'Great facilities and friendly staff. Highly recommended!', rating: 5 },
    { name: 'Anjali Patel', text: 'Perfect location near YMCA. Clean and well-maintained.', rating: 4 },
  ];

  const quickStats = [
    { number: '200+', label: 'Happy Guests', icon: Users, color: 'text-blue-400' },
    { number: '15+', label: 'Years Experience', icon: Clock, color: 'text-green-400' },
    { number: '4.8', label: 'Rating', icon: Star, color: 'text-yellow-400' },
    { number: '24/7', label: 'Support', icon: Shield, color: 'text-purple-400' }
  ];

  const achievements = [
    { icon: Award, label: 'Best PG Award 2023', count: '1st' },
    { icon: BadgeCheck, label: 'Verified by Authorities', count: '100%' },
    { icon: Sparkles, label: 'Customer Satisfaction', count: '98%' },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Trigger animations on mount
  useEffect(() => {
    setAnimationTrigger(true);
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:+919870366759';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919870366759?text=Hi, I would like to inquire about NST Hospitality services', '_blank');
  };

  const handleBookNow = () => {
    // Trigger booking modal or redirect
    console.log('Booking initiated for:', selectedService);
  };

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-slate-800 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
        
        {/* Floating Gradient Orbs with Animation */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Moving Background Shapes */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-bounce"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s',
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Enhanced Brand Header with Animation */}
          <div className={`mb-12 space-y-6 transition-all duration-1000 ${animationTrigger ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-4 mb-6 group">
              <div className="w-16 h-16 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                <Building className="w-8 h-8 text-white group-hover:text-yellow-300 transition-colors" />
              </div>
              <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent hover:from-yellow-200 hover:to-white transition-all duration-500">
                NST HOSPITALITY
              </h1>
            </div>
            
            <h2 className="text-xl md:text-3xl font-semibold text-white/90 animate-fade-in">
              Your Premium Hospitality Partner
            </h2>

            {/* Interactive Achievement Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 flex items-center gap-2 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <achievement.icon className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{achievement.label}</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{achievement.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Service Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 group ${
                  selectedService === service.id
                    ? 'bg-gradient-to-r from-white to-gray-100 text-gray-900 shadow-lg transform scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2">
                  <service.icon className="w-4 h-4" />
                  {service.title}
                  {selectedService === service.id && (
                    <CheckCircle className="w-4 h-4 text-green-600 animate-pulse" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Enhanced Service Details with Hover Effects */}
          {selectedServiceData && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
              {/* Interactive Service Info Card */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-white/20 to-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <selectedServiceData.icon className="w-8 h-8 text-white group-hover:text-yellow-300 transition-colors" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors">
                      {selectedServiceData.title}
                    </h3>
                    <h4 className="text-lg text-white/80 mb-4">{selectedServiceData.subtitle}</h4>
                    <p className="text-white/70 text-sm mb-4">{selectedServiceData.description}</p>
                    <div className="text-2xl font-bold text-yellow-400 mb-4 animate-pulse">
                      {selectedServiceData.price}
                    </div>
                  </div>

                  {/* Interactive Features Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {selectedServiceData.features.map((feature, idx) => (
                      <div key={idx} className="bg-white/10 rounded-lg p-3 text-xs text-white/80 hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/30">
                        <div className="flex items-center gap-2">
                          <Zap className="w-3 h-3 text-green-400" />
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Service Highlights */}
                  <div className="mt-4">
                    <h5 className="text-sm font-semibold text-white/90 mb-2">Premium Features:</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedServiceData.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-white/90 px-2 py-1 rounded-full text-xs border border-white/20">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="flex gap-2 mt-4">
                    <Button 
                      size="sm" 
                      className="bg-green-600 hover:bg-green-700 text-white flex-1 hover:scale-105 transition-all duration-300"
                      onClick={handleBookNow}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-white/50 text-white hover:bg-white hover:text-gray-900 flex-1 hover:scale-105 transition-all duration-300"
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      Gallery
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced 360° Virtual Tour */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 animate-pulse">
                      <Eye className="w-3 h-3" />
                      360° Virtual Tour
                    </div>
                    
                    {/* Interactive Tour Controls */}
                    <div className="absolute top-4 right-4 z-10 flex gap-2">
                      <button 
                        className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
                        onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                      >
                        <Play className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <iframe 
                      src={selectedServiceData.virtualTour}
                      width="100%" 
                      height="400" 
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
                      <p className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        Click and drag to explore the virtual tour
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Animated Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
            {quickStats.map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110 group">
                <CardContent className="p-4 text-center space-y-2">
                  <stat.icon className={`w-6 h-6 mx-auto ${stat.color} group-hover:scale-125 transition-all duration-300`} />
                  <div className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Interactive Testimonial Carousel */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white/90 italic mb-4 text-lg">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-white/70 font-semibold">
                - {testimonials[currentTestimonial].name}
              </p>
              
              {/* Testimonial Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-white to-gray-100 text-gray-900 hover:from-yellow-200 hover:to-white px-8 py-4 text-lg transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
              
              <div className="flex gap-3">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/50 text-white hover:bg-white hover:text-gray-900 px-6 py-4 text-lg transform hover:scale-110 transition-all duration-300 group backdrop-blur-sm hover:shadow-xl"
                  onClick={handleCall}
                >
                  <Phone className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                  Call Now
                </Button>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-4 text-lg transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={handleWhatsApp}
                >
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Interactive Location & Rating */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white/80 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group hover:scale-105">
                <MapPin className="w-4 h-4 mr-2 group-hover:text-red-400 transition-colors" />
                <span className="text-sm font-medium">Faridabad, Haryana</span>
              </div>
              
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white/80 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group hover:scale-105">
                <div className="flex items-center mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current group-hover:scale-110 transition-transform" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <span className="text-sm font-medium">4.8/5 Rating</span>
                <Heart className="w-4 h-4 ml-2 group-hover:text-red-400 group-hover:scale-110 transition-all" />
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group" onClick={() => window.scrollBy(0, window.innerHeight)}>
            <div className="flex flex-col items-center gap-2 text-white/60 group-hover:text-white/80 transition-colors">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/50 transition-colors">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse group-hover:bg-white/70 transition-colors"></div>
              </div>
              <span className="text-xs font-medium">Scroll to explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
