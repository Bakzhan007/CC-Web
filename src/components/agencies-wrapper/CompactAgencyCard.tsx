import { Briefcase, Calendar, MapPin, Mail, Phone, Star, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Agency } from './types';

interface Props {
  agency: Agency;
}

export default function CompactAgencyCard({ agency }: Props) {
  const { t } = useLanguage();
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Image and Logo */}
        <div className="lg:w-80 h-48 lg:h-auto relative overflow-hidden flex-shrink-0">
          <img
            src={agency.coverImage}
            alt={`${agency.name} office`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="absolute bottom-3 left-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-1 shadow-md">
              <img
                src={agency.logo}
                alt={`${agency.name} logo`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 p-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between h-full">
            {/* Main Content */}
            <div className="flex-1 lg:pr-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">{agency.name}</h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {agency.category}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-2 sm:mt-0 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{agency.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Est. {agency.established}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{agency.description}</p>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{agency.employees} employees</span>
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  <span>{agency.projects}+ projects</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{agency.location}</span>
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {agency.specialties.slice(0, 4).map(specialty => (
                    <span key={specialty} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                      {specialty}
                    </span>
                  ))}
                  {agency.specialties.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                      +{agency.specialties.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Gallery Preview - Mobile/Tablet */}
              <div className="lg:hidden mb-4">
                <div className="flex gap-2">
                  {agency.galleryImages.slice(0, 4).map((image, index) => (
                    <div key={index} className="w-12 h-9 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={image}
                        alt={`${agency.name} work ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="lg:w-48 flex-shrink-0">
              {/* Gallery Preview - Desktop */}
              <div className="hidden lg:block mb-4">
                <div className="grid grid-cols-2 gap-2">
                  {agency.galleryImages.slice(0, 4).map((image, index) => (
                    <div key={index} className="aspect-square rounded-md overflow-hidden">
                      <img
                        src={image}
                        alt={`${agency.name} work ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="truncate">{agency.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{agency.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}