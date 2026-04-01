import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import { products } from '../lib/products';

const categories = ['ALL', 'TEES', 'HOODIES', 'JACKETS', 'ACCESSORIES'];

const ProductCard = ({ product, addToCart }: { product: any, addToCart: any }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <div className="group cursor-pointer">
      <div className="aspect-[4/5] bg-[#F9F9F9] relative overflow-hidden mb-3 border border-black/5">
        <Link to={`/product/${product.id}`}>
            {/* Main Image */}
            <img 
            src={product.image} 
            alt={product.name} 
            className={`w-full h-full object-cover object-top transition-all duration-700 ${product.hoverImage ? 'group-hover:opacity-0 group-hover:scale-105' : 'group-hover:scale-105'}`} 
            />
            {/* Hover Image */}
            {product.hoverImage && (
            <img 
                src={product.hoverImage} 
                alt={`${product.name} alternate view`} 
                className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-700 transition-opacity" 
            />
            )}
        </Link>
        
        {product.tag && (
          <span className="absolute top-3 left-3 bg-foreground text-background text-display text-[9px] font-bold px-2 py-0.5 z-10 uppercase tracking-widest pointer-events-none">
            {product.tag}
          </span>
        )}

        {/* Size Selector and Quick View - Hover logic refined for mobile visibility */}
        <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <div className="bg-gradient-to-t from-black/60 via-black/20 to-transparent absolute inset-0 pointer-events-none" />
            
            <div className="p-2 md:p-4 space-y-2 relative z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-wrap gap-1.5 justify-center">
                    {sizes.map((size) => (
                        <button
                            key={size}
                            onClick={(e) => {
                                e.stopPropagation();
                                addToCart({ ...product, size });
                            }}
                            className="w-9 h-9 md:w-10 md:h-10 bg-white text-black text-[10px] font-bold border border-black/5 hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center backdrop-blur-md"
                        >
                            {size}
                        </button>
                    ))}
                </div>
                
                <Dialog open={isQuickViewOpen} onOpenChange={setIsQuickViewOpen}>
                    <DialogTrigger asChild>
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsQuickViewOpen(true);
                            }}
                            className="w-full bg-foreground text-background text-display text-[9px] md:text-[10px] tracking-[0.2em] font-black text-center py-4 uppercase"
                        >
                            QUICK VIEW
                        </button>
                    </DialogTrigger>
                    <DialogContent className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[96vw] sm:w-full sm:max-w-[1050px] bg-white p-0 border-none rounded-none shadow-[0_30px_100px_rgba(0,0,0,0.3)] overflow-hidden z-[201]">
                        <div className="flex flex-col md:grid md:grid-cols-2 h-full max-h-[92vh] md:max-h-[80vh] overflow-y-auto no-scrollbar scrollbar-hide">
                            <div className="bg-[#FAFAFA] flex items-center justify-center relative overflow-hidden h-[350px] md:h-auto p-12 md:p-24 border-r border-black/5">
                               <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-1000 hover:scale-110" 
                                />
                                {product.tag && (
                                    <span className="absolute top-10 left-10 bg-black text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-[0.3em] z-10 shadow-lg">
                                        {product.tag}
                                    </span>
                                )}
                            </div>
                            <div className="p-10 md:p-20 flex flex-col justify-center bg-white">
                                <div className="mb-12">
                                    <div className="flex items-center gap-3 text-blue-600 mb-6 animate-in slide-in-from-left-4 duration-500">
                                        <div className="w-8 h-[2px] bg-blue-600" />
                                        <p className="text-display text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-black">Archive / {product.category}</p>
                                    </div>
                                    <h2 className="text-display text-4xl md:text-6xl font-black uppercase mb-6 leading-[0.9] tracking-tighter italic">{product.name}</h2>
                                    <div className="flex items-end gap-6 mb-10">
                                        <span className="text-3xl md:text-5xl font-black tracking-tighter leading-none">{product.price}</span>
                                        {product.originalPrice && <span className="text-lg md:text-xl text-muted-foreground/30 line-through italic font-bold mb-1">{product.originalPrice}</span>}
                                    </div>
                                    
                                    <p className="text-body text-[14px] md:text-[17px] text-muted-foreground/70 leading-relaxed font-medium max-w-md">
                                        {product.description || 'Crafted with premium materials and signature archive detailing. Features a heavyweight silhouette designed for durability.'}
                                    </p>
                                </div>

                                <div className="space-y-10 mb-14">
                                    <div className="flex items-center justify-between border-b border-black/10 pb-4">
                                        <p className="text-display text-[11px] font-black uppercase tracking-[0.4em]">Choose Size</p>
                                        <button className="text-[10px] font-black uppercase underline underline-offset-4 opacity-40 hover:opacity-100 transition-opacity">Size Guide</button>
                                    </div>
                                    <div className="flex flex-wrap gap-3 md:gap-4">
                                        {sizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-[13px] md:text-[15px] font-black transition-all duration-300 border-2 ${
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

                                <div className="flex flex-col gap-6">
                                    <button
                                        onClick={() => {
                                            if (selectedSize) {
                                                addToCart({ ...product, size: selectedSize });
                                                setIsQuickViewOpen(false);
                                            }
                                        }}
                                        disabled={!selectedSize}
                                        className={`w-full py-6 md:py-8 text-[12px] md:text-[14px] font-black uppercase tracking-[0.5em] transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.15)] ${
                                            selectedSize 
                                            ? 'bg-black text-white hover:bg-zinc-900 active:scale-[0.97] cursor-pointer' 
                                            : 'bg-zinc-100 text-zinc-300 cursor-not-allowed border-none'
                                        }`}
                                    >
                                        {selectedSize ? `Add to Cart — ${selectedSize}` : 'Select your size'}
                                    </button>
                                    
                                    <Link 
                                        to={`/product/${product.id}`}
                                        className="text-center text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-black transition-colors underline underline-offset-8 decoration-black/10 hover:decoration-black"
                                    >
                                        View full details
                                    </Link>
                                </div>
                                
                                <div className="h-4 md:hidden"></div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
      </div>
      
      <div className="mt-4 flex flex-col space-y-1">
        <Link to={`/product/${product.id}`} className="hover:opacity-60 transition-opacity">
            <div className="flex justify-between items-start">
                <h3 className="text-display text-[11px] md:text-xs font-bold uppercase tracking-wider text-foreground/90">{product.name}</h3>
                <span className="text-display text-[11px] md:text-xs font-bold tracking-tight">{product.price}</span>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-[10px] text-muted-foreground tracking-[0.15em] font-medium">{product.category}</p>
                {product.originalPrice && <span className="text-[10px] text-muted-foreground/60 line-through tracking-tighter">{product.originalPrice}</span>}
            </div>
        </Link>
      </div>
    </div>
  );
};

const Store = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'ALL') return products;
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 border-none">
      <Navbar />
      
      <main className="container mx-auto px-4 md:px-12 py-8 md:py-20 max-w-[1600px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-6 md:gap-10">
          <div className="space-y-2 md:space-y-4 text-center md:text-left">
            <p className="text-display text-[8px] md:text-[10px] tracking-[0.5em] text-muted-foreground font-black uppercase">Archive Collection</p>
            <h1 className="text-display text-3xl md:text-7xl font-black uppercase tracking-tighter leading-none italic">
                THE STORE<span className="text-blue-600">.</span>
            </h1>
          </div>
          
          <div className="flex flex-row overflow-x-auto pb-4 md:pb-0 gap-2 md:gap-3 no-scrollbar scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-display text-[9px] md:text-[10px] font-extrabold tracking-widest px-5 md:px-7 py-2.5 md:py-3 uppercase border transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category 
                    ? 'bg-foreground text-background border-foreground' 
                    : 'bg-transparent text-foreground/60 border-foreground/10 hover:border-foreground/40 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-10 md:gap-x-10 md:gap-y-20">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
            <div className="py-24 md:py-40 text-center">
                <p className="text-display text-muted-foreground text-xs tracking-widest font-black uppercase">No products in this category</p>
                <button 
                    onClick={() => setActiveCategory('ALL')}
                    className="mt-6 text-display text-[10px] md:text-[11px] font-black underline underline-offset-8 uppercase tracking-widest"
                >
                    Back to all products
                </button>
            </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Store;
