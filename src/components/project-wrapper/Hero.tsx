import { useLanguage } from '../../contexts/LanguageContext';
import { Building2, MapPin, Calendar, TrendingUp, Award, Target, Users } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Dynamic geometric shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white rotate-45 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 border-2 border-white rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-white/10 rotate-45"></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main content */}
        <div className="py-16 lg:py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t.projectsHeroTitle1} <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{t.projectsHeroTitle2}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.projectsHeroDescription}
            </p>
          </div>
          
          {/* Creative stats layout */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Stats cards with creative design */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 transform group-hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <Award className="w-8 h-8 text-blue-600" />
                    <div className="text-right">
                      <div className="text-4xl font-bold text-gray-900">15+</div>
                      <div className="text-sm text-gray-500 font-medium">{t.projectsStatsProjects}</div>
                    </div>
                  </div>
                  <div className="text-gray-700 font-medium">{t.projectsStatsCompletedProjects}</div>
                  <div className="w-full h-1 bg-blue-100 rounded-full mt-3">
                    <div className="w-4/5 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 transform group-hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <MapPin className="w-8 h-8 text-purple-600" />
                    <div className="text-right">
                      <div className="text-4xl font-bold text-gray-900">2</div>
                      <div className="text-sm text-gray-500 font-medium">{t.projectsStatsCities}</div>
                    </div>
                  </div>
                  <div className="text-gray-700 font-medium">{t.projectsStatsCitiesPresence}</div>
                  <div className="w-full h-1 bg-purple-100 rounded-full mt-3">
                    <div className="w-2/5 h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl rotate-2 group-hover:rotate-4 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 transform group-hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <Target className="w-8 h-8 text-green-600" />
                    <div className="text-right">
                      <div className="text-4xl font-bold text-gray-900">8</div>
                      <div className="text-sm text-gray-500 font-medium">{t.projectsStatsYears}</div>
                    </div>
                  </div>
                  <div className="text-gray-700 font-medium">{t.projectsStatsYearsExperience}</div>
                  <div className="w-full h-1 bg-green-100 rounded-full mt-3">
                    <div className="w-5/6 h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-8 right-1/3 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}