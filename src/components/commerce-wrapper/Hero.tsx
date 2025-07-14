import bannerImage from '../../assets/image/commercial-banner.jpg';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[104px] sm:mt-[112px] lg:mt-[128px] pb-4">
      <div className="relative w-full overflow-hidden rounded-3xl h-64 sm:h-80 md:h-96 lg:h-[600px] xl:h-[700px]">
        <img
          src={bannerImage}
          alt={t.commerceHeroTitle}
          className="object-cover w-full h-full"
        />
        {/* Overlay container: Center on mobile, bottom on larger screens */}
        <div className="absolute inset-0 flex flex-col justify-center sm:justify-end items-center sm:items-start p-4 sm:p-6 lg:p-8">
          <div className="bg-gradient-to-r from-white/90 via-white/70 to-white/50 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-lg max-w-full sm:max-w-md">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {t.commerceHeroTitle}
            </h1>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              {t.commerceHeroDescription}
            </p>
            <button className="inline-block px-4 sm:px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
              {t.commerceHeroButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
