import React, { useState } from 'react';
import { Logo } from './Logo';
import { WHATSAPP_DEFAULT_URL, WHATSAPP_PHONE_NUMBER } from '../types';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenQuickContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuickContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'O Desafio', href: '#problema' },
    { label: 'Serviços', href: '#solucoes' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Institucional', href: '#credibilidade' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md shrink-0"
          aria-label="FELJ Consultoria - Início"
        >
          <Logo variant="light" showSubtitle={true} />
        </a>

        {/* Zone 2: 4-5 Clean Nav Links */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
          aria-label="Navegação Principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action (WhatsApp Direct) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={WHATSAPP_DEFAULT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-amber-600 hover:bg-amber-500 active:bg-amber-700 rounded-lg shadow-sm shadow-amber-950/50 transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Abrir conversa no WhatsApp com FELJ Consultoria"
          >
            <MessageCircle className="w-4 h-4 text-white fill-white/20" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={WHATSAPP_DEFAULT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-white bg-amber-600 hover:bg-amber-500 rounded-lg"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Navegação Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-white px-2 py-1.5 rounded-md hover:bg-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={WHATSAPP_DEFAULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white bg-amber-600 rounded-lg hover:bg-amber-500 text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp ({WHATSAPP_PHONE_NUMBER})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
