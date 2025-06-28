
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi, I would like to inquire about Ashiyana PG accommodation', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-orange-400">Ashiyana PG</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-4 text-blue-100">
            Your Home Away From Home
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            15+ years of trusted service in Faridabad. Safe, clean, and affordable stays for men and women.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Enquire Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 text-lg"
              onClick={handleCall}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </Button>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
              onClick={handleWhatsApp}
            >
              WhatsApp
            </Button>
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Sector 11, Faridabad
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
