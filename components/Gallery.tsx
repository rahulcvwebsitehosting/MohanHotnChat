import React from 'react';

const IMAGES = [
  'https://images.unsplash.com/photo-1589301760576-47f40569e6e3?auto=format&fit=crop&q=80&w=800', // Idli Vada Combo
  'https://images.unsplash.com/photo-1626049645585-b04047b8835c?auto=format&fit=crop&q=80&w=800', // Ghee Podi Idli
  'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800', // Samosa/Chaat
  'https://images.unsplash.com/photo-1596561234919-63a9603f2603?auto=format&fit=crop&q=80&w=800', // Sambar Rice/Vada
  'https://images.unsplash.com/photo-1606491956689-2ea28c674675?auto=format&fit=crop&q=80&w=800', // Pav Bhaji
  'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800', // Vada
  'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800', // Rose Milk
  'https://images.unsplash.com/photo-1596952954288-29474ba77ac9?auto=format&fit=crop&q=80&w=800', // Filter Coffee
  'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=800', // Street Scene
];

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-white mb-4">
            The <span className="text-primary">Vibe</span>
          </h2>
          <p className="text-gray-400">Good food, good mood, and the best crowd in Chennai.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {IMAGES.map((src, index) => (
            <div key={index} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer">
              <img 
                src={src} 
                alt={`Gallery ${index}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase border-b-2 border-primary pb-1">Mohan's Hot & Chat</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;