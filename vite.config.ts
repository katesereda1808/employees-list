import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/employees-list/',
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  }
})
