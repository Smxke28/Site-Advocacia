import React from 'react';
import { Award, BookOpen, Scale } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-zinc-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Compromisso com a <span className="text-amber-500">Excelência Jurídica</span>
            </h2>
            <div className="w-20 h-1 bg-amber-500 mb-8" />
            
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Com sede em Juiz de Fora, a LexAgendar é composta por profissionais altamente qualificados, 
              focados em fornecer soluções jurídicas ágeis e estratégicas para pessoas físicas e empresas.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-10">
              Nossa abordagem une a solidez da advocacia tradicional com as mais modernas ferramentas de gestão, 
              garantindo que cada cliente tenha acompanhamento próximo e transparente em todas as etapas do processo.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="border-l-2 border-amber-500 pl-4">
                <div className="text-3xl font-bold text-white mb-1">+15 Anos</div>
                <div className="text-zinc-400 text-sm">de experiência nos tribunais</div>
              </div>
              <div className="border-l-2 border-amber-500 pl-4">
                <div className="text-3xl font-bold text-white mb-1">+2.500</div>
                <div className="text-zinc-400 text-sm">casos solucionados</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl">
              <Award className="h-10 w-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">Ética & Transparência</h3>
              <p className="text-zinc-400 text-sm">Atuação pautada pela honestidade em todas as avaliações de risco do seu caso.</p>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl sm:tranzinc-y-8">
              <BookOpen className="h-10 w-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">Especialização</h3>
              <p className="text-zinc-400 text-sm">Profissionais em constante atualização para garantir as melhores teses de defesa.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
