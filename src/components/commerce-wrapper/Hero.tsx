import bannerImage from '../../assets/image/commercial-banner.jpg';

const Hero = () => (
  <div
    className="max-w-7xl mx-auto px-6 lg:px-8 mt-[104px] sm:mt-[112px] lg:mt-[128px] pb-4"
  >
    <div
      className="relative w-full overflow-hidden rounded-3xl h-[150px] sm:h-[300px] md:h-[400px] lg:h-[600px] xl:h-[700px]"
    >
      <img
        src={bannerImage}
        alt="Коммерческая недвижимость"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex items-end justify-start p-6">
        <div className="bg-gradient-to-r from-white/90 via-white/70 to-white/50 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-md">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Коммерческая недвижимость
          </h1>
          <p className="text-gray-700 mb-4">
            Лучшие офисные помещения в ключевых городах Казахстана
          </p>
          <button className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
            Получить консультацию
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;