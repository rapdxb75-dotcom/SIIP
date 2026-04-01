import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const CartSidebar = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const SHIPPING_THRESHOLD = 150;
  const progress = Math.min((totalPrice / SHIPPING_THRESHOLD) * 100, 100);
  const remaining = Math.max(SHIPPING_THRESHOLD - totalPrice, 0);

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] transition-opacity duration-500 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full sm:max-w-[450px] bg-white z-[201] shadow-[0_0_100px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-out transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full text-black">
          {/* Header */}
          <div className="flex items-center justify-between p-8 border-b border-black/5">
            <div>
              <h2 className="text-display text-xl font-black uppercase tracking-tighter italic">Your Bag</h2>
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold mt-1">{cartItems.length} items collected</p>
            </div>
            <button onClick={() => setIsCartOpen(false)} className="w-10 h-10 border border-black/10 flex items-center justify-center hover:rotate-90 hover:bg-black hover:text-white transition-all duration-500">
              <X size={20} />
            </button>
          </div>

          {/* Shipping Threshold Progress */}
          <div className="px-8 py-6 bg-zinc-50 border-b border-black/5">
            <div className="flex items-center gap-3 mb-3">
              <Truck size={16} className={progress === 100 ? 'text-green-600' : 'text-black'} />
              <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.1em]">
                {progress === 100
                  ? "You've unlocked free international shipping!"
                  : `Add $${remaining.toFixed(2)} more for free shipping`}
              </p>
            </div>
            <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-black transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Items Container */}
          <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide no-scrollbar">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center space-y-6 opacity-30">
                <ShoppingBag size={60} strokeWidth={1} />
                <p className="text-display text-[10px] uppercase tracking-[0.4em] font-black">Your bag is empty</p>
                <button onClick={() => setIsCartOpen(false)} className="px-8 py-3 bg-black text-white text-[10px] font-black uppercase tracking-widest">Shop Collection</button>
              </div>
            ) : (
              cartItems.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="flex gap-6 group animate-in slide-in-from-right-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="w-24 h-32 bg-zinc-100 flex-shrink-0 relative overflow-hidden group/img">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110" />
                    <div className="absolute inset-0 bg-black/5" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div>
                      <div className="flex justify-between items-start mb-2 text-black">
                        <h3 className="text-display text-[11px] md:text-xs font-black uppercase leading-[1.1] max-w-[150px] tracking-tight italic">{item.name}</h3>
                        <span className="text-sm font-black tracking-tight">{item.price}</span>
                      </div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">Size: {item.size || 'M'}</p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border-2 border-black/5 bg-zinc-50">
                        <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1.5 hover:bg-black/5 transition-colors">
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-[10px] font-black">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1.5 hover:bg-black/5 transition-colors">
                          <Plus size={12} />
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-black/20 hover:text-red-500 transition-colors p-2">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-8 border-t-2 border-black bg-zinc-50/50">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-display text-[10px] md:text-[11px] uppercase font-black opacity-40 tracking-[0.2em]">Estimated Total</span>
                <div className="flex items-center gap-2 mt-2">
                  <ShieldCheck size={14} className="text-black/40" />
                  <p className="text-[9px] text-black/40 uppercase font-bold tracking-widest leading-none">Security Guaranteed</p>
                </div>
              </div>
              <span className="text-display text-3xl md:text-4xl font-black tracking-tighter leading-none italic">${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={handleCheckout}
                className="group w-full bg-black text-white text-display py-6 text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] hover:bg-zinc-900 transition-all active:scale-[0.98] shadow-2xl flex items-center justify-center gap-3"
              >
                Checkout <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-black transition-all underline underline-offset-8 decoration-black/10 hover:decoration-black"
              >
                Continue shopping
              </button>
            </div>

            <p className="text-center text-[9px] text-muted-foreground font-medium uppercase tracking-widest mt-8 flex items-center justify-center gap-2">
              All rights reserved by SIIP Archive • London 2026
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
