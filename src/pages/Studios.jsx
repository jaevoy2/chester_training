import { Link } from 'react-router-dom'
import { img, serviceAreas } from '../data.js'
import { studioPhotos, milestones } from '../content.js'

const studios = [
  { n: '01', addr: '130 Chestnut Lane', city: 'Pottstown, PA 19465', photo: studioPhotos[0] },
  { n: '02', addr: '2317 Pottstown Pike', city: 'Pottstown, PA 19465', photo: studioPhotos[4], note: 'Home of our 5:30 a.m. Semi-Private Strength Training sessions.' },
]

export default function Studios() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow">STUDIO LOCATIONS</div>
          <h1>TWO PRIVATE<br />STUDIOS</h1>
          <p className="lead">Chester County Training has two locations, both in South Coventry. Each location offers a private setting to work with clients individually.</p>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="programs two">
            {studios.map((s) => (
              <a key={s.n} className="program studio" target="_blank" rel="noreferrer"
                href={`https://www.google.com/maps/search/${encodeURIComponent(s.addr + ' ' + s.city)}`}>
                <img src={img(s.photo)} alt={s.addr} loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
                <div className="program-body">
                  <small>{s.n}</small>
                  <h3>{s.addr}</h3>
                  <p>{s.city}{s.note ? ` — ${s.note}` : ''}</p>
                  <span className="more">GET DIRECTIONS →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head"><div><div className="eyebrow">INSIDE THE STUDIOS</div><h2>PRIVATE, FOCUSED,<br />FULLY EQUIPPED</h2></div></div>
          <div className="gallery gallery-3 grp">
            {studioPhotos.map((g) => <img key={g} src={img(g)} alt="Chester County Training studio" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />)}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container two-col">
          <div>
            <div className="eyebrow">OUR STORY</div>
            <h2>GROWING SINCE<br />2005</h2>
            <ol className="timeline">
              {milestones.map((m) => <li key={m.y}><b>{m.y}</b><span>{m.t}</span></li>)}
            </ol>
          </div>
          <div>
            <div className="eyebrow">SERVICE AREAS</div>
            <div className="chips">{serviceAreas.map((a) => <span key={a}>{a}</span>)}</div>
            <p className="muted">Can’t make it to a studio? We also train at your worksite, in your home, or virtually.</p>
            <Link to="/contact" className="btn">BOOK A FREE ASSESSMENT →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
