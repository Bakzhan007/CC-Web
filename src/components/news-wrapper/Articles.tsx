import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  categoryTag: string;
}

const Articles: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'Все' },
    { id: 'cc-event', name: 'CC Event' },
    { id: 'taras', name: 'Taras Development' },
    { id: 'ilan', name: 'Ilan Towers Development' },
  ];

  const articles: Article[] = [
    {
      id: 1,
      title: 'CC Event организует масштабное корпоративное мероприятие для застройщиков Казахстана',
      category: 'cc-event',
      date: '15 декабря 2024',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'CC Event проведет крупнейший форум застройщиков с участием ведущих девелоперских компаний страны.',
      categoryTag: 'CC Event'
    },
    {
      id: 2,
      title: 'Taras Development представляет новую концепцию жилых комплексов премиум-класса',
      category: 'taras',
      date: '10 декабря 2024',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Taras Development анонсировала инновационный подход к проектированию жилых комплексов с уникальной архитектурой.',
      categoryTag: 'Taras Development'
    },
    {
      id: 3,
      title: 'Ilan Towers Development начинает строительство нового небоскреба в центре Алматы',
      category: 'ilan',
      date: '5 декабря 2024',
      image: 'https://images.pexels.com/photos/1578662/pexels-photo-1578662.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Ilan Towers Development объявила о старте строительства 40-этажного бизнес-центра в деловом центре города.',
      categoryTag: 'Ilan Towers'
    },
    {
      id: 4,
      title: 'Taras Development завершает строительство экологичного жилого комплекса Green Valley',
      category: 'taras',
      date: '28 ноября 2024',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Новый проект Taras Development получил сертификат экологической безопасности и готовится к заселению.',
      categoryTag: 'Taras Development'
    },
    {
      id: 5,
      title: 'Ilan Towers Development внедряет систему «умный дом» во все новые проекты',
      category: 'ilan',
      date: '25 ноября 2024',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Компания представила инновационные технологии автоматизации для повышения комфорта жильцов.',
      categoryTag: 'Ilan Towers'
    },
    {
      id: 6,
      title: 'CC Event проводит образовательные семинары для молодых специалистов',
      category: 'cc-event',
      date: '20 ноября 2024',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Серия мастер-классов и семинаров для развития профессиональных навыков в строительной отрасли.',
      categoryTag: 'CC Event'
    },
    {
      id: 7,
      title: 'Taras Development открывает новый офис продаж в ТРЦ Mega Almaty',
      category: 'taras',
      date: '12 ноября 2024',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Удобное расположение нового офиса позволит клиентам получить консультации по всем проектам компании.',
      categoryTag: 'Taras Development'
    },
    {
      id: 8,
      title: 'Ilan Towers Development получает международную награду за архитектурные решения',
      category: 'ilan',
      date: '8 ноября 2024',
      image: 'https://images.pexels.com/photos/1578662/pexels-photo-1578662.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Проект Sky Tower удостоился престижной международной премии в области современной архитектуры.',
      categoryTag: 'Ilan Towers'
    }
  ];

  const filtered =
    activeCategory === 'all'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filtered.map((article, index) => (
            <div
              key={article.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
            >
              {/* Image with overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding={index < 2 ? "sync" : "async"}
                  fetchPriority={index < 2 ? "high" : "low"}
                />
                
                {/* Category tag overlay */}
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                    {article.categoryTag}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="text-xs text-gray-500">
                  {article.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Новости в данной категории не найдены.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      `}</style>
    </section>
  );
};

export default Articles;