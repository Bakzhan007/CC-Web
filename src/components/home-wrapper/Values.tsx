import { CheckCircle, Lightbulb, Shield } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Values = () => {
  const { t } = useLanguage();
  const values = [
    { icon: CheckCircle, title: t.values.precision.title, description: t.values.precision.description },
    { icon: Lightbulb, title: t.values.innovation.title, description: t.values.innovation.description },
    { icon: Shield, title: t.values.reliability.title, description: t.values.reliability.description }
  ];

  return (
    <section id="values" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.coreValues}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t.coreValuesDescription}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <value.icon size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;