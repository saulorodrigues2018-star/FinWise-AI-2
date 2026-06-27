import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function GoalsPage() {
  const { user } = useAuth()

  const goals = [
    { id: 1, title: 'Férias em Dezembro', target: 5000, current: 2500, progress: 50 },
    { id: 2, title: 'Novo Notebook', target: 3000, current: 1200, progress: 40 },
    { id: 3, title: 'Fundo de Emergência', target: 10000, current: 7800, progress: 78 },
  ]

  return (
    <main className="page-shell">
      <div className="page-grid">
        <section className="card">
          <div className="card-header">
            <h1>Metas Financeiras</h1>
            <p>Acompanhe suas metas</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {goals.map(goal => (
              <article key={goal.id} className="panel">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3>{goal.title}</h3>
                  <span style={{ color: '#7c3aed', fontWeight: 'bold' }}>{goal.progress}%</span>
                </div>
                <div style={{ backgroundColor: 'rgba(124, 58, 237, 0.1)', height: '8px', borderRadius: '4px', marginBottom: '0.5rem', overflow: 'hidden' }}>
                  <div style={{ backgroundColor: '#7c3aed', height: '100%', width: `${goal.progress}%`, transition: 'width 0.3s ease' }} />
                </div>
                <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>R$ {goal.current.toFixed(2)} de R$ {goal.target.toFixed(2)}</p>
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
