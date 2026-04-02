import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import playGif from '@/assets/Play-Win.gif';

const PlayWinSection = () => {
  const scrollToGame = () => {
    const gameSection = document.getElementById('home');
    if (gameSection) {
      gameSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-black">
      {/* Full-width 2-Column Section with 100vh height */}
      <div className="relative w-full h-[100vh] bg-[#090A0F] overflow-hidden flex flex-col md:flex-row shadow-2xl">
        
        {/* Left Side Content - Balanced 2-Column */}
        <div className="relative z-10 w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center md:items-start px-8 md:px-20 py-12 md:py-0 order-2 md:order-1 text-center md:text-left bg-[#090A0F]">
           <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-12 duration-1000 ease-out max-w-xl">
             <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[1.1] text-display">
                Enter the arcade. Beat the high score to unlock exclusive archival access and win #NWPR prizes. Are you game?
             </h2>
             <Link to="/play">
               <Button
                  className="w-full sm:w-auto bg-white text-black hover:bg-white/90 transition-all duration-300 px-10 py-5 text-sm md:text-base font-bold uppercase tracking-[0.2em] rounded-none text-display"
               >
                Play Now
              </Button>
             </Link>
           </div>
        </div>

        {/* Right Side GIF Container - Balanced 2-Column */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full order-1 md:order-2 overflow-hidden bg-[#090A0F]">
            <img 
               src={playGif} 
               alt="Play and Win" 
               className="w-full h-full object-contain select-none pointer-events-none"
            />
            {/* Blending Gradient Overlay - Perfectly centered blend */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#090A0F] via-[#090A0F]/20 to-transparent md:from-0% md:via-15% md:to-70% pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default PlayWinSection;
