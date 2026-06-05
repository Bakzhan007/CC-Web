import { useEffect, useMemo, useState, useCallback } from 'react'
import { Search, SlidersHorizontal, RefreshCw, Layers, MapPin, Maximize2, X } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import { fetchUnits, formatMoney, num, type Unit } from '../utils/apartments'

// Локальные переводы страницы (RU / KZ / EN)
const I18N: Record<string, Record<string, string>> = {
  ru: {
    title: 'Каталог квартир', subtitle: 'Найдите идеальную квартиру в современном жилом комплексе',
    available: 'Доступно квартир', from: 'От', avg: 'Средняя цена',
    filters: 'Фильтры поиска', searchPlaceholder: 'Номер квартиры...', priceRange: 'Диапазон цены',
    area: 'Площадь, м²', projects: 'Проекты', sections: 'Секции', sort: 'Сортировка',
    sortPrice: 'По цене', sortArea: 'По площади', sortRooms: 'По комнатам',
    reset: 'Сбросить', availableUnits: 'Доступные квартиры', loadMore: 'Показать ещё',
    refresh: 'Обновить', consult: 'Получить консультацию', rooms: 'комн.', studio: 'Студия',
    floor: 'этаж', perSqm: 'за м²', empty: 'Ничего не найдено по заданным фильтрам',
    error: 'Не удалось загрузить каталог. Попробуйте обновить.', of: 'из', updated: 'Обновлено',
  },
  kz: {
    title: 'Пәтерлер каталогы', subtitle: 'Заманауи тұрғын үй кешенінен мінсіз пәтерді табыңыз',
    available: 'Қолжетімді пәтерлер', from: 'Бастап', avg: 'Орташа баға',
    filters: 'Іздеу сүзгілері', searchPlaceholder: 'Пәтер нөмірі...', priceRange: 'Баға аралығы',
    area: 'Ауданы, м²', projects: 'Жобалар', sections: 'Секциялар', sort: 'Сұрыптау',
    sortPrice: 'Баға бойынша', sortArea: 'Ауданы бойынша', sortRooms: 'Бөлмелер бойынша',
    reset: 'Тазалау', availableUnits: 'Қолжетімді пәтерлер', loadMore: 'Тағы көрсету',
    refresh: 'Жаңарту', consult: 'Кеңес алу', rooms: 'бөлме', studio: 'Студия',
    floor: 'қабат', perSqm: 'м² үшін', empty: 'Сүзгілер бойынша ештеңе табылмады',
    error: 'Каталогты жүктеу мүмкін болмады. Жаңартып көріңіз.', of: '/', updated: 'Жаңартылды',
  },
  en: {
    title: 'Apartments catalog', subtitle: 'Find the perfect apartment in a modern residential complex',
    available: 'Available units', from: 'From', avg: 'Average price',
    filters: 'Search filters', searchPlaceholder: 'Unit number...', priceRange: 'Price range',
    area: 'Area, m²', projects: 'Projects', sections: 'Sections', sort: 'Sort',
    sortPrice: 'By price', sortArea: 'By area', sortRooms: 'By rooms',
    reset: 'Reset', availableUnits: 'Available apartments', loadMore: 'Show more',
    refresh: 'Refresh', consult: 'Get a consultation', rooms: 'rooms', studio: 'Studio',
    floor: 'floor', perSqm: 'per m²', empty: 'Nothing found for the selected filters',
    error: 'Failed to load the catalog. Please refresh.', of: 'of', updated: 'Updated',
  },
}

const WHATSAPP = 'https://api.whatsapp.com/send/?phone=77006363631&text=' +
  encodeURIComponent('Здравствуйте! Интересует квартира из каталога.')

type SortKey = 'price' | 'area' | 'rooms'

export default function Apartments() {
  const { language } = useLanguage()
  const t = I18N[language] || I18N.ru

  const [units, setUnits] = useState<Unit[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  // Фильтры
  const [search, setSearch] = useState('')
  const [selectedProjects, setSelectedProjects] = useState<string[]>([])
  const [selectedSections, setSelectedSections] = useState<string[]>([])
  const [priceMax, setPriceMax] = useState<number | null>(null)
  const [areaMax, setAreaMax] = useState<number | null>(null)
  const [sortBy, setSortBy] = useState<SortKey>('price')
  const [visible, setVisible] = useState(12)

  const load = useCallback(async () => {
    try {
      setError(null)
      const data = await fetchUnits()
      setUnits(data.filter(u => u.status === 'available'))
      setLastUpdated(new Date())
    } catch {
      setError(t.error)
    } finally {
      setLoading(false)
    }
  }, [t.error])

  // Загрузка + авто-синхронизация каждые 60 секунд
  useEffect(() => {
    load()
    const id = setInterval(load, 60_000)
    return () => clearInterval(id)
  }, [load])

  // Границы и списки из данных
  const meta = useMemo(() => {
    const prices = units.map(u => num(u.price)).filter(Boolean)
    const areas = units.map(u => num(u.areaTotal)).filter(Boolean)
    const projects = Array.from(new Set(units.map(u => u.projectName).filter(Boolean) as string[])).sort()
    const sections = Array.from(new Set(units.map(u => u.sectionName).filter(Boolean) as string[])).sort()
    return {
      priceMin: prices.length ? Math.min(...prices) : 0,
      priceMax: prices.length ? Math.max(...prices) : 0,
      areaMin: areas.length ? Math.min(...areas) : 0,
      areaMax: areas.length ? Math.max(...areas) : 0,
      projects, sections,
    }
  }, [units])

  const stats = useMemo(() => {
    const prices = units.map(u => num(u.price)).filter(Boolean)
    return {
      total: units.length,
      min: prices.length ? Math.min(...prices) : 0,
      avg: prices.length ? prices.reduce((a, b) => a + b, 0) / prices.length : 0,
    }
  }, [units])

  const filtered = useMemo(() => {
    const pMax = priceMax ?? meta.priceMax
    const aMax = areaMax ?? meta.areaMax
    const list = units.filter(u => {
      if (search && !u.unitNumber.toLowerCase().includes(search.toLowerCase())) return false
      if (selectedProjects.length && !(u.projectName && selectedProjects.includes(u.projectName))) return false
      if (selectedSections.length && !(u.sectionName && selectedSections.includes(u.sectionName))) return false
      if (num(u.price) > pMax) return false
      if (num(u.areaTotal) > aMax) return false
      return true
    })
    return list.sort((a, b) => {
      if (sortBy === 'price') return num(a.price) - num(b.price)
      if (sortBy === 'area') return num(b.areaTotal) - num(a.areaTotal)
      return a.rooms - b.rooms
    })
  }, [units, search, selectedProjects, selectedSections, priceMax, areaMax, sortBy, meta.priceMax, meta.areaMax])

  const toggle = (arr: string[], v: string, set: (x: string[]) => void) =>
    set(arr.includes(v) ? arr.filter(i => i !== v) : [...arr, v])

  const reset = () => {
    setSearch(''); setSelectedProjects([]); setSelectedSections([])
    setPriceMax(null); setAreaMax(null); setSortBy('price'); setVisible(12)
  }

  const roomsLabel = (n: number) => (n <= 0 ? t.studio : `${n} ${t.rooms}`)

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1 pt-[88px] sm:pt-[96px] lg:pt-[112px]">
        {/* Hero */}
        <section className="bg-gradient-to-br from-brand-700 to-brand-500 text-white">
          <div className="container mx-auto px-4 py-14 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">{t.title}</h1>
            <p className="mt-3 text-white/80 max-w-2xl mx-auto">{t.subtitle}</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <StatCard value={String(stats.total)} label={t.available} />
              <StatCard value={formatMoney(stats.min)} label={t.from} />
              <StatCard value={formatMoney(stats.avg)} label={t.avg} />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          {/* Фильтры */}
          <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-5">
              <SlidersHorizontal size={18} className="text-brand-600" />
              <h2 className="font-semibold text-slate-800">{t.filters}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Поиск */}
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-3 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                />
              </div>
              {/* Сортировка */}
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as SortKey)}
                className="w-full rounded-lg border border-slate-300 py-2.5 px-3 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none bg-white"
              >
                <option value="price">{t.sortPrice}</option>
                <option value="area">{t.sortArea}</option>
                <option value="rooms">{t.sortRooms}</option>
              </select>

              {/* Цена */}
              <RangeField
                label={t.priceRange}
                min={meta.priceMin} max={meta.priceMax}
                value={priceMax ?? meta.priceMax}
                onChange={setPriceMax}
                format={(v) => formatMoney(v)}
              />
              {/* Площадь */}
              <RangeField
                label={t.area}
                min={meta.areaMin} max={meta.areaMax} step={1}
                value={areaMax ?? meta.areaMax}
                onChange={setAreaMax}
                format={(v) => `${Math.round(v)} м²`}
              />
            </div>

            {/* Проекты / секции */}
            {meta.projects.length > 0 && (
              <ChipRow title={t.projects} items={meta.projects} selected={selectedProjects}
                onToggle={v => toggle(selectedProjects, v, setSelectedProjects)} />
            )}
            {meta.sections.length > 0 && (
              <ChipRow title={t.sections} items={meta.sections} selected={selectedSections}
                onToggle={v => toggle(selectedSections, v, setSelectedSections)} />
            )}

            <div className="mt-5 flex justify-end">
              <button onClick={reset}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 transition-colors">
                <X size={15} /> {t.reset}
              </button>
            </div>
          </div>

          {/* Тулбар результатов */}
          <div className="mt-8 mb-4 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xl font-bold text-slate-900">
              {t.availableUnits}{' '}
              <span className="text-base font-medium text-slate-500">
                {filtered.length} {t.of} {units.length}
              </span>
            </h3>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              {lastUpdated && (
                <span>{t.updated}: {lastUpdated.toLocaleTimeString(language === 'en' ? 'en' : 'ru-RU', { hour: '2-digit', minute: '2-digit' })}</span>
              )}
              <button onClick={load}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 hover:bg-slate-100 transition-colors">
                <RefreshCw size={14} /> {t.refresh}
              </button>
            </div>
          </div>

          {/* Сетка */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-56 animate-pulse rounded-2xl bg-slate-200" />
              ))}
            </div>
          ) : error ? (
            <div className="rounded-2xl bg-white border border-slate-200 p-10 text-center">
              <p className="text-slate-600 mb-4">{error}</p>
              <button onClick={load} className="rounded-lg bg-brand-600 px-5 py-2 text-white hover:bg-brand-700 transition-colors">
                {t.refresh}
              </button>
            </div>
          ) : filtered.length === 0 ? (
            <div className="rounded-2xl bg-white border border-slate-200 p-10 text-center text-slate-500">
              {t.empty}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.slice(0, visible).map(u => (
                  <UnitCard key={u.id} u={u} t={t} roomsLabel={roomsLabel} />
                ))}
              </div>
              {visible < filtered.length && (
                <div className="mt-8 text-center">
                  <button onClick={() => setVisible(v => v + 12)}
                    className="rounded-lg border border-brand-600 px-6 py-2.5 text-brand-600 font-medium hover:bg-brand-50 transition-colors">
                    {t.loadMore}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-5">
      <div className="text-2xl lg:text-3xl font-extrabold whitespace-nowrap">{value}</div>
      <div className="mt-1 text-sm text-white/75">{label}</div>
    </div>
  )
}

function RangeField({ label, min, max, value, onChange, format, step }: {
  label: string; min: number; max: number; value: number
  onChange: (v: number | null) => void; format: (v: number) => string; step?: number
}) {
  const disabled = max <= min
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <span className="text-sm text-brand-600 font-medium">{format(value)}</span>
      </div>
      <input
        type="range" min={min} max={max || 1} step={step ?? Math.max(1, Math.round((max - min) / 100))}
        value={value} disabled={disabled}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-brand-600 disabled:opacity-40"
      />
    </div>
  )
}

function ChipRow({ title, items, selected, onToggle }: {
  title: string; items: string[]; selected: string[]; onToggle: (v: string) => void
}) {
  return (
    <div className="mt-5">
      <div className="mb-2 text-sm font-medium text-slate-700">{title}</div>
      <div className="flex flex-wrap gap-2">
        {items.map(item => {
          const active = selected.includes(item)
          return (
            <button key={item} onClick={() => onToggle(item)}
              className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                active ? 'border-brand-600 bg-brand-600 text-white'
                       : 'border-slate-300 text-slate-600 hover:border-brand-400 hover:text-brand-600'
              }`}>
              {item}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function UnitCard({ u, t, roomsLabel }: { u: Unit; t: Record<string, string>; roomsLabel: (n: number) => string }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
      <div className="relative h-36 bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center">
        {u.planImageUrl ? (
          <img src={u.planImageUrl} alt={u.unitNumber} loading="lazy" className="h-full w-full object-contain bg-white p-2" />
        ) : (
          <span className="text-white/90 text-4xl font-extrabold">№{u.unitNumber}</span>
        )}
        {u.projectName && (
          <span className="absolute top-3 left-3 rounded-full bg-black/30 backdrop-blur-sm px-2.5 py-1 text-xs text-white">
            {u.projectName}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-baseline justify-between">
          <span className="text-lg font-bold text-slate-900">№{u.unitNumber}</span>
          <span className="text-sm text-slate-500">{roomsLabel(u.rooms)}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
          <span className="inline-flex items-center gap-1"><Maximize2 size={14} /> {num(u.areaTotal)} м²</span>
          {u.floorNumber != null && (
            <span className="inline-flex items-center gap-1"><Layers size={14} /> {u.floorNumber} {t.floor}</span>
          )}
          {u.sectionName && (
            <span className="inline-flex items-center gap-1"><MapPin size={14} /> {u.sectionName}</span>
          )}
        </div>
        <div className="mt-auto pt-4">
          <div className="text-xl font-extrabold text-brand-700">{formatMoney(u.price)}</div>
          {u.pricePerSqm && (
            <div className="text-xs text-slate-400">{formatMoney(u.pricePerSqm)} {t.perSqm}</div>
          )}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="mt-3 block w-full rounded-lg bg-brand-600 py-2 text-center text-sm font-medium text-white hover:bg-brand-700 transition-colors">
            {t.consult}
          </a>
        </div>
      </div>
    </div>
  )
}
