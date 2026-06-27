import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function AIPage() {
  const { user } = useAuth()
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    { role: 'assistant', content: 'Olá! Sou seu assistente financeiro IA. Como posso ajudá-lo?' },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { role: 'user', content: input }])
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Analisando sua situação financeira...' }])
    }, 500)
    setInput('')
  }

  return (
    <main className="page-shell">
      <div className="page-grid">
        <section className="card" style={{ minHeight: '600px', display: 'flex', flexDirection: 'column' }}>
          <div className="card-header">
            <h1>Assistente IA</h1>
            <p>Pergunte qualquer coisa sobre suas finanças</p>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', marginBottom: '1rem', paddingRight: '0.5rem' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ marginBottom: '1rem', display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '70%',
                  padding: '1rem',
                  borderRadius: '12px',
                  backgroundColor: msg.role === 'user' ? '#7c3aed' : 'rgba(124, 58, 237, 0.1)',
                  color: msg.role === 'user' ? 'white' : '#e2e8f0',
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              placeholder="Faça uma pergunta..."
              style={{
                flex: 1,
                padding: '1rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(148, 163, 184, 0.16)',
                color: '#e2e8f0',
              }}
            />
            <button onClick={handleSend} className="button" style={{ padding: '1rem 2rem' }}>
              Enviar
            </button>
          </div>
          <Link to="/" className="button secondary" style={{ marginTop: '1rem' }}>
            Voltar ao painel
          </Link>
        </section>
      </div>
    </main>
  )
}
