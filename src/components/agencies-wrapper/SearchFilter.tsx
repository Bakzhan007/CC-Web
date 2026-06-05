import { Filter, Search } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface Props {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  showFilters: boolean;
  setShowFilters: Dispatch<SetStateAction<boolean>>;
  categories: string[];
}

export default function SearchFilter({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  showFilters,
  setShowFilters,
  categories,
}: Props) {
  const { t } = useLanguage();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          {/* Search Bar */}
          <div className="lg:col-span-6 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t.agenciesSearchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-700 placeholder-slate-400"
            />
          </div>

          {/* Category Filter */}
          <div className="lg:col-span-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-700"
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
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl transition-colors duration-200"
            >
              <Filter className="w-5 h-5" />
              <span className="hidden sm:inline">{t.agenciesFilters}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
