import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import BrandOriginSection from '@/components/BrandOriginSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductGrid />
      <BrandOriginSection />
      <Footer />
    </div>
  );
};

export default Index;
