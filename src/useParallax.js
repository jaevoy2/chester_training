import { useEffect } from 'react'

// Scroll layers: [selector, speed, mode]
//  'hero'  -> offset = scrollY * speed          (layer drifts relative to the page)
//  'local' -> offset = (elementCenter - viewportCenter) * speed, clamped
// Mouse layers (hero only): [selector, strength in px]
const SCROLL = [
  ['.hero-bg', 0.28, 'hero'],
  ['.hero-person', 0.1, 'hero'],
  ['.hero-content', -0.12, 'hero'],
  ['.glass-cards', -0.2, 'hero'],
  ['.page-head .container', 0.12, 'hero'],
  ['.program img', -0.07, 'local', 28],
  ['.sec-head', 0.05, 'local', 24],
  ['.video', 0.04, 'local', 20],
]
const MOUSE = [
  ['.hero-bg', -14],
  ['.hero-person', 10],
  ['.glass-cards', 22],
]

export default function useParallax(dep) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let layers = [], mouseLayers = [], raf = 0, mx = 0, my = 0, tx = 0, ty = 0, mraf = 0
    const fine = window.matchMedia('(pointer: fine)').matches

    const setup = setTimeout(() => {
      layers = SCROLL.flatMap(([sel, speed, mode, max]) =>
        [...document.querySelectorAll(sel)].map((el) => ({ el, speed, mode, max, mx: 0 })))
      mouseLayers = MOUSE.flatMap(([sel, k]) =>
        [...document.querySelectorAll(sel)].map((el) => ({ el, k })))
      layers.forEach((l) => (l.mx = 0))
      update()
    }, 50)

    const apply = (l, y) => {
      const m = mouseLayers.find((o) => o.el === l.el)
      const x = m ? mx * m.k : 0
      const yy = y + (m ? my * m.k : 0)
      l.el.style.translate = `${x.toFixed(1)}px ${yy.toFixed(1)}px`
    }

    const update = () => {
      raf = 0
      const vh = window.innerHeight, sy = window.scrollY
      layers.forEach((l) => {
        let y
        if (l.mode === 'hero') {
          // keep the stacked mobile hero in place so the layers stay aligned
          if (window.innerWidth <= 860 && l.el.closest('.hero')) { l.el.style.translate = ''; return }
          y = Math.min(sy, vh * 1.2) * l.speed
        } else {
          const r = l.el.getBoundingClientRect()
          if (r.bottom < -100 || r.top > vh + 100) return
          y = (r.top + r.height / 2 - vh / 2) * l.speed
          y = Math.max(-l.max, Math.min(l.max, y))
        }
        apply(l, y)
      })
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }

    // eased mouse follow
    const tick = () => {
      mx += (tx - mx) * 0.07; my += (ty - my) * 0.07
      if (Math.abs(tx - mx) > 0.001 || Math.abs(ty - my) > 0.001) {
        if (!raf) raf = requestAnimationFrame(update)
        mraf = requestAnimationFrame(tick)
      } else mraf = 0
    }
    const onMove = (e) => {
      if (window.scrollY > window.innerHeight) return
      tx = e.clientX / window.innerWidth - 0.5
      ty = e.clientY / window.innerHeight - 0.5
      if (!mraf) mraf = requestAnimationFrame(tick)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    if (fine) window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      clearTimeout(setup)
      cancelAnimationFrame(raf); cancelAnimationFrame(mraf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('mousemove', onMove)
    }
  }, [dep])
}
