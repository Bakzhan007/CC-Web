import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import news1 from '../../assets/image/news1.webp';

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
      title: 'CC Event приглашает на торжественное празднование Дня строителя 2025',
      category: 'cc-event',
      date: '9 августа 2025',
      image: news1,
      excerpt: 'Присоединяйтесь к грандиозному празднованию профессионального праздника всех строителей. Награждение лучших специалистов, культурная программа и фуршет.',
      categoryTag: 'CC Event'
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