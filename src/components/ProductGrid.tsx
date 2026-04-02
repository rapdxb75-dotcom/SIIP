import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../lib/products';
import { Link } from 'react-router-dom';

const ProductGrid = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  });
  const { addToCart } = useCart();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const handleSizeSelect = (productId: number, size: string) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  return (
    <section id="store" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Premium Header - Custom Messaging */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl animate-in fade-in slide-in-from-left-8 duration-1000">
            <p className="text-display text-[10px] md:text-xs tracking-[0.4em] text-white/40 mb-4 uppercase font-bold italic leading-relaxed">
              No War por Favor. Art meets activism. <span className="text-white/60">#NWPR Limited drop.</span>
            </p>
            <h2 className="text-display text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              THE SIIP <br /> ARCHIVE<span className="text-blue-500">.</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white disabled:opacity-10 hover:bg-white hover:text-black hover:border-white transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous products"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white disabled:opacity-10 hover:bg-white hover:text-black hover:border-white transition-all duration-300 backdrop-blur-sm"
              aria-label="Next products"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 md:gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_calc(85%-12px)] sm:flex-[0_0_calc(45%-16px)] lg:flex-[0_0_calc(25%-24px)] group"
              >
                <div className="relative aspect-[4/5] bg-white/[0.03] border border-white/5 overflow-hidden group/card shadow-2xl rounded-[2px]">
                  <Link to={`/product/${product.id}`}>
                    {/* Main Product Image with subtle zoom */}
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className={`w-full h-full object-cover object-center transition-all duration-1000 ${product.hoverImage ? 'group-hover:opacity-0 group-hover:scale-110' : 'group-hover:scale-110'}`} 
                    />
                    
                    {/* Hover Image for discovery */}
                    {product.hoverImage && (
                      <img 
                        src={product.hoverImage} 
                        alt={`${product.name} alternate view`} 
                        className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-1000" 
                      />
                    )}
                  </Link>

                  {/* Top Tag */}
                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-white text-black text-display text-[9px] font-black px-3 py-1 uppercase tracking-widest z-20">
                      {product.tag}
                    </span>
                  )}

                  {/* Interactive Quick Add Overlay */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover/card:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 space-y-6">
                     
                     {/* Size Selector */}
                     <div className="space-y-3 translate-y-8 group-hover/card:translate-y-0 transition-transform duration-500 delay-75">
                        <p className="text-[10px] text-white/50 uppercase font-black tracking-[0.2em] text-display">Quick Size Select</p>
                        <div className="flex flex-wrap gap-2">
                           {['S', 'M', 'L', 'XL'].map((size) => (
                             <button
                               key={size}
                               onClick={(e) => {
                                 e.stopPropagation();
                                 handleSizeSelect(product.id, size);
                               }}
                               className={`w-10 h-10 flex items-center justify-center text-xs font-black transition-all duration-300 border ${
                                 selectedSizes[product.id] === size 
                                 ? 'bg-white text-black border-white' 
                                 : 'bg-transparent text-white border-white/20 hover:border-white'
                               }`}
                             >
                               {size}
                             </button>
                           ))}
                        </div>
                     </div>

                      {/* Add to Cart CTA */}
                      <button 
                         onClick={(e) => {
                           e.stopPropagation();
                           if (selectedSizes[product.id]) {
                               addToCart({ ...product, size: selectedSizes[product.id] });
                           }
                         }}
                         disabled={!selectedSizes[product.id]}
                         className={`w-full py-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-500 translate-y-8 group-hover/card:translate-y-0 transition-transform duration-500 delay-150 shadow-2xl ${
                           selectedSizes[product.id] 
                           ? 'bg-white text-black hover:bg-zinc-200 cursor-pointer' 
                           : 'bg-white/10 text-white/30 cursor-not-allowed'
                         }`}
                       >
                         {selectedSizes[product.id] ? `ADD ${selectedSizes[product.id]} TO CART` : 'SELECT SIZE'}
                      </button>

                  </div>
                </div>

                {/* Product Info - Minimalist Display */}
                <div className="mt-6 flex flex-col items-start space-y-2">
                  <div className="flex flex-col items-start space-y-1">
                    <h3 className="text-display text-xs md:text-sm font-black uppercase tracking-widest text-white/90 group-hover:text-white transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest text-display line-clamp-1 italic">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white text-base md:text-lg font-bold tracking-tighter">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-white/30 line-through text-xs md:text-sm font-medium">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
