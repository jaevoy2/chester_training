import { teamFull } from '../content.js'
import Profile from '../components/Profile.jsx'
import { Link } from 'react-router-dom'

export default function Team() {
  const [owner, ...rest] = teamFull
  const main = rest.filter((m) => m.role !== 'Lehigh Valley')
  const lv = rest.filter((m) => m.role === 'Lehigh Valley')
  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow">MEET THE TEAM</div>
          <h1>THE COACHES<br />BEHIND THE RESULTS</h1>
          <p className="lead">Certified strength and conditioning specialists, former college and professional-level coaches, and champions — all dedicated to helping you reach your goals.</p>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="sec-head"><div><div className="eyebrow">THE OWNER</div><h2>18 YEARS OF<br />GETTING RESULTS</h2></div></div>
          <div className="profiles"><Profile m={owner} /></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head"><div><div className="eyebrow">THE TRAINERS</div><h2>CHESTER COUNTY<br />COACHES</h2></div></div>
          <div className="profiles">{main.map((m, i) => <Profile key={m.name} m={m} flip={i % 2 === 0} />)}</div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="sec-head"><div><div className="eyebrow">LEHIGH VALLEY</div><h2>IN-HOME TRAINERS<br />IN THE VALLEY</h2></div>
            <Link to="/lehigh-valley-training" className="btn btn-outline">LEHIGH VALLEY TRAINING →</Link></div>
          <div className="profiles">{lv.map((m, i) => <Profile key={m.name} m={m} flip={i % 2 === 1} />)}</div>
        </div>
      </section>
    </>
  )
}
