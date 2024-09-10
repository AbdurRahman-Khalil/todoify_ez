import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: /todoify_ez/,
  build: {
    serviceworker: true,
  }
})
