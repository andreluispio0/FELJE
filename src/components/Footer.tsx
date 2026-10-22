import React from 'react';
import { Logo } from './Logo';
import {
  WHATSAPP_DEFAULT_URL,
  WHATSAPP_PHONE_NUMBER,
  WHATSAPP_RAW_PHONE,
} from '../types';
import { MessageCircle, Phone, MapPin, Mail, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" showSubtitle={true} />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Assessoria técnica especializada em seguros corporativos com foco em transporte
              e cargas em todos os modais. Parceria estratégica para corretores e seguradoras.
            </p>
            <div className="pt-2 flex items-center gap-2 text-slate-400 text-xs">
              <Shield className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Modelo exclusivo B2B2B · Desde 2021</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#problema" className="hover:text-amber-400 transition-colors">
                  O Desafio Técnico
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-amber-400 transition-colors">
                  Os 5 Serviços
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-amber-400 transition-colors">
                  Diferenciais Competitivos
                </a>
              </li>
              <li>
                <a href="#credibilidade" className="hover:text-amber-400 transition-colors">
                  Credibilidade & Valores
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Modais */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Modais Cobertos
            </h4>
            <ul className="space-y-2.5">
              <li className="text-slate-300">Transporte Rodoviário</li>
              <li className="text-slate-300">Transporte Aéreo</li>
              <li className="text-slate-300">Transporte Marítimo</li>
              <li className="text-slate-300">Transporte Ferroviário</li>
              <li className="text-slate-400">Operações Multimodais</li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contato Direto
            </h4>
            <div className="space-y-3">
              <a
                href={WHATSAPP_DEFAULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span className="font-mono">{WHATSAPP_PHONE_NUMBER}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>São Paulo - SP · Brasil</span>
              </div>
              <div className="text-[11px] text-slate-400 pt-1">
                Atendimento técnico em horário comercial e plantão de operações críticas.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400 text-[11px]">
          <div>
            © {currentYear} FELJ Consultoria em Seguros Corporativos. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">São Paulo / SP</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">Atuação Nacional e Internacional</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
