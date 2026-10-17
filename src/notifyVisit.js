// Tells the backend (/api/notify) that someone opened the site. Runs once per
// browser session, only on the live site, and never for automated browsers.
export default function notifyVisit() {
  try {
    if (!import.meta.env.PROD) return
    const host = location.hostname
    if (host === 'localhost' || host === '127.0.0.1' || host.endsWith('.local')) return
    if (navigator.webdriver) return
    if (sessionStorage.getItem('cct_visit_sent')) return
    sessionStorage.setItem('cct_visit_sent', '1')

    const payload = JSON.stringify({
      page: location.pathname + location.search,
      tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
      screen: `${screen.width}x${screen.height}`,
    })
    const blob = new Blob([payload], { type: 'application/json' })
    if (!(navigator.sendBeacon && navigator.sendBeacon('/api/notify', blob))) {
      fetch('/api/notify', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload, keepalive: true }).catch(() => {})
    }
  } catch { /* never break the site over analytics */ }
}
