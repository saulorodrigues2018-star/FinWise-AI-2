import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function SettingsPage() {
  const { user, logout } = useAuth()

  return (
    <main className="page-shell">
      <div className="page-grid">
        <section className="card">
          <div className="card-header">
            <h1>Configurações</h1>
            <p>Personalize sua experiência</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <article className="panel">
              <h3>Perfil</h3>
              <p>Nome: {user?.name}</p>
              <p>Email: {user?.email}</p>
              <p>Role: {user?.role}</p>
            </article>
            <article className="panel">
              <h3>Preferências</h3>
              <p>Tema: Escuro</p>
              <p>Moeda: Real (R$)</p>
              <p>Idioma: Português</p>
            </article>
            <article className="panel">
              <h3>Segurança</h3>
              <button className="button secondary" style={{ marginBottom: '0.5rem', width: '100%' }}>
                Alterar Senha
              </button>
              <button onClick={logout} className="button secondary" style={{ width: '100%', backgroundColor: '#ef4444' }}>
                Sair
              </button>
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
