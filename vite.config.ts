import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';

// Боевой домен — единственное место, где он задан.
// Попадает в index.html (%VITE_SITE_URL%), в код (import.meta.env.VITE_SITE_URL), robots.txt и sitemap.xml.
const SITE_URL = 'https://caspiancoast.kz';
process.env.VITE_SITE_URL ??= SITE_URL;

// Страницы для поисковиков (служебные /maintenance и 404 не индексируем)
const STATIC_ROUTES = ['/', '/projects', '/apartments', '/agencies', '/partner', '/career', '/sales-office', '/faq', '/after-purchase'];

// robots.txt и sitemap.xml собираются при сборке; страницы проектов берутся из src/data/projects.ts
function seoFiles(): Plugin {
  return {
    name: 'seo-files',
    apply: 'build',
    generateBundle() {
      const site = process.env.VITE_SITE_URL!.replace(/\/$/, '');
      const projectsSource = readFileSync(new URL('./src/data/projects.ts', import.meta.url), 'utf8');
      const projectSlugs = [...projectsSource.matchAll(/^\s*slug:\s*'([a-z0-9-]+)',/gm)].map((m) => m[1]);
      if (projectSlugs.length === 0) this.error('sitemap: не найдены slug проектов в src/data/projects.ts');
      const routes = [...STATIC_ROUTES, ...projectSlugs.map((slug) => `/projects/${slug}`)];
      const today = new Date().toISOString().slice(0, 10);

      const sitemap = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...routes.map((r) => `  <url><loc>${site}${r}</loc><lastmod>${today}</lastmod></url>`),
        '</urlset>',
        '',
      ].join('\n');
      const robots = ['User-agent: *', 'Allow: /', 'Disallow: /maintenance', '', `Sitemap: ${site}/sitemap.xml`, ''].join('\n');

      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap });
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seoFiles()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react']
        }
      }
    },
    // esnext ломал старые iOS Safari; es2020 + safari14 — дефолт Vite, безопасно для мобильных
    target: ['es2020', 'safari14'],
    minify: 'terser',
    cssMinify: true
  },
  server: {
    // Dev-прокси к публичному каталогу CRM (обходит CORS при локальной разработке)
    proxy: {
      '/catalog-api': {
        target: 'https://cc-workspace.kz',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/catalog-api/, '/api/units/public'),
      }
    }
  }
});
