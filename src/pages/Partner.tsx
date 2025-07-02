import { useState } from 'react';
import Header from '../components/Header';import Footer from '../components/Footer';
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  DollarSign,
  GraduationCap,
  Handshake,
  CheckCircle,
  ClipboardList
} from 'lucide-react';

const conditions = [
  {
    img: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Кто может стать партнером',
    text: 'Мы ищем партнеров в сфере бытовых услуг: дезинфекция, клининг, дизайн интерьера, изготовление мебели и другие направления.',
  },
  {
    img: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Открыты к сотрудничеству',
    text: 'Мы открыты к любым коммерческим предложениям, маркетинговым инициативам и другим форматам сотрудничества.',
  },
  {
    img: 'https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Только проверенные партнеры',
    text: 'Мы работаем с надежными и качественными поставщиками услуг, чтобы пользователи получали лучший сервис.',
  },
  {
    img: 'https://images.pexels.com/photos/4503700/pexels-photo-4503700.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Гарантия качества',
    text: 'Каждый партнер проходит строгую проверку и обучение стандартам BIG App.',
  },
];

const benefits = [
  {
    icon: Building2,
    title: 'Доступ к крупным проектам',
    description: 'Получайте заказы на масштабные объекты по всей стране.'
  },
  {
    icon: DollarSign,
    title: 'Выгодные условия',
    description: 'Прозрачная система оплаты и долгосрочное сотрудничество.'
  },
  {
    icon: GraduationCap,
    title: 'Обучение и поддержка',
    description: 'Обучаем новым стандартам и помогаем внедрять лучшие практики.'
  },
  {
    icon: CheckCircle,
    title: 'Высокие стандарты',
    description:
      'Мы поддерживаем передовые стандарты качества и прозрачные условия сотрудничества.'
  },
  {
    icon: ClipboardList,
    title: 'Четкие процессы',
    description: 'Пошаговое подключение, понятные требования и сопровождение на всех этапах.'
  },
  {
    icon: Handshake,
    title: 'Надежное партнерство',
    description: 'Мы ценим каждого партнера и нацелены на совместный успех.'
  }
];

export default function Partner() {
  const [page, setPage] = useState(0);
  const visibleCount = 3;
  const totalPages = Math.ceil(conditions.length / visibleCount);


  const prev = () => setPage((p) => Math.max(p - 1, 0));
  const next = () => setPage((p) => Math.min(p + 1, totalPages - 1));

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        {/* Условия и принципы партнерства (слайдер) */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-8 text-center">
              Условия и принципы партнерства
            </h2>

            <div className="relative">
              {/* Обрезаем всё, что выезжает за пределы */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(-${page * (100 / visibleCount)}%)`,
                  }}
                >
                  {conditions.map((c, i) => (
                    <div key={i} className="min-w-[calc(100%/3)] px-2">
                      <div className="bg-slate-50 rounded-2xl p-6 flex flex-col shadow-sm min-h-[350px]">
                        <img
                          src={c.img}
                          alt={c.title}
                          className="w-full h-44 object-cover rounded-xl mb-4"
                        />
                        <h3 className="text-lg font-medium mb-2">{c.title}</h3>
                        <p className="text-sm text-slate-600 flex-grow leading-relaxed">
                          {c.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Навигация: прогресс-бар, счётчик, стрелки */}
              <div className="mt-4 flex items-center justify-end px-4 space-x-3">
                {/* прогрессбар */}
                <div className="hidden sm:flex flex-1 items-center px-4">
                  <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600"
                      style={{
                        width: `${((page + 1) / totalPages) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                {/* счётчик страниц */}
                <span className="text-sm font-medium">
                  {page + 1}/{totalPages}
                </span>

                {/* стрелки */}
                <button
                  onClick={prev}
                  disabled={page === 0}
                  className="p-2 bg-white rounded-full shadow disabled:opacity-50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  disabled={page === totalPages - 1}
                  className="p-2 bg-white rounded-full shadow disabled:opacity-50"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 text-center mb-8">
              Преимущества сотрудничества
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="text-center px-4 py-6 rounded-xl border border-slate-200 shadow-sm"
                >
                  <b.icon className="w-8 h-8 mx-auto text-blue-600 mb-4" />
                  <h3 className="text-lg font-medium mb-2">{b.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
              Хотите стать партнером?
            </h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Свяжитесь с нами по телефону +7 (700) 636-36-31 или отправьте письмо
              на info@caspiancoast.com, и мы обсудим детали сотрудничества.
            </p>
            <a
              href="mailto:info@caspiancoast.com"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Написать письмо
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}