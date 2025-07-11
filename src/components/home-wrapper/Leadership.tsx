import { useLanguage } from '../../contexts/LanguageContext';
import { User, Calendar, Award } from 'lucide-react';

const Leadership = () => {
  const { t } = useLanguage();

  const leadership = [
    {
      name: "Сайынов Мирас Бесбайулы",
      position: "Основатель ТОО «Caspian Coast»",
      experience: "Более 7 лет опыта в сфере открытия и развития бизнеса",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Сагидоллаев Нурбек Кенжегалиевич",
      position: "Директор ТОО «Caspian Coast»",
      experience: "Более 5 лет опыта работы на руководящей должности в строительной отрасли",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Баймагамбетов Асет Тлепович",
      position: "Заместитель директора по производственным вопросам ТБ, ОТ и ООС",
      experience: "Более 15 лет опыта руководителя в строительной отрасли",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Самиева Гульшат Беккожаевна",
      position: "Заместитель директора по общим вопросам",
      experience: "Более 17 лет опыта работы на руководящей должности в сфере экономики и управления",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c669db7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.leadershipTitle1}
            <span className="text-blue-600"> {t.leadershipTitle2}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.leadershipDescription}
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.leadershipSectionTitle}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <User size={48} className="text-gray-500" />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{leader.name}</h4>
                  <p className="text-blue-600 font-medium mb-3">{leader.position}</p>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>{leader.experience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
              {t.leadershipStats.map((stat, idx) => {
              const color = idx === 0 ? 'text-blue-600' : idx === 1 ? 'text-emerald-600' : 'text-purple-600';
              return (
                <div key={idx}>
                  <div className={`text-4xl font-bold ${color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;