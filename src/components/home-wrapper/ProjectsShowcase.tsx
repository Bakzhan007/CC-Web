import { useLanguage } from '../../contexts/LanguageContext';
import { MapPin, Calendar, Building, Factory } from 'lucide-react'
import ilanTower from '../../assets/image/ilan_tower.jpeg'
import taras from '../../assets/image/taras.jpg'
import beibitshilik from '../../assets/image/beibitshilik1.jpg'


const ProjectsShowcase = () => {
  const { t } = useLanguage();

  const residentialProjects = [
    {
      name: "Жилой комплекс «Caspian Coast»",
      location: "г. Актау",
      type: "Жилое строительство",
      image: 'https://storage.googleapis.com/bd-kz-01/buildings-v2/1280x960/8129.jpg',
    },
    {
      name: "Жилой комплекс «Ilan Tower»",
      location: "г. Актау",
      type: "Жилое строительство",
      image: ilanTower
    },
    {
      name: "Жилой комплекс «Taras»",
      location: "г. Актау",
      type: "Жилое строительство",
      image: taras
    },
    {
      name: "Жилой комплекс «Бейбітшілік»",
      location: "г. Жанаозен",
      type: "Жилое строительство",
      image: beibitshilik
    }
  ];

  const industrialProjects = [
    {
      name: "Строительство птицефабрики на 100 000 птиц",
      location: "с. Баянды",
      type: "Промышленное строительство",
      description: "Включая газоснабжение и инженерные коммуникации"
    },
    {
      name: "Производственная база",
      location: "г. Актау, 29 А мкр.",
      type: "Промышленное строительство",
      description: "Комплекс производственных зданий и сооружений"
    },
    {
      name: "Строительство инженерных сетей",
      location: "г. Актау, промзона №2",
      type: "Инфраструктура",
      description: "Водопровод, канализация, газификация и теплоснабжение"
    },
    {
      name: "Строительство и эксплуатация базы отдыха",
      location: "Участок №26",
      type: "Коммерческое строительство",
      description: "Дом отдыха, благоустройство, инженерные сети"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.projectsHomeTitle1}
            <span className="text-blue-600"> {t.projectsHomeTitle2}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.projectsHomeDescription}
          </p>
        </div>

{/* Residential Projects */}
<div className="mb-16">
  <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
    <Building className="mr-3 text-blue-600" size={32} />
    {t.projectsHomeResidential}
  </h3>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {residentialProjects.map((project, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
      >
        {/* ← replace icon with real image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {project.name}
                  </h4>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full inline-block">
                    {project.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Industrial Projects */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Factory className="mr-3 text-emerald-600" size={32} />
            {t.projectsHomeIndustrial}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {industrialProjects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Factory size={24} className="text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h4>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full inline-block mb-2">
                      {project.type}
                    </div>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional projects note */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              {t.projectsHomeMoreTitle}
            </h4>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.projectsHomeMoreDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;