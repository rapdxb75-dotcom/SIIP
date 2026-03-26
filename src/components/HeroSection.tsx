import SpaceInvadersGame from './SpaceInvadersGame';
import StarsBackground from './StarsBackground';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-black">
      <StarsBackground />
      <div className="w-full h-full relative z-10">
        <SpaceInvadersGame />
      </div>
    </section>
  );
};

export default HeroSection;
