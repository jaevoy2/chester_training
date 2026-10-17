import { stories } from '../content.js'
import { img } from '../data.js'
import ContactSection from '../components/ContactSection.jsx'
import Story from '../components/Story.jsx'

const PH = '/uploads/3/5/3/7/35373541/'
const results = stories.filter((s) => s.result && s.photos)

export default function Testimonials() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow">TESTIMONIALS</div>
          <h1>PERSONAL TRAINER<br />TESTIMONIALS</h1>
          <p className="lead">Real clients. Real progress. Hear how training in-studio, at home and virtually changed their lives.</p>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="sec-head"><div><div className="eyebrow">BEFORE &amp; AFTER</div><h2>THE PROOF</h2></div></div>
          <div className="ba-grid grp">
            {results.map((r) => (
              <figure className="ba" key={r.name}>
                <div className={'ba-imgs n' + r.photos.length}>
                  {r.photos.map((f, i) => (
                    <div key={f} className="ba-img">
                      <img src={img(PH + f)} alt={r.name} loading="lazy" onError={(e) => (e.currentTarget.parentElement.style.display = 'none')} />
                      {r.photos.length > 1 && <span>{i === 0 ? 'BEFORE' : 'AFTER'}</span>}
                    </div>
                  ))}
                </div>
                <figcaption><b>{r.name}{r.age ? `, ${r.age}` : ''}</b><em>{r.result}</em></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head"><div><div className="eyebrow">IN THEIR WORDS</div><h2>CLIENT<br />STORIES</h2></div></div>
          <div className={'cards three stories grp' + (stories.length % 3 === 2 ? ' last2' : stories.length % 3 === 1 ? ' last1' : '')}>
            {stories.map((s) => <Story key={s.name} {...s} />)}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
