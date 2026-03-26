import { useState, useEffect } from 'react';
import { Menu, X, Plus, Minus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SearchModal from './SearchModal';
import logo from '../assets/SIIP_MASTER_FULL_WHITE.png';

const menuItems = [
  {
    label: 'STORE',
    submenu: ['New Arrivals', 'Best Sellers', 'Sale'],
  },
  {
    label: 'COLLECTIONS',
    submenu: ['Arcade Series', 'Retro Wave', 'Pixel Art'],
  },
  {
    label: 'FIRE',
    submenu: ['Limited Edition', 'Collaborations'],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isHome 
            ? (scrolled ? 'bg-primary shadow-sm top-0' : 'bg-transparent')
            : 'bg-primary shadow-sm'
        } ${(!isHome && !scrolled) ? '' : (scrolled ? 'top-0' : '')}`} 
        style={scrolled ? {} : { top: 'var(--banner-height, 32px)' }}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-14">
          {/* Left: Menu items (desktop) / Hamburger (mobile) */}
          <div className="flex items-center gap-6">
            <button className="md:hidden text-primary-foreground" onClick={() => setMobileOpen(true)}>
              <Menu size={22} strokeWidth={1.5} />
            </button>
            <div className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-primary-foreground text-display text-xs tracking-wider hover:opacity-70 transition-opacity uppercase font-bold">
                    <Plus size={12} strokeWidth={2} />
                    {item.label}
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2 animate-fade-in">
                      <div className="bg-primary/90 backdrop-blur-md min-w-[180px] py-2 border border-primary-foreground/10">
                        {item.submenu.map((sub) => (
                          <a
                            key={sub}
                            href="#"
                            className="block px-4 py-2 text-primary-foreground text-body text-sm hover:bg-primary-foreground/20 transition-colors"
                          >
                            {sub}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link to="/About-us" className="text-primary-foreground text-display text-xs tracking-wider hover:opacity-70 transition-opacity font-bold uppercase">
                ABOUT US
              </Link>
            </div>
          </div>

          {/* Center: Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center h-full">
            <img src={logo} alt="SIIP" className="h-5 md:h-6 w-auto object-contain" />
          </Link>

          {/* Right: Search & Cart */}
          <div className="flex items-center gap-1 md:gap-3">
            <button 
              onClick={() => setSearchOpen(true)}
              className="relative text-primary-foreground hover:opacity-70 transition-opacity flex items-center justify-center w-8 h-8"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20px] h-[20px] cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <button className="relative text-primary-foreground hover:opacity-70 transition-opacity flex items-center justify-center w-8 h-8 group">
              <svg data-aid="icon-bag" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer scale-[1.2] origin-center">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.3404 5H15.5V6.5V14.5V16H14H2H0.5V14.5V6.5V5H1.6756C2.35583 2.13287 4.93284 0 8.00801 0C11.0832 0 13.6602 2.13287 14.3404 5ZM3.23103 5C3.87091 2.97109 5.76766 1.5 8.00801 1.5C10.2484 1.5 12.1451 2.97109 12.785 5H3.23103ZM2 6.5H14V14.5H2V6.5Z" fill="currentColor"></path>
              </svg>
              <span className="absolute top-0 right-0 w-4 h-4 bg-primary-foreground text-primary text-[10px] flex items-center justify-center rounded-full font-body pointer-events-none">
                0
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[70]">
          <div className="absolute inset-0 bg-primary/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-primary animate-slide-in-right flex flex-col">
            <div className="flex items-center justify-between px-6 h-14 border-b border-primary-foreground/10">
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <img src={logo} alt="SIIP" className="h-4 w-auto object-contain" />
            </Link>
              <button onClick={() => setMobileOpen(false)} className="text-primary-foreground">
                <X size={22} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              <Link to="/" onClick={() => setMobileOpen(false)} className="block px-6 py-3 text-display text-sm text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                HOME
              </Link>
              {menuItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-6 py-3 text-display text-sm text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                  >
                    <span>{item.label}</span>
                    {mobileExpanded === item.label ? (
                      <Minus size={14} strokeWidth={2} />
                    ) : (
                      <Plus size={14} strokeWidth={2} />
                    )}
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="bg-primary-foreground/5">
                      {item.submenu.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="block px-10 py-2.5 text-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/About-us" onClick={() => setMobileOpen(false)} className="block px-6 py-3 text-display text-sm text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                ABOUT US
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Navbar;
