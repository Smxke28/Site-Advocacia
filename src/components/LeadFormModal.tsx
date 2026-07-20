import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { saveLead } from '../lib/storage';
import { Lead } from '../types';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState<Partial<Lead>>({
    practiceArea: 'Outros'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name || !formData.phone || !formData.email) {
      setErrorMsg('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    try {
      saveLead({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        practiceArea: formData.practiceArea || 'Outros',
        notes: formData.notes || ''
      });
      setIsSuccess(true);
    } catch (err) {
      setErrorMsg('Erro ao enviar solicitação. Tente novamente.');
    }
  };

  const resetAndClose = () => {
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ practiceArea: 'Outros' });
      setErrorMsg('');
    }, 300);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div className="px-6 py-4 border-b border-zinc-200 flex justify-between items-center bg-zinc-50">
          <h2 className="text-xl font-serif font-bold text-zinc-800">
            {isSuccess ? 'Solicitação Enviada' : 'Consulta Inicial Gratuita'}
          </h2>
          <button 
            onClick={resetAndClose}
            className="p-2 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-200 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1 bg-white">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="bg-amber-50 text-amber-900 border border-amber-200 p-4 rounded-xl mb-6 flex items-start gap-3 text-sm">
                  <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-amber-600" />
                  <p>
                    Preencha o formulário abaixo. Um advogado da nossa equipe analisará suas informações e entrará em contato em <strong>até 24 horas</strong>.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Nome Completo *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-zinc-400" />
                    </div>
                    <input
                      type="text"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-zinc-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="Ex: João da Silva"
                      value={formData.name || ''}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">WhatsApp (com DDD) *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-zinc-400" />
                    </div>
                    <input
                      type="tel"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-zinc-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="(32) 99999-9999"
                      value={formData.phone || ''}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">E-mail *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-zinc-400" />
                    </div>
                    <input
                      type="email"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-zinc-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="seu.email@exemplo.com"
                      value={formData.email || ''}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Área de Interesse</label>
                  <select
                    className="block w-full px-3 py-3 border border-zinc-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-white"
                    value={formData.practiceArea || 'Outros'}
                    onChange={e => setFormData({ ...formData, practiceArea: e.target.value })}
                  >
                    <option value="Direito Civil">Direito Civil</option>
                    <option value="Direito Trabalhista">Direito Trabalhista</option>
                    <option value="Direito de Família">Direito de Família</option>
                    <option value="Direito Empresarial">Direito Empresarial</option>
                    <option value="Direito do Consumidor">Direito do Consumidor</option>
                    <option value="Direito Previdenciário">Direito Previdenciário</option>
                    <option value="Outros">Outros / Não sei classificar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Resumo do Caso</label>
                  <textarea
                    rows={3}
                    className="block w-full p-3 border border-zinc-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Descreva brevemente sua situação (opcional)..."
                    value={formData.notes || ''}
                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                {errorMsg && (
                  <p className="text-red-500 text-sm font-medium">{errorMsg}</p>
                )}

                <div className="pt-4 mt-6 border-t border-zinc-100">
                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-950 px-6 py-4 rounded-xl font-bold transition-colors shadow-sm text-lg"
                  >
                    Enviar Solicitação
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-4">
                  Recebemos seus dados!
                </h3>
                <p className="text-zinc-600 mb-8 max-w-sm mx-auto">
                  Sua solicitação foi encaminhada para a nossa equipe. Em breve, um especialista entrará em contato através do número <strong>{formData.phone}</strong>.
                </p>

                <button
                  onClick={resetAndClose}
                  className="w-full bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-4 rounded-xl font-medium transition-colors"
                >
                  Entendi, fechar
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
