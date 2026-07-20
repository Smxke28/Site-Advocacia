import React from 'react';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-amber-500 p-1.5 rounded-md">
                <Scale className="h-5 w-5 text-zinc-950" />
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-wide">
                Lex<span className="text-amber-500">Agendar</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Plataforma demonstrativa para gestão de leads e processos para escritórios de advocacia em Juiz de Fora.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-zinc-500 shrink-0" />
                <span>Av. Barão do Rio Branco, 1000 - Centro<br/>Juiz de Fora - MG</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-zinc-500 shrink-0" />
                <span>(32) 3000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-zinc-500 shrink-0" />
                <span>contato@lexagendar.demo</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Horário de Atendimento</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Segunda a Sexta</span>
                <span className="font-medium text-amber-500">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Sábados e Domingos</span>
                <span className="font-medium text-zinc-500">Fechado</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} LexAgendar. Todos os direitos reservados. Produto SaaS de Demonstração.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-500 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
