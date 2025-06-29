
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Eye, Star } from 'lucide-react';

const VirtualTour360 = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            360° Virtual Tour - Ashiyana PG
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a virtual walk through our premium PG accommodation and explore every corner from the comfort of your home
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* 360 View Card */}
          <Card className="mb-8 overflow-hidden shadow-2xl border-0">
            <CardContent className="p-0">
              <div className="relative">
                {/* 360 View Badge */}
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  360° Virtual Tour
                </div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  4.7/5 Rating
                </div>

                {/* Google Maps 360 View */}
                <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!4v1751197422003!6m8!1m7!1sMua3Ksx4fcGjyAJ6TGAynw!2m2!1d28.36897219909992!2d77.31684057411158!3f186.99776!4f0!5f0.7820865974627469" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tour Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Prime Location</h3>
                <p className="text-gray-600 text-sm">
                  Located in Sector 11, Faridabad with excellent connectivity to major areas
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <Eye className="w-8 h-8 mx-auto mb-4 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Interactive Experience</h3>
                <p className="text-gray-600 text-sm">
                  Explore every room and facility with our immersive 360° virtual tour
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <Star className="w-8 h-8 mx-auto mb-4 text-yellow-500" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Highly Rated</h3>
                <p className="text-gray-600 text-sm">
                  4.7/5 stars from 100+ happy residents who call Ashiyana PG their home
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tour Instructions */}
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 max-w-3xl mx-auto">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">How to Navigate the Tour</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">1</div>
                  <span>Click and drag to look around</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xs">2</div>
                  <span>Use scroll to zoom in/out</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xs">3</div>
                  <span>Click arrows to move around</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour360;
