import { useState } from 'react'
import { img } from '../data.js'

export default function Photo({ src, name, className }) {
  const [bad, setBad] = useState(!src)
  const initials = (name || '').split(' ').map((w) => w[0]).join('').slice(0, 2)
  if (bad) {
    // a failed secondary (hover) photo just disappears; a primary one shows initials
    if ((className || '').includes('alt')) return null
    return <div className={'photo-fallback ' + (className || '')}>{initials}</div>
  }
  return <img className={className} src={img(src)} alt={name} loading="lazy" onError={() => setBad(true)} />
}
