# FINWISE AI - FRONTEND PRODUCTION ENGINE (ULTRA DETAILED UI)

Você é um time de engenharia frontend sênior responsável por construir o FinWise AI como um produto fintech real.

---

# REGRA ABSOLUTA

- NÃO criar novo projeto React
- USAR o projeto existente em:
  /workspaces/FinWise-AI-2/Front-end/finwise-frontend

Se algo não existir:
→ CRIAR

Se algo estiver incompleto:
→ FINALIZAR

---

# STACK OBRIGATÓRIA

React + TypeScript + Vite  
Tailwind + Shadcn UI  
React Router  
React Query  
Axios  
Recharts  
Framer Motion  
React Hook Form + Zod  

---

# OBJETIVO

Construir um sistema financeiro real com UX nível:

- Nubank
- Revolut
- Wise

---

# 🧠 ARQUITETURA FRONTEND OBRIGATÓRIA

/src
  /pages
  /components
  /layouts
  /services
  /hooks
  /routes
  /utils
  /types
  /context

---

# 🔐 1. AUTH MODULE (ULTRA DETALHADO)

## LOGIN PAGE

### UI
- Card centralizado
- Logo FinWise AI
- Background escuro com gradiente suave
- Inputs:
  - email
  - password

### Features
- validação com Zod
- botão loading state
- erro inline
- opção "remember me"
- botão OAuth:
  - Google
  - GitHub

### Fluxo
Login → salvar JWT → redirecionar Dashboard

---

## REGISTER PAGE

### Campos:
- nome
- email
- senha
- confirmação senha

### Regras:
- senha forte (mín 8 chars)
- validação em tempo real
- feedback visual

---

## FORGOT PASSWORD

- input email
- botão enviar
- mensagem de confirmação

---

# 📊 2. DASHBOARD (CENTRO DO SISTEMA)

## OBJETIVO

Mostrar visão financeira COMPLETA do usuário.

---

## COMPONENTES

### HEADER
- saudação (ex: “Olá, João”)
- avatar usuário
- notificações
- toggle dark mode

---

### CARDS PRINCIPAIS

1. SALDO TOTAL
2. RECEITAS DO MÊS
3. DESPESAS DO MÊS
4. INVESTIMENTOS

Cada card:
- valor grande
- variação percentual
- ícone
- cor (verde/vermelho)

---

### GRÁFICOS

- Line chart: evolução mensal
- Bar chart: receitas vs despesas
- Pie chart: categorias

---

### SEÇÃO IA INSIGHTS

Card especial:

“Seu comportamento financeiro”

Exibir:
- gasto excessivo detectado
- sugestão de economia
- previsão do mês

---

### LISTA RÁPIDA

- últimas transações
- últimas metas
- alertas

---

# 🏦 3. ACCOUNTS (CONTAS BANCÁRIAS)

## FUNÇÃO

Gerenciar contas do usuário.

---

## LISTAGEM

Cards com:

- nome banco (Nubank, Itaú etc)
- saldo
- tipo (corrente/poupança)
- número mascarado

---

## AÇÕES

- adicionar conta
- editar conta
- remover conta

---

## MODAL DE CRIAÇÃO

Campos:
- nome banco
- saldo inicial
- tipo conta
- cor personalizada
- ícone

---

# 💳 4. CARDS (CARTÕES)

## UI estilo cartão real (3D visual)

Cada cartão mostra:

- bandeira (Visa/Mastercard/Nubank)
- limite
- valor usado
- fechamento
- vencimento

---

## FUNCIONALIDADES

- criar cartão
- bloquear cartão
- definir limite
- ver fatura

---

# 💰 5. TRANSACTIONS (CENTRAL FINANCEIRA)

## LISTAGEM

Tabela avançada com:

- descrição
- valor
- categoria
- tipo (receita/despesa)
- data
- conta vinculada

---

## FILTROS

- por data
- por categoria
- por valor
- por tipo

---

## AÇÕES

- adicionar transação
- editar
- deletar
- exportar CSV

---

## FORMULÁRIO

Campos:

- descrição
- valor
- tipo
- categoria
- conta
- data

---

# 🎯 6. GOALS (METAS)

## VISUAL

Cards com progress bar animada

---

## DADOS

- meta: R$ 10.000
- atual: R$ 4.200
- progresso %

---

## FUNCIONALIDADES

- criar meta
- editar meta
- deletar meta
- projeção IA

---

## IA INSIGHT

“Você atingirá essa meta em 4 meses mantendo esse ritmo”

---

# 📈 7. INVESTMENTS

## TIPOS

- CDB
- LCI/LCA
- Ações
- FIIs
- Cripto

---

## UI

Cards com:

- valor investido
- rendimento
- lucro/prejuízo
- gráfico mini sparkline

---

# 🤖 8. AI ASSISTANT (DIFERENCIAL PRINCIPAL)

## CHAT UI

- estilo ChatGPT
- mensagens em bolhas
- histórico persistente

---

## PERGUNTAS SUPORTADAS

- quanto estou gastando?
- posso economizar quanto?
- análise do mês
- previsão financeira
- onde gasto mais?

---

## RESPOSTA DA IA

Pode conter:

- texto explicativo
- gráficos Recharts
- insights automáticos
- alertas financeiros

---

# 📊 9. REPORTS

## FUNCIONALIDADES

- export PDF
- export CSV
- export Excel

---

## CONTEÚDO

- resumo mensal
- gráfico completo
- histórico
- evolução patrimonial

---

# 🔔 10. NOTIFICATIONS

## TIPOS

- saldo baixo
- meta atingida
- gasto alto
- conta vencendo

---

## UI

- dropdown estilo sino
- badge de alerta
- leitura/desleitura

---

# ⚙️ 11. SETTINGS

- perfil usuário
- tema (dark/light)
- moeda
- idioma
- segurança

---

# 🔗 INTEGRAÇÃO FRONT ↔ BACK

## Axios obrigatório

- baseURL centralizada
- interceptor JWT
- refresh token automático
- tratamento de erro global

---

# 🎨 UI/UX OBRIGATÓRIO

- estilo fintech premium
- dark mode perfeito
- animações suaves (Framer Motion)
- responsivo mobile-first
- design consistente

---

# ❌ PROIBIÇÕES

- não criar páginas incompletas
- não usar mock permanente
- não ignorar integração com API
- não duplicar componentes
- não criar UI simples sem lógica

---

# 🏁 DEFINIÇÃO DE SUCESSO

Frontend só está pronto quando:

- todas as telas existem
- todas funcionam
- navegação perfeita
- API conectada
- login funcional
- dashboard com dados reais
- sistema utilizável como produto real