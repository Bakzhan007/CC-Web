// Единый источник проектов (ЖК) — используется и на странице «Проекты», и в каталоге квартир.
import imgTaras from '../assets/image/taras.webp'
import imgIlan from '../assets/image/ilan_tower.webp'
import imgIlan3 from '../assets/image/i3-d.webp'
import imgIlan4 from '../assets/image/i4-d.webp'
import imgIlan5 from '../assets/image/i5-d.webp'

export interface Project {
  id: number
  name: string
  category: string
  location: string
  district: string
  year: string
  image: string
  images?: string[]
  description: string
  videoUrl: string
  area: string
  floors: string
  blocks: string
  type: string
  deadline: string
  priceRange: string
  status: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'ЖК Ilan Towers',
    category: 'residential',
    location: 'Aktau',
    district: '15 мкр.',
    year: '2025',
    image: imgIlan,
    images: [imgIlan, imgIlan3, imgIlan4, imgIlan5],
    description: 'Современный жилой комплекс бизнес-класса с видом на море.',
    videoUrl: 'https://youtu.be/KLwn1sejhiU?si=xlNb7dBer3eZFiR7',
    area: '45,000 кв.м',
    floors: '16 этажей',
    blocks: '2',
    type: 'Бизнес-класс',
    deadline: '4 кв. 2025',
    priceRange: 'от 30 млн ₸',
    status: 'inProgress',
  },
  {
    id: 2,
    name: 'ЖК Taras',
    category: 'residential',
    location: 'Aktau',
    district: '7а мкр.',
    year: '2025',
    image: imgTaras,
    description: 'Комфортный жилой комплекс рядом с набережной.',
    videoUrl: 'https://youtu.be/jzjwXM5ZoIA?si=bp7U0oMw2gXh7yFz',
    area: '120 квартир',
    floors: '12-14 этажей',
    blocks: '4',
    type: 'Комфорт',
    deadline: '2 кв. 2024',
    priceRange: 'от 25 млн ₸',
    status: 'inProgress',
  },
  {
    id: 3,
    name: 'ЖК Caspian Coast',
    category: 'residential',
    location: 'Aktau',
    district: '3 мкр.',
    year: '2024',
    image: 'https://storage.googleapis.com/bd-kz-01/buildings-v2/1280x960/8129.jpg',
    description: 'Жилой комплекс с развитой инфраструктурой.',
    videoUrl: 'https://youtu.be/BLBzY1S7xbQ?si=VQKrTtFBnY1omnDO',
    area: '75,000 кв.м',
    floors: '9 этажей',
    blocks: '2',
    type: 'Эконом',
    deadline: '3 кв. 2023',
    priceRange: 'от 20 млн ₸',
    status: 'completed',
  },
]

// Поиск проекта по имени из каталога (регистронезависимо, с учётом префикса «ЖК»)
export function findProjectByName(name?: string | null): Project | undefined {
  if (!name) return undefined
  const norm = (s: string) => s.trim().toLowerCase().replace(/^жк\s+/, '')
  const target = norm(name)
  // точное совпадение, затем по вхождению (напр. «Ilan Tower» ↔ «Ilan Towers»)
  return (
    projects.find(p => norm(p.name) === target) ||
    projects.find(p => norm(p.name).includes(target) || target.includes(norm(p.name)))
  )
}
