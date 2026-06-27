# FinWise AI

## Como rodar o projeto

### Backend

1. Acesse a pasta do backend:

```bash
cd Back-end/finwise-api
```

2. Inicie os serviços necessários via Docker Compose:

```bash
docker compose up -d
```

3. Verifique se o backend está em execução:

```bash
docker compose logs api --tail 50
```

4. A API estará disponível em `http://localhost:8080`.

### Frontend

1. Acesse a pasta do frontend:

```bash
cd Front-end/finwise-frontend
```

2. Instale dependências e rode o Vite:

```bash
npm install
npm run dev
```

3. O frontend estará disponível em `http://localhost:5173`.

### Observações

- O backend usa PostgreSQL e Redis via Docker Compose.
- Se estiver rodando o backend localmente sem Docker, configure as variáveis de ambiente `SPRING_DATASOURCE_URL`, `SPRING_REDIS_HOST` e `SPRING_REDIS_PORT`.
- A rota de documentação OpenAPI está disponível em `http://localhost:8080/swagger-ui.html`.
