import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navGroups } from '../data.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const close = () => setOpen(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={'header' + (scrolled ? ' scrolled' : '') + (open ? ' menu-open' : '')}>
      <div className="header-inner">
        <Link to="/" className="logo" onClick={close}>
          CHESTER COUNTY <span>TRAINING</span>
        </Link>
        <nav className={'nav' + (open ? ' open' : '')}>
          {navGroups.map((g) =>
            g.items ? (
              <div key={g.label} className={'dropdown' + (g.items.some((i) => i.to === pathname) ? ' current' : '')}>
                <button type="button" className="dd-toggle">{g.label} <i>▾</i></button>
                <div className="dd-menu">
                  {g.items.map((i) => (
                    <NavLink key={i.to} to={i.to} onClick={close}>{i.label}</NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={g.to} to={g.to} end className="top-link" onClick={close}>{g.label}</NavLink>
            )
          )}
          <Link to="/contact" className="btn btn-sm nav-cta" onClick={close}>BOOK NOW</Link>
        </nav>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          <i /><i /><i />
        </button>
      </div>
    </header>
  )
}
