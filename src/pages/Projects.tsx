import Header from '../components/Header';
import Footer from '../components/Footer';

import Hero from '../components/project-wrapper/Hero';
import ProjectList from '../components/project-wrapper/ProjectList';

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        <Hero />
        <ProjectList />
      </main>
      <Footer />
    </div>
  );
}