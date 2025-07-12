import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

import Hero from '../components/commerce-wrapper/Hero';
import FilterBar from '../components/commerce-wrapper/FilterBar';
import Listings, { Office } from '../components/commerce-wrapper/Listings';  

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
    block: '3',
    floor: 1,
    entrance: 1,
    quarter: '4 кв. 2023',
    image:
      'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=800',
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
    block: '2',
    floor: 1,
    entrance: 1,
    quarter: '4 кв. 2023',
    image:
      'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    block: '1',
    floor: 3,
    entrance: 3,
    quarter: '3 кв. 2022',
    image:
      'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Комфорт', 'Акции'],
  },
];

export default function Commerce() {
  const { t } = useLanguage();
  const [city, setCity] = useState('all');
  const [project, setProject] = useState('');
  const [showPromos, setShowPromos] = useState(true);
  const [hideReserved, setHideReserved] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredOffices = offices
    .filter((o) => city === 'all' || o.city === city)
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
      <Hero />
      <main className="flex-1">
        <FilterBar
          city={city}
          setCity={setCity}
          project={project}
          setProject={setProject}
          sortBy={sortBy}
          setSortBy={setSortBy}
          showPromos={showPromos}
          setShowPromos={setShowPromos}
          hideReserved={hideReserved}
          setHideReserved={setHideReserved}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
        <Listings offices={sortedOffices} viewMode={viewMode} />
      </main>
      <Footer />
    </div>
  );
}
