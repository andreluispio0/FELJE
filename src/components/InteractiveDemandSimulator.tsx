import React, { useState } from 'react';
import {
  MessageCircle,
  Truck,
  Plane,
  Ship,
  Train,
  CheckCircle2,
  Copy,
  Check,
  Send,
  Layers,
} from 'lucide-react';
import { WHATSAPP_RAW_PHONE, WHATSAPP_PHONE_NUMBER } from '../types';

export const InteractiveDemandSimulator: React.FC = () => {
  const [userProfile, setUserProfile] = useState<'corretor' | 'seguradora' | 'outro'>('corretor');
  const [modalType, setModalType] = useState<string>('Rodoviário');
  const [scope, setScope] = useState<string>('Nacional');
  const [demand, setDemand] = useState<string>('Nova Estruturação de Apólice');
  const [copied, setCopied] = useState<boolean>(false);

  const profiles = [
    { id: 'corretor', label: 'Corretor de Seguros' },
    { id: 'seguradora', label: 'Seguradora / Subscritor' },
    { id: 'outro', label: 'Operador Logístico / Outro' },
  ];

  const modals = [
    { name: 'Rodoviário', icon: Truck },
    { name: 'Aéreo', icon: Plane },
    { name: 'Marítimo', icon: Ship },
    { name: 'Ferroviário', icon: Train },
    { name: 'Multimodal', icon: Layers },
  ];

  const scopes = ['Nacional', 'Internacional', 'Nacional e Internacional'];

  const demands = [
    'Nova Estruturação de Apólice',
    'Revisão / Otimização de PGR',
    'Apoio Técnico em Negociação com Seguradoras',
    'Enquadramento de Carga Especial ou de Alto Valor',
  ];

  const profileLabel =
    userProfile === 'corretor'
      ? 'Sou corretor de seguros'
      : userProfile === 'seguradora'
      ? 'Represento uma seguradora'
      : 'Sou profissional do setor de logística e seguros';

  const generatedMessage = `Olá FELJ Consultoria! ${profileLabel} e gostaria de suporte técnico para uma demanda de seguro de carga. Modal: ${modalType} | Âmbito: ${scope} | Objetivo: ${demand}. Poderiam me orientar?`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_RAW_PHONE}?text=${encodeURIComponent(
    generatedMessage
  )}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block mb-2">
            Atendimento Personalizado
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Configure sua consulta técnica direta no WhatsApp
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Selecione seu perfil e o tipo de operação para gerar uma mensagem pronta e falar diretamente com nossa equipe técnica sênior.
          </p>
        </div>

        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
          <div className="space-y-6">
            {/* Step 1: Profile */}
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2.5">
                1. Qual é o seu perfil de atuação?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {profiles.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setUserProfile(p.id as any)}
                    className={`py-3 px-4 rounded-xl text-xs font-semibold border transition-all text-left flex items-center justify-between ${
                      userProfile === p.id
                        ? 'bg-amber-600/15 border-amber-500 text-white shadow-sm'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <span>{p.label}</span>
                    {userProfile === p.id && <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Modal */}
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2.5">
                2. Qual modal de transporte envolvido?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {modals.map((m) => {
                  const Icon = m.icon;
                  const isSelected = modalType === m.name;
                  return (
                    <button
                      key={m.name}
                      type="button"
                      onClick={() => setModalType(m.name)}
                      className={`py-3 px-3 rounded-xl text-xs font-semibold border transition-all flex flex-col items-center justify-center gap-1.5 ${
                        isSelected
                          ? 'bg-amber-600/15 border-amber-500 text-amber-300 shadow-sm'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{m.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Scope & Objective */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2.5">
                  3. Âmbito da rota:
                </label>
                <div className="flex flex-col gap-2">
                  {scopes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setScope(s)}
                      className={`py-2.5 px-3.5 rounded-lg text-xs font-medium border text-left transition-all ${
                        scope === s
                          ? 'bg-amber-600/15 border-amber-500 text-white'
                          : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2.5">
                  4. Principal objetivo:
                </label>
                <div className="flex flex-col gap-2">
                  {demands.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDemand(d)}
                      className={`py-2.5 px-3.5 rounded-lg text-xs font-medium border text-left transition-all truncate ${
                        demand === d
                          ? 'bg-amber-600/15 border-amber-500 text-white'
                          : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Preview Box & Send Action */}
            <div className="pt-6 border-t border-slate-800">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Prévia da mensagem pronta para o WhatsApp:
              </span>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 font-sans leading-relaxed relative flex items-start justify-between gap-3">
                <p className="italic text-slate-300">"{generatedMessage}"</p>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 shrink-0 transition-colors"
                  title="Copiar texto"
                  aria-label="Copiar mensagem"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Envia diretamente para <strong>{WHATSAPP_PHONE_NUMBER}</strong></span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 rounded-xl shadow-lg shadow-amber-950/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <Send className="w-4 h-4" />
                  <span>Iniciar Conversa com Esta Mensagem</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
