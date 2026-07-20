import React from 'react';
import { ArrowRight, ShieldCheck, Scale, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenLeadForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLeadForm }) => {
  return (
    <section className="relative bg-zinc-950 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-600 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-zinc-700 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-amber-500/30 text-sm font-medium text-amber-500 mb-6 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Juiz de Fora e Região
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Defesa especializada para os seus <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">direitos</span>.
            </h1>
            
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              Atendimento ágil, transparente e humanizado. Nossa equipe de especialistas está pronta para analisar o seu caso com a urgência que ele exige.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenLeadForm}
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-8 py-4 rounded-md font-bold transition-all shadow-lg shadow-amber-900/30 text-lg"
              >
                Solicitar Análise Gratuita
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-transparent rounded-2xl transform rotate-3 scale-105 blur-lg" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200" 
                alt="Escritório de Advocacia" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 font-serif flex items-center gap-2 text-amber-400">
                  <ShieldCheck className="h-5 w-5" />
                  Por que nos escolher?
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <div className="mt-0.5 bg-zinc-800 p-1.5 rounded-full border border-zinc-700 shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-100 text-sm">Atendimento Humanizado</h4>
                      <p className="text-zinc-400 text-xs mt-1">Tratamos seu caso com empatia e atenção.</p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="mt-0.5 bg-zinc-800 p-1.5 rounded-full border border-zinc-700 shrink-0">
                      <Scale className="h-4 w-4 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-100 text-sm">Especialistas em Juiz de Fora</h4>
                      <p className="text-zinc-400 text-xs mt-1">Sólida experiência nos tribunais locais.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
