export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0f172a',
        surface2: '#111827',
        surface3: '#1e293b',
        accent: '#7c3aed',
        accentSoft: '#c4b5fd',
        border: '#334155',
        text: '#e2e8f0',
        muted: '#94a3b8',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.16)',
      },
    },
  },
  plugins: [],
}
