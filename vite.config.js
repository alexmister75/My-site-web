import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/My-site-web/', // Nom du dépôt pour GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  root: '.',
})
