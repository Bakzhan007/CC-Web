import Header from '../components/Header';
import Hero from '../components/home-wrapper/Hero';
import About from '../components/home-wrapper/About';
import Services from '../components/home-wrapper/Services';
import Projects from '../components/home-wrapper/Projects';
import Contact from '../components/home-wrapper/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;