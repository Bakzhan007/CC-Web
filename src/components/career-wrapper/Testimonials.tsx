import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const testimonialsData = [
    {
      name: t.testimonials[0].name,
      role: t.testimonials[0].role,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: t.testimonials[0].quote,
      rating: 5,
    },
    {
      name: t.testimonials[1].name,
      role: t.testimonials[1].role,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: t.testimonials[1].quote,
      rating: 5,
    },
    {
      name: t.testimonials[2].name,
      role: t.testimonials[2].role,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: t.testimonials[2].quote,
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-brand-900 to-brand-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t.careerTeamSaysTitle}
          </h2>
          <p className="text-xl text-brand-100 max-w-3xl mx-auto leading-relaxed">
            {t.careerTeamSaysDescription}
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Testimonial Card */}
          <div className="relative">
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 to-brand-600/20 rounded-2xl blur-xl transform scale-105"></div>
            
            {/* Card Content */}
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 lg:p-12 border border-white/20">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-400 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Profile Section */}
              <div className="flex items-center mb-8 pt-6">
                <div className="relative">
                  <img
                    src={testimonialsData[current].image}
                    alt={testimonialsData[current].name}
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-lg"
                    loading="lazy"
                  />
                  {/* Online Indicator */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
                </div>
                
                <div className="ml-6 flex-1">
                  <h4 className="text-2xl font-bold text-slate-900 mb-1">
                    {testimonialsData[current].name}
                  </h4>
                  <p className="text-lg text-brand-600 font-semibold mb-2">
                    {testimonialsData[current].role}
                  </p>
                  
                  {/* Stars */}
                  <div className="flex items-center">
                    {[...Array(testimonialsData[current].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                    ))}
                    <span className="ml-2 text-sm text-slate-600 font-medium">
                      {testimonialsData[current].rating}.0
                    </span>
                  </div>
                </div>

                {/* Company Logo Placeholder */}
                <div className="hidden lg:block">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-600 to-brand-400 rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="text-xl lg:text-2xl text-slate-800 leading-relaxed font-medium relative">
                <span className="text-brand-600 text-6xl absolute -top-4 -left-2 opacity-20">"</span>
                <span className="relative z-10">{testimonialsData[current].quote}</span>
                <span className="text-brand-600 text-6xl absolute -bottom-8 -right-2 opacity-20">"</span>
              </blockquote>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`relative transition-all duration-300 ${
                  index === current ? 'scale-125' : 'hover:scale-110'
                }`}
              >
                <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === current 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/40 hover:bg-white/60'
                }`} />
                {index === current && (
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-white/30 animate-ping"></div>
                )}
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="w-full bg-white/20 rounded-full h-1.5">
              <div 
                className="bg-gradient-to-r from-brand-500 to-brand-400 h-1.5 rounded-full transition-all duration-300 shadow-lg"
                style={{ width: `${((current + 1) / testimonialsData.length) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-white/60 text-sm">
              <span>{current + 1}</span>
              <span>{testimonialsData.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;