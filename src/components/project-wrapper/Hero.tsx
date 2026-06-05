import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { MapPin, Award, Target, ChevronDown, Sparkles } from 'lucide-react'
import { motion, useInView, animate } from 'framer-motion'
import heroBg from '../../assets/image/taras.webp'

// Счётчик с набором числа при появлении в зоне видимости
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.4, ease: [0.16, 1, 0.3, 1],
      onUpdate: v => setVal(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to])
  return <span ref={ref}>{val}{suffix}</span>
}

export default function Hero() {
  const { t } = useLanguage()

  const stats = [
    { icon: Award, to: 15, suffix: '+', unit: t.projectsStatsProjects, label: t.projectsStatsCompletedProjects, bar: 'w-4/5', accent: 'from-brand-500 to-brand-600', chip: 'bg-brand-500/20 text-brand-200' },
    { icon: MapPin, to: 2, suffix: '', unit: t.projectsStatsCities, label: t.projectsStatsCitiesPresence, bar: 'w-2/5', accent: 'from-brand-500 to-brand-600', chip: 'bg-brand-500/20 text-brand-200' },
    { icon: Target, to: 8, suffix: '', unit: t.projectsStatsYears, label: t.projectsStatsYearsExperience, bar: 'w-5/6', accent: 'from-emerald-500 to-emerald-600', chip: 'bg-emerald-500/20 text-emerald-200' },
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Фоновое фото + затемнение */}
      <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/90 to-slate-900/95" />
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 via-transparent to-brand-600/20" />

      {/* Плавающие свечения */}
      <motion.div animate={{ y: [0, -30, 0], x: [0, 15, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-10 left-1/4 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <motion.div animate={{ y: [0, 25, 0], x: [0, -20, 0] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-brand-400/15 blur-3xl" />

      {/* Сетка-паттерн */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="container relative z-10 mx-auto px-6 py-20 lg:py-28">
        <div className="mb-14 text-center">
          {/* Кикер */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur">
            <Sparkles size={14} className="text-brand-300" /> CaspianCoast
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}
            className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            {t.projectsHeroTitle1}{' '}
            <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500 bg-clip-text text-transparent">
              {t.projectsHeroTitle2}
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-5 max-w-3xl text-xl text-slate-300 md:text-2xl">
            {t.projectsHeroDescription}
          </motion.p>
        </div>

        {/* Стеклянные карточки статистики */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-colors hover:bg-white/10">
              <div className="mb-4 flex items-center justify-between">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.chip}`}>
                  <s.icon className="h-5 w-5" />
                </span>
                <div className="text-right">
                  <div className="text-4xl font-extrabold text-white"><Counter to={s.to} suffix={s.suffix} /></div>
                  <div className="text-xs font-medium uppercase tracking-wider text-slate-400">{s.unit}</div>
                </div>
              </div>
              <div className="font-medium text-slate-200">{s.label}</div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className={`h-full ${s.bar} rounded-full bg-gradient-to-r ${s.accent}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Индикатор прокрутки */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
          className="mt-14 flex justify-center text-white/50">
          <ChevronDown size={26} />
        </motion.div>
      </div>
    </section>
  )
}
