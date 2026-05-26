import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ArrowLeft, ArrowRight, Quote, CheckCircle } from 'lucide-react';

interface TestimonialProps {
  theme: 'dark' | 'light';
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  rating: number;
  text: string;
}

export default function Testimonials({ theme }: TestimonialProps) {
  const reviews: Testimonial[] = [
    {
      id: 'r-1',
      name: 'Leandro Augusto',
      role: 'Avaliação do Google Maps',
      city: "Aparecida d'Oeste - SP",
      rating: 5,
      text: 'Internet excelente, extremamente rápida e de ótima qualidade. Recomendo muito! O atendimento deles é de longe o melhor da região, com equipe técnica sempre educada e prestativa.'
    },
    {
      id: 'r-2',
      name: 'Carla Pinheiro',
      role: 'Avaliação do Google Maps',
      city: 'Suzanápolis - SP',
      rating: 5,
      text: 'Excelente empresa, atendimento nota 10, muito prestativos e ágeis para nos atender no dia a dia. É sem dúvidas a melhor conexão de fibra óptica que já contratei!'
    },
    {
      id: 'r-3',
      name: 'Thiago Oliveira',
      role: 'Avaliação do Google Maps',
      city: 'Sud Mennucci - SP',
      rating: 5,
      text: 'Equipe maravilhosa e atendimento de primeira do início ao fim! A internet é muito estável e eficiente para usarmos em múltiplos aparelhos e assistir filmes em alta definição ao mesmo tempo.'
    },
    {
      id: 'r-4',
      name: 'Renata Souza',
      role: 'Avaliação do Google Maps',
      city: 'São Jorge (Distrito de Suzanápolis) - SP',
      rating: 5,
      text: 'Estou gostando muito do serviço da UPNet! Estabilidade incrível da conexão e o suporte técnico por WhatsApp deles é sensacional. Recomendo de olhos fechados para todos!'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section
      id="depoimentos"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'
      }`}
    >
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-up-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-up-cyan font-mono text-xs font-bold tracking-widest uppercase">SATISFAÇÃO DO ASSINANTE</span>
          <h2 className={`font-display font-extrabold text-3xl sm:text-4xl mt-3 tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-950'
          }`}>
            O que dizem os nossos clientes que já navegam conosco
          </h2>
          <p className={`mt-4 text-xs sm:text-base leading-relaxed ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A confiança regional é conquistada dia após dia. Confira depoimentos de moradores e corporações reais que usam e recomendam as nossas soluções de fibra óptica.
          </p>
        </div>

        {/* Testimonials Main Frame */}
        <div className="max-w-4xl mx-auto relative px-4">
          
          {/* Slider Content Wrapper */}
          <div className="relative min-h-[280px] flex items-center justify-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={reviews[activeIndex].id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.35 }}
                className={`w-full p-8 sm:p-12 rounded-3xl border text-left flex flex-col justify-between ${
                  theme === 'dark'
                    ? 'bg-slate-950/70 border-slate-800'
                    : 'bg-white border-slate-200 shadow-xl'
                }`}
              >
                
                {/* Quote header wrapper */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex space-x-1 decoration-amber-400">
                    {[...Array(reviews[activeIndex].rating)].map((_, index) => (
                      <Star key={index} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-up-cyan/20 shrink-0" />
                </div>

                {/* Main commentary review */}
                <p className={`text-base sm:text-lg italic leading-relaxed mb-6 font-medium ${
                  theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
                }`}>
                  "{reviews[activeIndex].text}"
                </p>

                {/* Customer footer signatures */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-800/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-up-blue to-up-cyan p-[1.5px] shrink-0">
                      <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-xs font-bold text-up-cyan">
                        {reviews[activeIndex].name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        {reviews[activeIndex].name}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-mono">
                        {reviews[activeIndex].role}
                      </p>
                    </div>
                  </div>

                  {/* Certified badge check */}
                  <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] font-mono border border-green-500/20">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">ASSINANTE QUALIFICADO</span>
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controllers Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className={`p-3 rounded-full border transition-all ${
                theme === 'dark'
                  ? 'bg-slate-950 hover:bg-slate-900 border-slate-800 text-slate-300'
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 shadow-sm'
              }`}
              title="Anterior"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-1.5">
              {reviews.map((rev, index) => (
                <button
                  key={rev.id}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? 'w-6 bg-up-cyan'
                      : 'w-2 bg-slate-800/25'
                  }`}
                  title={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className={`p-3 rounded-full border transition-all ${
                theme === 'dark'
                  ? 'bg-slate-950 hover:bg-slate-900 border-slate-800 text-slate-300'
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 shadow-sm'
              }`}
              title="Próximo"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
