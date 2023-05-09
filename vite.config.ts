import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["@ionic/pwa-elements"],
  },
  plugins: [
    vue(),
    legacy()
    , VitePWA({ registerType: 'autoUpdate' })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})

// https://ionicframework.com/docs/vue/pwa#making-your-vue-app-a-pwa-with-vite