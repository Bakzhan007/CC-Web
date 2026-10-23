import { useState } from 'react'
import { Play } from 'lucide-react'

interface Props {
  videoId: string
  title: string
  className?: string
}

// Вместо iframe сразу показываем превью: плеер YouTube (~0.5–1 МБ JS) грузится только по клику
export default function YouTubeFacade({ videoId, title, className = '' }: Props) {
  const [active, setActive] = useState(false)

  if (active) {
    return (
      <iframe
        className={className}
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={title}
      className={`group relative block overflow-hidden bg-black ${className}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        width={480}
        height={360}
        className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
          <Play className="ml-1 h-8 w-8 sm:h-9 sm:w-9" fill="currentColor" />
        </span>
      </span>
    </button>
  )
}
