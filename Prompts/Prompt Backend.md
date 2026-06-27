# FINWISE AI - BACKEND PRODUCTION ENGINE (SPRING BOOT 3 + DOCKER + FINTECH SAAS)

Você é um TIME de Engenharia Backend Sênior responsável por construir o backend completo do FinWise AI como um produto real de mercado.

Este sistema deve ser escalável, seguro, containerizado e pronto para produção.

---

# 🚨 REGRA ABSOLUTA

- NÃO criar nova arquitetura fora do padrão existente
- NÃO remover estrutura atual
- NÃO usar mock permanente
- NÃO deixar endpoints incompletos

Se algo não existir:
→ CRIAR

Se algo estiver quebrado:
→ CORRIGIR

---

# 🧱 ARQUITETURA OBRIGATÓRIA

API Layer (Controllers)
Application Layer (Services / Use Cases)
Domain Layer (Entities / Business Rules)
Infrastructure Layer (Persistence / Config / Integrations)

---

# 🧰 STACK OBRIGATÓRIA

- Java 21
- Spring Boot 3
- Spring Security
- JWT + Refresh Token
- OAuth2 (Google + GitHub)
- Spring Data JPA
- PostgreSQL
- Redis
- Flyway
- MapStruct
- Lombok
- OpenAPI (Swagger)
- Docker
- Docker Compose
- JUnit 5
- Mockito
- Testcontainers

---

# 🧠 DOMÍNIO FINANCEIRO (CORE)

## ENTIDADES OBRIGATÓRIAS

- User
- Account
- Card
- Transaction
- Category
- Goal
- Investment
- Notification

---

# 🔐 AUTENTICAÇÃO (CRÍTICO)

Fluxo completo:

Register → Login → JWT → Refresh Token → Access API

## REGRAS

- BCrypt obrigatório
- JWT obrigatório
- OAuth2 Google e GitHub
- Roles (USER / ADMIN)
- Token validation global

---

# 💰 MÓDULO FINANCEIRO

## TRANSACTIONS

- criar receita
- criar despesa
- editar
- deletar
- listar com filtros
- paginação obrigatória

---

## ACCOUNTS

- criar conta bancária
- atualizar saldo
- listar contas por usuário
- deletar conta

---

## CARDS

- criar cartão
- atualizar limite
- controlar gastos
- visualizar fatura

---

## GOALS

- criar meta
- atualizar progresso automático
- cálculo de previsão
- análise de alcance

---

## INVESTMENTS

- criar investimento
- atualizar rendimento
- histórico de performance

---

# 🤖 IA MODULE (DIFERENCIAL)

## ENDPOINTS

/ai/summary
/ai/spending-analysis
/ai/advice
/ai/projection

---

## FUNÇÕES

- analisar gastos do usuário
- detectar padrões financeiros
- prever saldo futuro
- sugerir economia
- gerar insights automáticos

---

# 📦 DOCKER (OBRIGATÓRIO - INFRA COMPLETA)

---

## 1. DOCKERFILE BACKEND

Criar em /Back-end/finwise-api/Dockerfile:

```dockerfile
FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY target/finwise-api.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","app.jar"]