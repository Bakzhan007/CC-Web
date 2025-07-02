import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

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
      title: 'Caspian Business Center',
      category: 'commercial',
      location: 'Downtown District',
      year: '2023',
      image:
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description:
        'A modern 15-story office complex featuring sustainable design and state-of-the-art facilities.',
      area: '45,000 sq ft',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Seaside Luxury Residences',
      category: 'residential',
      location: 'Coastal Avenue',
      year: '2023',
      image:
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description:
        'Premium residential development with panoramic sea views and luxury amenities.',
      area: '120 Units',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Industrial Park Phase I',
      category: 'industrial',
      location: 'East Industrial Zone',
      year: '2024',
      image:
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      description:
        'State-of-the-art manufacturing facility with advanced logistics infrastructure.',
      area: '75,000 sq ft',
      status: 'inProgress'
    },
    {
      id: 4,
      title: 'Heritage Mall Renovation',
      category: 'commercial',
      location: 'City Center',
      year: '2024',
      image:
        'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
      description:
        'Complete modernization of historic shopping center with contemporary retail spaces.',
      area: '200,000 sq ft',
      status: 'inProgress'
    },
    {
      id: 5,
      title: 'Garden Villas Community',
      category: 'residential',
      location: 'Suburban Hills',
      year: '2022',
      image:
        'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800',
      description:
        'Eco-friendly residential community with integrated green spaces and smart home technology.',
      area: '80 Villas',
      status: 'completed'
    },
    {
      id: 6,
      title: 'Tech Hub Office Complex',
      category: 'commercial',
      location: 'Innovation District',
      year: '2024',
      image:
        'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=800',
      description:
        'Modern workspace designed for technology companies with flexible office layouts.',
      area: '60,000 sq ft',
      status: 'planning'
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
    <div className="min-h-screen flex flex-col">
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
                      <button className="text-blue-600 hover:text-blue-700 flex items-center space-x-1">
                        <span>{t.learnMore}</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition">
                {t.loadMore}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;