import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(config => {
  const data = localStorage.getItem('finwise-auth')
  if (data && config.headers) {
    const parsed = JSON.parse(data)
    config.headers.Authorization = `Bearer ${parsed.tokens.accessToken}`
  }
  return config
})

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const data = localStorage.getItem('finwise-auth')
      if (data) {
        const parsed = JSON.parse(data)
        const refreshResponse = await api.post('/auth/refresh', { refreshToken: parsed.tokens.refreshToken })
        parsed.tokens = refreshResponse.data
        localStorage.setItem('finwise-auth', JSON.stringify(parsed))
        originalRequest.headers.Authorization = `Bearer ${parsed.tokens.accessToken}`
        return api(originalRequest)
      }
    }
    return Promise.reject(error)
  },
)

export default api
