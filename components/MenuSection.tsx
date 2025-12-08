import React, { useState, useMemo } from 'react';
import { CATEGORIES, MENU_ITEMS } from '../constants';
import { Search, Flame, Leaf, Drumstick, Plus, Minus } from 'lucide-react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface MenuSectionProps {
  limit?: number;
  showFilters?: boolean;
}

const MenuSection: React.FC<MenuSectionProps> = ({ limit, showFilters = true }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart, cart, updateQuantity } = useCart();

  const filteredItems = useMemo(() => {
    let items = MENU_ITEMS;

    if (activeCategory !== 'all') {
      items = items.filter(item => item.category === activeCategory);
    }

    if (searchQuery) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (limit) {
      items = items.slice(0, limit);
    }

    return items;
  }, [activeCategory, searchQuery, limit]);

  const getItemQty = (id: string) => {
    return cart.find(i => i.id === id)?.quantity || 0;
  };

  return (
    <section className="py-20 bg-dark" id="menu-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!limit && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
              Our <span className="text-primary">Menu</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From spicy street chaat to authentic South Indian tiffins. Made fresh daily.
            </p>
          </div>
        )}

        {showFilters && (
          <div className="sticky top-20 z-30 bg-dark/95 backdrop-blur-sm py-4 mb-8 border-b border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              {/* Categories - Horizontal Scroll */}
              <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 no-scrollbar w-full md:w-auto mask-gradient-r">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 flex-shrink-0 ${
                      activeCategory === cat.id
                        ? 'bg-primary text-white shadow-lg shadow-orange-900/50'
                        : 'bg-card text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative flex-shrink-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-card text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-64"
                />
              </div>
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const qty = getItemQty(item.id);
            return (
              <div 
                key={item.id}
                className="group bg-card rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-900/20 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.isBestseller && (
                      <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                        <Flame size={12} fill="currentColor" /> Bestseller
                      </span>
                    )}
                    {item.veg ? (
                      <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                        <Leaf size={12} fill="currentColor" /> Veg
                      </span>
                    ) : (
                       <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                        <Drumstick size={12} fill="currentColor" /> Non-Veg
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white font-heading leading-tight">{item.name}</h3>
                    {/* Price hidden temporarily */}
                    {/* <span className="text-primary font-bold">₹{item.price}</span> */}
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 min-h-[40px] flex-1">{item.description}</p>
                  
                  {qty === 0 ? (
                    <button 
                      onClick={() => addToCart(item)}
                      className="w-full py-2 flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-colors font-semibold text-sm"
                    >
                      <Plus size={16} /> Add to Cart
                    </button>
                  ) : (
                    <div className="flex items-center justify-between bg-black/40 rounded-lg p-1 border border-primary/30">
                       <button 
                         onClick={() => updateQuantity(item.id, -1)}
                         className="p-2 hover:bg-white/10 rounded-md text-white transition-colors"
                       >
                         <Minus size={16} />
                       </button>
                       <span className="font-bold text-white">{qty}</span>
                       <button 
                         onClick={() => updateQuantity(item.id, 1)}
                         className="p-2 hover:bg-white/10 rounded-md text-white transition-colors"
                       >
                         <Plus size={16} />
                       </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🍲</div>
            <h3 className="text-2xl font-bold text-white mb-2">No dishes found</h3>
            <p className="text-gray-400">Try changing your search or category.</p>
          </div>
        )}

        {limit && (
          <div className="mt-12 text-center">
            <Link to="/menu">
              <Button variant="outline" size="lg">
                View Full Menu
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;