import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_DEFAULT_URL, WHATSAPP_PHONE_NUMBER } from '../types';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 select-none"
    >
      {/* Optional Quick Message Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-xl shadow-xl text-xs text-white max-w-xs transition-all animate-in fade-in slide-in-from-right-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
          <span>Especialistas online: Fale no WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 ml-1"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={WHATSAPP_DEFAULT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white rounded-full shadow-2xl shadow-emerald-950/60 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50"
        aria-label={`Conversar no WhatsApp com FELJ Consultoria pelo número ${WHATSAPP_PHONE_NUMBER}`}
      >
        {/* Subtle ping ring */}
        <span
          className="absolute inset-0 rounded-full bg-emerald-400 opacity-25 group-hover:scale-110 transition-transform duration-300"
          aria-hidden="true"
        />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white/20 relative z-10 transition-transform group-hover:scale-105" />

        {/* Mobile Accessible Tag */}
        <span className="sr-only">Atendimento WhatsApp FELJ Consultoria</span>
      </a>
    </aside>
  );
};
