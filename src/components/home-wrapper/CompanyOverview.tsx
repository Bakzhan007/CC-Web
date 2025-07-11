import { useLanguage } from '../../contexts/LanguageContext';
import { Building2, Users, Award, Target } from 'lucide-react';

const CompanyOverview = () => {
  const { t } = useLanguage();

  const [area, years, projects, employees] = t.portfolioStats;


  const highlights = [
    {
      icon: Building2,
      title: area.value,
      description: area.label,
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: employees.value,
      description: employees.label,
      color: 'bg-emerald-500'
    },
    {
      icon: Award,
      title: projects.value,
      description: projects.label,
      color: 'bg-purple-500'
    },
    {
      icon: Target,
      title: years.value,
      description: years.label,
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.companyTitle}
            <span className="text-blue-600"> {t.companySubtitle}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.companyDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Main description */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.companyHistoryTitle}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t.companyHistoryP1}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t.companyHistoryP2}
              </p>
              
              <div className="space-y-3">
                {t.companyHistoryPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
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
            {t.companyAdvantagesTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {t.companyAdvantages.map((adv, idx) => {
              const Icon = idx === 0 ? Building2 : idx === 1 ? Users : Award;
              const color = idx === 0 ? 'bg-blue-100' : idx === 1 ? 'bg-emerald-100' : 'bg-purple-100';
              const iconColor = idx === 0 ? 'text-blue-600' : idx === 1 ? 'text-emerald-600' : 'text-purple-600';
              return (
                <div key={idx} className="text-center">
                  <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon size={32} className={iconColor} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{adv.title}</h4>
                  <p className="text-gray-600 text-sm">{adv.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;