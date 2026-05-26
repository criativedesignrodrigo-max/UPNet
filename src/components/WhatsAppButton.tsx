import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquareText, X } from 'lucide-react';
import favicon from '../assets/images/favicon.png';

export default function WhatsAppButton() {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show polite micro notification inviting user to chat after 5 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent('Olá UPNet! Fiquei interessado em conhecer melhor os planos e serviços de internet Fibra Óptica para minha residência.');
    window.open(`https://wa.me/5517997329575?text=${text}`, '_blank', 'noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-45 flex flex-col items-end space-y-3 pointer-events-none">
      
      {/* Interactive Floating Conversation Prompt Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ type: 'spring', damping: 15 }}
            className="pointer-events-auto max-w-xs bg-slate-900 text-slate-100 p-3.5 rounded-2xl shadow-xl shadow-black/25 border border-slate-800 flex items-start space-x-3 text-left relative"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowNotification(false);
              }}
              className="absolute top-1.5 right-1.5 p-1 rounded-full text-slate-500 hover:text-slate-300 focus:outline-none"
              title="Fechar"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Simulated Agent Avatar */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0A73FE] to-blue-400 p-[1.5px] shrink-0 shadow-lg shadow-[#0A73FE]/15">
              <div className="w-full h-full rounded-[9px] bg-slate-900 flex items-center justify-center p-1">
                <img 
                  src={favicon} 
                  alt="UPNet" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="flex-1 pr-3">
              <span className="text-[9px] font-mono text-[#0A73FE] font-bold block leading-none mb-1">UPNET ONLINE</span>
              <p className="text-xs font-semibold text-slate-200 leading-snug">
                Olá! Quer consultar planos ou solicitar suporte técnico?
              </p>
              <button
                onClick={handleWhatsAppRedirect}
                className="mt-2 text-[10px] font-bold text-[#0A73FE] hover:text-blue-400 flex items-center hover:underline cursor-pointer"
              >
                Chame-nos no WhatsApp ➜
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action elements group */}
      <div className="flex items-center space-x-3 pointer-events-auto group cursor-pointer" onClick={handleWhatsAppRedirect}>
        
        {/* Tooltip badge visible on hover */}
        <div className="hidden sm:inline-flex opacity-0 -translate-x-3 scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-300 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-bold font-display shadow-xl shadow-black/40 items-center space-x-2">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <span>Fale Conosco</span>
        </div>

        {/* Primary Floating Action button */}
        <button
          id="persistent-whats-btn"
          onClick={(e) => {
            e.stopPropagation(); // Parent div already handles click
            handleWhatsAppRedirect();
          }}
          className="relative overflow-hidden flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 transform group-hover:scale-110 active:scale-95 focus:outline-none border-none cursor-pointer"
          title="Falar no WhatsApp"
        >
          {/* Glowing pulsing outline ring */}
          <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-30 pointer-events-none" />
          <span className="absolute inset-0 rounded-full bg-emerald-500/10 scale-125 animate-pulse pointer-events-none" />
          
          <span className="relative z-10 block transition-transform duration-300 group-hover:rotate-[15deg]">
            {/* WhatsApp Brand SVG representation (High fidelity precise double-path) */}
            <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.031 2C6.49 2 2.01 6.48 2.01 12.018c0 1.765.459 3.491 1.332 5.011L2 22l5.127-1.344a9.96 9.96 0 004.903 1.28C17.57 21.936 22 17.458 22 11.92 22 6.382 17.52 1.9 12.031 1.9zm5.334 11.758c-.225.613-1.127 1.206-1.558 1.267-.406.056-.901.223-2.723-.51a9.231 9.231 0 01-3.935-3.414c-.115-.15-.92-1.183-.92-2.253 0-1.07.577-1.597.778-1.815.203-.218.447-.272.595-.272.147 0 .298.003.426.009.133.005.311-.048.487.361.18.417.613 1.442.667 1.549.054.107.09.233.018.372-.072.139-.109.228-.216.351-.109.123-.229.274-.327.367-.11.105-.224.221-.097.432.127.212.567.9 1.219 1.457.838.719 1.538.94 1.759 1.047.22.106.349.088.478-.052.128-.14.553-.618.701-.828.148-.211.295-.175.497-.105.203.07 1.286.582 1.506.688.22.106.367.159.421.248.055.089.055.512-.17 1.124z" />
            </svg>
          </span>
        </button>

      </div>

    </div>
  );
}
