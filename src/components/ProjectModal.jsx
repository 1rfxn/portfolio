import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, Github } from 'lucide-react'
const Block = ({ t, children }) => <div><h4 className="font-display text-lg mb-2">{t}</h4>{children}</div>
export default function ProjectModal({ p, onClose }) {
  useEffect(() => { const k = e => e.key === 'Escape' && onClose(); document.addEventListener('keydown', k); document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = '' } }, [onClose])
  return (
    <motion.div className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div role="dialog" aria-modal="true" aria-label={p.title} onClick={e => e.stopPropagation()} initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl md:rounded-3xl p-6 md:p-10 space-y-7" style={{ background: 'var(--bg)', border: '1px solid var(--line)' }}>
        <div className="flex justify-between gap-4"><div><span className="chip">{p.status}{p.year && ` · ${p.year}`}</span>
          <h3 className="font-display text-3xl md:text-4xl font-bold mt-3">{p.title}</h3></div>
          <button onClick={onClose} aria-label="Close" className="h-10 w-10 grid place-items-center card shrink-0"><X size={18}/></button></div>
        <p className="mut text-lg">{p.overview}</p>
        <Block t="The problem"><p className="mut">{p.problem}</p></Block>
        <Block t="My solution"><p className="mut">{p.solution}</p></Block>
        <Block t="Key features"><ul className="mut list-disc pl-5 space-y-1">{p.features.map(f => <li key={f}>{f}</li>)}</ul></Block>
        <Block t="My contribution"><p className="mut">{p.contribution}</p></Block>
        <Block t="Technologies"><div className="flex flex-wrap gap-2">{p.tech.map(t => <span key={t} className="chip">{t}</span>)}</div></Block>
        {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-p"><Github size={16}/> View on GitHub</a>}
      </motion.div>
    </motion.div>)
}
