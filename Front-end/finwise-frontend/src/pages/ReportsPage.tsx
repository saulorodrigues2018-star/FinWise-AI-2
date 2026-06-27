import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function ReportsPage() {
  const { user } = useAuth()

  return (
    <main className="page-shell">
      <div className="page-grid">
        <section className="card">
          <div className="card-header">
            <h1>Relatórios</h1>
            <p>Exporte seus dados financeiros</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <button className="button" style={{ textAlign: 'left' }}>📊 Exportar PDF - Resumo Mensal</button>
            <button className="button secondary" style={{ textAlign: 'left' }}>📋 Exportar CSV - Todas as Transações</button>
            <button className="button secondary" style={{ textAlign: 'left' }}>📈 Exportar Excel - Análise Completa</button>
          </div>
          <Link to="/" className="button secondary" style={{ marginTop: '1rem' }}>
            Voltar ao painel
          </Link>
        </section>
      </div>
    </main>
  )
}
