
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Users, Luggage, Shield, Wifi, Utensils, Car } from 'lucide-react';

const QuickInfoGrid = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Sector 11, Faridabad',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      details: 'Located in the heart of Faridabad with easy access to metro stations, shopping centers, and business districts. Perfect connectivity to Delhi and NCR region.'
    },
    {
      icon: Clock,
      title: '24x7 Service',
      description: 'Round the clock support',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      details: 'Our dedicated staff is available 24/7 to assist you with any needs. From maintenance requests to emergency support, we are always here for you.'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'CCTV surveillance & security',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      details: 'Complete security with CCTV monitoring, secure entry systems, and 24/7 security personnel. Your safety is our top priority.'
    },
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Unlimited WiFi access',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      details: 'Enjoy blazing fast internet connectivity perfect for work, study, and entertainment. Multiple access points ensure strong signal throughout the property.'
    }
  ];

  const additionalFeatures = [
    { icon: Users, title: 'Community Living', description: 'Social spaces & events' },
    { icon: Utensils, title: 'Quality Food', description: 'Hygienic homemade meals' },
    { icon: Car, title: 'Parking Available', description: 'Secure vehicle parking' },
    { icon: Luggage, title: 'Flexible Stays', description: 'Long & Short term options' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose NST Hospitality?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience comfort, safety, and convenience with our premium services
          </p>
        </div>

        {/* Interactive Feature Showcase */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Feature Image */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img 
                src={features[selectedFeature].image} 
                alt={features[selectedFeature].title}
                className="w-full h-80 object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{features[selectedFeature].title}</h3>
                <p className="text-white/90">{features[selectedFeature].details}</p>
              </div>
            </div>

            {/* Feature Selection */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedFeature === index 
                      ? 'ring-2 ring-blue-500 shadow-lg scale-105' 
                      : 'hover:scale-102'
                  }`}
                  onClick={() => setSelectedFeature(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${feature.bgColor} ${feature.color}`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        selectedFeature === index ? 'bg-blue-500' : 'bg-gray-300'
                      }`}></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md group cursor-pointer hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickInfoGrid;
