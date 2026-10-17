// Serverless endpoint (Vercel-style: /api/notify). Emails the site owner basic
// visit details when someone opens the site.
//
// Required env vars (set in the hosting dashboard, never in client code):
//   RESEND_API_KEY  – API key from https://resend.com
//   NOTIFY_FROM     – verified sender, e.g. "Site Alerts <alerts@yourdomain.com>"
// Optional:
//   NOTIFY_TO       – recipient (defaults to francis@creativedevlabs.com)

const DEFAULT_TO = 'francis@creativedevlabs.com'
const BOT_RE = /bot|crawl|spider|slurp|headless|lighthouse|pingdom|uptime|monitor|facebookexternalhit|preview|curl|wget|python-requests/i

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const clip = (v, n = 120) => String(v ?? '').slice(0, n)

function parseUA(ua = '') {
  let browser = 'Unknown'
  const m = (re) => (ua.match(re) || [])[1]
  if (/Edg\//.test(ua)) browser = 'Edge ' + (m(/Edg\/([\d.]+)/) || '')
  else if (/OPR\/|Opera/.test(ua)) browser = 'Opera ' + (m(/OPR\/([\d.]+)/) || '')
  else if (/Firefox\//.test(ua)) browser = 'Firefox ' + (m(/Firefox\/([\d.]+)/) || '')
  else if (/Chrome\//.test(ua)) browser = 'Chrome ' + (m(/Chrome\/([\d.]+)/) || '')
  else if (/Safari\//.test(ua)) browser = 'Safari ' + (m(/Version\/([\d.]+)/) || '')

  let os = 'Unknown OS'
  if (/Windows NT 10/.test(ua)) os = 'Windows 10/11'
  else if (/Windows/.test(ua)) os = 'Windows'
  else if (/Android ([\d.]+)/.test(ua)) os = 'Android ' + m(/Android ([\d.]+)/)
  else if (/iPhone|iPad|iPod/.test(ua)) os = 'iOS ' + (m(/OS ([\d_]+)/) || '').replace(/_/g, '.')
  else if (/Mac OS X/.test(ua)) os = 'macOS'
  else if (/CrOS/.test(ua)) os = 'ChromeOS'
  else if (/Linux/.test(ua)) os = 'Linux'

  const type = /iPad|Tablet/.test(ua) || (/Android/.test(ua) && !/Mobile/.test(ua)) ? 'Tablet' : /Mobi|iPhone|Android/.test(ua) ? 'Mobile' : 'Desktop'
  return { browser: browser.trim(), device: `${type} · ${os}` }
}

async function lookupLocation(ip, h) {
  // Prefer geo headers supplied by the host (Vercel / Cloudflare), they cost nothing.
  const city = h['x-vercel-ip-city'] ? decodeURIComponent(h['x-vercel-ip-city']) : h['cf-ipcity']
  const region = h['x-vercel-ip-country-region'] || h['cf-region']
  const country = h['x-vercel-ip-country'] || h['cf-ipcountry']
  if (city || region || country) return [city, region, country].filter(Boolean).join(', ')
  try {
    const r = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}?fields=success,city,region,country`, { signal: AbortSignal.timeout(3000) })
    const j = await r.json()
    if (j.success) return [j.city, j.region, j.country].filter(Boolean).join(', ')
  } catch { /* fall through */ }
  return 'Unknown'
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false })

  const h = req.headers
  const ua = h['user-agent'] || ''
  if (BOT_RE.test(ua)) return res.status(204).end() // don't email for crawlers/monitors

  const key = process.env.RESEND_API_KEY
  const from = process.env.NOTIFY_FROM
  if (!key || !from) return res.status(500).json({ ok: false, error: 'Email not configured' })

  let body = req.body
  if (typeof body === 'string') { try { body = JSON.parse(body) } catch { body = {} } }
  body = body && typeof body === 'object' ? body : {}

  const ip = clip((h['x-forwarded-for'] || '').split(',')[0].trim() || req.socket?.remoteAddress || 'Unknown', 64)
  const [{ browser, device }, location] = await Promise.all([Promise.resolve(parseUA(ua)), lookupLocation(ip, h)])
  const when = new Date()
  const tz = clip(body.tz, 60)
  const local = tz ? (() => { try { return when.toLocaleString('en-US', { timeZone: tz, dateStyle: 'medium', timeStyle: 'medium' }) + ` (${tz})` } catch { return '' } })() : ''

  const rows = [
    ['IP Address', ip],
    ['Location', location],
    ['Device', device + (body.screen ? ` · ${clip(body.screen, 20)}` : '')],
    ['Browser', browser],
    ['Date/Time', `${when.toUTCString()}${local ? ` — visitor local: ${local}` : ''}`],
    ['Page', clip(body.page, 200) || '/'],
  ]
  const html = `<div style="font-family:Arial,sans-serif"><h2>New visitor on Chester County Training</h2><table cellpadding="8" style="border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="border:1px solid #ddd"><b>${esc(k)}</b></td><td style="border:1px solid #ddd">${esc(v)}</td></tr>`)
    .join('')}</table></div>`
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n')

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [process.env.NOTIFY_TO || DEFAULT_TO], subject: `New site visit — ${location}`, html, text }),
    })
    if (!r.ok) return res.status(502).json({ ok: false })
    return res.status(200).json({ ok: true })
  } catch {
    return res.status(502).json({ ok: false })
  }
}
