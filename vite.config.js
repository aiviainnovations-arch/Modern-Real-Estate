import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT — GitHub Pages configuration:
// Replace 'luxe-estates' below with your exact GitHub repository name.
// If you deploy to a custom domain or to <username>.github.io (a "user site"
// repo literally named <username>.github.io), set base to '/' instead.
export default defineConfig({
  plugins: [react()],
  base: '/luxe-estates/',
})
