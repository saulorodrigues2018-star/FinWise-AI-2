import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function ProfilePage() {
  const { user, logout } = useAuth()

  return (
    <main className="page-shell">
      <section className="card dashboard-card">
        <div className="card-header">
          <h1>Perfil</h1>
          <p>Detalhes da sua conta FinWise AI.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <article className="panel">
            <h2>Informações</h2>
            <p>Nome: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <p>Função: {user?.role}</p>
          </article>
          <article className="panel">
            <h2>Meta</h2>
            <p>ID: {user?.id}</p>
            <p>Criado em: {new Date(user?.createdAt ?? '').toLocaleDateString()}</p>
          </article>
        </div>
        <div className="flex gap-3 mt-6">
          <Link to="/" className="button secondary">
            Voltar ao painel
          </Link>
          <button className="button" onClick={logout}>
            Sair
          </button>
        </div>
      </section>
    </main>
  )
}
