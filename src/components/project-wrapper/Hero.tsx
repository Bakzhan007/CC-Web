import { useLanguage } from '../../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative">
      <div className="h-60 sm:h-80 md:h-[30rem] lg:h-[36rem] overflow-hidden relative">
        <img
          src="https://images.pexels.com/photos/18862358/pexels-photo-18862358.jpeg"
          alt="Projects banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            {t.projectsTitle} <span className="text-blue-400">{t.projectsSubtitle}</span>
          </h1>
        </div>
      </div>
    </section>
  );
}