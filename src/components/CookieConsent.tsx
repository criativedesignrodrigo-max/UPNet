import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Cookie, X } from 'lucide-react';
import favicon from '../assets/images/favicon.png';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      // Check if user already accepted cookie settings
      const accepted = localStorage.getItem('upnet_cookies_accepted');
      if (!accepted) {
        // Delay showing the banner for better UX (1.5 seconds)
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1500);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      // Safe fallback if localStorage is blocked: show cookies banner on every first-load without crashing
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('upnet_cookies_accepted', 'true');
    } catch (e) {
      // Safe fallback if localStorage is blocked
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 right-6 md:left-8 md:right-auto md:max-w-lg z-50 pointer-events-auto"
        >
          <div className="bg-slate-900/95 backdrop-blur-md border border-slate-800 text-slate-100 p-5 rounded-2xl shadow-2xl shadow-black/40 flex flex-col sm:flex-row items-start gap-4">
            
            {/* Visual Icon Badge - Favicon based */}
            <div className="p-2.5 bg-[#0A73FE]/10 border border-[#0A73FE]/20 rounded-xl shrink-0 flex items-center justify-center">
              <img 
                src={favicon} 
                alt="UPNet" 
                className="w-8 h-8 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content & Actions */}
            <div className="flex-1 space-y-3">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-display font-bold text-sm tracking-tight text-white">Preferências de Privacidade</span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#0A73FE]/10 text-[#0A73FE] border border-[#0A73FE]/20 uppercase font-mono">
                    LGPD
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Para melhorar a sua navegação e personalizar sua experiência de ultra conexão fibra, utilizamos cookies próprios e de terceiros em nosso site.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 bg-[#0A73FE] hover:bg-[#0A73FE]/90 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-[#0A73FE]/25 cursor-pointer active:scale-95 flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-4 h-4" />
                  Aceitar Cookies
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="px-3 py-2 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Ignorar
                </button>
              </div>
            </div>

            {/* Close Cross icon */}
            <button
              onClick={() => setIsVisible(false)}
              className="text-slate-500 hover:text-slate-300 transition-colors p-1 rounded-lg hover:bg-slate-800/50"
              title="Fechar"
            >
              <X className="w-4 h-4" />
            </button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
