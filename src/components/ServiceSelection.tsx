
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Building, ArrowRight, Users, Shield, Wifi, Utensils, Star, MapPin, Eye, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServiceSelection = () => {
  const navigate = useNavigate();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      id: 'pg',
      title: 'PG Services',
      subtitle: 'Ashiyana PG',
      icon: Home,
      description: 'Premium paying guest accommodation with all modern amenities for comfortable living',
      features: ['Safe & Secure', 'Quality Food', 'High-Speed WiFi', 'Laundry Service'],
      color: 'from-blue-500 to-purple-600',
      route: '/pg-services',
      price: 'Starting ₹6,000/month',
      rating: '4.8',
      residents: '200+',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      highlights: ['Boys & Girls Separate', '24/7 Security', 'Home-style Food', 'Study Rooms']
    },
    {
      id: 'hotel',
      title: 'Hotel Services',
      subtitle: 'Luxury Hotels',
      icon: Building,
      description: 'Premium hotel experiences with world-class facilities and exceptional service',
      features: ['Hotel High View', 'LA Casa Residence', 'Premium Amenities', '24/7 Service'],
      color: 'from-orange-500 to-red-600',
      route: '/hotel-services',
      price: 'Starting ₹1,000/night',
      rating: '4.6',
      residents: '1000+',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      highlights: ['Multiple Locations', 'Room Service', 'Conference Rooms', 'Parking Available']
    }
  ];

  const handleServiceSelect = (route: string) => {
    navigate(route);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Choose Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Perfect Stay</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Whether you're looking for long-term comfortable PG accommodation or short-term luxury hotel experiences, 
            we have the perfect solution tailored to your needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <Card 
              key={service.id}
              className="group cursor-pointer transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border-0 overflow-hidden bg-white/90 backdrop-blur-sm"
              onClick={() => handleServiceSelect(service.route)}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              
              {/* Main Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Overlay Info */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-sm">{service.rating}</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-lg bg-gradient-to-r ${service.color} text-white text-sm font-medium`}>
                    {service.residents} Guests
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-full p-4 hover:bg-white/30 transition-colors">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                    <p className="text-white/90 text-lg">{service.subtitle}</p>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                {/* Service Icon and Price */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${service.color} text-white`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-500">Best rates guaranteed</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 bg-gray-50 rounded-lg p-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                      <span className="text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Image Gallery Preview */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {service.gallery.map((img, idx) => (
                    <div key={idx} className="relative h-16 rounded-lg overflow-hidden group/img">
                      <img 
                        src={img} 
                        alt={`${service.title} ${idx + 1}`}
                        className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Eye className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white py-4 text-lg font-semibold group-hover:shadow-xl transition-all duration-300 transform group-hover:translate-y-[-2px]`}
                >
                  <span className="flex items-center justify-center">
                    Explore {service.title}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>

                {/* Additional Info */}
                <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Faridabad
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Available Now
                  </div>
                </div>
              </CardContent>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:${service.color} rounded-lg pointer-events-none transition-all duration-300`}></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Still Not Sure Which One to Choose?
            </h3>
            <p className="text-gray-600 mb-6">
              Let our experts help you find the perfect accommodation based on your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white px-8"
                onClick={() => window.location.href = 'tel:+919876543210'}
              >
                Talk to Expert
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-8"
                onClick={() => navigate('/contact')}
              >
                Schedule Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSelection;
