import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { findProject, projectPath } from '../data/projects'

type Lang = 'kz' | 'ru' | 'en'
type Meta = { title: string; description: string }

const BRAND = 'CaspianCoast'
const SITE_URL = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || window.location.origin

// Заголовки и описания страниц для поисковиков и вкладки браузера
const PAGES: Record<string, Record<Lang, Meta>> = {
  '/': {
    ru: { title: 'CaspianCoast — жилые комплексы и строительство в Актау', description: 'Девелопер жилых комплексов на побережье Каспийского моря в Актау. Квартиры в новостройках: ЖК Ilan Towers, Taras, Caspian Coast.' },
    kz: { title: 'CaspianCoast — Ақтаудағы тұрғын үй кешендері және құрылыс', description: 'Ақтаудағы Каспий жағалауындағы тұрғын үй кешендерінің девелопері. Жаңа үйлердегі пәтерлер: Ilan Towers, Taras, Caspian Coast ТК.' },
    en: { title: 'CaspianCoast — residential complexes and construction in Aktau', description: 'Developer of residential complexes on the Caspian Sea coast in Aktau. Apartments in new buildings: Ilan Towers, Taras, Caspian Coast.' },
  },
  '/projects': {
    ru: { title: 'Проекты — жилые комплексы CaspianCoast', description: 'Жилые комплексы CaspianCoast в Актау: сроки сдачи, этажность, цены и статус строительства.' },
    kz: { title: 'Жобалар — CaspianCoast тұрғын үй кешендері', description: 'Ақтаудағы CaspianCoast тұрғын үй кешендері: тапсыру мерзімі, қабат саны, бағасы және құрылыс барысы.' },
    en: { title: 'Projects — CaspianCoast residential complexes', description: 'CaspianCoast residential complexes in Aktau: completion dates, floors, prices and construction status.' },
  },
  '/apartments': {
    ru: { title: 'Каталог квартир — CaspianCoast', description: 'Актуальные квартиры в продаже: планировки, площадь, этаж и цена. Фильтр по проекту и количеству комнат.' },
    kz: { title: 'Пәтерлер каталогы — CaspianCoast', description: 'Сатылымдағы пәтерлер: жоспарлау, аудан, қабат және баға. Жоба мен бөлме саны бойынша сүзгі.' },
    en: { title: 'Apartment catalog — CaspianCoast', description: 'Apartments currently for sale: layouts, area, floor and price. Filter by project and number of rooms.' },
  },
  '/agencies': {
    ru: { title: 'Агентства недвижимости — партнёры CaspianCoast', description: 'Проверенные агентства недвижимости, которые помогут купить квартиру в жилых комплексах CaspianCoast.' },
    kz: { title: 'Жылжымайтын мүлік агенттіктері — CaspianCoast серіктестері', description: 'CaspianCoast тұрғын үй кешендерінен пәтер сатып алуға көмектесетін тексерілген агенттіктер.' },
    en: { title: 'Real estate agencies — CaspianCoast partners', description: 'Verified real estate agencies that help you buy an apartment in CaspianCoast residential complexes.' },
  },
  '/partner': {
    ru: { title: 'Партнёрам — сотрудничество с CaspianCoast', description: 'Условия сотрудничества с CaspianCoast для подрядчиков, поставщиков и агентств недвижимости.' },
    kz: { title: 'Серіктестерге — CaspianCoast-пен ынтымақтастық', description: 'Мердігерлер, жеткізушілер және жылжымайтын мүлік агенттіктері үшін CaspianCoast-пен ынтымақтастық шарттары.' },
    en: { title: 'For partners — cooperation with CaspianCoast', description: 'Cooperation terms with CaspianCoast for contractors, suppliers and real estate agencies.' },
  },
  '/career': {
    ru: { title: 'Карьера и вакансии — CaspianCoast', description: 'Открытые вакансии в CaspianCoast. Присоединяйтесь к команде девелопера на побережье Каспия.' },
    kz: { title: 'Мансап және бос орындар — CaspianCoast', description: 'CaspianCoast компаниясындағы бос жұмыс орындары. Каспий жағалауындағы девелопер командасына қосылыңыз.' },
    en: { title: 'Careers and vacancies — CaspianCoast', description: 'Open positions at CaspianCoast. Join the developer team on the Caspian coast.' },
  },
  '/sales-office': {
    ru: { title: 'Отдел продаж — адрес и контакты CaspianCoast', description: 'Офис продаж CaspianCoast в Актау: адрес, телефон, график работы и карта проезда.' },
    kz: { title: 'Сату бөлімі — CaspianCoast мекенжайы мен байланыстары', description: 'Ақтаудағы CaspianCoast сату кеңсесі: мекенжай, телефон, жұмыс кестесі және карта.' },
    en: { title: 'Sales office — CaspianCoast address and contacts', description: 'CaspianCoast sales office in Aktau: address, phone, working hours and map.' },
  },
  '/faq': {
    ru: { title: 'Частые вопросы — CaspianCoast', description: 'Ответы на частые вопросы о покупке квартиры, ипотеке, рассрочке и сроках сдачи в CaspianCoast.' },
    kz: { title: 'Жиі қойылатын сұрақтар — CaspianCoast', description: 'CaspianCoast-тан пәтер сатып алу, ипотека, бөліп төлеу және тапсыру мерзімі туралы жиі сұрақтарға жауаптар.' },
    en: { title: 'FAQ — CaspianCoast', description: 'Answers to common questions about buying an apartment, mortgages, installments and completion dates at CaspianCoast.' },
  },
  '/after-purchase': {
    ru: { title: 'Что делать после покупки — CaspianCoast', description: 'Пошаговая инструкция после покупки квартиры в CaspianCoast: документы, приёмка, ключи и регистрация.' },
    kz: { title: 'Сатып алғаннан кейін не істеу керек — CaspianCoast', description: 'CaspianCoast-тан пәтер сатып алғаннан кейінгі қадамдар: құжаттар, қабылдау, кілттер және тіркеу.' },
    en: { title: 'After purchase — CaspianCoast', description: 'Step-by-step guide after buying an apartment at CaspianCoast: documents, acceptance, keys and registration.' },
  },
}

const NOT_FOUND: Record<Lang, string> = { ru: 'Страница не найдена', kz: 'Бет табылмады', en: 'Page not found' }

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

function setRobots(noindex: boolean) {
  let el = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')
  if (!noindex) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('meta')
    el.name = 'robots'
    document.head.appendChild(el)
  }
  el.content = 'noindex'
}

// Обновляет title, description, canonical и og-теги при смене страницы или языка
export default function RouteMeta() {
  const { pathname } = useLocation()
  const { language } = useLanguage()

  useEffect(() => {
    const lang = (['kz', 'ru', 'en'].includes(language) ? language : 'ru') as Lang
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : '/'

    let meta: Meta | undefined = PAGES[path]?.[lang]
    let noindex = false

    const projectMatch = path.match(/^\/projects\/([^/]+)$/)
    if (projectMatch) {
      const project = findProject(projectMatch[1])
      if (project) {
        meta = { title: `${project.name} — ${BRAND}`, description: project.description }
      }
    }
    if (!meta) {
      // /maintenance, 404 и несуществующие проекты — не индексируем
      noindex = true
      meta = { title: `${NOT_FOUND[lang]} — ${BRAND}`, description: PAGES['/'][lang].description }
      if (path === '/maintenance') meta.title = BRAND
    }

    // Для проектов canonical всегда на слаг, даже если открыли по старому номеру
    const project = projectMatch ? findProject(projectMatch[1]) : undefined
    const canonicalPath = project ? projectPath(project) : path
    const url = `${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`
    document.title = meta.title
    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('link[rel="canonical"]', 'href', url)
    setMeta('meta[property="og:title"]', 'content', meta.title)
    setMeta('meta[property="og:description"]', 'content', meta.description)
    setMeta('meta[property="og:url"]', 'content', url)
    setRobots(noindex)
  }, [pathname, language])

  return null
}
