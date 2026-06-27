import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function RegisterPage() {
  const { register: registerUser } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError('')
    try {
      await registerUser(name, email, password)
      navigate('/login')
    } catch (err) {
      setError('Não foi possível cadastrar. Verifique os dados e tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="page-shell">
      <section className="card auth-card">
        <div className="card-header">
          <h1>Registrar</h1>
          <p>Crie sua conta FinWise e comece a usar o painel financeiro.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="field">
            <span>Nome</span>
            <input type="text" value={name} onChange={e => setName(e.target.value)} required />
          </label>
          <label className="field">
            <span>Email</span>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </label>
          <label className="field">
            <span>Senha</span>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} />
          </label>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="button" disabled={loading}>
            {loading ? 'Registrando...' : 'Registrar'}
          </button>
        </form>
        <p className="caption">
          Já tem conta? <Link to="/login">Faça login</Link>
        </p>
      </section>
    </main>
  )
}
