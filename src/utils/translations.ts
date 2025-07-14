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

  // Portfolio Section
  portfolioTitle: string;
  portfolioDescription: string;
  portfolioStats: { value: string; label: string }[];
  portfolioFeatures: string[];
  
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

  whyChooseUsTitle: string;
  whyChooseUsSubtitle?: string;
  whyChooseUsList: {
    quality: { title: string; description: string };
    accuracy: { title: string; description: string };
    mobility: { title: string; description: string };
    experience: { title: string; description: string };
    development: { title: string; description: string };
    innovation: { title: string; description: string };
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

  contactUs: string;

    // Home Page
  aboutImageAlt: string;
  companyTitle: string;
  companySubtitle: string;
  companyDescription: string;
  companyHistoryTitle: string;
  companyHistoryP1: string;
  companyHistoryP2: string;
  companyHistoryPoints: string[];
  companyAdvantagesTitle: string;
  companyAdvantages: { title: string; description: string }[];
  leadershipTitle1: string;
  leadershipTitle2: string;
  leadershipDescription: string;
  leadershipSectionTitle: string;
  leadershipStats: { value: string; label: string }[];
  projectsHomeTitle1: string;
  projectsHomeTitle2: string;
  projectsHomeDescription: string;
  projectsHomeResidential: string;
  projectsHomeIndustrial: string;
  projectsHomeMoreTitle: string;
  projectsHomeMoreDescription: string;
  
  // Footer
  footerDescription: string;
  homePage: string;
  quickLinks: string;
  stayUpdated: string;
  newsletterDescription: string;
  footerLinks: {
    sale: string;
    forPartner: string;
    projects: string;
    news: string;
    agencies: string;
    career: string;
    commerce: string
  };
  allRightsReserved: string;

  // Agencies Page
  agenciesHeroTitle1: string;
  agenciesHeroTitle2: string;
  agenciesHeroDescription: string;
  agenciesStatPartners: string;
  agenciesStatRating: string;
  agenciesStatProjects: string;
  agenciesSearchPlaceholder: string;
  agenciesFilters: string;
  agenciesShowing: string;
  agenciesWord: string;
  agenciesFeaturedPartners: string;
  agenciesAllAgencies: string;
  agenciesGalleryTitle: string;
  agenciesGalleryDescription: string;
  agenciesLeaveRequest: string;
  name: string;
  sendRequest: string;
  viewProfile: string;
  visitWebsite: string;
  featured: string;


  // Career Page
  careerHeroTitle: string;
  careerHeroSubtitle: string;
  careerHeroDescription: string;
  careerHeroButton: string;
  careerValuesTitle: string;
  careerValuesDescription: string;
  careerBenefitsTitle: string;
  careerBenefitsDescription: string;
  careerTeamSaysTitle: string;
  careerTeamSaysDescription: string;
  careerOpenPositionsTitle: string;
  careerOpenPositionsDescription: string;
  careerRequirementTitle: string;
  careerApplyButton: string;
  careerProcessTitle: string;
  careerProcessDescription: string;
  careerReadyTitle: string;
  careerReadyDescription: string;
  careerEqualOpportunity: string;
  careerValuesList: { title: string; description: string }[];
  careerBenefitsList: { title: string; description: string }[];
  careerProcessSteps: { step: string; title: string; description: string }[];

    // Commerce Filter
  filterAllCities: string;
  filterCityAktau: string;
  filterCityZhanaOzen: string;
  filterAllProjects: string;
  filterProjectIlanTowers: string;
  filterProjectCaspianCoast: string;
  filterProjectTaras: string;
  filterSortNone: string;
  filterSortPriceAsc: string;
  filterSortPriceDesc: string;
  filterSortAreaAsc: string;
  filterPromos: string;
  filterHideReserved: string;

    // Commerce Page
  commerceHeroTitle: string;
  commerceHeroDescription: string;
  commerceHeroButton: string;
  commerceReserved: string;
  commerceOfficeLabel: string;
  commercePriceOnRequest: string;

  // Sales Office
  salesOfficeForBuyers: string;
  salesOfficeOnlineCenter: string;
  salesOfficeBuyProperty: string;
  salesOfficeHeadOffice: string;
  salesOfficeDepartment: string;
  salesOfficeMonFri: string;

    // Partner Page
  partnerConditionsTitle: string;
  partnerConditions: { title: string; text: string }[];
  partnerBenefitsTitle: string;
  partnerBenefits: { title: string; description: string }[];
  partnerCtaTitle: string;
  partnerCtaDescription: string;
  partnerCtaButton: string;

    // Maintenance Page
  maintenanceTitle: string;
  maintenanceMessage: string;
    // FAQ Page
  faqTitle: string;
  faqItems: { question: string; answer: string }[];

    // After Purchase Page
  afterPurchaseTitle: string;
  afterPurchaseStepsTitle: string;
  afterPurchaseSteps: { title: string; desc: string }[];
  afterPurchaseHelp: string;
  afterPurchaseContacts: { label: string; sub: string }[];
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
    aboutTitle: 'Our',
    aboutSubtitle: 'Vision',
    aboutDescription1:
      'We strive to ensure that each of our projects contributes to improving the quality of life. Whether it is residential complexes, public buildings or infrastructure projects, we create not just construction projects, but spaces that make people is lives more comfortable, safer and more sustainable. We will continue to build our reputation on the principles of honesty, transparency and responsibility. Our goal is to become a company that is trusted by both clients and partners. We will demonstrate high standards of corporate culture and professionalism in every task',
    aboutDescription2:
      'We will continue to build our reputation on the principles of honesty, transparency and responsibility. Our goal is to become a company that is trusted by both clients and partners. We will demonstrate high standards of corporate culture and professionalism in every task',
    ourAchievements: 'Our Achievements',
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

    portfolioTitle: 'About Us',
    portfolioDescription: 'Caspian Coast LLP is a reliable partner in civil and industrial construction providing turnkey solutions.',
    portfolioStats: [
      { value: '500,000 m²', label: 'of completed area' },
      { value: '8 years', label: 'of successful work' },
      { value: '50+', label: 'finished projects' },
      { value: '80+', label: 'qualified employees' }
    ],
    portfolioFeatures: [
      'Use of innovative construction technologies and materials',
      'Strict adherence to deadlines and quality standards at every stage',
      'Environmentally sustainable approach and safe materials',
      'Comprehensive service from design and permitting to turnkey delivery'
    ],
    
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
    whyChooseUsTitle: 'Why Choose Us',
    whyChooseUsSubtitle: 'Benefits of working with our team',
    whyChooseUsList: {
      quality: {
        title: 'Quality & Guarantee',
        description: 'We deliver reliable results backed by our professional warranty.'
      },
      accuracy: {
        title: 'Precision & Efficiency',
        description: 'Projects are completed on time with meticulous attention to detail.'
      },
      mobility: {
        title: 'Mobility & Readiness',
        description: 'Our crews can quickly mobilize to meet your needs wherever you are.'
      },
      experience: {
        title: 'Extensive Experience',
        description: 'Years of expertise allow us to tackle projects of any complexity.'
      },
      development: {
        title: 'Continual Development',
        description: 'We constantly evolve by adopting new methods and technologies.'
      },
      innovation: {
        title: 'Bold Innovation',
        description: 'We embrace creative solutions that move the industry forward.'
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

    contactUs: 'Contact Us',
  
    // Footer
    footerDescription: 'Building the future along the Caspian Coast with excellence, innovation, and sustainable practices for over 8 years.',
    homePage: 'Home page',
    quickLinks: 'Quick Links',
    stayUpdated: 'Stay Updated',
    newsletterDescription: 'Subscribe to our newsletter for the latest news and project updates.',
    footerLinks: {
      sale: 'Sale',
      forPartner: 'Partner',
      projects: 'Projects',
      news: 'News',
      agencies: 'Agencies',
      career: 'Career',
      commerce: 'Commerce'
    },
    allRightsReserved: '© 2025 CaspianCoast Construction. All rights reserved.',

    // Agencies Page
    agenciesHeroTitle1: 'Official Partner',
    agenciesHeroTitle2: 'Agencies',
    agenciesHeroDescription:
      'Discover our verified network of professional agencies delivering exceptional results across digital marketing, creative design, and technology solutions.',
    agenciesStatPartners: '150+ Verified Partners',
    agenciesStatRating: '4.8 Average Rating',
    agenciesStatProjects: '10,000+ Projects Completed',
    agenciesSearchPlaceholder: 'Search agencies, specialties, or locations...',
    agenciesFilters: 'Filters',
    agenciesShowing: 'Showing',
    agenciesWord: 'agencies',
    agenciesFeaturedPartners: 'Featured Partners',
    agenciesAllAgencies: 'All Agencies',
    agenciesGalleryTitle: 'Our Partners in Action',
    agenciesGalleryDescription:
      'See the creative workspaces and professional environments of our partner agencies',
    agenciesLeaveRequest: 'Leave a Request',
    name: 'Name',
    sendRequest: 'Send Request',
    viewProfile: 'View Profile',
    visitWebsite: 'Visit Website',
    featured: 'Featured',

    // Career Page
    careerHeroTitle: 'Build Tomorrow\u2019s Kazakhstan',
    careerHeroSubtitle: 'With Us',
    careerHeroDescription:
      'Join Caspian Coast\u2019s team of engineers, craftsmen and project managers delivering critical infrastructure and landmark developments along the Caspian Sea.',
    careerHeroButton: 'View Open Positions',
    careerValuesTitle: 'Our Values',
    careerValuesDescription:
      'These are the guiding principles that shape every project and decision at Caspian Coast.',
    careerBenefitsTitle: 'Why Work With Us',
    careerBenefitsDescription:
      'At Caspian Coast, we invest in our people so they can excel on every project.',
    careerTeamSaysTitle: 'What Our Team Says',
    careerTeamSaysDescription:
      'Hear directly from our team members about their experiences working with us.',
    careerOpenPositionsTitle: 'Open Positions',
    careerOpenPositionsDescription:
      'Find your next career opportunity and join our growing team of innovators.',
    careerRequirementTitle: 'Requirements:',
    careerApplyButton: 'Apply Now',
    careerProcessTitle: 'Our Hiring Process',
    careerProcessDescription:
      'A transparent, four-step path to joining our construction family:',
    careerReadyTitle: 'Ready to Join Us?',
    careerReadyDescription:
      "Don't see a perfect match? We're always looking for talented individuals. Send us your resume and let's start a conversation.",
    careerEqualOpportunity: 'Equal opportunity employer committed to diversity and inclusion',
    careerValuesList: [
      { title: 'Safety First', description: 'We protect our team and communities above all else.' },
      { title: 'Quality Craftsmanship', description: 'We take pride in precision, durability and attention to detail.' },
      { title: 'Sustainability Impact', description: 'We minimize impact on the environment in every build.' },
      { title: 'Teamwork', description: 'We achieve more by collaborating across disciplines.' }
    ],
    careerBenefitsList: [
      { title: 'Competitive Compensation', description: 'Market-leading salaries and project-completion bonuses.' },
      { title: 'Health & Social Benefits', description: 'Comprehensive medical coverage, social insurance and annual wellness stipend.' },
      { title: 'Professional Growth', description: 'On-site training, Kazakhstan-wide project rotations, and support for certifications (e.g., PMP, ISO).' },
      { title: 'Stable, Impactful Projects', description: 'Work on major civil, commercial and industrial developments that shape the region\u2019s future.' },
      { title: 'Strong Community', description: 'Join a tight-knit team committed to safety, quality and local economic growth.' },
      { title: 'Financial Security', description: '401(k) matching and life insurance benefits' }
    ],
    careerProcessSteps: [
      { step: '01', title: 'Application & CV Review', description: 'Submit your resume and portfolio of completed projects.' },
      { step: '02', title: 'Introductory Call', description: 'A 20-minute chat to discuss your background and our needs.' },
      { step: '03', title: 'Technical Assessment', description: 'A role-specific exercise or on-site site-visit walkthrough.' },
      { step: '04', title: 'Final Interview & Offer', description: 'Meet with department heads and review benefits, then join the team.' }
    ],
    filterAllCities: 'All cities of Kazakhstan',
    filterCityAktau: 'Aktau',
    filterCityZhanaOzen: 'ZhanaOzen',
    filterAllProjects: 'All projects',
    filterProjectIlanTowers: 'Ilan Towers',
    filterProjectCaspianCoast: 'Caspian Coast',
    filterProjectTaras: 'Taras',
    filterSortNone: 'No sorting',
    filterSortPriceAsc: 'Price ↑',
    filterSortPriceDesc: 'Price ↓',
    filterSortAreaAsc: 'Area ↑',
    filterPromos: 'Promotions',
    filterHideReserved: 'Hide reserved',
    commerceHeroTitle: 'Commercial Real Estate',
    commerceHeroDescription: 'Best office spaces in key cities of Kazakhstan',
    commerceHeroButton: 'Get consultation',
    commerceReserved: 'Reserved',
    commerceOfficeLabel: 'Apartment',
    commercePriceOnRequest: 'Price on request',
        aboutImageAlt: 'CaspianCoast — our achievements',
    companyTitle: 'About',
    companySubtitle: 'Caspian Coast',
    companyDescription:
      'Caspian Coast LLP is a dynamic construction company specializing in high-quality civil and industrial development.',
    companyHistoryTitle: 'Our History',
    companyHistoryP1:
      'Founded in 2017, the company has successfully implemented numerous projects including residential complexes, office buildings and industrial facilities.',
    companyHistoryP2:
      'We are proud of our reputation as a reliable partner able to work on projects of any scale, from housing estates to large industrial sites.',
    companyHistoryPoints: [
      'Use of innovative construction technologies',
      'Strict adherence to deadlines and quality standards',
      'Comprehensive approach from design to turnkey delivery',
      'Compliance with environmental standards'
    ],
    companyAdvantagesTitle: 'Our Advantages',
    companyAdvantages: [
      { title: 'Own production facilities', description: 'Allow us to control material quality and reduce costs' },
      { title: 'Qualified team', description: 'More than 80 experienced specialists with high expertise' },
      { title: 'Certified quality', description: 'Compliance with international standards ISO 9001, 14001, 45001' }
    ],
    leadershipTitle1: 'Our',
    leadershipTitle2: 'leadership team',
    leadershipDescription: 'Experienced professionals ensuring the high quality and efficiency of all our projects.',
    leadershipSectionTitle: 'Executive leadership',
    leadershipStats: [
      { value: '80+', label: 'Qualified employees' },
      { value: '15+', label: 'Average years of experience' },
      { value: '100%', label: 'Staff with relevant degrees' }
    ],
    projectsHomeTitle1: 'Our',
    projectsHomeTitle2: 'projects on the Caspian coast',
    projectsHomeDescription:
      'Over the years we have implemented many developments in the Mangystau region, from residential complexes to major industrial facilities.',
    projectsHomeResidential: 'Residential construction',
    projectsHomeIndustrial: 'Industrial and infrastructure projects',
    projectsHomeMoreTitle: 'And many other sites',
    projectsHomeMoreDescription:
      'Beyond the projects shown here, we have completed numerous other developments across Mangystau including gas pipelines, water networks, car washes and more.',
    salesOfficeForBuyers: 'For buyers',
    salesOfficeOnlineCenter: 'Online sales center',
    salesOfficeBuyProperty: 'Purchase property',
    salesOfficeHeadOffice: 'Head office',
    salesOfficeDepartment: 'Sales department',
    salesOfficeMonFri: 'Mon\u2013Fri',

        // Partner Page
    partnerConditionsTitle: 'Partnership Terms and Principles',
    partnerConditions: [
      {
        title: 'Who Can Become a Partner',
        text:
          'We are looking for partners in domestic services: disinfection, cleaning, interior design, furniture manufacturing and other areas.'
      },
      {
        title: 'Open for Cooperation',
        text:
          'We welcome any commercial proposals, marketing initiatives and other forms of collaboration.'
      },
      {
        title: 'Verified Partners Only',
        text:
          'We work with reliable, high-quality service providers so users receive the best service.'
      },
      {
        title: 'Quality Guarantee',
        text: 'Each partner undergoes a strict screening and training to BIG App standards.'
      }
    ],
    partnerBenefitsTitle: 'Benefits of Cooperation',
    partnerBenefits: [
      {
        title: 'Access to Large Projects',
        description: 'Receive orders for large-scale facilities across the country.'
      },
      {
        title: 'Favorable Terms',
        description: 'Transparent payment system and long-term cooperation.'
      },
      {
        title: 'Training and Support',
        description: 'We train on new standards and help implement best practices.'
      },
      {
        title: 'High Standards',
        description: 'We maintain advanced quality standards and transparent cooperation.'
      },
      {
        title: 'Clear Processes',
        description: 'Step-by-step onboarding, clear requirements and support at all stages.'
      },
      {
        title: 'Reliable Partnership',
        description: 'We value each partner and aim for mutual success.'
      }
    ],
    partnerCtaTitle: 'Want to become a partner?',
    partnerCtaDescription:
      'Contact us by phone +7 (700) 636-36-31 or send an email to info@caspiancoast.com and we\'ll discuss cooperation details.',
    partnerCtaButton: 'Write an Email',
    maintenanceTitle: 'Site Under Maintenance',
    maintenanceMessage: 'Technical work is in progress. Please check back later.',

    faqTitle: 'Frequently Asked Questions',
    faqItems: [
      {
        question: 'What services do you offer?',
        answer:
          'We provide a full range of construction and development services along the Caspian coast.'
      },
      {
        question: 'How can I start a project with CaspianCoast?',
        answer:
          'Get in touch through our contact form or call our sales office. Our team will guide you through the next steps.'
      },
      {
        question: 'Do you work with residential and commercial clients?',
        answer:
          'Yes, our portfolio includes residential complexes, commercial centers and industrial facilities.'
      },
      {
        question: 'Where are you located?',
        answer: 'Our head office is located at 123 Coastal Avenue, CC 12345.'
      },
      {
        question: 'Can I tour your completed projects?',
        answer:
          'Absolutely. Contact us to arrange a visit to one of our completed developments.'
      },
      {
        question: 'How do I apply for a job?',
        answer: 'Visit the career page to see open positions and submit your application.'
      }
    ]
    ,
    afterPurchaseTitle: 'What to do after purchase',
    afterPurchaseStepsTitle: 'Your next steps',
    afterPurchaseSteps: [
      {
        title: 'Finalize Documents',
        desc: 'Review and sign all ownership papers to complete the transaction.'
      },
      {
        title: 'Inspect Your Property',
        desc: 'Walk through your new space and note any issues that need attention.'
      },
      {
        title: 'Plan Renovations',
        desc: 'Connect with our trusted partners if you wish to customize your home.'
      },
      {
        title: 'Settle In',
        desc: 'Move in and enjoy your new property with peace of mind.'
      }
    ],
    afterPurchaseHelp: 'Need help?',
    afterPurchaseContacts: [
      { label: '+7(700) 636-36-31', sub: 'Call Center' },
      { label: 'caspiancoast@list.ru', sub: 'Customer Support' }
    ]
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
    aboutTitle: 'Наше',
    aboutSubtitle: 'Видение',
    aboutDescription1:
      'Мы стремиться к тому, чтобы каждый наш проект вносил вклад в улучшение качества жизни. Будь то жилые комплексы, общественные здания или инфраструктурные проекты — мы создаем не просто строительные объекты, а пространства, которые делают жизнь людей комфортнее, безопаснее и более устойчивой. Мы будем продолжать строить свою репутацию на принципах честности, прозрачности и ответственности. Наша цель — стать компанией, которой доверяют как клиенты, так и партнеры. Мы будем демонстрировать высокие стандарты корпоративной культуры и профессионализма в каждой задаче',
    aboutDescription2:
      '«Caspian Coast» выполнила ряд ключевых инфраструктурных проектов на побережье Каспийского моря и по всему Мангистаускому региону: построила производственный комплекс в Актау, птицефабрику на 100 000 голов в Баянды, проложила водо- и газовые сети для сельскохозяйственных и административных объектов, оказала инжиниринговые услуги жилым районам, создала автосервисный центр с мойкой и парковкой, развила базу отдыха и завершила множество других работ по всему региону.',
    ourAchievements: 'Наши достижения',
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

    portfolioTitle: 'О Нас',
    portfolioDescription: 'ТОО «Caspian Coast» — надёжный партнёр в сфере гражданского и промышленного строительства, предлагающий комплексный подход «под ключ».',
    portfolioStats: [
      { value: '500 000 м²', label: 'построенной площади' },
      { value: '8 лет', label: 'успешной работы на рынке' },
      { value: '50+', label: 'завершённых проектов' },
      { value: '80+', label: 'квалифицированных сотрудников' }
    ],
    portfolioFeatures: [
      'Применение инновационных строительных технологий и материалов',
      'Строгое соблюдение сроков и стандартов качества на всех этапах реализации проектов',
      'Экологически устойчивый подход и использование безопасных материалов',
      'Комплексный сервис: от проектирования и согласования до сдачи объекта «под ключ»'
    ],
    
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
    whyChooseUsTitle: 'Почему выбирают нас',
    whyChooseUsSubtitle: 'Наши преимущества',
    whyChooseUsList: {
      quality: {
        title: 'Качество и гарантия',
        description: 'Мы гарантируем надежный результат и высокие стандарты выполнения работ.'
      },
      accuracy: {
        title: 'Точность и оперативность',
        description: 'Выполняем проекты точно в срок, соблюдая все требования.'
      },
      mobility: {
        title: 'Мобильность и готовность',
        description: 'Быстро реагируем и выезжаем на объект при необходимости.'
      },
      experience: {
        title: 'Огромный опыт работы',
        description: 'Накопленные знания помогают успешно решать сложные задачи.'
      },
      development: {
        title: 'Постоянное развитие',
        description: 'Мы внедряем современные технологии и улучшаем процессы.'
      },
      innovation: {
        title: 'Смелость и новаторство',
        description: 'Используем креативные идеи и нестандартные решения.'
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

    contactUs: 'Связаться с нами',
    
    // Footer
    footerDescription: 'Более 8 лет мы создаём будущее на побережье Каспийского моря, опираясь на высокие стандарты, инновации и принципы устойчивого развития.',
    homePage: 'Главная страница',
    quickLinks: 'Быстрые ссылки',
    stayUpdated: 'Будьте в курсе',
    newsletterDescription: 'Подпишитесь на нашу рассылку, чтобы получать последние новости и обновления проектов.',
    footerLinks: {
      sale: 'Продажа',
      forPartner: 'Партнёрам',
      projects: 'Проекты',
      news: 'Новости',
      agencies: 'Агентства',
      career: 'Карьера',
      commerce: 'Коммерция',
    },
    allRightsReserved: '© 2025 CaspianCoast Construction. Все права защищены.',

    // Agencies Page
    agenciesHeroTitle1: 'Официальные партнеры',
    agenciesHeroTitle2: 'Агентства',
    agenciesHeroDescription:
      'Откройте для себя нашу проверенную сеть профессиональных агентств, обеспечивающих выдающиеся результаты в цифровом маркетинге, креативном дизайне и технологических решениях.',
    agenciesStatPartners: '150+ проверенных партнёров',
    agenciesStatRating: 'Средний рейтинг 4.8',
    agenciesStatProjects: '10 000+ завершённых проектов',
    agenciesSearchPlaceholder: 'Поиск агентств, специализаций или местоположений...',
    agenciesFilters: 'Фильтры',
    agenciesShowing: 'Показано',
    agenciesWord: 'агентств',
    agenciesFeaturedPartners: 'Лучшие партнёры',
    agenciesAllAgencies: 'Все агентства',
    agenciesGalleryTitle: 'Наши партнёры в работе',
    agenciesGalleryDescription:
      'Посмотрите творческие рабочие пространства и профессиональные помещения наших партнёрских агентств',
    agenciesLeaveRequest: 'Оставить заявку',
    name: 'Имя',
    sendRequest: 'Отправить заявку',
    viewProfile: 'Смотреть профиль',
    visitWebsite: 'Перейти на сайт',
    featured: 'Лучшее',

    // Career Page
    careerHeroTitle: 'Стройте Казахстан завтрашнего дня',
    careerHeroSubtitle: 'с нами',
    careerHeroDescription:
      'Присоединяйтесь к команде Caspian Coast – инженерам, строителям и менеджерам проектов, реализующим важные инфраструктурные и знаковые объекты на Каспии.',
    careerHeroButton: 'Список вакансий',
    careerValuesTitle: 'Наши ценности',
    careerValuesDescription:
      'Эти принципы направляют каждый проект и решение в Caspian Coast.',
    careerBenefitsTitle: 'Почему работать с нами',
    careerBenefitsDescription:
      'В Caspian Coast мы инвестируем в людей, чтобы они могли добиваться успеха в каждом проекте.',
    careerTeamSaysTitle: 'Что говорит наша команда',
    careerTeamSaysDescription:
      'Послушайте отзывы наших сотрудников о работе у нас.',
    careerOpenPositionsTitle: 'Открытые вакансии',
    careerOpenPositionsDescription:
      'Найдите свою карьерную возможность и присоединитесь к нашей команде новаторов.',
    careerRequirementTitle: 'Требования:',
    careerApplyButton: 'Откликнуться',
    careerProcessTitle: 'Наш процесс найма',
    careerProcessDescription:
      'Прозрачный путь из четырёх шагов к присоединению к нашей строительной семье:',
    careerReadyTitle: 'Готовы присоединиться?',
    careerReadyDescription:
      'Не нашли подходящую вакансию? Мы всегда ищем талантливых специалистов. Присылайте резюме и обсудим возможности.',
    careerEqualOpportunity: 'Мы равны для всех и поддерживаем разнообразие и инклюзию',
    careerValuesList: [
      { title: 'Безопасность превыше всего', description: 'Мы защищаем нашу команду и сообщества прежде всего.' },
      { title: 'Качественное мастерство', description: 'Мы гордимся точностью, долговечностью и вниманием к деталям.' },
      { title: 'Экологичность', description: 'Мы минимизируем воздействие на окружающую среду при каждом строительстве.' },
      { title: 'Командная работа', description: 'Мы добиваемся большего, сотрудничая между различными направлениями.' }
    ],
    careerBenefitsList: [
      { title: 'Конкурентная оплата труда', description: 'Лидирующие на рынке зарплаты и бонусы за завершение проектов.' },
      { title: 'Социальный пакет и здоровье', description: 'Полное медицинское страхование, социальные гарантии и ежегодная поддержка здоровья.' },
      { title: 'Профессиональный рост', description: 'Обучение на объектах, ротации по Казахстану и поддержка сертификаций (например, PMP, ISO).' },
      { title: 'Стабильные и значимые проекты', description: 'Работа над крупными гражданскими, коммерческими и промышленными объектами, формирующими будущее региона.' },
      { title: 'Сильное сообщество', description: 'Сплоченная команда, нацеленная на безопасность, качество и развитие местной экономики.' },
      { title: 'Финансовая безопасность', description: 'Совместное накопление на пенсию и страхование жизни.' }
    ],
    careerProcessSteps: [
      { step: '01', title: 'Заявка и рассмотрение резюме', description: 'Отправьте ваше резюме и портфолио выполненных проектов.' },
      { step: '02', title: 'Вводный звонок', description: '20‑минутная беседа о вашем опыте и наших потребностях.' },
      { step: '03', title: 'Техническая оценка', description: 'Задание по специальности или выездной осмотр объекта.' },
      { step: '04', title: 'Финальное собеседование и предложение', description: 'Встреча с руководителями подразделений и обсуждение условий, после чего присоединяйтесь к команде.' }
    ],
    filterAllCities: 'Все города Казахстана',
    filterCityAktau: 'Актау',
    filterCityZhanaOzen: 'ЖанаОзен',
    filterAllProjects: 'Все проекты',
    filterProjectIlanTowers: 'ЖК Ilan Towers',
    filterProjectCaspianCoast: 'ЖК Caspian Coast',
    filterProjectTaras: 'ЖК Taras',
    filterSortNone: 'Без сортировки',
    filterSortPriceAsc: 'Цена ↑',
    filterSortPriceDesc: 'Цена ↓',
    filterSortAreaAsc: 'Площадь ↑',
    filterPromos: 'Акции',
    filterHideReserved: 'Не показывать забронированные',
    commerceHeroTitle: 'Коммерческая недвижимость',
    commerceHeroDescription: 'Лучшие офисные помещения в ключевых городах Казахстана',
    commerceHeroButton: 'Получить консультацию',
    commerceReserved: 'Забронировано',
    commerceOfficeLabel: 'Квартира',
    commercePriceOnRequest: 'Цена по запросу',
        aboutImageAlt: 'CaspianCoast — наши достижения',
    companyTitle: 'О компании',
    companySubtitle: 'Caspian Coast',
    companyDescription:
      'ТОО «Caspian Coast» — это динамично развивающаяся строительная компания, специализирующаяся на предоставлении высококачественных услуг в сфере гражданского и промышленного строительства.',
    companyHistoryTitle: 'Наша история',
    companyHistoryP1:
      'Основанная в 2017 году, компания успешно реализовала множество проектов, включая жилые комплексы, офисные здания, а также инфраструктурные и промышленные объекты.',
    companyHistoryP2:
      'Мы гордимся репутацией надежного партнера, готового работать над проектами любого масштаба — от жилых комплексов до крупных промышленных объектов.',
    companyHistoryPoints: [
      'Применение инновационных строительных технологий',
      'Строгое соблюдение сроков и стандартов качества',
      'Комплексный подход: от проектирования до сдачи «под ключ»',
      'Соблюдение экологических стандартов'
    ],
    companyAdvantagesTitle: 'Наши преимущества',
    companyAdvantages: [
      { title: 'Собственные производственные базы', description: 'Позволяют контролировать качество материалов и снижать затраты' },
      { title: 'Квалифицированная команда', description: 'Более 80 опытных специалистов с высокой квалификацией' },
      { title: 'Сертифицированное качество', description: 'Соответствие международным стандартам ISO 9001, 14001, 45001' }
    ],
    leadershipTitle1: 'Наша',
    leadershipTitle2: 'команда руководителей',
    leadershipDescription:
      'Опытные профессионалы, которые обеспечивают высокое качество и эффективность всех наших проектов.',
    leadershipSectionTitle: 'Высшее руководство',
    leadershipStats: [
      { value: '80+', label: 'Квалифицированных сотрудников' },
      { value: '15+', label: 'Лет среднего опыта команды' },
      { value: '100%', label: 'Сотрудников с профильным образованием' }
    ],
    projectsHomeTitle1: 'Наши',
    projectsHomeTitle2: 'проекты на побережье Каспия',
    projectsHomeDescription:
      'За годы работы мы реализовали множество проектов в Мангистауской области, от жилых комплексов до крупных промышленных объектов.',
    projectsHomeResidential: 'Жилищное строительство',
    projectsHomeIndustrial: 'Промышленные и инфраструктурные проекты',
    projectsHomeMoreTitle: 'И множество других объектов',
    projectsHomeMoreDescription:
      'Помимо представленных проектов, мы реализовали множество других объектов на территории Мангистауской области, включая газификацию, водопроводные сети, автомойки и другие инфраструктурные объекты.',
    salesOfficeForBuyers: 'Для покупателей',
    salesOfficeOnlineCenter: 'Центр онлайн-продаж',
    salesOfficeBuyProperty: 'Приобрести недвижимость',
    salesOfficeHeadOffice: 'Головной офис',
    salesOfficeDepartment: 'Отдел продаж',
    salesOfficeMonFri: 'Пн\u2013Пт',

    // Partner Page
    partnerConditionsTitle: 'Условия и принципы партнерства',
    partnerConditions: [
      {
        title: 'Кто может стать партнером',
        text:
          'Мы ищем партнеров в сфере бытовых услуг: дезинфекция, клининг, дизайн интерьера, изготовление мебели и другие направления.'
      },
      {
        title: 'Открыты к сотрудничеству',
        text:
          'Мы открыты к любым коммерческим предложениям, маркетинговым инициативам и другим форматам сотрудничества.'
      },
      {
        title: 'Только проверенные партнеры',
        text:
          'Мы работаем с надежными и качественными поставщиками услуг, чтобы пользователи получали лучший сервис.'
      },
      {
        title: 'Гарантия качества',
        text: 'Каждый партнер проходит строгую проверку и обучение стандартам BIG App.'
      }
    ],
    partnerBenefitsTitle: 'Преимущества сотрудничества',
    partnerBenefits: [
      {
        title: 'Доступ к крупным проектам',
        description: 'Получайте заказы на масштабные объекты по всей стране.'
      },
      {
        title: 'Выгодные условия',
        description: 'Прозрачная система оплаты и долгосрочное сотрудничество.'
      },
      {
        title: 'Обучение и поддержка',
        description: 'Обучаем новым стандартам и помогаем внедрять лучшие практики.'
      },
      {
        title: 'Высокие стандарты',
        description: 'Мы поддерживаем передовые стандарты качества и прозрачные условия сотрудничества.'
      },
      {
        title: 'Четкие процессы',
        description: 'Пошаговое подключение, понятные требования и сопровождение на всех этапах.'
      },
      {
        title: 'Надежное партнерство',
        description: 'Мы ценим каждого партнера и нацелены на совместный успех.'
      }
    ],
    partnerCtaTitle: 'Хотите стать партнером?',
    partnerCtaDescription:
      'Свяжитесь с нами по телефону +7 (700) 636-36-31 или отправьте письмо на info@caspiancoast.com, и мы обсудим детали сотрудничества.',
    partnerCtaButton: 'Написать письмо',
    maintenanceTitle: 'Сайт на техническом обслуживании',
    maintenanceMessage: 'Ведутся технические работы. Пожалуйста, зайдите позже.',

    faqTitle: 'Часто задаваемые вопросы',
    faqItems: [
      {
        question: 'Какие услуги вы предоставляете?',
        answer:
          'Мы предоставляем полный спектр строительных и девелоперских услуг вдоль Каспийского побережья.'
      },
      {
        question: 'Как начать проект с CaspianCoast?',
        answer:
          'Свяжитесь с нами через форму обратной связи или позвоните в наш отдел продаж. Наша команда подскажет дальнейшие шаги.'
      },
      {
        question: 'Вы работаете с частными и коммерческими клиентами?',
        answer:
          'Да, в нашем портфолио есть жилые комплексы, торговые центры и промышленные объекты.'
      },
      {
        question: 'Где вы находитесь?',
        answer: 'Наш головной офис находится по адресу: 123 Coastal Avenue, CC 12345.'
      },
      {
        question: 'Можно ли посмотреть ваши завершенные проекты?',
        answer:
          'Конечно. Свяжитесь с нами, чтобы договориться о визите на один из завершенных объектов.'
      },
      {
        question: 'Как подать заявку на работу?',
        answer: 'Посетите страницу карьеры, чтобы увидеть открытые вакансии и отправить заявку.'
      }
          ],
    afterPurchaseTitle: 'Что делать после покупки',
    afterPurchaseStepsTitle: 'Ваши следующие шаги',
    afterPurchaseSteps: [
      {
        title: 'Завершите оформление документов',
        desc: 'Проверьте и подпишите все документы о праве собственности для завершения сделки.'
      },
      {
        title: 'Осмотрите недвижимость',
        desc: 'Пройдите по новым помещениям и отметьте все вопросы, требующие внимания.'
      },
      {
        title: 'Планируйте ремонт',
        desc: 'Свяжитесь с нашими проверенными партнерами, если хотите сделать индивидуальную отделку.'
      },
      {
        title: 'Заселяйтесь',
        desc: 'Переезжайте и наслаждайтесь новой недвижимостью с чувством уверенности.'
      }
    ],
    afterPurchaseHelp: 'Нужна помощь?',
    afterPurchaseContacts: [
      { label: '+7(700) 636-36-31', sub: 'Колл-центр' },
      { label: 'caspiancoast@list.ru', sub: 'Поддержка клиентов' }
    ]
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
    aboutTitle: 'Біздің',
    aboutSubtitle: 'Көрініс',
    aboutDescription1:
    'Біз әрбір жобамыз өмір сапасын жақсартуға ықпал ететініне көз жеткізуге тырысамыз. Тұрғын үй кешендері, қоғамдық ғимараттар немесе инфрақұрылымдық жобалар болсын, біз тек құрылыс нысандарын ғана емес, адамдардың өмірін жайлы, қауіпсіз және тұрақты ететін кеңістіктерді жасаймыз. Біз өз беделімізді адалдық, ашықтық және жауапкершілік қағидаттары негізінде құруды жалғастырамыз. Біздің мақсатымыз – клиенттер де, серіктестер де сенетін компания болу. Біз әрбір тапсырмада корпоративтік мәдениет пен кәсібиліктің жоғары стандарттарын көрсететін боламыз',
    aboutDescription2:
      '«Caspian Coast» компаниясы Каспий теңізі жағалауында және Маңғыстау өңірі бойынша бірқатар маңызды инфрақұрылымдық жобаларды жүзеге асырды: Ақтауда өндірістік кешен салды, Баяндыда 100 000 бас құс фабрикасын тұрғызды, ауыл шаруашылығы және әкімшілік нысандар үшін су және газ желілерін тартты, тұрғын аудандарға инженерлік қызметтер көрсетті, автожуу мен тұрақы бар автосервис орталығын ашты, демалыс базасын дамытты және өңір бойынша тағы да көптеген жұмыстарды аяқтады.',
    ourAchievements: 'Біздің жетістіктеріміз',
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

    portfolioTitle: 'Біз туралы',
    portfolioDescription: '"Caspian Coast" ЖШС — азаматтық және өнеркәсіптік құрылыс саласындағы сенімді серіктес, жобаларды толық "кілт тапсыру" форматында жүзеге асырады.',
    portfolioStats: [
      { value: '500 000 м²', label: 'салынған аумақ' },
      { value: '8 жыл', label: 'табысқа толы жұмыс' },
      { value: '50+', label: 'аяқталған жоба' },
      { value: '80+', label: 'білікті қызметкер' }
    ],
    portfolioFeatures: [
      'Құрылыс технологиялары мен материалдарының инновациялық қолданылуы',
      'Жобалардың барлық кезеңінде мерзімдер мен сапа стандарттарын қатаң сақтау',
      'Экологиялық тұрақты тәсіл және қауіпсіз материалдарды пайдалану',
      'Жобалаудан бастап нысанды тапсыруға дейінгі кешенді қызмет'
    ],
    
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
        whyChooseUsTitle: 'Неліктен бізді таңдайды',
    whyChooseUsSubtitle: 'Біздің артықшылықтарымыз',
    whyChooseUsList: {
      quality: {
        title: 'Сапа және кепілдік',
        description: 'Жобаларды жоғары стандарттарда орындап, нәтижесіне кепілдік береміз.'
      },
      accuracy: {
        title: 'Дәлдік пен жеделдік',
        description: 'Барлық талаптарды сақтай отырып, жұмыстарды уақытында аяқтаймыз.'
      },
      mobility: {
        title: 'Мобильдік және дайындық',
        description: 'Қажет жерде тез арада жұмысқа кірісуге әрдайым дайынбыз.'
      },
      experience: {
        title: 'Үлкен тәжірибе',
        description: 'Жинақталған білім күрделі жобаларды да сәтті жүзеге асыруға мүмкіндік береді.'
      },
      development: {
        title: 'Үздіксіз даму',
        description: 'Жаңа әдістер мен технологияларды тұрақты енгіземіз.'
      },
      innovation: {
        title: 'Жаңашылдық',
        description: 'Салада алға жылжуға мүмкіндік беретін креативті шешімдерді қолданамыз.'
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

    contactUs: 'Бізбен байланысу',
    
    // Footer
    footerDescription: '8 жылдан астам уақыт бойы Каспий маңы жағалауында жоғары стандарттар, инновациялар және орнықты даму принциптері негізінде болашақты қалыптастырып келеміз.',
    homePage: 'Басты бет',
    quickLinks: 'Жылдам сілтемелер',
    stayUpdated: 'Жаңалықтардан хабардар болыңыз',
    newsletterDescription: 'Біздің бюллетенге жазылып, соңғы жаңалықтар мен жоба жаңартуларынан хабардар болыңыз.',
    footerLinks: {
      sale: 'Сату',
      forPartner: 'Серіктестерге',
      projects: 'Жобалар',
      news: 'Жаңалықтар',
      agencies: 'Агенттіктер',
      career: 'Карьера',
      commerce: 'Коммерция',
    },
    allRightsReserved: '© 2025 CaspianCoast Construction. Барлық құқықтар қорғалған.',

    // Agencies Page
    agenciesHeroTitle1: 'Ресми серіктес',
    agenciesHeroTitle2: 'Агенттіктер',
    agenciesHeroDescription:
      'Цифрлық маркетинг, креативті дизайн және технологиялық шешімдер салаларында жоғары нәтижелерге қол жеткізетін тексерілген кәсіби агенттіктер желісін танысыңыз.',
    agenciesStatPartners: '150+ тексерілген серіктестер',
    agenciesStatRating: 'Орташа рейтинг 4.8',
    agenciesStatProjects: '10 000+ аяқталған жобалар',
    agenciesSearchPlaceholder: 'Агенттіктерді, мамандандыруды немесе орналасуын іздеу...',
    agenciesFilters: 'Фильтрлер',
    agenciesShowing: 'Көрсетілді',
    agenciesWord: 'агенттік',
    agenciesFeaturedPartners: 'Ұсынылған серіктестер',
    agenciesAllAgencies: 'Барлық агенттіктер',
    agenciesGalleryTitle: 'Әрекеттегі серіктестеріміз',
    agenciesGalleryDescription:
      'Серіктес агенттіктердің шығармашылық кеңселері мен кәсіби орталарын көріңіз',
    agenciesLeaveRequest: 'Өтінім қалдыру',
    name: 'Аты',
    sendRequest: 'Өтінімді жіберу',
    viewProfile: 'Профильді қарау',
    visitWebsite: 'Веб-сайтқа өту',
    featured: 'Ерекше',

    // Career Page
    careerHeroTitle: 'Ертеңгі Қазақстанды құр',
    careerHeroSubtitle: 'бізбен бірге',
    careerHeroDescription:
      'Каспий жағалауында маңызды инфрақұрылым мен ірі жобаларды жүзеге асыратын Caspian Coast инженерлері, мамандары және жоба менеджерлерінің командасына қосылыңыз.',
    careerHeroButton: 'Бос орындарды қарау',
    careerValuesTitle: 'Біздің құндылықтар',
    careerValuesDescription:
      'Caspian Coast-тың әр жобасы мен шешімін айқындайтын қағидалар.',
    careerBenefitsTitle: 'Неліктен бізбен жұмыс істеу керек',
    careerBenefitsDescription:
      'Caspian Coast компаниясында біз қызметкерлерді дамытуға инвестиция құямыз.',
    careerTeamSaysTitle: 'Команда пікірлері',
    careerTeamSaysDescription:
      'Біздің команда мүшелерінің жұмыс тәжірибесімен танысыңыз.',
    careerOpenPositionsTitle: 'Ашық вакансиялар',
    careerOpenPositionsDescription:
      'Келесі мансап мүмкіндігіңізді тауып, жаңашыл командамызға қосылыңыз.',
    careerRequirementTitle: 'Талаптар:',
    careerApplyButton: 'Өтініш беру',
    careerProcessTitle: 'Жалдау процесі',
    careerProcessDescription:
      'Құрылыс отбасына қосылудың төрт қадамды айқын жолы:',
    careerReadyTitle: 'Бізге қосылуға дайынсыз ба?',
    careerReadyDescription:
      'Сіздің біліміңізге дәл келетін жұмыс болмаса да, біз әрқашан дарынды адамдарды іздейміз. Резюмеңізді жіберіңіз, әңгімелесуді бастайық.',
    careerEqualOpportunity: 'Әртүрлілік пен инклюзияға негізделген тең мүмкіндіктер жұмыс берушісі',
    careerValuesList: [
      { title: 'Қауіпсіздік', description: 'Біз командамыз бен қоғамды барлығынан жоғары қоямыз.' },
      { title: 'Сапалы шеберлік', description: 'Біз дәлдік пен ұқыпты детальдарға мән береміз.' },
      { title: 'Тұрақты даму', description: 'Әрбір құрылыста қоршаған ортаға әсерді азайтамыз.' },
      { title: 'Командалық жұмыс', description: 'Әртүрлі салаларда бірлесіп көбірек жетістікке жетеміз.' }
    ],
    careerBenefitsList: [
      { title: 'Бәсекелі жалақы', description: 'Нарықтағы жоғары жалақы мен жобаны аяқтағаны үшін бонустар.' },
      { title: 'Әлеуметтік және медициналық пакет', description: 'Толық медициналық сақтандыру, әлеуметтік төлемдер және жыл сайынғы денсаулыққа көмек.' },
      { title: 'Кәсіби өсу', description: 'Кәсіпішілік оқыту, Қазақстан бойынша жобалық ауысымдар және сертификаттауға қолдау (мысалы, PMP, ISO).' },
      { title: 'Тұрақты маңызды жобалар', description: 'Өңірдің болашағын айқындайтын азаматтық, коммерциялық және өнеркәсіптік ірі жобаларда жұмыс.' },
      { title: 'Мықты ұжым', description: 'Қауіпсіздік, сапа және жергілікті экономикалық өсуді мақсат тұтқан ұйымшыл команда.' },
      { title: 'Қаржылық тұрақтылық', description: 'Зейнетақы жарналарына үлес қосу және өмірді сақтандыру.' }
    ],
    careerProcessSteps: [
      { step: '01', title: 'Өтініш пен түйіндемені қарау', description: 'Түйіндемеңізді және орындалған жобалар портфолиосын жіберіңіз.' },
      { step: '02', title: 'Танысу қоңырауы', description: '20 минуттық әңгіме, тәжірибеңіз бен біздің қажеттіліктерімізді талқылау.' },
      { step: '03', title: 'Техникалық тапсырма', description: 'Мамандыққа байланысты тапсырма немесе объектіге бару.' },
      { step: '04', title: 'Қорытынды сұхбат және ұсыныс', description: 'Бөлім басшыларымен кездесу, шарттарды талқылау және командаға қосылу.' }
    ],
    filterAllCities: 'Қазақстанның барлық қалалары',
    filterCityAktau: 'Ақтау',
    filterCityZhanaOzen: 'Жаңаөзен',
    filterAllProjects: 'Барлық жобалар',
    filterProjectIlanTowers: 'Ilan Towers',
    filterProjectCaspianCoast: 'Caspian Coast',
    filterProjectTaras: 'Taras',
    filterSortNone: 'Сұрыптаусыз',
    filterSortPriceAsc: 'Баға ↑',
    filterSortPriceDesc: 'Баға ↓',
    filterSortAreaAsc: 'Алаңы ↑',
    filterPromos: 'Акциялар',
    filterHideReserved: 'Брондалғандарды жасыру',
    commerceHeroTitle: 'Коммерциялық жылжымайтын мүлік',
    commerceHeroDescription: 'Қазақстанның негізгі қалаларындағы үздік кеңсе кеңістіктері',
    commerceHeroButton: 'Кеңес алу',
    commerceReserved: 'Брондалған',
    commerceOfficeLabel: 'Пәтер',
    commercePriceOnRequest: 'Баға сұрау бойынша',
        aboutImageAlt: 'CaspianCoast — жетістіктеріміз',
    companyTitle: 'Компания туралы',
    companySubtitle: 'Caspian Coast',
    companyDescription:
      '"Caspian Coast" ЖШС — азаматтық және өнеркәсіптік құрылыс саласындағы жоғары сапалы қызмет көрсететін қарқынды дамып келе жатқан компания.',
    companyHistoryTitle: 'Біздің тарихымыз',
    companyHistoryP1:
      '2017 жылы құрылған компания тұрғын үй кешендері, кеңсе ғимараттары және өнеркәсіптік нысандарды қоса алғанда көптеген жобаларды сәтті жүзеге асырды.',
    companyHistoryP2:
      'Біз тұрғын үй кешендерінен бастап ірі өнеркәсіптік объектілерге дейін кез келген ауқымдағы жобаларды жүзеге асыратын сенімді серіктес ретіндегі беделімізді мақтан тұтамыз.',
    companyHistoryPoints: [
      'Инновациялық құрылыс технологияларын қолдану',
      'Мерзімдер мен сапа стандарттарын қатаң сақтау',
      'Жобалаудан бастап кілт тапсыруға дейінгі кешенді тәсіл',
      'Экологиялық стандарттарды сақтау'
    ],
    companyAdvantagesTitle: 'Біздің артықшылықтарымыз',
    companyAdvantages: [
      { title: 'Өз өндірістік базаларымыз', description: 'Материал сапасын бақылап, шығындарды азайтуға мүмкіндік береді' },
      { title: 'Білікті команда', description: '80-нен астам жоғары білікті маман' },
      { title: 'Сертификатталған сапа', description: 'ISO 9001, 14001, 45001 халықаралық стандарттарына сәйкестік' }
    ],
    leadershipTitle1: 'Біздің',
    leadershipTitle2: 'басшылық команда',
    leadershipDescription:
      'Барлық жобалардың жоғары сапасы мен тиімділігін қамтамасыз ететін тәжірибелі мамандар.',
    leadershipSectionTitle: 'Жоғарғы басшылық',
    leadershipStats: [
      { value: '80+', label: 'Білікті қызметкер' },
      { value: '15+', label: 'Команданың орташа тәжірибесі (жыл)' },
      { value: '100%', label: 'Салаға бейінді білімді қызметкерлер' }
    ],
    projectsHomeTitle1: 'Біздің',
    projectsHomeTitle2: 'Каспий жағалауындағы жобаларымыз',
    projectsHomeDescription:
      'Жылдар бойы біз Маңғыстау облысында тұрғын үй кешендерінен бастап ірі өнеркәсіптік нысандарға дейін көптеген жобаларды іске асырдық.',
    projectsHomeResidential: 'Тұрғын үй құрылысы',
    projectsHomeIndustrial: 'Өнеркәсіптік және инфрақұрылымдық жобалар',
    projectsHomeMoreTitle: 'Тағы басқа көптеген нысандар',
    projectsHomeMoreDescription:
      'Бұл мысалдардан бөлек, біз Маңғыстау өңірінде газдандыру, су желілері, көлік жуу және басқа да инфрақұрылымдық жобаларды орындадық.',
    salesOfficeForBuyers: 'Сатып алушыларға',
    salesOfficeOnlineCenter: 'Онлайн сату орталығы',
    salesOfficeBuyProperty: 'Мүлік сатып алу',
    salesOfficeHeadOffice: 'Бас кеңсе',
    salesOfficeDepartment: 'Сату бөлімі',
    salesOfficeMonFri: 'Дс\u2013Жм',

    // Partner Page
    partnerConditionsTitle: 'Серіктестік шарттары мен қағидалары',
    partnerConditions: [
      {
        title: 'Кім серіктес бола алады',
        text:
          'Біз тұрмыстық қызмет саласында серіктестер іздейміз: дезинфекция, клининг, интерьер дизайны, жиһаз өндіру және басқа бағыттар.'
      },
      {
        title: 'Ынтымақтастыққа ашық',
        text:
          'Біз кез келген коммерциялық ұсыныстарға, маркетинг бастамаларына және ынтымақтастықтың басқа форматтарына ашықпыз.'
      },
      {
        title: 'Тек тексерілген серіктестер',
        text:
          'Пайдаланушылар ең жақсы қызмет алуы үшін біз сенімді әрі сапалы қызмет көрсетушілермен жұмыс жасаймыз.'
      },
      {
        title: 'Сапа кепілдігі',
        text: 'Әрбір серіктес BIG App стандарттары бойынша қатаң тексеруден өтеді және оқытылады.'
      }
    ],
    partnerBenefitsTitle: 'Ынтымақтастық артықшылықтары',
    partnerBenefits: [
      {
        title: 'Ірі жобаларға қол жеткізу',
        description: 'Ел бойынша ауқымды нысандарға тапсырыстар алыңыз.'
      },
      {
        title: 'Тиімді шарттар',
        description: 'Мөлдір төлем жүйесі және ұзақ мерзімді ынтымақтастық.'
      },
      {
        title: 'Оқыту және қолдау',
        description: 'Жаңа стандарттарға үйретіп, үздік тәжірибелерді енгізуге көмектесеміз.'
      },
      {
        title: 'Жоғары стандарттар',
        description: 'Біз сапаның озық стандарттарын және ашық шарттарды сақтаймыз.'
      },
      {
        title: 'Айқын процестер',
        description: 'Қадамдық қосылу, түсінікті талаптар және барлық кезеңдерде сүйемелдеу.'
      },
      {
        title: 'Сенімді серіктестік',
        description: 'Біз әр серіктесті бағалаймыз және ортақ табысқа ұмтыламыз.'
      }
    ],
    partnerCtaTitle: 'Серіктес болғыңыз келе ме?',
    partnerCtaDescription:
      'Бізбен +7 (700) 636-36-31 телефоны арқылы хабарласыңыз немесе info@caspiancoast.com мекенжайына хат жіберіңіз, біз ынтымақтастықтың егжей-тегжейін талқылаймыз.',
    partnerCtaButton: 'Хат жазу',
    maintenanceTitle: 'Сайт жаңартылуда',
    maintenanceMessage: 'Техникалық жұмыстар жүргізілуде. Кейінірек қайтып оралыңыз.',

    faqTitle: 'Жиі қойылатын сұрақтар',
    faqItems: [
      {
        question: 'Сіз қандай қызметтерді ұсынасыз?',
        answer:
          'Біз Каспий жағалауы бойынша құрылыс және девелопмент қызметтерінің толық спектрін ұсынамыз.'
      },
      {
        question: 'CaspianCoast-пен жобаны қалай бастауға болады?',
        answer:
          'Бізбен байланыс формасы арқылы немесе сату бөліміне қоңырау шалыңыз. Біздің команда келесі қадамдарды айтады.'
      },
      {
        question: 'Сіз тұрғын үй және коммерциялық клиенттермен жұмыс істейсіз бе?',
        answer:
          'Иә, біздің портфолиода тұрғын үй кешендері, сауда орталықтары және өнеркәсіптік нысандар бар.'
      },
      {
        question: 'Сіз қай жерде орналасқансыз?',
        answer: 'Біздің бас кеңсе 123 Coastal Avenue, CC 12345 мекенжайында орналасқан.'
      },
      {
        question: 'Сіздің аяқталған жобаларыңызды көріп шығуға бола ма?',
        answer:
          'Әрине. Аяқталған жобалардың бірін көру үшін бізге хабарласыңыз.'
      },
      {
        question: 'Жұмысқа қалай өтініш беруге болады?',
        answer: 'Ашық бос орындарды көру және өтініш беру үшін мансап бетіне кіріңіз.'
      }
          ],
    afterPurchaseTitle: 'Сатып алғаннан кейін не істеу керек',
    afterPurchaseStepsTitle: 'Келесі қадамдар',
    afterPurchaseSteps: [
      {
        title: 'Құжаттарды рәсімдеу',
        desc: 'Мәмілені аяқтау үшін барлық меншік құжаттарын қарап шығып, қол қойыңыз.'
      },
      {
        title: 'Мүлікті тексеру',
        desc: 'Жаңа кеңістікті аралап, назар аударуды қажет ететін мәселелерді белгілеңіз.'
      },
      {
        title: 'Жөндеу жұмыстарын жоспарлау',
        desc: 'Үйді өз қалауыңызша бейімдеу үшін біздің сенімді серіктестермен хабарласыңыз.'
      },
      {
        title: 'Орналасу',
        desc: 'Көшіп келіп, жаңа мүлікте тыныш өмір сүріңіз.'
      }
    ],
    afterPurchaseHelp: 'Көмек керек пе?',
    afterPurchaseContacts: [
      { label: '+7(700) 636-36-31', sub: 'Колл-орталық' },
      { label: 'caspiancoast@list.ru', sub: 'Қолдау қызметі' }
    ]
  }
  
};

export const getTranslation = (language: string): Translation => {
  return translations[language] || translations.en;
};