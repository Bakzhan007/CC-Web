import { useState, useEffect, useRef } from 'react'
import {
  Menu, X, Phone, Instagram,
  Building2, Briefcase,
  Home, Users, LayoutGrid, Building,
  MapPin, HelpCircle, ShoppingBag,
  ChevronRight, Sparkles, Video,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import WhatsappIcon from './icons/WhatsappIcons'
import mainLogo from '../assets/logo/logo-dark-hor.png'

interface MenuItem {
  name: string
  to: string
  icon: LucideIcon
}

// TODO: подставить реальную ссылку на live-камеру
const LIVE_URL = '#'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()
  const navigate = useNavigate()
  const menuRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  // Закрытие меню при клике вне
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Изменение фона шапки при скролле
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Закрытие меню при смене страницы
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Основные разделы меню
  const menuItems: MenuItem[] = [
    { name: t.topAgencies, to: '/agencies', icon: Building2 },
    { name: t.topCareer, to: '/career', icon: Briefcase },
    { name: t.home, to: '/', icon: Home },
    { name: t.forPartner, to: '/partner', icon: Users },
    { name: t.projects, to: '/projects', icon: LayoutGrid },
    { name: t.menuApartments, to: '/apartments', icon: Building },
  ]

  // Подразделы CC Гид
  const guideItems: MenuItem[] = [
    { name: t.guideSalesOffice, to: '/sales-office', icon: MapPin },
    { name: t.guideFaq, to: '/faq', icon: HelpCircle },
    { name: t.guideAfterPurchase, to: '/after-purchase', icon: ShoppingBag },
  ]

  const handleNavigate = (path: string) => {
    if (location.pathname !== path) {
      navigate(path)
    }
    setIsMenuOpen(false)
  }

  // Анимации
  const panelVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.96 },
    show: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.035, delayChildren: 0.06 },
    },
    exit: { opacity: 0, y: -10, scale: 0.96, transition: { duration: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -14 },
    show: { opacity: 1, x: 0, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } },
  }

  const renderItem = (item: MenuItem) => {
    const Icon = item.icon
    return (
      <motion.button
        key={item.to}
        variants={itemVariants}
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => handleNavigate(item.to)}
        className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-brand-50"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-colors group-hover:bg-brand-600 group-hover:text-white">
          <Icon size={18} />
        </span>
        <span className="flex-1 text-sm font-medium text-slate-700 transition-colors group-hover:text-brand-700">
          {item.name}
        </span>
        <ChevronRight
          size={16}
          className="-translate-x-1 text-slate-300 opacity-0 transition-all group-hover:translate-x-0 group-hover:text-brand-600 group-hover:opacity-100"
        />
      </motion.button>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow">
      {/* Верхняя плашка: мессенджеры, язык и телефон */}
      <div className="hidden md:block border-b border-slate-200 bg-white">
        <div className="container mx-auto flex h-9 items-center justify-end gap-4 px-4">
          <a
            href="https://api.whatsapp.com/send/?phone=77006363631&text&type=phone_number&app_absent=0"
            aria-label="WhatsApp"
            className="text-slate-500 hover:text-brand-600 transition-colors"
          >
            <WhatsappIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/caspiancoast.kz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            aria-label="Instagram"
            className="text-slate-500 hover:text-brand-600 transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <span className="h-4 w-px bg-slate-300" />

          <LanguageSwitcher />

          <span className="h-4 w-px bg-slate-300" />

          <a
            href="tel:+77006363631"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
          >
            <Phone size={14} />
            <span>+7 (700) 636-36-31</span>
          </a>
        </div>
      </div>

      <div className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-slate-200'
            : 'bg-white'
      }`}>

        <div className="container mx-auto px-4">
          <nav className="relative flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Кнопка «Меню» слева + дропдаун */}
            <div className="relative" ref={menuRef}>
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.95 }}
                aria-expanded={isMenuOpen}
                aria-label="Меню"
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-2 text-white shadow-lg shadow-brand-600/20 transition-shadow hover:shadow-xl hover:shadow-brand-600/30"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isMenuOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="flex"
                  >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.span>
                </AnimatePresence>
                <span className="font-medium">{t.menu}</span>
              </motion.button>

              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    variants={panelVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ transformOrigin: 'top left' }}
                    className="absolute left-0 top-full z-50 mt-3 w-72 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-2 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl"
                  >
                    {/* Декоративная подсветка сверху */}
                    <div className="pointer-events-none absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-brand-400/20 blur-3xl" />

                    <div className="relative space-y-0.5">
                      {menuItems.map(renderItem)}
                    </div>

                    {/* CC Гид */}
                    <div className="relative mt-2 border-t border-slate-100 pt-2">
                      <div className="flex items-center gap-1.5 px-3 pb-1">
                        <Sparkles size={13} className="text-brand-500" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          {t.ccGuide}
                        </span>
                      </div>
                      <div className="space-y-0.5">
                        {guideItems.map(renderItem)}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Логотип — по центру шапки */}
            <Link
              to="/"
              className="logo absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <img
                src={mainLogo}
                alt="CaspianCoast Logo"
                className="h-14 sm:h-16 lg:h-20 w-auto object-contain transition-all duration-300"
                loading="lazy"
              />
            </Link>

            {/* Live-камера и панорама справа */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Live-камера */}
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-700 transition-colors hover:border-red-300 hover:bg-red-50"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                </span>
                <Video size={16} className="text-slate-500 group-hover:text-red-500 transition-colors" />
                <span className="hidden text-sm font-medium sm:inline">{t.live}</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
