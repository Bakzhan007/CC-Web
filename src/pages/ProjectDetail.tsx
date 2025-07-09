import React from 'react';

interface ProjectDetailProps {
  project: {
    id: number;
    name: string;
    image: string;
    district: string;
    status: string;
    floors: string;
    apartments: string;
    type: string;
    deadline: string;
    priceRange: string;
    description?: string;
  };
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Шапка детальной страницы */}
      <div className="bg-blue-600 text-white p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 hover:bg-blue-700 px-3 py-2 rounded transition-colors"
          >
            <span>←</span>
            <span>Назад к каталогу</span>
          </button>
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <div></div>
        </div>
      </div>

      {/* Контент детальной страницы */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Основная информация */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Изображение */}
          <div className="space-y-4">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            {/* Галерея (заглушка) */}
            <div className="grid grid-cols-4 gap-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-full h-20 bg-gray-200 rounded hover:bg-gray-300 transition-colors cursor-pointer"></div>
              ))}
            </div>
          </div>

          {/* Детальная информация */}
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Основная информация</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="font-medium">Район:</span> {project.district}</div>
                <div><span className="font-medium">Статус:</span> {project.status}</div>
                <div><span className="font-medium">Этажность:</span> {project.floors}</div>
                <div><span className="font-medium">Квартир:</span> {project.apartments}</div>
                <div><span className="font-medium">Тип:</span> {project.type}</div>
                <div><span className="font-medium">Срок сдачи:</span> {project.deadline}</div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Ценовой диапазон</h3>
              <div className="text-2xl font-bold text-blue-600">{project.priceRange}</div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Особенности</h3>
              <ul className="space-y-1 text-sm">
                <li>• Закрытая территория</li>
                <li>• Детские площадки</li>
                <li>• Парковка</li>
                <li>• Лифт</li>
                <li>• Консьерж</li>
                <li>• Видеонаблюдение</li>
                <li>• Зоны отдыха</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Описание */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Описание проекта</h2>
          <p className="text-gray-600 leading-relaxed">
            {project.description || 
              `${project.name} - это современный жилой комплекс, расположенный в престижном районе ${project.district}. 
              Проект предлагает комфортное проживание с развитой инфраструктурой и высоким уровнем безопасности. 
              Квартиры отличаются продуманной планировкой и качественной отделкой. Комплекс включает в себя 
              все необходимое для комфортной жизни: детские площадки, зоны отдыха, парковочные места и многое другое.`
            }
          </p>
        </div>

        {/* Планировки */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Планировки квартир</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['1-комнатная', '2-комнатная', '3-комнатная'].map((type, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-2">{type}</h3>
                <div className="w-full h-32 bg-gray-200 rounded mb-2 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">План квартиры</span>
                </div>
                <p className="text-sm text-gray-600">Площадь: {40 + index * 20}-{60 + index * 20} м²</p>
                <p className="text-sm font-medium text-blue-600">от {(25 + index * 10)} млн ₸</p>
                <button className="mt-2 text-blue-600 text-sm hover:underline">
                  Подробнее
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Инфраструктура */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Инфраструктура</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Школы', icon: '🏫' },
              { name: 'Детские сады', icon: '🏛️' },
              { name: 'Магазины', icon: '🛒' },
              { name: 'Медицина', icon: '🏥' },
              { name: 'Парки', icon: '🌳' },
              { name: 'Спорт', icon: '⚽' },
              { name: 'Транспорт', icon: '🚌' },
              { name: 'Кафе/Рестораны', icon: '🍽️' }
            ].map((item, index) => (
              <div key={index} className="text-center p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <p className="text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Локация */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Расположение</h2>
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📍</div>
              <span className="text-gray-500">Карта района {project.district}</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center p-2 bg-gray-50 rounded">
              <div className="font-medium">До центра</div>
              <div className="text-gray-600">15 мин</div>
            </div>
            <div className="text-center p-2 bg-gray-50 rounded">
              <div className="font-medium">Метро</div>
              <div className="text-gray-600">5 мин</div>
            </div>
            <div className="text-center p-2 bg-gray-50 rounded">
              <div className="font-medium">Школа</div>
              <div className="text-gray-600">3 мин</div>
            </div>
            <div className="text-center p-2 bg-gray-50 rounded">
              <div className="font-medium">Парк</div>
              <div className="text-gray-600">2 мин</div>
            </div>
          </div>
        </div>

        {/* Застройщик */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">О застройщике</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">BI Group</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Надежная строительная компания с многолетним опытом работы на рынке недвижимости. 
                Специализируется на строительстве качественного жилья в престижных районах города.
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">Год основания:</span> 2010</div>
              <div><span className="font-medium">Построенных проектов:</span> 25+</div>
              <div><span className="font-medium">Квартир сдано:</span> 10,000+</div>
              <div><span className="font-medium">Рейтинг:</span> ⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>

        {/* Контакты */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Контакты отдела продаж</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <p className="font-medium">Телефон:</p>
              <p className="text-blue-600">+7 (727) 123-45-67</p>
            </div>
            <div>
              <p className="font-medium">Email:</p>
              <p className="text-blue-600">sales@bigroup.kz</p>
            </div>
            <div>
              <p className="font-medium">Адрес офиса:</p>
              <p className="text-gray-600">ул. Абая, 150</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Записаться на просмотр
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              WhatsApp
            </button>
            <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
              Получить презентацию
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;