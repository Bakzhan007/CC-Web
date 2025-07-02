import { useLanguage } from '../../contexts/LanguageContext';

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
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction team at work"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;