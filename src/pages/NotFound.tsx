import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'

const TEXT: Record<string, { title: string; description: string; home: string }> = {
  kz: { title: 'Бет табылмады', description: 'Сіз іздеген бет жоқ немесе басқа мекенжайға көшірілген.', home: 'Басты бетке' },
  ru: { title: 'Страница не найдена', description: 'Страница, которую вы ищете, не существует или была перемещена.', home: 'На главную' },
  en: { title: 'Page not found', description: 'The page you are looking for does not exist or has been moved.', home: 'Back to home' },
}

function NotFound() {
  const { language } = useLanguage()
  const text = TEXT[language] || TEXT.ru

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 pt-[104px] sm:pt-[112px] lg:pt-[128px] pb-20">
        <div className="text-center">
          <p className="text-7xl font-extrabold text-brand-600 mb-4">404</p>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{text.title}</h1>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">{text.description}</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-xl hover:bg-brand-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            {text.home}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default NotFound
