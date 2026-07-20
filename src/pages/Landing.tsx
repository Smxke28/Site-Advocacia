import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { PracticeAreas } from '../components/PracticeAreas';
import { About } from '../components/About';
import { Footer } from '../components/Footer';
import { LeadFormModal } from '../components/LeadFormModal';

export const Landing: React.FC = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-amber-200">
      <Header onOpenLeadForm={() => setIsLeadFormOpen(true)} />
      
      <main>
        <Hero onOpenLeadForm={() => setIsLeadFormOpen(true)} />
        <PracticeAreas />
        <About />
      </main>

      <Footer />

      <LeadFormModal 
        isOpen={isLeadFormOpen} 
        onClose={() => setIsLeadFormOpen(false)} 
      />
    </div>
  );
};
