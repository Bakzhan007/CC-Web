import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Droplet,
  Zap,
  Thermometer,
  Building2,
  Users,
  Box,
  MapPin,
  ArrowLeft,
  Play,
  Phone,
  Mail,
  Calendar,
  Home,
  Car,
  Shield,
  Wifi,
  Camera,
  TreePine,
  Download,
  Eye,
  ChevronLeft,
  ChevronRight,
  X,
  Clock,
  Award,
  Target,
  Layers,
  Maximize
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
  color?: string;
}> = ({ title, value, icon, color = 'blue' }) => (
  <div className="group bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl p-6 transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-center space-x-4">
      <div className={`p-3 rounded-xl bg-${color}-100 text-${color}-600 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{title}</div>
        <div className="text-xl font-bold text-gray-900 mt-1">{value}</div>
      </div>
    </div>
  </div>
);

const AdvantageCard: React.FC<{ 
  title: string; 
  icon: React.ReactNode; 
  description?: string;
}> = ({ title, icon, description }) => (
  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
    <div className="flex flex-col items-center text-center">
      <div className="p-4 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      )}
    </div>
  </div>
);

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
      className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
    >
      <X className="w-8 h-8" />
    </button>
    
    <button
      onClick={onPrev}
      className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
    >
      <ChevronLeft className="w-10 h-10" />
    </button>
    
    <button
      onClick={onNext}
      className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: `Интересуюсь проектом ${projectName}. Хотел бы записаться на просмотр.`
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Записаться на просмотр</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              Отправить заявку
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
  const state = location.state as { project?: Project } | undefined;
  const p = state?.project;
  
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!p) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center pt-[104px] sm:pt-[112px] lg:pt-[128px] p-6">
          <div className="text-center">
            <Building2 className="w-20 h-20 text-gray-300 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Проект не найден</h1>
            <p className="text-gray-600 mb-8">К сожалению, информация о проекте недоступна</p>
            <button
              onClick={() => navigate(-1)}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <ArrowLeft className="w-5 h-5" />
              Вернуться назад
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const galleryImages = p.images ?? [gallery1, gallery2, gallery3];
  const videoUrl = getEmbedUrl(p.videoUrl || 'https://youtu.be/jzjwXM5ZoIA?si=faPu9jPw7MyKg-1R&start=3');

  const openImageModal = (index: number) => setSelectedImageIndex(index);
  const closeImageModal = () => setSelectedImageIndex(null);
  const nextImage = () => setSelectedImageIndex(prev => prev !== null ? (prev + 1) % galleryImages.length : 0);
  const prevImage = () => setSelectedImageIndex(prev => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0);


  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      

      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={p.name === 'ЖК Ilan Towers' ? imgIlan1 : p.name === 'ЖК Taras' ? imgTaras1 : p.image}
              alt={p.name}
              className="w-full h-full object-cover"
              fetchPriority="high"
              decoding="sync"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Navigation Bar */}
          <div className="absolute top-0 left-0 right-0 z-10">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                  >
                    <ArrowLeft className="w-6 h-6" />
                    <span className="font-medium">Назад</span>
                  </button>
                  <div className="h-6 w-px bg-white/30"></div>
                  <h1 className="text-2xl font-bold text-white">{p.name}</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container mx-auto px-6 pb-8">
              <div className="max-w-4xl">
                {(p.name === 'ЖК Ilan Towers' || p.name === 'ЖК Taras' || p.name === 'ЖК Caspian Coast') ? (
                  <div>
                    <p className="text-xl text-white mb-6 leading-relaxed">
                      {p.name === 'ЖК Ilan Towers' && 'Премиум-жилой комплекс на первой береговой линии моря, 15 мкр.'}
                      {p.name === 'ЖК Taras' && 'Комфортный жилой комплекс рядом с набережной, 7а мкр.'}
                      {p.name === 'ЖК Caspian Coast' && 'Жилой комплекс с развитой инфраструктурой, 3 мкр.'}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 text-white/90">
                      <div className="text-center">
                        <div className="text-lg font-semibold">Актау, {p.district}</div>
                        <div className="text-sm opacity-80">Местоположение</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold">
                          {p.name === 'ЖК Ilan Towers' && '16 этажей'}
                          {p.name === 'ЖК Taras' && '12-14 этажей'} 
                          {p.name === 'ЖК Caspian Coast' && '9 этажей'}
                        </div>
                        <div className="text-sm opacity-80">Высота</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold">
                          {p.name === 'ЖК Ilan Towers' && '2 блока'}
                          {p.name === 'ЖК Taras' && '4 блока'}
                          {p.name === 'ЖК Caspian Coast' && '2 блока'}
                        </div>
                        <div className="text-sm opacity-80">Корпуса</div>
                      </div>
                    </div>

                  </div>
                ) : (
                  <div>
                    <p className="text-xl text-white mb-6 leading-relaxed">
                      {p.description || `Современный жилой комплекс с продуманной планировкой и качественной инфраструктурой, ${p.district}`}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 mb-8 text-white/90">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        <span>Актау, {p.district}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-5 h-5" />
                        <span>{p.floors}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
                  >
                    Записаться на просмотр
                  </button>
                  
                  {videoUrl && (
                    <a
                      href={videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                    >
                      <Play className="w-5 h-5" fill="currentColor" />
                      Смотреть видео
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Advantages Section - First for residential projects */}
        {(p.name === 'ЖК Ilan Towers' || p.name === 'ЖК Taras' || p.name === 'ЖК Caspian Coast') && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Преимущества</h2>
                <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
              </div>

              {/* Advantages List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-white border-l-4 border-gray-900">
                    <div className="w-8 h-8 bg-gray-900 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Droplet className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Резервуар для питьевой воды</h3>
                      <p className="text-gray-600 text-sm">Автономное водоснабжение качественной питьевой водой</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white border-l-4 border-gray-900">
                    <div className="w-8 h-8 bg-gray-900 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Электрогенератор</h3>
                      <p className="text-gray-600 text-sm">Бесперебойное электроснабжение 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white border-l-4 border-gray-900">
                    <div className="w-8 h-8 bg-gray-900 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Thermometer className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Котел автономного отопления</h3>
                      <p className="text-gray-600 text-sm">Индивидуальная система отопления для комплекса</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-white border-l-4 border-gray-900">
                    <div className="w-8 h-8 bg-gray-900 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Home className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Высокие 3,20 метра потолки</h3>
                      <p className="text-gray-600 text-sm">Потолки высотой 3,2 метра создают ощущение простора</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white border-l-4 border-gray-900">
                    <div className="w-8 h-8 bg-gray-900 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Собственная детская площадка</h3>
                      <p className="text-gray-600 text-sm">Современная и безопасная игровая зона для детей</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white border-l-4 border-gray-900">
                    <div className="w-8 h-8 bg-gray-900 rounded-sm flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Развитая инфраструктура</h3>
                      <p className="text-gray-600 text-sm">Рядом школы, магазины, набережная и развлечения</p>
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
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Философия проекта</h2>
                  <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
                </div>

                <div className="space-y-12">
                  {/* Уникальная концепция */}
                  <div className="border-l-4 border-gray-900 pl-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-8 h-8 bg-gray-900 rounded-sm flex items-center justify-center flex-shrink-0">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Уникальная концепция</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg pl-12">
                      {p.name === 'ЖК Taras' 
                        ? 'Уникальный жилой комплекс «TARAS» обеспечивает спокойствие и комфорт для жизни каждого его жителя'
                        : `Уникальный жилой комплекс позволяет наслаждаться спокойствием. Ведь в «${p.name.replace('ЖК ', '')}» будет все для комфортной жизни.`
                      }
                    </p>
                  </div>

                  {/* Позитивная среда */}
                  <div className="border-l-4 border-gray-900 pl-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-8 h-8 bg-gray-900 rounded-sm flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Позитивная среда</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg pl-12">
                      {p.name === 'ЖК Taras' 
                        ? 'В жилом комплексе каждый житель сможет наслаждаться прогулками, уютной набережной и детскими спортивными площадками, создающими положительную атмосферу'
                        : 'Места для прогулок, набережная, детская и спортивная площадки будут создавать позитивную среду в жилом комплексе.'
                      }
                    </p>
                  </div>

                  {/* Гармоничное пространство */}
                  <div className="border-l-4 border-gray-900 pl-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-8 h-8 bg-gray-900 rounded-sm flex items-center justify-center flex-shrink-0">
                        <Home className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Гармоничное пространство</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg pl-12">
                      {p.name === 'ЖК Taras' 
                        ? 'Из окон вашего дома вы будете наслаждаться видами города и впечатляющими закатами над морем, что поможет вам и вашей семье ощущать гармонию'
                        : 'Из окон дома вы сможете ежедневно наслаждаться видами города и потрясающих закатов у моря. А это означает постоянно находиться в гармонии с собой и своей семьей.'
                      }
                    </p>
                  </div>
                </div>

                {/* Professional Statement */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="bg-gray-50 p-8 rounded-sm">
                    <p className="text-center text-gray-800 font-medium text-lg leading-relaxed">
                      {p.name === 'ЖК Ilan Towers' && 'Ilan Towers — премиум жилой комплекс, который сочетает в себе современные технологии и комфорт высочайшего уровня'}
                      {p.name === 'ЖК Taras' && 'Taras — комфортный жилой комплекс, созданный для тех, кто ценит качество жизни и удобство расположения'}
                      {p.name === 'ЖК Caspian Coast' && 'Caspian Coast — строительная компания с многолетним опытом создания качественных жилых комплексов в Актау'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 360° Virtual Tour Section - For Ilan Towers and Taras */}
        {(p.name === 'ЖК Ilan Towers' || p.name === 'ЖК Taras') && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Виртуальный тур 360°</h2>
                <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
              </div>
              
              <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="aspect-[16/10]">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="xr-spatial-tracking; gyroscope; accelerometer"
                      allowFullScreen
                      scrolling="no"
                      src={p.name === 'ЖК Ilan Towers' 
                        ? "https://kuula.co/share/collection/7DHL6?logo=1&info=1&fs=1&vr=0&thumbs=0&inst=ru"
                        : "https://kuula.co/share/collection/7DHxt?logo=1&info=1&fs=1&vr=0&thumbs=0&inst=ru"
                      }
                      title={`${p.name} - Виртуальный тур 360°`}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <p className="text-gray-600">
                    Используйте мышь или сенсорный экран для навигации по виртуальному туру
                  </p>
                  <a
                    href={p.name === 'ЖК Ilan Towers' 
                      ? "https://kuula.co/share/collection/7DHL6?logo=1&info=1&fs=1&vr=0&thumbs=0&inst=ru"
                      : "https://kuula.co/share/collection/7DHxt?logo=1&info=1&fs=1&vr=0&thumbs=0&inst=ru"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                  >
                    <Maximize className="w-4 h-4" />
                    Открыть в полном экране
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Video Section */}
        {videoUrl && (
          <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Видеопрезентация проекта</h2>
                <p className="text-xl text-gray-300">Погрузитесь в атмосферу будущего дома</p>
              </div>
              
              <div className="max-w-5xl mx-auto">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gray-900 rounded-sm flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Уникальное место</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      {p.name === 'ЖК Ilan Towers' && (
                        <>
                          Уникальное место расположения жилого комплекса «Ilan Tower» в 15-м микрорайоне Актау на первой береговой линии моря. 
                          Адрес: 15-й микрорайон, 6, Актау. Здесь каждый день начинается с видом на бескрайние воды Каспийского моря, 
                          а вечера украшают роскошные закаты.
                        </>
                      )}
                      {p.name === 'ЖК Taras' && (
                        <>
                          Расположенный вдоль берега моря, жилой комплекс «TARAS» предлагает уникальные виды на воду и великолепные закаты, 
                          делая каждый день особенным и незабываемым.
                        </>
                      )}
                      {p.name === 'ЖК Caspian Coast' && (
                        <>
                          Уникальное место расположения жилого комплекса «Caspian Coast» в 3-м микрорайоне Актау с развитой инфраструктурой. 
                          Удобное расположение обеспечивает легкий доступ ко всем городским услугам и достопримечательностям.
                        </>
                      )}
                    </p>
                    <div className="w-12 h-0.5 bg-gray-900"></div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="aspect-[4/3] bg-gray-200 rounded-sm overflow-hidden">
                      <img 
                        src={p.name === 'ЖК Ilan Towers' ? imgIlan3 : p.name === 'ЖК Taras' ? imgTaras2 : p.image} 
                        alt="Unique location"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Own Territory */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="aspect-[4/3] bg-gray-200 rounded-sm overflow-hidden">
                    <img 
                      src={p.name === 'ЖК Ilan Towers' ? imgIlan4 : p.name === 'ЖК Taras' ? imgTaras3 : "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"} 
                      alt="Own territory"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gray-900 rounded-sm flex items-center justify-center">
                        <TreePine className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Своя территория</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      {p.name === 'ЖК Taras' ? (
                        <>
                          В рамках жилого комплекса вы сможете вести активный образ жизни, благодаря наличию детских и спортивных площадок прямо на его территории. 
                          Жилой комплекс «TARAS» расположен в 7А микрорайоне, где вы сможете наслаждаться близостью к морю и великолепными видами, 
                          создающими неповторимую атмосферу.
                        </>
                      ) : (
                        'Вы сможете вести активный образ жизни, не выходя за пределы жилого комплекса. На его территории будут расположены детские и спортивные площадки.'
                      )}
                    </p>
                    <div className="w-12 h-0.5 bg-gray-900"></div>
                  </div>
                </div>

                {/* Design and Architecture */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gray-900 rounded-sm flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Дизайн и архитектура</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      {p.name === 'ЖК Taras' ? (
                        'Жилой комплекс «Taras» воплощает современный стиль и утонченный дизайн фасадных панелей. Его эргономичная планировка жилых помещений создает комфорт и удобство, идеально соответствуя современным потребностям жителей.'
                      ) : (
                        'Переменная этажность комплекса от 2 до 15 этажей, колонная галерея со входа, разная фактура и цвет фасадов создают ощущение легкости, динамичности и современности всего жилого комплекса.'
                      )}
                    </p>
                    <div className="w-12 h-0.5 bg-gray-900"></div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="aspect-[4/3] bg-gray-200 rounded-sm overflow-hidden">
                      <img 
                        src={p.name === 'ЖК Ilan Towers' ? imgIlan5 : p.name === 'ЖК Taras' ? imgTaras2 : "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"} 
                        alt="Design and architecture"
                        className="w-full h-full object-cover"
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
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">О проекте</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    {p.description ?? 
                      `Современный жилой комплекс с продуманной планировкой и качественной инфраструктурой.`
                    }
                  </p>

                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Ключевые особенности:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Современная архитектура</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Развитая инфраструктура</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Удобное расположение</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Качественная отделка</span>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Местоположение</h2>
                  <div className="w-12 h-0.5 bg-gray-900 mx-auto"></div>
                </div>

                <div className="space-y-8">
                  <div className="h-[500px] bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                    <iframe
                      src={p.name === 'ЖК Ilan Towers' 
                        ? "https://maps.google.com/maps?q=15-й+микрорайон+6+Актау+Казахстан&output=embed&z=16"
                        : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.3762338431015!2d51.15053037630154!3d43.64034007110283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41b433f8c5047861%3A0x674154285ea616b7!2sTARAS!5e0!3m2!1sru!2skz!4v1757048502724!5m2!1sru!2skz"
                      }
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen
                      title={`${p.name} на карте`}
                      className="w-full h-full"
                    />
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900">Адрес</h3>
                      <p className="text-gray-600">
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
                        className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
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
                        className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
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
