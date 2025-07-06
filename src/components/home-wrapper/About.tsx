import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import home1 from '../../assets/image/home1.jpg';
import home2 from '../../assets/image/home1.jpg';  // ← your second image

const About = () => {
  const { t } = useLanguage();

  const achievements = [
    { icon: '✅', label: t.achievements.iso },
    { icon: '🌍', label: t.achievements.leed },
    { icon: '🦺', label: t.achievements.safety },
    { icon: '🏆', label: t.achievements.best },
  ];

  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      {/* Decorative SVG tint */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-1/2 -translate-x-1/2 opacity-10" width="800" height="800" fill="none">
          <circle cx="400" cy="400" r="400" fill="#3B82F6" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        {/* ── First row: text on left, image1 on right ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {t.aboutTitle}
              <span className="block text-blue-600">{t.aboutSubtitle}</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t.aboutDescription1}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-slate-50 p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                >
                  <span className="text-2xl mr-3">{ach.icon}</span>
                  <span className="text-base font-medium text-gray-800">{ach.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="absolute top-8 left-8 w-[90%] h-full bg-blue-50 rounded-3xl transform rotate-2"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img
                src={home1}
                alt="CaspianCoast — наши достижения"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* ── Second row: image2 on left, text on right ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="absolute top-8 right-8 w-[90%] h-full bg-blue-50 rounded-3xl transform -rotate-2"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img
                src={home2}
                alt="CaspianCoast — дополнительная фотография"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <div className="z-10">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t.aboutDescription2}
            </p>
            <Link
              to="/contact"
              className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
            >
              {t.contactUs || 'Связаться с нами'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
