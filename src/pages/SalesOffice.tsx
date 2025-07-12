import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

interface Office {
  id: number;
  title: string;
  address: string;
  hours: { label: string; time: string }[];
  image: string;
  coords: { lat: number; lng: number };
}

const offices: Office[] = [
  {
    id: 1,
    title: 'Отдел продаж',
    address: 'Nesibek-Nur 16mkr 22/1',
    hours: [
      { label: 'Пн–Пт', time: '9:00–18:00' },
    ],
    image: 'https://cachizer2.2gis.com/reviews-photos/27e63043-d9bb-4e2a-98db-00236b91a4cd.jpg',
    coords: { lat: 51.16056, lng: 43.68520 },
  },
  {
    id: 2,
    title: 'Отдел продаж',
    address: 'ЖК Beibitshilik 7mkr Zhanaozen',
    hours: [
      { label: 'Пн–Пт', time: '9:00-18:00' },
    ],
    image: 'https://krisha-photos.kcdn.online/07/3ca9649d57d2993d2acc311da0342e4d484419/photo-750x470.jpg',
    coords: { lat: 51.17200, lng: 43.67000 },
  },
];

function SalesOffice() {
  const { t } = useLanguage();
  const buyerInfo = [
    { icon: Phone, title: '+7(700) 636-36-31', subtitle: t.salesOfficeOnlineCenter },
    { icon: Mail, title: 'caspiancoast@list.ru', subtitle: t.salesOfficeBuyProperty },
    {
      icon: MapPin,
      title: t.salesOfficeHeadOffice,
      subtitle: 'г. Актау, Nesibek-Nur 16 22/1',
    },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-12 gap-8">
            {/* Left: список офисов */}
            <div className="col-span-12 lg:col-span-3 space-y-6 h-[600px] overflow-y-auto">
              {offices.map((o) => (
                <div key={o.id} className="bg-white rounded-xl shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={`${o.image}?auto=compress&cs=tinysrgb&w=600`}
                      alt={o.title}
                      className="w-full h-40 object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      {o.title}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-slate-800 mb-2">{o.address}</p>
                    {o.hours.map((h, i) => (
                      <p key={i} className="text-xs text-slate-600">
                        <span className="font-semibold">{h.label}:</span> {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Center: карта */}
            <div className="col-span-12 lg:col-span-6 rounded-xl overflow-hidden shadow-lg h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8476.674133520033!2d51.160565313259816!3d43.68519789505753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41b431ee886f7f73%3A0x45db538a33f0a6ab!2z0JTQtdC70L7QstC-0Lkg0KbQtdC90YLRgCAiTmVzaWJlay1OdXIgUGxhemEi!5e0!3m2!1sru!2skz!4v1751495082480!5m2!1sru!2skz"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            {/* Right: информация для покупателей */}
            <div className="col-span-12 lg:col-span-3 space-y-6">
              <h2 className="text-xl font-semibold text-slate-900">{t.salesOfficeForBuyers}</h2>
              {buyerInfo.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg shadow-inner"
                >
                  <div className="p-3 bg-white rounded-lg flex-shrink-0">
                    <b.icon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-slate-900">{b.title}</p>
                    <p className="text-sm text-slate-600">{b.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SalesOffice;
