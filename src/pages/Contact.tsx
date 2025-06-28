
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'general',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your enquiry. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      enquiryType: 'general',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'Bldg No: 1/59, Block-E, First Floor, Near YMCA Chowk, Sector 11, Faridabad - 121006',
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 98765 43210',
      action: () => window.location.href = 'tel:+919876543210',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@ashiyanapg.com',
      action: () => window.location.href = 'mailto:info@ashiyanapg.com',
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon - Sun: 9:00 AM - 8:00 PM',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background" id="contact">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us for booking or any queries about Ashiyana PG
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className={`text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md ${info.action ? 'cursor-pointer' : ''}`}
                onClick={info.action}
              >
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${info.color}`}>
                    <info.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {info.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Enquiry Type
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="general">General Enquiry</option>
                      <option value="booking">Room Booking</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="facilities">Facilities & Amenities</option>
                      <option value="complaint">Complaint</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Find Us Here
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Sector 11, Faridabad</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Nearby Landmarks</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• YMCA Chowk - 2 min walk</li>
                      <li>• Faridabad Railway Station - 10 min drive</li>
                      <li>• Neelam Chowk - 15 min drive</li>
                      <li>• Crown Plaza Mall - 20 min drive</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Transportation</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Bus stop within 5 min walk</li>
                      <li>• Auto/taxi easily available</li>
                      <li>• Metro connectivity via bus</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contact;
