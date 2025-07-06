import { useLanguage } from '../../contexts/LanguageContext';

const Video = () => {
  const { t } = useLanguage();
  return (
    <section id="video" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.videoTitle}
            <span className="text-blue-600"> {t.videoSubtitle}</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t.videoDescription}
          </p>
        </div>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-xl shadow-xl"
            src="https://www.youtube.com/embed/f2wmLFigdSg?si=96YJMcUWwPNSwf5L"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;