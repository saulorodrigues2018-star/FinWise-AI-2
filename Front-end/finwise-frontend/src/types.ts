export interface AuthTokens {
  accessToken: string
  refreshToken: string
}

export interface User {
  id: number
  name: string
  email: string
  role: string
  createdAt: string
}
