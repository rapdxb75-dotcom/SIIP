import React from 'react';
import { X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';

const featuredProducts = [
  { id: 1, name: 'VAN GOGH X PALESTINE OVERSIZED T-SHIRT', image: img1 },
  { id: 2, name: 'LOVE MORE SHIRT', image: img2 },
  { id: 3, name: 'STAND FOR PALESTINE OVERSIZED T-SHIRT', image: img3 },
  { id: 4, name: 'FREE GAZA OVERSIZED T-SHIRT', image: img4 },
  { id: 5, name: 'PALESTINE TAPE WASHED OVERSIZED T-SHIRT', image: img5 },
  { id: 6, name: 'MALCOLM X PALESTINE OVERSIZED T-SHIRT', image: img6 },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white animate-fade-in overflow-y-auto">
      <div className="container mx-auto px-4 md:px-8 py-8">
        {/* Header/Close */}
        <div className="flex justify-end mb-8">
          <button onClick={onClose} className="text-black hover:opacity-60 transition-opacity">
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* Search Input Area */}
        <div className="flex items-center gap-6 mb-20">
          <span className="text-black font-bold text-xs tracking-[0.2em]">SEARCH</span>
          <div className="flex-1 relative border-b border-black/10 flex items-center pr-4">
            <input 
              autoFocus
              type="text" 
              placeholder="What are you looking for?"
              className="w-full bg-transparent py-4 text-black text-lg outline-none placeholder:text-black/30 placeholder:font-light"
            />
            <Search size={20} className="text-black/40" />
          </div>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-black font-bold text-xs tracking-[0.2em] mb-8">NAVIGATION MENU</h4>
            <ul className="space-y-6">
              {[
                { label: 'Home', path: '/' },
                { label: 'Store', path: '/' },
                { label: 'Collections', path: '/' },
                { label: 'Fire', path: '/' }
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.path} 
                    onClick={onClose}
                    className="text-black/60 hover:text-black text-sm transition-colors text-display uppercase tracking-wider"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Featured Collection */}
          <div className="lg:col-span-10">
            <h4 className="text-black font-bold text-xs tracking-[0.2em] mb-8">FEATURED COLLECTION</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {featuredProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="aspect-[4/5] bg-[#f5f5f5] overflow-hidden mb-3">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ imageRendering: 'auto' }}
                    />
                  </div>
                  <h5 className="text-[10px] md:text-[11px] font-bold text-black uppercase leading-tight tracking-tight">
                    {product.name}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
