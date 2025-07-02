import Header from '../components/Header';
import Footer from '../components/Footer';

function AfterPurchase() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        <section className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What to do after purchase
          </h1>
          <p className="text-slate-700">Content coming soon.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AfterPurchase;