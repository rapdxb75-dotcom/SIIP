import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import founderImg from '@/assets/Founder-SIIP.avif';
import aboutHero from '../assets/about-image.png';

const AboutUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      
      <main className="pt-32 pb-20 md:pt-32 md:pb-32 px-4 md:px-8 overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          
          {/* Hero Section - High Impact Messaging */}
          <div className="mb-20 md:mb-32 text-center">
            <h1 className="text-display text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-none animate-in fade-in slide-in-from-bottom-8 duration-700">
              SAY IT IN <span className="text-primary italic italic">PRINT</span><span className="opacity-30">.</span>
            </h1>
            <p className="text-body text-lg md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Born from friendship, creativity, and conviction.
            </p>
          </div>

          {/* Founder Section - Personal & Warm */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-32">
            <div className="relative group animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="aspect-[3/4] overflow-hidden bg-secondary border border-border shadow-2xl relative">
                <img 
                  src={founderImg} 
                  alt="Gabby and Sargina - Founders of SIIP" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-display text-xs tracking-[0.3em] font-bold opacity-70 uppercase mb-2 block">Founders</span>
                  <p className="text-display text-xl font-black tracking-tight">GABBY & SARGINA</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="space-y-4">
                <h2 className="text-display text-2xl md:text-3xl font-bold tracking-tight">OUR STORY</h2>
                <div className="w-12 h-1 bg-primary/20" />
              </div>
              
              <div className="space-y-6 text-body text-base md:text-lg leading-relaxed text-muted-foreground">
                <p>
                  SIIP wasn't built in a boardroom. It was born in the quiet moments between two friends, Gabby and Sargina, sharing a vision for something more than just apparel. 
                </p>
                <p>
                  We wanted to create a space where art wasn't just seen, but lived. A space where creativity meets conviction, and every print tells a story that words sometimes can't capture.
                </p>
                <p className="italic text-foreground">
                  "We believe that what you wear should be a reflection of who you are and what you stand for. SIIP is our medium to make sure that voice is heard—boldly and beautifully."
                </p>
              </div>
            </div>
          </div>

          {/* Why SIIP Exists - Art as a Voice */}
          <div className="bg-secondary/30 border border-border p-8 md:p-16 mb-24 relative overflow-hidden">
             <div className="absolute top-0 right-0 -mr-16 -mt-16 opacity-[0.03] select-none pointer-events-none">
                <h3 className="text-[200px] font-black leading-none text-foreground">VOICE</h3>
             </div>
             
             <div className="max-w-3xl mx-auto space-y-12 relative z-10">
                <div className="text-center space-y-4">
                  <h2 className="text-display text-3xl md:text-4xl font-black tracking-tight">WHY SIIP EXISTS</h2>
                  <p className="text-primary font-bold tracking-[0.2em] text-xs uppercase">ART AS A VOICE</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                  <div className="space-y-4">
                    <h4 className="text-display text-sm font-black tracking-[0.3em] uppercase">The Conviction</h4>
                    <p className="text-body text-sm md:text-base leading-relaxed text-muted-foreground">
                      We started with a fierce stand: to keep our culture alive and thriving while celebrating the global influences that move us. It's about bridging the gap between heritage and modern expression.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-display text-sm font-black tracking-[0.3em] uppercase">The Movement</h4>
                    <p className="text-body text-sm md:text-base leading-relaxed text-muted-foreground">
                      SIIP is for the streetwear heads, the festival lovers, and the everyday creatives who vibe with style that carries soul. It's wearable art that invites you to share your story with the world.
                    </p>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-border text-center italic text-muted-foreground text-sm tracking-wide">
                  "Join us in this movement of dignity, style, and giving back. Middle Eastern soul igniting."
                </div>
             </div>
          </div>

          {/* Mission / Values Section */}
          <div className="mb-32">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-display text-2xl md:text-3xl font-black tracking-tight uppercase">MISSION & VALUES</h2>
              <div className="w-24 h-1 bg-primary mx-auto" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-6 p-8 bg-secondary/10 border border-border/50 hover:border-primary/50 transition-all duration-500 group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-primary font-black text-xs">01</span>
                </div>
                <h3 className="text-display text-sm font-black tracking-[0.2em] uppercase">Wearable Art</h3>
                <p className="text-body text-sm text-muted-foreground leading-relaxed">
                  The intersection of art, fashion, and conscience. Every piece is designed with intent—creating something to say, not just to wear.
                </p>
              </div>

              <div className="space-y-6 p-8 bg-secondary/10 border border-border/50 hover:border-primary/50 transition-all duration-500 group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-primary font-black text-xs">02</span>
                </div>
                <h3 className="text-display text-sm font-black tracking-[0.2em] uppercase">Creativity as Resistance</h3>
                <p className="text-body text-sm text-muted-foreground leading-relaxed">
                  We believe in design as a voice against the status quo. Our prints are a stand for dignity, culture, and reclaiming our narrative.
                </p>
              </div>

              <div className="space-y-6 p-8 bg-secondary/10 border border-border/50 hover:border-primary/50 transition-all duration-500 group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-primary font-black text-xs">03</span>
                </div>
                <h3 className="text-display text-sm font-black tracking-[0.2em] uppercase">Community over Commerce</h3>
                <p className="text-body text-sm text-muted-foreground leading-relaxed">
                  We prioritize human connection and collective soul over traditional profit models. SIIP is a movement built by and for the people.
                </p>
              </div>
            </div>
          </div>

          {/* Stockists & Events Section */}
          <div className="mb-32">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                {/* Upcoming Events */}
                <div className="space-y-12">
                   <div className="space-y-4">
                      <h2 className="text-display text-3xl font-black tracking-tight uppercase">EVENTS</h2>
                      <p className="text-body text-sm text-muted-foreground">Find us at pop-ups, markets, and gatherings globally.</p>
                   </div>
                      
                   <div className="space-y-8">
                      <div className="border-l-4 border-primary pl-6 py-2 space-y-2 group cursor-default">
                         <span className="text-primary font-bold text-xs tracking-widest uppercase">Upcoming / Featured</span>
                         <h3 className="text-display text-xl font-black tracking-tight group-hover:text-primary transition-colors">Tech for Palestine Barcelona</h3>
                         <p className="text-body text-sm text-muted-foreground">10 April 2026</p>
                         <div className="pt-2">
                           <span className="text-[10px] bg-secondary px-3 py-1 font-bold tracking-widest uppercase rounded-full">BARCELONA, ES</span>
                         </div>
                      </div>
                      
                      <div className="border-l-2 border-border pl-6 py-2 space-y-2 opacity-60">
                         <h3 className="text-display text-base font-bold tracking-tight">Pop-ups & Markets</h3>
                         <p className="text-body text-xs text-muted-foreground">Stay tuned on our socials for the next location.</p>
                      </div>
                   </div>
                </div>

                {/* Stockists */}
                <div className="space-y-12">
                   <div className="space-y-4">
                      <h2 className="text-display text-3xl font-black tracking-tight uppercase">STOCKISTS</h2>
                      <p className="text-body text-sm text-muted-foreground">Where to find SIIP in the real world.</p>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-2">
                         <h4 className="text-display text-sm font-black tracking-[0.1em]">BOUTIQUE HUB</h4>
                         <p className="text-body text-xs text-muted-foreground">Barcelona, Spain</p>
                      </div>
                      <div className="space-y-2">
                         <h4 className="text-display text-sm font-black tracking-[0.1em]">CONCEPT STORE</h4>
                         <p className="text-body text-xs text-muted-foreground">London, UK</p>
                      </div>
                      <div className="space-y-2">
                         <h4 className="text-display text-sm font-black tracking-[0.1em]">THE ART SPACE</h4>
                         <p className="text-body text-xs text-muted-foreground">Amman, Jordan</p>
                      </div>
                      <div className="space-y-2">
                         <h4 className="text-display text-sm font-black tracking-[0.1em]">STUDIO SIIP</h4>
                         <p className="text-body text-xs text-muted-foreground">Online Exclusive</p>
                      </div>
                   </div>

                   <div className="pt-8 border-t border-border">
                      <button 
                        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                        className="text-display text-[10px] font-black tracking-[0.4em] uppercase hover:text-primary transition-all flex items-center group"
                      >
                        GET IN TOUCH FOR WHOLESALE
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                   </div>
                </div>
             </div>
          </div>

          {/* Contact Section - Warm & Personal */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-12">
              <h3 className="text-display text-2xl font-bold mb-4 tracking-tight">LET'S CONNECT</h3>
              <p className="text-body text-sm text-muted-foreground max-w-md mx-auto">
                Whether you have a question, an idea, or just want to say hi—we're here. Reach out to Gabby, Sargina, and the team.
              </p>
              <p className="text-primary font-bold text-xs tracking-[0.5em] mt-6 uppercase">SUPPORT@SIIP.STORE</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 text-left bg-background p-6 md:p-10 border border-border shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-display text-[10px] tracking-widest font-black uppercase text-muted-foreground">Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="YOUR NAME"
                    className="w-full bg-secondary/50 border border-border px-4 py-3 text-body text-sm outline-none focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-display text-[10px] tracking-widest font-black uppercase text-muted-foreground">Email</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="YOUR EMAIL"
                    className="w-full bg-secondary/50 border border-border px-4 py-3 text-body text-sm outline-none focus:border-primary transition-all duration-300"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-display text-[10px] tracking-widest font-black uppercase text-muted-foreground">Message</label>
                <textarea 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="WRITING TO US ABOUT..."
                  className="w-full bg-secondary/50 border border-border px-4 py-3 text-body text-sm outline-none focus:border-primary transition-all duration-300 resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-foreground text-background py-4 text-display text-xs font-black tracking-[0.4em] hover:bg-primary transition-all duration-500 shadow-xl active:scale-[0.98]"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
