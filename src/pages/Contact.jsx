import { img } from '../data.js'
import { assessmentSteps, milestones } from '../content.js'
import ContactSection from '../components/ContactSection.jsx'

export default function Contact() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow">CONTACT</div>
          <h1>LET US GET<br />STARTED</h1>
          <p className="lead">The initial assessment is free and does not require a future commitment. We will meet with you to discuss your goals, questions, and health history. If desired, body composition and dietary analysis will be completed.</p>
        </div>
      </section>

      <ContactSection title="SET UP A FREE ASSESSMENT TODAY!!" intro="Fill in the form, call or email us — we would love to hear about your goals." />

      <section className="section">
        <div className="container">
          <div className="sec-head"><div><div className="eyebrow">YOUR FIRST VISIT</div><h2>WHAT TO EXPECT<br />AT YOUR ASSESSMENT</h2></div></div>
          <div className="steps grp">
            {assessmentSteps.map((s, i) => <div className="step" key={s.t}><b>{i + 1}</b><h3>{s.t}</h3><p>{s.d}</p></div>)}
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
          <img className="side-img" src={img('/uploads/3/5/3/7/35373541/editor/gym-with-mirror.jpg')} alt="Training studio" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
        </div>
      </section>
    </>
  )
}
