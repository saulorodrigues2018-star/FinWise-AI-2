import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <main className="page-shell">
      <section className="card auth-card">
        <div className="card-header">
          <h1>Recuperar Senha</h1>
          <p>Digite seu email para receber instruções de recuperação</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="seu@email.com"
            />
          </label>

          {sent && <div className="error-message" style={{ background: 'rgba(34, 197, 94, 0.12)', color: '#22c55e', border: '1px solid rgba(34, 197, 94, 0.18)' }}>
            ✓ Email de recuperação enviado com sucesso!
          </div>}

          <button type="submit" className="button">
            Enviar Link de Recuperação
          </button>
        </form>

        <p className="caption">
          Lembrou a senha? <Link to="/login">Faça login</Link>
        </p>
      </section>
    </main>
  )
}
