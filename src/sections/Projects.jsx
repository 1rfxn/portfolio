import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Chapter from '../components/Chapter'
import Reveal from '../components/Reveal'
import ProjectModal from '../components/ProjectModal'
import { projects } from '../data/projects'
export default function Projects() {
  const [sel, setSel] = useState(null)
  return (
    <Chapter id="projects" num="04" title="Ideas Are Easy. Building Them Is Different.">
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => <Reveal key={p.id} delay={(i % 2) * .08} className={i === 0 ? 'md:col-span-2' : ''}>
          <motion.button whileHover={{ y: -6 }} onClick={() => setSel(p)} className="card p-7 text-left w-full h-full group relative overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-sky-500/10 to-violet-500/10"/>
            <div className="relative">
              <div className="flex justify-between mb-10"><span className="chip">{p.status}{p.year && ` · ${p.year}`}</span><ArrowUpRight className="mut group-hover:text-[var(--a)]"/></div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">{p.title}</h3>
              <p className="mut mb-5 max-w-xl">{p.overview}</p>
              <div className="flex flex-wrap gap-2">{p.tech.slice(0, 5).map(t => <span key={t} className="chip">{t}</span>)}</div>
            </div></motion.button></Reveal>)}
      </div>
      <AnimatePresence>{sel && <ProjectModal p={sel} onClose={() => setSel(null)}/>}</AnimatePresence>
    </Chapter>)
}
