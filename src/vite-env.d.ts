/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Боевой домен, задаётся в vite.config.ts (SITE_URL)
  readonly VITE_SITE_URL?: string
  // Переопределение адреса API каталога квартир (см. src/utils/apartments.ts)
  readonly VITE_CATALOG_API?: string
}
