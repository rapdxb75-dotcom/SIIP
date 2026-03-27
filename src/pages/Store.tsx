import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

// Import images
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
];

const Store = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-background pt-24">
      <Navbar />
      
      <main className="container mx-auto px-4 md:px-8 py-16">
        <div className="mb-12">
          <p className="text-display text-xs tracking-[0.3em] text-muted-foreground mb-2">SHOP THE COLLECTION</p>
          <h1 className="text-display text-3xl md:text-5xl font-bold">ARCADE CART STORE</h1>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[3px]">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
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
                  <span className="absolute top-2 left-2 bg-foreground text-background text-display text-[10px] px-2 py-0.5 z-10">
                    {product.tag}
                  </span>
                )}

                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="absolute inset-x-0 bottom-0 bg-foreground text-background text-display text-xs text-center py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20"
                >
                  ADD TO CART
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="text-display text-xs md:text-sm font-bold uppercase tracking-wider">{product.name}</h3>
                <div className="text-body text-xs mt-1 flex items-center gap-2">
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
      </main>

      <Footer />
    </div>
  );
};

export default Store;
