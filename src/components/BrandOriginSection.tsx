import aboutImage from '../assets/about-image.png';

const BrandOriginSection = () => {
  return (
    <section className="py-20 md:py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text SIDE */}
          <div className="order-2 lg:order-1 space-y-8 md:space-y-12">
            <div className="space-y-4">
              <span className="text-display text-[10px] md:text-xs tracking-[0.4em] text-primary uppercase font-bold">The SIIP Heritage</span>
              <h2 className="text-display text-3xl md:text-5xl font-black tracking-tight leading-tight">
                OUR GENESIS<span className="text-primary">.</span>
              </h2>
            </div>
            
            <div className="space-y-4 md:space-y-6 text-body text-sm md:text-base text-muted-foreground leading-relaxed">
              <p className="border-l border-primary/20 pl-6 italic">
                I’m an assyrian proudly carrying a heritage so rich and groundbreaking that we’ve shaped the world: inventors of the written word, architects of early civilisations, contributors to humanity’s greatest leaps forward, all rooted in iraq as our enduring motherland. yet today, too few know our story. Our ancient language, steadfast faith, and living traditions passed from parent to child keep us unbreakable, and it’s time to reclaim that legacy for all to see.
              </p>
              
              <p className="pl-6">
                I’ve lived across the globe, embracing every culture, faith, and people with deep respect and love—always the respectful outsider who blends it all while holding my roots tight. it’s made me at home everywhere, yet forever carrying that Assyrian spark, welcoming all into the circle. this brand is my fierce stand: reviving Assyrian brilliance and keeping our culture alive and thriving, while celebrating the vibrant traditions of my middle eastern brothers and sisters levantines, persians, arabs, all of us and the global influences that move me. it’s not heavy or exclusive; it’s for everyone streetwear heads, festival lovers, everyday creatives, anyone who vibes with style that carries soul. this is my creative fire: wearable art blending our timeless genius with fresh, universal energy you can rock anywhere and share with the world. join me wear it, live it, let’s bring it all back together.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="/About-us" 
                className="inline-flex items-center group text-display text-[10px] md:text-xs tracking-[0.3em] font-bold uppercase transition-all duration-300"
              >
                <span className="border-b border-foreground/50 pb-1 group-hover:border-primary group-hover:text-primary transition-colors">DISCOVER OUR SOUL</span>
                <span className="ml-4 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
              <img 
                src={aboutImage} 
                alt="SIIP Heritage and Culture" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 border-[1px] border-foreground/10 z-20 m-4 pointer-events-none" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 border-l border-b border-primary/30 z-0 hidden md:block" />
            <div className="absolute -top-8 -right-8 w-24 h-24 border-r border-t border-primary/30 z-0 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandOriginSection;
