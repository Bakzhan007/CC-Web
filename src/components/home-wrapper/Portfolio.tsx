import React from 'react';

const stats = [
  { value: '500 000 м²', label: 'построенной площади' },
  { value: '8 лет', label: 'успешной работы на рынке' },
  { value: '50+', label: 'завершённых проектов' },
  { value: '80+', label: 'квалифицированных сотрудников' },
];

const features = [
  'Применение инновационных строительных технологий и материалов',
  'Строгое соблюдение сроков и стандартов качества на всех этапах реализации проектов',
  'Экологически устойчивый подход и использование безопасных материалов',
  'Комплексный сервис: от проектирования и согласования до сдачи объекта «под ключ»',
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-50 py-16">
      {/* Заголовок */}
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          О Нас
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          ТОО «Caspian Coast» — надёжный партнёр в сфере гражданского и промышленного
          строительства, предлагающий комплексный подход «под ключ»
        </p>
      </div>

      {/* Статистика */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-8 flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-600">
                {item.value}
              </p>
              <p className="mt-2 text-base text-gray-600 text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Особенности */}
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside text-gray-600 text-base">
          {features.map((feat, idx) => (
            <li key={idx}>{feat}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
