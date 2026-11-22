import { useState } from 'react'
import { profile } from '../data/profile'
// Photos placed in src/assets/ named profile.(jpg|jpeg|png|webp) are bundled automatically.
const bundled = Object.values(import.meta.glob('../assets/profile.*', { eager: true, query: '?url', import: 'default' }))
// Otherwise try public/images/profile.* with common extensions, then the placeholder.
const candidates = [...bundled, ...['jpg', 'jpeg', 'png', 'webp', 'JPG', 'PNG'].map(e => `/images/profile.${e}`), profile.photoFallback]
export default function ProfilePhoto({ className }) {
  const [i, setI] = useState(0)
  return <img src={candidates[i]} onError={() => setI(n => Math.min(n + 1, candidates.length - 1))}
    alt="Portrait of Irfan Basha" width="320" height="400" className={className}/>
}
