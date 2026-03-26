import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import BrandOriginSection from '@/components/BrandOriginSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBanner />
      <Navbar />
      <HeroSection />
      <ProductGrid />
      <BrandOriginSection />
      <Footer />
    </div>
  );
};

export default Index;
