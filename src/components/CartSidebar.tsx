import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-500 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-[101] shadow-2xl transition-transform duration-500 transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-black/5">
            <h2 className="text-display text-lg font-bold uppercase tracking-widest text-black">Your Cart</h2>
            <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform duration-300 text-black">
              <X size={24} />
            </button>
          </div>

          {/* Items Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center space-y-4 opacity-30 text-black">
                <ShoppingBag size={48} />
                <p className="text-display text-xs uppercase tracking-widest">Your cart is empty</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 group text-black">
                  <div className="w-20 h-24 bg-secondary flex-shrink-0 relative overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h3 className="text-display text-[10px] md:text-xs font-bold uppercase mb-1">{item.name}</h3>
                      <p className="text-body text-sm font-bold">{item.price}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                       <div className="flex items-center border border-black/10">
                         <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-black/5 transition-colors">
                           <Minus size={12} />
                         </button>
                         <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                         <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-black/5 transition-colors">
                           <Plus size={12} />
                         </button>
                       </div>
                       <button onClick={() => removeFromCart(item.id)} className="text-black/30 hover:text-red-500 transition-colors">
                         <Trash2 size={14} />
                       </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-black/5 bg-gray-50/50 text-black">
            <div className="flex items-end justify-between mb-6">
              <span className="text-display text-[10px] uppercase font-bold opacity-50">Subtotal</span>
              <span className="text-display text-2xl font-black">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-black text-white text-display py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black/90 transition-all active:scale-[0.98]">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
