import { CheckCircle, Target, Zap, Shield } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t.values.precision.title,
      description: t.values.precision.description
    },
    {
      icon: Zap,
      title: t.values.innovation.title,
      description: t.values.innovation.description
    },
    {
      icon: Shield,
      title: t.values.reliability.title,
      description: t.values.reliability.description
    }
  ];

  const achievements = [
    t.achievements.iso,
    t.achievements.leed,
    t.achievements.safety,
    t.achievements.best
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {t.aboutTitle}
                <span className="block text-blue-600">{t.aboutSubtitle}</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {t.aboutDescription1}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.aboutDescription2}
              </p>
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{t.ourAchievements}</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction team at work"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 border border-slate-100">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">25+</div>
                  <div className="text-sm text-slate-600">{t.years}</div>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">150+</div>
                  <div className="text-sm text-slate-600">{t.projects}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">{t.coreValues}</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.coreValuesDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <value.icon size={32} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;