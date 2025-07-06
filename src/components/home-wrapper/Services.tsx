import { Shield, Target, Truck, Users, RefreshCw, Zap } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Shield,
      title: t.whyChooseUsList.quality.title,        // «Качество и гарантия»
      description: t.whyChooseUsList.quality.description
    },
    {
      icon: Target,
      title: t.whyChooseUsList.accuracy.title,       // «Точность и оперативность»
      description: t.whyChooseUsList.accuracy.description
    },
    {
      icon: Truck,
      title: t.whyChooseUsList.mobility.title,       // «Мобильность и готовность»
      description: t.whyChooseUsList.mobility.description
    },
    {
      icon: Users,
      title: t.whyChooseUsList.experience.title,     // «Огромный опыт работы»
      description: t.whyChooseUsList.experience.description
    },
    {
      icon: RefreshCw,
      title: t.whyChooseUsList.development.title,    // «Постоянное развитие»
      description: t.whyChooseUsList.development.description
    },
    {
      icon: Zap,
      title: t.whyChooseUsList.innovation.title,     // «Смелость и новаторство»
      description: t.whyChooseUsList.innovation.description
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t.whyChooseUsTitle /* «Почему выбирают нас» */}
          </h2>
          {t.whyChooseUsSubtitle && (
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t.whyChooseUsSubtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const NumberLabel = String(idx + 1).padStart(2, '0');
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="group bg-slate-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-200"
              >
                <div className="flex items-center mb-4">
                  <span className="text-5xl font-bold text-blue-600 mr-3">
                    {NumberLabel}
                  </span>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon size={28} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
