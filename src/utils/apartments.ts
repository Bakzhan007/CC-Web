// Публичный каталог квартир — данные из CRM (Supabase) через готовый эндпоинт.
// Синхронизация живая: тот же источник, что и в CRM.

export interface Unit {
  id: string
  unitNumber: string
  rooms: number
  areaTotal: string | number
  areaLiving: string | number | null
  areaKitchen: string | number | null
  price: string | number
  pricePerSqm: string | number | null
  status: string
  floorNumber: number | null
  sectionName: string | null
  buildingName: string | null
  projectName: string | null
  propertyType: string | null
  typePrefix: string | null
  planImageUrl: string | null
  createdAt: string
  updatedAt: string
}

// База API:
//  - dev: через Vite-прокси /catalog-api (обходит CORS локально)
//  - prod: абсолютный URL CRM (нужен CORS на стороне CRM); можно переопределить VITE_CATALOG_API
const API_URL: string =
  (import.meta.env.VITE_CATALOG_API as string | undefined) ||
  (import.meta.env.DEV
    ? '/catalog-api'
    : 'https://caspian-coast.vercel.app/api/units/public')

export async function fetchUnits(): Promise<Unit[]> {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const json = await res.json()
  if (!json?.success || !Array.isArray(json.data)) {
    throw new Error('Неожиданный формат ответа API')
  }
  return json.data as Unit[]
}

// Форматирование цены в тенге: 17028000 -> "17 028 000 ₸"
export function formatMoney(value: string | number): string {
  const n = typeof value === 'number' ? value : parseFloat(value)
  if (!Number.isFinite(n)) return '—'
  return Math.round(n).toLocaleString('ru-RU').replace(/,/g, ' ') + ' ₸'
}

export function num(value: string | number | null | undefined): number {
  const n = typeof value === 'number' ? value : parseFloat(String(value ?? ''))
  return Number.isFinite(n) ? n : 0
}
