// Уберите ненужный импорт React, TS 17+ с новым JSX-трансформом сам подхватит его
// import React, { useState, useRef, useEffect } from 'react';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';


const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'kz', name: 'Қазақша', flag: '🇰🇿' }
  ];

  const currentLanguage = languages.find(l => l.code === language) || languages[0];

  useEffect(() => {
    if (!language) {
      // Вместо navigator.userLanguage
      const browserLocale = navigator.language;      // e.g. "ru-RU" или "kk-KZ"
      const langCode = browserLocale.split('-')[0];  // "ru" или "kk"

      if (langCode === 'kk' || browserLocale.toLowerCase().includes('kz')) {
        setLanguage('kz');
      } else if (langCode === 'ru' || browserLocale.toLowerCase().includes('ru')) {
        setLanguage('ru');
      } else {
        setLanguage('en');
      }
    }
  }, [language, setLanguage]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative bg-white dark:bg-slate-900 rounded-lg"
    ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(o => !o)}
        className="
        flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium
        text-gray-800 dark:text-white
        transition-colors
        hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <span className="sm:hidden">{currentLanguage.flag}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-50">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${
                language === lang.code
                  ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400'
                  : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
              {language === lang.code && <div className="ml-auto w-2 h-2 bg-brand-600 rounded-full" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
