import { Award, Star, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import agenciesPartner from '../../assets/image/agencies2.jpg';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="absolute inset-0 overflow-hidden">
        <img
          src={agenciesPartner}
          alt="Our partner agencies at work"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {t.agenciesHeroTitle1}
            <span className="block text-blue-300">{t.agenciesHeroTitle2}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.agenciesHeroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-blue-200">
              <Award className="w-5 h-5" />
              <span>{t.agenciesStatPartners}</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
              <Star className="w-5 h-5" />
              <span>{t.agenciesStatRating}</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
              <Users className="w-5 h-5" />
              <span>{t.agenciesStatProjects}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}