import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function AccountsPage() {
  const { user } = useAuth()

  return (
    <main className="page-shell">
      <div className="page-grid">
        <section className="card">
          <div className="card-header">
            <h1>Minhas Contas</h1>
            <p>Gerencie suas contas bancárias</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <article className="panel">
              <h3>Conta Corrente</h3>
              <p>Saldo: R$ 2.500,00</p>
              <p className="text-sm text-muted">Banco ABC • ••••5432</p>
            </article>
            <article className="panel">
              <h3>Conta Poupança</h3>
              <p>Saldo: R$ 8.900,00</p>
              <p className="text-sm text-muted">Banco ABC • ••••9876</p>
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
