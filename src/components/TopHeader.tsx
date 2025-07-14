import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { Building2, Newspaper, Briefcase, Percent, Book, Instagram } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import WhatsappIcon from './icons/WhatsappIcons'
import TelegramIcon from './icons/TelegramIcons'
import { useLanguage } from '../contexts/LanguageContext'
import { Translation } from '../utils/translations'

export interface TopHeaderProps {
  /** Показывать шапку или скрыть */
  visible?: boolean
}

// Обновлённый тип: объекты могут иметь либо `to` для внутренней навигации, либо `href` для внешних ссылок
export interface TopHeaderLink {
  label: string
  icon: LucideIcon
  to?: string
  href?: string
}

export const topHeaderLinks = (t: Translation): TopHeaderLink[] => [
  { label: t.topNews,    to: '/news',     icon: Newspaper },
  { label: t.topAgencies, to: '/agencies', icon: Building2 },
  { label: t.topCareer,   to: '/career',   icon: Briefcase },
  { label: t.topCommerce, to: '/commerce', icon: Percent },
  // Пример внешней ссылки:
  // { label: t.topDocs, href: '/docs.pdf', icon: Book },
]

const TopHeader: React.FC<TopHeaderProps> = ({ visible = true }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useLanguage()

  if (!visible) return null

  return (
    <div className="hidden md:block bg-white text-slate-700 text-xs border-b shadow">
      <div className="container mx-auto flex h-8 items-center justify-between px-6">
        {/* Навигация */}
        <nav className="hidden md:flex space-x-8">
          {topHeaderLinks(t).map((link) => (
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className="group relative flex items-center space-x-1 font-medium uppercase tracking-wider"
              >
                <span className="pb-1">{link.label}</span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-600 transition-all group-hover:w-full" />
              </Link>
            ) : link.href ? (
              <a
                key={link.label}
                href={link.href}
                className="group relative flex items-center space-x-1 font-medium uppercase tracking-wider"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pb-1">{link.label}</span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-600 transition-all group-hover:w-full" />
              </a>
            ) : null
          ))}
        </nav>

        {/* Кнопка мобильного меню */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/40 text-[#324154]"
          aria-label="Toggle top menu"
        >
          {/* иконка для меню можно добавить сюда */}
        </button>

        {/* Селектор языка и мессенджеры */}
        <div className="flex items-center space-x-3 text-slate-500">
          <a href="https://api.whatsapp.com/send/?phone=77006363631&text&type=phone_number&app_absent=0" aria-label="WhatsApp" className="hover:opacity-80">
            <WhatsappIcon className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/caspiancoast.kz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram" className="hover:opacity-80">
            <Instagram className="w-5 h-5" />
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}

export default TopHeader
