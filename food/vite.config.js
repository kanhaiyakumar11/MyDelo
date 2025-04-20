import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// vite.config.js
export default {
  base: '/',
  // ...rest of config
}

export default defineConfig({
  plugins: [react()],
})
