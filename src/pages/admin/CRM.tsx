import React, { useState, useEffect } from 'react';
import { Lead, LeadStatus } from '../../types';
import { getLeads, updateLeadStatus } from '../../lib/storage';
import { Phone, Mail, Clock } from 'lucide-react';

const STATUS_COLUMNS: { id: LeadStatus; label: string; color: string }[] = [
  { id: 'novo', label: 'Novos Leads', color: 'border-blue-500 bg-blue-50' },
  { id: 'contato', label: 'Em Contato', color: 'border-amber-500 bg-amber-50' },
  { id: 'proposta', label: 'Proposta Enviada', color: 'border-purple-500 bg-purple-50' },
  { id: 'cliente', label: 'Clientes', color: 'border-emerald-500 bg-emerald-50' }
];

export const CRM: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    setLeads(getLeads());
  }, []);

  const handleStatusChange = (id: string, newStatus: LeadStatus) => {
    updateLeadStatus(id, newStatus);
    setLeads(getLeads()); // refresh from localstorage
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex gap-6 overflow-x-auto h-full pb-4">
        {STATUS_COLUMNS.map(column => (
          <div key={column.id} className="flex flex-col w-80 shrink-0">
            <div className={`px-4 py-3 rounded-t-xl border-t-4 shadow-sm mb-4 font-semibold text-zinc-800 ${column.color}`}>
              {column.label}
              <span className="ml-2 text-xs font-normal text-zinc-500">
                ({leads.filter(l => l.status === column.id).length})
              </span>
            </div>
            
            <div className="flex-1 space-y-4">
              {leads.filter(l => l.status === column.id).map(lead => (
                <div key={lead.id} className="bg-white p-4 rounded-xl shadow-sm border border-zinc-200 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-zinc-800 mb-1">{lead.name}</h3>
                  <div className="text-sm text-amber-600 font-medium mb-3">{lead.practiceArea}</div>
                  
                  <div className="space-y-2 text-sm text-zinc-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-zinc-400" />
                      {lead.phone}
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-zinc-400" />
                      <span className="truncate">{lead.email}</span>
                    </div>
                  </div>

                  <div className="text-xs text-zinc-500 bg-zinc-50 p-2 rounded-lg mb-4 line-clamp-2">
                    {lead.notes || 'Sem observações.'}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between border-t border-zinc-100 pt-3">
                    <div className="flex items-center gap-1 text-xs text-zinc-400">
                      <Clock className="h-3 w-3" />
                      {new Date(lead.createdAt).toLocaleDateString('pt-BR')}
                    </div>
                    <select
                      className="text-xs border border-zinc-200 rounded-md py-1 px-2 bg-zinc-50 text-zinc-700 outline-none focus:border-amber-500"
                      value={lead.status}
                      onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                    >
                      <option value="novo">Mover para Novo</option>
                      <option value="contato">Mover para Contato</option>
                      <option value="proposta">Mover p/ Proposta</option>
                      <option value="cliente">Mover p/ Cliente</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
