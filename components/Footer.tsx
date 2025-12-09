import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Clock, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const SOCIAL_LINK = "https://www.linkedin.com/in/rahulshyamcivil/";

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold font-heading text-white mb-4">
              MOHAN'S <span className="text-primary">HOT & CHAT</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              West Mambalam's favorite late-night spot for authentic South Indian snacks and refreshing chaat items. Served hot, served fresh, served with love.
            </p>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href={SOCIAL_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href={SOCIAL_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Menu', 'Location', 'Gallery', 'Bulk Order'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="text-primary shrink-0" size={18} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="text-primary shrink-0" size={18} />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white">{CONTACT_INFO.displayPhone}</a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Clock className="text-primary shrink-0" size={18} />
                <span>Mon - Sun: 11:00 AM - 03:00 AM</span>
              </li>
            </ul>
          </div>

          {/* Map Snapshot */}
          <div>
            <h4 className="text-white font-bold mb-6">Find Us</h4>
            <div className="rounded-lg overflow-hidden border border-gray-700 h-40">
              <iframe 
                src={CONTACT_INFO.googleMapsUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Mini Map"
              ></iframe>
            </div>
            <a 
              href={CONTACT_INFO.googleMapsLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-primary mt-2 inline-block hover:underline"
            >
              View Larger Map →
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 text-center text-gray-600 text-xs">
          <p>© {new Date().getFullYear()} Mohan's Hot & Chat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;