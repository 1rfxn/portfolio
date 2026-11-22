import { motion } from 'framer-motion'
import Chapter from '../components/Chapter'
import Reveal from '../components/Reveal'
import { experience, milestones } from '../data/timeline'
function Line({ items, render }) {
  return (
    <div className="relative pl-8 md:pl-10">
      <motion.div className="absolute left-2 top-1 bottom-1 w-px origin-top bg-gradient-to-b from-sky-400 to-violet-500" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}/>
      <div className="space-y-8">{items.map((it, i) => <Reveal key={i}><div className="relative">
        <span className="absolute -left-[30px] md:-left-[34px] top-2 h-3 w-3 rounded-full bg-[var(--a)] ring-4 ring-[var(--bg)]"/>{render(it)}</div></Reveal>)}</div>
    </div>)
}
export function Experience() {
  return (
    <Chapter id="experience" num="05" title="Learning Beyond the Classroom.">
      <Line items={experience} render={e => <div className="card p-6"><p className="mut text-sm">{e.date}</p>
        <h3 className="font-display text-2xl mt-1">{e.role}</h3><p className="mb-3 mut">{e.org}</p>
        <ul className="list-disc pl-5 mut space-y-1">{e.points.map(p => <li key={p}>{p}</li>)}</ul></div>}/>
    </Chapter>)
}
export function Achievements() {
  return (
    <Chapter id="achievements" num="06" title="Small Steps. Bigger Ambitions.">
      <Line items={milestones} render={m => <div><p className="mut text-sm">{m.date}</p><h3 className="font-display text-xl">{m.title}</h3><p className="mut">{m.text}</p></div>}/>
    </Chapter>)
}
