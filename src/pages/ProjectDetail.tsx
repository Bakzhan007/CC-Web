import { useParams, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  // If you passed the full project in state:
  const project = location.state?.project;

  // Fallback: if no state, you could fetch by ID here

  if (!project) {
    return <p>Project #{id} not found.</p>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover mb-6 rounded-lg" />
        <p className="mb-4">{project.description}</p>
        <ul className="text-sm text-slate-600 space-y-2 mb-6">
          <li><strong>Location:</strong> {project.location}</li>
          <li><strong>Year:</strong> {project.year}</li>
          <li><strong>Area:</strong> {project.area}</li>
          <li><strong>Status:</strong> {project.status}</li>
        </ul>
        {/* …any other details… */}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
