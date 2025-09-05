import { Home } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-white border-b border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
          <Home className="w-4 h-4" />
          <span>{t.saleBreadcrumbHome}</span>
          <span>/</span>
          <span className="text-gray-900">{t.footerLinks.news}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {t.footerLinks.news}
        </h1>
      </div>
    </section>
  );
};

export default Hero;