import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['510d68d8-12be-4e66-9272-45a078890551-00-12dynwuk2uzs9.spock.replit.dev']
  }
})
