import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShieldCheck, Lock, CreditCard, Truck, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, totalPrice } = useCart();
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success
  const [isProcessing, setIsProcessing] = useState(false);

  const shipping = 10;
  const freeShippingThreshold = 150;
  const shippingFee = totalPrice >= freeShippingThreshold ? 0 : shipping;
  const finalTotal = totalPrice + shippingFee;

  const handleNextStep = () => {
    if (step === 2) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setStep(3);
      }, 2000);
    } else {
      setStep(step + 1);
    }
  };

  if (step === 3) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-6 mt-20">
          <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-700">
            <div className="flex justify-center">
                <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
                    <CheckCircle2 size={48} className="text-white" />
                </div>
            </div>
            <div>
                <h1 className="text-display text-4xl font-black uppercase tracking-tighter italic mb-4">Order Confirmed</h1>
                <p className="text-muted-foreground font-medium uppercase tracking-widest text-[11px]">Thank you for shopping with the SIIP Archive.</p>
            </div>
            <div className="bg-zinc-50 p-6 border border-black/5 space-y-4">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="opacity-40">Order Number</span>
                    <span>#SIIP-0921B-2026</span>
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="opacity-40">Delivery Estimate</span>
                    <span>3-5 Business Days</span>
                </div>
            </div>
            <Link to="/store" className="block w-full bg-black text-white py-5 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-zinc-900 transition-all">
                Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      
      <main className="container mx-auto px-4 md:px-12 pt-32 md:pt-40 pb-12 md:pb-32 max-w-[1400px]">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column: Form Flow */}
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center gap-4 mb-8">
                <Link to="/store" className="text-muted-foreground hover:text-black transition-colors">
                    <ArrowLeft size={20} />
                </Link>
                <div className="flex items-center gap-6">
                    <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${step >= 1 ? 'text-black' : 'text-muted-foreground/30'}`}>01 Shipping</span>
                    <div className="w-10 h-[1px] bg-black/10" />
                    <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${step >= 2 ? 'text-black' : 'text-muted-foreground/30'}`}>02 Payment</span>
                </div>
            </div>

            {step === 1 && (
                <section className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div>
                        <h1 className="text-display text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-4">Shipping Info</h1>
                        <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Global delivery from our London archive.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40">Email Address</label>
                            <input type="email" placeholder="archive@siip.com" className="w-full bg-white border border-black/10 p-5 text-sm font-medium focus:border-black outline-none transition-colors" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40">Street Address</label>
                            <input type="text" placeholder="123 Archive Street" className="w-full bg-white border border-black/10 p-5 text-sm font-medium focus:border-black outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40">City</label>
                            <input type="text" placeholder="London" className="w-full bg-white border border-black/10 p-5 text-sm font-medium focus:border-black outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40">Postcode</label>
                            <input type="text" placeholder="EC1A 1BB" className="w-full bg-white border border-black/10 p-5 text-sm font-medium focus:border-black outline-none transition-colors" />
                        </div>
                    </div>

                    <div className="bg-white p-8 border border-black/5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-black flex items-center justify-center rounded-full">
                                <Truck size={20} className="text-white" />
                            </div>
                            <div>
                                <p className="text-xs font-black uppercase tracking-widest">Standard International</p>
                                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">3-5 Day Delivery</p>
                            </div>
                        </div>
                        <p className="text-sm font-black uppercase">{shippingFee === 0 ? 'FREE' : `$${shippingFee}`}</p>
                    </div>

                    <button 
                        onClick={handleNextStep}
                        className="w-full bg-black text-white py-6 text-[11px] font-black uppercase tracking-[0.5em] hover:bg-zinc-900 transition-all shadow-xl"
                    >
                        Continue to Payment
                    </button>
                </section>
            )}

            {step === 2 && (
                <section className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-display text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-4">Payment</h1>
                            <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Encrypted SSL checkout.</p>
                        </div>
                        <div className="hidden md:flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2">
                            <Lock size={14} />
                            <span className="text-[9px] font-black uppercase tracking-widest">Secure</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="border border-black p-8 bg-zinc-50 relative">
                            <div className="flex items-center justify-between mb-8">
                                <p className="text-xs font-black uppercase tracking-widest">Credit Card</p>
                                <CreditCard size={20} />
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40">Card Number</label>
                                    <input type="text" placeholder="•••• •••• •••• ••••" className="w-full bg-white border border-black/10 p-5 text-sm font-medium outline-none transition-colors" />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40">Expiry</label>
                                        <input type="text" placeholder="MM/YY" className="w-full bg-white border border-black/10 p-5 text-sm font-medium outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40">CVC</label>
                                        <input type="text" placeholder="•••" className="w-full bg-white border border-black/10 p-5 text-sm font-medium outline-none transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 border border-black/5 opacity-40 flex items-center justify-between grayscale">
                            <p className="text-xs font-black uppercase tracking-widest">Apple Pay / PayPal</p>
                            <span className="text-[9px] font-black uppercase tracking-[0.2em]">Unavailable</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-muted-foreground">
                        <ShieldCheck size={16} />
                        <p className="text-[10px] font-medium uppercase tracking-[0.1em]">Your data is protected by industry standard encryption.</p>
                    </div>

                    <button 
                        onClick={handleNextStep}
                        disabled={isProcessing}
                        className="w-full bg-black text-white py-6 text-[11px] font-black uppercase tracking-[0.5em] hover:bg-zinc-900 transition-all shadow-xl flex items-center justify-center gap-2 disabled:bg-zinc-800"
                    >
                        {isProcessing ? 'Processing...' : `Pay $${finalTotal.toFixed(2)}`}
                    </button>
                </section>
            )}
          </div>

          {/* Right Column: Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-black/5 p-10 sticky top-32 space-y-10 shadow-sm">
                <h3 className="text-display text-xl font-black uppercase tracking-tighter italic border-b border-black/5 pb-6">Summary</h3>
                
                <div className="space-y-6 max-h-[300px] overflow-y-auto no-scrollbar pr-2">
                    {cartItems.map((item, idx) => (
                        <div key={`${item.id}-${idx}`} className="flex gap-4">
                            <div className="w-16 h-20 bg-zinc-100 flex-shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-[10px] font-black uppercase tracking-tight truncate max-w-[120px]">{item.name}</h4>
                                    <span className="text-[11px] font-black">{item.price}</span>
                                </div>
                                <p className="text-[9px] text-muted-foreground uppercase font-black tracking-widest mt-1">Size: {item.size}</p>
                                <p className="text-[9px] text-muted-foreground uppercase font-black tracking-widest leading-none mt-1">Qty: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-4 pt-6 border-t border-black/5">
                    <div className="flex justify-between text-[11px] font-black uppercase tracking-widest">
                        <span className="opacity-40">Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[11px] font-black uppercase tracking-widest">
                        <span className="opacity-40">Shipping</span>
                        <span>{shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-lg font-black uppercase tracking-tight pt-4 border-t border-black italic">
                        <span>Total</span>
                        <span>${finalTotal.toFixed(2)}</span>
                    </div>
                </div>

                <div className="bg-blue-50 p-6 space-y-2">
                    <div className="flex items-center gap-2 text-blue-600">
                        <CheckCircle2 size={14} />
                        <p className="text-[9px] font-black uppercase tracking-widest">Elite Member Status</p>
                    </div>
                    <p className="text-[9px] text-blue-600/70 uppercase font-black tracking-widest leading-relaxed">You are eligible for priority archiving on this order.</p>
                </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
