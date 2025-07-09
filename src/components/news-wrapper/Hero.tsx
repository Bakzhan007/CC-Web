import { useLanguage } from '../../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-slate-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          {t.footerLinks.news}
        </h1>
      </div>
    </section>
  );
};

export default Hero;