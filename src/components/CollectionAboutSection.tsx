import imgCollection from '../assets/4.png';
import imgDetail from '../assets/product_4.png';

const CollectionAboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#090A0F] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Header Area */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-display text-[10px] md:text-xs tracking-[0.5em] text-primary-foreground/40 uppercase font-bold">ARCADE DROPS 2026</p>
            <h2 className="text-display text-4xl md:text-6xl font-black leading-none uppercase">
              LOREM <br/>
              IPSUM <br/>
              DOLOR<span className="text-primary-foreground/20">.</span>
            </h2>
            <div className="h-0.5 w-12 bg-primary-foreground/20" />
            <p className="text-body text-sm md:text-base text-primary-foreground/60 max-w-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

          {/* Visual Area */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-[400px] md:h-[600px]">
            <div className="relative overflow-hidden group border border-white/10">
              <img 
                src={imgCollection} 
                alt="Collection Aesthetic" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 hover:opacity-80"
              />
              <div className="absolute bottom-4 left-4 p-4 bg-black/40 backdrop-blur-md border border-white/10">
                <span className="text-display text-[9px] tracking-widest font-bold">STYLE // 001</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-[45%] relative overflow-hidden group border border-white/10">
                <img 
                  src={imgDetail} 
                  alt="Craft Detail" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 brightness-75 hover:brightness-100"
                />
              </div>
              <div className="h-[calc(55%-1rem)] bg-primary-foreground/5 p-8 flex flex-col justify-end border border-white/5 hover:bg-white/10 transition-colors group">
                <p className="text-display text-[11px] tracking-widest text-primary-foreground/30 mb-2">FABRICATION</p>
                <p className="text-body text-xs text-primary-foreground/60 leading-relaxed group-hover:text-primary-foreground transition-colors">
                  Heavyweight 240GSM cotton, enzyme washed for a vintage feel. Screen-printed with specialized puff inks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Text */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 rotate-90 hidden xl:block">
        <span className="text-display text-8xl md:text-[12rem] font-black text-white/[0.02] select-none whitespace-nowrap">
          COLLECTION ARCADE
        </span>
      </div>
    </section>
  );
};

export default CollectionAboutSection;
