import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Receipt, CheckSquare, Zap, RefreshCw, Lock, HelpCircle, ExternalLink } from 'lucide-react';

interface SubscriberProps {
  theme: 'dark' | 'light';
}

export default function SubscriberCentral({ theme }: SubscriberProps) {
  const centralUrl = 'http://upnet.sgplocal.com.br:8000/accounts/central/login';

  return (
    <section
      id="central"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-100'
      }`}
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-up-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-up-cyan/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Mockup Column (5cols) - Futuristic visual representation */}
          <div className="lg:col-span-5 flex justify-center">
            
            <div className="relative w-[280px] h-[580px] rounded-[40px] border-[8px] border-slate-900 bg-slate-950 p-2.5 shadow-2xl shadow-up-blue/20">
              
              {/* Speaker & camera dots */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-25 flex items-center justify-center">
                <div className="w-12 h-1 bg-slate-800 rounded-full mb-1" />
                <div className="w-2.5 h-2.5 bg-slate-950 rounded-full ml-2 mb-1" />
              </div>

              {/* Internal Smart Screen content */}
              <div className="w-full h-full rounded-[30px] bg-slate-900 overflow-hidden flex flex-col justify-between p-4 relative text-left">
                
                {/* Simulated Header */}
                <div className="pt-6 mb-3">
                  <div className="flex justify-between items-center px-1">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-mono">PORTAL DO CLIENTE</span>
                      <span className="text-sm font-bold text-white font-display">UPNet Central</span>
                    </div>
                    <div className="px-2 py-0.5 rounded bg-up-cyan/10 text-up-cyan text-[8px] font-mono tracking-wider animate-pulse">
                      STATUS: ONLINE
                    </div>
                  </div>
                </div>

                {/* Dashboard Stats */}
                <div className="bg-slate-950/45 border border-slate-800 p-3 rounded-xl mb-3">
                  <span className="text-[9px] font-mono text-slate-400">SERVIÇO DISPONÍVEL</span>
                  <div className="flex justify-between items-center mt-0.5">
                    <span className="text-sm font-bold text-up-cyan">Faturas e Segunda Via</span>
                    <span className="text-[8px] font-mono text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded">ATIVO</span>
                  </div>
                  <div className="mt-2.5 pt-2.5 border-t border-slate-800/35 flex justify-between text-center text-[9px] font-mono text-slate-400">
                    <div>
                      <span>ÁREA</span>
                      <p className="text-white font-bold text-xs mt-0.5">Cliente</p>
                    </div>
                    <div>
                      <span>BOLETO</span>
                      <p className="text-white font-bold text-xs mt-0.5">Pix/Barras</p>
                    </div>
                    <div>
                      <span>PREMIUM</span>
                      <p className="text-emerald-400 font-bold text-xs mt-0.5">fibra</p>
                    </div>
                  </div>
                </div>

                {/* Action Grid representation */}
                <div className="flex-1 space-y-2.5 mt-1 overflow-y-auto pr-1">
                  
                  <a href={centralUrl} target="_blank" rel="noreferrer" className="w-full p-2.5 bg-slate-850 hover:bg-slate-800 rounded-xl flex items-center justify-between border border-slate-800 transition-all text-left block">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-1.5 rounded bg-up-blue/15 text-up-blue">
                        <Receipt className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white leading-tight">Emitir 2ª Via de Fatura</p>
                        <p className="text-[8px] text-slate-400">Baixe ou pague no Pix</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-up-cyan">➜</span>
                  </a>

                  <a href={centralUrl} target="_blank" rel="noreferrer" className="w-full p-2.5 bg-slate-850 hover:bg-slate-800 rounded-xl flex items-center justify-between border border-slate-800 transition-all text-left block">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-1.5 rounded bg-up-cyan/15 text-up-cyan">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white leading-tight">Acessar Área do Assinante</p>
                        <p className="text-[8px] text-slate-400">Gerenciar todos os seus contratos</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-up-cyan">➜</span>
                  </a>

                </div>

                {/* Secure certificate and disclaimer */}
                <div className="mt-3 pt-3 border-t border-slate-800 text-center">
                  <p className="text-[8px] text-slate-400 font-mono tracking-wide leading-tight">
                    🔒 AMBIENTE AUDITADO DE ALTA SEGURANÇA SGP
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Text Instructions / Access Column (7cols) */}
          <div className="lg:col-span-7 text-left flex flex-col space-y-6">
            <span className="text-up-blue font-mono text-xs font-bold tracking-widest uppercase">CENTRAL DO ASSINANTE UPNET</span>
            
            <h2 className={`font-display font-extrabold text-3xl sm:text-4xl tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-950'
                }`}
              >
                Sua Área do Cliente e Emissão de Segunda Via
              </h2>

              <p className={`text-xs sm:text-sm leading-relaxed ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Esqueceu de pagar seu boleto físico ou precisa da segunda via da fatura? Não se preocupe! Acesse nossa central de autoatendimento especializada de forma imediata. Obtenha CPF/CNPJ cadastrado e faça consultas imediatas e seguras sem fila e sem burocracia.
              </p>

              {/* High-glow Info Box */}
              <div className={`p-6 rounded-2xl border ${
                theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-205'
              }`}>
                <h4 className={`text-sm sm:text-base font-bold font-display flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  <Receipt className="w-5 h-5 text-up-cyan" />
                  Gere o código de barras ou pague direto com Pix
                </h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Utilize o portal do assinante UPNet para copiar códigos Pix Copia e Cola para quitação imediata ou fazer o download do boleto em formato PDF para pagamento no aplicativo do seu banco favorito.
                </p>

                <div className="mt-4 pt-4 border-t border-slate-800/10 space-y-2">
                  <div className="flex items-center text-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-up-cyan mr-2" />
                    <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>Visualização em tempo real de faturas em aberto</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-up-cyan mr-2" />
                    <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>Baixa e compensação automática no sistema após pagamento</span>
                  </div>
                </div>
              </div>

              {/* Action Trigger Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-3">
                <a
                  id="central-portal-btn-main"
                  href={centralUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-up-blue to-up-cyan text-white text-xs font-bold tracking-wider hover:shadow-lg hover:shadow-up-cyan/25 transition-all text-center flex items-center justify-center space-x-2"
                >
                  <span>Acessar Central do Assinante</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  id="central-contact-whatsapp-chat"
                  href="https://wa.me/5517997329575"
                  target="_blank"
                  rel="noreferrer"
                  className={`py-4 px-6 rounded-xl text-xs font-semibold text-center border transition-all ${
                    theme === 'dark'
                      ? 'border-slate-800 bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-900'
                      : 'border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  Suporte Financeiro WhatsApp
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>
  );
}
