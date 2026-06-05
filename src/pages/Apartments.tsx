import { useEffect, useMemo, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, ChevronDown, RotateCcw, Maximize2 } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import { fetchUnits, formatMoney, num, type Unit } from '../utils/apartments'
import { findProjectByName } from '../data/projects'

// Локальные переводы страницы (RU / KZ / EN)
const I18N: Record<string, Record<string, string>> = {
  ru: {
    titleA: 'Каталог', titleB: 'квартир', subtitle: 'Квартиры в современных жилых комплексах на побережье Каспия',
    project: 'Проект', allProjects: 'Все проекты', rooms: 'Комнатность', allRooms: 'Все',
    price: 'Стоимость, ₸', area: 'Площадь, м²', clear: 'Очистить фильтры', from: 'от', to: 'до',
    search: 'Поиск по номеру квартиры…', sort: 'Сортировка', sortPrice: 'Дешевле', sortPriceDesc: 'Дороже',
    sortArea: 'Больше площадь', found: 'Найдено', of: 'из', details: 'Подробнее', consult: 'Консультация',
    roomShort: 'комн.', studio: 'Студия', floor: 'этаж', section: 'Секция', perSqm: 'за м²',
    loadMore: 'Показать ещё', refresh: 'Обновить', empty: 'Ничего не найдено по заданным фильтрам',
    error: 'Не удалось загрузить каталог.', updated: 'Обновлено',
  },
  kz: {
    titleA: 'Пәтерлер', titleB: 'каталогы', subtitle: 'Каспий жағалауындағы заманауи тұрғын кешендердегі пәтерлер',
    project: 'Жоба', allProjects: 'Барлық жобалар', rooms: 'Бөлмелер', allRooms: 'Барлығы',
    price: 'Бағасы, ₸', area: 'Ауданы, м²', clear: 'Сүзгілерді тазалау', from: 'бастап', to: 'дейін',
    search: 'Пәтер нөмірі бойынша іздеу…', sort: 'Сұрыптау', sortPrice: 'Арзаны', sortPriceDesc: 'Қымбаты',
    sortArea: 'Ауданы үлкен', found: 'Табылды', of: '/', details: 'Толығырақ', consult: 'Кеңес',
    roomShort: 'бөлме', studio: 'Студия', floor: 'қабат', section: 'Секция', perSqm: 'м² үшін',
    loadMore: 'Тағы көрсету', refresh: 'Жаңарту', empty: 'Сүзгілер бойынша ештеңе табылмады',
    error: 'Каталогты жүктеу мүмкін болмады.', updated: 'Жаңартылды',
  },
  en: {
    titleA: 'Apartments', titleB: 'catalog', subtitle: 'Apartments in modern residential complexes on the Caspian coast',
    project: 'Project', allProjects: 'All projects', rooms: 'Rooms', allRooms: 'All',
    price: 'Price, ₸', area: 'Area, m²', clear: 'Clear filters', from: 'from', to: 'to',
    search: 'Search by unit number…', sort: 'Sort', sortPrice: 'Cheaper', sortPriceDesc: 'Pricier',
    sortArea: 'Larger area', found: 'Found', of: 'of', details: 'Details', consult: 'Consult',
    roomShort: 'rooms', studio: 'Studio', floor: 'floor', section: 'Section', perSqm: 'per m²',
    loadMore: 'Show more', refresh: 'Refresh', empty: 'Nothing found for the selected filters',
    error: 'Failed to load the catalog.', updated: 'Updated',
  },
}

const WHATSAPP = 'https://api.whatsapp.com/send/?phone=77006363631&text=' +
  encodeURIComponent('Здравствуйте! Интересует квартира из каталога.')

type SortKey = 'price' | 'priceDesc' | 'area'

export default function Apartments() {
  const { language } = useLanguage()
  const t = I18N[language] || I18N.ru
  const navigate = useNavigate()

  // Переход на страницу ЖК (как со страницы «Проекты»)
  const openProject = (projectName: string | null) => {
    const project = findProjectByName(projectName)
    if (project) navigate(`/projects/${project.id}`, { state: { project } })
    else navigate('/projects')
  }

  const [units, setUnits] = useState<Unit[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const [search, setSearch] = useState('')
  const [project, setProject] = useState('')
  const [roomsF, setRoomsF] = useState('')
  const [section, setSection] = useState('')
  const [priceFrom, setPriceFrom] = useState<string>('')
  const [priceTo, setPriceTo] = useState<string>('')
  const [areaFrom, setAreaFrom] = useState<string>('')
  const [areaTo, setAreaTo] = useState<string>('')
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

  useEffect(() => {
    load()
    const id = setInterval(load, 60_000)
    return () => clearInterval(id)
  }, [load])

  const meta = useMemo(() => {
    const projects = Array.from(new Set(units.map(u => u.projectName).filter(Boolean) as string[])).sort()
    const sections = Array.from(new Set(units.map(u => u.sectionName).filter(Boolean) as string[])).sort()
    const roomsSet = Array.from(new Set(units.map(u => u.rooms))).sort((a, b) => a - b)
    return { projects, sections, rooms: roomsSet }
  }, [units])

  const filtered = useMemo(() => {
    const pf = priceFrom ? num(priceFrom) : -Infinity
    const pt = priceTo ? num(priceTo) : Infinity
    const af = areaFrom ? num(areaFrom) : -Infinity
    const at = areaTo ? num(areaTo) : Infinity
    const list = units.filter(u => {
      if (search && !u.unitNumber.toLowerCase().includes(search.toLowerCase())) return false
      if (project && u.projectName !== project) return false
      if (section && u.sectionName !== section) return false
      if (roomsF && String(u.rooms) !== roomsF) return false
      const p = num(u.price), a = num(u.areaTotal)
      if (p < pf || p > pt) return false
      if (a < af || a > at) return false
      return true
    })
    return list.sort((a, b) => {
      if (sortBy === 'price') return num(a.price) - num(b.price)
      if (sortBy === 'priceDesc') return num(b.price) - num(a.price)
      return num(b.areaTotal) - num(a.areaTotal)
    })
  }, [units, search, project, section, roomsF, priceFrom, priceTo, areaFrom, areaTo, sortBy])

  const reset = () => {
    setSearch(''); setProject(''); setRoomsF(''); setSection('')
    setPriceFrom(''); setPriceTo(''); setAreaFrom(''); setAreaTo(''); setSortBy('price'); setVisible(12)
  }

  const roomsLabel = (n: number) => (n <= 0 ? t.studio : `${n} ${t.roomShort}`)

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Header />
      <main className="flex-1 pt-[88px] sm:pt-[96px] lg:pt-[112px]">
        <div className="container mx-auto px-4 py-8">
          {/* Заголовок */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1">
            {t.titleA} <span className="text-brand-600">{t.titleB}</span>
          </h1>
          <p className="text-slate-500 mb-6">{t.subtitle}</p>

          {/* Панель фильтров */}
          <div className="rounded-2xl bg-white p-4 sm:p-5 shadow-sm border border-slate-200">
            <div className="flex flex-wrap items-end gap-3">
              {/* Проект */}
              <Field label={t.project}>
                <Select value={project} onChange={setProject}
                  options={[{ v: '', l: t.allProjects }, ...meta.projects.map(p => ({ v: p, l: p }))]} />
              </Field>
              {/* Комнатность */}
              <Field label={t.rooms}>
                <Select value={roomsF} onChange={setRoomsF}
                  options={[{ v: '', l: t.allRooms }, ...meta.rooms.map(r => ({ v: String(r), l: roomsLabel(r) }))]} />
              </Field>
              {/* Стоимость */}
              <Field label={t.price}>
                <div className="flex items-center rounded-xl border border-slate-300 bg-white px-3 h-11 min-w-[200px]">
                  <input value={priceFrom} onChange={e => setPriceFrom(e.target.value.replace(/\D/g, ''))}
                    placeholder={t.from} inputMode="numeric"
                    className="w-full bg-transparent text-sm outline-none" />
                  <span className="px-1 text-slate-300">–</span>
                  <input value={priceTo} onChange={e => setPriceTo(e.target.value.replace(/\D/g, ''))}
                    placeholder={t.to} inputMode="numeric"
                    className="w-full bg-transparent text-sm outline-none" />
                </div>
              </Field>
              {/* Площадь */}
              <Field label={t.area}>
                <div className="flex items-center rounded-xl border border-slate-300 bg-white px-3 h-11 min-w-[160px]">
                  <input value={areaFrom} onChange={e => setAreaFrom(e.target.value.replace(/[^\d.]/g, ''))}
                    placeholder={t.from} inputMode="decimal"
                    className="w-full bg-transparent text-sm outline-none" />
                  <span className="px-1 text-slate-300">–</span>
                  <input value={areaTo} onChange={e => setAreaTo(e.target.value.replace(/[^\d.]/g, ''))}
                    placeholder={t.to} inputMode="decimal"
                    className="w-full bg-transparent text-sm outline-none" />
                </div>
              </Field>
              {/* Очистить */}
              <button onClick={reset}
                className="inline-flex items-center gap-2 h-11 px-4 text-sm text-slate-500 hover:text-brand-600 transition-colors">
                <RotateCcw size={16} /> {t.clear}
              </button>
            </div>

            {/* Секции-пилюли + сортировка */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {meta.sections.map(s => {
                const active = section === s
                return (
                  <button key={s} onClick={() => setSection(active ? '' : s)}
                    className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                      active ? 'border-brand-600 bg-brand-600 text-white'
                             : 'border-slate-300 text-slate-600 hover:border-brand-400 hover:text-brand-600'
                    }`}>
                    {t.section} {s}
                  </button>
                )
              })}
              <div className="ml-auto">
                <Select value={sortBy} onChange={(v) => setSortBy(v as SortKey)}
                  options={[{ v: 'price', l: t.sortPrice }, { v: 'priceDesc', l: t.sortPriceDesc }, { v: 'area', l: t.sortArea }]} />
              </div>
            </div>
          </div>

          {/* Поиск */}
          <div className="relative mt-4">
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder={t.search}
              className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-5 pr-12 text-sm shadow-sm outline-none focus:ring-2 focus:ring-brand-500" />
            <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>

          {/* Счётчик */}
          <div className="mt-6 mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-slate-900">
              {t.found} <span className="text-brand-600">{filtered.length}</span>{' '}
              <span className="text-sm font-medium text-slate-400">{t.of} {units.length}</span>
            </h2>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              {lastUpdated && (
                <span>{t.updated}: {lastUpdated.toLocaleTimeString(language === 'en' ? 'en' : 'ru-RU', { hour: '2-digit', minute: '2-digit' })}</span>
              )}
              <button onClick={load} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 hover:bg-slate-50 transition-colors">
                <RotateCcw size={14} /> {t.refresh}
              </button>
            </div>
          </div>

          {/* Сетка карточек */}
          {loading ? (
            <Grid>{Array.from({ length: 8 }).map((_, i) => <div key={i} className="h-80 animate-pulse rounded-2xl bg-slate-200" />)}</Grid>
          ) : error ? (
            <div className="rounded-2xl bg-white border border-slate-200 p-10 text-center">
              <p className="text-slate-600 mb-4">{error}</p>
              <button onClick={load} className="rounded-lg bg-brand-600 px-5 py-2 text-white hover:bg-brand-700">{t.refresh}</button>
            </div>
          ) : filtered.length === 0 ? (
            <div className="rounded-2xl bg-white border border-slate-200 p-10 text-center text-slate-500">{t.empty}</div>
          ) : (
            <>
              <Grid>
                {filtered.slice(0, visible).map(u => (
                  <UnitCard key={u.id} u={u} t={t} roomsLabel={roomsLabel} onDetails={openProject} />
                ))}
              </Grid>
              {visible < filtered.length && (
                <div className="mt-8 text-center">
                  <button onClick={() => setVisible(v => v + 12)}
                    className="rounded-xl border border-brand-600 px-6 py-3 text-brand-600 font-medium hover:bg-brand-50 transition-colors">
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-slate-400">{label}</span>
      {children}
    </div>
  )
}

function Select({ value, onChange, options }: {
  value: string; onChange: (v: string) => void; options: { v: string; l: string }[]
}) {
  return (
    <div className="relative">
      <select value={value} onChange={e => onChange(e.target.value)}
        className="h-11 min-w-[170px] appearance-none rounded-xl border border-slate-300 bg-white pl-3 pr-9 text-sm outline-none focus:ring-2 focus:ring-brand-500">
        {options.map(o => <option key={o.v} value={o.v}>{o.l}</option>)}
      </select>
      <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
    </div>
  )
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">{children}</div>
}

function UnitCard({ u, t, roomsLabel, onDetails }: {
  u: Unit; t: Record<string, string>; roomsLabel: (n: number) => string; onDetails: (projectName: string | null) => void
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-shadow">
      {/* Изображение / план */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-brand-600 to-brand-400">
        {u.planImageUrl ? (
          <img src={u.planImageUrl} alt={u.unitNumber} loading="lazy" className="h-full w-full bg-white object-contain p-3" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-white/90 text-5xl font-extrabold">№{u.unitNumber}</div>
        )}
        {u.projectName && (
          <span className="absolute left-3 top-3 rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
            {u.projectName}
          </span>
        )}
      </div>

      {/* Контент */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-bold text-slate-900">Квартира №{u.unitNumber}</h3>
        <p className="text-sm text-slate-500">
          {u.sectionName ? `${t.section} ${u.sectionName}` : u.buildingName || ' '}
        </p>

        {/* Цена + характеристики через разделители */}
        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          <span className="font-bold text-brand-600">{formatMoney(u.price)}</span>
          <span className="text-slate-300">|</span>
          <span className="inline-flex items-center gap-1 text-slate-600"><Maximize2 size={13} /> {num(u.areaTotal)} м²</span>
          {u.floorNumber != null && (
            <>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600">{u.floorNumber} {t.floor}</span>
            </>
          )}
          <span className="text-slate-300">|</span>
          <span className="text-slate-600">{roomsLabel(u.rooms)}</span>
        </div>
        {u.pricePerSqm && (
          <div className="mt-1 text-xs text-slate-400">{formatMoney(u.pricePerSqm)} {t.perSqm}</div>
        )}

        {/* Кнопки */}
        <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
          <button
            onClick={() => onDetails(u.projectName)}
            className="rounded-xl border border-slate-300 py-2 text-sm font-medium text-slate-700 hover:border-brand-400 hover:text-brand-600 transition-colors"
          >
            {t.details}
          </button>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="rounded-xl bg-brand-600 py-2 text-center text-sm font-medium text-white hover:bg-brand-700 transition-colors">
            {t.consult}
          </a>
        </div>
      </div>
    </div>
  )
}
