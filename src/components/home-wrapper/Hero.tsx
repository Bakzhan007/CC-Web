import { ChevronRight, Award, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/18862358/pexels-photo-18862358.jpeg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t.heroTitle}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              {t.heroSubtitle}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            {t.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="#contact"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >              <span>{t.startProject}</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="#projects"
              className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
            >
              {t.viewWork}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm">
                <Building2 size={32} className="text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">150+</div>
              <div className="text-slate-300">{t.projectsCompleted}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm">
                <Users size={32} className="text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">25</div>
              <div className="text-slate-300">{t.yearsExperience}</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm">
                <Award size={32} className="text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-slate-300">{t.awardsWon}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;