import { ArrowRight, Clock, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import sale1 from '../assets/image/sale1.webp';
import sale2 from '../assets/image/sale2.webp';
import ContactModal from '../components/ContactModal';

function Sale() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  // Handle promotion details
  const handlePromoDetails = (promoTitle: string) => {
    // Direct WhatsApp contact with promotion context
    const message = `Здравствуйте! Меня интересует акция "${promoTitle}". Расскажите подробнее об условиях и как принять участие.`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=77006363631&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  const filterOptions = [
    { id: 'all', label: 'Все' },
    { id: 'apartments', label: 'Квартиры' },
    { id: 'commercial', label: 'Коммерческая' },
    { id: 'mortgage', label: 'Ипотека' }
  ];
  
  const promotions = [
    {
      id: 1,
      title: "Специальное предложение",
      subtitle: "ЭКСКЛЮЗИВНЫЕ УСЛОВИЯ НА НЕДВИЖИМОСТЬ",
      endDate: "до 31.12.2025",
      image: sale1,
      gradient: "from-blue-400 to-cyan-300",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Выгодная ипотека",
      subtitle: "ЛЬГОТНЫЕ УСЛОВИЯ КРЕДИТОВАНИЯ",
      endDate: "до 30.06.2026",
      image: sale2,
      gradient: "from-orange-400 to-red-400",
      textColor: "text-white"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        {/* Header Section */}
        <section className="bg-white py-12 border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Акции и предложения
                </h1>
                <p className="text-gray-600">Выгодные условия на недвижимость от CaspianCoast</p>
              </div>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Связаться с нами
              </button>
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

        {/* Promotions Grid - Компактный дизайн */}
        <section className="py-4 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {promotions.map((promo, index) => (
                <div 
                  key={promo.id} 
                  className="group bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Image container */}
                  <div className="relative bg-gray-50 overflow-hidden">
                    <div className="aspect-[5/3] relative">
                      <img
                        src={promo.image}
                        alt={promo.title}
                        className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                        loading={index < 2 ? "eager" : "lazy"}
                        decoding={index < 2 ? "sync" : "async"}
                        fetchPriority={index < 2 ? "high" : "low"}
                      />
                      
                      {/* Subtle accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <div className="p-3 space-y-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                        {promo.title}
                      </h3>
                      <p className="text-gray-500 text-sm font-medium">
                        {promo.subtitle}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-1 border-t border-gray-50">
                      <div className="flex items-center text-gray-400 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{promo.endDate}</span>
                      </div>
                      
                      <button 
                        onClick={() => handlePromoDetails(promo.title)}
                        className="group/btn flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium"
                      >
                        <span className="text-sm mr-2">Подробнее</span>
                        <div className="w-6 h-6 rounded-full bg-gray-100 group-hover/btn:bg-blue-500 flex items-center justify-center transition-all duration-300">
                          <ArrowRight className="w-3 h-3 group-hover/btn:text-white transition-colors" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination info - BI Group style */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">показано 2 из 2</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Связаться по акциям"
      />
    </div>
  );
}

export default Sale;