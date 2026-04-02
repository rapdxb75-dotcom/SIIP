import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, ShoppingBag, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SearchModal from './SearchModal';
import AnnouncementBanner from './AnnouncementBanner';
import CartSidebar from './CartSidebar';
import { useCart } from '../context/CartContext';
import logo from '../assets/SIIP_MASTER_FULL_WHITE.png';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const menuItems = [
  { label: 'HOME', path: '/', id: null },
  { 
    label: 'STORE', 
    path: '/store', 
    id: null,
    subItems: [
      { label: 'ALL PRODUCTS', path: '/store' },
      { label: 'TEES', path: '/store?category=TEES' },
      { label: 'ACCESSORIES', path: '/store?category=ACCESSORIES' },
    ]
  },
  { label: 'PLAY', path: '/play', id: null },
  { label: 'ABOUT', path: '/About-us', id: null },
  { label: 'CONTACT', path: '/contact', id: null },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNavClick = (e: React.MouseEvent, item: typeof menuItems[0]) => {
    // Standard navigation, no preventDefault needed except for specific manual handling if any
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bannerHeight = 40; // --banner-height: 40px in css
  const translateY = Math.min(scrollY, bannerHeight);

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-[100] transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(-${translateY}px)` }}
      >
        <AnnouncementBanner />
        <nav 
          className={`transition-all duration-300 ${
            isHome 
              ? (scrolled ? 'bg-primary shadow-sm' : 'bg-transparent text-primary-foreground')
              : 'bg-primary shadow-sm'
          }`}
        >
          <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-14">
            <div className="flex items-center gap-6">
              <button className="md:hidden text-primary-foreground" onClick={() => setMobileOpen(true)}>
                <Menu size={22} strokeWidth={1.5} />
              </button>
              <div className="hidden md:flex items-center gap-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={(e) => handleNavClick(e, item)}
                    className="text-primary-foreground text-display text-xs tracking-wider hover:opacity-70 transition-opacity uppercase font-bold"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center h-full">
              <img src={logo} alt="SIIP" className="h-5 md:h-6 w-auto object-contain" />
            </Link>

            <div className="flex items-center gap-1 md:gap-3">
              <button 
                onClick={() => setSearchOpen(true)}
                className="relative text-primary-foreground hover:opacity-70 transition-opacity flex items-center justify-center w-8 h-8"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20px] h-[20px] cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative text-primary-foreground hover:opacity-70 transition-opacity flex items-center justify-center w-8 h-8 group"
              >
                <svg data-aid="icon-bag" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer scale-[1.2] origin-center">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.3404 5H15.5V6.5V14.5V16H14H2H0.5V14.5V6.5V5H1.6756C2.35583 2.13287 4.93284 0 8.00801 0C11.0832 0 13.6602 2.13287 14.3404 5ZM3.23103 5C3.87091 2.97109 5.76766 1.5 8.00801 1.5C10.2484 1.5 12.1451 2.97109 12.785 5H3.23103ZM2 6.5H14V14.5H2V6.5Z" fill="currentColor"></path>
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary-foreground text-primary text-[10px] flex items-center justify-center rounded-full font-bold transition-all duration-300">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[150] animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-md" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-primary flex flex-col shadow-2xl animate-in slide-in-from-left duration-500 ease-out">
            <div className="flex items-center justify-between px-6 h-14 border-b border-white/5">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <img src={logo} alt="SIIP" className="h-4 w-auto object-contain" />
              </Link>
              <button 
                onClick={() => setMobileOpen(false)} 
                className="text-primary-foreground p-2 hover:bg-white/5 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X size={20} strokeWidth={2} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-2 py-6 no-scrollbar">
              <Accordion type="single" collapsible className="w-full space-y-1">
                {menuItems.map((item) => (
                  item.subItems ? (
                    <AccordionItem key={item.label} value={item.label} className="border-none">
                      <AccordionTrigger className="flex px-6 py-4 text-display text-sm font-black text-primary-foreground hover:bg-white/5 transition-all hover:no-underline rounded-lg group">
                        <span className="tracking-[0.2em] uppercase">{item.label}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-1 pb-4 px-6 space-y-1 animate-in slide-in-from-top-2 duration-300">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.path}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 text-display text-[10px] text-primary-foreground/50 hover:text-primary-foreground hover:bg-white/5 transition-all rounded-md uppercase tracking-[0.15em] font-bold"
                          >
                            <span className="w-1.5 h-[1.5px] bg-white/20" />
                            {sub.label}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between px-6 py-4 text-display text-sm font-black text-primary-foreground hover:bg-white/5 transition-all rounded-lg tracking-[0.2em] uppercase group"
                    >
                      {item.label}
                      <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white/40" />
                    </Link>
                  )
                ))}
              </Accordion>
            </div>

            <div className="p-6 border-t border-white/5 space-y-8">
              <div className="space-y-4">
                <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-black italic">Archive Navigation</p>
                <div className="grid grid-cols-2 gap-3">
                   <button 
                     onClick={() => { setSearchOpen(true); setMobileOpen(false); }}
                     className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-all gap-2"
                   >
                     <Search size={18} className="text-white/60" />
                     <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Search</span>
                   </button>
                   <button 
                     onClick={() => { setIsCartOpen(true); setMobileOpen(false); }}
                     className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-all gap-2"
                   >
                     <ShoppingBag size={18} className="text-white/60" />
                     <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Bag ({cartCount})</span>
                   </button>
                </div>
              </div>
              
              <div className="text-center">
                 <p className="text-[9px] text-white/20 uppercase tracking-[0.4em] font-bold">© 2024 SIIP ARHIVVE</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartSidebar />
    </>
  );
};

export default Navbar;
