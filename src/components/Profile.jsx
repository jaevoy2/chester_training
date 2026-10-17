import Photo from './Photo.jsx'

// Full trainer profile: photo (swaps on hover), credential tags and bio
export default function Profile({ m, note, flip, compact }) {
  return (
    <article className={'profile' + (flip ? ' flip' : '') + (compact ? ' compact' : '')}>
      <div className="profile-photo">
        <Photo src={m.photo} name={m.name} className="profile-img" />
        {m.photo2 && <Photo src={m.photo2} name={m.name} className="profile-img alt" />}
      </div>
      <div className="profile-body">
        <small>{m.role}</small>
        <h3>{m.name}</h3>
        <em>{m.creds}</em>
        {note && <p className="profile-note">{note}</p>}
        <div className="tags">{m.tags.map((t) => <span key={t}>{t}</span>)}</div>
        {m.bio.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </article>
  )
}
