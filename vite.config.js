import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages configuration
export default defineConfig({
  plugins: [react()],
  base: '/Modern-Real-Estate/',
})
