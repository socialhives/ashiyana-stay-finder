
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Wifi, Shield, Utensils, Wind, Car, Shirt } from 'lucide-react';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Rooms = () => {
  const roomTypes = [
    {
      type: 'Single Sharing',
      price: '₹12,000',
      originalPrice: '₹15,000',
      features: ['Private room', 'Attached bathroom', 'Study table & chair', 'Wardrobe', 'Wi-Fi included'],
      popular: false
    },
    {
      type: 'Double Sharing',
      price: '₹8,000',
      originalPrice: '₹10,000',
      features: ['Shared room (2 beds)', 'Attached bathroom', 'Study area', 'Individual wardrobes', 'Wi-Fi included'],
      popular: true
    },
    {
      type: 'Triple Sharing',
      price: '₹6,000',
      originalPrice: '₹8,000',
      features: ['Shared room (3 beds)', 'Common bathroom', 'Study space', 'Storage lockers', 'Wi-Fi included'],
      popular: false
    }
  ];

  const amenities = [
    { icon: Wifi, name: 'High-Speed Wi-Fi', description: 'Unlimited internet access' },
    { icon: Shield, name: '24/7 Security', description: 'CCTV surveillance & security guards' },
    { icon: Utensils, name: 'Home-cooked Meals', description: 'Nutritious vegetarian meals' },
    { icon: Wind, name: 'Air Conditioning', description: 'Climate-controlled comfort' },
    { icon: Car, name: 'Parking Available', description: 'Secure vehicle parking' },
    { icon: Shirt, name: 'Laundry Service', description: 'Weekly washing & ironing' }
  ];

  const handleEnquiry = (roomType: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${roomType} accommodation at Ashiyana PG. Could you please provide more details about availability and booking?`);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Rooms & Pricing</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Choose from our comfortable accommodation options designed for your needs
          </p>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Choose Your Perfect Room
            </h2>
            <p className="text-lg text-gray-600">
              All rooms come with essential amenities and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {roomTypes.map((room, index) => (
              <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${room.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {room.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    {room.type}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-blue-600">{room.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{room.originalPrice}</span>
                    <p className="text-sm text-gray-600 mt-1">per month</p>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => handleEnquiry(room.type)}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Amenities & Services
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for comfortable living
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 text-blue-600">
                    <amenity.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {amenity.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {amenity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What is included in the monthly rent?",
                answer: "Monthly rent includes accommodation, electricity, water, Wi-Fi, security, and basic maintenance. Meals are available at additional cost."
              },
              {
                question: "Is there a security deposit required?",
                answer: "Yes, we require a refundable security deposit equivalent to one month's rent at the time of admission."
              },
              {
                question: "Are meals provided?",
                answer: "Yes, we provide hygienic home-cooked vegetarian meals. Meal plans are available separately at ₹3,000 per month."
              },
              {
                question: "What are the visiting hours?",
                answer: "Visitors are allowed between 10 AM to 8 PM with proper identification and prior intimation to management."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Rooms;
