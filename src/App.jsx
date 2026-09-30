import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/landing/Footer.jsx'
import LandingPage from './components/landing/LandingPage.jsx'
import DemoPage from './components/demo/DemoPage.jsx'

function getRouteFromHash() {
  return window.location.hash.replace(/^#/, '') === '/demo' ? 'demo' : 'home'
}

export default function App() {
  const [route, setRoute] = useState(getRouteFromHash())

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [route])

  return (
    <div className="flex min-h-screen flex-col bg-surface-plane">
      <Nav route={route} />
      <main className="flex-1">
        {route === 'demo' ? <DemoPage /> : <LandingPage />}
      </main>
      {route === 'home' && <Footer />}
    </div>
  )
}
