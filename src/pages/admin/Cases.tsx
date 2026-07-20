import React, { useState, useEffect } from 'react';
import { LegalCase } from '../../types';
import { getCases } from '../../lib/storage';
import { FileText, Calendar, ChevronRight } from 'lucide-react';

export const Cases: React.FC = () => {
  const [cases, setCases] = useState<LegalCase[]>([]);

  useEffect(() => {
    setCases(getCases());
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-zinc-600">
          <thead className="bg-zinc-50 text-zinc-800 font-semibold border-b border-zinc-200">
            <tr>
              <th className="px-6 py-4">Cliente / Processo</th>
              <th className="px-6 py-4">Assunto</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Próximo Passo</th>
              <th className="px-6 py-4 text-right">Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {cases.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-zinc-500">
                  Nenhum caso ativo encontrado.
                </td>
              </tr>
            ) : (
              cases.map((c) => (
                <tr key={c.id} className="hover:bg-zinc-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-zinc-800 mb-1">{c.clientName}</div>
                    <div className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                      <FileText className="h-3 w-3" />
                      {c.processNumber}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium">{c.title}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      c.status === 'ativo' ? 'bg-emerald-100 text-emerald-800' :
                      c.status === 'suspenso' ? 'bg-amber-100 text-amber-800' :
                      'bg-zinc-100 text-zinc-800'
                    }`}>
                      {c.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 mb-1 text-zinc-800 font-medium">
                      <Calendar className="h-4 w-4 text-amber-600" />
                      {new Date(c.nextDate).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="text-xs text-zinc-500">
                      {c.nextAction}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-amber-600 hover:text-amber-700 font-medium text-sm inline-flex items-center gap-1">
                      Detalhes
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
