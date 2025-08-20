
import React from 'react';
import { MapPin, Phone, Star, Building, Home, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-slate-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              NST HOSPITALITY
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted hospitality partner in Faridabad with 15+ years of experience 
              in providing premium PG accommodation and luxury hotel services.
            </p>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm text-gray-300">4.7 Rating</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 text-orange-400" />
                <div>
                  <div className="font-semibold">PG Services</div>
                  <div className="text-sm text-gray-400">Ashiyana PG</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-red-400" />
                <div>
                  <div className="font-semibold">Hotel Services</div>
                  <div className="text-sm text-gray-400">Hotel High View</div>
                  <div className="text-sm text-gray-400">LA Casa Residence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-orange-400" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Bldg No: 1/59, Block-E, First Floor<br />
                    Near YMCA Chowk, Sector 11<br />
                    Faridabad - 121006
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <a href="tel:+919870366759" className="text-gray-300 hover:text-white transition-colors">
                  +91 98703 66759
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <a href="mailto:nsthospitality75@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  nsthospitality75@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <div>
              <h4 className="font-semibold mb-3 text-orange-400">PG Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/rooms" className="text-gray-300 hover:text-white transition-colors">Rooms & Pricing</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Ashiyana PG</Link></li>
                <li><Link to="/pg-services" className="text-gray-300 hover:text-white transition-colors">PG Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-red-400">Hotels</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/hotel-services" className="text-gray-300 hover:text-white transition-colors">Hotel Services</Link></li>
                <li><Link to="/hotel-services" className="text-gray-300 hover:text-white transition-colors">Hotel High View</Link></li>
                <li><Link to="/hotel-services" className="text-gray-300 hover:text-white transition-colors">LA Casa Residence</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/rooms" className="text-gray-300 hover:text-white transition-colors">Virtual Tour</Link></li>
                <li><Link to="/rooms" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">Our Story</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">Reviews</Link></li>
                <li><Link to="/rooms" className="text-gray-300 hover:text-white transition-colors">Booking Info</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Locations</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-gray-300">Sector 11</span></li>
                <li><span className="text-gray-300">Sector 15</span></li>
                <li><span className="text-gray-300">Sector 21</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 all right reserved Nirikshan AI Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
