import React from 'react';
import { Scale, Users, FileText, LogOut } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const AdminLayout: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-zinc-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 text-zinc-300 flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="bg-amber-500 p-1.5 rounded-md">
              <Scale className="h-5 w-5 text-zinc-900" />
            </div>
            <span className="font-serif text-lg font-bold text-white tracking-wide">
              Lex<span className="text-amber-500">Admin</span>
            </span>
          </div>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2">
          <Link
            to="/admin"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive('/admin') ? 'bg-amber-500/10 text-amber-400 font-medium' : 'hover:bg-zinc-800 hover:text-white'
            }`}
          >
            <Users className="h-5 w-5" />
            CRM (Leads)
          </Link>
          <Link
            to="/admin/cases"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive('/admin/cases') ? 'bg-amber-500/10 text-amber-400 font-medium' : 'hover:bg-zinc-800 hover:text-white'
            }`}
          >
            <FileText className="h-5 w-5" />
            Gestão de Casos
          </Link>
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-800 hover:text-white transition-colors"
          >
            <LogOut className="h-5 w-5" />
            Sair
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white border-b border-zinc-200 flex items-center px-8 shadow-sm">
          <h1 className="text-xl font-serif font-bold text-zinc-800">
            {isActive('/admin') ? 'Funil de Captação' : 'Casos Ativos'}
          </h1>
        </header>
        <div className="flex-1 overflow-auto p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
