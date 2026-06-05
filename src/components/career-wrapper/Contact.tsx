import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Отклик на вакансию');
    const body = encodeURIComponent(`Здравствуйте!

Меня заинтересовала возможность работы в компании CaspianCoast.

Информация о себе:
- Имя: 
- Телефон: 
- Должность, которая интересует: 
- Опыт работы: 
- Образование: 

Прошу рассмотреть мою кандидатуру. Готов(а) предоставить дополнительную информацию и пройти собеседование в удобное для вас время.

С уважением,`);
    
    window.open(`mailto:otd.kadr@caspiancoast.kz?subject=${subject}&body=${body}`, '_self');
  };

  const handlePhoneClick = () => {
    window.open('tel:+77006363631', '_self');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-brand-900 to-cyan-600 rounded-2xl p-12 lg:p-16 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {t.careerReadyTitle}
            </h2>
            <p className="text-xl mb-8 text-brand-100 leading-relaxed">
              {t.careerReadyDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={handleEmailClick}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                otd.kadr@caspiancoast.kz
              </button>
              <button 
                onClick={handlePhoneClick}
                className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                +7 (700) 636-36-31
              </button>
            </div>
            <p className="text-brand-200 text-sm">
              {t.careerEqualOpportunity}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;