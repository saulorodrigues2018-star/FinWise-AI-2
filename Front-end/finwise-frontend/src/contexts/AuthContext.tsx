import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { AuthTokens, User } from '../types'
import { login as loginService, register as registerService, getProfile } from '../services/auth'

interface AuthContextValue {
  user: User | null
  tokens: AuthTokens | null
  loading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  fetchProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

const storageKey = 'finwise-auth'

function parseStorage() {
  try {
    const stored = localStorage.getItem(storageKey)
    return stored ? (JSON.parse(stored) as { tokens: AuthTokens; user: User }) : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [tokens, setTokens] = useState<AuthTokens | null>(() => parseStorage()?.tokens ?? null)
  const [user, setUser] = useState<User | null>(() => parseStorage()?.user ?? null)
  const [loading, setLoading] = useState(true)

  const isAuthenticated = Boolean(tokens)

  useEffect(() => {
    async function loadUser() {
      const stored = parseStorage()
      if (stored?.tokens) {
        try {
          const profile = await getProfile()
          setUser(profile)
          setTokens(stored.tokens)
        } catch {
          localStorage.removeItem(storageKey)
          setTokens(null)
          setUser(null)
        }
      }
      setLoading(false)
    }

    loadUser()
  }, [])

  const persist = (nextTokens: AuthTokens, nextUser: User) => {
    localStorage.setItem(storageKey, JSON.stringify({ tokens: nextTokens, user: nextUser }))
    setTokens(nextTokens)
    setUser(nextUser)
  }

  const login = async (email: string, password: string) => {
    const auth = await loginService(email, password)
    const profile = await getProfile()
    persist(auth, profile)
  }

  const register = async (name: string, email: string, password: string) => {
    await registerService(name, email, password)
    await login(email, password)
  }

  const logout = () => {
    localStorage.removeItem(storageKey)
    setTokens(null)
    setUser(null)
  }

  const fetchProfile = async () => {
    if (!tokens) return
    const profile = await getProfile()
    setUser(profile)
  }

  const value = useMemo(
    () => ({ user, tokens, loading, isAuthenticated, login, register, logout, fetchProfile }),
    [user, tokens, loading, isAuthenticated],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
