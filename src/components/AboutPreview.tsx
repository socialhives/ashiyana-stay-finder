
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Home, Award } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About <span className="text-blue-600">Ashiyana PG</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience in providing quality accommodation services, 
              Ashiyana PG has become a trusted name in Faridabad. We understand the importance 
              of feeling at home, even when you're away from home.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">Complete safety and security measures</span>
              </div>
              <div className="flex items-center gap-3">
                <Home className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">Comfortable and well-maintained rooms</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-orange-600" />
                <span className="text-gray-700">15+ years of trusted service</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.location.href = '/about'}
            >
              Learn More About Us <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                  <span className="text-gray-500">Room Image</span>
                </div>
                <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-gray-500">Kitchen</span>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-gray-500">Common Area</span>
                </div>
                <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                  <span className="text-gray-500">Building</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
