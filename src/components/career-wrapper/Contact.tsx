import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-900 to-cyan-600 rounded-3xl p-12 lg:p-16 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {t.careerReadyTitle}
            </h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              {t.careerReadyDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                careers@company.com
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                +1 (555) 123-4567
              </button>
            </div>
            <p className="text-blue-200 text-sm">
              {t.careerEqualOpportunity}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;