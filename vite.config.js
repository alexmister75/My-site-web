import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', // Utiliser un chemin relatif pour le build/déploiement
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
