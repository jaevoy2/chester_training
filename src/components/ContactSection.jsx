import { business } from '../data.js'
import ContactForm from './ContactForm.jsx'

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
)
const phone = <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
const mail = <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>
const pin = <><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>

// Shared "free assessment" contact block used at the bottom of every page.
export default function ContactSection({ title = 'SET UP A FREE ASSESSMENT TODAY!!', intro, extra, id }) {
  return (
    <section className="section contact-sec" id={id}>
      <div className="container">
        <div className="contact-card">
          <div className="contact-info">
            <div className="eyebrow">FREE ASSESSMENT</div>
            <h2>{title}</h2>
            <p className="ci-intro">
              {intro || 'The initial assessment is free and does not require a future commitment. We will meet with you to discuss your goals, questions, and health history.'}
            </p>
            {extra}
            <ul className="ci-list">
              <li><Icon d={phone} /><a href={`tel:${business.phone.replace(/\D/g, '')}`}>{business.phone}</a></li>
              <li><Icon d={mail} /><a href={`mailto:${business.email}`}>{business.email}</a></li>
              <li><Icon d={pin} /><a href={`https://www.google.com/maps/search/${encodeURIComponent(business.address)}`} target="_blank" rel="noreferrer">{business.address}</a></li>
            </ul>
            <ul className="ci-checks">
              <li>Discuss your goals and health history</li>
              <li>Optional body composition &amp; dietary analysis</li>
              <li>No future commitment required</li>
            </ul>
          </div>
          <div className="contact-form-wrap">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
