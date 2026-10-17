import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import useParallax from './useParallax.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Team from './pages/Team.jsx'
import Contact from './pages/Contact.jsx'
import Studios from './pages/Studios.jsx'
import ServicePage from './pages/ServicePage.jsx'

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  useParallax(pathname)

  // Enter/exit scroll animations: elements get .in-view while visible and
  // .out-up / .out-down (by exit direction) when they leave the viewport.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const sel = [
      'main section:not(.hero) .container > *:not(.cards):not(.gallery):not(.programs):not(.grp):not(.profiles)',
      'main .cards > *', 'main .gallery > *', 'main .programs > *', 'main .grp > *', 'main .profiles > *', '.footer-grid > *',
    ].join(',')
    const t = setTimeout(() => {
      const els = [...document.querySelectorAll(sel)]
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          const el = e.target
          if (e.isIntersecting) {
            el.classList.add('in-view'); el.classList.remove('out-up', 'out-down')
          } else {
            el.classList.remove('in-view')
            el.classList.toggle('out-up', e.boundingClientRect.top < 0)
            el.classList.toggle('out-down', e.boundingClientRect.top >= 0)
          }
        })
      }, { threshold: 0.12 })
      els.forEach((el) => {
        const sibs = [...el.parentElement.children]
        el.style.setProperty('--d', (sibs.indexOf(el) % 6) * 90 + 'ms')
        el.classList.add('reveal')
        io.observe(el)
      })
      cleanup = () => io.disconnect()
    }, 0)
    let cleanup = () => {}
    return () => { clearTimeout(t); cleanup() }
  }, [pathname])
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/meet-the-team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/studio-locations" element={<Studios />} />
          <Route path="/:slug" element={<ServicePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
