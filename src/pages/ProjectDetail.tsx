import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Droplet,
  Zap,
  Thermometer,
  Building2,
  Users,
  Box,
  MapPin
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import gallery1 from '../assets/image/ilanTower1.jpg';
import gallery2 from '../assets/image/home1.jpg';
import gallery3 from '../assets/image/beibitshilik1.jpg';

interface Project {
  id: number;
  name: string;
  image: string;
  district: string;
  status: string;
  floors: string;
  blocks: string;
  type: string;
  deadline: string;
  priceRange: string;
  description?: string;
  images?: string[];
  videoUrl?: string;
}

// Helper: turn any YouTube URL into an embed URL
function getEmbedUrl(url?: string) {
  if (!url) return '';
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^?&]+)/
  );
  return match
    ? `https://www.youtube.com/embed/${match[1]}`
    : url;
}

const FeatureCard: React.FC<{
  title: string;
  value: string;
  icon: React.ReactNode;
}> = ({ title, value, icon }) => (
  <div className="flex items-center space-x-3 bg-white rounded-xl shadow p-4">
    <div className="text-blue-600">{icon}</div>
    <div>
      <div className="text-sm text-gray-500">{title}</div>
      <div className="font-medium">{value}</div>
    </div>
  </div>
);

const AdvantageCard: React.FC<{ title: string; icon: React.ReactNode }> = ({
  title,
  icon
}) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="text-4xl mb-2 text-green-600">{icon}</div>
    <div className="text-sm font-medium">{title}</div>
  </div>
);

export default function ProjectDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { project?: Project } | undefined;
  const p = state?.project;

  if (!p) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center pt-[104px] sm:pt-[112px] lg:pt-[128px] p-6">
          <p className="mb-4 text-gray-700">Проект не найден</p>
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:underline"
          >
            ← Назад
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  const galleryImages = p.images ?? [gallery1, gallery2, gallery3];
  // use helper to build embed URL
  const videoUrl = getEmbedUrl(
    p.videoUrl || 'https://youtu.be/jzjwXM5ZoIA?si=faPu9jPw7MyKg-1R&start=3'
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        {/* Hero */}
        <div
          className="relative h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${p.image})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute bottom-8 left-6 text-white">
            <h1 className="text-4xl lg:text-5xl font-bold">{p.name}</h1>
            <p className="mt-2 text-lg">
              Премиум-жилой комплекс на первой береговой линии моря, {p.district}
            </p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition">
              Записаться на просмотр
            </button>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="absolute top-6 left-6 text-white bg-black/30 hover:bg-black/50 px-3 py-2 rounded"
          >
            ← Назад
          </button>
        </div>

        {/* Quick Facts */}
        <section className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Этажность" value={p.floors} icon={<Building2 />} />
          <FeatureCard title="Блоки" value={p.blocks} icon={<Box />} />
          <FeatureCard title="Класс проекта" value={p.type} icon={<Users />} />
          <FeatureCard title="Лифты" value="Высокоскоростные" icon={<Zap />} />
          <FeatureCard title="Паркинг" value="Подземный" icon={<Thermometer />} />
          <FeatureCard title="Срок сдачи" value={p.deadline} icon={<MapPin />} />
        </section>

        {/* Price */}
        <section className="container mx-auto px-6 mb-12">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <div className="text-gray-500">Ценовой диапазон</div>
            <div className="mt-2 text-3xl font-bold text-blue-600">
              {p.priceRange}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="container mx-auto px-6 mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
            Видео о проекте
          </h2>
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-xl"
              src={videoUrl}
              title="Project video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        {/* Gallery */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
            Фотогалерея
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${p.name} ${i + 1}`}
                className="w-full h-40 object-cover rounded-lg shadow"
              />
            ))}
          </div>
        </section>

        {/* Advantages */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
              Преимущества комплекса
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              <AdvantageCard title="Резервуар для питьевой воды" icon={<Droplet />} />
              <AdvantageCard title="Электрогенератор" icon={<Zap />} />
              <AdvantageCard title="Автономное отопление" icon={<Thermometer />} />
              <AdvantageCard title="Потолки 3.2 м" icon={<Building2 />} />
              <AdvantageCard title="Собственная детская площадка" icon={<Users />} />
              <AdvantageCard title="Развитая инфраструктура" icon={<MapPin />} />
            </div>
          </div>
        </section>

      {/* Concept */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Концепция</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="font-medium mb-2">Уникальное место</h3>
            <p className="text-gray-600 text-sm">
              На берегу Каспийского моря, с видом на бескрайние воды и роскошные закаты.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Своя территория</h3>
            <p className="text-gray-600 text-sm">
              Закрытая охраняемая зона с детскими и спортивными площадками.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Дизайн и архитектура</h3>
            <p className="text-gray-600 text-sm">
              Переменная этажность, колонная галерея у входа, современный фасад.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Уникальная концепция</h3>
            <p className="text-gray-600 text-sm">
              Всё продумано для спокойной и комфортной жизни внутри комплекса.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Позитивная среда</h3>
            <p className="text-gray-600 text-sm">
              Места для прогулок, набережная, зоны для спорта и отдыха.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Гармония</h3>
            <p className="text-gray-600 text-sm">
              Виды города и моря из окон подарят ощущение уюта и гармонии.
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">О проекте</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          {p.description ??
            `“ILAN TOWER” расположен на первой береговой линии с шикарным обзором на Каспийское море в 15 микрорайоне города Актау. Застройщик — ТОО "Caspian Coast", с 2017 года известный качественными ЖК «Caspian Coast», «Taras», «Beibitshilik» и другими. Проект бизнес-класса сочетает престиж района, современную архитектуру и продуманный подход к планировкам и дизайну.`}
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm mt-4">
          <li>Подземный паркинг на 100 машиномест</li>
          <li>Система видеонаблюдения 24/7</li>
          <li>Закрытый двор без машин и посторонних</li>
          <li>Рядом расположены школа, магазины и набережная</li>
        </ul>
      </section>

      {/* Contacts */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Контакты отдела продаж</h2>
          <p className="mb-2">+7 700 63 63 631</p>
          <p className="mb-4">sales@caspiancoast.kz</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Записаться на просмотр
          </button>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
