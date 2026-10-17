import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

// Testimonial card: text is clamped (with an ellipsis) so cards stay the same
// height; long stories open in a modal with the full text.
export default function Story({ name, age, sub, text, result, full }) {
  const [open, setOpen] = useState(false)
  const long = !full && text.length > 230
  const who = `${name}${age ? `, ${age}` : ''}`
  const paragraphs = text.split('\n\n')

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <blockquote className="quote story">
        <div className="story-top">
          {result ? <span className="story-result">{result}</span> : <span className="story-mark">“</span>}
        </div>
        <p className={'story-text' + (long ? ' clamp' : '')}>{paragraphs.join(' ')}</p>
        {long && (
          <button type="button" className="story-toggle" onClick={() => setOpen(true)}>READ FULL STORY +</button>
        )}
        <cite>{who}{sub ? ` · ${sub}` : ''}</cite>
      </blockquote>

      {open && createPortal(
        <div className="modal" onClick={() => setOpen(false)} role="dialog" aria-modal="true" aria-label={`${who}'s story`}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-x" aria-label="Close" onClick={() => setOpen(false)}>×</button>
            {result && <span className="story-result">{result}</span>}
            <div className="modal-text">{paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div>
            <cite>{who}{sub ? ` · ${sub}` : ''}</cite>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
