import React, { useState, useMemo } from 'react';
import { CATEGORIES, MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';
import { Search, Flame, Leaf, Drumstick, Plus, Minus, X, Info } from 'lucide-react';
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
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
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

  const handleOpenModal = (item: MenuItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-20 bg-dark relative" id="menu-section">
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
                onClick={() => handleOpenModal(item)}
                className="group bg-card rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-900/20 flex flex-col cursor-pointer"
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

                  <div className="absolute top-3 right-3 bg-black/50 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Info size={16} />
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
                  
                  <div onClick={(e) => e.stopPropagation()}>
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

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleCloseModal}></div>
          <div className="relative bg-neutral-900 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl animate-fade-in border border-gray-800 flex flex-col max-h-[90vh]">
            
            {/* Modal Close Button */}
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors backdrop-blur-md"
            >
              <X size={20} />
            </button>

            {/* Modal Image */}
            <div className="h-64 w-full relative flex-shrink-0">
               <img 
                  src={selectedItem.image} 
                  alt={selectedItem.name} 
                  className="w-full h-full object-cover"
                />
               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neutral-900 to-transparent"></div>
               <div className="absolute bottom-4 left-6">
                 {selectedItem.isBestseller && (
                    <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-md inline-flex items-center gap-1 mb-2">
                      <Flame size={12} fill="currentColor" /> Bestseller
                    </span>
                  )}
                 <h2 className="text-3xl font-bold text-white font-heading">{selectedItem.name}</h2>
               </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto">
               <div className="flex items-center gap-2 mb-4 text-sm">
                  {selectedItem.veg ? (
                    <span className="text-green-500 font-bold flex items-center gap-1"><Leaf size={14} /> Pure Veg</span>
                  ) : (
                    <span className="text-red-500 font-bold flex items-center gap-1"><Drumstick size={14} /> Non-Veg</span>
                  )}
                  {selectedItem.isSpicy && (
                    <span className="text-orange-500 font-bold flex items-center gap-1">• Spicy</span>
                  )}
                  <span className="text-gray-500">• {CATEGORIES.find(c => c.id === selectedItem.category)?.name}</span>
               </div>

               <p className="text-gray-300 leading-relaxed text-lg mb-6">
                 {selectedItem.description}
               </p>

               {selectedItem.ingredients && selectedItem.ingredients.length > 0 && (
                 <div className="mb-8">
                   <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-xs flex items-center gap-2">
                     <span className="w-1 h-4 bg-primary rounded-full"></span> Key Ingredients
                   </h4>
                   <div className="flex flex-wrap gap-2">
                     {selectedItem.ingredients.map((ing, idx) => (
                       <span key={idx} className="bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1.5 rounded-lg text-sm">
                         {ing}
                       </span>
                     ))}
                   </div>
                 </div>
               )}

               <div className="bg-card rounded-xl p-4 border border-gray-800 flex items-center justify-between">
                 <div>
                    <span className="text-gray-400 text-sm block">Price</span>
                    <span className="text-2xl font-bold text-primary">₹{selectedItem.price}</span>
                 </div>
                 
                 <div className="w-1/2">
                    {getItemQty(selectedItem.id) === 0 ? (
                      <Button onClick={() => addToCart(selectedItem)} className="w-full">
                        Add to Cart
                      </Button>
                    ) : (
                      <div className="flex items-center justify-between bg-black rounded-lg p-1 border border-primary/30 h-12">
                         <button 
                           onClick={() => updateQuantity(selectedItem.id, -1)}
                           className="w-10 h-full flex items-center justify-center hover:bg-white/10 rounded-md text-white transition-colors"
                         >
                           <Minus size={18} />
                         </button>
                         <span className="font-bold text-white text-lg">{getItemQty(selectedItem.id)}</span>
                         <button 
                           onClick={() => updateQuantity(selectedItem.id, 1)}
                           className="w-10 h-full flex items-center justify-center hover:bg-white/10 rounded-md text-white transition-colors"
                         >
                           <Plus size={18} />
                         </button>
                      </div>
                    )}
                 </div>
               </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default MenuSection;