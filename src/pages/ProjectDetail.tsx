import { FC } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Define the shape of a project feature
type Feature = {
  title: string;
  detail: string;
  icon: FC<React.SVGProps<SVGSVGElement>>;
};

// Define the expected state shape passed via location.state
type ProjectDetailState = {
  project: {
    image: string;
    title: string;
    subtitle?: string;
    description: string;
    features?: Feature[];
    location: string;
    year: string;
    area: string;
    status: string;
    developer?: string;
    architect?: string;
    price?: string;
    gallery?: string[];
  };
};

const ProjectDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const state = location.state as ProjectDetailState | undefined;
  const project = state?.project;

  if (!project) {
    return (
      <p className="pt-20 text-center text-lg text-gray-500">
        Project #{id} not found.
      </p>
    );
  }

  // Safe to use project here
  const gallery =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [
          project.image,
          'https://images.pexels.com/photos/5071175/pexels-photo-5071175.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=800',
        ];

  const developer = project.developer ?? 'Caspian Coast Development';
  const architect = project.architect ?? 'Modern Architecture Studio';
  const price = project.price ?? 'Upon request';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <div className="relative z-10 container mx-auto px-6 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              {project.subtitle || `${project.description.slice(0, 100)}...`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <main className="container mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800">About the Project</h2>
          <p className="text-gray-700 leading-relaxed">{project.description}</p>

          {project.features && (
            <div className="grid sm:grid-cols-2 gap-6">
              {project.features.map((feat: Feature) => (
                <div key={feat.title} className="flex items-start">
                  <div className="flex-shrink-0">
                    <feat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-800">{feat.title}</h3>
                    <p className="text-gray-600 text-sm">{feat.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-40 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-xl p-6 space-y-4"
        >
          <div className="space-y-2">
            <h4 className="text-lg font-medium text-gray-800">Project Details</h4>
            <div className="flex justify-between text-gray-700">
              <span>Location:</span>
              <span>{project.location}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Year:</span>
              <span>{project.year}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Area:</span>
              <span>{project.area}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Status:</span>
              <span className="capitalize">{project.status}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Developer:</span>
              <span>{developer}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Architect:</span>
              <span>{architect}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Price:</span>
              <span>{price}</span>
            </div>
          </div>

          <button
            className="w-full py-3 text-center font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to Top
          </button>
        </motion.aside>

      </main>

      <section className="bg-blue-600 text-white text-center py-12">
        <h2 className="text-2xl font-semibold mb-2">Interested in this project?</h2>
        <p className="mb-6">Contact our sales team for more information and pricing details.</p>
        <a
          href="mailto:info@caspian.kz"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium"
        >
          Email Us
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
