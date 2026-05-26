import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Clock, 
  Smartphone, 
  Cpu, 
  HeartHandshake, 
  Wrench, 
  Network 
} from 'lucide-react';

interface FeaturesProps {
  theme: 'dark' | 'light';
}

export default function Features({ theme }: FeaturesProps) {
  const highlights = [
    {
      id: 'hi-1',
      title: 'Fibra Óptica Real de Ponta a Ponta',
      description: 'Sua internet trafega pela velocidade da luz através de cabos de vidro até dentro da sua residência. Esqueça oscilações causadas por clima ou ventos.',
      icon: Zap,
      color: 'text-up-cyan bg-up-cyan/10 border-up-cyan/20'
    },
    {
      id: 'hi-2',
      title: 'Suporte Técnico Humanizado e Local',
      description: 'Chega de robôs e atendentes de outros estados. Nossa equipe técnica mora em Aparecida d\'Oeste e atende você com rapidez e carinho regional de verdade.',
      icon: HeartHandshake,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      id: 'hi-3',
      title: 'Ultra Velocidade & Baixa Latência',
      description: 'Rotas otimizadas com ping extremamente reduzido. Excelente para jogos eletrônicos altamente competitivos e reuniões por videoconferência em tempo real.',
      icon: Cpu,
      color: 'text-up-blue bg-up-blue/10 border-up-blue/20'
    },
    {
      id: 'hi-4',
      title: 'Manutenção de Computadores Integrada',
      description: 'Além de prover internet, somos especialistas. Oferecemos serviços especializados de assistência técnica, limpeza e upgrade de hardware para máquinas domésticas e comerciais.',
      icon: Wrench,
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
    },
    {
      id: 'hi-5',
      title: 'Estabilidade & Conexão Contínua',
      description: 'Garantia real de desempenho. Conexão ininterrupta de alta estabilidade para que sua família assista aulas, trabalhe de casa e navegue sem qualquer instabilidade ou travamento.',
      icon: Network,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
    },
    {
      id: 'hi-6',
      title: 'Pronto para a Tecnologia 5G FWA',
      description: 'Conectividade inteligente avançada. Equipamentos preparados para integrar redes internas Wi-Fi de alta fluidez capazes de suportar dezenas de aparelhos de forma síncrona.',
      icon: Smartphone,
      color: 'text-pink-400 bg-pink-500/10 border-pink-500/20'
    }
  ];

  return (
    <section
      id="diferenciais"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      {/* Visual cyber design blobs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-up-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-up-blue/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-up-cyan font-mono text-xs font-bold tracking-widest uppercase">POR QUE A UPNET?</span>
          <h2 className={`font-display font-extrabold text-3xl sm:text-4xl mt-3 tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-950'
          }`}>
            Diferenciais de quem investe em infraestrutura e respeito no atendimento
          </h2>
          <p className={`mt-4 text-xs sm:text-base leading-relaxed ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Desde 2011 em Aparecida d'Oeste-SP, a UPNet Informática evolui continuamente com redes redundantes e treinamento humano constante para oferecer a melhor internet estável de toda a região.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`p-8 rounded-3xl border text-left transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                  theme === 'dark'
                    ? 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700/80 glow-cyan'
                    : 'bg-stone-50/50 border-slate-200/80 hover:bg-stone-50 hover:border-slate-300 shadow shadow-slate-100'
                }`}
              >
                {/* Icon Circle Wrap with matching color scheme */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center p-2 border mb-6 inline-block ${item.color}`}>
                  <IconComponent className="w-6 h-6 stroke-[1.8]" />
                </div>

                <h3 className={`text-lg font-bold font-display tracking-tight mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.title}
                </h3>
                
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Real-time latency simulated monitoring line */}
        <div className={`mt-16 p-6 sm:p-8 rounded-3xl border flex flex-col lg:flex-row items-center justify-between gap-8 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-slate-950 to-slate-900 border-slate-800'
            : 'bg-slate-50 border-slate-200 shadow shadow-slate-200/50'
        }`}>
          <div className="text-left max-w-xl">
            <span className="text-[10px] font-mono text-up-cyan">INFRAESTRUTURA DE ALTA RESILIÊNCIA</span>
            <h4 className={`text-lg font-bold font-display mt-0.5 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Trânsito IP Direto com Principais CDNs do Planeta
            </h4>
            <p className="text-xs text-slate-400 mt-2">
              Nossa malha de rede fibra possui conexões integradas com servidores do Netflix, YouTube, Meta, PlayStation e Google, eliminando congestionamentos de internet regionais em horários de pico.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex flex-col text-center">
              <span className="text-3xl font-extrabold font-display text-emerald-400">99.98%</span>
              <span className="text-[9px] font-mono text-slate-500 mt-1">UPTIME DO PROVEDOR</span>
            </div>
            <div className="w-[1px] h-12 bg-slate-800" />
            <div className="flex flex-col text-center">
              <span className="text-3xl font-extrabold font-display text-up-cyan">&lt; 15ms</span>
              <span className="text-[9px] font-mono text-slate-500 mt-1">PING SERVIDORES BR</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
