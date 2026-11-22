import Chapter from '../components/Chapter'
import Reveal from '../components/Reveal'
import { profile } from '../data/profile'
export default function Story() {
  return (
    <Chapter id="story" num="02" title="Every Developer Has a Beginning.">
      <div className="grid md:grid-cols-[1.3fr_1fr] gap-10">
        <div className="space-y-5 text-lg mut max-w-prose">{profile.story.map((p, i) => <Reveal key={i} delay={i * .08}><p>{p}</p></Reveal>)}</div>
        <Reveal><ul className="card p-6 space-y-3">{profile.mindset.map(m => <li key={m} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 shrink-0"/>{m}</li>)}</ul></Reveal>
      </div>
    </Chapter>)
}
