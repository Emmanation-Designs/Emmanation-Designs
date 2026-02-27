import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      if (isHome) {
        const sections = ['hero', 'about', 'services', 'process', 'portfolio'];
        let current = '';
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              current = section;
              break;
            }
          }
        }
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const navLinks = [
    { name: 'Home', href: '/#hero', id: 'hero' },
    { name: 'About', href: '/#about', id: 'about' },
    { name: 'Services', href: '/#services', id: 'services' },
    { name: 'Process', href: '/#process', id: 'process' },
    { name: 'Portfolio', href: '/#portfolio', id: 'portfolio' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (!isHome && href.startsWith('/#')) {
      return;
    }
    
    if (isHome && href.startsWith('/#')) {
      const elementId = href.replace('/#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={cn(
          'transition-all duration-500 ease-out border border-white/10',
          scrolled 
            ? 'bg-black/80 backdrop-blur-xl rounded-full py-3 px-6 shadow-2xl shadow-blue-900/10 w-full max-w-5xl' 
            : 'bg-transparent border-transparent py-4 px-4 w-full max-w-7xl'
        )}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 group-hover:border-blue-500/50 transition-colors">
              <img src="/logo.png" alt="Emmanation Designs Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors hidden sm:block">
              Emmanation
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              isHome ? (
                <a
                  key={link.name}
                  href={link.href.replace('/', '')}
                  className={cn(
                    "text-sm font-medium transition-colors relative group",
                    activeSection === link.id ? "text-white" : "text-slate-400 hover:text-white"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300",
                    activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
            <a
              href="#services"
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  handleNavClick('/#services');
                }
              }}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                "bg-white text-black hover:bg-blue-50 hover:scale-105"
              )}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="md:hidden overflow-hidden bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10"
            >
              <div className="px-4 py-6 space-y-4 flex flex-col">
                {navLinks.map((link) => (
                  isHome ? (
                    <a
                      key={link.name}
                      href={link.href.replace('/', '')}
                      className={cn(
                        "text-lg font-medium transition-colors",
                        activeSection === link.id ? "text-blue-400" : "text-slate-300 hover:text-blue-400"
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-lg font-medium text-slate-300 hover:text-blue-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
