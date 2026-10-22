import React from 'react';
import {
  Users,
  Shield,
  Zap,
  Check,
  X,
  MessageCircle,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { WHATSAPP_DEFAULT_URL, getCustomWhatsAppUrl } from '../types';

export const DifferentiationSection: React.FC = () => {
  const comparisons = [
    {
      category: 'Grandes Corretoras Globais (ex: Marsh, Aon) & Seguradoras Tradicionais',
      theirs: 'Camadas burocráticas infinitas, atendimento delegado a equipes juniores e lentidão de dias para retornar uma alteração de clausulado.',
      felj: 'Atendimento sênior direto com especialistas fundadores. Sem intermediários, sem tickets infinitos, com resolução técnica no mesmo dia.',
      badge: 'Agilidade & Proximidade',
    },
    {
      category: 'Plataformas Genéricas de Cotação Multirramo',
      theirs: 'O seguro de transporte é tratado como "mais uma aba" entre 15 ramos diferentes, gerando propostas padronizadas cheias de exclusões.',
      felj: 'Especialização estrita e profunda em cargas e transportes. Conhecemos a realidade do asfalto, do porto e da pista de pouso.',
      badge: 'Especialização de Nicho',
    },
    {
      category: 'Insurtechs Focadas Apenas em Automação Rasa',
      theirs: 'Cotação instantânea baseada em algoritmos superficiais, sem análise real de rota, sinistralidade ou gerenciamento de risco (PGR).',
      felj: 'Engenharia de risco humana e qualificada. Apólices personalizadas com garantias sólidas e liquidação garantida em caso de sinistro.',
      badge: 'Consultoria de Verdade',
    },
    {
      category: 'Concorrência com a Carteira do Corretor',
      theirs: 'Muitos assessores e plataformas concorrem diretamente pelo cliente final do corretor, criando insegurança comercial.',
      felj: 'Modelo 100% B2B2B. Não atendemos embarcador final. Blindamos a carteira do corretor parceiro com ética e sigilo inegociáveis.',
      badge: 'Aliança B2B2B Ética',
    },
  ];

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-3">
            Diferenciação Competitiva
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight text-balance">
            Por que a FELJ Consultoria, e não os grandes do mercado?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            O mercado de seguros de carga não precisa de mais burocracia ou formulários automáticos genéricos.
            Precisa de precisão técnica, proximidade humana e fidelidade à parceria B2B2B.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800/90 flex flex-col justify-between hover:border-slate-700 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold text-amber-400 px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 rounded-md">
                    {item.badge}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">0{index + 1} / 04</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-6">
                  {item.category}
                </h3>

                {/* Others vs FELJ */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/30">
                    <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 mb-1.5">
                      <X className="w-4 h-4 shrink-0" />
                      <span>Como o mercado convencional atua:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.theirs}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-600/30">
                    <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1.5">
                      <Check className="w-4 h-4 shrink-0" />
                      <span>Como a FELJ Consultoria entrega:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                      {item.felj}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Transparência total desde 2021
                </span>
                <a
                  href={getCustomWhatsAppUrl(
                    `Olá! Gostaria de entender mais sobre o diferencial da FELJ em ${item.badge}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                >
                  <span>Saber mais</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive B2B2B Commitment Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-700/80 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
              <Shield className="w-4 h-4" />
              <span>Garantia de Não-Concorrência</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              O corretor é nosso parceiro, nunca nosso concorrente.
            </h4>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Trabalhamos nos bastidores para que você tenha a melhor proposta técnica na mesa do seu segurado,
              com condições comerciais competitivas e suporte total até a regulação do sinistro.
            </p>
          </div>

          <a
            href={WHATSAPP_DEFAULT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-amber-600 hover:bg-amber-500 rounded-xl transition-all shadow-md shrink-0 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com Nossos Sócios no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
