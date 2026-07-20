export type LeadStatus = 'novo' | 'contato' | 'proposta' | 'cliente';

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  practiceArea: string;
  notes: string;
  status: LeadStatus;
  createdAt: string;
}

export type CaseStatus = 'ativo' | 'suspenso' | 'encerrado';

export interface LegalCase {
  id: string;
  clientId: string;
  clientName: string;
  title: string;
  processNumber: string;
  status: CaseStatus;
  nextDate: string;
  nextAction: string;
}

export interface PracticeArea {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface TimeSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
}

export interface AppointmentData {
  practiceAreaId: string;
  date: string;
  time: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  notes: string;
}
