import React from 'react';
import {
  MessageCircle,
  Phone,
  ShieldCheck,
  Clock,
  ArrowRight,
  Lock,
} from 'lucide-react';
import {
  WHATSAPP_DEFAULT_URL,
  WHATSAPP_PHONE_NUMBER,
  WHATSAPP_RAW_PHONE,
} from '../types';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-3">
          Próximo Passo Estratégico
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto text-balance">
          Pronto para estruturar o seguro de carga da sua próxima operação?
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Sem burocracia, sem formulários intermináveis e sem compromisso inicial.
          Inicie agora mesmo uma conversa direta no WhatsApp com a equipe sênior da FELJ Consultoria.
        </p>

        {/* Big Conversion Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_DEFAULT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 text-base sm:text-lg font-extrabold text-white bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 hover:from-amber-500 hover:to-orange-500 active:scale-[0.99] rounded-2xl shadow-xl shadow-amber-950/60 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            id="final-whatsapp-cta"
          >
            <MessageCircle className="w-6 h-6 fill-white/20 shrink-0" />
            <span className="whitespace-nowrap">Chamar no WhatsApp Agora</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
        </div>

        {/* Direct Phone Highlight */}
        <div className="mt-5 text-sm text-slate-300">
          <span>Telefone direto: </span>
          <a
            href={`tel:${WHATSAPP_RAW_PHONE}`}
            className="font-bold text-amber-400 font-mono hover:underline ml-1"
          >
            {WHATSAPP_PHONE_NUMBER}
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Resposta técnica ágil</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Lock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Sigilo e proteção de carteira</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Engenharia de risco sênior</span>
          </div>
        </div>
      </div>
    </section>
  );
};
