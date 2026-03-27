import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SearchModal from './SearchModal';
import AnnouncementBanner from './AnnouncementBanner';
import CartSidebar from './CartSidebar';
import { useCart } from '../context/CartContext';
import logo from '../assets/SIIP_MASTER_FULL_WHITE.png';

const menuItems = [
  { label: 'HOME', path: '/', id: null },
  { label: 'STORE', path: '/store', id: null },
  { label: 'ABOUT', path: '/About-us', id: null },
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
        <div className="fixed inset-0 z-[150]">
          <div className="absolute inset-0 bg-primary/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-primary flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 h-14 border-b border-primary-foreground/10">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <img src={logo} alt="SIIP" className="h-4 w-auto object-contain" />
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-primary-foreground">
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={(e) => {
                    handleNavClick(e, item);
                    setMobileOpen(false);
                  }}
                  className="block px-6 py-3 text-display text-sm text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
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
