import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';


import career from '../assets/image/career1.jpg'
import { 
  ChevronRight, 
  MapPin, 
  Clock, 
  Users, 
  Award, 
  Heart, 
  Zap, 
  Globe, 
  Shield, 
  Coffee,
  Briefcase,
  GraduationCap,
  Plane,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  Star
} from 'lucide-react';

const Career = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const jobCategories = ['All', 'Accountant', 'Sales', 'Economist'];
  
  const jobs = [
    {
      title: 'Chief accountant',
      category: 'Accountant',
      location: 'Aktau',
      type: 'Full-time',
      description: 'Join our engineering team to build scalable solutions that impact millions of users worldwide.',
      requirements: ['5+ years experience', 'React/TypeScript', 'Node.js', 'Cloud platforms']
    },
    {
      title: 'Sales specialist',
      category: 'Sales',
      location: 'Aktau',
      type: 'Full-time',
      description: 'Create beautiful and intuitive user experiences that delight our customers.',
      requirements: ['3+ years experience', 'Figma/Sketch', 'Design systems', 'User research']
    },
    {
      title: 'Economist',
      category: 'Economist',
      location: 'Aktau',
      type: 'Full-time',
      description: 'We invite an experienced economist to develop and control the financial and economic direction of our construction projects. The vacancy includes:',
      requirements: ['Higher economic or financial education', 'Experience in a similar position from 5 years', 'Confident proficiency in 1C: Enterprise 8 and MS Excel', 'Skills in financial planning, budgeting and building financial models', 'Experience in working with estimate documentation and cost calculations', 'Knowledge of project performance evaluation methods (NPV, IRR)', 'Experience in investment analytics and preparation of presentations for investors']
    },
    
  ];

  const testimonials = [
    {
      name: 'Altynbek',
      role: 'Economycs',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Working at Caspian Coast means knowing every structure we build—from pipelines to housing estates—serves our people and economy. The team’s camaraderie and shared pride in safety standards make every day rewarding.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'Product Designer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'I\'ve never worked somewhere that values innovation and creativity as much as this company does.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The work-life balance and professional development opportunities are exceptional.',
      rating: 5
    }
  ];

  const benefitIcons = [Heart, GraduationCap, Plane, Coffee, Award, Shield];
  const benefits = t.careerBenefitsList.map((b, idx) => ({
    icon: benefitIcons[idx],
    title: b.title,
    description: b.description
  }));

  const valueIcons = [Users, Zap, Globe, CheckCircle];
  const values = t.careerValuesList.map((v, idx) => ({
    icon: valueIcons[idx],
    title: v.title,
    description: v.description
  }));

  const filteredJobs = selectedCategory === 'All' 
    ? jobs 
    : jobs.filter(job => job.category === selectedCategory);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  React.useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              {t.careerHeroTitle}
              <span className="block text-blue-600">{t.careerHeroSubtitle}</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 mb-8">
              {t.careerHeroDescription}
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center group">
              {t.careerHeroButton}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
            <div className="hidden md:block">
            <img
              src={career}
              alt="Our partner agencies at work"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t.careerValuesTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.careerValuesDescription}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t.careerBenefitsTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.careerBenefitsDescription}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t.careerTeamSaysTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.careerTeamSaysDescription}
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-2xl text-gray-800 italic leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t.careerOpenPositionsTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.careerOpenPositionsDescription}
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {jobCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition">
                <div className="md:flex md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {job.category}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded flex items-center group">
                    {t.careerApplyButton}
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <p className="mt-4 text-gray-700">{job.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{t.careerRequirementTitle}</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t.careerProcessTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.careerProcessDescription}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {t.careerProcessSteps.map((process, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-900 to-cyan-600 rounded-3xl p-12 lg:p-16 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">{t.careerReadyTitle}</h2>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                {t.careerReadyDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5" />
                  careers@company.com
                </button>
                <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  +1 (555) 123-4567
                </button>
              </div>
              <p className="text-blue-200 text-sm">
                {t.careerEqualOpportunity}
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default Career;