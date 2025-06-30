import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import TopHeader from './TopHeader'
// два варианта логотипа: светлый и тёмный
import logoDark  from '../assets/logo/logo-dark-hor.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Обновляем путь для кнопки Home на роутер
  const navItems = [
    { name: t.home,     to: '/' },
    { name: 'Sale', to: '/sale' },
    { name: 'For Partner', to: '#services' },
    { name: t.projects, to: '#projects' },
    { name: 'CC Guide', to: '#contact' },  
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <TopHeader visible={!isScrolled} />
      <div
        className={`transition-colors duration-300 ${
          isScrolled
            ? 'bg-white/95 shadow-md border-b border-slate-200'
            : 'bg-gradient-to-r from-white via-blue-100 to-blue-300 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
           {/* Логотип переключается и ведёт на главную страницу */}
            <Link to="/" className="logo">
              <img
                src={logoDark}
                alt="CaspianCoast Logo"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-all duration-300"
              />
            </Link>

            {/* Десктопная навигация */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`group relative font-medium transition-colors ${
                    isScrolled
                      ? 'text-slate-700 hover:text-blue-600'
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  <span>{item.name}</span>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-current transition-all group-hover:w-full"></span>
                </Link>
              ))}
            
              <a
                href="tel:+77006363631"
               className="hidden lg:flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm">+7 (700) 636-36-31</span>
              </a>
            </div>

            {/* Мобильное меню */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Мобильная навигация */}
          {isMenuOpen && (
            <div
            className="md:hidden backdrop-blur-md border-t border-slate-200 bg-white/95"
            >
              <div className="py-4 space-y-2">
                {navItems.map(item => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="group block px-4 py-2 rounded-lg transition-colors hover:bg-slate-100 text-slate-700"
                  >
                    <span>{item.name}</span>
                    <span className="block h-0.5 w-0 bg-current transition-all group-hover:w-full" />
                  </Link>
                ))}
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
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
