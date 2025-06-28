
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Users, Luggage } from 'lucide-react';

const QuickInfoGrid = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Sector 11, Faridabad',
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      title: '24x7 Service',
      description: 'Round the clock support',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Unisex Accommodation',
      description: 'Safe stays for all',
      color: 'text-purple-600'
    },
    {
      icon: Luggage,
      title: 'Flexible Stays',
      description: 'Long & Short term',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Ashiyana PG?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience comfort, safety, and convenience with our premium paying guest services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${feature.color}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
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
