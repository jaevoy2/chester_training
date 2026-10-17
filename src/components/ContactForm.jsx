import { useState } from 'react'

const Field = ({ label, children }) => (
  <label className="field">
    {children}
    <span>{label}</span>
  </label>
)

// Form only (floating labels). The surrounding layout lives in ContactSection.
export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const submit = (e) => { e.preventDefault(); setSent(true) }

  if (sent) {
    return (
      <div className="form sent">
        <div className="sent-icon">✓</div>
        <h3>Thank you!</h3>
        <p>We have your details and will be in touch shortly to set up your free assessment.</p>
      </div>
    )
  }
  return (
    <form className="form" onSubmit={submit}>
      <div className="row">
        <Field label="First name *"><input required placeholder=" " autoComplete="given-name" /></Field>
        <Field label="Last name *"><input required placeholder=" " autoComplete="family-name" /></Field>
      </div>
      <Field label="Email *"><input required type="email" placeholder=" " autoComplete="email" /></Field>
      <Field label="Phone *"><input required type="tel" placeholder=" " autoComplete="tel" /></Field>
      <Field label="What are your goals? *"><textarea required rows="4" placeholder=" " /></Field>
      <button className="btn" type="submit">SUBMIT →</button>
      <small className="form-note">* Required. The initial assessment is free and does not require a future commitment.</small>
    </form>
  )
}
