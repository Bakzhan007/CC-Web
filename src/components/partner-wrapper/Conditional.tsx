import { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import partner1 from '../../assets/image/partner1.jpg';
import partner2 from '../../assets/image/partner2.jpg';
import partner3 from '../../assets/image/partner3.jpg';
import partner4 from '../../assets/image/partner4.jpg';

const conditions = [
  {
    img: partner1,
    title: 'Кто может стать партнером',
    text:
      'Мы ищем партнеров в сфере бытовых услуг: дезинфекция, клининг, дизайн интерьера, изготовление мебели и другие направления.'
  },
  {
    img: partner3,
    title: 'Открыты к сотрудничеству',
    text:
      'Мы открыты к любым коммерческим предложениям, маркетинговым инициативам и другим форматам сотрудничества.'
  },
  {
    img: partner2,
    title: 'Только проверенные партнеры',
    text:
      'Мы работаем с надежными и качественными поставщиками услуг, чтобы пользователи получали лучший сервис.'
  },
  {
    img: partner4,
    title: 'Гарантия качества',
    text: 'Каждый партнер проходит строгую проверку и обучение стандартам BIG App.'
  }
];

export default function Conditions() {
  const [page, setPage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(
    window.innerWidth < 640 ? 1 : 3
  );

  useEffect(() => {
    const handleResize = () => {
      const count = window.innerWidth < 640 ? 1 : 3;
      setVisibleCount(count);
      setPage(0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(conditions.length / visibleCount);
  const prev = () => setPage((p) => Math.max(p - 1, 0));
  const next = () => setPage((p) => Math.min(p + 1, totalPages - 1));

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-8 text-center">
          Условия и принципы партнерства
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${page * (100 / visibleCount)}%)` }}
            >
              {conditions.map((c, i) => (
                <div
                  key={i}
                  className="px-2"
                  style={{ flex: `0 0 ${100 / visibleCount}%` }}
                >
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
          <div className="mt-4 flex items-center justify-end px-4 space-x-3">
            <div className="hidden sm:flex flex-1 items-center px-4">
              <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600"
                  style={{ width: `${((page + 1) / totalPages) * 100}%` }}
                />
              </div>
            </div>
            <span className="text-sm font-medium">
              {page + 1}/{totalPages}
            </span>
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
  );
}