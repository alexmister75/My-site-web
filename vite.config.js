import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/My-site-web/', // Important pour GitHub Pages
  build: {
    outDir: 'dist', // Le répertoire de sortie par défaut est déjà 'dist', mais explicitons-le
    emptyOutDir: true, // Vider le répertoire de sortie avant chaque build
  },
  root: '.', // Le répertoire racine de votre projet Vite est le répertoire actuel
})
