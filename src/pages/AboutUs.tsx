import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import aboutImage from '../assets/about-image.png';

const AboutUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Navbar />
      
      <main className="pt-24 pb-20 md:pt-32 md:pb-32 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Hero Section */}
          <div className="mb-16 md:mb-24">
            <div className="aspect-[16/7] md:aspect-[21/9] w-full overflow-hidden bg-secondary border border-border mb-12">
              <img 
                src={aboutImage} 
                alt="SIIP Brand Identity" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <h1 className="text-display text-3xl md:text-5xl font-bold mb-8 tracking-tighter">ABOUT SIIP<span className="opacity-30">.</span></h1>
            
            <p className="text-body text-base md:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto italic">
              "We invite you to wear our culture, experience its soul, and share it proudly because true hospitality multiplies when it's lived out loud. join us in this movement of dignity, style, and giving back. <br/><br/> middle eastern soul igniting"
            </p>
          </div>

          {/* Core Blurb */}
          <div className="text-left mb-24 border-y border-border py-16">
            <div className="max-w-3xl mx-auto space-y-10">
              <div className="space-y-6">
                <h2 className="text-display text-xl font-bold tracking-widest text-primary border-b border-primary/20 pb-4 inline-block">OUR ORIGIN</h2>
                <p className="text-body text-sm md:text-base leading-loose text-muted-foreground">
                  I’m an assyrian proudly carrying a heritage so rich and groundbreaking that we’ve shaped the world: inventors of the written word, architects of early civilisations, contributors to humanity’s greatest leaps forward, all rooted in iraq as our enduring motherland. yet today, too few know our story. Our ancient language, steadfast faith, and living traditions passed from parent to child keep us unbreakable, and it’s time to reclaim that legacy for all to see.
                </p>
                <p className="text-body text-sm md:text-base leading-loose text-muted-foreground">
                  I’ve lived across the globe, embracing every culture, faith, and people with deep respect and love—always the respectful outsider who blends it all while holding my roots tight. it’s made me at home everywhere, yet forever carrying that Assyrian spark, welcoming all into the circle. this brand is my fierce stand: reviving Assyrian brilliance and keeping our culture alive and thriving, while celebrating the vibrant traditions of my middle eastern brothers and sisters levantines, persians, arabs, all of us and the global influences that move me. it’s not heavy or exclusive; it’s for everyone streetwear heads, festival lovers, everyday creatives, anyone who vibes with style that carries soul. this is my creative fire: wearable art blending our timeless genius with fresh, universal energy you can rock anywhere and share with the world. join me wear it, live it, let’s bring it all back together.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="max-w-xl mx-auto">
            <h3 className="text-display text-2xl font-bold mb-4">GET IN TOUCH</h3>
            <p className="text-body text-xs md:text-sm text-muted-foreground mb-10 tracking-[0.1em]">SUPPORT@SIIP.STORE</p>
            
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-display text-[10px] tracking-widest font-bold">NAME</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="ENTER NAME"
                    className="w-full bg-secondary border border-border px-4 py-3 text-body text-sm outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-display text-[10px] tracking-widest font-bold">EMAIL</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="ENTER EMAIL"
                    className="w-full bg-secondary border border-border px-4 py-3 text-body text-sm outline-none focus:border-foreground transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-display text-[10px] tracking-widest font-bold">MESSAGE</label>
                <textarea 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="HOW CAN WE HELP?"
                  className="w-full bg-secondary border border-border px-4 py-3 text-body text-sm outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 text-display text-xs font-bold tracking-[0.3em] hover:bg-muted-foreground transition-colors mt-4"
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
