export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  painSolved: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface ModalInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyAspects: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const WHATSAPP_PHONE_NUMBER = '+55 11 98949-5151';
export const WHATSAPP_RAW_PHONE = '5511989495151';
export const WHATSAPP_DEFAULT_URL = `https://wa.me/${WHATSAPP_RAW_PHONE}?text=${encodeURIComponent(
  'Olá! Quero saber mais sobre os serviços da FELJ Consultoria'
)}`;

export function getCustomWhatsAppUrl(customMessage: string): string {
  return `https://wa.me/${WHATSAPP_RAW_PHONE}?text=${encodeURIComponent(customMessage)}`;
}
