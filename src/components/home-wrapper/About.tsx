import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom'
import home1  from '../../assets/image/home1.jpg';


const About = () => {
  const { t } = useLanguage();

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
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl
                            h-[300px] sm:h-[400px] md:h-[400px] lg:h-[400px]">
              <img
                src={home1}
                alt="CaspianCoast — наши достижения"
                className="w-full h-full object-cover transition-all duration-300"
              />
              {/* градиент-оверлей сверху */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;