
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
  Play
} from 'lucide-react';

const HeroSection = () => {
  const [activeTheme, setActiveTheme] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedService, setSelectedService] = useState('pg');

  const colorThemes = [
    {
      name: 'Ocean Blue',
      gradient: 'from-blue-900 via-blue-700 to-teal-600',
      accent: 'blue-500',
      text: 'text-blue-100'
    },
    {
      name: 'Sunset Orange',
      gradient: 'from-orange-900 via-red-700 to-pink-600',
      accent: 'orange-500',
      text: 'text-orange-100'
    },
    {
      name: 'Purple Dream',
      gradient: 'from-purple-900 via-violet-700 to-indigo-600',
      accent: 'purple-500',
      text: 'text-purple-100'
    },
    {
      name: 'Emerald Forest',
      gradient: 'from-emerald-900 via-green-700 to-teal-600',
      accent: 'emerald-500',
      text: 'text-emerald-100'
    }
  ];

  const heroTexts = [
    'Your Premium Hospitality Partner',
    'Luxury Living Redefined',
    'Where Comfort Meets Excellence',
    'Safe, Secure & Stylish'
  ];

  const services = [
    {
      id: 'pg',
      title: 'PG Services',
      subtitle: 'Ashiyana PG',
      icon: Home,
      description: 'Modern paying guest facilities with premium amenities',
      features: ['24/7 Security', 'Free WiFi', 'Meals Included', 'Laundry Service']
    },
    {
      id: 'hotel',
      title: 'Hotel Services', 
      subtitle: 'Luxury Hotels',
      icon: Building,
      description: 'Premium hotel experiences with world-class hospitality',
      features: ['Room Service', 'Concierge', 'Spa & Wellness', 'Fine Dining']
    }
  ];

  const quickStats = [
    { number: '200+', label: 'Happy Guests', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '4.8', label: 'Rating', icon: Star },
    { number: '24/7', label: 'Support', icon: Shield }
  ];

  // Auto-cycle themes every 8 seconds
  useEffect(() => {
    const themeTimer = setInterval(() => {
      setActiveTheme((prev) => (prev + 1) % colorThemes.length);
    }, 8000);
    return () => clearInterval(themeTimer);
  }, []);

  // Auto-cycle hero text every 3 seconds
  useEffect(() => {
    const textTimer = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(textTimer);
  }, []);

  const currentTheme = colorThemes[activeTheme];

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi, I would like to inquire about NST Hospitality services', '_blank');
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    // Simulate video play - in real implementation, you'd open a video modal
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br ${currentTheme.gradient} overflow-hidden transition-all duration-1000 ease-in-out`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Theme Selector */}
          <div className="mb-8 flex justify-center">
            <div className="flex gap-2 bg-white/10 backdrop-blur-sm rounded-full p-2">
              {colorThemes.map((theme, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTheme(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                    activeTheme === index ? 'ring-2 ring-white ring-offset-2 ring-offset-transparent scale-125' : ''
                  }`}
                  style={{
                    background: index === 0 ? '#3b82f6' : 
                               index === 1 ? '#f97316' :
                               index === 2 ? '#8b5cf6' : '#10b981'
                  }}
                  title={theme.name}
                />
              ))}
            </div>
          </div>

          {/* Brand & Dynamic Text */}
          <div className="mb-12 space-y-6">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                NST HOSPITALITY
              </h1>
            </div>
            
            <div className="relative h-16 flex items-center justify-center">
              <h2 className="text-xl md:text-3xl font-semibold text-white/90 animate-fade-in">
                {heroTexts[currentTextIndex]}
              </h2>
            </div>
          </div>

          {/* Interactive Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {services.map((service) => {
              const isActive = selectedService === service.id;
              return (
                <Card 
                  key={service.id}
                  className={`cursor-pointer transition-all duration-500 transform hover:scale-105 border-2 group ${
                    isActive 
                      ? 'bg-white/20 backdrop-blur-md border-white/50 shadow-2xl shadow-white/20' 
                      : 'bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <CardContent className="p-8 text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive ? 'bg-white/30 scale-110' : 'bg-white/20 group-hover:bg-white/25'
                    }`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <h4 className="text-lg text-white/80 mb-4">{service.subtitle}</h4>
                      <p className="text-white/70 text-sm mb-4">{service.description}</p>
                    </div>

                    {isActive && (
                      <div className="grid grid-cols-2 gap-2 animate-fade-in">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="bg-white/10 rounded-lg p-2 text-xs text-white/80">
                            {feature}
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

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

          {/* Interactive CTA Section */}
          <div className="space-y-6">
            {/* Primary Actions */}
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

            {/* Video Play Button */}
            <div className="flex justify-center">
              <button
                onClick={handleVideoPlay}
                className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full px-6 py-3 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 ${isPlaying ? 'animate-pulse' : 'group-hover:bg-white/30'}`}>
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors">
                  {isPlaying ? 'Playing...' : 'Watch Our Story'}
                </span>
              </button>
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
