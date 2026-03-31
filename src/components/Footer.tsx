import { Instagram, Twitter, Youtube, MessageSquare, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-16">
        
        {/* Top: Newsletter Section - Fully Integrated */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-10 mb-16 md:mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight text-display">
              Be first to know<span className="text-blue-500">.</span>
            </h2>
            <p className="text-white/50 text-sm md:text-lg font-bold tracking-tight text-display max-w-2xl mx-auto">
              Drops, game results, exclusive access.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-md gap-3">
             <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border-white/10 rounded-none h-12 md:h-14 text-sm font-bold text-display tracking-widest placeholder:text-white/20 focus-visible:ring-blue-500/30 focus-visible:border-blue-500/50 transition-all duration-300"
             />
             <Button
                className="w-full md:w-auto bg-white !text-black hover:bg-white/90 transition-all duration-300 px-8 h-12 md:h-14 text-xs font-black uppercase tracking-[0.3em] rounded-none text-display"
             >
                Subscribe
             </Button>
          </div>
        </div>

        {/* Bottom: Consolidated Links - Minimal Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pt-12 border-t border-white/5 text-center md:text-left items-start">
          
          {/* Information */}
          <div className="space-y-4">
            <h4 className="text-display text-[10px] md:text-xs font-black tracking-[0.4em] text-white/40 uppercase">INFORMATION</h4>
            <ul className="space-y-2 text-[11px] md:text-xs font-bold text-white/60 tracking-widest uppercase text-display">
              <li><a href="#" className="hover:text-white transition-all">Imprint</a></li>
              <li><a href="#" className="hover:text-white transition-all">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-all">General Terms</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-display text-[10px] md:text-xs font-black tracking-[0.4em] text-white/40 uppercase">CONTACT</h4>
            <ul className="space-y-2 text-[11px] md:text-xs font-bold text-white/60 tracking-widest uppercase text-display">
              <li><a href="#" className="hover:text-white transition-all">Shipping Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-all">Right of Withdrawal</a></li>
            </ul>
          </div>

          {/* Social Media Column (Main) */}
          <div className="space-y-4">
            <h4 className="text-display text-[10px] md:text-xs font-black tracking-[0.4em] text-white/40 uppercase">SOCIAL MEDIA</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {[
                { icon: <Instagram size={18} />, label: "IG", link: "https://instagram.com/siiplife" },
                { icon: <Twitter size={18} />, label: "X", link: "#" },
                { icon: <MessageSquare size={18} />, label: "DC", link: "#" },
                { icon: <Youtube size={18} />, label: "YT", link: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Improved Legal Bar: Now with Payments and Extended Credits */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left: Copyright */}
            <div className="order-3 lg:order-1">
              <p className="text-[9px] md:text-[10px] font-black tracking-widest text-white/20 uppercase text-display">
                © 2026, SIIP. All rights reserved.
              </p>
            </div>

            {/* Center: Payment Badges */}
            <div className="order-1 lg:order-2 flex items-center gap-4">
               <CreditCard size={20} className="stroke-[1.5px] text-white/40" />
               <div className="h-4 w-[1px] bg-white/20" />
               <div className="flex items-center gap-4">
                  {[
                    { name: 'VISA', color: 'text-blue-500' },
                    { name: 'MC', color: 'text-orange-500' },
                    { name: 'AMEX', color: 'text-sky-400' },
                    { name: 'PAYPAL', color: 'text-blue-600' },
                    { name: 'APPLE', color: 'text-stone-300' },
                    { name: 'GOOGLE', color: 'text-white' }
                  ].map((p) => (
                    <span key={p.name} className={`text-[8px] md:text-[9px] font-black tracking-tighter text-display ${p.color}`}>{p.name}</span>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
