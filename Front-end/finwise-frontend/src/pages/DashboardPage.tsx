import { useAuth } from '../contexts/AuthContext'

export default function DashboardPage() {
  const { user, logout } = useAuth()

  return (
    <main className="page-shell">
      <section className="card dashboard-card">
        <div className="card-header">
          <h1>Bem-vindo, {user?.name ?? 'usuário'}</h1>
          <p>Este é o painel principal da FinWise AI.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <article className="panel">
            <h2>Perfil</h2>
            <p>{user?.email}</p>
            <p>Função: {user?.role}</p>
          </article>
          <article className="panel">
            <h2>Conta</h2>
            <p>ID: {user?.id}</p>
            <p>Criado em: {new Date(user?.createdAt ?? '').toLocaleDateString()}</p>
          </article>
        </div>
        <button className="button secondary" onClick={logout}>
          Sair
        </button>
      </section>
    </main>
  )
}
