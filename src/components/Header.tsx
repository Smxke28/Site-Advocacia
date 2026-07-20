import React from 'react';
import { Scale, Users, FileText, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onOpenLeadForm: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLeadForm }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-zinc-950/90 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-amber-500 p-2 rounded-lg">
              <Scale className="h-6 w-6 text-zinc-950" />
            </div>
            <span className="font-serif text-xl font-bold text-white tracking-wide">
              Lex<span className="text-amber-500">Agendar</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#atuacao" className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors">
              Áreas de Atuação
            </a>
            <a href="#sobre" className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors">
              Sobre Nós
            </a>
            <Link to="/admin" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
              <Users className="h-4 w-4" /> CRM Admin
            </Link>
            <button
              onClick={onOpenLeadForm}
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-5 py-2.5 rounded-md font-bold transition-all shadow-lg shadow-amber-900/20"
            >
              Consulta Inicial Gratuita
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
