import { Link } from 'react-router-dom'
import { business, nav } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">CHESTER COUNTY <span>TRAINING</span></div>
          <p className="muted">Personal training in-home, in-studio and virtual. Established {business.established}.</p>
        </div>
        <div>
          <h4>Explore</h4>
          {nav.slice(0, 5).map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
        </div>
        <div>
          <h4>Programs</h4>
          {nav.slice(5).map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
        </div>
        <div>
          <h4>Contact</h4>
          <a href={`mailto:${business.email}`}>{business.email}</a>
          <a href={`tel:${business.phone.replace(/\D/g, '')}`}>{business.phone}</a>
          <span className="muted">{business.address}</span>
          <a href={business.facebook} target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>
      <div className="container copy">
        © {new Date().getFullYear()} Chester County Training · Established {business.established}
        <span className="privacy-note">We log basic visit details (IP address, approximate location, device and browser) to understand site traffic.</span>
      </div>
    </footer>
  )
}
