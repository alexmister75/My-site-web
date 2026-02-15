import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/My-site-web/', // Utiliser le nom du dépôt comme base
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
