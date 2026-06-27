import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function TransactionsPage() {
  const { user } = useAuth()

  const transactions = [
    { id: 1, description: 'Salário', value: 5000, type: 'income', date: '27/06/2026' },
    { id: 2, description: 'Supermercado', value: -150.50, type: 'expense', date: '26/06/2026' },
    { id: 3, description: 'Streaming', value: -29.90, type: 'expense', date: '25/06/2026' },
    { id: 4, description: 'Freelance', value: 1200, type: 'income', date: '24/06/2026' },
  ]

  return (
    <main className="page-shell">
      <div className="page-grid">
        <section className="card">
          <div className="card-header">
            <h1>Transações</h1>
            <p>Histórico de movimentações</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.2)' }}>
                  <th style={{ textAlign: 'left', padding: '1rem', color: '#94a3b8' }}>Descrição</th>
                  <th style={{ textAlign: 'right', padding: '1rem', color: '#94a3b8' }}>Valor</th>
                  <th style={{ textAlign: 'left', padding: '1rem', color: '#94a3b8' }}>Data</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(t => (
                  <tr key={t.id} style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
                    <td style={{ padding: '1rem' }}>{t.description}</td>
                    <td style={{ textAlign: 'right', padding: '1rem', color: t.type === 'income' ? '#22c55e' : '#ef4444' }}>
                      {t.type === 'income' ? '+' : ''} R$ {Math.abs(t.value).toFixed(2)}
                    </td>
                    <td style={{ padding: '1rem' }}>{t.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/" className="button secondary" style={{ marginTop: '1rem' }}>
            Voltar ao painel
          </Link>
        </section>
      </div>
    </main>
  )
}
