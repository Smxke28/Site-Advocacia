# LexAgendar - Sistema Jurídico de Demonstração

Plataforma SaaS demonstrativa voltada para escritórios de advocacia, integrando uma Landing Page focada em conversão (captação de leads) e um painel de CRM administrativo simples para acompanhamento do funil de vendas e status processual.

## Funcionalidades

- **Landing Page Profissional:** Apresentação das áreas de atuação, histórico do escritório e diferenciais de atendimento.
- **Formulário de Captação (Lead Generation):** Ferramenta integrada de "Consulta Inicial Gratuita" para prospectar novos clientes, otimizando o fluxo de aquisição.
- **Painel Administrativo (CRM):**
  - **Gestão de Leads:** Kanban simples acompanhando o status de cada lead (Novo, Em Contato, Proposta Enviada, Cliente).
  - **Gestão de Processos:** Visão geral de casos ativos, permitindo o acompanhamento do andamento processual, datas de audiências e próximos passos.

## Tecnologias e Stack

- **React 19**
- **Vite**
- **TypeScript**
- **Tailwind CSS v4** (utilitários de estilo e tema customizado)
- **Lucide React** (ícones de interface)
- **React Router v7** (navegação)
- **Framer Motion** (animações e transições)

*Nota: Os dados inseridos no sistema são persistidos no `localStorage` do navegador para fins de demonstração, não necessitando de banco de dados para rodar a versão de testes.*

## Como executar localmente

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acesso:**
   Abra seu navegador em [http://localhost:3000](http://localhost:3000). A interface administrativa pode ser acessada na rota `/admin`.
