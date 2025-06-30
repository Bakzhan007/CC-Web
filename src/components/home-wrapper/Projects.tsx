import { useState } from 'react';
import { ExternalLink, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { t } = useLanguage();

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
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A modern 15-story office complex featuring sustainable design and state-of-the-art facilities.',
      area: '45,000 sq ft',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Seaside Luxury Residences',
      category: 'residential',
      location: 'Coastal Avenue',
      year: '2023',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium residential development with panoramic sea views and luxury amenities.',
      area: '120 Units',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Industrial Park Phase I',
      category: 'industrial',
      location: 'East Industrial Zone',
      year: '2024',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'State-of-the-art manufacturing facility with advanced logistics infrastructure.',
      area: '75,000 sq ft',
      status: 'inProgress'
    },
    {
      id: 4,
      title: 'Heritage Mall Renovation',
      category: 'commercial',
      location: 'City Center',
      year: '2024',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete modernization of historic shopping center with contemporary retail spaces.',
      area: '200,000 sq ft',
      status: 'inProgress'
    },
    {
      id: 5,
      title: 'Garden Villas Community',
      category: 'residential',
      location: 'Suburban Hills',
      year: '2022',
      image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Eco-friendly residential community with integrated green spaces and smart home technology.',
      area: '80 Villas',
      status: 'completed'
    },
    {
      id: 6,
      title: 'Tech Hub Office Complex',
      category: 'commercial',
      location: 'Innovation District',
      year: '2024',
      image: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern workspace designed for technology companies with flexible office layouts.',
      area: '60,000 sq ft',
      status: 'planning'
    }
  ];

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return t.completed;
      case 'inProgress': return t.inProgress;
      case 'planning': return t.planning;
      default: return status;
    }
  };

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.projectsTitle}
            <span className="text-blue-600"> {t.projectsSubtitle}</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t.projectsDescription}
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'inProgress' ? 'bg-blue-100 text-blue-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {getStatusText(project.status)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-white/90 backdrop-blur-sm text-slate-900 py-2 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-white transition-colors">
                    <span>{t.viewDetails}</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-500">
                    <MapPin size={14} className="mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar size={14} className="mr-2" />
                    {project.year}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-sm font-medium text-slate-600">{project.area}</span>
                  <button className="text-blue-600 hover:text-blue-700 flex items-center space-x-1 text-sm font-medium">
                    <span>{t.learnMore}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
            {t.loadMore}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;