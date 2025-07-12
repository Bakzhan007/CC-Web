import { useState } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import imgTaras from '../../assets/image/taras.jpg';
import imgIlan from '../../assets/image/ilan_tower.jpeg';

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
      location: 'Downtown District',
      district: '15 мкр.',
      year: '2025',
      image: imgIlan,
      description: 'Современный жилой комплекс бизнес-класса с видом на море.',
      area: '45,000 кв.м',
      floors: '15 этажей',
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
      location: 'Coastal Avenue',
      district: '17 мкр.',
      year: '2025',
      image: imgTaras,
      description: 'Комфортный жилой комплекс рядом с набережной.',
      area: '120 квартир',
      floors: '12 этажей',
      blocks: '3',
      type: 'Комфорт',
      deadline: '2 кв. 2024',
      priceRange: 'от 25 млн ₸',
      status: 'inProgress'
    },
    {
      id: 3,
      name: 'ЖК Caspian Coast',
      category: 'residential',
      location: 'East Industrial Zone',
      district: '3 мкр.',
      year: '2024',      
      image: 'https://storage.googleapis.com/bd-kz-01/buildings-v2/1280x960/8129.jpg',
      description: 'Жилой комплекс с развитой инфраструктурой.',
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
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <span
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : project.status === 'inProgress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}
                >
                  {getStatusText(project.status)}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="space-y-1 text-sm text-slate-500 mb-4">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" /> {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" /> {project.year}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm border-t pt-4">
                  <span className="font-medium text-slate-700">{project.area}</span>
                  <Link
                    to={`/projects/${project.id}`}
                    state={{ project }}
                    className="text-blue-600 hover:text-blue-700 flex items-center space-x-1"
                  >
                    <span>{t.learnMore}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}