import React from 'react'
import { Link } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'

export interface TopHeaderProps {
  /** Показывать шапку или скрыть */
  visible?: boolean
}

const TopHeader: React.FC<TopHeaderProps> = ({ visible = true }) => {
  if (!visible) return null

  const links = [
    { label: 'Real estate agencies', to: '/agencies' },
    { label: 'News', to: '/news' },
    { label: 'Career', href: '#' },
    { label: 'Stock', href: '#' },
    { label: 'ABC', href: '#' },
  ]

  return (
    <div className="bg-gray-900 text-gray-300 text-sm shadow-sm">
      <div className="container mx-auto flex h-12 items-center justify-between px-6">
        {/* Навигация */}
        <nav className="flex space-x-8">
          {links.map((link) => (
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className="relative font-medium uppercase tracking-wider transition-colors hover:text-white"
              >
                <span className="pb-1">{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="relative font-medium uppercase tracking-wider transition-colors hover:text-white"
              >
                <span className="pb-1">{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            )
          ))}
        </nav>

        {/* Селектор языка */}
        <div className="flex items-center">
            <div className="bg-gray-800 text-gray-200 hover:bg-gray-700 focus:ring-2 focus:ring-blue-500 rounded-md px-3 py-1 transition-colors">
                <LanguageSwitcher />
            </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
