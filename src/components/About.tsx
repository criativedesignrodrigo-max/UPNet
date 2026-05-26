import React from 'react';
import { Calendar, Monitor, Award, Heart, Check, Users2, Shield } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  theme: 'dark' | 'light';
}

export default function About({ theme }: AboutProps) {
  const stats = [
    { label: 'ANOS DE INOVAÇÃO', val: '15+', subtitle: 'Fundada em 2011' },
    { label: 'FIBRA IMPLANTADA', val: '500km+', subtitle: 'Noroeste Paulista' },
    { label: 'SUPORTE RESOLUTIVO', val: '99.4%', subtitle: 'Suporte local humano' },
    { label: 'CLIENTES ATIVOS', val: 'MILHARES', subtitle: 'Lares e empresas' }
  ];

  const coreValues = [
    {
      title: 'Transparência Máxima',
      desc: 'Sem franquias de consumo ou surpresas desagradáveis na mensalidade.'
    },
    {
      title: 'Proximidade Regional',
      desc: 'Nossa equipe está sempre por perto, agilizando reparos de rede.'
    },
    {
      title: 'Equipamentos de Ponta',
      desc: 'Parceiros como Huawei e Intelbras para roteadores Wi-Fi de alta estabilidade.'
    }
  ];

  return (
    <section
      id="sobre"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <div className="absolute top-1/2 right-1/10 w-96 h-96 bg-up-cyan/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Column (6cols) */}
          <div className="lg:col-span-6 text-left flex flex-col space-y-5">
            <span className="text-up-blue font-mono text-xs font-bold tracking-widest uppercase">NOSSA HISTÓRIA</span>
            
            <h2 className={`font-display font-extrabold text-3xl sm:text-4xl tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-950'
            }`}>
              Desde 2011 conectando o que é mais importante para você e sua família
            </h2>

            <p className={`text-sm sm:text-base leading-relaxed ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Fundada em Aparecida d'Oeste-SP, a UPNet Informática nasceu com o propósito de suprir as necessidades de conectividade e suporte tecnológico em toda a nossa região. Em quase 15 anos de história, nós nos consolidamos não apenas como uma provedora de internet, mas como parceira técnica de pequenos comércios, grandes agronegócios e lares locais.
            </p>

            <p className={`text-xs sm:text-sm leading-relaxed ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Trabalhamos incansavelmente investindo em tecnologias de Fibra Óptica, computação avançada e suporte presencial dedicado. Através de nossa infraestrutura ágil, garantimos que cada cliente desfrute de velocidade simétrica de verdade com a segurança de um atendimento carinhoso e presencial sempre que necessário.
            </p>

            {/* Micro checks box list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {coreValues.map((val, idx) => (
                <div key={idx} className={`p-4 rounded-xl border ${
                  theme === 'dark' ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <h4 className={`text-xs font-bold flex items-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    <Check className="w-4 h-4 text-up-cyan mr-1.5 shrink-0 stroke-[2.5]" />
                    {val.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats and Achievements Layout Column (6cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            {/* Grid of Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((st, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border text-center relative overflow-hidden group ${
                    theme === 'dark'
                      ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700/60'
                      : 'bg-stone-50 border-slate-200 hover:shadow shadow-slate-100'
                  }`}
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-up-blue to-up-cyan" />
                  <span className="text-3xl sm:text-4xl font-display font-black text-up-cyan tracking-tight block">
                    {st.val}
                  </span>
                  <span className={`text-[11px] font-mono tracking-wider block mt-2 font-bold ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {st.label}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5 font-medium">
                    {st.subtitle}
                  </span>
                </div>
              ))}
            </div>

            {/* Human Team Banner representation to increase empathy */}
            <div className={`p-6 rounded-3xl border flex items-center space-x-4 ${
              theme === 'dark'
                ? 'bg-slate-950 border-slate-800/80 glow-cyan'
                : 'bg-white border-slate-200'
            }`}>
              <div className="w-12 h-12 rounded-2xl bg-up-cyan/15 flex items-center justify-center shrink-0">
                <Users2 className="w-6 h-6 text-up-cyan" />
              </div>
              <div className="text-left">
                <p className={`text-xs sm:text-sm font-semibold ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                  Nossa equipe de engenharia e atendimento mora aqui
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Estamos prontos para atender você no mesmo dia. Suporte sem esperas telefônicas estressantes e sem burocracias.
                </p>
              </div>
            </div>

            {/* Trust badge with dynamic calendar icon */}
            <div className={`p-4 rounded-2xl border ${
              theme === 'dark' ? 'bg-slate-950/20 border-slate-850' : 'bg-slate-50 border-slate-200'
            } text-center flex items-center justify-center space-x-2 text-xs text-slate-400 font-mono`}>
              <Award className="w-4 h-4 text-amber-500" />
              <span>UPNet Informática - CNPJ: 14.120.222/0001-38</span>
            </div>

          </div>

        </div>

        {/* 3-Column Proximity Gallery */}
        <div className={`mt-20 pt-16 border-t ${
          theme === 'dark' ? 'border-slate-900' : 'border-slate-200'
        }`}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-up-cyan font-mono text-xs font-bold tracking-widest uppercase">CONEXÃO E PRESENÇA LOCAL</span>
            <h3 className={`font-display font-extrabold text-2xl sm:text-3xl tracking-tight mt-2 ${
              theme === 'dark' ? 'text-white' : 'text-slate-950'
            }`}>
              Quem cuida da sua internet está logo ao seu lado
            </h3>
            <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Diferente de grandes operadoras nacionais com suporte impessoal, a UPNet investe em infraestrutura física e pessoas residentes na nossa própria microrregião para garantir a maior rapidez.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Local Support */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-slate-900/30 border-slate-850 hover:border-slate-800' 
                  : 'bg-stone-50 border-slate-200 hover:shadow-lg hover:shadow-slate-100'
              }`}
            >
              <div className="overflow-hidden aspect-video relative">
                <img 
                  src="/src/assets/images/suporte_local_novo_1779820359990.png" 
                  alt="Atendimento presencial e acolhedor UPNet" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-up-cyan text-slate-950 text-[10px] font-mono font-bold px-2 py-1 rounded-md">
                  ATENDIMENTO LOCAL HUMANO
                </div>
              </div>
              <div className="p-6 text-left">
                <h4 className={`text-base font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-slate-950'
                }`}>
                  Atendimento sem Robôs
                </h4>
                <p className={`text-xs mt-2 leading-relaxed ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Visite nossa sede física em Aparecida d'Oeste ou converse instantaneamente via WhatsApp com nossa equipe local engajada. Nós conhecemos você pelo seu nome, não por um protocolo.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Field Technician */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-slate-900/30 border-slate-850 hover:border-slate-800' 
                  : 'bg-stone-50 border-slate-200 hover:shadow-lg hover:shadow-slate-100'
              }`}
            >
              <div className="overflow-hidden aspect-video relative">
                <img 
                  src="/src/assets/images/tecnico_fibra_novo_1779820382981.png" 
                  alt="Técnico da UPNet fazendo manutenção na rede local" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-up-blue text-white text-[10px] font-mono font-bold px-2 py-1 rounded-md">
                  MANUTENÇÃO ULTRA RÁPIDA
                </div>
              </div>
              <div className="p-6 text-left">
                <h4 className={`text-base font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-slate-950'
                }`}>
                  Infraestrutura Proprietária
                </h4>
                <p className={`text-xs mt-2 leading-relaxed ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Nossa rede de cabos de fibra óptica moderna e redundante é mantida presencialmente por técnicos locais. Isso nos dá a agilidade de solucionar qualquer evento no mesmo dia!
                </p>
              </div>
            </motion.div>

            {/* Card 3: Happy Family */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-slate-900/30 border-slate-850 hover:border-slate-800' 
                  : 'bg-stone-50 border-slate-200 hover:shadow-lg hover:shadow-slate-100'
              }`}
            >
              <div className="overflow-hidden aspect-video relative">
                <img 
                  src="/src/assets/images/familia_conectada_upnet_1779817721954.png" 
                  alt="Família feliz conectada com Wi-Fi de alta estabilidade" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-indigo-500 text-white text-[10px] font-mono font-bold px-2 py-1 rounded-md">
                  FIBRA PARA TODA FAMÍLIA
                </div>
              </div>
              <div className="p-6 text-left">
                <h4 className={`text-base font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-slate-950'
                }`}>
                  União e Lazer Estável
                </h4>
                <p className={`text-xs mt-2 leading-relaxed ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Estudos online, home office, streaming de séries em 4K e jogos simultâneos sem perdas de pacotes. Levamos estabilidade premium para conectar a sua família de ponta a ponta.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
