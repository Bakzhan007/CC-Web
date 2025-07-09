import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/career-wrapper/Hero';
import Values from '../components/career-wrapper/Values';
import Benefits from '../components/career-wrapper/Benefits';
import Testimonials from '../components/career-wrapper/Testimonials';
import Jobs from '../components/career-wrapper/Jobs';
import Process from '../components/career-wrapper/Process';
import Contact from '../components/career-wrapper/Contact';

function Career() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        <Hero />
        <Values />
        <Benefits />
        <Testimonials />
        <Jobs />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Career;