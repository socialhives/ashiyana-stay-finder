
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Building, ArrowRight, Users, Shield, Wifi, Utensils } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServiceSelection = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'pg',
      title: 'PG Services',
      subtitle: 'Ashiyana PG',
      icon: Home,
      description: 'Premium paying guest accommodation with all modern amenities for comfortable living',
      features: ['Safe & Secure', 'Quality Food', 'High-Speed WiFi', 'Laundry Service'],
      color: 'from-blue-500 to-purple-600',
      route: '/pg-services'
    },
    {
      id: 'hotel',
      title: 'Hotel Services',
      subtitle: 'Luxury Hotels',
      icon: Building,
      description: 'Premium hotel experiences with world-class facilities and exceptional service',
      features: ['Hotel High View', 'LA Casa Residence', 'Premium Amenities', '24/7 Service'],
      color: 'from-orange-500 to-red-600',
      route: '/hotel-services'
    }
  ];

  const handleServiceSelect = (route: string) => {
    navigate(route);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Choose Your Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the service that best fits your needs - whether you're looking for 
            comfortable PG accommodation or luxury hotel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card 
              key={service.id}
              className="group cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-0 overflow-hidden"
              onClick={() => handleServiceSelect(service.route)}
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${service.color} text-white mr-4`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                    <h4 className="text-lg text-gray-600">{service.subtitle}</h4>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white py-3 text-lg font-semibold group-hover:shadow-lg transition-all duration-300`}
                >
                  Explore {service.title}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSelection;
