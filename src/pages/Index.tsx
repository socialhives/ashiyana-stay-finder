
import React from 'react';
import { ArrowRight, Phone, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import QuickInfoGrid from '@/components/QuickInfoGrid';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import AboutPreview from '@/components/AboutPreview';
import RoomTour from '@/components/RoomTour';
import VirtualTour360 from '@/components/VirtualTour360';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Enhanced Ratings Summary */}
      <section className="py-12 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-2xl font-bold text-gray-800 ml-2">4.7</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">NST Hospitality Excellence</h3>
            <p className="text-gray-600 mb-6">Based on 114+ happy clients across our PG and Hotel services</p>
            
            {/* Service Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">PG Residents</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-purple-600">2</div>
                <div className="text-sm text-gray-600">Premium Hotels</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-green-600">100+</div>
                <div className="text-sm text-gray-600">Hotel Guests</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuickInfoGrid />
      <VirtualTour360 />
      <RoomTour />
      <AboutPreview />
      <TestimonialsSlider />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
