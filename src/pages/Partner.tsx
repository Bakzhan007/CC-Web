import Header from '../components/Header';
import Footer from '../components/Footer';

import Conditions from '../components/partner-wrapper/Conditional';
import Benefits from '../components/partner-wrapper/Benefits';
import Cta from '../components/partner-wrapper/Cta';

export default function Partner() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        <Conditions />
        <Benefits />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
