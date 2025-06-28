
import React from 'react';
import { MapPin, Phone, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-blue-400" />
                <div>
                  <p className="text-gray-300">
                    Bldg No: 1/59, Block-E, First Floor<br />
                    Near YMCA Chowk, Sector 11<br />
                    Faridabad - 121006
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/rooms" className="text-gray-300 hover:text-white transition-colors">Rooms & Pricing</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="/reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Ashiyana PG</h3>
            <p className="text-gray-300 mb-4">
              Your trusted accommodation partner in Faridabad with 15+ years of experience 
              in providing safe, comfortable, and affordable stays.
            </p>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm text-gray-300">4.7 Rating</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Ashiyana PG. All rights reserved. | Providing quality accommodation since 2009
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
