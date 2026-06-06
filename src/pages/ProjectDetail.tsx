import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Droplet,
  Zap,
  Thermometer,
  Building2,
  Users,
  MapPin,
  ArrowLeft,
  Play,
  Home,
  TreePine,
  ChevronLeft,
  ChevronRight,
  X,
  Target,
  Maximize,
  Layers,
  Calendar,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

// Локальные переводы страницы ЖК (UI-каркас), RU / KZ / EN
const PD: Record<string, Record<string, string>> = {
  ru: {
    back: 'Назад', bookViewing: 'Записаться на просмотр', watchVideo: 'Смотреть видео',
    chipLocation: 'Местоположение', chipHeight: 'Высота', chipBlocks: 'Корпуса',
    advantages: 'Преимущества', philosophy: 'Философия проекта',
    tour360: 'Виртуальный тур 360°', tourHint: 'Используйте мышь или сенсорный экран для навигации по виртуальному туру', fullscreen: 'Открыть в полном экране',
    gallery: 'Галерея', galleryPhotos: 'Фотографии проекта',
    videoTitle: 'Видеопрезентация проекта', videoSubtitle: 'Погрузитесь в атмосферу будущего дома',
    uniquePlace: 'Уникальное место', ownTerritory: 'Своя территория', design: 'Дизайн и архитектура',
    location: 'Местоположение', address: 'Адрес', notFound: 'Проект не найден', goBack: 'Вернуться назад',
    advWater: 'Резервуар для питьевой воды', advWaterDesc: 'Автономное водоснабжение качественной питьевой водой',
    advGen: 'Электрогенератор', advGenDesc: 'Бесперебойное электроснабжение 24/7',
    advBoiler: 'Котел автономного отопления', advBoilerDesc: 'Индивидуальная система отопления для комплекса',
    advCeiling: 'Высокие 3,20 метра потолки', advCeilingDesc: 'Потолки высотой 3,2 метра создают ощущение простора',
    advPlay: 'Собственная детская площадка', advPlayDesc: 'Современная и безопасная игровая зона для детей',
    advInfra: 'Развитая инфраструктура', advInfraDesc: 'Рядом школы, магазины, набережная и развлечения',
    philUnique: 'Уникальная концепция', philPositive: 'Позитивная среда', philHarmony: 'Гармоничное пространство',
    infraConvenient: 'Удобное расположение', infraFinishing: 'Качественная отделка',
    name: 'Имя', phone: 'Телефон', email: 'Email', message: 'Сообщение', submit: 'Отправить заявку',
  },
  kz: {
    back: 'Артқа', bookViewing: 'Қарауға жазылу', watchVideo: 'Видео көру',
    chipLocation: 'Орналасуы', chipHeight: 'Биіктігі', chipBlocks: 'Корпустар',
    advantages: 'Артықшылықтар', philosophy: 'Жоба философиясы',
    tour360: '360° виртуалды тур', tourHint: 'Виртуалды турда жылжу үшін тінтуірді немесе сенсорлық экранды пайдаланыңыз', fullscreen: 'Толық экранда ашу',
    gallery: 'Галерея', galleryPhotos: 'Жоба фотолары',
    videoTitle: 'Жобаның бейнетаныстырылымы', videoSubtitle: 'Болашақ үйдің атмосферасына еніңіз',
    uniquePlace: 'Бірегей орын', ownTerritory: 'Жеке аумақ', design: 'Дизайн және сәулет',
    location: 'Орналасуы', address: 'Мекенжай', notFound: 'Жоба табылмады', goBack: 'Артқа қайту',
    advWater: 'Ауызсу қоймасы', advWaterDesc: 'Сапалы ауызсумен автономды қамтамасыз ету',
    advGen: 'Электр генераторы', advGenDesc: '24/7 үздіксіз электрмен қамтамасыз ету',
    advBoiler: 'Автономды жылыту қазандығы', advBoilerDesc: 'Кешенге арналған жеке жылыту жүйесі',
    advCeiling: 'Биік 3,20 метр төбелер', advCeilingDesc: '3,2 метр биіктіктегі төбелер кеңдік сезімін тудырады',
    advPlay: 'Жеке балалар алаңы', advPlayDesc: 'Балаларға арналған заманауи әрі қауіпсіз ойын аймағы',
    advInfra: 'Дамыған инфрақұрылым', advInfraDesc: 'Жақын маңда мектептер, дүкендер, жағалау және ойын-сауық',
    philUnique: 'Бірегей тұжырымдама', philPositive: 'Позитивті орта', philHarmony: 'Үйлесімді кеңістік',
    infraConvenient: 'Ыңғайлы орналасу', infraFinishing: 'Сапалы әрлеу',
    name: 'Аты', phone: 'Телефон', email: 'Email', message: 'Хабарлама', submit: 'Өтінім жіберу',
  },
  en: {
    back: 'Back', bookViewing: 'Book a viewing', watchVideo: 'Watch video',
    chipLocation: 'Location', chipHeight: 'Height', chipBlocks: 'Blocks',
    advantages: 'Advantages', philosophy: 'Project philosophy',
    tour360: '360° virtual tour', tourHint: 'Use your mouse or touch screen to navigate the virtual tour', fullscreen: 'Open fullscreen',
    gallery: 'Gallery', galleryPhotos: 'Project photos',
    videoTitle: 'Project video presentation', videoSubtitle: 'Immerse yourself in your future home',
    uniquePlace: 'Unique location', ownTerritory: 'Private grounds', design: 'Design & architecture',
    location: 'Location', address: 'Address', notFound: 'Project not found', goBack: 'Go back',
    advWater: 'Drinking water reservoir', advWaterDesc: 'Autonomous supply of quality drinking water',
    advGen: 'Power generator', advGenDesc: 'Uninterrupted power supply 24/7',
    advBoiler: 'Autonomous heating boiler', advBoilerDesc: 'Individual heating system for the complex',
    advCeiling: 'High 3.20 m ceilings', advCeilingDesc: '3.2 m ceilings create a sense of space',
    advPlay: 'Own playground', advPlayDesc: 'Modern and safe play area for children',
    advInfra: 'Developed infrastructure', advInfraDesc: 'Schools, shops, waterfront and entertainment nearby',
    philUnique: 'Unique concept', philPositive: 'Positive environment', philHarmony: 'Harmonious space',
    infraConvenient: 'Convenient location', infraFinishing: 'Quality finishing',
    name: 'Name', phone: 'Phone', email: 'Email', message: 'Message', submit: 'Submit request',
  },
};

type PKey = 'ilan' | 'taras' | 'caspian';
// Описания под каждый ЖК (язык → поле → проект)
const PARA: Record<string, Record<string, Record<PKey, string>>> = {
  ru: {
    heroDesc: {
      ilan: 'Премиум-комплекс на первой береговой линии моря, 15 мкр.',
      taras: 'Комфортный жилой комплекс рядом с набережной, 7а мкр.',
      caspian: 'Жилой комплекс с развитой инфраструктурой, 3 мкр.',
    },
    philUniqueDesc: {
      ilan: 'Уникальный жилой комплекс позволяет наслаждаться спокойствием — ведь в «Ilan Towers» есть всё для комфортной жизни.',
      taras: 'Уникальный жилой комплекс «TARAS» обеспечивает спокойствие и комфорт для жизни каждого его жителя.',
      caspian: 'Уникальный жилой комплекс позволяет наслаждаться спокойствием — ведь в «Caspian Coast» есть всё для комфортной жизни.',
    },
    philPositiveDesc: {
      ilan: 'Места для прогулок, набережная, детская и спортивная площадки создают позитивную среду в жилом комплексе.',
      taras: 'Каждый житель сможет наслаждаться прогулками, уютной набережной и детскими и спортивными площадками, создающими положительную атмосферу.',
      caspian: 'Места для прогулок, набережная, детская и спортивная площадки создают позитивную среду в жилом комплексе.',
    },
    philHarmonyDesc: {
      ilan: 'Из окон дома вы сможете ежедневно наслаждаться видами города и потрясающими закатами у моря, постоянно находясь в гармонии с собой и своей семьёй.',
      taras: 'Из окон вашего дома вы будете наслаждаться видами города и впечатляющими закатами над морем — это поможет вам и вашей семье ощущать гармонию.',
      caspian: 'Из окон дома вы сможете ежедневно наслаждаться видами города и потрясающими закатами у моря, постоянно находясь в гармонии с собой и своей семьёй.',
    },
    statement: {
      ilan: 'Ilan Towers — премиум жилой комплекс, который сочетает в себе современные технологии и комфорт высочайшего уровня.',
      taras: 'Taras — комфортный жилой комплекс, созданный для тех, кто ценит качество жизни и удобство расположения.',
      caspian: 'Caspian Coast — строительная компания с многолетним опытом создания качественных жилых комплексов в Актау.',
    },
    uniqueBody: {
      ilan: 'Уникальное расположение жилого комплекса «Ilan Towers» в 15-м микрорайоне Актау, на первой береговой линии моря. Адрес: 15-й микрорайон, 6, Актау. Здесь каждый день начинается с видом на бескрайние воды Каспийского моря, а вечера украшают роскошные закаты.',
      taras: 'Расположенный вдоль берега моря, жилой комплекс «TARAS» предлагает уникальные виды на воду и великолепные закаты, делая каждый день особенным и незабываемым.',
      caspian: 'Уникальное расположение жилого комплекса «Caspian Coast» в 3-м микрорайоне Актау с развитой инфраструктурой. Удобное расположение обеспечивает лёгкий доступ ко всем городским услугам и достопримечательностям.',
    },
    ownBody: {
      ilan: 'Вы сможете вести активный образ жизни, не выходя за пределы жилого комплекса. На его территории будут расположены детские и спортивные площадки.',
      taras: 'В рамках жилого комплекса вы сможете вести активный образ жизни благодаря детским и спортивным площадкам прямо на его территории. «TARAS» расположен в 7А микрорайоне, где вы сможете наслаждаться близостью к морю и великолепными видами, создающими неповторимую атмосферу.',
      caspian: 'Вы сможете вести активный образ жизни, не выходя за пределы жилого комплекса. На его территории будут расположены детские и спортивные площадки.',
    },
    designBody: {
      ilan: 'Переменная этажность комплекса от 2 до 15 этажей, колонная галерея у входа, разная фактура и цвет фасадов создают ощущение лёгкости, динамичности и современности всего жилого комплекса.',
      taras: 'Жилой комплекс «Taras» воплощает современный стиль и утончённый дизайн фасадных панелей. Эргономичная планировка жилых помещений создаёт комфорт и удобство, идеально соответствуя современным потребностям жителей.',
      caspian: 'Переменная этажность комплекса от 2 до 15 этажей, колонная галерея у входа, разная фактура и цвет фасадов создают ощущение лёгкости, динамичности и современности всего жилого комплекса.',
    },
  },
  kz: {
    heroDesc: {
      ilan: 'Теңіз жағалауының бірінші желісіндегі премиум-кешен, 15 ш/а.',
      taras: 'Жағалауға жақын ыңғайлы тұрғын кешені, 7а ш/а.',
      caspian: 'Дамыған инфрақұрылымы бар тұрғын кешені, 3 ш/а.',
    },
    philUniqueDesc: {
      ilan: 'Бірегей тұрғын кешені тыныштықты сезінуге мүмкіндік береді — себебі «Ilan Towers»-та жайлы өмір сүруге барлығы бар.',
      taras: '«TARAS» тұрғын кешені әрбір тұрғынға тыныштық пен өмір сүруге жайлылық сыйлайды.',
      caspian: 'Бірегей тұрғын кешені тыныштықты сезінуге мүмкіндік береді — себебі «Caspian Coast»-та жайлы өмір сүруге барлығы бар.',
    },
    philPositiveDesc: {
      ilan: 'Серуендеуге арналған орындар, жағалау, балалар және спорт алаңдары кешенде позитивті орта қалыптастырады.',
      taras: 'Әрбір тұрғын серуендеуден, жайлы жағалаудан, балалар мен спорт алаңдарынан ләззат алып, жағымды атмосфера сезінеді.',
      caspian: 'Серуендеуге арналған орындар, жағалау, балалар және спорт алаңдары кешенде позитивті орта қалыптастырады.',
    },
    philHarmonyDesc: {
      ilan: 'Үйдің терезесінен қала көріністері мен теңіздегі тамаша күн батуын күн сайын тамашалап, өзіңізбен және отбасыңызбен үйлесімде боласыз.',
      taras: 'Үйіңіздің терезесінен қала көріністері мен теңіз үстіндегі әсем күн батуын тамашалайсыз — бұл сізге және отбасыңызға үйлесім сезінуге көмектеседі.',
      caspian: 'Үйдің терезесінен қала көріністері мен теңіздегі тамаша күн батуын күн сайын тамашалап, өзіңізбен және отбасыңызбен үйлесімде боласыз.',
    },
    statement: {
      ilan: 'Ilan Towers — заманауи технологиялар мен жоғары деңгейдегі жайлылықты үйлестіретін премиум тұрғын кешені.',
      taras: 'Taras — өмір сапасы мен орналасу ыңғайлылығын бағалайтындарға арналған жайлы тұрғын кешені.',
      caspian: 'Caspian Coast — Ақтауда сапалы тұрғын кешендерін салуда көпжылдық тәжірибесі бар құрылыс компаниясы.',
    },
    uniqueBody: {
      ilan: '«Ilan Towers» тұрғын кешенінің Ақтаудың 15-ші шағын ауданындағы, теңіздің бірінші жағалау желісіндегі бірегей орналасуы. Мекенжайы: 15-ші шағын аудан, 6, Ақтау. Мұнда әр күн Каспий теңізінің шексіз суларына көзқараспен басталып, кештерді әсем күн батулары әрлейді.',
      taras: 'Теңіз жағасында орналасқан «TARAS» тұрғын кешені суға бірегей көріністер мен керемет күн батуларын ұсынып, әр күнді ерекше әрі ұмытылмас етеді.',
      caspian: '«Caspian Coast» тұрғын кешенінің Ақтаудың 3-ші шағын ауданындағы дамыған инфрақұрылымы бар бірегей орналасуы. Ыңғайлы орналасу барлық қалалық қызметтер мен көрікті жерлерге оңай қол жеткізуді қамтамасыз етеді.',
    },
    ownBody: {
      ilan: 'Тұрғын кешеннен шықпай-ақ белсенді өмір салтын ұстана аласыз. Оның аумағында балалар мен спорт алаңдары орналасады.',
      taras: 'Тұрғын кешен аясында оның аумағындағы балалар мен спорт алаңдарының арқасында белсенді өмір салтын ұстана аласыз. «TARAS» 7А шағын ауданында орналасқан, мұнда теңізге жақындықтан және қайталанбас атмосфера жасайтын тамаша көріністерден ләззат аласыз.',
      caspian: 'Тұрғын кешеннен шықпай-ақ белсенді өмір салтын ұстана аласыз. Оның аумағында балалар мен спорт алаңдары орналасады.',
    },
    designBody: {
      ilan: 'Кешеннің 2-ден 15 қабатқа дейінгі айнымалы қабаттылығы, кіреберістегі бағаналы галерея, фасадтардың әртүрлі фактурасы мен түсі бүкіл тұрғын кешенге жеңілдік, динамикалық және заманауилық сезімін береді.',
      taras: '«Taras» тұрғын кешені заманауи стиль мен фасад панельдерінің талғампаз дизайнын бейнелейді. Тұрғын бөлмелердің эргономикалық жоспарлауы тұрғындардың заманауи қажеттіліктеріне сай жайлылық пен ыңғайлылық жасайды.',
      caspian: 'Кешеннің 2-ден 15 қабатқа дейінгі айнымалы қабаттылығы, кіреберістегі бағаналы галерея, фасадтардың әртүрлі фактурасы мен түсі бүкіл тұрғын кешенге жеңілдік, динамикалық және заманауилық сезімін береді.',
    },
  },
  en: {
    heroDesc: {
      ilan: 'A premium complex on the seafront, district 15.',
      taras: 'A comfortable residential complex near the waterfront, district 7a.',
      caspian: 'A residential complex with developed infrastructure, district 3.',
    },
    philUniqueDesc: {
      ilan: 'This unique complex lets you enjoy tranquility — «Ilan Towers» has everything for comfortable living.',
      taras: 'The «TARAS» complex brings peace and comfort to the life of every resident.',
      caspian: 'This unique complex lets you enjoy tranquility — «Caspian Coast» has everything for comfortable living.',
    },
    philPositiveDesc: {
      ilan: 'Walking areas, a waterfront, and children’s and sports grounds create a positive environment within the complex.',
      taras: 'Every resident can enjoy walks, a cozy waterfront and children’s and sports grounds that create a positive atmosphere.',
      caspian: 'Walking areas, a waterfront, and children’s and sports grounds create a positive environment within the complex.',
    },
    philHarmonyDesc: {
      ilan: 'From your home’s windows you can enjoy city views and breathtaking sunsets by the sea every day, staying in harmony with yourself and your family.',
      taras: 'From your windows you’ll enjoy city views and stunning sunsets over the sea — helping you and your family feel in harmony.',
      caspian: 'From your home’s windows you can enjoy city views and breathtaking sunsets by the sea every day, staying in harmony with yourself and your family.',
    },
    statement: {
      ilan: 'Ilan Towers is a premium residential complex combining modern technology with the highest level of comfort.',
      taras: 'Taras is a comfortable residential complex created for those who value quality of life and a convenient location.',
      caspian: 'Caspian Coast is a construction company with many years of experience building quality residential complexes in Aktau.',
    },
    uniqueBody: {
      ilan: 'A unique location for the «Ilan Towers» complex in district 15 of Aktau, on the first seafront line. Address: district 15, 6, Aktau. Here every day begins with a view of the boundless Caspian Sea, and evenings are graced by magnificent sunsets.',
      taras: 'Set along the seashore, the «TARAS» complex offers unique water views and magnificent sunsets, making every day special and unforgettable.',
      caspian: 'A unique location for the «Caspian Coast» complex in district 3 of Aktau with developed infrastructure. Its convenient position provides easy access to all city services and attractions.',
    },
    ownBody: {
      ilan: 'You can lead an active lifestyle without leaving the complex. Children’s and sports grounds will be located on its territory.',
      taras: 'Within the complex you can lead an active lifestyle thanks to children’s and sports grounds right on its territory. «TARAS» is located in district 7A, where you can enjoy proximity to the sea and magnificent views that create a unique atmosphere.',
      caspian: 'You can lead an active lifestyle without leaving the complex. Children’s and sports grounds will be located on its territory.',
    },
    designBody: {
      ilan: 'Variable height from 2 to 15 floors, a colonnade gallery at the entrance, and varied facade textures and colors give the whole complex a sense of lightness, dynamism and modernity.',
      taras: 'The «Taras» complex embodies modern style and refined facade-panel design. Its ergonomic layout of living spaces creates comfort and convenience, perfectly matching residents’ modern needs.',
      caspian: 'Variable height from 2 to 15 floors, a colonnade gallery at the entrance, and varied facade textures and colors give the whole complex a sense of lightness, dynamism and modernity.',
    },
  },
};

import gallery1 from '../assets/image/ilanTower1.webp';
import gallery2 from '../assets/image/home1.webp';
import gallery3 from '../assets/image/beibitshilik1.webp';
import imgIlan1 from '../assets/image/i1-d.webp';
import imgIlan3 from '../assets/image/i3-d.webp';
import imgIlan4 from '../assets/image/i4-d.webp';
import imgIlan5 from '../assets/image/i5-d.webp';
import imgTaras1 from '../assets/image/t1-d.webp';
import imgTaras2 from '../assets/image/t2-d.webp';
import imgTaras3 from '../assets/image/t3-d.webp';
import type { LucideIcon } from 'lucide-react';

// Анимация появления для hero
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

// Стеклянный чип характеристики в hero
function HeroChip({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white">
        <Icon size={18} />
      </span>
      <div>
        <div className="text-sm font-semibold leading-tight text-white">{value}</div>
        <div className="text-xs text-white/60">{label}</div>
      </div>
    </div>
  );
}

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

const ImageModal: React.FC<{
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}> = ({ images, currentIndex, onClose, onPrev, onNext }) => (
  <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
    <button
      onClick={onClose}
      className="absolute top-6 right-6 text-white hover:text-slate-300 transition-colors z-10"
    >
      <X className="w-8 h-8" />
    </button>
    
    <button
      onClick={onPrev}
      className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-slate-300 transition-colors z-10"
    >
      <ChevronLeft className="w-10 h-10" />
    </button>
    
    <button
      onClick={onNext}
      className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-slate-300 transition-colors z-10"
    >
      <ChevronRight className="w-10 h-10" />
    </button>
    
    <img
      src={images[currentIndex]}
      alt={`Gallery image ${currentIndex + 1}`}
      className="max-w-[90vw] max-h-[90vh] object-contain"
    />
    
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg font-medium">
      {currentIndex + 1} / {images.length}
    </div>
  </div>
);

const ContactModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
}> = ({ isOpen, onClose, projectName }) => {
  const { language } = useLanguage();
  const td = (k: string) => (PD[language] || PD.ru)[k];
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: `Интересуюсь проектом ${projectName}. Хотел бы записаться на просмотр.`
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Здравствуйте! Меня зовут ${formData.name}.

${formData.message}

Контакты:
Телефон: ${formData.phone}
Email: ${formData.email}`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=77006363631&text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', phone: '', email: '', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-900">{td('bookViewing')}</h3>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">{td('name')}</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">{td('phone')}</label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">{td('email')}</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">{td('message')}</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-600 to-brand-400 text-white py-3 rounded-xl font-semibold hover:from-brand-700 hover:to-brand-500 transition-all duration-300 transform hover:scale-105"
            >
              {td('submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default function ProjectDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const td = (k: string) => (PD[language] || PD.ru)[k];
  const state = location.state as { project?: Project } | undefined;
  const p = state?.project;
  const pk: PKey = p?.name.includes('Taras') ? 'taras' : p?.name.includes('Caspian') ? 'caspian' : 'ilan';
  const tp = (field: string) => (PARA[language] || PARA.ru)[field][pk];
  
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  if (!p) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center pt-[104px] sm:pt-[112px] lg:pt-[128px] p-6">
          <div className="text-center">
            <Building2 className="w-20 h-20 text-slate-300 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-slate-900 mb-4">{td('notFound')}</h1>
            <p className="text-slate-600 mb-8">К сожалению, информация о проекте недоступна</p>
            <button
              onClick={() => navigate(-1)}
              className="bg-brand-600 text-white px-6 py-3 rounded-xl hover:bg-brand-700 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <ArrowLeft className="w-5 h-5" />
              {td('goBack')}
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const galleryImages = p.images ?? [gallery1, gallery2, gallery3];
  const videoUrl = getEmbedUrl(p.videoUrl || 'https://youtu.be/jzjwXM5ZoIA?si=faPu9jPw7MyKg-1R&start=3');

  const closeImageModal = () => setSelectedImageIndex(null);
  const nextImage = () => setSelectedImageIndex(prev => prev !== null ? (prev + 1) % galleryImages.length : 0);
  const prevImage = () => setSelectedImageIndex(prev => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0);


  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      

      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        {/* Hero Section */}
        <div className="relative h-[78vh] min-h-[540px] overflow-hidden">
          {/* Фон с медленным зумом */}
          <motion.img
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 9, ease: [0.16, 1, 0.3, 1] }}
            src={p.name === 'ЖК Ilan Towers' ? imgIlan1 : p.name === 'ЖК Taras' ? imgTaras1 : p.image}
            alt={p.name}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
            decoding="sync"
          />
          {/* Кино-градиенты */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/40 via-transparent to-transparent" />

          {/* Верхняя панель */}
          <div className="absolute top-0 left-0 right-0 z-10">
            <div className="container mx-auto px-6 py-5">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {td('back')}
                </button>
              </div>
            </div>
          </div>

          {/* Контент */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container mx-auto px-6 pb-12">
              <motion.div
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
                className="max-w-4xl"
              >
                {/* Кикер: класс + статус */}
                <motion.div variants={fadeUp} className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                    <Sparkles className="h-3.5 w-3.5" /> {p.type}
                  </span>
                  {p.deadline && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
                      <Calendar className="h-3.5 w-3.5" /> {p.deadline}
                    </span>
                  )}
                </motion.div>

                {/* Название */}
                <motion.h1 variants={fadeUp} className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                  {p.name}
                </motion.h1>

                {/* Описание */}
                <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-lg text-slate-200">
                  {tp('heroDesc')}
                </motion.p>

                {/* Чипы характеристик */}
                <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
                  <HeroChip icon={MapPin} label={td('chipLocation')} value={`Актау, ${p.district}`} />
                  <HeroChip icon={Layers} label={td('chipHeight')} value={p.floors} />
                  <HeroChip icon={Building2} label={td('chipBlocks')} value={`${p.blocks} блока`} />
                </motion.div>

                {/* Кнопки */}
                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-8 py-4 font-semibold text-white shadow-lg shadow-brand-600/30 transition-shadow hover:shadow-xl hover:shadow-brand-600/40"
                  >
                    {td('bookViewing')}
                  </button>
                  {videoUrl && (
                    <a
                      href={videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:scale-110">
                        <Play className="h-4 w-4" fill="currentColor" />
                      </span>
                      {td('watchVideo')}
                    </a>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Индикатор прокрутки */}
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50">
            <ChevronDown size={24} />
          </motion.div>
        </div>



        {/* Advantages Section - First for residential projects */}
        {(p.name === 'ЖК Ilan Towers' || p.name === 'ЖК Taras' || p.name === 'ЖК Caspian Coast') && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12 reveal-up">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">{td('advantages')}</h2>
                <div className="w-20 h-1 rounded-full bg-gradient-to-r from-brand-600 to-brand-400 mx-auto"></div>
              </div>

              {/* Advantages List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-up">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-600/20">
                      <Droplet className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{td('advWater')}</h3>
                      <p className="text-slate-600 text-sm">{td('advWaterDesc')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-600/20">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{td('advGen')}</h3>
                      <p className="text-slate-600 text-sm">{td('advGenDesc')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-600/20">
                      <Thermometer className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{td('advBoiler')}</h3>
                      <p className="text-slate-600 text-sm">{td('advBoilerDesc')}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-600/20">
                      <Home className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{td('advCeiling')}</h3>
                      <p className="text-slate-600 text-sm">{td('advCeilingDesc')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-600/20">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{td('advPlay')}</h3>
                      <p className="text-slate-600 text-sm">{td('advPlayDesc')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-600/20">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{td('advInfra')}</h3>
                      <p className="text-slate-600 text-sm">{td('advInfraDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        )}

        {/* Project Philosophy Section - Only for residential projects */}
        {(p.name === 'ЖК Ilan Towers' || p.name === 'ЖК Taras' || p.name === 'ЖК Caspian Coast') && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 reveal-up">
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">{td('philosophy')}</h2>
                  <div className="w-20 h-1 rounded-full bg-gradient-to-r from-brand-600 to-brand-400 mx-auto"></div>
                </div>

                <div className="space-y-12 stagger-up">
                  {/* Уникальная концепция */}
                  <div className="border-l-4 border-brand-500 pl-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-600/20">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{td('philUnique')}</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-lg pl-12">
                      {tp('philUniqueDesc')}
                    </p>
                  </div>

                  {/* Позитивная среда */}
                  <div className="border-l-4 border-brand-500 pl-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-600/20">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{td('philPositive')}</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-lg pl-12">
                      {tp('philPositiveDesc')}
                    </p>
                  </div>

                  {/* Гармоничное пространство */}
                  <div className="border-l-4 border-brand-500 pl-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-600/20">
                        <Home className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{td('philHarmony')}</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-lg pl-12">
                      {tp('philHarmonyDesc')}
                    </p>
                  </div>
                </div>

                {/* Professional Statement */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-500 p-8 shadow-lg shadow-brand-600/20">
                    <p className="text-center text-white font-medium text-lg leading-relaxed">
                      {tp('statement')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 360° Virtual Tour Section - For Ilan Towers and Taras */}
        {(p.name === 'ЖК Ilan Towers' || p.name === 'ЖК Taras') && (
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12 reveal-up">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">{td('tour360')}</h2>
                <div className="w-20 h-1 rounded-full bg-gradient-to-r from-brand-600 to-brand-400 mx-auto"></div>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                  <div className="aspect-[16/10]">
                    <iframe
                      width="100%"
                      height="100%"
                      allow="xr-spatial-tracking; gyroscope; accelerometer"
                      allowFullScreen
                      src={p.name === 'ЖК Ilan Towers'
                        ? "https://kuula.co/share/collection/7DHL6?logo=1&info=1&fs=1&vr=0&thumbs=0&inst=ru"
                        : "https://kuula.co/share/collection/7DHxt?logo=1&info=1&fs=1&vr=0&thumbs=0&inst=ru"
                      }
                      title={`${p.name} - Виртуальный тур 360°`}
                      className="w-full h-full border-0"
                    />
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <p className="text-slate-600">
                    {td('tourHint')}
                  </p>
                  <a
                    href={p.name === 'ЖК Ilan Towers' 
                      ? "https://kuula.co/share/collection/7DHL6?logo=1&info=1&fs=1&vr=0&thumbs=0&inst=ru"
                      : "https://kuula.co/share/collection/7DHxt?logo=1&info=1&fs=1&vr=0&thumbs=0&inst=ru"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm"
                  >
                    <Maximize className="w-4 h-4" />
                    {td('fullscreen')}
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Gallery Section */}
        {galleryImages.length > 0 && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12 reveal-up">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">{td('gallery')}</h2>
                <p className="text-xl text-slate-600">{td('galleryPhotos')}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto stagger-up">
                {galleryImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200"
                  >
                    <img
                      src={img}
                      alt={`${p.name} — фото ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                      <Maximize className="w-8 h-8 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Video Section */}
        {videoUrl && (
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">{td('videoTitle')}</h2>
                <p className="text-xl text-slate-300">{td('videoSubtitle')}</p>
              </div>
              
              <div className="max-w-5xl mx-auto">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    className="w-full h-full"
                    src={videoUrl}
                    title={`${p.name} - видеопрезентация`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>
        )}


        {/* Additional Sections - Only for residential projects */}
        {(p.name === 'ЖК Ilan Towers' || p.name === 'ЖК Taras' || p.name === 'ЖК Caspian Coast') && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto space-y-16">
                
                {/* Unique Location */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-up">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl flex items-center justify-center shadow-md shadow-brand-600/20">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{td('uniquePlace')}</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-lg mb-6">
                      {tp('uniqueBody')}
                    </p>
                    <div className="w-12 h-1 rounded-full bg-gradient-to-r from-brand-600 to-brand-400"></div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden">
                      <img 
                        src={p.name === 'ЖК Ilan Towers' ? imgIlan3 : p.name === 'ЖК Taras' ? imgTaras2 : p.image} 
                        alt="Unique location"
                        className="w-full h-full object-cover parallax-img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Own Territory */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-up">
                  <div className="aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden">
                    <img 
                      src={p.name === 'ЖК Ilan Towers' ? imgIlan4 : p.name === 'ЖК Taras' ? imgTaras3 : "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"} 
                      alt="Own territory"
                      className="w-full h-full object-cover parallax-img"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl flex items-center justify-center shadow-md shadow-brand-600/20">
                        <TreePine className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{td('ownTerritory')}</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-lg mb-6">
                      {tp('ownBody')}
                    </p>
                    <div className="w-12 h-1 rounded-full bg-gradient-to-r from-brand-600 to-brand-400"></div>
                  </div>
                </div>

                {/* Design and Architecture */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-up">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl flex items-center justify-center shadow-md shadow-brand-600/20">
                        <Building2 className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{td('design')}</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-lg mb-6">
                      {tp('designBody')}
                    </p>
                    <div className="w-12 h-1 rounded-full bg-gradient-to-r from-brand-600 to-brand-400"></div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden">
                      <img 
                        src={p.name === 'ЖК Ilan Towers' ? imgIlan5 : p.name === 'ЖК Taras' ? imgTaras2 : "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"} 
                        alt="Design and architecture"
                        className="w-full h-full object-cover parallax-img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        )}


        {/* About Project - Default for other projects */}
        {p.name !== 'ЖК Ilan Towers' && p.name !== 'ЖК Taras' && p.name !== 'ЖК Caspian Coast' && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">О проекте</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-slate-700 leading-relaxed mb-8">
                    {p.description ?? 
                      `Современный жилой комплекс с продуманной планировкой и качественной инфраструктурой.`
                    }
                  </p>

                  <div className="bg-slate-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Ключевые особенности:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">Современная архитектура</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">{td('advInfra')}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">{td('infraConvenient')}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">{td('infraFinishing')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Map Section - For Ilan Towers and Taras */}
        {(p.name === 'ЖК Ilan Towers' || p.name === 'ЖК Taras') && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{td('location')}</h2>
                  <div className="w-12 h-1 rounded-full bg-gradient-to-r from-brand-600 to-brand-400 mx-auto"></div>
                </div>

                <div className="space-y-8">
                  <div className="h-[500px] bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
                    <iframe
                      src={p.name === 'ЖК Ilan Towers' 
                        ? "https://maps.google.com/maps?q=15-й+микрорайон+6+Актау+Казахстан&output=embed&z=16"
                        : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.3762338431015!2d51.15053037630154!3d43.64034007110283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41b433f8c5047861%3A0x674154285ea616b7!2sTARAS!5e0!3m2!1sru!2skz!4v1757048502724!5m2!1sru!2skz"
                      }
                      width="100%"
                      height="100%"
                      allowFullScreen
                      title={`${p.name} на карте`}
                      className="w-full h-full border-0"
                    />
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-slate-900">{td('address')}</h3>
                      <p className="text-slate-600">
                        {p.name === 'ЖК Ilan Towers' 
                          ? '15-й микрорайон, 6, Актау'
                          : '7а микрорайон, 18, Актау'
                        }
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={p.name === 'ЖК Ilan Towers' 
                          ? "https://go.2gis.com/ZNK9o"
                          : "https://go.2gis.com/HHTLG"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm"
                      >
                        <MapPin className="w-4 h-4" />
                        2GIS
                      </a>
                      <a
                        href={p.name === 'ЖК Ilan Towers' 
                          ? "https://maps.google.com/maps?q=15-й+микрорайон+6+Актау+Казахстан"
                          : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.3762338431015!2d51.15053037630154!3d43.64034007110283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41b433f8c5047861%3A0x674154285ea616b7!2sTARAS!5e0!3m2!1sru!2skz!4v1757048502724!5m2!1sru!2skz"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors text-sm"
                      >
                        Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

      </main>

      <Footer />
      
      {/* Modals */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        projectName={p.name}
      />
      
      {selectedImageIndex !== null && (
        <ImageModal
          images={galleryImages}
          currentIndex={selectedImageIndex}
          onClose={closeImageModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
}
