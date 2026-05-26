import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, X, Send, Shield, Info, ClipboardCheck } from 'lucide-react';

import Header from './components/Header';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Features from './components/Features';
import Coverage from './components/Coverage';
import About from './components/About';
import Testimonials from './components/Testimonials';
import SubscriberCentral from './components/SubscriberCentral';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('upnet_theme');
      return saved === 'light' ? 'light' : 'dark'; // Dark is default for premium tech look
    } catch (e) {
      return 'dark'; // Safe fallback if localStorage is blocked in sandboxed iframes
    }
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    cidade: "Aparecida d'Oeste (Sede)",
    cep: '',
    endereco: ''
  });
  const [formSubmitting, setFormSubmitting] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('upnet_theme', theme);
    } catch (e) {
      // Ignore SecurityErrors in blocked local storage
    }
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.telefone || !formData.endereco) {
      alert('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }

    setFormSubmitting(true);

    // Simulate short technical verification glow transition
    setTimeout(() => {
      setFormSubmitting(false);
      setIsModalOpen(false);

      // Deep direct WhatsApp messaging builder
      const text = encodeURIComponent(
        `Olá UPNet! Gostaria de consultar a disponibilidade técnica de Fibra Óptica para meu endereço.\n\n` +
        `📋 *Dados Cadastrados:*\n` +
        `• Nome: ${formData.nome}\n` +
        `• WhatsApp: ${formData.telefone}\n` +
        `• Cidade: ${formData.cidade}\n` +
        `• CEP: ${formData.cep || 'Não informado'}\n` +
        `• Endereço: ${formData.endereco}\n\n` +
        `Por favor, me informem a cobertura técnica e os custos para instalação!`
      );

      window.open(`https://wa.me/5517997329575?text=${text}`, '_blank', 'noreferrer');
      // Clear coverage form state
      setFormData({
        nome: '',
        telefone: '',
        cidade: "Aparecida d'Oeste (Sede)",
        cep: '',
        endereco: ''
      });
    }, 1500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height
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
    <div className={`min-h-screen relative font-sans antialiased select-none transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Top Header Navigation */}
      <Header
        theme={theme}
        setTheme={setTheme}
        openCoverageModal={() => setIsModalOpen(true)}
      />

      {/* Main Premium Screens */}
      <main>
        
        {/* HERO SECTION */}
        <Hero
          theme={theme}
          openCoverageModal={() => setIsModalOpen(true)}
          scrollToPlans={() => scrollToSection('planos')}
        />

        {/* PLANS SECTIONS */}
        <Plans theme={theme} />

        {/* CORE FEATURES PILLARS */}
        <Features theme={theme} />

        {/* INTERACTIVE GEOGRAPHIC COVERAGE */}
        <Coverage
          theme={theme}
          openCoverageModal={() => setIsModalOpen(true)}
        />

        {/* STORY AND BRAND PROGRESS */}
        <About theme={theme} />

        {/* TESTIMONIALS SLIDER OVERVIEW */}
        <Testimonials theme={theme} />

        {/* SMART SUBSCRIBER SELF SERVICE PORTAL */}
        <SubscriberCentral theme={theme} />

      </main>

      {/* CYBERNETIC DARK FOOTER */}
      <Footer
        theme={theme}
        scrollToSection={scrollToSection}
      />

      {/* FLOAT WHATSAPP ACTIVE COMMUNICATOR */}
      <WhatsAppButton />

      {/* LGPD COOKIE CONSENT BANNER */}
      <CookieConsent />

      {/* INTEGRATED DIALOG COVERAGE MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            
            {/* Dark glass backdrop modal backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Body card screen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 20 }}
              className={`relative z-10 w-full max-w-lg rounded-3xl p-6 sm:p-8 border overflow-hidden ${
                theme === 'dark'
                  ? 'bg-slate-900 border-slate-800 text-slate-100 glow-cyan'
                  : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
              }`}
            >
              
              {/* Header inside modal */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-lg bg-up-cyan/15 flex items-center justify-center text-up-cyan">
                    <Globe className="w-5 h-5 animate-spin-slow" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold font-display leading-tight">Consulta de Disponibilidade</h3>
                    <p className="text-[10px] font-mono text-slate-400">VERIFICAÇÃO DE SINAL EM SEGUNDOS</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 px-2.5 rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors text-slate-400 hover:text-white shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Form container */}
              <form onSubmit={handleModalSubmit} className="space-y-4 text-left">
                
                <div>
                  <label htmlFor="nome" className="block text-xs font-semibold mb-1.5 flex justify-between">
                    <span>Seu Nome Completo *</span>
                    <span className="text-[10px] text-slate-500 font-mono">OBRIGATÓRIO</span>
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    placeholder="Ex: Carlos Silva de Souza"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full rounded-xl px-4 py-3 text-xs md:text-sm bg-slate-950/35 border border-slate-800 focus:outline-none focus:border-up-cyan text-white transition-all placeholder-slate-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telefone" className="block text-xs font-semibold mb-1.5 flex justify-between">
                      <span>WhatsApp de Contato *</span>
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      placeholder="Ex: (17) 99999-9999"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full rounded-xl px-4 py-3 text-xs md:text-sm bg-slate-950/35 border border-slate-800 focus:outline-none focus:border-up-cyan text-white transition-all placeholder-slate-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="cidade" className="block text-xs font-semibold mb-1.5 text-slate-300">
                      Cidade Atendida SP
                    </label>
                    <select
                      id="cidade"
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleInputChange}
                      className="w-full rounded-xl px-3 py-3 text-xs md:text-sm bg-slate-950 border border-slate-800 focus:outline-none focus:border-up-cyan text-slate-300 transition-all cursor-pointer"
                    >
                      <option value="Aparecida d'Oeste">Aparecida d'Oeste</option>
                      <option value="Suzanápolis">Suzanápolis</option>
                      <option value="Sud Mennucci">Sud Mennucci</option>
                      <option value="São Jorge (Distrito de Suzanápolis)">São Jorge (Distrito de Suzanápolis)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-1">
                    <label htmlFor="cep" className="block text-xs font-semibold mb-1.5 text-slate-300">
                      CEP Opcional
                    </label>
                    <input
                      type="text"
                      id="cep"
                      name="cep"
                      placeholder="15735-000"
                      value={formData.cep}
                      onChange={handleInputChange}
                      className="w-full rounded-xl px-4 py-3 text-xs md:text-sm bg-slate-950/35 border border-slate-800 focus:outline-none focus:border-up-cyan text-white transition-all placeholder-slate-600"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="endereco" className="block text-xs font-semibold mb-1.5 flex justify-between">
                      <span>Endereço Completo & Nº *</span>
                    </label>
                    <input
                      type="text"
                      id="endereco"
                      name="endereco"
                      required
                      placeholder="Ex: Av. Central, 120 - Centro"
                      value={formData.endereco}
                      onChange={handleInputChange}
                      className="w-full rounded-xl px-4 py-3 text-xs md:text-sm bg-slate-950/35 border border-slate-800 focus:outline-none focus:border-up-cyan text-white transition-all placeholder-slate-600"
                    />
                  </div>
                </div>

                {/* Secure warning terms checkbox mimics */}
                <div className="p-3.5 rounded-xl bg-slate-950/45 border border-slate-800/80 flex items-start space-x-2.5 mt-2">
                  <Shield className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <p className="text-[10px] text-slate-400 leading-normal">
                    Seus dados de endereço são tratados em consonância estrita com a LGPD e usados unicamente para mapear seu quadrante de sinal de fibra óptica na central de tráfego de Aparecida d'Oeste.
                  </p>
                </div>

                {/* Submit trigger button with simulated checking loader */}
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-up-blue to-up-cyan hover:shadow-lg hover:shadow-up-cyan/35 text-white font-bold text-xs tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 border-none"
                >
                  {formSubmitting ? (
                    <>
                      <div className="w-4.5 h-4.5 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                      <span>Verificando Infraestrutura Local...</span>
                    </>
                  ) : (
                    <>
                      <ClipboardCheck className="w-4 h-4" />
                      <span>Verificar Sinal no WhatsApp</span>
                    </>
                  )}
                </button>

              </form>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
