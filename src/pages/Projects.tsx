import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';      // ← import Link
import imgTaras from '../assets/image/taras.jpg'
import imgIlan from '../assets/image/ilan_tower.jpeg'


const Projects = () => {
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
      title: 'ЖК Ilan Towers',
      category: 'residential',
      location: 'Downtown District',
      year: '2025',
      image: imgIlan,
      description:
        'A modern 15-story office complex featuring sustainable design and state-of-the-art facilities.',
      area: '45,000 sq ft',
      status: 'inProgress'
    },
    {
      id: 2,
      title: 'ЖК Taras',
      category: 'residential',
      location: 'Coastal Avenue',
      year: '2025',
      image: imgTaras,
      description:
        'Premium residential development with panoramic sea views and luxury amenities.',
      area: '120 Units',
      status: 'inProgress'
    },
    {
      id: 3,
      title: 'ЖК Caspian Coast',
      category: 'residential',
      location: 'East Industrial Zone',
      year: '2025',
      image:
        'https://storage.googleapis.com/bd-kz-01/buildings-v2/1280x960/8129.jpg',
      description:
        'State-of-the-art manufacturing facility with advanced logistics infrastructure.',
      area: '75,000 sq ft',
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
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        <section className="relative">
          <div className="h-60 sm:h-80 md:h-[30rem] lg:h-[36rem] overflow-hidden relative">
            <img
              src="https://images.pexels.com/photos/18862358/pexels-photo-18862358.jpeg"
              alt="Projects banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                {t.projectsTitle} <span className="text-blue-400">{t.projectsSubtitle}</span>
              </h1>
            </div>
          </div>
        </section>

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
                      alt={project.title}
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
                      {project.title}
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
                      {/* Replace button with Link: */}
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
      </main>
      <Footer />
    </div>
  );
};

export default Projects;