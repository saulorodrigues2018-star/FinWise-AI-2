import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="page-shell">
      <section className="card auth-card">
        <div className="card-header">
          <h1>Página não encontrada</h1>
          <p>A página que você tentou acessar não existe.</p>
        </div>
        <Link to="/" className="button">
          Voltar para o painel
        </Link>
      </section>
    </main>
  )
}
