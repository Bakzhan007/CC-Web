import { Award, Star, Users, Check, Shield } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import agenciesPartner from '../../assets/image/agencies2.webp';

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[600px] items-center">
          
          {/* Left Content */}
          <div className="py-16 sm:py-24 lg:py-12">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                {t.agenciesHeroTitle1 || "Официальные"}
                <br />
                <span className="text-brand-600">{t.agenciesHeroTitle2 || "партнеры"}</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t.agenciesHeroDescription || "Работайте только с проверенными и надежными партнерами в области строительства и недвижимости"}
              </p>
              
              {/* Call to Action Button */}
              <div className="mb-8">
                <button className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Стать партнером
                </button>
              </div>
              
              {/* Benefits Section */}
              <div className="bg-brand-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-brand-600 rounded-full p-2">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900">
                    Более 10 агентств недвижимости уже работают с нами
                  </h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-600 rounded-full p-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-700">Проверенные партнеры с многолетним опытом</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-600 rounded-full p-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-700">Высокие стандарты качества обслуживания</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-600 rounded-full p-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-700">Прозрачные условия сотрудничества</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="relative lg:py-12">
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={agenciesPartner}
                alt="Our partner agencies at work"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Award className="w-4 h-4 text-brand-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900">10+</div>
                      <div className="text-sm text-slate-600">Партнеров</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900">4.8</div>
                      <div className="text-sm text-slate-600">Рейтинг</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Users className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900">1000+</div>
                      <div className="text-sm text-slate-600">Проектов</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}