
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, ArrowRight, MapPin, Users, Shield, Clock, Star, Wifi, Car, Utensils } from 'lucide-react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Sector 11');
  const [counters, setCounters] = useState({ residents: 0, years: 0, satisfaction: 0 });

  const texts = ['Your Home Away From Home', 'Safe & Secure Living', 'Premium PG Experience', 'Comfortable Stays'];
  const locations = ['Sector 11', 'Sector 15', 'Sector 21', 'NIT Area'];

  // Typing animation effect
  useEffect(() => {
    const currentWord = texts[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setCurrentText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  // Counter animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters(prev => ({
        residents: prev.residents < 150 ? prev.residents + 2 : 150,
        years: prev.years < 15 ? prev.years + 1 : 15,
        satisfaction: prev.satisfaction < 97 ? prev.satisfaction + 1 : 97
      }));
    }, 50);

    return () => clearTimeout(timer);
  }, [counters]);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi, I would like to inquire about Ashiyana PG accommodation', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  const features = [
    { icon: Shield, title: 'Safe & Secure', desc: '24/7 Security' },
    { icon: Wifi, title: 'High-Speed WiFi', desc: 'Unlimited Internet' },
    { icon: Utensils, title: 'Healthy Meals', desc: '3 Times Daily' },
    { icon: Car, title: 'Parking', desc: 'Secure Vehicle Parking' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-blue-800/80 z-10"></div>
      
      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading with Typing Animation */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Welcome to <span className="text-orange-400">Ashiyana PG</span>
            </h1>
            <h2 className="text-xl md:text-3xl mb-6 text-blue-100 h-12">
              {currentText}<span className="animate-pulse">|</span>
            </h2>
          </div>

          {/* Interactive Stats Counter */}
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-400">{counters.residents}+</div>
                <div className="text-sm text-blue-100">Happy Residents</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-400">{counters.years}+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-400">{counters.satisfaction}%</div>
                <div className="text-sm text-blue-100">Satisfaction Rate</div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Feature Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110 group"
              >
                <CardContent className="p-4 text-center">
                  <feature.icon className="w-8 h-8 mx-auto mb-2 text-orange-400 group-hover:text-orange-300 transition-colors" />
                  <div className="text-sm font-semibold text-white">{feature.title}</div>
                  <div className="text-xs text-blue-100">{feature.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Interactive Location Selector */}
          <div className="mb-8">
            <p className="text-blue-100 mb-4">Choose Your Preferred Location:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {locations.map((location) => (
                <Button
                  key={location}
                  variant={selectedLocation === location ? "default" : "outline"}
                  className={`transition-all duration-300 hover:scale-105 ${
                    selectedLocation === location 
                      ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                      : 'border-white/50 text-white hover:bg-white/20'
                  }`}
                  onClick={() => setSelectedLocation(location)}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  {location}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Enquire Now 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 group"
              onClick={handleCall}
            >
              <Phone className="mr-2 w-5 h-5 group-hover:animate-pulse" />
              Call Now
            </Button>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={handleWhatsApp}
            >
              WhatsApp
            </Button>
          </div>

          {/* Enhanced Location Badge with Rating */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
            <MapPin className="w-5 h-5 mr-2 text-orange-400" />
            <span className="mr-4">{selectedLocation}, Faridabad</span>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
              <span className="text-sm">4.7/5</span>
            </div>
          </div>

          {/* Interactive Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
