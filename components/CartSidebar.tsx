import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Button } from './Button';

const CartSidebar: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, clearCart } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    if (cart.length === 0) return;

    // Construct a clean message string
    const itemsList = cart.map(item => `• ${item.quantity} x ${item.name}`).join('\n');
    const messageText = `Hi Mohan's Hot & Chat! I'd like to place an order:\n\n${itemsList}\n\nPlease confirm prices and availability.`;

    // Properly encode the message for URL
    const encodedMessage = encodeURIComponent(messageText);
    
    window.open(`https://wa.me/91${CONTACT_INFO.phone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-neutral-900 border-l border-neutral-800 shadow-2xl z-[70] transform transition-transform duration-300 flex flex-col animate-fade-in">
        {/* Header */}
        <div className="p-5 border-b border-neutral-800 flex justify-between items-center bg-neutral-900">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ShoppingBag className="text-primary" /> Your Cart
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500">
              <ShoppingBag size={48} className="mb-4 opacity-20" />
              <p>Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-4 text-primary hover:underline text-sm"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="bg-card p-4 rounded-xl border border-gray-800 flex gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-white text-sm line-clamp-1">{item.name}</h4>
                    {/* Price hidden */}
                  </div>
                  <div className="text-xs text-gray-400 mb-3">Quantity</div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-black/40 rounded-lg p-1">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:bg-white/10 rounded-md text-gray-400 hover:text-white"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:bg-white/10 rounded-md text-gray-400 hover:text-white"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-400 text-xs flex items-center gap-1"
                    >
                      <Trash2 size={12} /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-neutral-800 bg-neutral-900 space-y-4">
            <div className="grid grid-cols-2 gap-3">
               <Button 
                variant="outline"
                className="w-full justify-center border-gray-600 text-gray-300 hover:bg-gray-800"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
              <Button 
                variant="primary"
                className="w-full justify-center"
                onClick={handleCheckout}
              >
                Request Prices
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;