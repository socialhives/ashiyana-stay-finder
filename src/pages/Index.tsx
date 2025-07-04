
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
    "name": "NST Hospitality - Ashiyana PG",
    "description": "Premium Paying Guest accommodation near YMCA Faridabad & J.C. Bose University. Safe girls PG, boys hostel in Sector 11 with modern amenities, food service, and 24/7 security.",
    "image": "/lovable-uploads/01e14e88-9d7a-42c7-b510-a1e985d0d302.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near YMCA Chowk, Sector 11",
      "addressLocality": "Faridabad",
      "addressRegion": "Haryana",
      "postalCode": "121006",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.4089",
      "longitude": "77.3178"
    },
    "telephone": "+91-9870366759",
    "email": "nsthospitality75@gmail.com",
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
      "name": "Accommodation Services Near YMCA Faridabad",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Girls PG near YMCA Faridabad",
            "description": "Safe and secure PG accommodation for girls near YMCA with modern amenities"
          },
          "price": "14000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Boys PG near YAMCA University",
            "description": "Comfortable hostel accommodation for boys near YAMCA University"
          },
          "price": "12000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hotel near YMCA Faridabad",
            "description": "Premium hotel rooms near YMCA with luxury amenities"
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
        "name": "Food Service",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Laundry",
        "value": true
      }
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "paymentAccepted": ["Cash", "Credit Card", "UPI"],
    "foundingDate": "2008",
    "nearbyAttractions": [
      "YMCA Faridabad",
      "J.C. Bose University",
      "YAMCA University",
      "NST Hospital Faridabad"
    ],
    "employee": {
      "@type": "Person",
      "name": "NST Hospitality Management"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Best PG near YMCA Faridabad | Ashiyana PG - Girls & Boys Hostel | NST Hospitality"
        description="Premium PG near YMCA Faridabad & J.C. Bose University. Safe girls PG, boys hostel in Sector 11. Ashiyana PG with hygienic food, WiFi, parking. Best accommodation near YAMCA University."
        keywords="PG near YMCA Faridabad, PG near YAMCA University, Girls PG near YMCA Faridabad, Safe PG near YAMCA, Hostel near YMCA Faridabad, Ashiyana PG Faridabad, PG near J.C. Bose University Faridabad, NST Hospitality PG, Best PG services in Faridabad, Secure PG with parking, Hygienic homemade meals PG, Women-friendly PG accommodation"
        url="https://ashiyanapg.com"
        structuredData={homeStructuredData}
      />
      
      <HeroSection />
      
      {/* Enhanced Ratings Summary with new PG images showcase */}
      <section className="py-12 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-2xl font-bold text-gray-800 ml-2">4.7</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">NST Hospitality Excellence Near YMCA</h2>
            <p className="text-gray-600 mb-6">Based on 114+ happy clients across our PG and Hotel services near YMCA Faridabad</p>
            
            {/* Service Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">PG Residents near YMCA</div>
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

            {/* Real PG Images Showcase */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Premium PG Facilities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                  <img 
                    src="/lovable-uploads/756b6f0b-d58b-4962-af4d-d5240ab37b44.png" 
                    alt="Common Dining Area - Ashiyana PG near YMCA Faridabad" 
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Dining Area</span>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                  <img 
                    src="/lovable-uploads/7eb735fd-43ea-4c63-976b-2a15047b7527.png" 
                    alt="Double Sharing Room - PG near YMCA Faridabad" 
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Double Room</span>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                  <img 
                    src="/lovable-uploads/73cfd608-d3d1-4d41-894a-33157979323f.png" 
                    alt="Single Room with Study Table - Best PG near YMCA" 
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Single Room</span>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                  <img 
                    src="/lovable-uploads/0224908a-970e-4d34-a29f-281b287d6f97.png" 
                    alt="Modern Bathroom - Girls PG near YMCA Faridabad" 
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Bathroom</span>
                  </div>
                </div>
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
