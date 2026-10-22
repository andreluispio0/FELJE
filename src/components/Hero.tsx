import React, { useState } from 'react';
import {
  WHATSAPP_DEFAULT_URL,
  WHATSAPP_PHONE_NUMBER,
  getCustomWhatsAppUrl,
} from '../types';
import {
  MessageCircle,
  Truck,
  Plane,
  Ship,
  Train,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import heroMosaicImg from '../assets/images/hero_cargo_modals_mosaic_1792617838946.jpg';

export const Hero: React.FC = () => {
  const [activeModal, setActiveModal] = useState<number>(0);

  const modals = [
    {
      id: 'rodoviario',
      name: 'Rodoviário',
      icon: Truck,
      highlight: 'Maior volume na matriz brasileira',
      coverage: 'RCTR-C, RC-DC, RCTR-VI e apólices estipuladas',
      badge: 'Prioridade Nacional',
    },
    {
      id: 'aereo',
      name: 'Aéreo',
      icon: Plane,
      highlight: 'Cargas de alto valor e perecíveis',
      coverage: 'RCTA-C, Frete Aéreo Nacional e Internacional (Varsóvia/Montreal)',
      badge: 'Alta Urgência',
    },
    {
      id: 'maritimo',
      name: 'Marítimo',
      icon: Ship,
      highlight: 'Cabotagem e Comércio Exterior',
      coverage: 'RCA-C, Avaria Grossa, Importação e Exportação',
      badge: 'Longo Curso',
    },
    {
      id: 'ferroviario',
      name: 'Ferroviário',
      icon: Train,
      highlight: 'Granéis e grandes lotes industriais',
      coverage: 'RCTF-C, integração intermodal porto-ferrovia',
      badge: 'Intermodal',
    },
  ];

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-amber-500/10 via-transparent to-transparent pointer-events-none blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Kicker Tagline (Unboxed Metadata) */}
        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-semibold text-amber-400 mb-4 tracking-wide uppercase">
          <span>Assessoria Técnica B2B2B</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Exclusivo para Corretores e Seguradoras</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Desde 2021</span>
        </div>

        {/* 2-Column Desktop Split: Text & Primary CTA + Visual Focal Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Column 1: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              Seguro de carga para qualquer rota,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400">
                sem abrir mão da expertise técnica
              </span>{' '}
              que sua operação exige.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              A <strong>FELJ Consultoria</strong> é o braço técnico especializado em transportes nacionais
              e internacionais de corretores de seguros e seguradoras. Estruturamos apólices
              blindadas, calibramos o gerenciamento de riscos e destravamos operações complexas com agilidade direta.
            </p>

            {/* Above-the-fold CTA decision block */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={WHATSAPP_DEFAULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 active:scale-[0.99] rounded-xl shadow-lg shadow-orange-950/40 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                id="hero-whatsapp-cta"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span className="whitespace-nowrap">Falar com Especialista no WhatsApp</span>
              </a>

              <a
                href="#solucoes"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors whitespace-nowrap"
              >
                <span>Conhecer os 5 Serviços</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Trust and Phone Callout */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Atendimento direto: <strong className="text-white font-mono">{WHATSAPP_PHONE_NUMBER}</strong></span>
              </div>
              <span className="hidden sm:inline text-slate-600">|</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Sem compromisso inicial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Respeito absoluto à carteira do corretor</span>
              </div>
            </div>
          </div>

          {/* Column 2: Main Hero Visual (Mosaico de Modais com Hierarquia) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/70 shadow-2xl bg-slate-900 group">
              {/* Mosaic Image Asset */}
              <div className="relative aspect-[16/10] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={heroMosaicImg}
                  alt="Mosaico dos 4 modais de transporte de carga da FELJ: caminhão Scania em rodovia brasileira, avião cargueiro, navio porta-contêiner e trem ferroviário"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Measured Scrim for visual contrast */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Floating caption on image bottom */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-800 text-left">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                      Matriz Intermodal Coberta
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Brasil & Exterior</span>
                  </div>
                  <p className="text-xs text-slate-200 line-clamp-2">
                    Estruturação técnica para operações rodoviárias, aéreas, marítimas e ferroviárias com regulação alinhada.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Modals Pill Strip */}
            <div className="mt-4 grid grid-cols-4 gap-2">
              {modals.map((modal, index) => {
                const IconComponent = modal.icon;
                const isSelected = activeModal === index;
                return (
                  <button
                    key={modal.id}
                    type="button"
                    onClick={() => setActiveModal(index)}
                    className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-xl text-center border transition-all ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-500/60 text-amber-300 shadow-sm'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 mb-1 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
                    <span className="text-xs font-semibold whitespace-nowrap">{modal.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Modal Detail Drawer */}
            <div className="mt-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
              <div className="flex items-center justify-between text-slate-300 font-semibold mb-1">
                <span className="text-white">Modal {modals[activeModal].name}</span>
                <span className="text-amber-400 font-mono text-[11px]">{modals[activeModal].badge}</span>
              </div>
              <p className="text-slate-300 mb-1">{modals[activeModal].highlight}</p>
              <p className="text-slate-400 text-[11px]">
                <strong className="text-slate-300 font-medium">Cláusulas & Apólices:</strong> {modals[activeModal].coverage}
              </p>
            </div>
          </div>
        </div>

        {/* Proof & Attribute Ribbon (Adjacent to Hero claims) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="text-xs text-slate-400 font-medium">Segmento de Atuação</span>
            <p className="text-base font-bold text-white">Seguros de Carga</p>
            <p className="text-xs text-slate-400">Nacional & Internacional</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-slate-400 font-medium">Público Atendido</span>
            <p className="text-base font-bold text-white">B2B2B Exclusivo</p>
            <p className="text-xs text-slate-400">Corretores e Seguradoras</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-slate-400 font-medium">Atendimento</span>
            <p className="text-base font-bold text-white">Especialistas Sênior</p>
            <p className="text-xs text-slate-400">Sem robôs ou filas de espera</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-slate-400 font-medium">Histórico Institucional</span>
            <p className="text-base font-bold text-white">Desde 2021</p>
            <p className="text-xs text-slate-400">Ética e blindagem de carteira</p>
          </div>
        </div>
      </div>
    </section>
  );
};
