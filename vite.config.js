import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['98e93ea5-9538-4ff9-9373-c75809af2597-00-3tonq8itozctu.picard.replit.dev']
  }
})
