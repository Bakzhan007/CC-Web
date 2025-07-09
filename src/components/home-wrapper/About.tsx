import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import home1 from '../../assets/image/home1.jpg';
import home2 from '../../assets/image/home1.jpg';  // ← your second image

const About = () => {
  const { t } = useLanguage();

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
      </div>
    </section>
  );
};

export default About;
