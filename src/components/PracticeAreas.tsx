import React from 'react';
import { Briefcase, HeartHandshake, Building2, Scale, Users, FileText } from 'lucide-react';
import { PracticeArea } from '../types';

const defaultAreas: PracticeArea[] = [
  {
    id: 'civil',
    name: 'Direito Civil',
    description: 'Contratos, responsabilidade civil, posse e propriedade, obrigações.',
    iconName: 'Scale'
  },
  {
    id: 'trabalhista',
    name: 'Direito Trabalhista',
    description: 'Defesa de direitos do trabalhador, cálculos rescisórios, assédio.',
    iconName: 'Briefcase'
  },
  {
    id: 'familia',
    name: 'Direito de Família',
    description: 'Divórcios, pensão alimentícia, guarda, inventários e sucessões.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'empresarial',
    name: 'Direito Empresarial',
    description: 'Assessoria para empresas, contratos comerciais, fusões e aquisições.',
    iconName: 'Building2'
  },
  {
    id: 'consumidor',
    name: 'Direito do Consumidor',
    description: 'Práticas abusivas, falhas na prestação de serviços, indenizações.',
    iconName: 'Users'
  },
  {
    id: 'previdenciario',
    name: 'Direito Previdenciário',
    description: 'Aposentadorias, BPC/LOAS, auxílio-doença, revisões de benefícios.',
    iconName: 'FileText'
  }
];

const IconMap: Record<string, React.ElementType> = {
  Scale,
  Briefcase,
  HeartHandshake,
  Building2,
  Users,
  FileText
};

export const PracticeAreas: React.FC = () => {
  return (
    <section id="atuacao" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-4">Áreas de Atuação</h2>
          <p className="text-zinc-600 text-lg">
            Atendimento especializado nas principais áreas do direito para garantir a melhor defesa dos seus interesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {defaultAreas.map((area) => {
            const IconComponent = IconMap[area.iconName] || Scale;
            return (
              <div 
                key={area.id}
                className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{area.name}</h3>
                <p className="text-zinc-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
