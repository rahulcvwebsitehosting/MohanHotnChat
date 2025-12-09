import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

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
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex flex-col z-50 group">
            <span className="text-2xl font-bold font-heading tracking-wider text-white group-hover:scale-105 transition-transform origin-left">
              MOHAN'S <span className="text-primary">HOT & CHAT</span>
            </span>
            <span className="text-[10px] text-gray-400 tracking-widest uppercase group-hover:text-primary transition-colors">West Mambalam • Open till 3 AM</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
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
            <a href="tel:+919876543210" className="text-gray-300 hover:text-secondary transition-colors hover:scale-110 transform duration-200">
              <Phone size={20} />
            </a>
            <Link to="/location" className="text-gray-300 hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <MapPin size={20} />
            </Link>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="bg-primary hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-orange-500/30 flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <ShoppingBag size={18} />
              <span>Cart ({cartCount})</span>
            </button>
          </div>

          {/* Mobile Cart & Menu Toggle */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative text-white p-2 hover:text-primary transition-colors active:scale-95"
            >
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-black animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none transition-transform duration-300"
              style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay with Smooth Transition */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-all duration-300 ease-in-out flex flex-col pt-28 px-6 space-y-6 ${
          isOpen ? 'opacity-100 translate-x-0 visible' : 'opacity-0 translate-x-full invisible'
        }`}
      >
        {navLinks.map((link, index) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={`text-3xl font-bold font-heading transform transition-all duration-500 ${
              location.pathname === link.path ? 'text-primary' : 'text-white'
            } ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {link.name}
          </Link>
        ))}
        
        <div 
          className={`pt-8 border-t border-gray-800 grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <a href="tel:+919876543210" className="flex items-center justify-center space-x-2 bg-gray-800 p-4 rounded-xl text-white active:scale-95 transition-transform">
            <Phone size={20} className="text-secondary" />
            <span>Call</span>
          </a>
          <Link to="/location" className="flex items-center justify-center space-x-2 bg-gray-800 p-4 rounded-xl text-white active:scale-95 transition-transform" onClick={() => setIsOpen(false)}>
            <MapPin size={20} className="text-primary" />
            <span>Map</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;