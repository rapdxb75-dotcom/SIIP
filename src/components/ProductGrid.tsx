import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';

// Import new product images and their hover versions
import p1_main from '../assets/product_1 (2).png';
import p1_hover from '../assets/product_1_2.png';
import p2_main from '../assets/product_2.png';
import p2_hover from '../assets/product_2_2.png';
import p3_main from '../assets/product_3.png';
import p3_hover from '../assets/product_3_3.png';
import p4_main from '../assets/product_4.png';
import p4_hover from '../assets/product_4_4.png';

const products = [
  { id: 1, name: 'SIIP CLASSIC TEE', price: '$48', originalPrice: '$65', tag: 'NEW', image: p1_main, hoverImage: p1_hover },
  { id: 2, name: 'URBAN HOODIE', price: '$89', originalPrice: '$110', tag: 'BEST', image: p2_main, hoverImage: p2_hover },
  { id: 3, name: 'HERITAGE CAP', price: '$32', originalPrice: '$45', tag: null, image: p3_main, hoverImage: p3_hover },
  { id: 4, name: 'SIIP ARCHIVE JACKET', price: '$120', originalPrice: '$155', tag: 'LTD', image: p4_main, hoverImage: p4_hover },
  { id: 5, name: 'GLITCH PANTS', price: '$72', originalPrice: '$95', tag: null, image: img5 },
  { id: 6, name: 'BYTE SOCKS', price: '$18', originalPrice: '$25', tag: 'NEW', image: img6 },
  { id: 7, name: 'CTRL BELT', price: '$35', originalPrice: '$49', tag: null, image: img7 },
  { id: 8, name: 'NEON SLIDES', price: '$55', originalPrice: '$80', tag: 'NEW', image: img8 },
];

const ProductGrid = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  });
  const { addToCart } = useCart();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

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

  return (
    <section id="store" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-display text-xs tracking-[0.3em] text-muted-foreground mb-2">COLLECTION</p>
            <h2 className="text-display text-2xl md:text-3xl font-bold">NEW DROPS</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              className="w-8 h-8 border border-border flex items-center justify-center disabled:opacity-20 hover:bg-foreground hover:text-background transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              className="w-8 h-8 border border-border flex items-center justify-center disabled:opacity-20 hover:bg-foreground hover:text-background transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-[3px]">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_calc(50%-1.5px)] lg:flex-[0_0_calc(25%-2.25px)] group cursor-pointer"
              >
                <div className="aspect-[4/5] bg-secondary border border-border relative overflow-hidden mb-3 flex items-center justify-center">
                  {/* Main Image */}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className={`w-full h-full object-cover object-center transition-all duration-700 ${product.hoverImage ? 'group-hover:opacity-0 group-hover:scale-110' : 'group-hover:scale-105'}`} 
                  />
                  {/* Hover Image */}
                  {product.hoverImage && (
                    <img 
                      src={product.hoverImage} 
                      alt={`${product.name} alternate view`} 
                      className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-700 transition-opacity" 
                    />
                  )}
                  {product.tag && (
                    <span className="absolute top-2 left-2 bg-foreground text-background text-display text-[10px] px-2 py-0.5">
                      {product.tag}
                    </span>
                  )}
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="absolute inset-x-0 bottom-0 bg-foreground text-background text-display text-xs text-center py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200"
                  >
                    ADD TO CART
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-display text-xs md:text-sm font-bold uppercase tracking-wider">{product.name}</h3>
                  <div className="text-body text-xs mt-1 flex items-center justify-center gap-2">
                    <span className={`${product.originalPrice ? 'font-bold text-foreground text-sm' : 'text-muted-foreground'}`}>
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-muted-foreground/60 line-through">
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
