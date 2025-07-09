import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
}

const News: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'company', name: 'Company' },
    { id: 'projects', name: 'Projects' },
    { id: 'events', name: 'Events' }
  ];

  const articles: Article[] = [
    {
      id: 1,
      title: 'Groundbreaking Ceremony for New Coastal Tower',
      category: 'company',
      date: 'May 10, 2024',
      image: 'https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'CaspianCoast marked the start of construction on the landmark Coastal Tower with a festive ceremony.'
    },
    {
      id: 2,
      title: 'Quarterly Report Shows Record Growth',
      category: 'company',
      date: 'April 22, 2024',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'The latest financial report highlights impressive results across all divisions of the company.'
    },
    {
      id: 3,
      title: 'Seaside Residences Near Completion',
      category: 'projects',
      date: 'April 5, 2024',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Finishing touches are underway on the luxury seaside complex set to open this summer.'
    },
    {
      id: 4,
      title: 'Employees Join Annual Charity Marathon',
      category: 'events',
      date: 'March 18, 2024',
      image: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Team members participated in the city marathon raising funds for local hospitals.'
    },
    {
      id: 5,
      title: 'Innovative Green Building Materials Adopted',
      category: 'projects',
      date: 'February 27, 2024',
      image: 'https://images.pexels.com/photos/399321/pexels-photo-399321.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'New eco‑friendly materials will be used in upcoming developments across the region.'
    },
    {
      id: 6,
      title: 'Press Conference Recap: Future Vision',
      category: 'company',
      date: 'January 14, 2024',
      image: 'https://images.pexels.com/photos/21696/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Executives shared strategic plans for expansion and innovation at the annual press conference.'
    }
  ];

  const filtered = activeCategory === 'all' ? articles : articles.filter(a => a.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        <section className="bg-slate-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t.footerLinks.news}
            </h1>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map(article => (
                <div key={article.id} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-white/90 text-xs font-medium px-3 py-1 rounded-full">
                      {article.date}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                      Read more
                    </a>
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
};

export default News;