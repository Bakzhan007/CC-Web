import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, List, Grid } from 'lucide-react';

import bannerImage from '../assets/image/commercial-banner.jpg';

interface Office {
  id: number;
  city: string;
  area: number;
  price: number | null;
  originalPrice?: number;
  reserved: boolean;
  project: string;
  building: string;
  floor: number;
  entrance: number;
  quarter: string;
  image: string;
  tags: string[];
}

const offices: Office[] = [
  {
    id: 1,
    city: 'Актау',
    area: 371.04,
    price: 55656000,
    originalPrice: 185520000,
    reserved: false,
    project: 'ЖК Ilan Towers',
    building: '2 - ЧО',
    floor: 1,
    entrance: 1,
    quarter: '4 кв. 2023',
    image: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Комфорт+', 'Акции'],
  },
  {
    id: 2,
    city: 'Актау',
    area: 103.53,
    price: null,
    reserved: true,
    project: 'ЖК Caspian Coast',
    building: '2 - ЧО',
    floor: 1,
    entrance: 1,
    quarter: '4 кв. 2023',
    image: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: [],
  },
  {
    id: 3,
    city: 'ЖанаОзен',
    area: 101.9,
    price: 21399000,
    originalPrice: 71330000,
    reserved: false,
    project: 'ЖК Taras',
    building: '1 - 1',
    floor: 3,
    entrance: 3,
    quarter: '3 кв. 2022',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Комфорт', 'Акции'],
  },
];

export default function commerce() {
  const [city, setCity] = useState('Все города Казахстана');
  const [project, setProject] = useState('');
  const [showPromos, setShowPromos] = useState(true);
  const [hideReserved, setHideReserved] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredOffices = offices
    .filter((o) => city === 'Все города Казахстана' || o.city === city)
    .filter((o) => (project ? o.project === project : true))
    .filter((o) => !(hideReserved && o.reserved))
    .filter((o) => (showPromos ? true : o.tags.length === 0));

  let sortedOffices = [...filteredOffices];
  if (sortBy === 'priceAsc') {
    sortedOffices.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
  } else if (sortBy === 'priceDesc') {
    sortedOffices.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
  } else if (sortBy === 'areaAsc') {
    sortedOffices.sort((a, b) => a.area - b.area);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      {/* Hero banner */}

      <div className="relative w-full h-96 mt-[-1px]"> 
        <img
          src={bannerImage}
          alt="Коммерческая недвижимость"
          className="object-cover w-full h-full rounded-b-3xl"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="bg-white p-8 rounded-3xl max-w-md ml-6 shadow-lg">
            <h1 className="text-2xl font-bold mb-4">
              Коммерческая недвижимость — вложение с быстрой окупаемостью
            </h1>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Получить консультацию
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        {/* Filter Bar */}
        <div className="bg-white px-6 lg:px-8 py-4 rounded-2xl shadow space-y-4">
          <div className="flex flex-wrap gap-3 items-center">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="px-3 py-2 border rounded-lg bg-white text-sm shadow-sm"
            >
              <option>Все города Казахстана</option>
              <option>Актау</option>
              <option>ЖанаОзен</option>
            </select>

            <select
              value={project}
              onChange={(e) => setProject(e.target.value)}
              className="px-3 py-2 border rounded-lg bg-white text-sm shadow-sm"
            >
              <option value="">Все проекты</option>
              <option>ЖК Ilan Towers</option>
              <option>ЖК Caspian Coast</option>
              <option>ЖК Taras</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border rounded-lg bg-white text-sm shadow-sm"
            >
              <option value="">Без сортировки</option>
              <option value="priceAsc">Цена ↑</option>
              <option value="priceDesc">Цена ↓</option>
              <option value="areaAsc">Площадь ↑</option>
            </select>

            <button
              onClick={() => setShowPromos((p) => !p)}
              className={`px-3 py-1 rounded-full text-sm border ${showPromos ? 'bg-green-100 border-green-300' : 'bg-white'}`}
            >
              Акции
            </button>
            <button
              onClick={() => setHideReserved((r) => !r)}
              className={`px-3 py-1 rounded-full text-sm border ${hideReserved ? 'bg-gray-200' : 'bg-white'}`}
            >
              Не показывать забронированные
            </button>

            <div className="ml-auto flex gap-3">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Listings */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          {viewMode === 'grid' ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sortedOffices.map((o) => (
                <div
                  key={o.id}
                  className="relative bg-white rounded-2xl shadow hover:shadow-md transition-shadow overflow-hidden"
                >
                  <img
                    src={o.image}
                    alt={`Office ${o.area} m²`}
                    className="w-full h-48 object-cover"
                  />
                  {o.reserved && (
                    <div className="absolute inset-0 bg-white/70 flex items-center justify-center text-lg font-semibold">
                      Забронировано
                    </div>
                  )}
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium">Офис {o.area} м²</h3>
                      <Heart size={18} className="text-gray-400 hover:text-red-500 cursor-pointer" />
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {o.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-baseline gap-2">
                      {o.price != null ? (
                        <>
                          <span className="text-green-600 font-bold text-lg">
                            {o.price.toLocaleString()} ₸
                          </span>
                          {o.originalPrice && (
                            <span className="text-gray-400 line-through text-sm">
                              {o.originalPrice.toLocaleString()} ₸
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="text-gray-600 italic">Цена по запросу</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      {o.project} · {o.building} · {o.floor} этаж · подъезд {o.entrance} · {o.quarter}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {sortedOffices.map((o) => (
                <div
                  key={o.id}
                  className="relative flex bg-white rounded-2xl shadow hover:shadow-md transition-shadow overflow-hidden"
                >
                  <img
                    src={o.image}
                    alt={`Office ${o.area} m²`}
                    className="w-48 h-48 object-cover flex-shrink-0"
                  />
                  {o.reserved && (
                    <div className="absolute inset-0 bg-white/70 flex items-center justify-center text-lg font-semibold">
                      Забронировано
                    </div>
                  )}
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-medium">Офис {o.area} м²</h3>
                        <Heart size={18} className="text-gray-400 hover:text-red-500 cursor-pointer" />
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {o.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">
                        {o.project} · {o.building} · {o.floor} этаж · подъезд {o.entrance} · {o.quarter}
                      </p>
                    </div>
                    <div className="flex items-baseline gap-2">
                      {o.price != null ? (
                        <>
                          <span className="text-green-600 font-bold text-lg">
                            {o.price.toLocaleString()} ₸
                          </span>
                          {o.originalPrice && (
                            <span className="text-gray-400 line-through text-sm">
                              {o.originalPrice.toLocaleString()} ₸
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="text-gray-600 italic">Цена по запросу</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}