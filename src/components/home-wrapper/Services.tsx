import { Building2, Home, Wrench, Paintbrush, TreePine, Zap } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t.servicesList.commercial.title,
      description: t.servicesList.commercial.description,
      features: t.servicesList.commercial.features
    },
    {
      icon: Home,
      title: t.servicesList.residential.title,
      description: t.servicesList.residential.description,
      features: t.servicesList.residential.features
    },
    {
      icon: Wrench,
      title: t.servicesList.renovation.title,
      description: t.servicesList.renovation.description,
      features: t.servicesList.renovation.features
    },
    {
      icon: Paintbrush,
      title: t.servicesList.design.title,
      description: t.servicesList.design.description,
      features: t.servicesList.design.features
    },
    {
      icon: TreePine,
      title: t.servicesList.sustainable.title,
      description: t.servicesList.sustainable.description,
      features: t.servicesList.sustainable.features
    },
    {
      icon: Zap,
      title: t.servicesList.management.title,
      description: t.servicesList.management.description,
      features: t.servicesList.management.features
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.servicesTitle}
            <span className="text-blue-600"> {t.servicesSubtitle}</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t.servicesDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-slate-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-200">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon size={28} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">{t.readyToStart}</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t.readyToStartDescription}
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
              {t.getFreeConsultation}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;