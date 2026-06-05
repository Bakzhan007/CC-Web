import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

// Ловит ошибки рендера и сбои загрузки ленивых чанков,
// чтобы вместо белого экрана показать кнопку перезагрузки.
class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: unknown) {
    // Сбой динамического импорта (устаревший/недогруженный чанк) — перезагружаем страницу
    const message = error instanceof Error ? error.message : String(error)
    if (/Loading chunk|dynamically imported module|Failed to fetch/i.test(message)) {
      window.location.reload()
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center">
          <p className="text-slate-600">Не удалось загрузить страницу.</p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-lg bg-brand-600 px-5 py-2 text-white hover:bg-brand-700 transition-colors"
          >
            Обновить
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
