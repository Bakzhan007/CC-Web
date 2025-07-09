import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/afterpurchase-wrapper/Hero';
import Steps from '../components/afterpurchase-wrapper/Steps';
import Contact from '../components/afterpurchase-wrapper/Contact';

function AfterPurchase() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        <Hero />
        <Steps />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default AfterPurchase;