export interface Agency {
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