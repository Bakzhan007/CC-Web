import { useState } from 'react';
import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import imgTaras from '../../assets/image/taras.webp';
import imgIlan from '../../assets/image/ilan_tower.webp';
import imgIlan3 from '../../assets/image/i3-d.webp';
import imgIlan4 from '../../assets/image/i4-d.webp';
import imgIlan5 from '../../assets/image/i5-d.webp';

export default function ProjectList() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: t.allProjects },
    { id: 'commercial', name: t.commercial },
    { id: 'residential', name: t.residential },
    { id: 'industrial', name: t.industrial }
  ];

  const projects = [
    {
      id: 1,
      name: 'ЖК Ilan Towers',
      category: 'residential',
      location: 'Aktau',
      district: '15 мкр.',
      year: '2025',
      image: imgIlan,
      images: [imgIlan, imgIlan3, imgIlan4, imgIlan5],
      description: 'Современный жилой комплекс бизнес-класса с видом на море.',
      videoUrl: 'https://youtu.be/KLwn1sejhiU?si=xlNb7dBer3eZFiR7',
      area: '45,000 кв.м',
      floors: '16 этажей',
      blocks: '2',
      type: 'Бизнес-класс',
      deadline: '4 кв. 2025',
      priceRange: 'от 30 млн ₸',
      status: 'inProgress'
    },
    {
      id: 2,
      name: 'ЖК Taras',
      category: 'residential',
      location: 'Aktau',
      district: '7а мкр.',
      year: '2025',
      image: imgTaras,
      description: 'Комфортный жилой комплекс рядом с набережной.',
      videoUrl: 'https://youtu.be/jzjwXM5ZoIA?si=bp7U0oMw2gXh7yFz',
      area: '120 квартир',
      floors: '12-14 этажей',
      blocks: '4',
      type: 'Комфорт',
      deadline: '2 кв. 2024',
      priceRange: 'от 25 млн ₸',
      status: 'inProgress'
    },
    {
      id: 3,
      name: 'ЖК Caspian Coast',
      category: 'residential',
      location: 'Aktau',
      district: '3 мкр.',
      year: '2024',      
      image: 'https://storage.googleapis.com/bd-kz-01/buildings-v2/1280x960/8129.jpg',
      description: 'Жилой комплекс с развитой инфраструктурой.',
      videoUrl: 'https://youtu.be/BLBzY1S7xbQ?si=VQKrTtFBnY1omnDO',
      area: '75,000 кв.м',
      floors: '9 этажей',
      blocks: '2',
      type: 'Эконом',
      deadline: '3 кв. 2023',
      priceRange: 'от 20 млн ₸',
      status: 'completed'
    }
  ];

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return t.completed;
      case 'inProgress':
        return t.inProgress;
      case 'planning':
        return t.planning;
      default:
        return status;
    }
  };

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
              style={activeCategory === cat.id ? { backgroundColor: '#2362eb' } : {}}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300 border border-slate-200 hover:-translate-y-1 transform"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding={index < 2 ? "sync" : "async"}
                  fetchPriority={index < 2 ? "high" : "low"}
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-lg text-sm font-medium ${
                      project.status === 'completed'
                        ? 'bg-green-500 text-white'
                        : project.status === 'inProgress'
                        ? 'bg-brand-500 text-white'
                        : 'bg-orange-500 text-white'
                    }`}
                  >
                    {getStatusText(project.status)}
                  </span>
                </div>

                {/* Project Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white text-slate-800 text-xs font-medium rounded-lg">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-2 mb-6 text-sm text-slate-500">
                  <div>{project.location}, {project.district}</div>
                  <div>{project.floors} • {project.blocks} блока</div>
                  <div className="font-medium text-slate-900">{project.priceRange}</div>
                </div>

                <Link
                  to={`/projects/${project.id}`}
                  state={{ project }}
                  className="w-full text-white py-3 px-4 rounded-lg font-medium text-center hover:opacity-90 transition-all duration-300 text-sm block transform hover:scale-105"
                  style={{ backgroundColor: '#2362eb' }}
                >
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-white rounded-xl shadow-sm p-8 max-w-md mx-auto border border-slate-200">
              <Building2 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Проекты не найдены</h3>
              <p className="text-slate-600 text-sm">В выбранной категории пока нет доступных проектов</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}