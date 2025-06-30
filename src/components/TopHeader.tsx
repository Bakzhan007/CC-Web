import React from 'react'
import { Link } from 'react-router-dom'
import { Building2, Newspaper, Briefcase, Percent, Book } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import WhatsappIcon from './icons/WhatsappIcons'
import TelegramIcon from './icons/TelegramIcons'

export interface TopHeaderProps {
  /** Показывать шапку или скрыть */
  visible?: boolean
}

const TopHeader: React.FC<TopHeaderProps> = ({ visible = true }) => {
  if (!visible) return null

  const links = [
    { label: 'News', to: '/news', icon: Newspaper },
    { label: 'Real estate agencies', to: '/agencies', icon: Building2 },
    { label: 'Career', href: '/career', icon: Briefcase },
    { label: 'commerce', to: '/commerce', icon: Percent },
    { label: 'ABC', href: '#', icon: Book },
  ]

  return (
    <div className="bg-gradient-to-r from-white via-blue-100 to-blue-300 text-[#324154] text-sm shadow">
      <div className="container mx-auto flex h-12 items-center justify-between px-6">
        {/* Навигация */}
        <nav className="flex space-x-8">
          {links.map((link) => (
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

        {/* Селектор языка и мессенджеры */}
        <div className="flex items-center space-x-3 text-white">
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
