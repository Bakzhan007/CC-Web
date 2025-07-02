import { useState, useEffect, useRef } from 'react'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import TopHeader, { topHeaderLinks } from './TopHeader'
// два варианта логотипа: светлый и тёмный
import logoDark from '../assets/logo/logo-dark-hor.png'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { t } = useLanguage()
  const navigate = useNavigate()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Закрытие dropdown при клике вне
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) setOpenDropdown(null)
  }, [isMenuOpen])

  const navItems = [
    { name: t.home, to: '/' },
    { name: t.sale, to: '/sale' },
    { name: t.forPartner, to: '/partner' },
    { name: t.projects, to: '/projects' },
    {
      name: t.ccGuide,
      subItems: [
        { name: t.guideSalesOffice, to: '/sales-office' },
        { name: t.guideFaq, to: '/faq' },
        { name: t.guideAfterPurchase, to: '/after-purchase' },
      ],
    },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <TopHeader visible={!isScrolled} />
      <div className={`transition-colors duration-300 ${
        isScrolled
          ? 'bg-white shadow-sm border-b border-slate-200'
          : 'bg-white/80 backdrop-blur-md border-b border-slate-200'
      }`}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Логотип */}
            <Link to="/" className="logo">
              <img
                src={logoDark}
                alt="CaspianCoast Logo"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-all duration-300"
              />
            </Link>

            {/* Десктопная навигация */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8" ref={dropdownRef}>
              {navItems.map(item =>
                item.subItems ? (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 focus:outline-none"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <ul className="absolute left-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg z-50">
                        {item.subItems.map(sub => (
                          <li key={sub.name}>
                            <Link
                              to={sub.to}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-4 py-2 text-slate-700 hover:bg-slate-100"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.to!}
                    className="relative group text-slate-700 hover:text-blue-600"
                  >
                    <span>{item.name}</span>
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-current transition-all group-hover:w-full" />
                  </Link>
                )
              )}

              <a
                href="tel:+77006363631"
                className="hidden lg:flex items-center space-x-2 px-3 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm">+7 (700) 636-36-31</span>
              </a>
            </div>

            {/* Кнопка мобильного меню */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Мобильная навигация */}
          {isMenuOpen && (
            <div className="md:hidden backdrop-blur-md border-t border-slate-200 bg-white/95">
              <div className="py-4 space-y-2">
                {navItems.map(item =>
                  item.subItems ? (
                    <div key={item.name}>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.name ? null : item.name)
                        }
                        className="flex w-full items-center justify-between px-4 py-2 font-medium text-slate-700"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            openDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openDropdown === item.name && (
                        <div className="space-y-1">
                          {item.subItems.map(sub => (
                            <Link
                              key={sub.name}
                              to={sub.to}
                              onClick={() => {
                                setIsMenuOpen(false)
                                setOpenDropdown(null)
                              }}
                              className="block pl-8 pr-4 py-2 rounded-lg hover:bg-slate-100 text-slate-700 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.to!}
                      onClick={() => {
                        setIsMenuOpen(false)
                        setOpenDropdown(null)
                      }}
                      className="block px-4 py-2 rounded-lg hover:bg-slate-100 text-slate-700 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )
                )}
                <div className="px-4 py-2 border-t border-slate-200 mt-4">
                  <a
                    href="tel:+77006363631"
                    className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 mt-3"
                  >
                    <Phone size={16} />
                    <span>+7 (700) 636-36-31</span>
                  </a>
                  <a
                    href="mailto:info@caspiancoast.com"
                    className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 mt-2"
                  >
                    <Mail size={16} />
                    <span>info@caspiancoast.com</span>
                  </a>
                </div>
                <div className="px-4 py-2 border-t border-slate-200 mt-4 space-y-1">
                  {topHeaderLinks(t).map(link =>
                    link.to ? (
                      <Link
                        key={link.label}
                        to={link.to}
                        onClick={() => {
                          setIsMenuOpen(false)
                          setOpenDropdown(null)
                        }}
                        className="flex items-center space-x-2 text-slate-700 hover:text-blue-600"
                      >
                        <link.icon size={16} />
                        <span>{link.label}</span>
                      </Link>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => {
                          setIsMenuOpen(false)
                          setOpenDropdown(null)
                        }}
                        className="flex items-center space-x-2 text-slate-700 hover:text-blue-600"
                      >
                        <span>{link.label}</span>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
