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
    : 'https://cc-workspace.kz/api/units/public')

const str = (v: unknown): string | null => (v === null || v === undefined || v === '' ? null : String(v))
// Ссылки из CRM пропускаем только http(s) — никаких javascript:/data: и прочих схем
const httpUrl = (v: unknown): string | null => {
  const s = str(v)
  return s && /^https?:\/\//i.test(s) ? s : null
}

// Одна битая запись из CRM не должна ронять всю страницу — приводим поля к ожидаемым типам
function normalizeUnit(raw: Record<string, unknown>, index: number): Unit {
  const floor = Number(raw.floorNumber)
  return {
    ...(raw as unknown as Unit),
    id: str(raw.id) ?? `unit-${index}`,
    unitNumber: str(raw.unitNumber) ?? '',
    rooms: Number(raw.rooms) || 0,
    status: str(raw.status) ?? '',
    floorNumber: raw.floorNumber === null || raw.floorNumber === undefined || !Number.isFinite(floor) ? null : floor,
    sectionName: str(raw.sectionName),
    buildingName: str(raw.buildingName),
    projectName: str(raw.projectName),
    planImageUrl: httpUrl(raw.planImageUrl),
  }
}

const PAGE_SIZE = 200
const MAX_PAGES = 25 // защита от бесконечного цикла, если API сломает hasMore

// API отдаёт данные страницами (по умолчанию только 100 записей) — догружаем все через limit/offset/hasMore
export async function fetchUnits(signal?: AbortSignal): Promise<Unit[]> {
  const all: unknown[] = []
  for (let page = 0; page < MAX_PAGES; page++) {
    const url = new URL(API_URL, window.location.origin)
    url.searchParams.set('limit', String(PAGE_SIZE))
    url.searchParams.set('offset', String(page * PAGE_SIZE))

    const res = await fetch(url, { signal })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const json = await res.json()
    if (!json?.success || !Array.isArray(json.data)) {
      throw new Error('Неожиданный формат ответа API')
    }
    all.push(...json.data)
    if (!json.hasMore || json.data.length === 0) break
  }
  return all
    .filter((u): u is Record<string, unknown> => typeof u === 'object' && u !== null)
    .map(normalizeUnit)
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
