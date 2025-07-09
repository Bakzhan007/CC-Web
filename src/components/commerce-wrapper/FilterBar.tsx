import { Grid, List } from 'lucide-react';

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
}: FilterBarProps) => (
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="bg-white py-4 rounded-2xl shadow flex flex-wrap gap-3 items-center">
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-3 py-2 border rounded-lg bg-white text-sm shadow-sm"
      >
        <option>Все города Казахстана</option>
        <option>Актау</option>
        <option>ЖанаОзен</option>
      </select>

      <select
        value={project}
        onChange={(e) => setProject(e.target.value)}
        className="px-3 py-2 border rounded-lg bg-white text-sm shadow-sm"
      >
        <option value="">Все проекты</option>
        <option>ЖК Ilan Towers</option>
        <option>ЖК Caspian Coast</option>
        <option>ЖК Taras</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="px-3 py-2 border rounded-lg bg-white text-sm shadow-sm"
      >
        <option value="">Без сортировки</option>
        <option value="priceAsc">Цена ↑</option>
        <option value="priceDesc">Цена ↓</option>
        <option value="areaAsc">Площадь ↑</option>
      </select>

      <button
        onClick={() => setShowPromos(!showPromos)}
        className={`px-3 py-1 rounded-full text-sm border ${showPromos ? 'bg-green-100 border-green-300' : 'bg-white'}`}
      >
        Акции
      </button>
      <button
        onClick={() => setHideReserved(!hideReserved)}
        className={`px-3 py-1 rounded-full text-sm border ${hideReserved ? 'bg-gray-200' : 'bg-white'}`}
      >
        Не показывать забронированные
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

export default FilterBar;
export type { ViewMode };