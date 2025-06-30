import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Building2, Newspaper, Briefcase, Percent, Book } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import WhatsappIcon from './icons/WhatsappIcons'
import TelegramIcon from './icons/TelegramIcons'

export interface TopHeaderProps {
  /** Показывать шапку или скрыть */
  visible?: boolean
}

export const topHeaderLinks = [
  { label: 'News', to: '/news', icon: Newspaper },
  { label: 'Real estate agencies', to: '/agencies', icon: Building2 },
  { label: 'Career', href: '/career', icon: Briefcase },
  { label: 'commerce', to: '/commerce', icon: Percent },
  { label: 'ABC', href: '#', icon: Book },
]

const TopHeader: React.FC<TopHeaderProps> = ({ visible = true }) => {
    const [mobileOpen, setMobileOpen] = useState(false)

  if (!visible) return null

  return (
    <div className="hidden md:block bg-white text-slate-700 text-sm border-b">
      <div className="container mx-auto flex h-10 items-center justify-between px-6">
        {/* Навигация */}
        <nav className="hidden md:flex space-x-8">
          {topHeaderLinks.map((link) => (
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className="group relative flex items-center space-x-1 font-medium uppercase tracking-wider"
              >
                <span className="pb-1">{link.label}</span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="group relative flex items-center space-x-1 font-medium uppercase tracking-wider"
              >
                <span className="pb-1">{link.label}</span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            )
          ))}
        </nav>

        {/* Кнопка мобильного меню */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/40 text-[#324154]"
          aria-label="Toggle top menu"
        >
        </button>

        {/* Селектор языка и мессенджеры */}
        <div className="flex items-center space-x-3 text-slate-500">
            <a href="#" aria-label="WhatsApp" className="hover:opacity-80">
              <WhatsappIcon className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Telegram" className="hover:opacity-80">
              <TelegramIcon className="w-5 h-5" />
            </a>
            <LanguageSwitcher />
          </div>
      </div>
    </div>
  )
}

export default TopHeader
