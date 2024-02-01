import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const SERVER = 'localhost:8080'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api/': {
        target: SERVER,
        changeOrigin: true
      }
    }
  }
})
