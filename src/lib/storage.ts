import { Lead, LegalCase, LeadStatus } from '../types';

const LEADS_KEY = 'lex_leads';
const CASES_KEY = 'lex_cases';

const mockLeads: Lead[] = [
  { id: '1', name: 'Carlos Silva', phone: '(32) 99999-1111', email: 'carlos@email.com', practiceArea: 'Direito Trabalhista', notes: 'Dúvida sobre rescisão.', status: 'novo', createdAt: new Date(Date.now() - 86400000).toISOString() },
  { id: '2', name: 'Mariana Costa', phone: '(32) 98888-2222', email: 'mariana@email.com', practiceArea: 'Direito de Família', notes: 'Divórcio litigioso.', status: 'contato', createdAt: new Date(Date.now() - 172800000).toISOString() },
  { id: '3', name: 'Empresa XYZ', phone: '(32) 3232-3232', email: 'contato@xyz.com', practiceArea: 'Direito Empresarial', notes: 'Revisão de contratos.', status: 'cliente', createdAt: new Date(Date.now() - 259200000).toISOString() }
];

const mockCases: LegalCase[] = [
  { id: '1', clientId: '3', clientName: 'Empresa XYZ', title: 'Revisão Tributária', processNumber: '0001234-56.2024.8.13.0145', status: 'ativo', nextDate: '2024-05-20', nextAction: 'Audiência de Conciliação' }
];

export const getLeads = (): Lead[] => {
  const data = localStorage.getItem(LEADS_KEY);
  if (!data) {
    localStorage.setItem(LEADS_KEY, JSON.stringify(mockLeads));
    return mockLeads;
  }
  return JSON.parse(data);
};

export const saveLead = (lead: Omit<Lead, 'id' | 'createdAt' | 'status'>): void => {
  const leads = getLeads();
  const newLead: Lead = {
    ...lead,
    id: crypto.randomUUID(),
    status: 'novo',
    createdAt: new Date().toISOString()
  };
  leads.push(newLead);
  localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
};

export const updateLeadStatus = (id: string, status: LeadStatus): void => {
  const leads = getLeads();
  const index = leads.findIndex(l => l.id === id);
  if (index !== -1) {
    leads[index].status = status;
    localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
  }
};

export const getCases = (): LegalCase[] => {
  const data = localStorage.getItem(CASES_KEY);
  if (!data) {
    localStorage.setItem(CASES_KEY, JSON.stringify(mockCases));
    return mockCases;
  }
  return JSON.parse(data);
};
