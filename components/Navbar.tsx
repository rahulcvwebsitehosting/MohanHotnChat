import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Location', path: '/location' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Bulk Order', path: '/bulk-order' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-bold font-heading tracking-wider text-white">
              MOHAN'S <span className="text-primary">HOT & CHAT</span>
            </span>
            <span className="text-[10px] text-gray-400 tracking-widest uppercase">West Mambalam • Open till 3 AM</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Icons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+919876543210" className="text-gray-300 hover:text-secondary transition-colors">
              <Phone size={20} />
            </a>
            <Link to="/location" className="text-gray-300 hover:text-primary transition-colors">
              <MapPin size={20} />
            </Link>
            <Link to="/menu" className="bg-primary hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-orange-500/30">
              Order Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl h-screen absolute top-0 left-0 w-full z-40 flex flex-col pt-24 px-6 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-2xl font-bold ${
                location.pathname === link.path ? 'text-primary' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8 border-t border-gray-800 grid grid-cols-2 gap-4">
            <a href="tel:+919876543210" className="flex items-center justify-center space-x-2 bg-gray-800 p-4 rounded-lg text-white">
              <Phone size={20} />
              <span>Call</span>
            </a>
            <Link to="/location" className="flex items-center justify-center space-x-2 bg-gray-800 p-4 rounded-lg text-white">
              <MapPin size={20} />
              <span>Map</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;