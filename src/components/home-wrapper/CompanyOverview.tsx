import { useLanguage } from '../../contexts/LanguageContext';
import { Building2, Users, Award, Target } from 'lucide-react';

const CompanyOverview = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Building2,
      title: "500 000+ м²",
      description: "Построенной площади",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "80+",
      description: "Квалифицированных сотрудников",
      color: "bg-emerald-500"
    },
    {
      icon: Award,
      title: "50+",
      description: "Завершенных проектов",
      color: "bg-purple-500"
    },
    {
      icon: Target,
      title: "8 лет",
      description: "Успешной работы на рынке",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            О компании
            <span className="text-blue-600"> Caspian Coast</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ТОО «Caspian Coast» — это динамично развивающаяся строительная компания, 
            специализирующаяся на предоставлении высококачественных услуг в сфере 
            гражданского и промышленного строительства.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Main description */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Наша история
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Основанная в 2017 году, компания за годы своей деятельности успешно 
                реализовала множество проектов, включая жилые комплексы, офисные 
                здания, а также инфраструктурные и промышленные объекты.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Мы гордимся своей репутацией надежного партнера, с которым можно 
                работать над проектами любого масштаба — от жилых комплексов до 
                крупных промышленных объектов.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Применение инновационных строительных технологий</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Строгое соблюдение сроков и стандартов качества</span>
                </div>
                <div className="lex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Комплексный подход: от проектирования до сдачи «под ключ»</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Соблюдение экологических стандартов</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Highlights */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                  <item.icon size={24} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key advantages */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Наши преимущества
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 size={32} className="text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Собственные производственные базы
              </h4>
              <p className="text-gray-600 text-sm">
                Позволяют контролировать качество материалов и снижать затраты
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-emerald-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Квалифицированная команда
              </h4>
              <p className="text-gray-600 text-sm">
                Более 80 опытных специалистов с высокой квалификацией
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Сертифицированное качество
              </h4>
              <p className="text-gray-600 text-sm">
                Соответствие международным стандартам ISO 9001, 14001, 45001
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;