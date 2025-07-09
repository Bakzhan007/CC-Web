import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import career from '../../assets/image/career1.jpg';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            {t.careerHeroTitle}
            <span className="block text-blue-600">{t.careerHeroSubtitle}</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-8">
            {t.careerHeroDescription}
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center group">
            {t.careerHeroButton}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="hidden md:block">
          <img
            src={career}
            alt="Our partner agencies at work"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;