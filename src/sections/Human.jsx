import { ImagePlus } from 'lucide-react'
import Chapter from '../components/Chapter'
import Reveal from '../components/Reveal'
import { traits, profile, gallery } from '../data/profile'
export default function Human() {
  const slots = gallery.length ? gallery : [null, null, null]
  return (
    <Chapter id="human" num="08" title="Beyond the Terminal.">
      <div className="flex flex-wrap gap-3 mb-6">{traits.map(t => <span key={t} className="chip text-base">{t}</span>)}</div>
      <p className="mut mb-10">Languages: {profile.languages.join(', ')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{slots.map((s, i) => <Reveal key={i}>
        {s ? <img loading="lazy" src={s} alt={`Gallery photo ${i + 1}`} className="aspect-[4/5] w-full object-cover rounded-2xl"/>
          : <div className="aspect-[4/5] card grid place-items-center mut text-sm text-center p-4"><span><ImagePlus className="mx-auto mb-2"/>Add photos in data/profile.js</span></div>}</Reveal>)}</div>
    </Chapter>)
}
