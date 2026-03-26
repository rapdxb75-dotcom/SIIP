import SpaceInvadersGame from './SpaceInvadersGame';
import StarsBackground from './StarsBackground';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen bg-[#090A0F] overflow-hidden">
      <StarsBackground />
      <div className="w-full h-full relative z-10">
        <SpaceInvadersGame />
      </div>
    </section>
  );
};

export default HeroSection;
