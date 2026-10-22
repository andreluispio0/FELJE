import React, { useState } from 'react';
import {
  Truck,
  ShieldCheck,
  Briefcase,
  Network,
  Sliders,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { WHATSAPP_DEFAULT_URL, getCustomWhatsAppUrl } from '../types';

export const SolutionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const services = [
    {
      id: 'transportes',
      number: '01',
      title: 'Seguros de Transportes em Todos os Modais',
      painSolved: 'Resolve a dispersão e a incerteza jurídica entre diferentes tipos de modalidade.',
      description:
        'Cobrimos e estruturamos operações em modais Rodoviário, Aéreo, Marítimo e Ferroviário — em rotas nacionais e internacionais. Cuidamos do enquadramento exato tanto na responsabilidade civil do transportador quanto no seguro de transporte do embarcador.',
      benefits: [
        'Transporte Rodoviário (RCTR-C, RC-DC, RCTR-VI)',
        'Transporte Aéreo Nacional e Internacional (RCTA-C e coberturas aduaneiras)',
        'Transporte Marítimo (Cabotagem, Longo Curso, Avaria Grossa e Carga Geral)',
        'Transporte Ferroviário integrado com malha logística',
      ],
      whatsappMsg: 'Olá! Gostaria de entender mais sobre a cobertura para seguros de transportes da FELJ Consultoria.',
      icon: Truck,
    },
    {
      id: 'riscos',
      number: '02',
      title: 'Gestão e Análise Técnica de Riscos',
      painSolved: 'Resolve o pagamento excessivo por travas ineficazes e o risco de glosa no sinistro.',
      description:
        'Avaliamos a matriz de risco real da operação: natureza da mercadoria, rotas geográficas, histórico de sinistralidade e métodos de movimentação. Ajustamos o Plano de Gerenciamento de Riscos (PGR) para garantir que a cobertura seja sólida sem inviabilizar os custos operacionais com rastreamento e escoltas desnecessárias.',
      benefits: [
        'Dimensionamento inteligente de regras de PGR e telemetria',
        'Eliminação de custos com exigências protocolares ineficazes',
        'Auditoria prévia de conformidade para evitar recusas em caso de sinistro',
        'Blindagem contratual para operações de alto valor agregado',
      ],
      whatsappMsg: 'Olá! Gostaria de apoio na gestão e análise de riscos (PGR) para uma operação de transporte.',
      icon: ShieldCheck,
    },
    {
      id: 'apoio-corretores',
      number: '03',
      title: 'Apoio Técnico Estratégico a Corretores',
      painSolved: 'Resolve a falta de braço técnico especializado na corretora e o medo de perder contas de carga.',
      description:
        'Atuamos como a equipe técnica de retaguarda da sua corretora de seguros. Auxiliamos na análise dos editais, formatação de propostas de valor, argumentação técnica perante clientes exigentes e defesa de termos específicos junto às seguradoras parceiras. Tudo com total proteção da sua carteira.',
      benefits: [
        'Assessoria na estruturação de apólices simples ou altamente complexas',
        'Defesa técnica de taxas e termos junto às mesas de subscrição',
        'Participação técnica conjunta em reuniões com clientes corporativos, se desejado',
        'Proteção ética e contratual: nunca concorremos com o corretor parceiro',
      ],
      whatsappMsg: 'Olá! Sou corretor de seguros e quero conhecer o suporte técnico da FELJ para minha carteira.',
      icon: Briefcase,
    },
    {
      id: 'seguradoras',
      number: '04',
      title: 'Integração Técnica com Seguradoras',
      painSolved: 'Resolve a dificuldade de encontrar apetite de risco adequado nas companhias tradicionais.',
      description:
        'Conectamos a operação às melhores opções do mercado segurador, mapeando quais companhias possuem o apetite, a capacidade de retenção e as condições de subscrição ideais para a rota ou tipo de mercadoria pretendida. A proposta chega na mesa do subscritor de forma redonda e tecnicamente embasada.',
      benefits: [
        'Relacionamento direto com mesas de subscrição especializadas em transportes',
        'Aceleração no tempo de resposta e emissão das apólices',
        'Negociação de limites máximos de garantia (LMG) mais flexíveis',
        'Alinhamento prévio das cláusulas de averbação e estipulação',
      ],
      whatsappMsg: 'Olá! Gostaria de saber como a FELJ atua na conexão e subscrição com seguradoras.',
      icon: Network,
    },
    {
      id: 'sob-medida',
      number: '05',
      title: 'Soluções Sob Medida por Carga e Rota',
      painSolved: 'Resolve apólices genéricas padronizadas que deixam lacunas na operação logística real.',
      description:
        'Nenhuma operação logística é idêntica a outra. Estruturamos programas de seguros sob medida levando em consideração especificidades da carga (perecíveis, químicos, maquinário pesado, eletrônicos, granéis), sazonalidades de safra ou picos de demanda e janelas logísticas críticas.',
      benefits: [
        'Clausulados específicos para mercadorias sensíveis ou de alto risco',
        'Flexibilidade para picos sazonais de volume sem perda de cobertura',
        'Apólices avulsas ou de faturamento anual com condições diferenciadas',
        'Soluções completas para operações multimodais porta a porta',
      ],
      whatsappMsg: 'Olá! Preciso estruturar uma solução sob medida para um tipo específico de carga.',
      icon: Sliders,
    },
  ];

  return (
    <section id="solucoes" className="py-20 md:py-28 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-3">
            A Solução Especializada
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight text-balance">
            Os 5 Serviços da FELJ Consultoria
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Cada serviço foi desenhado como resposta técnica direta às maiores dores enfrentadas por corretores e seguradoras no setor de transportes.
          </p>
        </div>

        {/* Desktop Tab Selector / Mobile Service List */}
        <div className="mt-12 hidden lg:flex items-center justify-between gap-2 p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800">
          {services.map((item, idx) => {
            const isCurrent = activeTab === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-semibold transition-all ${
                  isCurrent
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <span className="font-mono text-amber-300/80">{item.number}.</span>
                <span className="truncate">{item.title.split(' ')[0]} {item.title.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Service Card (Desktop Active View) */}
        <div className="mt-6 hidden lg:block">
          {(() => {
            const current = services[activeTab];
            const IconComponent = current.icon;
            return (
              <div className="p-8 lg:p-10 rounded-2xl bg-slate-900/70 border border-slate-800 relative overflow-hidden">
                <div className="flex items-start justify-between gap-6">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 text-xs font-mono font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-md">
                        Serviço {current.number}
                      </span>
                      <span className="text-xs text-slate-400">
                        Resposta Direta à Insegurança Operacional
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-white mb-2">
                      {current.title}
                    </h3>

                    <p className="text-sm font-medium text-amber-400 mb-4">
                      {current.painSolved}
                    </p>

                    <p className="text-base text-slate-300 leading-relaxed mb-6">
                      {current.description}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Diferenciais Técnicos Deste Serviço:
                      </span>
                      <div className="grid grid-cols-2 gap-3">
                        {current.benefits.map((b, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href={getCustomWhatsAppUrl(current.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-amber-600 hover:bg-amber-500 rounded-xl transition-colors shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Conversar Sobre {current.title.split(' ')[0]} {current.title.split(' ')[1]}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="hidden xl:flex items-center justify-center w-28 h-28 rounded-2xl bg-slate-950 border border-slate-800 text-amber-400 shrink-0">
                    <IconComponent className="w-14 h-14" />
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Mobile & Tablet Full Stack Service Cards */}
        <div className="mt-8 lg:hidden space-y-6">
          {services.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-amber-400 px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded">
                        {item.number}
                      </span>
                      <span className="text-xs text-slate-400">Serviço Especializado</span>
                    </div>
                    <IconComponent className="w-5 h-5 text-amber-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-amber-400 mb-3">
                    {item.painSolved}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {item.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={getCustomWhatsAppUrl(item.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-bold text-white bg-amber-600 hover:bg-amber-500 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar no WhatsApp</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
