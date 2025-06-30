import React, { useState } from 'react';
import { Search, MapPin, Phone, Mail, Globe, Filter, Star, Users, Award, ArrowRight, Building2, Briefcase, ExternalLink, Calendar } from 'lucide-react';

interface Agency {
  id: number;
  name: string;
  description: string;
  category: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  logo: string;
  coverImage: string;
  galleryImages: string[];
  rating: number;
  employees: string;
  established: string;
  featured: boolean;
  specialties: string[];
  projects: number;
}

const agencies: Agency[] = [
  {
    id: 1,
    name: "Digital Synergy Group",
    description: "Leading digital transformation agency specializing in enterprise solutions and innovative technology implementations.",
    category: "Digital Marketing",
    location: "New York, NY",
    phone: "+1 (555) 123-4567",
    email: "contact@digitalsynergy.com",
    website: "digitalsynergy.com",
    logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    coverImage: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    galleryImages: [
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    ],
    rating: 4.9,
    employees: "50-100",
    established: "2015",
    featured: true,
    specialties: ["SEO", "PPC", "Social Media", "Analytics"],
    projects: 250
  },
  {
    id: 2,
    name: "Creative Minds Studio",
    description: "Award-winning creative agency focused on brand identity, web design, and comprehensive marketing strategies.",
    category: "Creative Design",
    location: "Los Angeles, CA",
    phone: "+1 (555) 234-5678",
    email: "hello@creativeminds.com",
    website: "creativeminds.com",
    logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    coverImage: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    galleryImages: [
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    ],
    rating: 4.8,
    employees: "25-50",
    established: "2018",
    featured: true,
    specialties: ["Branding", "UI/UX", "Web Design", "Print Design"],
    projects: 180
  },
  {
    id: 3,
    name: "TechForward Solutions",
    description: "Cutting-edge technology consultancy providing software development and digital infrastructure solutions.",
    category: "Technology",
    location: "Austin, TX",
    phone: "+1 (555) 345-6789",
    email: "info@techforward.com",
    website: "techforward.com",
    logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    coverImage: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    galleryImages: [
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    ],
    rating: 4.7,
    employees: "100-200",
    established: "2012",
    featured: false,
    specialties: ["Software Development", "Cloud Solutions", "AI/ML", "DevOps"],
    projects: 320
  },
  {
    id: 4,
    name: "Strategic Marketing Hub",
    description: "Full-service marketing agency delivering data-driven strategies and measurable results for growing businesses.",
    category: "Digital Marketing",
    location: "Chicago, IL",
    phone: "+1 (555) 456-7890",
    email: "contact@strategicmarketing.com",
    website: "strategicmarketing.com",
    logo: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    coverImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    galleryImages: [
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    ],
    rating: 4.6,
    employees: "75-100",
    established: "2016",
    featured: false,
    specialties: ["Content Marketing", "Email Marketing", "Marketing Automation", "Lead Generation"],
    projects: 195
  },
  {
    id: 5,
    name: "Brand Elevation Co.",
    description: "Boutique branding agency specializing in premium brand experiences and luxury market positioning.",
    category: "Creative Design",
    location: "San Francisco, CA",
    phone: "+1 (555) 567-8901",
    email: "hello@brandelevation.com",
    website: "brandelevation.com",
    logo: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    coverImage: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    galleryImages: [
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    ],
    rating: 4.9,
    employees: "15-25",
    established: "2020",
    featured: true,
    specialties: ["Luxury Branding", "Packaging Design", "Brand Strategy", "Art Direction"],
    projects: 85
  },
  {
    id: 6,
    name: "Innovation Labs",
    description: "R&D focused agency driving innovation through emerging technologies and next-generation digital solutions.",
    category: "Technology",
    location: "Seattle, WA",
    phone: "+1 (555) 678-9012",
    email: "innovation@innovlabs.com",
    website: "innovlabs.com",
    logo: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    coverImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    galleryImages: [
      "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    ],
    rating: 4.8,
    employees: "30-50",
    established: "2019",
    featured: false,
    specialties: ["Blockchain", "IoT", "AR/VR", "Cybersecurity"],
    projects: 125
  }
];

const categories = ["All", "Digital Marketing", "Creative Design", "Technology"];

export default function Agencies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredAgencies = agencies.filter(agency => {
    const matchesSearch = agency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agency.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agency.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || agency.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredAgencies = filteredAgencies.filter(agency => agency.featured);
  const regularAgencies = filteredAgencies.filter(agency => !agency.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section with Background Image */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Official Partner
              <span className="block text-blue-300">Agencies</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our verified network of professional agencies delivering exceptional results across digital marketing, creative design, and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-blue-200">
                <Award className="w-5 h-5" />
                <span>150+ Verified Partners</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Star className="w-5 h-5" />
                <span>4.8 Average Rating</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Users className="w-5 h-5" />
                <span>10,000+ Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 -mt-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Search Bar */}
            <div className="lg:col-span-6 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search agencies, specialties, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Category Filter */}
            <div className="lg:col-span-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
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
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200"
              >
                <Filter className="w-5 h-5" />
                <span className="hidden sm:inline">Filters</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-gray-600 text-lg">
          Showing <span className="font-semibold text-blue-600">{filteredAgencies.length}</span> agencies
        </p>
      </div>

      {/* Featured Agencies */}
      {featuredAgencies.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Partners</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAgencies.map(agency => (
              <AgencyCard key={agency.id} agency={agency} featured={true} />
            ))}
          </div>
        </div>
      )}

      {/* All Agencies - New Compact List Design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">All Agencies</h2>
        <div className="space-y-4">
          {regularAgencies.map(agency => (
            <CompactAgencyCard key={agency.id} agency={agency} />
          ))}
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Partners in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the creative workspaces and professional environments of our partner agencies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
              "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
              "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
              "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
              "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
              "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
              "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
              "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl aspect-square">
                <img 
                  src={image} 
                  alt={`Agency workspace ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AgencyCard({ agency, featured }: { agency: Agency; featured: boolean }) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${featured ? 'ring-2 ring-yellow-400' : ''}`}>
      {/* Cover Image */}
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
            <span>Featured</span>
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

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group">
            <span>View Profile</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <a 
            href={`https://${agency.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 border border-gray-300 hover:border-blue-600 text-gray-600 hover:text-blue-600 rounded-lg transition-colors duration-200"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

function CompactAgencyCard({ agency }: { agency: Agency }) {
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

              {/* Action Buttons */}
              <div className="flex flex-col gap-2">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group text-sm">
                  <span>View Profile</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <a 
                  href={`https://${agency.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 p-2 border border-gray-300 hover:border-blue-600 text-gray-600 hover:text-blue-600 rounded-lg transition-colors duration-200 text-sm"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}