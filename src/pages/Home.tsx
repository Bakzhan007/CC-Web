import Header from '../components/Header';
import Hero from '../components/home-wrapper/Hero';
import About from '../components/home-wrapper/About';
import Services from '../components/home-wrapper/Services';
import Values from '../components/home-wrapper/Values';
import Stats from '../components/home-wrapper/Stats';import Contact from '../components/home-wrapper/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        <Hero />
        <About />
        <Services />
        <Values />
        <Stats />        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;