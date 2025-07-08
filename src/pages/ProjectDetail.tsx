import { useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FC } from 'react';

// Define the shape of a project feature
interface Feature {
  title: string;
  detail: string;
  icon: FC<React.SVGProps<SVGSVGElement>>;
}

// Define the expected state shape passed via location.state
interface ProjectDetailState {
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
  };
}

const ProjectDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  // Cast state to known shape
  const state = location.state as ProjectDetailState | undefined;
  const project = state?.project;

  if (!project) {
    return (
      <p className="pt-20 text-center text-lg text-gray-500">
        Project #{id} not found.
      </p>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section with Overlay Card */}
      <section className="relative h-[60vh] md:h-[75vh] w-full flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-20 w-full flex justify-center"
        >
          <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl shadow-xl px-8 py-8 mt-20 max-w-2xl mx-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-2">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-4">
              {project.subtitle || `${project.description.slice(0, 100)}...`}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/90 text-base font-medium">
              <span className="bg-black/30 rounded px-3 py-1">{project.location}</span>
              <span className="bg-black/30 rounded px-3 py-1">{project.year}</span>
              <span className="bg-black/30 rounded px-3 py-1">{project.area}</span>
              <span className="bg-black/30 rounded px-3 py-1 capitalize">{project.status}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Content Card */}
      <main className="container mx-auto px-4 py-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 mb-8 -mt-24 relative z-30"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">About the Project</h2>
          <p className="text-gray-700 leading-relaxed text-center mb-6">
            {project.description}
          </p>

          {project.features && (
            <div className="mt-8">
              <h3 className="text-xl font-medium text-gray-800 mb-4 text-center">Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.features.map((feat: Feature) => (
                  <div key={feat.title} className="flex items-center bg-gray-50 rounded-xl shadow p-4">
                    <div className="flex-shrink-0">
                      <feat.icon className="w-8 h-8 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800">{feat.title}</h4>
                      <p className="text-gray-600 text-sm">{feat.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Materials & Technologies Block */}
          <div className="mt-12">
            <h3 className="text-xl font-medium text-gray-800 mb-4 text-center">Materials & Technologies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Example material/technology cards with placeholder icons */}
              <div className="flex items-center bg-blue-50 rounded-xl shadow p-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">Modern Architecture</h4>
                  <p className="text-gray-600 text-sm">Contemporary design with gallery columns and unique facade textures.</p>
                </div>
              </div>
              <div className="flex items-center bg-blue-50 rounded-xl shadow p-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20m10-10H2"/></svg>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">High-Speed Elevators</h4>
                  <p className="text-gray-600 text-sm">Equipped with modern, fast elevators for convenience.</p>
                </div>
              </div>
              <div className="flex items-center bg-blue-50 rounded-xl shadow p-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">Underground Parking</h4>
                  <p className="text-gray-600 text-sm">Spacious underground parking for residents and guests.</p>
                </div>
              </div>
              <div className="flex items-center bg-blue-50 rounded-xl shadow p-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v-7a4 4 0 014-4h8a4 4 0 014 4v7"/><path d="M16 21v-4a4 4 0 00-8 0v4"/></svg>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">Drinking Water Reservoir</h4>
                  <p className="text-gray-600 text-sm">Ensures a constant supply of clean drinking water.</p>
                </div>
              </div>
              <div className="flex items-center bg-blue-50 rounded-xl shadow p-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">Autonomous Heating</h4>
                  <p className="text-gray-600 text-sm">Efficient autonomous heating system for comfort.</p>
                </div>
              </div>
              <div className="flex items-center bg-blue-50 rounded-xl shadow p-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 12h8"/></svg>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">High Ceilings</h4>
                  <p className="text-gray-600 text-sm">Ceiling height of 3.2 meters for a spacious feel.</p>
                </div>
              </div>
              <div className="flex items-center bg-blue-50 rounded-xl shadow p-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 16l4-4 4 4"/></svg>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">Private Playground</h4>
                  <p className="text-gray-600 text-sm">Safe and modern playgrounds for children.</p>
                </div>
              </div>
              <div className="flex items-center bg-blue-50 rounded-xl shadow p-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 12h8"/></svg>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">Developed Infrastructure</h4>
                  <p className="text-gray-600 text-sm">Shops, cafes, and services within easy reach.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <button
          className="mt-2 mb-8 px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to Top
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
