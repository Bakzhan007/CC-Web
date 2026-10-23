import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Translation, getTranslation } from '../utils/translations';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const STORAGE_KEY = 'cc-language';
const SUPPORTED = ['kz', 'ru', 'en'];

// Сохранённый выбор → язык браузера → казахский по умолчанию
function detectLanguage(): string {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
  } catch {
    // хранилище недоступно
  }
  const browser = (navigator.language || '').toLowerCase();
  if (browser.startsWith('ru')) return 'ru';
  if (browser.startsWith('en')) return 'en';
  return 'kz';
}

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(detectLanguage);
  const t = getTranslation(language);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // приватный режим / заблокированное хранилище — просто не запоминаем
    }
    // Внутренний код казахского — 'kz', а валидный BCP-47 — 'kk'
    document.documentElement.lang = language === 'kz' ? 'kk' : language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};