import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Globe, CheckCircle, HelpCircle, PhoneCall, Check, Server } from 'lucide-react';

interface CoverageProps {
  theme: 'dark' | 'light';
  openCoverageModal: () => void;
}

interface City {
  id: string;
  name: string;
  status: 'disponivel' | 'parcial' | 'brevemente';
  statusLabel: string;
  tech: string[];
  coor: { x: number; y: number };
}

export default function Coverage({ theme, openCoverageModal }: CoverageProps) {
  const cities: City[] = [
    {
      id: 'ap-oeste',
      name: "Aparecida d'Oeste",
      status: 'disponivel',
      statusLabel: 'Cobertura 100% Fibra',
      tech: ['Instalação Imediata', 'Roteadores Dual-Band', 'Internet 100% Fibra', 'Suporte Técnico Local'],
      coor: { x: 80, y: 25 }
    },
    {
      id: 'suzanapolis',
      name: 'Suzanápolis',
      status: 'disponivel',
      statusLabel: 'Cobertura 100% Fibra',
      tech: ['Fibra Óptica Premium', 'Suporte Técnico Local', 'Wi-Fi de Alta Potência'],
      coor: { x: 25, y: 55 }
    },
    {
      id: 'sud-mennucci',
      name: 'Sud Mennucci',
      status: 'disponivel',
      statusLabel: 'Cobertura 100% Fibra',
      tech: ['Planos Residenciais Fibra', 'Suporte Ultra Ágil', 'Roteadores Premium'],
      coor: { x: 20, y: 85 }
    },
    {
      id: 'sao-jorge',
      name: 'São Jorge (Distrito de Suzanápolis)',
      status: 'disponivel',
      statusLabel: 'Cobertura 100% Fibra',
      tech: ['Ultra Velocidade Fibra', 'Instalação Expressa', 'Rendimento de Alta Estabilidade'],
      coor: { x: 38, y: 62 }
    }
  ];

  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);

  const handleConsultClick = (cityName: string) => {
    const text = encodeURIComponent(`Olá UPNet! Gostaria de falar com um consultor para verificar a viabilidade técnica e contratar planos de Fibra Óptica para a cidade de ${cityName}.`);
    window.open(`https://wa.me/5517997329575?text=${text}`, '_blank', 'noreferrer');
  };

  return (
    <section
      id="cobertura"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-up-cyan font-mono text-xs font-bold tracking-widest uppercase">EXPANSÃO DE REDE</span>
          <h2 className={`font-display font-extrabold text-3xl sm:text-4xl mt-3 tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-950'
          }`}>
            Nossa rede de Fibra Óptica cresce a cada dia
          </h2>
          <p className={`mt-4 text-xs sm:text-base leading-relaxed ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Operando com anéis redundantes conectados diretamente à espinha dorsal (Backbone) regional do noroeste paulista. Selecione a localidade para verificar a entrega de sinal.
          </p>
        </div>

        {/* Main interactive grid containing topological SVG maps and list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* MAP COLUMN (7cols) - Customized premium map topology */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            <div className={`relative w-full aspect-[4/3] max-w-lg rounded-3xl p-6 overflow-hidden border ${
              theme === 'dark'
                ? 'bg-slate-950/60 border-slate-800'
                : 'bg-white border-slate-200 shadow-xl'
            }`}>
              
              {/* Map abstract grids/telemetry overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#11C5FF_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Svg connection rings */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <defs>
                  <linearGradient id="grad-fiber" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0D6EFD" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#11C5FF" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                
                {/* Visual optical trunk cables */}
                {cities.map((city, idx) => {
                  if (idx === 0) return null;
                  const parent = cities[0]; // Connecting all to Sede
                  return (
                    <line
                      key={`line-${city.id}`}
                      x1={`${parent.coor.x}%`}
                      y1={`${parent.coor.y}%`}
                      x2={`${city.coor.x}%`}
                      y2={`${city.coor.y}%`}
                      stroke="url(#grad-fiber)"
                      strokeWidth="2"
                      strokeDasharray="4 6"
                      className="animate-pulse"
                    />
                  );
                })}
              </svg>

              {/* Interactive Pulse Points */}
              <div className="absolute inset-0 z-10">
                {cities.map((city) => {
                  const isSelected = selectedCity.id === city.id;
                  return (
                    <button
                      key={city.id}
                      onClick={() => setSelectedCity(city)}
                      style={{ left: `${city.coor.x}%`, top: `${city.coor.y}%` }}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                    >
                      <span className="relative flex h-8 w-8 items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 bg-up-cyan" />
                        <span className={`relative rounded-full h-4.5 w-4.5 flex items-center justify-center border border-white/40 shadow shadow-black transition-all duration-300 ${
                          isSelected
                            ? 'scale-125 bg-white'
                            : 'bg-up-blue'
                        }`}>
                          <MapPin className={`w-2.5 h-2.5 ${
                            isSelected 
                              ? 'text-up-blue' 
                              : 'text-white'
                          }`} />
                        </span>
                      </span>

                      {/* Floating tag label on hover/select */}
                      <span className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-[9px] font-bold font-mono py-0.5 px-2 rounded-md transition-all ${
                        isSelected
                          ? 'bg-up-cyan text-slate-950 scale-100 opacity-100'
                          : 'bg-slate-900/80 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:bottom-[-28px]'
                      }`}>
                        {city.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Map Legend */}
              <div className="absolute bottom-4 left-4 z-20 flex flex-col space-y-1.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[9px] font-mono">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-up-cyan" />
                  <span className="text-slate-300">FIBRA TOTALMENTE ATIVA</span>
                </div>
              </div>

              <div className="absolute top-4 right-4 text-[9px] font-mono text-slate-500 border border-slate-800/20 px-2 py-0.5 rounded">
                MAPA DE TOPOLOGIA DE REDE V4.2
              </div>
            </div>

            <p className="text-[11px] font-mono text-slate-500 mt-4 italic">
              *Mapa representativo. Conexão redundante contínua com Aparecida d'Oeste.
            </p>
          </div>

          {/* COMPONENT COLUMN (5cols) - Selection details view */}
          <div className="lg:col-span-5 text-left">
            <span className="text-up-cyan font-mono text-xs font-semibold tracking-wider">MUNICÍPIO SELECIONADO</span>
            
            <h3 className={`text-2xl sm:text-3xl font-display font-bold mt-1 tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-950'
            }`}>
              {selectedCity.name}
            </h3>

            {/* Status dynamic pill */}
            <div className="mt-3 flex items-center space-x-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                <span className="w-2 h-2 rounded-full mr-1.5 bg-green-500" />
                {selectedCity.statusLabel}
              </span>
            </div>

            <p className={`mt-4 text-xs sm:text-sm leading-relaxed ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Selecione outra localidade vizinha no mapa para auditar as redes ativas. Contamos com equipes na rua todos os dias para assegurar rápida assistência.
            </p>

            {/* Micro Specs List */}
            <div className={`mt-6 p-5 rounded-2xl border ${
              theme === 'dark' ? 'bg-slate-950/40 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <h4 className={`text-xs font-bold font-mono uppercase tracking-wider mb-3 ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Parâmetros Disponibilizados na Região:
              </h4>
              <div className="space-y-2.5">
                {selectedCity.tech.map((featureText, index) => (
                  <div key={index} className="flex items-center text-xs">
                    <Check className="w-4 h-4 text-up-cyan mr-2 flex-shrink-0" />
                    <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>{featureText}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                id="check-coverage-whatsapp"
                onClick={() => handleConsultClick(selectedCity.name)}
                className="flex-1 py-4.5 rounded-xl bg-gradient-to-r from-up-blue to-up-cyan text-white text-xs font-bold tracking-wide transition-all shadow-md hover:shadow-lg hover:shadow-up-cyan/30 flex items-center justify-center space-x-1.5"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Solicitar Nesta Cidade</span>
              </button>
              
              <button
                id="search-address-modal-trigger"
                onClick={openCoverageModal}
                className={`py-4 px-6 rounded-xl text-xs font-semibold border ${
                  theme === 'dark'
                    ? 'border-slate-800 bg-slate-955 hover:bg-slate-900 text-slate-300'
                    : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                }`}
              >
                Buscar Cep Específico
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
