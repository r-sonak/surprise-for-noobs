import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 👈 this is crucial for Vercel and other static hosts
  server: {
    host: true,
    port: 5173,
  },
  build: {
    outDir: 'dist', // 👈 make sure Vercel finds your built files here
  },
})
//test