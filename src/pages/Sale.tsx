import { Calendar, MapPin, Building, Home, TrendingUp, ArrowRight, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

function Sale() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filterOptions = [
    { id: 'all', label: 'Все' },
    { id: 'apartments', label: 'Квартиры' },
    { id: 'commercial', label: 'Коммерческая' },
    { id: 'mortgage', label: 'Ипотека' }
  ];
  const promotions = [
    {
      id: 1,
      title: "BIG Bonus | Construction",
      subtitle: "СКИДКИ НА НЕДВИЖИМОСТЬ до 22%",
      endDate: "до 29.09.2025",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-blue-400 to-cyan-300",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Ипотека на коммерческую недвижимость для ИП",
      subtitle: "ваша площадка для роста бизнеса",
      endDate: "до 15.07.2026",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-orange-400 to-red-400",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "West Sales в Атырау",
      subtitle: "КВАРТИРЫ СО СКИДКОЙ ДО 15%",
      endDate: "до 30.09.2025",
      image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-teal-400 to-blue-500",
      textColor: "text-white"
    },
    {
      id: 4,
      title: "Онай Ипотека",
      subtitle: "В твоем — свой подарок",
      endDate: "до 28.02.2026",
      image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-purple-400 to-pink-400",
      textColor: "text-white"
    },
    {
      id: 5,
      title: "BIG Super Bonus",
      subtitle: "ГРАНДИОЗНАЯ СКИДКА до 20%",
      endDate: "до 15.10.2025",
      image: "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-pink-500 to-purple-600",
      textColor: "text-white"
    },
    {
      id: 6,
      title: "ПОКУПАЙТЕ И ЗАРАБАТЫВАЙТЕ",
      subtitle: "В ГОТОВЫЕ КВАРТИРЫ",
      endDate: "до 20.12.2025",
      image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-blue-600 to-indigo-700",
      textColor: "text-white"
    },
    {
      id: 7,
      title: "Halyk ипотека",
      subtitle: "На эксклюзивные условия",
      endDate: "до 31.08.2025",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-green-400 to-teal-500",
      textColor: "text-white"
    },
    {
      id: 8,
      title: "Seaside Residences",
      subtitle: "LUXURY WATERFRONT LIVING",
      endDate: "до 10.11.2025",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-cyan-400 to-blue-600",
      textColor: "text-white"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        {/* Header Section */}
        <section className="bg-white py-12 border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Акции и предложения
              </h1>
            </div>
            
            {/* Filter Dropdown - BI Group Style */}
            <div className="relative inline-block">
              <select 
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {filterOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.label}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Promotions Grid - BI Group Style */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {promotions.map((promo, index) => (
                <div key={promo.id} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  {/* Image with overlay */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading={index < 2 ? "eager" : "lazy"}
                      decoding={index < 2 ? "sync" : "async"}
                      fetchPriority={index < 2 ? "high" : "low"}
                    />
                    {/* Gradient overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
                      {promo.title}
                    </h3>
                    
                    {/* Date with icon */}
                    <div className="flex items-center text-gray-600 text-xs mb-3">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{promo.endDate}</span>
                    </div>
                    
                    {/* Action button */}
                    <button className="flex items-center justify-between w-full text-left group-hover:text-blue-600 transition-colors">
                      <span className="text-sm text-gray-700 group-hover:text-blue-600">Подробнее</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination info - BI Group style */}
            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">показано 8 из 11</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default Sale;