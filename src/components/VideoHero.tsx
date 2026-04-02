import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import desktopVideo from '@/assets/Hero_Video.mp4';
import mobileVideo from '@/assets/Hero_Video_Mobile.mp4';

const VideoHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex items-end justify-start bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          key={isMobile ? 'mobile' : 'desktop'}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-center md:object-top opacity-80"
        >
          <source 
            src={isMobile ? mobileVideo : desktopVideo} 
            type="video/mp4" 
          />
        </video>
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 pb-20 md:pb-32">
        <div className="max-w-2xl flex flex-col items-start text-left space-y-6 md:space-y-8">
          {/* Text Overlay */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase drop-shadow-2xl text-display leading-tight mb-2">
              ART AS RESISTANCE. <br /> CONVICTION AS CRAFT.
            </h1>
            <p className="text-sm md:text-xl font-bold tracking-tight text-white/70 max-w-xl text-display italic">
              Welcome to the SIIP archive. Wearable art born from friendship and creative soul.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200 fill-mode-both">
            <Link to="/store" className="w-full sm:w-auto">
              <Button 
                  size="lg" 
                  className="w-full sm:min-w-[170px] bg-white text-black hover:bg-white/80 transition-all duration-300 px-6 py-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] rounded-none text-display"
              >
                Shop Drop 1
              </Button>
            </Link>
            <Link to="/play" className="w-full sm:w-auto">
              <Button 
                  size="lg" 
                  className="w-full sm:min-w-[170px] bg-white/10 backdrop-blur-md !text-white border border-white/40 md:hover:bg-white md:hover:!text-black transition-all duration-300 px-6 py-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] rounded-none text-display"
              >
                Play Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default VideoHero;
