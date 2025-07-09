import { Award, Briefcase, MapPin, Mail, Phone, Star, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Agency } from './types';

interface Props {
  agency: Agency;
  featured: boolean;
}

export default function AgencyCard({ agency, featured }: Props) {
  const { t } = useLanguage();
  return (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${featured ? 'ring-2 ring-yellow-400' : ''}`}>      {/* Cover Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={agency.coverImage}
          alt={`${agency.name} office`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-sm font-medium px-3 py-1 rounded-full flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>{t.featured}</span>
          </div>
        )}

        {/* Logo overlay */}
        <div className="absolute bottom-4 left-4">
          <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-1 shadow-lg">
            <img
              src={agency.logo}
              alt={`${agency.name} logo`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Agency Header */}
        <div className="mb-4">
          <h3 className="font-bold text-xl text-gray-900 mb-2">{agency.name}</h3>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            {agency.category}
          </span>
        </div>

        {/* Rating and Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-medium">{agency.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{agency.employees}</span>
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            <span>{agency.projects}+ projects</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">{agency.description}</p>

        {/* Gallery Preview */}
        <div className="mb-4">
          <div className="flex gap-2 overflow-hidden">
            {agency.galleryImages.slice(0, 3).map((image, index) => (
              <div key={index} className="w-16 h-12 rounded-md overflow-hidden flex-shrink-0">
                <img
                  src={image}
                  alt={`${agency.name} work ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
                />
              </div>
            ))}
            <div className="w-16 h-12 rounded-md bg-gray-100 flex items-center justify-center text-xs text-gray-500 font-medium">
              +{agency.galleryImages.length - 3}
            </div>
          </div>
        </div>

        {/* Specialties */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {agency.specialties.slice(0, 3).map(specialty => (
              <span key={specialty} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                {specialty}
              </span>
            ))}
            {agency.specialties.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                +{agency.specialties.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{agency.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Phone className="w-4 h-4" />
            <span>{agency.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Mail className="w-4 h-4" />
            <span className="truncate">{agency.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}