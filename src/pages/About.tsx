
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, Home } from 'lucide-react';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Complete CCTV surveillance, secure entry systems, and 24/7 security personnel ensure your peace of mind.'
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Over a decade and a half of providing quality accommodation services to students and professionals.'
    },
    {
      icon: Users,
      title: 'Community Living',
      description: 'Foster meaningful connections with like-minded individuals in our friendly and supportive environment.'
    },
    {
      icon: Home,
      title: 'Home-like Comfort',
      description: 'Well-furnished rooms, home-cooked meals, and all the amenities you need for comfortable living.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ashiyana PG</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted partner in comfortable living for over 15 years
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To provide safe, comfortable, and affordable accommodation that feels like home. 
                  We strive to create a supportive community where students and professionals can 
                  focus on their goals while enjoying a worry-free living experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  To be the most trusted name in paying guest accommodation in Faridabad, 
                  known for our commitment to safety, cleanliness, and exceptional service 
                  that makes every resident feel valued and at home.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 text-blue-600">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Our Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">2009</div>
                <h3 className="text-xl font-semibold mb-2">The Beginning</h3>
                <p className="text-gray-600">Started with a vision to provide quality accommodation in Faridabad</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <h3 className="text-xl font-semibold mb-2">Happy Residents</h3>
                <p className="text-gray-600">Served hundreds of students and professionals over the years</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <h3 className="text-xl font-semibold mb-2">Years of Trust</h3>
                <p className="text-gray-600">Building lasting relationships with our residents and their families</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default About;
