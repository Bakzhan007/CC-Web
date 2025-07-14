import { Heart } from 'lucide-react';
import type { ViewMode } from './FilterBar';
import { useLanguage } from '../../contexts/LanguageContext';

export interface Office {
  id: number;
  city: string;
  area: number;
  price: number | null;
  originalPrice?: number;
  reserved: boolean;
  project: string;
  block: string;
  floor: number;
  image: string;
  tags: string[];
}

interface ListingsProps {
  offices: Office[];
  viewMode: ViewMode;
}

const Listings = ({ offices, viewMode }: ListingsProps) => {
  const { t } = useLanguage();
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {viewMode === 'grid' ? (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {offices.map((o) => (
          <div
            key={o.id}
            className="relative bg-white rounded-2xl shadow hover:shadow-md transition-shadow overflow-hidden"
          >
            <img src={o.image} alt={`Office ${o.area} m²`} className="w-full h-60 md:h-64 object-cover" />
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium">{t.commerceOfficeLabel} {o.area} м²</h3>
                <Heart size={18} className="text-gray-400 hover:text-red-500 cursor-pointer" />
              </div>
              <div className="flex gap-2 flex-wrap">
                {o.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                {o.price != null ? (
                  <>
                    <span className="text-green-600 font-bold text-lg">От {o.price.toLocaleString()} ₸</span>
                    {o.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">{o.originalPrice.toLocaleString()} ₸</span>
                    )}
                    </>
                ) : (
                  <span className="text-gray-600 italic">{t.commercePriceOnRequest}</span>
                )}
              </div>
              <p className="text-sm text-gray-500">
                {o.project} · блок {o.block} · {o.floor} этаж
              </p>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="space-y-6">
        {offices.map((o) => (
          <div
            key={o.id}
            className="relative flex bg-white rounded-2xl shadow hover:shadow-md transition-shadow overflow-hidden"
          >
            <img src={o.image} alt={`Office ${o.area} m²`} className="w-60 md:w-64 h-60 md:h-64 object-cover flex-shrink-0" />
            <div className="p-4 flex flex-col justify-between flex-1">
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium">Офис {o.area} м²</h3>
                  <Heart size={18} className="text-gray-400 hover:text-red-500 cursor-pointer" />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {o.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  {o.project} · блок {o.block} · {o.floor} этаж · подъезд               </p>
              </div>
              <div className="flex items-baseline gap-2">
                {o.price != null ? (
                  <>
                    <span className="text-green-600 font-bold text-lg">{o.price.toLocaleString()} ₸</span>
                    {o.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">{o.originalPrice.toLocaleString()} ₸</span>
                    )}                  </>
                ) : (
                  <span className="text-gray-600 italic">{t.commercePriceOnRequest}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
    </div>
  );
};

export default Listings;