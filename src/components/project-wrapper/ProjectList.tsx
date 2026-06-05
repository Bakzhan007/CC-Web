import { useState } from 'react'
import { Building2, MapPin, Layers, Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'
import { projects, type Project } from '../../data/projects'

export default function ProjectList() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: t.allProjects },
    { id: 'commercial', name: t.commercial },
    { id: 'residential', name: t.residential },
    { id: 'industrial', name: t.industrial },
  ]

  const getStatusText = (status: string) =>
    status === 'completed' ? t.completed : status === 'inProgress' ? t.inProgress : status === 'planning' ? t.planning : status

  const statusColor = (status: string) =>
    status === 'completed' ? 'bg-green-500' : status === 'inProgress' ? 'bg-brand-500' : 'bg-orange-500'

  const filteredProjects =
    activeCategory === 'all' ? projects : projects.filter(p => p.category === activeCategory)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20">
      {/* Декоративные пятна */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl" />

      <div className="container relative mx-auto px-6">
        {/* Фильтр категорий */}
        <div className="mb-16 flex flex-wrap justify-center gap-3">
          {categories.map(cat => {
            const active = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                  active ? 'text-white' : 'bg-white text-slate-600 border border-slate-200 hover:text-brand-600 hover:border-brand-300'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="cat-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-600 to-brand-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.name}</span>
              </button>
            )
          })}
        </div>

        {/* Чередующиеся блоки проектов */}
        <div className="space-y-16 lg:space-y-24">
          {filteredProjects.map((project, index) => (
            <FeatureRow key={project.id} project={project} index={index}
              statusText={getStatusText(project.status)} statusColor={statusColor(project.status)} t={t} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <Building2 className="mx-auto mb-4 h-16 w-16 text-slate-300" />
              <h3 className="mb-2 text-xl font-bold text-slate-900">Проекты не найдены</h3>
              <p className="text-sm text-slate-600">В выбранной категории пока нет доступных проектов</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function FeatureRow({ project, index, statusText, statusColor, t }: {
  project: Project; index: number; statusText: string; statusColor: string
  t: ReturnType<typeof useLanguage>['t']
}) {
  const reversed = index % 2 === 1
  const chips = [
    { icon: MapPin, value: `${project.location}, ${project.district}` },
    { icon: Layers, value: project.floors },
    { icon: Building2, value: `${project.blocks} · ${t.projectBlocks}` },
    { icon: Calendar, value: project.deadline },
  ]

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
    >
      {/* Изображение */}
      <div className={`group relative ${reversed ? 'lg:order-2' : ''}`}>
        <div className="relative overflow-hidden rounded-3xl shadow-xl">
          <img
            src={project.image}
            alt={project.name}
            loading={index < 1 ? 'eager' : 'lazy'}
            className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-96"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          {/* Бейджи */}
          <span className={`absolute left-5 top-5 rounded-full px-3 py-1 text-xs font-semibold text-white ${statusColor}`}>
            {statusText}
          </span>
          <span className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur">
            {project.type}
          </span>
        </div>
      </div>

      {/* Контент */}
      <div className="relative">
        {/* Водяной номер */}
        <span className="pointer-events-none absolute -top-16 -z-0 select-none text-[8rem] font-black leading-none text-brand-600/5 sm:text-[10rem]">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="relative z-10">
          <h3 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">{project.name}</h3>
          <p className="mt-3 max-w-xl text-slate-600">{project.description}</p>

          {/* Чипы характеристик */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {chips.map((c, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <c.icon size={18} />
                </span>
                <span className="text-sm font-medium text-slate-700">{c.value}</span>
              </div>
            ))}
          </div>

          {/* Цена + кнопка */}
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <div>
              <div className="text-2xl font-extrabold text-brand-700">{project.priceRange}</div>
            </div>
            <Link
              to={`/projects/${project.id}`}
              state={{ project }}
              className="group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 font-medium text-white shadow-lg shadow-brand-600/20 transition-shadow hover:shadow-xl hover:shadow-brand-600/30"
            >
              {t.viewDetails}
              <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
