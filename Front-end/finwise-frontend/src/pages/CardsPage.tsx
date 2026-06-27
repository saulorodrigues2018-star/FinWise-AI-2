import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function CardsPage() {
  const { user } = useAuth()

  return (
    <main className="page-shell">
      <div className="page-grid">
        <section className="card">
          <div className="card-header">
            <h1>Meus Cartões</h1>
            <p>Gerencie seus cartões de crédito</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <article className="panel" style={{ padding: '2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px', color: 'white' }}>
              <h3 style={{ color: 'white', marginBottom: '1rem' }}>Cartão Principal</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>•••• •••• •••• 4242</p>
              <p style={{ marginTop: '0.5rem', opacity: 0.9 }}>Limite: R$ 5.000,00</p>
              <p style={{ opacity: 0.9 }}>Vencimento: 15/12/2026</p>
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
