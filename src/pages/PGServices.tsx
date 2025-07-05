
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Shield, 
  Wifi, 
  Utensils, 
  Car, 
  Shirt, 
  Users,
  MapPin,
  Phone,
  Star,
  ArrowLeft,
  Bed,
  Bath,
  Table,
  Tv,
  AirVent,
  Clock,
  CheckCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SEO from '@/components/SEO';
import LazyImage from '@/components/LazyImage';

const PGServices = () => {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState('single');

  const pgStructuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@graph": [
      {
        "@type": "LodgingBusiness",
        "name": "Ashiyana PG Services - Near YMCA Faridabad",
        "description": "Premium Paying Guest accommodation near YMCA Faridabad & J.C. Bose University. Safe girls PG and boys hostel in Sector 11 with single, double, and triple sharing options.",
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
        "priceRange": "₹6,000 - ₹14,000",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "PG Room Types Near YMCA",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Accommodation",
                "name": "Girls PG near YMCA Faridabad - Single Room",
                "description": "Safe single occupancy room for girls near YMCA with attached bathroom, study table, and security"
              },
              "price": "14000",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Accommodation",
                "name": "Boys PG near YAMCA University - Single Room",
                "description": "Private room for boys near YAMCA University with modern amenities"
              },
              "price": "12000",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Accommodation",
                "name": "Affordable PG near YMCA - Double Sharing",
                "description": "Budget-friendly double sharing room near YMCA with all facilities"
              },
              "price": "8000",
              "priceCurrency": "INR"
            }
          ]
        },
        "nearbyAttractions": [
          "YMCA Faridabad",
          "J.C. Bose University",
          "YAMCA University",
          "NST Hospital"
        ]
      }
    ]
  };

  const amenities = [
    { icon: Shield, title: 'Safe & Secure', description: '24/7 Security with CCTV surveillance near YMCA' },
    { icon: Wifi, title: 'High-Speed WiFi', description: 'Unlimited internet access for students' },
    { icon: Utensils, title: 'Hygienic Food', description: 'Homemade meals with quality ingredients' },
    { icon: Car, title: 'Secure Parking', description: 'Safe vehicle parking near YMCA' },
    { icon: Shirt, title: 'Laundry Service', description: 'Professional laundry and cleaning' },
    { icon: Users, title: 'Community Living', description: 'Recreation and study rooms for students' }
  ];

  const roomTypes = [
    {
      id: 'single',
      type: 'Single Occupancy',
      price: '₹12,000/month',
      features: ['Private room', 'Attached bathroom', 'Study table', 'Wardrobe', 'AC/Fan', 'Personal fridge'],
      image: '/lovable-uploads/76ecccdc-8b05-4b94-828c-ca74a52ded29.png',
      gallery: [
        '/lovable-uploads/76ecccdc-8b05-4b94-828c-ca74a52ded29.png',
        '/lovable-uploads/d2e81994-33c9-4244-9c08-b2a9f428a0a2.png',
        '/lovable-uploads/ae0aa781-5191-4b8e-8617-6be7e0fe137e.png'
      ],
      specifications: {
        'Room Size': '120 sq ft',
        'Bed Type': 'Single bed with mattress',
        'Storage': '3-door wardrobe',
        'Study Area': 'Dedicated study table with chair',
        'Bathroom': 'Attached with geyser',
        'Power': '24/7 electricity with backup'
      }
    },
    {
      id: 'double',
      type: 'Double Sharing',
      price: '₹8,000/month',
      features: ['Shared room', 'Common bathroom', 'Study area', 'Storage space', 'AC/Fan', 'Shared fridge'],
      image: '/lovable-uploads/8cc97668-300d-4161-876b-eccafc0f5581.png',
      gallery: [
        '/lovable-uploads/8cc97668-300d-4161-876b-eccafc0f5581.png',
        '/lovable-uploads/e428ce6a-6c67-4897-a4e5-8d2396ab3c0f.png',
        '/lovable-uploads/902a6c82-49b3-49bd-b657-2579d915c07b.png'
      ],
      specifications: {
        'Room Size': '180 sq ft',
        'Bed Type': 'Two single beds with mattresses',
        'Storage': '2 separate wardrobes',
        'Study Area': 'Two study tables with chairs',
        'Bathroom': 'Shared with 2 other rooms',
        'Power': '24/7 electricity with backup'
      }
    },
    {
      id: 'triple',
      type: 'Triple Sharing',
      price: '₹6,000/month',
      features: ['Shared room', 'Common facilities', 'Basic amenities', 'Budget-friendly', 'Fan', 'Shared fridge'],
      image: '/lovable-uploads/b196ce8e-14de-499e-a1ce-8b1b41fb5179.png',
      gallery: [
        '/lovable-uploads/b196ce8e-14de-499e-a1ce-8b1b41fb5179.png',
        '/lovable-uploads/a73d69c1-b4ed-4748-ac3e-0276a64faea6.png',
        '/lovable-uploads/b2bb4ec2-391a-4097-8776-ea960b7fd99f.png'
      ],
      specifications: {
        'Room Size': '200 sq ft',
        'Bed Type': 'Three single beds with mattresses',
        'Storage': '3 separate lockers',
        'Study Area': 'Common study room access',
        'Bathroom': 'Shared with 4 other rooms',
        'Power': '24/7 electricity with backup'
      }
    }
  ];

  const selectedRoomData = roomTypes.find(room => room.id === selectedRoom);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Best PG near YMCA Faridabad | Girls & Boys Hostel | Ashiyana PG Services"
        description="Premium PG near YMCA Faridabad & J.C. Bose University. Safe girls PG from ₹14,000, boys hostel from ₹12,000. Fully furnished rooms with food, WiFi, security near YAMCA University."
        keywords="PG near YMCA Faridabad, Girls PG near YMCA Faridabad, Safe PG near YAMCA, Hostel near YMCA Faridabad, PG near J.C. Bose University Faridabad, Affordable PG near YMCA University, Best PG near YAMCA Sector 6, Ashiyana PG Faridabad, NST Hospitality PG, Fully furnished PG Faridabad, PG with food and parking, Women-friendly PG accommodation, Community living PG Faridabad"
        url="https://ashiyanapg.com/pg-services"
        structuredData={pgStructuredData}
      />
      
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
              Premium PG near YMCA Faridabad & J.C. Bose University
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
                <span>Near YMCA Chowk, Sector 11</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Selection Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {roomTypes.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(room.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedRoom === room.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {room.type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Room Information */}
      {selectedRoomData && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Room Images */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <LazyImage 
                    src={selectedRoomData.image} 
                    alt={`${selectedRoomData.type} - Premium PG accommodation near YMCA Faridabad`}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {selectedRoomData.gallery.map((img, idx) => (
                    <div key={idx} className="relative overflow-hidden rounded-lg shadow-md">
                      <LazyImage 
                        src={img} 
                        alt={`${selectedRoomData.type} interior view ${idx + 1} - Ashiyana PG near YMCA`}
                        className="w-full h-24 object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Room Details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedRoomData.type}</h2>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{selectedRoomData.price}</div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {selectedRoomData.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Specifications */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Room Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(selectedRoomData.specifications).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-sm text-gray-500 font-medium">{key}</span>
                        <span className="text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  Book This Room
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Premium Amenities Near YMCA
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
          <h2 className="text-4xl font-bold mb-6">Ready to Move In Near YMCA?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience comfortable and secure living at Ashiyana PG near YMCA Faridabad. 
            Perfect for students of J.C. Bose University and YAMCA University.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4"
              onClick={() => window.location.href = 'tel:+919870366759'}
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
