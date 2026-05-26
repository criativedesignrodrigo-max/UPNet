import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, User, Gauge, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/images/logo.png';

interface HeaderProps {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
  openCoverageModal: () => void;
}

export default function Header({ theme, setTheme, openCoverageModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const menuItems = [
    { id: 'inicio', label: 'Início', href: '#inicio' },
    { id: 'planos', label: 'Planos Fibra', href: '#planos' },
    { id: 'diferenciais', label: 'Diferenciais', href: '#diferenciais' },
    { id: 'cobertura', label: 'Cobertura', href: '#cobertura' },
    { id: 'sobre', label: 'A UPNet', href: '#sobre' },
    { id: 'central', label: 'Central do Assinante', href: '#central' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection
      const scrollPosition = window.scrollY + 100;
      for (const item of menuItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-slate-950/80 border-b border-slate-800/60 backdrop-blur-md shadow-lg shadow-black/10'
            : 'bg-white/80 border-b border-slate-200/60 backdrop-blur-md shadow-lg shadow-slate-100/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Custom brand logo image */}
          <div className="flex items-center cursor-pointer select-none" onClick={() => handleNavClick('#inicio')}>
            <img 
              src={logo} 
              alt="UPNet Informática" 
              className="h-12 md:h-14 w-auto object-contain transition-all duration-300" 
              referrerPolicy="no-referrer" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                  activeSection === item.id
                    ? theme === 'dark'
                      ? 'text-white bg-slate-800/50 border border-slate-700/50'
                      : 'text-slate-950 bg-slate-100/80 border border-slate-200'
                    : 'text-slate-400 hover:text-white border border-transparent'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-gradient-to-r from-up-cyan to-up-blue rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-lg transition-colors border ${
                theme === 'dark'
                  ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-yellow-400'
                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-600'
              }`}
              title={theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Area do Cliente portal styled as premium gradient CTA */}
            <a
              id="header-client-portal"
              href="http://upnet.sgplocal.com.br:8000/accounts/central/login"
              target="_blank"
              rel="noreferrer"
              className="relative overflow-hidden group px-5 py-2.5 rounded-xl bg-gradient-to-r from-up-blue to-up-cyan text-white text-xs font-semibold tracking-wide shadow-md hover:shadow-lg hover:shadow-up-cyan/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10 flex items-center space-x-1.5">
                <User className="w-4 h-4" />
                <span>Área do Cliente</span>
              </span>
              <span className="absolute inset-x-0 top-0 h-1/2 bg-white/10 group-hover:h-full transition-all duration-200"></span>
            </a>
          </div>

          {/* Mobile controllers (Theme + Hamburger) */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              id="theme-toggle-mobile"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-lg transition-colors border ${
                theme === 'dark'
                  ? 'bg-slate-900 border-slate-800 text-yellow-500'
                  : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${
                theme === 'dark'
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-100'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-900'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`lg:hidden border-t overflow-hidden ${
              theme === 'dark'
                ? 'bg-slate-950 text-slate-100 border-slate-800'
                : 'bg-white text-slate-900 border-slate-100'
            }`}
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-up-blue/10 to-up-cyan/10 text-up-cyan border-l-4 border-up-cyan'
                      : 'hover:bg-slate-50/10'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800/10 flex flex-col gap-3">
                <a
                  id="mobile-client-portal"
                  href="http://upnet.sgplocal.com.br:8000/accounts/central/login"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-up-blue to-up-cyan text-white text-sm font-semibold"
                >
                  <User className="w-4 h-4" />
                  <span>Área do Cliente</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
