import { Heart, GraduationCap, Plane, Coffee, Award, Shield } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Benefits = () => {
  const { t } = useLanguage();
  const benefitIcons = [Heart, GraduationCap, Plane, Coffee, Award, Shield];
  const benefits = t.careerBenefitsList.map((b, idx) => ({
    icon: benefitIcons[idx],
    title: b.title,
    description: b.description,
  }));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.careerBenefitsTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.careerBenefitsDescription}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;