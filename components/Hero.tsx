import React from 'react';
import { Button } from './Button';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=2000" 
          alt="Night Street Food" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-secondary/10 border border-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-6 animate-pulse-slow backdrop-blur-md">
              <span className="w-2 h-2 bg-secondary rounded-full inline-block mr-2 animate-pulse"></span>
              Open Till 3:00 AM Daily
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-white leading-tight mb-6 drop-shadow-2xl">
              CHENNAI'S <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                LATE NIGHT
              </span> <br />
              LEGEND
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed shadow-black drop-shadow-md">
              West Mambalam's favorite spot for hot Ghee Podi Idlis, spicy Rasam Vadas and refreshing Chaats. Pure Taste.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Link to="/menu">
                <Button variant="primary" size="lg" icon={<ArrowRight size={20} />}>
                  View Full Menu
                </Button>
              </Link>
              <Link to="/location">
                <Button variant="secondary" size="lg" icon={<MapPin size={20} />}>
                  Get Directions
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center md:justify-start gap-8 text-sm font-bold text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-xl">🥘</span> 70+ Menu Items
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">⭐</span> 4.5 Rated
              </div>
            </div>
          </div>

          {/* Hero Image / Visual */}
          <div className="flex-1 relative hidden md:block">
             <div className="relative w-96 h-96 mx-auto">
                {/* Glowing Circle */}
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse-slow"></div>
                
                {/* Floating Images (Decorative) */}
                <img 
                  src="https://thumbs.dreamstime.com/b/south-indian-traditional-tasty-nutritional-vegetarian-healthy-breakfast-idli-white-square-plate-coconut-tomato-sauce-271531179.jpg"
                  alt="Idli"
                  className="absolute top-0 right-0 w-64 h-64 object-cover rounded-2xl shadow-2xl border-4 border-black rotate-6 hover:rotate-0 transition-transform duration-500 z-20"
                />
                <img 
                  src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600"
                  alt="Vada"
                  className="absolute bottom-0 left-0 w-56 h-56 object-cover rounded-2xl shadow-2xl border-4 border-black -rotate-6 hover:rotate-0 transition-transform duration-500 z-10"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;