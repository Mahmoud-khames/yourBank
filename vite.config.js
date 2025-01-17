import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://yourbankapi-mahmoud-khames-mahmoud-khames-projects.vercel.app',
    },
  },
  
})
