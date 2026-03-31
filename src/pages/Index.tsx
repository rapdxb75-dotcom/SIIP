import Navbar from '@/components/Navbar';
import VideoHero from '@/components/VideoHero';
import PlayWinSection from '@/components/PlayWinSection';
import FoundersSection from '@/components/FoundersSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import CollectionAboutSection from '@/components/CollectionAboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <VideoHero />
      <ProductGrid />
      <PlayWinSection />
      <FoundersSection />
      <TestimonialsSection />
      {/* <HeroSection /> */}
      {/* <CollectionAboutSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
