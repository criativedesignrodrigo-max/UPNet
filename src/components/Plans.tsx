import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Flame, HelpCircle, Gauge, ArrowRight, Zap, Building, Home, Radio } from 'lucide-react';

interface PlansProps {
  theme: 'dark' | 'light';
}

export default function Plans({ theme }: PlansProps) {
  const [sliderValue, setSliderValue] = useState<number>(1); // 0 = 360M, 1 = 460M, 2 = 660M, 3 = 860M, 4 = 960M

  const sliderSpeeds = [
    { value: 0, speed: "360M", price: 79.90, desc: "Para residências e streaming diário de alta qualidade." },
    { value: 1, speed: "460M", price: 89.90, desc: "O campeão de vendas! Conexão robusta e TV completa." },
    { value: 2, speed: "660M", price: 99.90, desc: "Excelente estabilidade para múltiplos usuários e Smart Home." },
    { value: 3, speed: "860M", price: 129.90, desc: "Ultra velocidade para múltiplos dispositivos e jogos online." },
    { value: 4, speed: "960M", price: 149.90, desc: "Performance extrema sem limites para a família toda conectada." }
  ];

  const plansList = [
    {
      id: 'res-360',
      name: 'Plano Start Premium',
      speed: '360 MEGAS + TV',
      price: 79.90,
      features: [
        'Aplicativo de TV Incluso (Canais e Filmes)',
        'Instalação em Fibra Óptica Gigabit',
        'Roteador Wi-Fi incluso de alta propagação',
        'Navegação ilimitada sem franquia',
        'Suporte técnico rápido regional'
      ],
      isPopular: false,
      styleType: 'dark'
    },
    {
      id: 'res-460',
      name: 'O Mais Vendido 🔥',
      speed: '460 MEGAS + TV',
      price: 89.90,
      features: [
        'Aplicativo de TV Incluso (Completo)',
        'Roteador Wi-Fi Gigabit premium Dual-Band',
        'Instalação ultra rápida agendada',
        'Conexão estável do provedor líder',
        'Ideal para Streaming 4K e jogos simultâneos'
      ],
      isPopular: true,
      badge: 'MAIS VENDIDO',
      styleType: 'sky-highlight'
    },
    {
      id: 'res-660',
      name: 'Plano Ultra Estável',
      speed: '660 MEGAS + TV',
      price: 99.90,
      features: [
        'Aplicativo de TV Incluso (Suporte multi-telas)',
        'Roteador Wi-Fi Gigabit inteligente avançado',
        'Prioridade inteligente de tráfego de rede',
        'Ideal para trabalho home office pesado',
        'Suporte prioritário na Central local'
      ],
      isPopular: false,
      styleType: 'dark'
    },
    {
      id: 'res-860',
      name: 'Plano Power Conectado',
      speed: '860 MEGAS + TV',
      price: 129.90,
      features: [
        'Aplicativo de TV Incluso (Canais e Filmes Premium)',
        'Roteador Wi-Fi ultra veloz Gigabit',
        'Perfeito para múltiplos dispositivos 4K/8K',
        'Latência reduzida para jogos competitivos',
        'Suporte instantâneo via WhatsApp local'
      ],
      isPopular: false,
      styleType: 'sky'
    },
    {
      id: 'res-960',
      name: 'Plano Max Conectividade',
      speed: '960 MEGAS + TV',
      price: 149.90,
      features: [
        'Aplicativo de TV Incluso (Canais, Filmes e Séries)',
        'Super Roteador de última geração incluso',
        'Estabilidade extrema de fibra óptica de ponta a ponta',
        'Acesso VIP ao suporte técnico e técnico local',
        'Ideal para famílias grandes e navegação contínua'
      ],
      isPopular: false,
      styleType: 'sky'
    }
  ];

  const handleHireClick = (planName: string, price: number) => {
    const text = encodeURIComponent(`Olá UPNet! Fiquei interessado em contratar o plano "${planName}" por R$ ${price.toFixed(2)}/mês. Gostaria de consultar a disponibilidade para o meu endereço.`);
    window.open(`https://wa.me/5517997329575?text=${text}`, '_blank', 'noreferrer');
  };

  const getPlanStyles = (styleType: string) => {
    switch (styleType) {
      case 'sky-highlight':
        // Gorgeous light-blue styling block from the popular plan in the image
        return {
          card: "bg-sky-100/90 border-2 border-sky-400 text-slate-900 shadow-2xl shadow-sky-300/35 relative",
          title: "text-slate-600 font-bold",
          speed: "text-slate-950 font-black",
          desc: "text-slate-700",
          features: "text-slate-800",
          iconBg: "bg-sky-500/15 text-sky-600",
          priceSpan: "text-slate-950",
          button: "bg-slate-950 hover:bg-slate-900 text-white font-extrabold shadow-md w-full"
        };
      case 'sky':
        // Cool light sky blue
        return {
          card: "bg-sky-50/95 border border-sky-200 text-slate-900 shadow-xl shadow-sky-100/50 relative",
          title: "text-slate-600 font-bold",
          speed: "text-slate-950 font-black",
          desc: "text-slate-600",
          features: "text-slate-700",
          iconBg: "bg-sky-500/10 text-up-blue",
          priceSpan: "text-slate-950",
          button: "bg-slate-900 hover:bg-slate-800 text-white font-bold w-full"
        };
      case 'dark':
      default:
        // Elegant dark slate cards matching the dark columns
        return {
          card: "bg-slate-900 border border-slate-800 text-white relative",
          title: "text-slate-400",
          speed: "text-white font-black",
          desc: "text-slate-300",
          features: "text-slate-300",
          iconBg: "bg-slate-800 text-up-cyan",
          priceSpan: "text-white",
          button: "bg-up-blue hover:bg-up-blue/90 text-white font-bold w-full"
        };
    }
  };

  return (
    <section
      id="planos"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-900 border-t border-slate-950/20' : 'bg-slate-50 border-t border-slate-100'
      }`}
    >
      {/* Decorative vectors */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-up-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-up-cyan/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-up-cyan font-mono text-xs font-bold tracking-widest uppercase">CONECTIVIDADE ULTRA VELOZ</span>
          <h2 className={`font-display font-extrabold text-3xl sm:text-4xl mt-3 tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-950'
          }`}>
            Nossos Planos Fibra Óptica + TV
          </h2>
          <p className={`mt-4 text-xs sm:text-sm leading-relaxed ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A internet residencial de altíssima qualidade com TV integrada para Aparecida d'Oeste e região. Sem pegadinhas, com ativação rápida e suporte local de verdade.
          </p>
        </div>

        {/* INTERACTIVE VELOCITY SLIDER to showcase futuristic feel */}
        <div className={`mb-16 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl border ${
          theme === 'dark'
            ? 'bg-slate-950/40 border-slate-800/60'
            : 'bg-white border-slate-200/60 shadow-xl shadow-slate-200/20'
        }`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-mono text-up-cyan font-semibold tracking-wider">SIMULADOR DE VELOCIDADE</span>
              <h3 className={`text-lg font-bold font-display mt-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Simule seus hábitos de navegação
              </h3>
              <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                Arraste o slider para encontrar o plano com o melhor custo-benefício para você.
              </p>
            </div>
            <div className="flex items-baseline space-x-1.5">
              <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Apenas</span>
              <span className="text-3xl font-extrabold font-display text-up-cyan">R$ {sliderSpeeds[sliderValue].price.toFixed(2)}</span>
              <span className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>/mês</span>
            </div>
          </div>

          {/* Range Input element */}
          <div className="relative mb-8">
            <input
              type="range"
              min="0"
              max="4"
              value={sliderValue}
              onChange={(e) => setSliderValue(parseInt(e.target.value))}
              className="w-full h-2 rounded-lg bg-slate-800 appearance-none cursor-pointer accent-up-cyan"
            />
            <div className="flex justify-between mt-3 text-[10px] sm:text-xs font-mono font-medium text-slate-400">
              <span>360 Mega</span>
              <span>460 Mega</span>
              <span>660 Mega</span>
              <span>860 Mega</span>
              <span>960 Mega</span>
            </div>
          </div>

          {/* Dynamic simulated parameters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-slate-800/10 text-left">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-up-blue/10 text-up-blue">
                <Zap className="w-6 h-6 text-up-cyan animate-pulse" />
              </div>
              <div>
                <span className={`text-[10px] font-mono ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>PLANO SELECIONADO</span>
                <h4 className={`text-xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {sliderSpeeds[sliderValue].speed.replace('M', ' MEGAS + TV')}
                </h4>
              </div>
            </div>
            <div className="flex-1 md:max-w-md">
              <p className={`text-xs italic ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                "{sliderSpeeds[sliderValue].desc}"
              </p>
            </div>
            <div>
              <button
                id="plans-slider-hire"
                onClick={() => handleHireClick(`UPnet Premium Fibra - ${sliderSpeeds[sliderValue].speed}`, sliderSpeeds[sliderValue].price)}
                className="flex items-center justify-center space-x-1.5 py-3 px-6 rounded-xl bg-up-blue hover:bg-up-blue/90 text-white text-xs font-bold transition-all shadow-md hover:-translate-y-0.5"
              >
                <span>Contratar {sliderSpeeds[sliderValue].speed.replace('M', ' MEGAS')}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Regular Plans Cards List - Formatted in an elegant way where row of 3 and row of 2 wrap perfectly */}
        <div className="flex flex-wrap gap-8 justify-center items-stretch pt-6">
          <AnimatePresence mode="popLayout">
            {plansList.map((plan) => {
              const styles = getPlanStyles(plan.styleType);
              return (
                <motion.div
                  key={plan.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm ${styles.card}`}
                >
                  {/* Popular Indicator badge */}
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-950 text-white text-[10px] font-extrabold tracking-widest uppercase flex items-center space-x-1 shadow-lg border border-sky-400">
                      <Flame className="w-3.5 h-3.5 text-sky-400" />
                      <span>{plan.badge}</span>
                    </div>
                  )}

                  {/* Card Header information */}
                  <div className="text-left">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className={`text-[10px] font-mono tracking-widest uppercase ${styles.title}`}>
                          {plan.name}
                        </span>
                        <h4 className={`text-xl font-bold font-display mt-0.5 ${styles.speed}`}>
                          {plan.speed}
                        </h4>
                      </div>
                      <div className={`p-2 rounded-xl ${styles.iconBg}`}>
                        <Zap className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Gigantic speed counter */}
                    <div className="mb-6 flex flex-col pt-2 pb-4 border-b border-black/5 text-left">
                      <span className={`text-4xl font-display font-black tracking-tight ${styles.speed}`}>
                        {plan.speed.split(' ')[0]} MEGA
                      </span>
                    </div>

                    {/* Plan core list of features */}
                    <ul className="mb-8 space-y-3 text-left">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className={`p-1 rounded-full mr-2.5 mt-0.5 flex-shrink-0 ${plan.styleType.startsWith('sky') ? 'bg-slate-950/10 text-slate-950' : 'bg-emerald-500/15 text-emerald-400'}`}>
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className={`text-xs leading-relaxed ${styles.features}`}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Plan footer containing pricing and checkout link */}
                  <div className="text-left mt-auto">
                    <div className="flex items-baseline space-x-1 mb-6">
                      <span className={`text-xs opacity-75 ${plan.styleType.startsWith('sky') ? 'text-slate-700' : 'text-slate-400'}`}>Por apenas</span>
                      <span className={`text-3xl font-extrabold font-display ${styles.priceSpan}`}>
                        R$ {plan.price.toFixed(2)}
                      </span>
                      <span className={`text-xs opacity-75 ${plan.styleType.startsWith('sky') ? 'text-slate-700' : 'text-slate-400'}`}>/mensais</span>
                    </div>

                    <button
                      id={`btn-hire-${plan.id}`}
                      onClick={() => handleHireClick(plan.speed, plan.price)}
                      className={`py-4 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 ${styles.button}`}
                    >
                      <span>Contratar</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
