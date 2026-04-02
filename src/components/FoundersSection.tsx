import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import founderImg from '@/assets/Founder-SIIP.avif';

const FoundersSection = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        {/* Massive Title - Responsive Scale Fix */}
        <div className="w-full mb-6 md:-mb-15 overflow-hidden px-4">
          <h2 className="text-[11vw] sm:text-[13vw] md:text-[18vw] font-black text-white/10 uppercase tracking-[-0.08em] leading-none select-none text-display text-center">
            FOUNDERS
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-16 md:gap-32">
          
          {/* Left Column - Narratives - Simplified Fonts */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left order-2 md:order-1">
             <div className="space-y-8 md:space-y-12 animate-in fade-in slide-in-from-left-8 duration-1000 ease-out">
                <div className="space-y-4">
                   <h3 className="text-2xl md:text-3xl lg:text-4xl text-white tracking-normal leading-[1.3] font-medium text-body">
                      SIIP turns creativity into resistance.
                   </h3>
                   <div className="w-12 h-[1px] bg-white/20" />
                </div>
                
                <div className="space-y-8">
                   <div className="space-y-6">
                      <p className="text-white/80 text-sm md:text-lg font-normal tracking-wide text-body leading-relaxed max-w-md">
                         SIIP wasn't built in a boardroom. It was born between two friends, Gabby and Sargina, sharing a vision for art that moves with the people.
                      </p>
                      <p className="text-white/60 text-sm md:text-lg font-normal tracking-wide text-body leading-relaxed italic max-w-md">
                         We believe what you wear should reflect who you are and what you stand for. Our medium is the print; our heart is the community.
                      </p>
                   </div>

                   <Button
                      asChild
                      className="bg-white text-black hover:bg-white/90 border-2 border-white transition-all duration-300 px-8 py-5 text-xs md:text-sm font-bold uppercase tracking-[0.2em] rounded-none text-display"
                   >
                     <Link to="/About-us">Learn More</Link>
                   </Button>
                </div>
             </div>
          </div>

          {/* Right Column - Portrait Image and Badge */}
          <div className="w-full md:w-[35%] flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative group max-w-[320px] md:max-w-none w-full">
              {/* Portrait Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] shadow-2xl">
                <img 
                   src={founderImg} 
                   alt="Founders of SIIP" 
                   className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
                />
                {/* Subtle Vignetting */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Badge Overlay - Right Top Corner with Name */}
              <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 z-20">
                <div className="inline-block relative px-6 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-[2px]">
                   <div className="absolute inset-0 border border-white/20 rounded-full scale-[1.1] rotate-3" />
                   <span className="text-white text-xs md:text-base font-black tracking-tight text-display whitespace-nowrap block mb-2">MEET THE FOUNDERS</span>
                   <p className="text-white/60 text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-black text-display text-center border-t border-white/5 pt-2">GABBY & SARGINA</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
