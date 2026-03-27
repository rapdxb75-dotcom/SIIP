import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import CollectionAboutSection from '@/components/CollectionAboutSection';
import BrandOriginSection from '@/components/BrandOriginSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductGrid />
      <CollectionAboutSection />
      <BrandOriginSection />
      <Footer />
    </div>
  );
};

export default Index;
