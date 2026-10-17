import { useParams, Link } from 'react-router-dom'
import { pages, img } from '../data.js'
import { blocks, teamBy } from '../content.js'
import ContactSection from '../components/ContactSection.jsx'
import Profile from '../components/Profile.jsx'
import Story from '../components/Story.jsx'

const Head = ({ eyebrow, title }) => (
  <div className="sec-head">
    <div>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      {title && <h2>{title[0]}<br />{title[1]}</h2>}
    </div>
  </div>
)
const pad = (i) => String(i + 1).padStart(2, '0')

function Block({ b, p }) {
  switch (b.type) {
    case 'tiles':
      return (<>
        <Head eyebrow={b.eyebrow} title={b.title} />
        <div className={'tiles grp' + (b.rich ? ' rich' : '') + (b.cols ? ' cols-n' : '')} style={b.cols ? { '--cols': b.cols } : undefined}>
          {b.items.map((it, i) => {
            const [t, d] = Array.isArray(it) ? it : [it]
            return (
              <div className="tile" key={t}>
                <small>{pad(i)}</small>
                <h3>{t}</h3>
                {d && <p>{d}</p>}
              </div>
            )
          })}
        </div>
      </>)
    case 'golfintro':
      return (
        <div className="golf-intro">
          <div>
            <Head eyebrow={b.eyebrow} title={b.title} />
            <p className="lead">{b.text}</p>
            <div className="points grp">
              {b.points.map(([n, t, d]) => (
                <div className="glass-lite" key={n}><small>{n}</small><b>{t}</b><span>{d}</span></div>
              ))}
            </div>
          </div>
          <div className="golf-visual">
            <div className="golf-photos">
              {b.photos.map((f, i) => (
                <img key={f} className={'gp gp' + (i + 1)} src={img('/uploads/3/5/3/7/35373541/' + f)} alt="Golf specific training" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
              ))}
            </div>
            <div className="cert-row">
              {b.certs.map(([f, n]) => (
                <div className="cert" key={f}>
                  <img src={img('/uploads/3/5/3/7/35373541/' + f)} alt={n} loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
                  <span>{n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    case 'semihero':
      return (
        <div className="semi-hero">
          <div className="semi-photo">
            <img src={img('/uploads/3/5/3/7/35373541/' + b.photo)} alt="Semi-private strength training studio" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
            <div className="semi-chips">
              {b.chips.map(([big, small]) => <div className="glass-lite" key={big}><b>{big}</b><span>{small}</span></div>)}
            </div>
          </div>
          <div>
            <Head eyebrow={b.eyebrow} title={b.title} />
            <div className="fact-list">
              {b.facts.map(([k, v]) => (
                <div className="fact" key={k}>
                  <small>{k}</small>
                  <b>{k === 'Location'
                    ? <a href={`https://www.google.com/maps/search/${encodeURIComponent(v)}`} target="_blank" rel="noreferrer">{v} ↗</a>
                    : v}</b>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn">RESERVE YOUR SPOT →</Link>
          </div>
        </div>
      )
    case 'week':
      return (<>
        <Head eyebrow={b.eyebrow} title={b.title} />
        <div className="week grp">
          {b.items.map(([day, text, kind], i) => {
            const parts = text.split(' / ')
            const cardio = parts.filter((x) => x.startsWith('Cardio'))
            const muscles = parts.filter((x) => !x.startsWith('Cardio'))
            return (
              <div className={'day ' + kind} key={day}>
                <small>DAY {i + 1}</small>
                <h3>{day}</h3>
                <div className="tags">{muscles.map((m) => <span key={m}>{m}</span>)}</div>
                {cardio.length > 0 && <p className="cardio">{cardio[0]}</p>}
              </div>
            )
          })}
        </div>
        {b.note && <p className="muted week-note">{b.note}</p>}
      </>)
    case 'ratesplit':
      return (
        <div className="rates-split">
          <figure className="rates-photo">
            <img src={img('/uploads/3/5/3/7/35373541/' + b.photo)} alt="Semi-private training studio" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
          </figure>
          <div>
            <Head eyebrow={b.eyebrow} title={b.title} />
            <div className="rate-grid two grp">
              {b.items.map(([k, v, u]) => (
                <div className="rate-card" key={k}><small>{k}</small><b>{v}</b><span>per {u}</span></div>
              ))}
            </div>
            <ul className="ticks fine">{b.notes.map((n) => <li key={n}>{n}</li>)}</ul>
            <p className="muted">Please contact us with your info and what days and times you are interested in. (Limited space)</p>
          </div>
        </div>
      )
    case 'corphero':
      return (
        <div className="corp-hero">
          <div className="corp-photo">
            <img src={img('/uploads/3/5/3/7/35373541/' + b.photo)} alt="Corporate group fitness" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
            <div className="glass-lite corp-badge"><b>{b.badge[0]}</b><span>{b.badge[1]}</span></div>
          </div>
          <div>
            <Head eyebrow={b.eyebrow} title={b.title} />
            <div className="services grp">
              {b.services.map(([t, d], i) => (
                <div className="service" key={t}><small>{pad(i)}</small><h3>{t}</h3><p>{d}</p></div>
              ))}
            </div>
            <Link to="/contact" className="btn">SCHEDULE A CALL →</Link>
          </div>
        </div>
      )
    case 'impact':
      return (<>
        <Head eyebrow={b.eyebrow} title={b.title} />
        <div className="impact grp">
          {b.groups.map(([t, list]) => (
            <div className="impact-card" key={t}>
              <h3><span>{list.length}</span>{t}</h3>
              <ul>{list.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </>)
    case 'statbanner':
      return (
        <div className="stat-banner">
          <img src={img('/uploads/3/5/3/7/35373541/' + b.photo)} alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
          <div className="glass-lite stat-card">
            <b>{b.big}</b>
            <em>{b.unit}</em>
            <p>“{b.text}”</p>
          </div>
        </div>
      )
    case 'lvhero':
      return (
        <div className="lv-hero">
          <div className="lv-photo">
            <img src={img('/uploads/3/5/3/7/35373541/' + b.photo)} alt="In-home training in the Lehigh Valley" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
            <div className="lv-places">
              {b.places.map((t, i) => <div className="glass-lite" key={t}><small>{pad(i)}</small><b>{t}</b></div>)}
            </div>
          </div>
          <div>
            <Head eyebrow={b.eyebrow} title={b.title} />
            <p className="lead">{b.text}</p>
            <div className="lv-note"><b>Equipment provided</b><span>For in-home training, all exercise equipment can be provided.</span></div>
            <Link to="/contact" className="btn">BOOK A FREE ASSESSMENT →</Link>
          </div>
        </div>
      )
    case 'areatiles':
      return (<>
        <h2 className="area-title">{b.title[0]}<br />{b.title[1]}</h2>
        <div className="area-tiles grp">
          {b.items.map((a, i) => <div className="area" key={a}><small>{pad(i)}</small><b>{a}</b><i>→</i></div>)}
        </div>
      </>)
    case 'split':
      return (
        <div className="split">
          <figure className="split-photo">
            <img src={img('/uploads/3/5/3/7/35373541/' + b.photo)} alt={b.photoNote} loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
            <figcaption>{b.photoNote}</figcaption>
          </figure>
          <div className="split-body">
            <Head eyebrow={b.eyebrow} title={b.title} />
            <ul className="benefits grp">
              {b.items.map((t, i) => <li key={t}><small>{pad(i)}</small>{t}</li>)}
            </ul>
          </div>
        </div>
      )
    case 'captioned':
      return (<>
        <Head eyebrow={b.eyebrow} title={b.title} />
        <div className="captioned grp">
          {b.items.map(([f, label, text]) => (
            <figure className="cap" key={f}>
              <div className="cap-img">
                <img src={img('/uploads/3/5/3/7/35373541/' + f)} alt={label} loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
                <span>{label}</span>
              </div>
              <figcaption>{text}</figcaption>
            </figure>
          ))}
        </div>
      </>)
    case 'stats':
      return (
        <div className="stat-row grp">
          {b.items.map(([big, small]) => (
            <div className="glass-lite" key={big}><b>{big}</b><span>{small}</span></div>
          ))}
        </div>
      )
    case 'twolists':
      return (<>
        <Head eyebrow={b.eyebrow} title={b.title} />
        <div className="two-col lists">
          {[b.a, b.b].map(([t, list]) => (
            <div key={t}>
              <h3 className="h-sm">{t}</h3>
              <ul className="ticks">{list.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </>)
    case 'bigquote':
      return <blockquote className="bigquote">“{b.text}”</blockquote>
    case 'quotes':
      return (<>
        <Head eyebrow={b.eyebrow} title={b.title} />
        <div className={'cards three grp' + (b.cols ? ' cols-n' : '')} style={b.cols ? { '--cols': b.cols } : undefined}>{b.items.map((q) => <Story key={q.name} {...q} />)}</div>
      </>)
    case 'profiles':
      return (<>
        <Head eyebrow={b.eyebrow} title={b.title} />
        <div className={'profiles' + (b.compact ? ' compact' : '')}>
          {b.items.map((n, i) => <Profile key={n} m={teamBy(n)} note={b.notes && b.notes[n]} flip={i % 2 === 1} compact={b.compact} />)}
        </div>
      </>)
    case 'steps':
      return (<>
        <Head eyebrow={b.eyebrow} title={b.title} />
        <div className={'steps grp' + (b.line ? ' line' : '')}>
          {b.items.map(([t, d], i) => (
            <div className="step" key={t}><b>{i + 1}</b><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </>)
    case 'schedule':
      return (<>
        <Head eyebrow={b.eyebrow} title={b.title} />
        <div className="schedule grp">
          {b.items.map(([d, t]) => <div key={d}><b>{d}</b><span>{t}</span></div>)}
        </div>
      </>)
    case 'rates':
      return (<>
        <Head eyebrow={b.eyebrow} title={b.title} />
        <div className="rate-grid grp">
          {b.items.map(([k, v, u]) => (
            <div className="rate-card" key={k}><small>{k}</small><b>{v}</b><span>per {u}</span></div>
          ))}
        </div>
        <ul className="ticks fine">{b.notes.map((n) => <li key={n}>{n}</li>)}</ul>
        <p className="muted">Please contact us with your info and what days and times you are interested in. (Limited space)</p>
      </>)
    case 'partners':
      return (<>
        <Head eyebrow={b.eyebrow} title={b.title} />
        <div className="partners grp">
          {b.items.map(([n, f]) => (
            <div className="partner" key={n}>
              <img src={img('/uploads/3/5/3/7/35373541/' + f)} alt={n} loading="lazy"
                onError={(e) => { e.currentTarget.replaceWith(Object.assign(document.createElement('b'), { textContent: n })) }} />
            </div>
          ))}
        </div>
        {b.quote && (
          <div className="partner-quote">
            {b.quotePhoto && <img src={img('/uploads/3/5/3/7/35373541/' + b.quotePhoto)} alt="USSC group training" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />}
            <Story {...b.quote} />
          </div>
        )}
      </>)
    case 'facts':
      return (
        <div className="fact-row grp">
          {b.items.map(([k, v]) => <div className="fact" key={k}><small>{k}</small><b>{v}</b></div>)}
        </div>
      )
    case 'certs':
      return (
        <div className="certs grp">
          {b.items.map((f) => (
            <img key={f} src={img('/uploads/3/5/3/7/35373541/' + f)} alt="Certification" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
          ))}
        </div>
      )
    case 'areas':
      return (<>
        <h2 className="h-sm">{b.title}</h2>
        <div className="chips big">{b.items.map((a) => <span key={a}>{a}</span>)}</div>
      </>)
    case 'cta':
      return (
        <div className={'cta-band' + (b.golf ? ' golf' : '')}>
          <h2>{b.text}</h2>
          <Link to="/contact" className="btn">{b.label} →</Link>
        </div>
      )
    case 'video':
      return p.video ? (
        <div className="video">
          <iframe src={p.video} title="Chester County Training video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      ) : null
    case 'media':
      return p.media.length ? (
        <div className={'gallery grp cols-n' + (p.media.length === 1 ? ' solo' : p.media.length % 2 === 0 ? ' even' : '')} style={{ '--cols': Math.min(p.media.length, 3) }}>
          {p.media.map((m) => <img key={m} src={img(m)} alt={p.kicker} loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />)}
        </div>
      ) : null
    default:
      return null
  }
}

export default function ServicePage() {
  const { slug } = useParams()
  const p = pages[slug]
  if (!p) {
    return (
      <section className="page-head"><div className="container">
        <h1>PAGE NOT FOUND</h1><Link className="btn" to="/">BACK HOME</Link>
      </div></section>
    )
  }
  const list = blocks[slug] || []
  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow">{p.kicker.toUpperCase()}</div>
          <h1>{p.title[0]}<br />{p.title[1]}</h1>
          <p className="lead">{p.intro}</p>
        </div>
      </section>

      {list.map((b, i) => (
        <section key={i} className={'section' + (i % 2 === 0 ? ' dark' : '')}>
          <div className="container"><Block b={b} p={p} /></div>
        </section>
      ))}

      <ContactSection title={p.cta ? p.cta.toUpperCase() : undefined} />
    </>
  )
}
