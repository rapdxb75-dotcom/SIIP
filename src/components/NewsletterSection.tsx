import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection = () => {
  return (
    <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          {/* Main Title */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight text-display">
              Be first to know<span className="text-blue-500">.</span>
            </h2>
            <div className="h-0.5 w-16 bg-white/20 mx-auto" />
            <p className="text-white/60 text-base md:text-xl font-bold tracking-tight text-display max-w-2xl mx-auto">
              Drops, game results, exclusive access.
            </p>
          </div>

          {/* Form Area */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-lg gap-4">
             <div className="relative w-full group">
                <Input 
                   type="email" 
                   placeholder="Enter your email" 
                   className="bg-white/5 border-white/10 rounded-none h-14 md:h-16 text-sm md:text-base font-bold text-display tracking-widest placeholder:text-white/30 focus-visible:ring-blue-500/50 focus-visible:border-blue-500 transition-all duration-300"
                />
             </div>
             <Button
                className="w-full md:w-auto bg-white text-black hover:bg-white/90 border-2 border-white transition-all duration-300 px-10 h-14 md:h-16 text-sm font-black uppercase tracking-[0.3em] rounded-none text-display"
             >
                Subscribe
             </Button>
          </div>

          {/* Optional Footer Text */}
          <p className="text-white/20 text-[10px] uppercase font-bold tracking-widest text-display">
            BY JOINING, YOU AGREE TO OUR TERMS & PRIVACY POLICY.
          </p>

        </div>
      </div>
      
      {/* Decorative Branding Watermark */}
      <div className="absolute -bottom-20 -left-20 opacity-5 pointer-events-none select-none hidden md:block">
        <h3 className="text-[20rem] font-black text-display text-white tracking-widest">SIIP</h3>
      </div>
    </section>
  );
};

export default NewsletterSection;
