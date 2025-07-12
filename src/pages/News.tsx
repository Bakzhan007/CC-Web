import Header from '../components/Header';
import Hero from '../components/news-wrapper/Hero';
import Articles from '../components/news-wrapper/Articles';
import Footer from '../components/Footer';
import Maintenance from './Maintenance';

const News = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
      {/*  <Hero /> 
        <Articles /> */}
        <Maintenance />
      </main>
      <Footer />
    </div>
  );
};

export default News;