import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import BulkOrderForm from './components/BulkOrderForm';
import { CONTACT_INFO } from './constants';
import { MapPin, Clock, Phone } from 'lucide-react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Page Components
const HomePage = () => (
  <>
    <Hero />
    <MenuSection limit={4} showFilters={false} />
    <Reviews />
    <section className="py-20 bg-neutral-900">
       <div className="max-w-7xl mx-auto px-4">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
               <BulkOrderForm />
            </div>
            <div className="order-1 lg:order-2 text-white">
              <h2 className="text-4xl font-bold font-heading mb-6">Party Orders? <br /><span className="text-primary">Sorted.</span></h2>
              <p className="text-gray-400 mb-6">Whether it's a birthday bash, office gathering, or just a large group of friends, we handle bulk orders with ease. Fresh, hot, and on time.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><span className="text-secondary text-xl">✓</span> Special discount for orders above 50 pax</li>
                <li className="flex items-center gap-3"><span className="text-secondary text-xl">✓</span> Customized menu options</li>
                <li className="flex items-center gap-3"><span className="text-secondary text-xl">✓</span> Live counter setup available</li>
              </ul>
            </div>
         </div>
       </div>
    </section>
  </>
);

const LocationPage = () => (
  <div className="pt-24 min-h-screen bg-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Visit Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Info Cards */}
        <div className="bg-card p-6 rounded-xl border border-gray-800 flex items-start gap-4">
          <MapPin className="text-primary shrink-0" size={24} />
          <div>
            <h3 className="text-white font-bold mb-2">Address</h3>
            <p className="text-gray-400 text-sm">{CONTACT_INFO.address}</p>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-xl border border-gray-800 flex items-start gap-4">
          <Clock className="text-primary shrink-0" size={24} />
          <div>
            <h3 className="text-white font-bold mb-2">Opening Hours</h3>
            <p className="text-gray-400 text-sm">Everyday: 11:00 AM - 03:00 AM</p>
            <span className="text-secondary text-xs font-bold mt-1 block">Late Night Special</span>
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border border-gray-800 flex items-start gap-4">
          <Phone className="text-primary shrink-0" size={24} />
          <div>
            <h3 className="text-white font-bold mb-2">Contact</h3>
            <p className="text-gray-400 text-sm mb-1">{CONTACT_INFO.phone}</p>
            <a href={`tel:${CONTACT_INFO.phone}`} className="text-primary text-sm hover:underline">Click to Call</a>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="h-[500px] w-full bg-gray-800 rounded-2xl overflow-hidden border-2 border-gray-700 shadow-2xl relative">
        <iframe 
          src={CONTACT_INFO.googleMapsUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
          allowFullScreen={true} 
          loading="lazy"
          title="Full Map"
        ></iframe>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<div className="pt-24"><MenuSection /></div>} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/gallery" element={<div className="pt-24"><Gallery /></div>} />
          <Route path="/bulk-order" element={
            <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
               <BulkOrderForm />
            </div>
          } />
          {/* Catch-all route to redirect any unknown paths to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden grid grid-cols-2 gap-3">
        <a href={`https://wa.me/91${CONTACT_INFO.phone}`} className="bg-green-600 text-white font-bold py-3 rounded-lg flex items-center justify-center shadow-lg">
          WhatsApp
        </a>
        <a href={`tel:+91${CONTACT_INFO.phone}`} className="bg-primary text-white font-bold py-3 rounded-lg flex items-center justify-center shadow-lg">
          Call Now
        </a>
      </div>
    </div>
  );
};

export default App;