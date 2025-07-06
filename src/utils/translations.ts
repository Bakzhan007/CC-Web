export interface Translation {
  // Header
  home: string;
  about: string;
  services: string;
  projects: string;
  contact: string;
  sale: string;
  forPartner: string;
  ccGuide: string;
  topNews: string;
  topAgencies: string;
  topCareer: string;
  topCommerce: string;
  topAbc: string;
  guideSalesOffice: string;
  guideFaq: string;
  guideAfterPurchase: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  startProject: string;
  viewWork: string;
  projectsCompleted: string;
  yearsExperience: string;
  awardsWon: string;
  
  // About Section
  aboutTitle: string;
  aboutSubtitle: string;
  aboutDescription1: string;
  aboutDescription2: string;
  ourAchievements: string;
  achievements: {
    iso: string;
    leed: string;
    safety: string;
    best: string;
  };
  coreValues: string;
  coreValuesDescription: string;
  values: {
    precision: {
      title: string;
      description: string;
    };
    innovation: {
      title: string;
      description: string;
    };
    reliability: {
      title: string;
      description: string;
    };
  };
  years: string;
  
  // Services Section
  servicesTitle: string;
  servicesSubtitle: string;
  servicesDescription: string;
  servicesList: {
    commercial: {
      title: string;
      description: string;
      features: string[];
    };
    residential: {
      title: string;
      description: string;
      features: string[];
    };
    renovation: {
      title: string;
      description: string;
      features: string[];
    };
    design: {
      title: string;
      description: string;
      features: string[];
    };
    sustainable: {
      title: string;
      description: string;
      features: string[];
    };
    management: {
      title: string;
      description: string;
      features: string[];
    };
  };
  readyToStart: string;
  readyToStartDescription: string;
  getFreeConsultation: string;


  // Video Section
  videoTitle: string;
  videoSubtitle: string;
  videoDescription: string;
  
  // Projects Section
  projectsTitle: string;
  projectsSubtitle: string;
  projectsDescription: string;
  allProjects: string;
  commercial: string;
  residential: string;
  industrial: string;
  viewDetails: string;
  learnMore: string;
  loadMore: string;
  completed: string;
  inProgress: string;
  planning: string;
  
  // Contact Section
  contactTitle: string;
  contactSubtitle: string;
  contactDescription: string;
  contactInformation: string;
  phone: string;
  email: string;
  address: string;
  businessHours: string;
  visitOffice: string;
  visitOfficeDescription: string;
  sendMessage: string;
  firstName: string;
  lastName: string;
  projectType: string;
  selectProjectType: string;
  projectTypes: {
    commercial: string;
    residential: string;
    renovation: string;
    industrial: string;
    other: string;
  };
  message: string;
  messagePlaceholder: string;
  
  // Footer
  footerDescription: string;
  ourServices: string;
  quickLinks: string;
  stayUpdated: string;
  newsletterDescription: string;
  subscribe: string;
  yourEmail: string;
  footerLinks: {
    aboutUs: string;
    careers: string;
    news: string;
    privacy: string;
    terms: string;
    sitemap: string;
  };
  allRightsReserved: string;
}

export const translations: Record<string, Translation> = {
  en: {
    // Header
    home: 'Home',
    about: 'About',
    services: 'Services',
    projects: 'Projects',
    contact: 'Contact',
    sale: 'Sale',
    forPartner: 'For Partner',
    ccGuide: 'CC Guide',
    topNews: 'News',
    topAgencies: 'Real estate agencies',
    topCareer: 'Career',
    topCommerce: 'commerce',
    topAbc: 'ABC',
    guideSalesOffice: 'Sales Office',
    guideFaq: 'FAQ',
    guideAfterPurchase: 'What to do after purchase',

    
    // Hero Section
    heroTitle: 'Building Dreams,',
    heroSubtitle: 'Creating Legacy',
    heroDescription: 'Premium construction and development services along the Caspian Coast. Where architectural excellence meets uncompromising quality.',
    startProject: 'Start Your Project',
    viewWork: 'View Our Work',
    projectsCompleted: 'Projects Completed',
    yearsExperience: 'Years Experience',
    awardsWon: 'Awards Won',
    
    // About Section
    aboutTitle: 'Briefly',
    aboutSubtitle: 'about as',
    aboutDescription1: 'Caspian Coast LLP was founded in 2017 with the purpose of providing high-quality construction services in the sphere of civil and industrial construction. Over the years of its activities, the company as successfuly implemented a lot of projects, including residential complexes, office building, as well ass infrastructure and industrial facilities.',
    aboutDescription2: 'Caspian Coast has carried out a range of key infrastructure projects on the Caspian Sea coast and throughout the Mangystau region: constructing a production facility in Aktau, a 100 000-bird poultry farm in Bayandy, installing water and gas networks for agricultural and administrative sites, delivering engineering services to residential districts, establishing an auto service center with car wash and parking, developing a recreation base, and completing numerous other works across the region.',
    ourAchievements: 'Our Achievements',
    achievements: {
      iso: 'ISO 9001:2015 Certified Quality Management',
      leed: 'LEED Green Building Certified',
      safety: 'National Safety Excellence Award',
      best: 'Best Construction Company 2023'
    },
    coreValues: 'Our Core Values',
    coreValuesDescription: 'The principles that guide every project we undertake and every relationship we build.',
    values: {
      precision: {
        title: 'Precision',
        description: 'Every detail matters. We deliver projects with meticulous attention to accuracy and quality.'
      },
      innovation: {
        title: 'Innovation',
        description: 'Embracing cutting-edge technologies and sustainable building practices for the future.'
      },
      reliability: {
        title: 'Reliability',
        description: 'Trusted partnerships built on transparency, integrity, and consistent delivery.'
      }
    },
    years: 'Years',
    
    // Services Section
    servicesTitle: 'Our',
    servicesSubtitle: 'Services',
    servicesDescription: 'From concept to completion, we offer comprehensive construction and development services that bring your vision to life with exceptional quality and attention to detail.',
    servicesList: {
      commercial: {
        title: 'Commercial Construction',
        description: 'Office buildings, retail spaces, and industrial facilities designed for functionality and aesthetics.',
        features: ['Office Complexes', 'Retail Centers', 'Industrial Facilities', 'Warehouses']
      },
      residential: {
        title: 'Residential Development',
        description: 'Custom homes, luxury apartments, and residential communities that define modern living.',
        features: ['Custom Homes', 'Luxury Apartments', 'Residential Communities', 'Townhouses']
      },
      renovation: {
        title: 'Renovation & Remodeling',
        description: 'Transform existing spaces with our comprehensive renovation and modernization services.',
        features: ['Interior Renovation', 'Exterior Upgrades', 'Structural Modifications', 'Historic Restoration']
      },
      design: {
        title: 'Design & Architecture',
        description: 'Complete architectural services from concept to construction with innovative design solutions.',
        features: ['Architectural Design', '3D Visualization', 'Interior Design', 'Landscape Architecture']
      },
      sustainable: {
        title: 'Sustainable Building',
        description: 'Eco-friendly construction practices and green building solutions for a sustainable future.',
        features: ['LEED Certification', 'Solar Integration', 'Energy Efficiency', 'Sustainable Materials']
      },
      management: {
        title: 'Project Management',
        description: 'End-to-end project management ensuring timely delivery and budget compliance.',
        features: ['Timeline Management', 'Quality Control', 'Budget Oversight', 'Permit Handling']
      }
    },
    readyToStart: 'Ready to Start Your Project?',
    readyToStartDescription: "Let's discuss how we can bring your construction vision to life with our expertise and dedication.",
    getFreeConsultation: 'Get Free Consultation',

    // Video Section
    videoTitle: 'Watch Our',
    videoSubtitle: 'Introduction',
    videoDescription: 'Take a quick tour of our company and discover how we build lasting value for our clients.',
    
    // Projects Section
    projectsTitle: 'Featured',
    projectsSubtitle: 'Projects',
    projectsDescription: 'Explore our portfolio of completed and ongoing projects that showcase our commitment to excellence and innovation in construction.',
    allProjects: 'All Projects',
    commercial: 'Commercial',
    residential: 'Residential',
    industrial: 'Industrial',
    viewDetails: 'View Details',
    learnMore: 'Learn More',
    loadMore: 'Load More Projects',
    completed: 'Completed',
    inProgress: 'In Progress',
    planning: 'Planning',
    
    // Contact Section
    contactTitle: 'Get In',
    contactSubtitle: 'Touch',
    contactDescription: 'Ready to start your next construction project? Contact us today for a consultation and let\'s bring your vision to life.',
    contactInformation: 'Contact Information',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    businessHours: 'Business Hours',
    visitOffice: 'Visit Our Office',
    visitOfficeDescription: 'Located in the heart of Caspian City, our office is easily accessible and equipped with modern facilities for client meetings.',
    sendMessage: 'Send us a Message',
    firstName: 'First Name',
    lastName: 'Last Name',
    projectType: 'Project Type',
    selectProjectType: 'Select project type',
    projectTypes: {
      commercial: 'Commercial Construction',
      residential: 'Residential Development',
      renovation: 'Renovation & Remodeling',
      industrial: 'Industrial Construction',
      other: 'Other'
    },
    message: 'Message',
    messagePlaceholder: 'Tell us about your project...',
    
    // Footer
    footerDescription: 'Building the future along the Caspian Coast with excellence, innovation, and sustainable practices for over 25 years.',
    ourServices: 'Our Services',
    quickLinks: 'Quick Links',
    stayUpdated: 'Stay Updated',
    newsletterDescription: 'Subscribe to our newsletter for the latest news and project updates.',
    subscribe: 'Subscribe',
    yourEmail: 'Your email',
    footerLinks: {
      aboutUs: 'About Us',
      careers: 'Careers',
      news: 'News & Updates',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      sitemap: 'Sitemap'
    },
    allRightsReserved: '© 2024 CaspianCoast Construction. All rights reserved.'
  },
  
  ru: {
    // Header
    home: 'Главная',
    about: 'О нас',
    services: 'Услуги',
    projects: 'Проекты',
    contact: 'Контакты',
    sale: 'Продажа',
    forPartner: 'Партнерам',
    ccGuide: 'CC Гид',
    topNews: 'Новости',
    topAgencies: 'Агентства недвижимости',
    topCareer: 'Карьера',
    topCommerce: 'Коммерция',
    topAbc: 'ABC',
    guideSalesOffice: 'Отдел продаж',
    guideFaq: 'FAQ',
    guideAfterPurchase: 'Что делать после покупки',

    // Hero Section
    heroTitle: 'Строим мечты,',
    heroSubtitle: 'Создаем наследие',
    heroDescription: 'Премиальные строительные и девелоперские услуги на побережье Каспийского моря. Где архитектурное совершенство встречается с непревзойденным качеством.',
    startProject: 'Начать проект',
    viewWork: 'Наши работы',
    projectsCompleted: 'Завершенных проектов',
    yearsExperience: 'Лет опыта',
    awardsWon: 'Наград получено',
    
    // About Section
    aboutTitle: '25 лет',
    aboutSubtitle: 'Совершенства',
    aboutDescription1: 'CaspianCoast находится в авангарде строительства и развития в Каспийском регионе, превращая архитектурные видения в реальность с непревзойденным мастерством и инновациями.',
    aboutDescription2: 'От роскошных жилых комплексов до коммерческих достопримечательностей, мы объединяем традиционный строительный опыт с передовыми устойчивыми практиками для создания структур, выдерживающих испытание временем.',
    ourAchievements: 'Наши достижения',
    achievements: {
      iso: 'Сертификат ISO 9001:2015 по управлению качеством',
      leed: 'Сертификат LEED зеленого строительства',
      safety: 'Национальная премия за безопасность',
      best: 'Лучшая строительная компания 2023'
    },
    coreValues: 'Наши основные ценности',
    coreValuesDescription: 'Принципы, которые направляют каждый проект и каждые отношения, которые мы строим.',
    values: {
      precision: {
        title: 'Точность',
        description: 'Каждая деталь имеет значение. Мы выполняем проекты с тщательным вниманием к точности и качеству.'
      },
      innovation: {
        title: 'Инновации',
        description: 'Внедрение передовых технологий и устойчивых строительных практик для будущего.'
      },
      reliability: {
        title: 'Надежность',
        description: 'Доверенные партнерства, основанные на прозрачности, честности и последовательной доставке.'
      }
    },
    years: 'Лет',
    
    // Services Section
    servicesTitle: 'Наши',
    servicesSubtitle: 'Услуги',
    servicesDescription: 'От концепции до завершения мы предлагаем комплексные строительные и девелоперские услуги, которые воплощают ваше видение в жизнь с исключительным качеством и вниманием к деталям.',
    servicesList: {
      commercial: {
        title: 'Коммерческое строительство',
        description: 'Офисные здания, торговые помещения и промышленные объекты, спроектированные для функциональности и эстетики.',
        features: ['Офисные комплексы', 'Торговые центры', 'Промышленные объекты', 'Склады']
      },
      residential: {
        title: 'Жилищное строительство',
        description: 'Индивидуальные дома, роскошные квартиры и жилые комплексы, определяющие современную жизнь.',
        features: ['Индивидуальные дома', 'Роскошные квартиры', 'Жилые комплексы', 'Таунхаусы']
      },
      renovation: {
        title: 'Реконструкция и ремонт',
        description: 'Преобразование существующих пространств с помощью наших комплексных услуг по реконструкции и модернизации.',
        features: ['Внутренняя реконструкция', 'Внешние улучшения', 'Структурные изменения', 'Историческая реставрация']
      },
      design: {
        title: 'Дизайн и архитектура',
        description: 'Полные архитектурные услуги от концепции до строительства с инновационными дизайнерскими решениями.',
        features: ['Архитектурный дизайн', '3D визуализация', 'Дизайн интерьера', 'Ландшафтная архитектура']
      },
      sustainable: {
        title: 'Устойчивое строительство',
        description: 'Экологически чистые строительные практики и решения зеленого строительства для устойчивого будущего.',
        features: ['Сертификация LEED', 'Интеграция солнечной энергии', 'Энергоэффективность', 'Устойчивые материалы']
      },
      management: {
        title: 'Управление проектами',
        description: 'Комплексное управление проектами, обеспечивающее своевременную доставку и соблюдение бюджета.',
        features: ['Управление временем', 'Контроль качества', 'Надзор за бюджетом', 'Обработка разрешений']
      }
    },
    readyToStart: 'Готовы начать свой проект?',
    readyToStartDescription: 'Давайте обсудим, как мы можем воплотить ваше строительное видение в жизнь с нашим опытом и преданностью.',
    getFreeConsultation: 'Получить бесплатную консультацию',

        // Video Section
    videoTitle: 'Смотрите наше',
    videoSubtitle: 'видео',
    videoDescription: 'Краткий обзор нашей компании и нашего подхода к строительству.',
    
    // Projects Section
    projectsTitle: 'Избранные',
    projectsSubtitle: 'Проекты',
    projectsDescription: 'Изучите наше портфолио завершенных и текущих проектов, которые демонстрируют нашу приверженность совершенству и инновациям в строительстве.',
    allProjects: 'Все проекты',
    commercial: 'Коммерческие',
    residential: 'Жилые',
    industrial: 'Промышленные',
    viewDetails: 'Подробнее',
    learnMore: 'Узнать больше',
    loadMore: 'Загрузить еще проекты',
    completed: 'Завершен',
    inProgress: 'В процессе',
    planning: 'Планирование',
    
    // Contact Section
    contactTitle: 'Свяжитесь',
    contactSubtitle: 'с нами',
    contactDescription: 'Готовы начать свой следующий строительный проект? Свяжитесь с нами сегодня для консультации и давайте воплотим ваше видение в жизнь.',
    contactInformation: 'Контактная информация',
    phone: 'Телефон',
    email: 'Электронная почта',
    address: 'Адрес',
    businessHours: 'Рабочие часы',
    visitOffice: 'Посетите наш офис',
    visitOfficeDescription: 'Расположенный в центре Каспийского города, наш офис легко доступен и оборудован современными удобствами для встреч с клиентами.',
    sendMessage: 'Отправить сообщение',
    firstName: 'Имя',
    lastName: 'Фамилия',
    projectType: 'Тип проекта',
    selectProjectType: 'Выберите тип проекта',
    projectTypes: {
      commercial: 'Коммерческое строительство',
      residential: 'Жилищное строительство',
      renovation: 'Реконструкция и ремонт',
      industrial: 'Промышленное строительство',
      other: 'Другое'
    },
    message: 'Сообщение',
    messagePlaceholder: 'Расскажите нам о вашем проекте...',
    
    // Footer
    footerDescription: 'Строим будущее на побережье Каспийского моря с совершенством, инновациями и устойчивыми практиками уже более 25 лет.',
    ourServices: 'Наши услуги',
    quickLinks: 'Быстрые ссылки',
    stayUpdated: 'Будьте в курсе',
    newsletterDescription: 'Подпишитесь на нашу рассылку для получения последних новостей и обновлений проектов.',
    subscribe: 'Подписаться',
    yourEmail: 'Ваш email',
    footerLinks: {
      aboutUs: 'О нас',
      careers: 'Карьера',
      news: 'Новости и обновления',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия обслуживания',
      sitemap: 'Карта сайта'
    },
    allRightsReserved: '© 2024 CaspianCoast Construction. Все права защищены.'
  },
  
  kz: {
    // Header
    home: 'Басты бет',
    about: 'Біз туралы',
    services: 'Қызметтер',
    projects: 'Жобалар',
    contact: 'Байланыс',
    sale: 'Сатылым',
    forPartner: 'Серіктестерге',
    ccGuide: 'CC Гид',
    topNews: 'Жаңалықтар',
    topAgencies: 'Жылжымайтын мүлік агенттіктері',
    topCareer: 'Мансап',
    topCommerce: 'Сауда',
    topAbc: 'ABC',
    guideSalesOffice: 'Сату бөлімі',
    guideFaq: 'Жиі қойылатын сұрақтар',
    guideAfterPurchase: 'Сатып алғаннан кейін не істеу керек',
    
    // Hero Section
    heroTitle: 'Арман құрамыз,',
    heroSubtitle: 'Мұра жасаймыз',
    heroDescription: 'Каспий жағалауындағы премиум құрылыс және даму қызметтері. Сәулет өнерінің кереметтілігі сапасыз сапамен кездеседі.',
    startProject: 'Жобаны бастау',
    viewWork: 'Біздің жұмыстар',
    projectsCompleted: 'Аяқталған жобалар',
    yearsExperience: 'Жыл тәжірибе',
    awardsWon: 'Алынған марапаттар',
    
    // About Section
    aboutTitle: '25 жыл',
    aboutSubtitle: 'Кереметтілік',
    aboutDescription1: 'CaspianCoast Каспий аймағындағы құрылыс пен дамудың алдыңғы қатарында болып, сәулеттік көріністерді теңдесі жоқ шеберлік пен инновациялармен шындыққа айналдырады.',
    aboutDescription2: 'Люкс тұрғын үй кешендерінен коммерциялық белгілерге дейін, біз дәстүрлі құрылыс тәжірибесін уақыт сынағынан өтетін құрылымдар жасау үшін озық тұрақты тәжірибелермен біріктіреміз.',
    ourAchievements: 'Біздің жетістіктеріміз',
    achievements: {
      iso: 'ISO 9001:2015 сапа менеджменті сертификаты',
      leed: 'LEED жасыл құрылыс сертификаты',
      safety: 'Ұлттық қауіпсіздік кереметтілігі сыйлығы',
      best: '2023 жылғы ең үздік құрылыс компаниясы'
    },
    coreValues: 'Біздің негізгі құндылықтарымыз',
    coreValuesDescription: 'Біз жүзеге асыратын әрбір жоба мен құратын әрбір қарым-қатынасты басқаратын принциптер.',
    values: {
      precision: {
        title: 'Дәлдік',
        description: 'Әрбір бөлшек маңызды. Біз жобаларды дәлдік пен сапаға мұқият назар аудара отырып жеткіземіз.'
      },
      innovation: {
        title: 'Инновация',
        description: 'Болашақ үшін озық технологиялар мен тұрақты құрылыс тәжірибелерін қабылдау.'
      },
      reliability: {
        title: 'Сенімділік',
        description: 'Ашықтық, адалдық және дәйекті жеткізу негізінде құрылған сенімді серіктестік.'
      }
    },
    years: 'Жыл',
    
    // Services Section
    servicesTitle: 'Біздің',
    servicesSubtitle: 'Қызметтер',
    servicesDescription: 'Тұжырымдамадан аяқталуға дейін біз сіздің көріністеріңізді ерекше сапа мен бөлшектерге назар аудара отырып өмірге келтіретін кешенді құрылыс және даму қызметтерін ұсынамыз.',
    servicesList: {
      commercial: {
        title: 'Коммерциялық құрылыс',
        description: 'Функционалдылық пен эстетика үшін жасалған кеңсе ғимараттары, сауда орындары және өнеркәсіп нысандары.',
        features: ['Кеңсе кешендері', 'Сауда орталықтары', 'Өнеркәсіп нысандары', 'Қоймалар']
      },
      residential: {
        title: 'Тұрғын үй құрылысы',
        description: 'Заманауи өмірді анықтайтын жеке үйлер, люкс пәтерлер және тұрғын үй қауымдастықтары.',
        features: ['Жеке үйлер', 'Люкс пәтерлер', 'Тұрғын үй кешендері', 'Таунхаустар']
      },
      renovation: {
        title: 'Қайта құру және жөндеу',
        description: 'Біздің кешенді қайта құру және жаңғырту қызметтерімізбен қолданыстағы кеңістіктерді түрлендіру.',
        features: ['Ішкі қайта құру', 'Сыртқы жақсарту', 'Құрылымдық өзгерістер', 'Тарихи қалпына келтіру']
      },
      design: {
        title: 'Дизайн және сәулет',
        description: 'Инновациялық дизайн шешімдерімен тұжырымдамадан құрылысқа дейінгі толық сәулет қызметтері.',
        features: ['Сәулеттік дизайн', '3D визуализация', 'Интерьер дизайны', 'Ландшафт сәулеті']
      },
      sustainable: {
        title: 'Тұрақты құрылыс',
        description: 'Тұрақты болашақ үшін экологиялық таза құрылыс тәжірибелері және жасыл құрылыс шешімдері.',
        features: ['LEED сертификациясы', 'Күн энергиясын интеграциялау', 'Энергия тиімділігі', 'Тұрақты материалдар']
      },
      management: {
        title: 'Жоба басқаруы',
        description: 'Уақтылы жеткізу мен бюджетке сәйкестікті қамтамасыз ететін толық жоба басқаруы.',
        features: ['Уақыт басқаруы', 'Сапа бақылауы', 'Бюджет қадағалауы', 'Рұқсат беру']
      }
    },
    readyToStart: 'Жобаңызды бастауға дайынсыз ба?',
    readyToStartDescription: 'Біздің тәжірибе мен адалдығымызбен сіздің құрылыс көріністеріңізді қалай өмірге келтіруге болатынын талқылайық.',
    getFreeConsultation: 'Тегін кеңес алу',

    // Video Section
    videoTitle: 'Біздің',
    videoSubtitle: 'бейнебаянымыз',
    videoDescription: 'Компаниямыз туралы қысқаша бейнероликті қарап шығыңыз.',
    
    // Projects Section
    projectsTitle: 'Таңдаулы',
    projectsSubtitle: 'Жобалар',
    projectsDescription: 'Құрылыстағы кереметтілік пен инновацияларға біздің міндеттемемізді көрсететін аяқталған және жалғасып жатқан жобалардың портфолиосын зерттеңіз.',
    allProjects: 'Барлық жобалар',
    commercial: 'Коммерциялық',
    residential: 'Тұрғын үй',
    industrial: 'Өнеркәсіптік',
    viewDetails: 'Толығырақ көру',
    learnMore: 'Көбірек білу',
    loadMore: 'Көбірек жобаларды жүктеу',
    completed: 'Аяқталды',
    inProgress: 'Орындалуда',
    planning: 'Жоспарлау',
    
    // Contact Section
    contactTitle: 'Байланысқа',
    contactSubtitle: 'шығыңыз',
    contactDescription: 'Келесі құрылыс жобаңызды бастауға дайынсыз ба? Кеңес алу үшін бүгін бізбен байланысыңыз және көріністеріңізді өмірге келтірейік.',
    contactInformation: 'Байланыс ақпараты',
    phone: 'Телефон',
    email: 'Электрондық пошта',
    address: 'Мекенжай',
    businessHours: 'Жұмыс уақыты',
    visitOffice: 'Біздің кеңсеге келіңіз',
    visitOfficeDescription: 'Каспий қаласының орталығында орналасқан біздің кеңсе оңай қолжетімді және клиенттермен кездесулер үшін заманауи жабдықтармен жабдықталған.',
    sendMessage: 'Хабарлама жіберу',
    firstName: 'Аты',
    lastName: 'Тегі',
    projectType: 'Жоба түрі',
    selectProjectType: 'Жоба түрін таңдаңыз',
    projectTypes: {
      commercial: 'Коммерциялық құрылыс',
      residential: 'Тұрғын үй құрылысы',
      renovation: 'Қайта құру және жөндеу',
      industrial: 'Өнеркәсіптік құрылыс',
      other: 'Басқа'
    },
    message: 'Хабарлама',
    messagePlaceholder: 'Жобаңыз туралы айтыңыз...',
    
    // Footer
    footerDescription: 'Каспий жағалауында 25 жылдан астам уақыт бойы кереметтілік, инновация және тұрақты тәжірибелермен болашақты құрамыз.',
    ourServices: 'Біздің қызметтер',
    quickLinks: 'Жылдам сілтемелер',
    stayUpdated: 'Жаңалықтарды қадағалаңыз',
    newsletterDescription: 'Соңғы жаңалықтар мен жоба жаңартулары үшін біздің жаңалықтар таратуға жазылыңыз.',
    subscribe: 'Жазылу',
    yourEmail: 'Сіздің email',
    footerLinks: {
      aboutUs: 'Біз туралы',
      careers: 'Мансап',
      news: 'Жаңалықтар және жаңартулар',
      privacy: 'Құпиялылық саясаты',
      terms: 'Қызмет көрсету шарттары',
      sitemap: 'Сайт картасы'
    },
    allRightsReserved: '© 2024 CaspianCoast Construction. Барлық құқықтар қорғалған.'
  }
};

export const getTranslation = (language: string): Translation => {
  return translations[language] || translations.en;
};