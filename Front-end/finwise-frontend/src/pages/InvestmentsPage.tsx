import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function InvestmentsPage() {
  const { user } = useAuth()

  return (
    <main className="page-shell">
      <div className="page-grid">
        <section className="card">
          <div className="card-header">
            <h1>Investimentos</h1>
            <p>Acompanhe seus investimentos</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <article className="panel">
              <h3>CDB 100% do CDI</h3>
              <p>R$ 5.000,00</p>
              <p className="text-sm text-muted">Rendimento: +2.5%</p>
            </article>
            <article className="panel">
              <h3>Tesouro SELIC</h3>
              <p>R$ 3.200,00</p>
              <p className="text-sm text-muted">Rendimento: +1.8%</p>
            </article>
          </div>
          <Link to="/" className="button secondary" style={{ marginTop: '1rem' }}>
            Voltar ao painel
          </Link>
        </section>
      </div>
    </main>
  )
}
