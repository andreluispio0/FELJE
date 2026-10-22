import React from 'react';
import {
  AlertTriangle,
  FileQuestion,
  Layers,
  Scale,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { WHATSAPP_DEFAULT_URL, getCustomWhatsAppUrl } from '../types';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    {
      title: 'Alta Complexidade Técnica por Modal',
      subtitle: 'Cada modalidade responde a normas e convenções jurídicas distintas',
      description:
        'Tratar transporte marítimo com clausulados de rodoviário, ou ignorar convenções internacionais como Montreal e Varsóvia no aéreo, cria buracos jurídicos fatais. Cada rota e mercadoria possui particularidades que exigem domínio cirúrgico de subscrição.',
      consequence: 'Risco de apólices com exclusões ocultas não percebidas na contratação.',
      icon: Layers,
    },
    {
      title: 'O Perigo da Cobertura Errada',
      subtitle: 'Uma cláusula negligenciada pode anular uma indenização milionária',
      description:
        'A responsabilidade civil do transportador (RCTR-C, RC-DC) e o seguro do embarcador possuem regras distintas de estipulação e averbação. Recomendar cobertura inadequada ou franquias desreguladas gera glosa no sinistro e abala a confiança do seu cliente.',
      consequence: 'Negativa de indenização pela seguradora e perda imediata da conta do cliente.',
      icon: AlertTriangle,
    },
    {
      title: 'Escassez de Suporte Especializado',
      subtitle: 'Corretoras e seguradoras generalistas não dominam o nicho de transportes',
      description:
        'O mercado de seguros trata transportes frequentemente como "mais um ramo". O corretor que busca cotar uma carga complexa enfrenta atendentes sem autonomia, dias de espera por respostas e falta de consultoria técnica para defender a operação junto às mesas de subscrição.',
      consequence: 'Lentidão comercial e propostas frágeis diante da concorrência.',
      icon: FileQuestion,
    },
    {
      title: 'Exigências de Gerenciamento de Risco (PGR) Inviáveis',
      subtitle: 'Travas operacionais que encarecem a operação ou regras impraticáveis',
      description:
        'Normas de PGR mal dimensionadas impõem escoltas armadas e rastreadores excessivos para cargas que não justificam tais custos — ou, no caminho oposto, relaxam requisitos essenciais, deixando a mercadoria desprotegida no momento crítico da perda.',
      consequence: 'Custos logísticos desnecessários ou invalidação da cobertura contratada.',
      icon: Scale,
    },
  ];

  return (
    <section id="problema" className="py-20 md:py-28 bg-slate-900/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-3">
            O Desafio Técnico do Mercado
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight text-balance">
            Por que o seguro de carga é uma das áreas mais arriscadas para corretores e seguradoras?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Diferente de ramos elementares padronizados, o transporte de mercadorias envolve logística dinâmica,
            legislação regulatória pesada e valores expressivos em constante movimento. Operar sem assessoria especializada custa caro.
          </p>
        </div>

        {/* The 4 Core Pains Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {painPoints.map((pain, index) => {
            const Icon = pain.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-slate-700 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      Dor Crítica 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                    {pain.title}
                  </h3>
                  <p className="text-xs font-medium text-amber-400/90 mb-3">
                    {pain.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pain.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-start gap-2 text-xs">
                  <span className="font-semibold text-rose-400 shrink-0">Impacto direto:</span>
                  <span className="text-slate-400">{pain.consequence}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition callout to Solution */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-slate-950 border border-amber-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Sua corretora precisa de suporte técnico para fechar ou defender uma apólice de carga?
            </h4>
            <p className="mt-1 text-sm text-slate-300">
              A FELJ Consultoria atua como parceira técnica de retaguarda, trazendo a segurança que sua operação necessita.
            </p>
          </div>

          <a
            href={getCustomWhatsAppUrl(
              'Olá! Gostaria de uma análise técnica para uma operação de seguro de carga.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-amber-600 hover:bg-amber-500 rounded-xl transition-colors whitespace-nowrap shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Consultar Caso com a FELJ</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
