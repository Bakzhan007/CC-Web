import Header from '../components/Header';
import Hero from '../components/home-wrapper/Hero';
import CompanyOverview from '../components/home-wrapper/CompanyOverview';
import Video from '../components/home-wrapper/Video';
import ProjectsShowcase from '../components/home-wrapper/ProjectsShowcase';
import Services from '../components/home-wrapper/Services';
import Leadership from '../components/home-wrapper/Leadership';
import Stats from '../components/home-wrapper/Stats';
import Contact from '../components/home-wrapper/Contact';
import Footer from '../components/Footer';
import About from '../components/home-wrapper/About';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        <Hero />
        <CompanyOverview />\
        <Video />
        <Stats />
        <ProjectsShowcase />
        <Leadership />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;