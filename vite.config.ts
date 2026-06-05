import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['lucide-react']
        }
      }
    },
    target: 'esnext',
    minify: 'terser',
    cssMinify: true
  },
  server: {
    // Dev-прокси к публичному каталогу CRM (обходит CORS при локальной разработке)
    proxy: {
      '/catalog-api': {
        target: 'https://caspian-coast.vercel.app',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/catalog-api/, '/api/units/public'),
      }
    }
  }
});
