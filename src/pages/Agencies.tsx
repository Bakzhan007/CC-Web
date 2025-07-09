import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Search, MapPin, Phone, Mail, Globe, Filter, Star, Users, Award, ArrowRight, Briefcase, ExternalLink, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import logoTstn from '../assets/logo/tstn.jpg';
import logoIronPlast from '../assets/logo/iranPlast.jpeg';
import logoKcm from '../assets/logo/kcmkz.png';
import logoLAluminstroi from '../assets/logo/ljuminstroj.jpg';
import logoOpti from '../assets/logo/opti.jpg';

import agenciesPartner from '../assets/image/agencies2.jpg'
import agencies3 from '../assets/image/agencies3.jpg'
import agencies4 from '../assets/image/agencies4.jpg'
import agencies5 from '../assets/image/agencies5.jpg'
import agencies6 from '../assets/image/agencies6.jpg'
import agencies7 from '../assets/image/agencies7.jpg'
import agencies8 from '../assets/image/agencies8.jpg'
import agencies9 from '../assets/image/agencies9.jpg'
import agencies10 from '../assets/image/agencies10.jpg'


interface Agency {
  id: number;
  name: string;
  description: string;
  category: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  logo: string;
  coverImage: string;
  galleryImages: string[];
  rating: number;
  employees: string;
  established: string;
  featured: boolean;
  specialties: string[];
  projects: number;
}

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

      {/* Hero Section with Background Image */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="absolute inset-0 overflow-hidden">
          <img
            src={agenciesPartner}
            alt="Our partner agencies at work"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {t.agenciesHeroTitle1}
              <span className="block text-blue-300">{t.agenciesHeroTitle2}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.agenciesHeroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-blue-200">
                <Award className="w-5 h-5" />
                <span>{t.agenciesStatPartners}</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Star className="w-5 h-5" />
                <span>{t.agenciesStatRating}</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Users className="w-5 h-5" />
                <span>{t.agenciesStatProjects}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 -mt-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Search Bar */}
            <div className="lg:col-span-6 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t.agenciesSearchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Category Filter */}
            <div className="lg:col-span-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Filter Toggle */}
            <div className="lg:col-span-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200"
              >
                <Filter className="w-5 h-5" />
                <span className="hidden sm:inline">{t.agenciesFilters}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

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

      {/* Photo Gallery Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t.agenciesGalleryTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.agenciesGalleryDescription}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              agencies4, agencies6, agencies5, agencies3,
              agencies8, agencies9, agencies7, agencies10
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl aspect-square">
                <img
                  src={image}
                  alt={`Agency workspace ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    <Footer />
    </main>
    </div>
  );
}

function AgencyCard({ agency, featured }: { agency: Agency; featured: boolean }) {
  const { t } = useLanguage();
  return (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${featured ? 'ring-2 ring-yellow-400' : ''}`}>
      {/* Cover Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={agency.coverImage} 
          alt={`${agency.name} office`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-sm font-medium px-3 py-1 rounded-full flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>{t.featured}</span>
          </div>
        )}

        {/* Logo overlay */}
        <div className="absolute bottom-4 left-4">
          <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-1 shadow-lg">
            <img 
              src={agency.logo} 
              alt={`${agency.name} logo`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        {/* Agency Header */}
        <div className="mb-4">
          <h3 className="font-bold text-xl text-gray-900 mb-2">{agency.name}</h3>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            {agency.category}
          </span>
        </div>

        {/* Rating and Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-medium">{agency.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{agency.employees}</span>
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            <span>{agency.projects}+ projects</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">{agency.description}</p>

        {/* Gallery Preview */}
        <div className="mb-4">
          <div className="flex gap-2 overflow-hidden">
            {agency.galleryImages.slice(0, 3).map((image, index) => (
              <div key={index} className="w-16 h-12 rounded-md overflow-hidden flex-shrink-0">
                <img 
                  src={image} 
                  alt={`${agency.name} work ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
                />
              </div>
            ))}
            <div className="w-16 h-12 rounded-md bg-gray-100 flex items-center justify-center text-xs text-gray-500 font-medium">
              +{agency.galleryImages.length - 3}
            </div>
          </div>
        </div>

        {/* Specialties */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {agency.specialties.slice(0, 3).map(specialty => (
              <span key={specialty} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                {specialty}
              </span>
            ))}
            {agency.specialties.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                +{agency.specialties.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{agency.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Phone className="w-4 h-4" />
            <span>{agency.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Mail className="w-4 h-4" />
            <span className="truncate">{agency.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompactAgencyCard({ agency }: { agency: Agency }) {
  const { t } = useLanguage();
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Image and Logo */}
        <div className="lg:w-80 h-48 lg:h-auto relative overflow-hidden flex-shrink-0">
          <img 
            src={agency.coverImage} 
            alt={`${agency.name} office`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="absolute bottom-3 left-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-1 shadow-md">
              <img 
                src={agency.logo} 
                alt={`${agency.name} logo`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 p-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between h-full">
            {/* Main Content */}
            <div className="flex-1 lg:pr-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">{agency.name}</h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {agency.category}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-2 sm:mt-0 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{agency.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Est. {agency.established}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{agency.description}</p>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{agency.employees} employees</span>
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  <span>{agency.projects}+ projects</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{agency.location}</span>
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {agency.specialties.slice(0, 4).map(specialty => (
                    <span key={specialty} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                      {specialty}
                    </span>
                  ))}
                  {agency.specialties.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                      +{agency.specialties.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Gallery Preview - Mobile/Tablet */}
              <div className="lg:hidden mb-4">
                <div className="flex gap-2">
                  {agency.galleryImages.slice(0, 4).map((image, index) => (
                    <div key={index} className="w-12 h-9 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src={image} 
                        alt={`${agency.name} work ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="lg:w-48 flex-shrink-0">
              {/* Gallery Preview - Desktop */}
              <div className="hidden lg:block mb-4">
                <div className="grid grid-cols-2 gap-2">
                  {agency.galleryImages.slice(0, 4).map((image, index) => (
                    <div key={index} className="aspect-square rounded-md overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${agency.name} work ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="truncate">{agency.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{agency.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}