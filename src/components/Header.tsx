import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
// два варианта логотипа: светлый и тёмный
import logoLight from '../assets/image/logo-light-hor.png';
import logoDark  from '../assets/image/logo-dark-hor.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: t.home,     href: '#home' },
    { name: t.about,    href: '#about' },
    { name: t.services, href: '#services' },
    { name: t.projects, href: '#projects' },
    { name: t.contact,  href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Логотип переключается */}
          <div className="logo">
            <img
              src={isScrolled ? logoDark : logoLight}
              alt="CaspianCoast Logo"
              className="h-16 w-auto object-contain transition-all duration-300"
            />
          </div>

          {/* Десктопная навигация */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {item.name}
              </a>
            ))}

            <div className="flex items-center space-x-4 ml-8">
              <LanguageSwitcher />
              <a
                href="tel:+77006363631"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isScrolled
                    ? 'text-slate-700 hover:bg-slate-100'
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                <Phone size={16} />
                <span className="text-sm">+7 (700) 636-36-31</span>
              </a>
            </div>
          </div>

          {/* Мобильное меню */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-slate-700 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200">
            <div className="py-4 space-y-2">
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 py-2 border-t border-slate-200 mt-4">
                <LanguageSwitcher />
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
    </header>
  );
};

export default Header;
