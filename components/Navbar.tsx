
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogIn } from 'lucide-react';
import { ViewState } from '../App';

interface NavbarProps {
  setView: (view: ViewState) => void;
  currentView: ViewState;
}

export const Navbar: React.FC<NavbarProps> = ({ setView, currentView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Why VIBE', href: 'why-vibe' },
    { name: 'Roles', href: 'roles' },
    { name: 'About Us', href: 'about-us' },
    { name: 'FAQ', href: 'faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (currentView !== 'landing') {
      setView('landing');
      // Small timeout to allow the landing page to mount before scrolling
      setTimeout(() => {
        const element = document.getElementById(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 flex justify-center pointer-events-none">
      <nav className={`w-full max-w-7xl transition-all duration-500 pointer-events-auto flex items-center justify-between px-6 py-2.5 border border-slate-200/50 shadow-xl shadow-slate-200/10 ${
        scrolled || currentView !== 'landing' || isMenuOpen 
          ? 'bg-white/90 backdrop-blur-xl rounded-[100px]' 
          : 'bg-white/50 backdrop-blur-md rounded-[100px]'
      }`}>
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer relative z-50 shrink-0"
          onClick={() => {
            setView('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            closeMenu();
          }}
        >
          <div className="w-9 h-9 bg-[#FF6B00] rounded-full flex items-center justify-center shadow-lg shadow-[#FF6B00]/20">
            <span className="text-white font-bold text-lg leading-none">V</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800 hidden sm:block">VIBE</span>
        </div>
        
        {/* Desktop Navigation Links (Visible from MD up) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.href}`}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-[#FF6B00] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Desktop Auth Buttons (Visible from MD up) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4 shrink-0">
          {currentView === 'landing' ? (
            <>
              <button 
                onClick={() => setView('login')}
                className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-[#FF6B00] transition-colors"
              >
                Login
              </button>
              <button 
                onClick={() => setView('role-selector')}
                className="bg-[#FF6B00] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#FF6B00]/20 hover:bg-[#E66000] transition-all active:scale-95 whitespace-nowrap"
              >
                Get Started
              </button>
            </>
          ) : (
            <button 
              onClick={() => setView('landing')}
              className="px-6 py-2.5 bg-slate-100 text-slate-700 rounded-full text-sm font-bold hover:bg-slate-200 transition-all active:scale-95"
            >
              Back to Home
            </button>
          )}
        </div>

        {/* Mobile Action Controls (Login + Hamburger) */}
        <div className="flex md:hidden items-center gap-1 relative z-50">
          {currentView === 'landing' && !isMenuOpen && (
            <button 
              onClick={() => setView('login')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-all active:scale-95"
            >
              <LogIn size={14} className="text-[#FF6B00]" />
              Login
            </button>
          )}
          
          <button 
            className="p-2 text-slate-600 hover:text-[#FF6B00] transition-colors shrink-0"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu Overlay (Visible only below MD) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-x-0 top-0 mt-4 mx-4 bg-white/95 backdrop-blur-2xl z-40 rounded-[2rem] p-8 shadow-2xl border border-slate-100 flex flex-col md:hidden"
              style={{ maxHeight: 'calc(100vh - 2rem)' }}
            >
              <div className="pt-14 flex flex-col gap-5 mb-10">
                {navLinks.map((link, i) => (
                  <motion.a 
                    key={link.name} 
                    href={`#${link.href}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-2xl font-extrabold text-slate-900 hover:text-[#FF6B00] flex items-center justify-between"
                  >
                    {link.name}
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                  </motion.a>
                ))}
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                {currentView === 'landing' ? (
                  <>
                    <button 
                      onClick={() => { setView('login'); closeMenu(); }}
                      className="w-full py-4 text-lg font-bold text-slate-900 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all"
                    >
                      Login
                    </button>
                    <button 
                      onClick={() => { setView('role-selector'); closeMenu(); }}
                      className="w-full py-4 text-lg font-bold text-white bg-[#FF6B00] rounded-2xl shadow-xl shadow-[#FF6B00]/20 active:scale-95"
                    >
                      Get Started
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => { setView('landing'); closeMenu(); }}
                    className="w-full py-4 text-lg font-bold text-slate-900 border-2 border-slate-100 rounded-2xl"
                  >
                    Back to Home
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};
