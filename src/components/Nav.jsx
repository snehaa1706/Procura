import { useEffect, useState } from 'react'
import { ArrowRightIcon } from './Icons.jsx'

export default function Nav({ route }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled ? 'border-line bg-surface/90 backdrop-blur' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#/"
          className="flex items-center gap-2 text-base font-bold tracking-tight text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-sm font-bold text-brand">
            P
          </span>
          Procura
        </a>

        {route === 'demo' ? (
          <a href="#/" className="btn-secondary !px-4 !py-2 text-sm">
            ← Back to overview
          </a>
        ) : (
          <a href="#/demo" className="btn-primary !px-4 !py-2 text-sm">
            View live demo
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        )}
      </div>
    </header>
  )
}
