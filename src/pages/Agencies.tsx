import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import { Award } from "lucide-react";
import Footer from '../components/Footer';

import logoTstn from '../assets/logo/tstn.jpg';
import logoIronPlast from '../assets/logo/iranPlast.jpeg';
import logoKcm from '../assets/logo/kcmkz.png';
import logoLAluminstroi from '../assets/logo/ljuminstroj.jpg';
import logoOpti from '../assets/logo/opti.jpg';

import agencies3 from '../assets/image/agencies3.jpg'
import agencies4 from '../assets/image/agencies4.jpg'
import agencies5 from '../assets/image/agencies5.jpg'
import agencies6 from '../assets/image/agencies6.jpg'
import agencies7 from '../assets/image/agencies7.jpg'
import agencies8 from '../assets/image/agencies8.jpg'
import agencies9 from '../assets/image/agencies9.jpg'
import agencies10 from '../assets/image/agencies10.jpg'

import Hero from "../components/agencies-wrapper/Hero";
import SearchFilter from "../components/agencies-wrapper/SearchFilter";
import AgencyCard from "../components/agencies-wrapper/AgencyCard";
import CompactAgencyCard from "../components/agencies-wrapper/CompactAgencyCard";
import Gallery from "../components/agencies-wrapper/Gallery";
import { Agency } from "../components/agencies-wrapper/types";

const agencies: Agency[] = [
  {
    id: 1,
    name: "ТОО ТехноНиколь - Казахстан",
    description: "Торговая Сеть ТЕХНОНИКОЛЬ (ТСТН) — крупнейшая торговая компания, управляющая сетью из 100+ собственных торговых отделений, расположенных в России, Беларуси и Казахстане. Сеть реализует продукцию корпорации ТЕХНОНИКОЛЬ и широкий ассортимент строительных и отделочных материалов для промышленного, гражданского и частного домостроения от ведущих производителей.",
    category: "Торговый Сеть",
    location: "г. Астана, Сарыарка район (Коктал), ул. Придорожная, 8/2",
    phone: "+7 (800) 08-08-333",
    email: "kz-info@tstn.kz",
    website: "https://www.tstn.kz/",
    logo: logoTstn,
    coverImage: "https://www.tstn.kz/upload/medialibrary/f2e/o55a225px8qzp8jjj7ihs8m6v8c8oz2y/Rulonnaya-cherepitsa.jpg",
    galleryImages: [
      "https://www.tstn.kz/upload/medialibrary/1e7/d9z856pxp66yw773w4u1tgcqrtwc6ejo/1.jpg",
      "https://www.tstn.kz/upload/medialibrary/5f9/v419m5p6f7nd6d9s24jd7u557w1hv3bt/Snimok-ekrana-2025_02_27-224256.jpg",
      "https://www.tstn.kz/upload/medialibrary/fb4/vs184464w13oqsw9qj3g0u6kq6p7i2sq/Snimok-ekrana-2025_02_27-223824.jpg"
    ],
    rating: 4.9,
    employees: "50-100",
    established: "2015",
    featured: true,
    specialties: ["Кровельные материалы", "Гидроизоляция", "Теплоизоляционные материалы", "Фасадные системы"],
    projects: 100
  },
  {
    id: 2,
    name: "TOO “IRON PLAST",
    description: "Торговая сеть, осуществляющая оптово-розничную торговлю пластмассовой продукцией в неспециализированных магазинах площадью свыше 2000 м².",
    category: "Торговая сеть",
    location: "г. Астана, ул. Бейсекбаева, 23, ТД Куаныш",
    phone: "+7 (777) 522-07-28",
    email: "astana@ironplast.kz",
    website: "https://ironplast.kz/",
    logo:logoIronPlast,
    coverImage: "https://ironplast.kz/upload/iblock/397/nwmukha0vif6onkh2bo1fqbkohjm4ktg.jpg",
    galleryImages: [
      "https://ironplast.kz/upload/iblock/17b/0q8v4ogsm5uoedvog4x815xajpel4cdy.jpg",
      "https://ironplast.kz/upload/iblock/d0f/epusvs5dyim551ia4387zpdais7vfwh6.jpg",
      "https://ironplast.kz/upload/iblock/c92/gy80rm8tlutm8m2ondght8qpv402iyac.jpg"
    ],
    rating: 4.8,
    employees: "25-50",
    established: "2018",
    featured: true,
    specialties: ["Контейнеры", "Паллеты", "Поддоны", "Ящики", "Тара"],
    projects: 180
  },
  {
    id: 3,
    name: "TOO KSM CONCRETE",
    description: "ТОО «KSM CONCRETE» специализируется на производстве товарного бетона для строительных работ.",
    category: "Производство товарного бетона",
    location: "Мангистауская область, город Актау, мкр. 32 Б, д. 3, кв. 81",
    phone: "+7 (777) 925-92-92",
    email: "ksm.concrete@mail.ru",
    website: "techforward.com",
    logo: logoKcm,
    coverImage: "https://static.tildacdn.pro/tild3937-3237-4533-b565-313663356361/IMG_4805.jpg",
    galleryImages: [
      "https://static.tildacdn.pro/tild3631-6238-4863-a665-633937316336/IMG_4880.jpg",
      "https://thb.tildacdn.pro/tild3762-6632-4264-b465-363462313161/-/resize/504x/83d7dadb-19e5-458a-9.jpg",
      "https://static.tildacdn.pro/tild3930-3362-4366-a530-386666366235/IMG_4867.jpg"
    ],
    rating: 4.7,
    employees: "100-200",
    established: "2012",
    featured: false,
    specialties: ["Товарный бетон", "Бетон", "Раствор", "ЖБИ"],
    projects: 320
  },
  {
    id: 4,
    name: "TOO Алюминстрой Казахстан",
    description: "TOO «Алюминстрой Казахстан» — официальный филиал компании Алюминстрой. Предлагает полный комплекс услуг по поставке, обработке, проектированию и монтажу алюминиевых композитных панелей, фасадных огнестойких панелей и материалов для наружной рекламы по всему Казахстану.",
    category: "Производство и поставка фасадных материалов",
    location: "г. Астана, ул. Александра Пушкина, д. 27/3",
    phone: "+7 (708) 202-0022",
    email: "info@aluminstroy.kz",
    website: "https://aluminstroy.kz",
    logo: logoLAluminstroi,
    coverImage: "https://lh6.googleusercontent.com/proxy/YmLmoY1-jk-QDd5RknL0k_KqIWcYnS5itvc8jUwSxOWlNzKoYSY3wbAsQ1CBakC8Fr5bt2v5iAOgKDe5nquRLtpS",
    galleryImages: [
      "https://avatars.mds.yandex.net/get-altay/5517178/2a0000017f07aa09cb16d56026b99cf1ac20/L_height",
      "https://static.tildacdn.pro/tild6531-3563-4662-b836-363530313266/5.jpg",
      "https://static.tildacdn.pro/tild3663-3738-4738-b164-376639306463/7_1.jpg"
    ],
    rating: 4.6,
    employees: "75-100",
    established: "2016",
    featured: false,
    specialties: ["Панели", "Фасады", "Монтаж", "Поставка"],
    projects: 195
  },
  {
    id: 5,
    name: "TOO BUILDING TOWN SERVICE",
    description: "TOO «BUILDING TOWN SERVICE» осуществляет оптовую торговлю лакокрасочной продукцией, обоями, напольными покрытиями, сухими строительными смесями и теплоизоляционными материалами в г. Актау.",
    category: "Оптовая торговля строительными материалами",
    location: "Мангистауская область, г. Актау, мкр. 29 А, здание 115, офис 315",
    phone: "+7 (702) 069-53-32",
    email: "нету",
    website: "",
    logo: "",
    coverImage: "https://avatars.mds.yandex.net/get-altay/9368060/2a00000189a39ee47548bdaa78303e440ec2/orig",
    galleryImages: [
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    ],
    rating: 4.9,
    employees: "15-25",
    established: "2020",
    featured: true,
    specialties: ["Смеси", "Изоляция", "Лакокраска", "Обои"],
    projects: 85
  },
  {
    id: 6,
    name: "TOO Optimum WDF",
    description: "TOO «Optimum WDF» специализируется на оптовой торговле строительными материалами и комплектующими и является официальным дилером заводов NOVUS POLYMER (Galwin, Rossi), Ruit (Aluminium), FORES (фурнитура) и NEDEX GROUP",
    category: "Оптовая торговля широким ассортиментом товаров",
    location: "г. Алматы, Жетысуский район, ул. Полежаева, д. 92В",
    phone: "+7 (701) 766-22-10",
    email: "eleanor@optimum-wdf.kz",
    website: "",
    logo: logoOpti,
    coverImage: "https://avatars.mds.yandex.net/get-altay/11937297/2a0000018e0f749198d51ddafac028d461c6/M_height",
    galleryImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmIdkm50-a2Eh-JhG3F4-uMTre5rwiGGah4qsUq0pL6kTB82LLPEFlWV7p5Vo1QubsyHg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXtlaqXtV4W-n4x20nCRsFldoNMzgnph-d41sQWSOzs3Tzm3Ypys1YIVXIumcW2ynzUC8&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaiIsRc9VKGpVE4t2VfWd3upB_jHYWqsRnZg&s"
    ],
    rating: 4.8,
    employees: "30-50",
    established: "2019",
    featured: false,
    specialties: ["Полимеры", "Алюминий", "Фурнитура", "Окна"],
    projects: 125
  }
];

const categories = ["All", "Digital Marketing", "Creative Design", "Technology"];

export default function Agencies() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const filteredAgencies = agencies.filter(agency => {
    const matchesSearch = agency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agency.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agency.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || agency.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredAgencies = filteredAgencies.filter(agency => agency.featured);
  const regularAgencies = filteredAgencies.filter(agency => !agency.featured);

  return (
    <div className="min-h-screen flex flex-col bg-white">
    <Header />
    <main className="pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        <Hero />
        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          categories={categories}
        />
      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-gray-600 text-lg">
          {t.agenciesShowing}{' '}
          <span className="font-semibold text-blue-600">{filteredAgencies.length}</span>{' '}
          {t.agenciesWord}        </p>
      </div>

      {/* Featured Agencies */}
      {featuredAgencies.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{t.agenciesFeaturedPartners}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAgencies.map(agency => (
              <AgencyCard key={agency.id} agency={agency} featured={true} />
            ))}
          </div>
        </div>
      )}

      {/* All Agencies - New Compact List Design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">{t.agenciesAllAgencies}</h2>
        <div className="space-y-4">
          {regularAgencies.map(agency => (
            <CompactAgencyCard key={agency.id} agency={agency} />
          ))}
        </div>
      </div>

        <Gallery images={[agencies4, agencies6, agencies5, agencies3, agencies8, agencies9, agencies7, agencies10]} />
    <Footer />
    </main>
    </div>
  );
}