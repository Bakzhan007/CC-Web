import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const testimonialsData = [
  {
    name: 'Altynbek',
    role: 'Economycs',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote:
      "Working at Caspian Coast means knowing every structure we build—from pipelines to housing estates—serves our people and economy. The team’s camaraderie and shared pride in safety standards make every day rewarding.",
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Product Designer',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: "I've never worked somewhere that values innovation and creativity as much as this company does.",
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Manager',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'The work-life balance and professional development opportunities are exceptional.',
    rating: 5,
  },
];

const Testimonials = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonialsData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.careerTeamSaysTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.careerTeamSaysDescription}
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="flex items-center mb-6">
              <img
                src={testimonialsData[current].image}
                alt={testimonialsData[current].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  {testimonialsData[current].name}
                </h4>
                <p className="text-gray-600">
                  {testimonialsData[current].role}
                </p>
              </div>
              <div className="ml-auto flex">
                {[...Array(testimonialsData[current].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-2xl text-gray-800 italic leading-relaxed">
              "{testimonialsData[current].quote}"
            </blockquote>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;