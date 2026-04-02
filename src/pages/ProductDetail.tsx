import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { products } from '../lib/products';
import { 
  ChevronRight, 
  ChevronLeft, 
  Plus, 
  Minus, 
  Maximize2, 
  Info, 
  Ruler, 
  ShieldCheck, 
  CloudRain, 
  Sparkle 
} from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '../components/ui/accordion';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [accordionValue, setAccordionValue] = useState<string | undefined>(undefined);

  const product = useMemo(() => {
    return products.find(p => p.id === parseInt(id || ''));
  }, [id]);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    if (!product) {
      // Small delay to allow any async loading if applicable
      const timer = setTimeout(() => {
         if (!product) navigate('/store');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [product, navigate]);

  if (!product) return null;

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const galleryImages = [product.image, product.hoverImage].filter(Boolean) as string[];

  const handleAddToCart = () => {
    if (selectedSize) {
      for (let i = 0; i < quantity; i++) {
        addToCart({ ...product, size: selectedSize });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 md:px-12 pt-32 md:pt-48 pb-12 md:pb-20">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center flex-wrap gap-3 text-[9px] md:text-xs font-black uppercase tracking-[0.2em] mb-12 md:mb-16 text-muted-foreground">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight size={14} className="opacity-40 text-black mx-1" strokeWidth={3} />
          <Link to="/store" className="hover:text-black transition-colors">Store</Link>
          <ChevronRight size={14} className="opacity-40 text-black mx-1" strokeWidth={3} />
          <span className="text-black truncate max-w-[150px] md:max-w-none italic">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="aspect-[4/5] bg-[#F5F5F5] relative overflow-hidden group">
               <img 
                 src={galleryImages[activeImageIndex]} 
                 alt={product.name} 
                 className="w-full h-full object-contain mix-blend-multiply p-8 md:p-16 transition-transform duration-700" 
               />
               
               {galleryImages.length > 1 && (
                 <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <button 
                      onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : prev))}
                      className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center pointer-events-auto hover:bg-black hover:text-white transition-all transform hover:scale-110"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={() => setActiveImageIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : prev))}
                      className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center pointer-events-auto hover:bg-black hover:text-white transition-all transform hover:scale-110"
                    >
                      <ChevronRight size={20} />
                    </button>
                 </div>
               )}

               <button className="absolute bottom-6 right-6 w-10 h-10 bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110">
                 <Maximize2 size={16} />
               </button>

               {product.tag && (
                 <span className="absolute top-8 left-8 bg-black text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 shadow-xl">
                   {product.tag}
                 </span>
               )}
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-4">
              {galleryImages.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-24 h-24 bg-[#F5F5F5] border-2 transition-all p-2 ${
                    activeImageIndex === idx ? 'border-black opacity-100 shadow-md' : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-contain mix-blend-multiply" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Information */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-8 md:mb-10 pb-8 md:pb-10 border-b border-black/5 text-center md:text-left">
              <p className="text-display text-[9px] md:text-xs text-muted-foreground tracking-[0.4em] uppercase font-bold mb-3 md:mb-4 italic">ARCADE GENESIS // {product.category}</p>
              <h1 className="text-display text-2xl md:text-6xl font-black uppercase leading-[1.1] tracking-tighter mb-4 md:mb-6 underline decoration-black/5 underline-offset-[12px] md:underline-offset-[16px] italic">{product.name}</h1>
              
              <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6 mt-6 md:mt-8">
                <span className="text-xl md:text-3xl font-black tracking-tighter text-black">{product.price}</span>
                {product.originalPrice && <span className="text-sm md:text-lg text-muted-foreground/50 line-through italic font-bold">{product.originalPrice}</span>}
              </div>
            </div>

            <p className="text-body text-[14px] md:text-[18px] text-muted-foreground/80 leading-relaxed mb-12 max-w-lg font-medium">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center justify-between">
                <p className="text-display text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em]">Available Sizes</p>
                <Link 
                  to="/size-guide"
                  className="text-[10px] md:text-[11px] font-black uppercase underline underline-offset-4 tracking-widest opacity-60 hover:opacity-100 flex items-center gap-2 group transition-all"
                >
                  <Ruler size={14} className="group-hover:scale-125 transition-transform" />
                  Size guide
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 md:w-16 md:h-16 border-2 font-black transition-all duration-300 flex items-center justify-center text-xs md:text-sm ${
                      selectedSize === size 
                      ? 'bg-black text-white border-black scale-110 shadow-2xl z-10' 
                      : 'bg-transparent text-black border-black/5 hover:border-black/50 hover:bg-black/5'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and CTA */}
            <div className="flex flex-col gap-4 mb-14">
              <div className="flex items-center justify-between border-2 border-black/5 h-14 md:h-16 bg-zinc-50/50 px-2">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-12 h-full flex items-center justify-center hover:bg-black hover:text-white transition-all"
                >
                  <Minus size={14} />
                </button>
                <div className="flex flex-col items-center">
                    <span className="text-[9px] font-black uppercase tracking-widest opacity-30 leading-none mb-1">Quantity</span>
                    <span className="text-sm font-black tracking-widest leading-none">{quantity}</span>
                </div>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-12 h-full flex items-center justify-center hover:bg-black hover:text-white transition-all"
                >
                  <Plus size={14} />
                </button>
              </div>
              
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`w-full h-14 md:h-16 text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] transition-all duration-500 shadow-xl active:scale-[0.98] ${
                  selectedSize 
                  ? 'bg-black text-white hover:bg-zinc-900 border-none' 
                  : 'bg-zinc-100 text-zinc-300 cursor-not-allowed border-none'
                }`}
              >
                {selectedSize ? `Add to bag` : 'Select your size'}
              </button>
            </div>

            {/* Accordion List for Detail Info */}
            <Accordion 
                id="product-specs"
                type="single" 
                collapsible 
                value={accordionValue}
                onValueChange={setAccordionValue}
                className="w-full border-t border-black/10"
            >
              <AccordionItem value="story" className="border-b-black/10">
                <AccordionTrigger className="text-display underline-none text-[11px] font-black uppercase tracking-[0.3em] py-6 hover:no-underline group">
                   <div className="flex items-center gap-3">
                      <Sparkle size={16} className="text-blue-600 transition-transform group-hover:rotate-12" />
                      Product story
                   </div>
                </AccordionTrigger>
                <AccordionContent className="text-body text-[13px] md:text-[15px] leading-relaxed text-muted-foreground pb-8">
                  {product.story || 'Every piece at SIIP is a curated fragment of our archive—designed to withstand time and fleeting trends. Our story begins in the neon-lit arcades of the past, reborn for the street elite of the future.'}
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="materials" className="border-b-black/10">
                <AccordionTrigger className="text-display underline-none text-[11px] font-black uppercase tracking-[0.3em] py-6 hover:no-underline group">
                   <div className="flex items-center gap-3">
                      <CloudRain size={16} className="text-zinc-400 group-hover:scale-110 transition-transform" />
                      Materials & construction
                   </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(product.materials || ['100% Cotton', 'Heavyweight fabric', 'Reinforced seams']).map((mat, idx) => (
                       <li key={idx} className="flex items-center gap-3 text-body text-[13px] text-muted-foreground/80">
                         <div className="w-1.5 h-1.5 bg-black/20 rounded-full" />
                         {mat}
                       </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="care" className="border-b-black/10">
                <AccordionTrigger className="text-display underline-none text-[11px] font-black uppercase tracking-[0.3em] py-6 hover:no-underline group">
                   <div className="flex items-center gap-3">
                      <ShieldCheck size={16} className="text-zinc-400 group-hover:translate-y-[-2px] transition-transform" />
                      Care instructions
                   </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                   <ul className="space-y-3">
                    {(product.careInstructions || ['Machine wash cold', 'Turn inside out', 'Do not bleach']).map((care, idx) => (
                       <li key={idx} className="text-body text-[13px] text-muted-foreground/80 lowercase italic first-letter:uppercase">
                         • {care}
                       </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="credits" className="border-b-black/10">
                <AccordionTrigger className="text-display underline-none text-[11px] font-black uppercase tracking-[0.3em] py-6 hover:no-underline group">
                   <div className="flex items-center gap-3">
                      <Info size={16} className="text-zinc-400 group-hover:rotate-12 transition-transform" />
                      Artwork credit
                   </div>
                </AccordionTrigger>
                <AccordionContent className="text-body text-[13px] md:text-[15px] italic text-muted-foreground pb-8">
                  {product.artworkCredit || 'Curated by SIIP Studio Division. Part of the Restricted Collective.'}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sizing" className="border-b-black/10">
                <AccordionTrigger className="text-display underline-none text-[11px] font-black uppercase tracking-[0.3em] py-6 hover:no-underline group">
                   <div className="flex items-center gap-3">
                      <Ruler size={16} className="text-zinc-400 group-hover:scale-110 transition-transform" />
                      Size details
                   </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <div className="overflow-x-auto no-scrollbar">
                    <table className="w-full text-left text-[11px] uppercase font-black tracking-widest min-w-[400px]">
                        <thead>
                            <tr className="border-b border-black/5 opacity-40">
                                <th className="py-4 pr-10">Size</th>
                                <th className="py-4 px-10">Chest (CM)</th>
                                <th className="py-4 px-10">Length (CM)</th>
                                <th className="py-4 pl-10 text-right">Sleeve (CM)</th>
                            </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                            <tr className="border-b border-black/5">
                                <td className="py-4 pr-10 text-black">Small</td>
                                <td className="py-4 px-10">54</td>
                                <td className="py-4 px-10">68</td>
                                <td className="py-4 pl-10 text-right">22</td>
                            </tr>
                            <tr className="border-b border-black/5">
                                <td className="py-4 pr-10 text-black">Medium</td>
                                <td className="py-4 px-10">57</td>
                                <td className="py-4 px-10">70</td>
                                <td className="py-4 pl-10 text-right">23</td>
                            </tr>
                            <tr className="border-b border-black/5">
                                <td className="py-4 pr-10 text-black">Large</td>
                                <td className="py-4 px-10">60</td>
                                <td className="py-4 px-10">72</td>
                                <td className="py-4 pl-10 text-right">24</td>
                            </tr>
                            <tr className="border-none">
                                <td className="py-4 pr-10 text-black">X-Large</td>
                                <td className="py-4 px-10">63</td>
                                <td className="py-4 px-10">74</td>
                                <td className="py-4 pl-10 text-right">25</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                  <p className="mt-8 text-[11px] text-muted-foreground/60 italic font-medium leading-relaxed max-w-sm">
                    * All measurements are taken flat. Our archive garments feature an oversized, heavyweight silhouette. We recommend choosing your standard size for the intended fit.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
