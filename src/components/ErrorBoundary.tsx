import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  // Смена ключа (например, pathname) сбрасывает ошибку — другие страницы снова доступны
  resetKey?: string
}

interface State {
  hasError: boolean
}

const RELOAD_FLAG = 'cc-chunk-reload'

const TEXT: Record<string, { message: string; reload: string }> = {
  kk: { message: 'Бетті жүктеу мүмкін болмады.', reload: 'Жаңарту' },
  ru: { message: 'Не удалось загрузить страницу.', reload: 'Обновить' },
  en: { message: 'Failed to load the page.', reload: 'Reload' },
}

// Ловит ошибки рендера и сбои загрузки ленивых чанков,
// чтобы вместо белого экрана показать кнопку перезагрузки.
class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidUpdate(prevProps: Props) {
    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ hasError: false })
    }
  }

  componentDidCatch(error: unknown) {
    // Устаревший чанк после деплоя — одна автоматическая перезагрузка.
    // Флаг в sessionStorage не даёт уйти в бесконечный цикл, если чанк недоступен совсем.
    const message = error instanceof Error ? error.message : String(error)
    if (!/Loading chunk|dynamically imported module|Failed to fetch/i.test(message)) return
    try {
      if (sessionStorage.getItem(RELOAD_FLAG)) return
      sessionStorage.setItem(RELOAD_FLAG, '1')
    } catch {
      return
    }
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      const text = TEXT[document.documentElement.lang] || TEXT.ru
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center">
          <p className="text-slate-600">{text.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-lg bg-brand-600 px-5 py-2 text-white hover:bg-brand-700 transition-colors"
          >
            {text.reload}
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
