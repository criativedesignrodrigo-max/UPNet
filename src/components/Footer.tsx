import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Clock, 
  Globe, 
  ShieldAlert, 
  Settings 
} from 'lucide-react';
import logo from '../assets/images/logo.png';

interface FooterProps {
  theme: 'dark' | 'light';
  scrollToSection: (id: string) => void;
}

export default function Footer({ theme, scrollToSection }: FooterProps) {
  const socialIcons = [
    { label: 'Facebook', href: 'https://facebook.com/upnetinformatica', icon: Facebook },
    { label: 'Instagram', href: 'https://instagram.com/upnet_fibra', icon: Instagram },
    { label: 'LinkedIn', href: '#', icon: Linkedin }
  ];

  const mapLinks = [
    { label: 'Planos Fibra', id: 'planos' },
    { label: 'Sobre Nós', id: 'sobre' },
    { label: 'Diferenciais', id: 'diferenciais' },
    { label: 'Cidades Atendidas', id: 'cobertura' },
    { label: 'Central do Assinante', id: 'central' }
  ];

  return (
    <footer
      id="app-footer"
      className="bg-slate-950 text-slate-100 pt-20 pb-8 border-t border-slate-900 relative overflow-hidden"
    >
      {/* Decorative cybernetic glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-up-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-10 w-96 h-96 bg-up-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-slate-900 pb-12 text-left">
          
          {/* Brand Presentation Row (4cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center select-none">
              <img 
                src={logo} 
                alt="UPNet Informática" 
                className="h-11 w-auto object-contain transition-all duration-300" 
                referrerPolicy="no-referrer" 
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Conectando famílias e potencializando empresas no noroeste paulista com ultra velocidade de fibra óptica real e suporte altamente ético e humanizado desde 2011.
            </p>

            {/* Social Handles Icons */}
            <div className="flex space-x-3.5 pt-1">
              {socialIcons.map((soc) => {
                const IconComp = soc.icon;
                return (
                  <a
                    key={soc.label}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-up-cyan transition-colors"
                    aria-label={soc.label}
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Sitemap Links (2cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-extrabold tracking-wider uppercase text-slate-200">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {mapLinks.map((lin) => (
                <li key={lin.id}>
                  <button
                    onClick={() => scrollToSection(lin.id)}
                    className="hover:text-up-cyan transition-colors cursor-pointer"
                  >
                    {lin.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Office Address details (3cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-extrabold tracking-wider uppercase text-slate-200">
              CONTATO & SEDE
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              
              <li className="flex items-start">
                <MapPin className="w-4.5 h-4.5 text-up-cyan mr-3 shrink-0" />
                <span>
                  Rua Aparecida de Monte Alto, 597 - Centro<br />
                  Aparecida d'Oeste - SP<br />
                  CEP 15735-000
                </span>
              </li>

              <li className="flex items-center">
                <Phone className="w-4.5 h-4.5 text-up-cyan mr-3 shrink-0" />
                <a href="https://wa.me/5517997329575" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  (17) 99732-9575 (WhatsApp/Suporte)
                </a>
              </li>

              <li className="flex items-center">
                <Mail className="w-4.5 h-4.5 text-up-cyan mr-3 shrink-0" />
                <a href="mailto:contato@upnetfibra.com.br" className="hover:text-white transition-colors">
                  contato@upnetfibra.com.br
                </a>
              </li>

            </ul>
          </div>

          {/* Business Opening Hours Column - Dynamic trust representation (3cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-extrabold tracking-wider uppercase text-slate-200">
              HORÁRIO DE ATENDIMENTO
            </h4>
            
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-905 space-y-2.5 text-xs">
              <div className="flex items-center space-x-2 text-up-cyan">
                <Clock className="w-4 h-4 shrink-0" />
                <span className="font-semibold font-display">Sede Administrativa:</span>
              </div>
              <div className="space-y-1 font-mono text-[11px] text-slate-400">
                <p>Segunda a Sexta: 08:00h às 18:00h</p>
                <p>Sábados: 08:00h às 12:00h</p>
              </div>
            </div>

            <div className="text-[10px] font-mono text-slate-500 leading-snug">
              Licenciado ANATEL para serviços de Comunicação Multimídia (SCM). Conexão fibra ética e legalizada.
            </div>
          </div>

        </div>

        {/* Outer bottom row copyrights */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-slate-500 gap-4">
          <p>© 2026 UPNet Informática S/S Ltda. Todos os direitos reservados. Aparecida d'Oeste-SP.</p>
          
          <div className="flex items-center space-x-1">
            <span>Desenvolvido por</span>
            <a 
              href="https://www.ativa.top" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-up-cyan transition-colors hover:underline font-bold"
            >
              Ativa Comunicação e Marketing
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
