
import React from 'react';
import { ArrowRight, Phone, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import QuickInfoGrid from '@/components/QuickInfoGrid';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import AboutPreview from '@/components/AboutPreview';
import RoomTour from '@/components/RoomTour';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Ratings Summary */}
      <section className="py-8 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-lg font-semibold">4.7</span>
          </div>
          <p className="text-gray-600">Based on 114+ happy residents</p>
        </div>
      </section>

      <QuickInfoGrid />
      <RoomTour />
      <AboutPreview />
      <TestimonialsSlider />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
