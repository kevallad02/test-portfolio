import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    host: "localhost",
    port: 3000,
    hmr: {
      overlay: false,  // Disable the error overlay
    },
  },
})