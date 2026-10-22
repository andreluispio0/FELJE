import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_DEFAULT_URL, WHATSAPP_PHONE_NUMBER, FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'O que é seguro de carga?',
      answer:
        'O seguro de carga é a garantia indenizatória contra perdas, extravios, roubos e avarias ocorridos durante o transporte de mercadorias. Ele se divide essencialmente em duas categorias: o Seguro de Transporte do Embarcador (proprietário da carga, que cobre o valor integral das mercadorias) e o Seguro de Responsabilidade Civil do Transportador (como RCTR-C para acidentes e RC-DC para roubo/desaparecimento da carga). Ambas as modalidades contam com regulamentações específicas e exigem clausulados adequados para assegurar a indenização integral sem surpresas.',
      category: 'Conceito & Coberturas',
    },
    {
      question: 'Quais modais de transporte são cobertos pela FELJ Consultoria?',
      answer:
        'Cobrimos todos os 4 modais de transporte, tanto em âmbito nacional quanto internacional: Rodoviário (caminhões, carretas e frotas dedicadas), Aéreo (cargueiros e compartimentos de carga de voos comerciais, respeitando convenções internacionais), Marítimo (cabotagem costeira, importação e exportação de longo curso, com coberturas de avaria grossa) e Ferroviário (transporte de commodities, granéis e contêineres sobre trilhos), além de operações multimodais integradas.',
      category: 'Modais & Abrangência',
    },
    {
      question: 'A FELJ atende diretamente o cliente final / embarcador?',
      answer:
        'Não. A FELJ Consultoria opera sob o modelo estrito B2B2B. Nós não atendemos o consumidor ou embarcador final diretamente. Nossa atuação é 100% voltada a atuar como parceira técnica de Corretores de Seguros e Seguradoras. Respeitamos, preservamos e blindamos integralmente a carteira de clientes do corretor parceiro, jamais concorrendo com ele no mercado.',
      category: 'Modelo de Negócio B2B2B',
    },
    {
      question: 'Como funciona o suporte técnico a corretores na prática?',
      answer:
        'Atuamos como a equipe técnica de transportes da sua corretora: analisamos o perfil da carga do seu cliente, auditamos as exigências de Gerenciamento de Risco (PGR), redigimos as especificações de clausulado, cotamos e defendemos a operação perante as mesas de subscrição das principais seguradoras e prestamos consultoria técnica contínua em caso de sinistro ou alterações contratuais.',
      category: 'Parceria com Corretores',
    },
    {
      question: 'Como iniciar uma conversa com a equipe da FELJ Consultoria?',
      answer:
        `O canal mais rápido e direto é o nosso WhatsApp oficial: ${WHATSAPP_PHONE_NUMBER}. Você será atendido diretamente por profissionais seniores que compreendem a linguagem técnica do setor, prontos para receber o perfil da sua operação, analisar termos de apólice ou agendar uma reunião de alinhamento técnico sem compromisso inicial.`,
      category: 'Contato & Início',
    },
    {
      question: 'Existe custo ou mensalidade para o corretor consultar a FELJ?',
      answer:
        'Não há cobrança de mensalidades ou taxas de consulta inicial para corretores parceiros. A FELJ atua em modelo de co-corretagem técnica ou assessoria compartilhada vinculada ao êxito e fechamento da operação, tornando a parceria viável e altamente lucrativa para o corretor desde o primeiro dia.',
      category: 'Condições Comerciais',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-900/50 border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-3">
            Perguntas Frequentes
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Esclareça dúvidas e objeções técnicas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Respostas claras sobre nosso modelo de atuação B2B2B, coberturas de transportes e parcerias com corretores.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-slate-950 border-amber-500/50 shadow-md'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-amber-400 font-semibold shrink-0">
                      0{index + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white text-balance">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400' : 'text-slate-400'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80">
                    <p className="mt-2">{faq.answer}</p>
                    {index === 4 && (
                      <div className="mt-4">
                        <a
                          href={WHATSAPP_DEFAULT_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Clique aqui para abrir conversa direta no WhatsApp ({WHATSAPP_PHONE_NUMBER})</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-10 p-5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs text-slate-300">
            Não encontrou a resposta para seu caso específico? Fale agora mesmo com nossa equipe técnica.
          </div>
          <a
            href={WHATSAPP_DEFAULT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg whitespace-nowrap transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
