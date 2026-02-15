import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/My-site-web/', // Le nom de votre dépôt sur GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  root: '.',
})
