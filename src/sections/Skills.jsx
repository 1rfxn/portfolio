import { motion } from 'framer-motion'
import Chapter from '../components/Chapter'
import Reveal from '../components/Reveal'
import { skills } from '../data/skills'
export default function Skills() {
  return (
    <Chapter id="skills" num="03" title="The Tools Behind My Thinking.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((g, i) => <Reveal key={g.group} delay={i * .05}>
          <div className="card p-6 h-full"><h3 className="font-display text-xl mb-4">{g.group}</h3>
            <ul className="grid gap-2">{g.items.map(([n, l]) => <motion.li key={n} whileHover={{ x: 4 }} className="flex justify-between gap-3 rounded-xl px-3 py-2 hover:bg-white/5">
              <span>{n}</span><span className="mut text-sm text-right">{l}</span></motion.li>)}</ul></div></Reveal>)}
      </div>
    </Chapter>)
}
