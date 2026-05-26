import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Globe, ArrowRight, CheckCircle, Wifi, Gauge, Zap } from 'lucide-react';
import familiaConectada from '../assets/images/familia_conectada_upnet_1779817721954.png';

interface HeroProps {
  theme: 'dark' | 'light';
  openCoverageModal: () => void;
  scrollToPlans: () => void;
}

export default function Hero({ theme, openCoverageModal, scrollToPlans }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activePromo, setActivePromo] = useState(0);

  const promos = [
    { text: "Suporte especializado 100% humano e local" },
    { text: "Fibra Óptica Simétrica de Alta Performance" },
    { text: "Conexão de Ultra Veloz com Baixa Latência" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePromo((prev) => (prev + 1) % promos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Futuristic connecting particle web effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    let trailParticles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
      life: number;
      maxLife: number;
    }> = [];

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false
    };

    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 680;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor(canvas.width / 15), 65);
      const isDark = theme === 'dark';
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: Math.random() * 2 + 1,
          color: isDark 
            ? Math.random() > 0.4 ? '#11C5FF' : '#0D6EFD' 
            : Math.random() > 0.4 ? '#0D6EFD' : '#082C5C'
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const currentMouseX = e.clientX - rect.left;
      const currentMouseY = e.clientY - rect.top;
      
      if (
        currentMouseX >= 0 &&
        currentMouseX <= canvas.width &&
        currentMouseY >= 0 &&
        currentMouseY <= canvas.height
      ) {
        mouse.targetX = currentMouseX;
        mouse.targetY = currentMouseY;
        mouse.active = true;
      } else {
        mouse.active = false;
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const currentMouseX = touch.clientX - rect.left;
        const currentMouseY = touch.clientY - rect.top;

        if (
          currentMouseX >= 0 &&
          currentMouseX <= canvas.width &&
          currentMouseY >= 0 &&
          currentMouseY <= canvas.height
        ) {
          mouse.targetX = currentMouseX;
          mouse.targetY = currentMouseY;
          mouse.active = true;
        } else {
          mouse.active = false;
        }
      }
    };

    const handleTouchEnd = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    handleResize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = theme === 'dark';
      
      // Interpolate mouse position for buttery smooth trailing inertia
      if (mouse.active) {
        if (mouse.x === -1000) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.18;
          mouse.y += (mouse.targetY - mouse.y) * 0.18;
        }

        // Spawn beautiful glowing trail particles with explosive momentum at cursor
        const countToSpawn = 3;
        for (let i = 0; i < countToSpawn; i++) {
          trailParticles.push({
            x: mouse.x,
            y: mouse.y,
            vx: (Math.random() - 0.5) * 2.2,
            vy: (Math.random() - 0.5) * 2.2,
            radius: Math.random() * 4.5 + 2.5,
            color: isDark 
              ? Math.random() > 0.5 ? '#11C5FF' : '#0D6EFD' 
              : Math.random() > 0.5 ? '#0D6EFD' : '#082C5C',
            alpha: 1.0,
            life: 0,
            maxLife: Math.random() * 30 + 35
          });
        }
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }

      // 1. Draw and Update Background Particles
      particles.forEach((p, idx) => {
        // Subtle gravitational attraction to cursor for neural net response
        if (mouse.active && mouse.x !== -1000) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const force = (200 - dist) / 200 * 0.08;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;

            // Restrict speed to look organic
            const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            const maxSpeed = 1.6;
            if (speed > maxSpeed) {
              p.vx = (p.vx / speed) * maxSpeed;
              p.vy = (p.vy / speed) * maxSpeed;
            }
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        // Boundary bounce check
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = isDark ? 8 : 0;
        ctx.shadowColor = p.color;
        ctx.fill();

        // Connect ambient points to other points nearby
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark 
              ? `rgba(17, 197, 255, ${0.12 * (1 - dist / 110)})`
              : `rgba(13, 110, 253, ${0.08 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }

        // Connect ambient point to the mouse with an interactive neural bridge
        if (mouse.active && mouse.x !== -1000) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = isDark
              ? `rgba(17, 197, 255, ${0.35 * (1 - dist / 130)})`
              : `rgba(13, 110, 253, ${0.2 * (1 - dist / 130)})`;
            ctx.lineWidth = 1.0;
            ctx.shadowBlur = isDark ? 10 : 0;
            ctx.shadowColor = isDark ? '#11C5FF' : '#0D6EFD';
            ctx.stroke();
          }
        }
      });

      // 2. Draw, Update, and Connect Trail Particles for the NEON Trail
      trailParticles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        p.alpha = 1 - (p.life / p.maxLife);
        p.radius *= 0.975; // Smoothly shrink

        // Gently apply air resistance/friction
        p.vx *= 0.95;
        p.vy *= 0.95;

        // Parse color hex for opacity rendering
        const colorHex = p.color;
        const r = parseInt(colorHex.substring(1, 3), 16);
        const g = parseInt(colorHex.substring(3, 5), 16);
        const b = parseInt(colorHex.substring(5, 7), 16);

        // Core glow dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.alpha})`;
        ctx.shadowBlur = isDark ? 22 - (12 * (p.life / p.maxLife)) : 6;
        ctx.shadowColor = p.color;
        ctx.fill();

        // Connect trailing neon particles to generate a fiber-web light streak
        for (let j = idx + 1; j < trailParticles.length; j++) {
          const p2 = trailParticles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 70) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const combinedAlpha = ((p.alpha + p2.alpha) / 2) * 0.28 * (1 - dist / 70);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${combinedAlpha})`;
            ctx.lineWidth = 1.4 * p.alpha;
            ctx.shadowBlur = isDark ? 12 : 0;
            ctx.shadowColor = p.color;
            ctx.stroke();
          }
        }
      });

      // Maintain optimization by filtering out expired trail points
      trailParticles = trailParticles.filter(p => p.life < p.maxLife && p.radius > 0.25);

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  // Lead dispatch to official support number
  const handleWhatsAppChat = () => {
    const text = encodeURIComponent('Olá UPNet! Gostaria de consultar a disponibilidade dos planos de Fibra Óptica para minha residência.');
    window.open(`https://wa.me/5517997329575?text=${text}`, '_blank', 'noreferrer');
  };

  return (
    <section
      id="inicio"
      className={`relative min-h-[95vh] pt-28 pb-16 flex items-center justify-center overflow-hidden transition-colors duration-350 ${
        theme === 'dark' 
          ? 'bg-slate-950 text-slate-100' 
          : 'bg-gradient-to-b from-slate-50 to-white text-slate-900'
      }`}
    >
      {/* Absolute Dynamic Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 md:opacity-80">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Futuristic Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/10 w-80 h-80 rounded-full bg-up-cyan/10 blur-3xl cyber-glow z-0 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-96 h-96 rounded-full bg-up-blue/15 blur-3xl cyber-glow z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Dynamic Tag Slider */}
            <div className="inline-flex">
              <span className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium border ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border-slate-800 text-up-cyan glow-cyan'
                  : 'bg-up-blue/5 border-up-blue/10 text-up-blue'
              }`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>DESDE 2011 EM APARECIDA D'OESTE-SP</span>
              </span>
            </div>

            {/* Glowing Hero Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Internet{' '}
              <span className="bg-gradient-to-r from-up-cyan via-up-blue to-indigo-500 bg-clip-text text-transparent">
                Fibra Óptica
              </span>{' '}
              com velocidade de verdade
            </h1>

            {/* Sub-headline */}
            <p className={`text-base sm:text-lg max-w-xl leading-relaxed ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Navegue com ultraestabilidade, banda simétrica e a tecnologia de transmissão de ponta que conecta sua casa e sua empresa. Conectividade premium, suporte local rápido e atendimento humano exclusivo.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-3 text-left">
              <button
                id="hero-whatsapp-btn"
                onClick={handleWhatsAppChat}
                className="group relative overflow-hidden flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-up-blue to-up-cyan text-white font-bold text-sm transition-all shadow-md hover:shadow-lg hover:shadow-up-cyan/30 transform hover:-translate-y-0.5"
              >
                <span>Falar no WhatsApp</span>
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-white font-mono text-[10px] scale-90">
                  ⚡
                </span>
              </button>

              <button
                id="hero-plans-btn"
                onClick={scrollToPlans}
                className={`group flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all border ${
                  theme === 'dark'
                    ? 'bg-slate-900 hover:bg-slate-850 border-slate-800 text-slate-100 hover:text-white'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900'
                }`}
              >
                <span>Conhecer Planos</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mini Trust Badges */}
            <div className="pt-6 grid grid-cols-2 gap-4 border-t border-slate-800/20 max-w-sm">
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-up-cyan">⚡ 2ms</span>
                <span className={`text-[11px] font-mono tracking-wide ${
                  theme === 'dark' ? 'text-slate-500' : 'text-slate-500'
                }`}>LATÊNCIA MÉDIA</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-up-blue">100%</span>
                <span className={`text-[11px] font-mono tracking-wide ${
                  theme === 'dark' ? 'text-slate-500' : 'text-slate-500'
                }`}>FIBRA ÓPTICA SP</span>
              </div>
            </div>

          </div>

          {/* Graphical column - Premium Device mockup representation */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Outer Abstract Cyber Ring Decoration */}
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-up-blue/30 animate-spin-slow pointer-events-none" />
            <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full border border-up-cyan/20 animate-reverse-spin pointer-events-none" />

            {/* Glowing Central Graphic */}
            <div className={`relative z-10 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-3xl p-6 transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-slate-900/40 border border-slate-800/60 backdrop-blur-xl'
                : 'bg-white/40 border border-slate-200/60 backdrop-blur-xl shadow-xl'
            }`}>
              
              {/* Floating Customer Proximity Badge */}
              <div className={`absolute -top-6 -left-6 sm:-left-12 border p-2 sm:p-2.5 rounded-2xl shadow-2xl flex items-center space-x-2.5 z-20 backdrop-blur-md max-w-[210px] sm:max-w-[230px] transition-colors duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-900/90 border-slate-800 text-white'
                  : 'bg-white/95 border-slate-200 text-slate-900 shadow-slate-200/30'
              }`}>
                <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-up-cyan/30">
                  <img 
                    src={familiaConectada} 
                    alt="Família conectada UPNet" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent pointer-events-none" />
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-[9px] font-mono text-up-cyan font-bold tracking-wider truncate">PRESENÇA REGIONAL</span>
                  <span className={`text-[11.5px] font-extrabold leading-tight mt-0.5 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-800'
                  }`}>Lares conectados</span>
                </div>
              </div>

              {/* Graphic Header mimicking live bandwidth telemetry */}
              <div className="flex items-center justify-between mb-4 border-b border-slate-800/10 pb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className={`text-[10px] font-mono ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>UPNET_SERVER_CONNECTED</span>
                </div>
                <div className="px-2 py-0.5 rounded bg-up-cyan/10 text-up-cyan text-[9px] font-mono">
                  PROVEDOR LÍDER
                </div>
              </div>

              {/* Central Glowing Cybernetic Loop */}
              <div className="relative flex flex-col items-center justify-center h-44 border border-slate-800/5 rounded-2xl bg-gradient-to-br from-slate-950/20 to-slate-950/40">
                <div className="absolute inset-0 bg-radial-gradient from-up-cyan/5 via-transparent to-transparent pointer-events-none" />
                
                {/* Simulated speed dial */}
                <motion.div 
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 120 }}
                  transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatDelay: 3 }}
                  className="w-28 h-28 rounded-full border-t-4 border-r-4 border-up-cyan flex items-center justify-center"
                >
                  <div className="w-24 h-24 rounded-full border border-slate-800/40 border-dashed flex flex-col items-center justify-center rotate-[-120deg]">
                    <Zap className="w-7 h-7 text-up-cyan animate-pulse" />
                    <span className="text-xl font-display font-black text-white mt-1">960</span>
                    <span className="text-[9px] font-mono text-slate-400 tracking-wider">MEGA</span>
                  </div>
                </motion.div>

                {/* Micro tech parameters */}
                <div className="absolute bottom-2 left-2 right-2 flex justify-center px-3 text-[9px] font-mono text-slate-500">
                  <span>VELOCIDADE MÁXIMA</span>
                </div>
              </div>

              {/* Telemetry live bars */}
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>Estabilidade de Link</span>
                  <span className="text-up-cyan">99.9%</span>
                </div>
                <div className="w-full bg-slate-800/30 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-up-blue to-up-cyan h-full w-[99.9%]" />
                </div>
              </div>

              {/* Cobertura regional floating badge */}
              <div className={`absolute -bottom-4 -right-4 border p-3 rounded-2xl shadow-xl flex items-center space-x-2 transition-colors duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-slate-900 to-slate-950 border-slate-800 text-white'
                  : 'bg-white border-slate-200 text-slate-800 shadow-slate-200/30'
              }`}>
                <div className="p-2 rounded-lg bg-up-blue/10">
                  <Wifi className="w-5 h-5 text-up-cyan" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono text-slate-400">COBERTURA REGIONAL</span>
                  <span className={`text-xs font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Pronto para Wi-Fi 6</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
