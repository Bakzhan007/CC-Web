import { Grid, List } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

type ViewMode = 'grid' | 'list';

interface FilterBarProps {
  city: string;
  setCity: (v: string) => void;
  project: string;
  setProject: (v: string) => void;
  sortBy: string;
  setSortBy: (v: string) => void;
  showPromos: boolean;
  setShowPromos: (v: boolean) => void;
  hideReserved: boolean;
  setHideReserved: (v: boolean) => void;
  viewMode: ViewMode;
  setViewMode: (v: ViewMode) => void;
}

const FilterBar = ({
  city,
  setCity,
  project,
  setProject,
  sortBy,
  setSortBy,
  showPromos,
  setShowPromos,
  hideReserved,
  setHideReserved,
  viewMode,
  setViewMode,
}: FilterBarProps) => {
  const { t } = useLanguage();
  return (  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="bg-white py-4 rounded-2xl shadow flex flex-wrap gap-3 items-center">
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-3 py-2 border rounded-lg bg-white text-sm shadow-sm"
      >
        <option value="all">{t.filterAllCities}</option>
        <option value="Актау">{t.filterCityAktau}</option>
        <option value="ЖанаОзен">{t.filterCityZhanaOzen}</option>
      </select>

      <select
        value={project}
        onChange={(e) => setProject(e.target.value)}
        className="px-3 py-2 border rounded-lg bg-white text-sm shadow-sm"
      >
        <option value="">{t.filterAllProjects}</option>
        <option value="ЖК Ilan Towers">{t.filterProjectIlanTowers}</option>
        <option value="ЖК Caspian Coast">{t.filterProjectCaspianCoast}</option>
        <option value="ЖК Taras">{t.filterProjectTaras}</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="px-3 py-2 border rounded-lg bg-white text-sm shadow-sm"
      >
        <option value="">{t.filterSortNone}</option>
        <option value="priceAsc">{t.filterSortPriceAsc}</option>
        <option value="priceDesc">{t.filterSortPriceDesc}</option>
        <option value="areaAsc">{t.filterSortAreaAsc}</option>
      </select>

      <button
        onClick={() => setShowPromos(!showPromos)}
        className={`px-3 py-1 rounded-full text-sm border ${showPromos ? 'bg-green-100 border-green-300' : 'bg-white'}`}
      >
        {t.filterPromos}
      </button>
      <div className="ml-auto flex gap-3">
        <button
          onClick={() => setViewMode('grid')}
          className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
        >
          <Grid size={16} />
        </button>
        <button
          onClick={() => setViewMode('list')}
          className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
        >
          <List size={16} />
        </button>
      </div>
    </div>
  </div>
  );
};
export default FilterBar;
export type { ViewMode };