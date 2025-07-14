import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

import Hero from '../components/commerce-wrapper/Hero';
import FilterBar from '../components/commerce-wrapper/FilterBar';
import Listings, { Office } from '../components/commerce-wrapper/Listings';

import b1911 from '../assets/layout/Taras/1-9-1-1.svg';
import b1921 from '../assets/layout/Taras/1-9-2-1.svg';
import b2931 from '../assets/layout/Taras/2-9-3-1.svg';
import b1941 from '../assets/layout/Taras/1-9-4-1.svg';
import b1951 from '../assets/layout/Taras/1-9-5-1.svg';

import ilan1 from '../assets/layout/IlanTower/ilan1.svg';
import ilan2 from '../assets/layout/IlanTower/ilan2.svg';
import ilan3 from '../assets/layout/IlanTower/ilan3.svg';
import ilan4 from '../assets/layout/IlanTower/ilan4.svg';
import ilan5 from '../assets/layout/IlanTower/ilan5.svg';


/*
import b1951 from '../assets/layout/Taras/9-block/1-9-5-1.svg';
import b2921 from '../assets/layout/Taras/9-block/2-9-2-1.svg';
import b2931 from '../assets/layout/Taras/9-block/2-9-3-1.svg';
import b29221 from '../assets/layout/Taras/9-block/2-9-22-1.svg';
import b29331 from '../assets/layout/Taras/9-block/2-9-33-1.svg';
import b3921 from '../assets/layout/Taras/9-block/3-9-2-1.svg';
import b3931 from '../assets/layout/Taras/9-block/3-9-3-1.svg';
import b39331 from '../assets/layout/Taras/9-block/3-9-33-1.svg';
import b4921 from '../assets/layout/Taras/9-block/4-9-2-1.svg';
import b4941 from '../assets/layout/Taras/9-block/4-9-4-1.svg';
import b4951 from '../assets/layout/Taras/9-block/4-9-5-1.svg';

import b11211 from '../assets/layout/Taras/12-block/1-12-1-1.svg';
import b11221 from '../assets/layout/Taras/12-block/1-12-2-1.svg';
import b11241 from '../assets/layout/Taras/12-block/1-12-4-1.svg';
import b11251 from '../assets/layout/Taras/12-block/1-12-5-1.svg';
import b112221 from '../assets/layout/Taras/12-block/1-12-22-1.svg';
import b21231 from '../assets/layout/Taras/12-block/2-12-3-1.svg';
import b212221 from '../assets/layout/Taras/12-block/2-12-22-1.svg';
import b212331 from '../assets/layout/Taras/12-block/2-12-33-1.svg';
import b31221 from '../assets/layout/Taras/12-block/3-12-2-1.svg';
import b31231 from '../assets/layout/Taras/12-block/3-12-3-1.svg';
import b312221 from '../assets/layout/Taras/12-block/3-12-22-1.svg';
import b312331 from '../assets/layout/Taras/12-block/3-12-33-1.svg';
import b41221 from '../assets/layout/Taras/12-block/4-12-2-1.svg';
import b41241 from '../assets/layout/Taras/12-block/4-12-4-1.svg';
import b41251 from '../assets/layout/Taras/12-block/4-12-5-1.svg';
*/

const offices: Office[] = [
/*
  { id: 1, city: 'Актау', area: 51.97, price: 55656000, originalPrice: 185520000, reserved: false, project: 'ЖК Taras', block: '1', floor: 9, image: b1911, tags: ['Комфорт+', 'Акции'] },
  { id: 2, city: 'Актау', area: 83.46, price: null, reserved: true, project: 'ЖК Taras', block: '1', floor: 9, image: b1921, tags: [] },
  { id: 3, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '1', floor: 9, image: b1941, tags: ['Комфорт', 'Акции'] },
  { id: 4, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '1', floor: 9, image: b1951, tags: ['Комфорт', 'Акции'] },
  { id: 5, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '2', floor: 9, image: b2921, tags: ['Комфорт', 'Акции'] },
  { id: 6, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '2', floor: 9, image: b2931, tags: ['Комфорт', 'Акции'] },
  { id: 7, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '2', floor: 9, image: b29221, tags: ['Комфорт', 'Акции'] },
  { id: 8, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '2', floor: 9, image: b29331, tags: ['Комфорт', 'Акции'] },
  { id: 9, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '3', floor: 9, image: b3921, tags: ['Комфорт', 'Акции'] },
  { id: 10, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '3', floor: 9, image: b3931, tags: ['Комфорт', 'Акции'] },
  { id: 11, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '3', floor: 9, image: b39331, tags: ['Комфорт', 'Акции'] },
  { id: 12, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '4', floor: 9, image: b4921, tags: ['Комфорт', 'Акции'] },
  { id: 13, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '4', floor: 9, image: b4941, tags: ['Комфорт', 'Акции'] },
  { id: 14, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '4', floor: 9, image: b4951, tags: ['Комфорт', 'Акции'] },
  { id: 15, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '1', floor: 12, image: b11211, tags: ['Комфорт', 'Акции'] },
  { id: 16, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '1', floor: 12, image: b11221, tags: ['Комфорт', 'Акции'] },
  { id: 17, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '1', floor: 12, image: b11241, tags: ['Комфорт', 'Акции'] },
  { id: 18, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '1', floor: 12, image: b11251, tags: ['Комфорт', 'Акции'] },
  { id: 19, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '1', floor: 12, image: b112221, tags: ['Комфорт', 'Акции'] },
  { id: 20, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '2', floor: 12, image: b21231, tags: ['Комфорт', 'Акции'] },
  { id: 21, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '2', floor: 12, image: b212221, tags: ['Комфорт', 'Акции'] },
  { id: 22, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '2', floor: 12, image: b212331, tags: ['Комфорт', 'Акции'] },
  { id: 23, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '3', floor: 12, image: b31221, tags: ['Комфорт', 'Акции'] },
  { id: 24, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '3', floor: 12, image: b31231, tags: ['Комфорт', 'Акции'] },
  { id: 25, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '3', floor: 12, image: b312221, tags: ['Комфорт', 'Акции'] },
  { id: 26, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '3', floor: 12, image: b312331, tags: ['Комфорт', 'Акции'] },
  { id: 27, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '4', floor: 12, image: b41221, tags: ['Комфорт', 'Акции'] },
  { id: 28, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '4', floor: 12, image: b41241, tags: ['Комфорт', 'Акции'] },
  { id: 29, city: 'Актау', area: 166.66, price: 21399000, originalPrice: 71330000, reserved: false, project: 'ЖК Taras', block: '4', floor: 12, image: b41251, tags: ['Комфорт', 'Акции'] }
   */

  //Taras
  { id: 1, city: 'Актау', area: 51.97, price: 450000, reserved: false, project: 'ЖК Taras', block: '1', floor: 9, image: b1911, tags: ['Комфорт+', 'Акции'] },
  { id: 2, city: 'Актау', area: 83.46, price: 450000, reserved: true, project: 'ЖК Taras', block: '1', floor: 9, image: b1921, tags: [] },
  { id: 3, city: 'Актау', area: 124.92, price: 450000, reserved: false, project: 'ЖК Taras', block: '1', floor: 9, image: b2931, tags: ['Комфорт', 'Акции'] },
  { id: 4, city: 'Актау', area: 166.66, price: 450000, reserved: false, project: 'ЖК Taras', block: '1', floor: 9, image: b1941, tags: ['Комфорт', 'Акции'] },
  { id: 5, city: 'Актау', area: 180.35, price: 450000, reserved: false, project: 'ЖК Taras', block: '1', floor: 9, image: b1951, tags: ['Комфорт', 'Акции'] },
  
  //ilanTower
    { id: 1, city: 'Актау', area: 49.25, price: 600000, reserved: false, project: 'ЖК Ilan Towers', block: '1', floor: 9, image: ilan1, tags: ['Комфорт+', 'Акции'] },
  { id: 2, city: 'Актау', area: 73.58, price: 600000, reserved: true, project: 'ЖК Ilan Towers', block: '1', floor: 9, image: ilan2, tags: [] },
  { id: 3, city: 'Актау', area: 109.25, price: 600000, reserved: false, project: 'ЖК Ilan Towers', block: '1', floor: 9, image: ilan3, tags: ['Комфорт', 'Акции'] },
  { id: 4, city: 'Актау', area: 139.04, price: 600000, reserved: false, project: 'ЖК Ilan Towers', block: '1', floor: 9, image: ilan4, tags: ['Комфорт', 'Акции'] },
  { id: 5, city: 'Актау', area: 188.07, price: 600000, reserved: false, project: 'ЖК Ilan Towers', block: '1', floor: 9, image: ilan5, tags: ['Комфорт', 'Акции'] },
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
