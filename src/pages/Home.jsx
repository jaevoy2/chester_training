import { Link } from 'react-router-dom'
import { business, programs, serviceAreas, testimonials, gallery, img } from '../data.js'
import ContactSection from '../components/ContactSection.jsx'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg"><span>CHESTER</span><span>COUNTY</span></div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="eyebrow">PERSONAL TRAINER · SINCE {business.established}</div>
            <h1>IN-HOME, STUDIO,<br />AND VIRTUAL</h1>
            <p>
              One-on-one, partner, group, Zoom or FaceTime sessions for your exercise, strength, sports and nutrition goals —
              at our private studios, your worksite, or your home.
            </p>
            <div className="hero-btns">
              <Link to="/contact" className="btn">BOOK A FREE ASSESSMENT →</Link>
              <Link to="/senior-specific" className="link">VIEW PROGRAMS</Link>
            </div>
          </div>
          <img className="hero-person" src={business.hero} alt="Personal trainer" />
          <div className="glass-cards">
            <div className="glass g1">
              <b>{new Date().getFullYear() - business.established}+</b>
              <span>Years of experience — training youth, athletes, adults and seniors since {business.established}.</span>
            </div>
            <div className="glass g2">
              <b>11</b>
              <span>Certified coaches — in-home, in-studio and virtual sessions near you.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="sec-head">
            <div>
              <div className="eyebrow">WHAT WE OFFER</div>
              <h2>PROGRAMS<br />BUILT TO WIN</h2>
            </div>
            <p className="muted">We have worked with youth, athletes, adults and seniors — and can build an effective program at any age or fitness level.</p>
          </div>
          <div className="programs">
            {programs.map((p) => (
              <Link key={p.to} to={p.to} className="program">
                <img src={img(p.photo)} alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
                <div className="program-body">
                  <small>{p.n}</small>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <span className="more">LEARN MORE →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div>
              <div className="eyebrow">RESULTS</div>
              <h2>REAL CLIENTS.<br />REAL PROGRESS.</h2>
            </div>
            <Link to="/testimonials" className="btn btn-outline">ALL TESTIMONIALS →</Link>
          </div>
          <div className="cards three">
            {[testimonials[3], testimonials[2], testimonials[0]].map((t) => (
              <blockquote key={t.name} className="quote">
                <p>"{t.text}"</p>
                <cite>{t.name}{t.age ? `, ${t.age}` : ''}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="sec-head">
            <div>
              <div className="eyebrow">INSIDE THE STUDIO</div>
              <h2>TRAIN WHERE<br />YOU FEEL BEST</h2>
            </div>
          </div>
          <div className="gallery gallery-3">
            {gallery.map((g) => <img key={g} src={img(g)} alt="Chester County Training" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />)}
          </div>
        </div>
      </section>

      <ContactSection
        title="WE COME TO YOU"
        intro="In-home, in-studio and virtual training. Chester County Personal Training serves:"
        extra={<div className="chips">{serviceAreas.map((a) => <span key={a}>{a}</span>)}</div>}
      />
    </>
  )
}
