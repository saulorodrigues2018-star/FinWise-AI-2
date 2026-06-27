import api from './http'
import type { AuthTokens, User } from '../types'

export async function login(email: string, password: string): Promise<AuthTokens> {
  const response = await api.post('/auth/login', { email, password })
  return response.data
}

export async function register(name: string, email: string, password: string): Promise<void> {
  await api.post('/auth/register', { name, email, password })
}

export async function getProfile(): Promise<User> {
  const response = await api.get('/auth/me')
  return response.data
}
