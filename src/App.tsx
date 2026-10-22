import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { DifferentiationSection } from './components/DifferentiationSection';
import { CredibilitySection } from './components/CredibilitySection';
import { InteractiveDemandSimulator } from './components/InteractiveDemandSimulator';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top Bar Navigation */}
      <Header />

      {/* Main Content Stream */}
      <main className="flex-1">
        {/* 1. Hero Section with Mosaico de Modais and Above-the-fold CTA */}
        <Hero />

        {/* 2. O Problema: The Real Pains of Brokers and Insurers in Cargo */}
        <ProblemSection />

        {/* 3. A Solução: The 5 FELJ Services as Direct Answers */}
        <SolutionSection />

        {/* 4. Por que a FELJ, e não os grandes: Competitive Differentiation */}
        <DifferentiationSection />

        {/* 5. Credibilidade Institucional: 2021 Foundation, Values, and Transparency */}
        <CredibilitySection />

        {/* 6. Interactive WhatsApp Demand Generator */}
        <InteractiveDemandSimulator />

        {/* 7. FAQ (Tratamento de Objeções) */}
        <FaqSection />

        {/* 8. Final Conversion CTA */}
        <FinalCta />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
