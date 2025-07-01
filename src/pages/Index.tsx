
import React from 'react';
import { ArrowRight, Phone, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import QuickInfoGrid from '@/components/QuickInfoGrid';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import AboutPreview from '@/components/AboutPreview';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ServiceSelection from '@/components/ServiceSelection';
import SEO from '@/components/SEO';

const Index = () => {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Ashiyana PG",
    "description": "Premium Paying Guest accommodation in Sector 11, Faridabad with 15+ years of trusted service. Safe, clean & affordable PG with modern amenities.",
    "image": "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 11",
      "addressLocality": "Faridabad",
      "addressRegion": "Haryana",
      "postalCode": "121006",
      "addressCountry": "IN"
    },
    "telephone": "+91-9876543210",
    "url": "https://ashiyanapg.com",
    "priceRange": "₹6,000 - ₹12,000",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4.7",
      "bestRating": "5"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "114"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Accommodation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Single Occupancy PG",
            "description": "Private room with attached bathroom and modern amenities"
          },
          "price": "12000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Double Sharing PG",
            "description": "Shared room with common facilities and study area"
          },
          "price": "8000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hotel Rooms",
            "description": "Premium hotel accommodation with luxury amenities"
          },
          "price": "1500",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "WiFi",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Security",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Laundry",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Food Service",
        "value": true
      }
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "paymentAccepted": ["Cash", "Credit Card", "UPI"],
    "foundingDate": "2008",
    "employee": {
      "@type": "Person",
      "name": "Ashiyana PG Management"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Ashiyana PG - Best Paying Guest Accommodation in Sector 11, Faridabad | 15+ Years Trusted Service"
        description="Premium PG accommodation in Faridabad with safe, clean rooms. Single & double sharing options from ₹6,000. Modern amenities, 24/7 security, WiFi, food service. Book now!"
        keywords="PG in Faridabad, Paying Guest Faridabad, Accommodation Faridabad, Ashiyana PG, Sector 11 PG, Student PG Faridabad, Working Professional PG, Safe PG for girls, Boys PG Faridabad, Hotels in Faridabad"
        url="https://ashiyanapg.com"
        structuredData={homeStructuredData}
      />
      
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
            <h2 className="text-xl font-semibold text-gray-800 mb-2">NST Hospitality Excellence</h2>
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

      <ServiceSelection />
      <QuickInfoGrid />
      <AboutPreview />
      <TestimonialsSlider />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
