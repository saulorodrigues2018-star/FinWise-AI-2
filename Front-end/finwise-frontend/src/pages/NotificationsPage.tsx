import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function NotificationsPage() {
  const { user } = useAuth()

  const notifications = [
    { id: 1, title: 'Saldo baixo', message: 'Seu saldo está abaixo de R$ 500', type: 'warning' },
    { id: 2, title: 'Meta atingida', message: 'Você atingiu sua meta de férias!', type: 'success' },
    { id: 3, title: 'Gasto alto', message: 'Gasto incomum detectado', type: 'info' },
  ]

  return (
    <main className="page-shell">
      <div className="page-grid">
        <section className="card">
          <div className="card-header">
            <h1>Notificações</h1>
            <p>Seus alertas financeiros</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {notifications.map(notif => (
              <article key={notif.id} className="panel">
                <h3>{notif.title}</h3>
                <p>{notif.message}</p>
              </article>
            ))}
          </div>
          <Link to="/" className="button secondary" style={{ marginTop: '1rem' }}>
            Voltar ao painel
          </Link>
        </section>
      </div>
    </main>
  )
}
