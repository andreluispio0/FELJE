import React from 'react';
import {
  Shield,
  Zap,
  Eye,
  HeartHandshake,
  Award,
  Compass,
  PhoneCall,
  CheckCircle,
} from 'lucide-react';
import { WHATSAPP_DEFAULT_URL } from '../types';

export const CredibilitySection: React.FC = () => {
  const values = [
    {
      title: 'Segurança',
      description: 'Blindagem jurídica e contratual em cada cláusula de averbação e estipulação.',
      icon: Shield,
    },
    {
      title: 'Eficiência',
      description: 'Respostas e cotações técnicas no tempo ágil que operações de logística exigem.',
      icon: Zap,
    },
    {
      title: 'Clareza',
      description: 'Termos transparentes, sem letras miúdas ou custos ocultos para o corretor e cliente.',
      icon: Eye,
    },
    {
      title: 'Relacionamento',
      description: 'Parcerias duradouras construídas com confiança mútua e respeito de longo prazo.',
      icon: HeartHandshake,
    },
    {
      title: 'Credibilidade',
      description: 'Atuação ética reconhecida no mercado de transportes e seguradoras desde 2021.',
      icon: Award,
    },
    {
      title: 'Excelência Técnica',
      description: 'Engenharia de risco aprofundada por modal, rota, mercadoria e gerenciamento de risco.',
      icon: Compass,
    },
    {
      title: 'Atendimento Próximo',
      description: 'Contato direto com especialistas seniores, sem atendentes robotizados ou desinformados.',
      icon: PhoneCall,
    },
  ];

  const pillars = [
    {
      label: 'Fundação',
      value: '2021',
      context: 'Empresa privada nacional especializada exclusivamente em seguros corporativos de carga.',
    },
    {
      label: 'Estrutura Boutique',
      value: '2 a 10',
      context: 'Corpo técnico enxuto e sênior. Sua demanda é tratada por quem toma decisões.',
    },
    {
      label: 'Modelo B2B2B',
      value: '100% Parceiro',
      context: 'Sem carteira direta de embarcadores. Atuamos como retaguarda do corretor de seguros.',
    },
    {
      label: 'Cobertura',
      value: '4 Modais',
      context: 'Rodoviário, Aéreo, Marítimo e Ferroviário em operações nacionais e internacionais.',
    },
  ];

  return (
    <section id="credibilidade" className="py-20 md:py-28 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-3">
            Histórico & Compromisso
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight text-balance">
            Credibilidade construída pela clareza técnica e transparência do modelo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Desde 2021, a FELJ Consultoria atua com uma premissa clara: a credibilidade no seguro de carga
            não se constrói com promessas comerciais vazias, mas com rigor técnico na elaboração da apólice
            e lealdade irrestrita aos nossos parceiros corretores e seguradoras.
          </p>
        </div>

        {/* Quantified Rigor Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block mb-2">
                  {pillar.label}
                </span>
                <span className="text-3xl font-extrabold text-amber-400 tracking-tight font-mono">
                  {pillar.value}
                </span>
              </div>
              <p className="mt-4 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                {pillar.context}
              </p>
            </div>
          ))}
        </div>

        {/* Values Matrix */}
        <div className="mt-16">
          <div className="mb-8">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Nossos 7 Pilares de Valor
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Os princípios que guiam cada análise de risco na FELJ
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-white">{v.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}

            {/* Model Transparency Card */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-amber-950/30 to-slate-900 border border-amber-600/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-1 uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4" />
                  <span>Transparência B2B2B</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">
                  Proteção Mútua de Negócios
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tratamos as informações da sua corretora e de seus segurados com estrito sigilo comercial.
                </p>
              </div>
              <a
                href={WHATSAPP_DEFAULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
              >
                <span>Conhecer nossos sócios</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
