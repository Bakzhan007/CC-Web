import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

// Новая страница открывается сверху, а ссылки вида /#contact докручивают до секции.
// На «Назад/Вперёд» (POP) ничего не делаем — позицию восстанавливает браузер.
export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    if (navigationType === 'POP' && !hash) return

    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    // Секция может появиться позже (ленивая страница), а картинки над ней догружаются
    // и сдвигают её вниз — поэтому ищем элемент и несколько раз доводим прокрутку,
    // пока пользователь сам не начал скроллить.
    const id = decodeURIComponent(hash.slice(1))
    const timers: number[] = []
    let attempts = 0
    let userScrolled = false
    const stop = () => { userScrolled = true }
    window.addEventListener('wheel', stop, { passive: true })
    window.addEventListener('touchmove', stop, { passive: true })

    const scrollToTarget = () => {
      if (userScrolled) return
      document.getElementById(id)?.scrollIntoView({ block: 'start' })
    }
    const find = () => {
      if (document.getElementById(id)) {
        scrollToTarget()
        for (const delay of [300, 800, 1500]) timers.push(window.setTimeout(scrollToTarget, delay))
      } else if (attempts++ < 20) {
        timers.push(window.setTimeout(find, 100))
      }
    }
    find()

    return () => {
      timers.forEach((t) => window.clearTimeout(t))
      window.removeEventListener('wheel', stop)
      window.removeEventListener('touchmove', stop)
    }
  }, [pathname, hash, navigationType])

  return null
}
