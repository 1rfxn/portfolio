import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
const links = [['hero','Home'],['story','My Story'],['skills','Skills'],['projects','Projects'],['experience','Experience'],['achievements','Achievements'],['contact','Contact']]
export default function Nav({ theme, setTheme }) {
  const [active, setActive] = useState('hero'), [open, setOpen] = useState(false), [solid, setSolid] = useState(false)
  const { scrollYProgress } = useScroll(); const w = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    links.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el) })
    window.addEventListener('scroll', onScroll); onScroll()
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])
  return (<>
    <motion.div style={{ scaleX: w }} className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-sky-400 to-violet-500" aria-hidden />
    <nav aria-label="Primary" className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl rounded-full px-4 py-2 flex items-center justify-between transition-all ${solid ? 'card shadow-lg' : ''}`}>
      <a href="#hero" className="font-display font-bold grad px-2">IB</a>
      <ul className="hidden md:flex gap-1">
        {links.map(([id, l]) => <li key={id}><a href={`#${id}`} className={`px-3 py-1.5 rounded-full text-sm transition ${active === id ? 'bg-white/10 text-[var(--fg)]' : 'mut hover:text-[var(--fg)]'}`} aria-current={active === id ? 'true' : undefined}>{l}</a></li>)}
      </ul>
      <div className="flex gap-1">
        <button className="p-2" aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}</button>
        <button className="p-2 md:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={18}/> : <Menu size={18}/>}</button>
      </div>
      {open && <ul className="md:hidden absolute top-14 left-0 right-0 card p-3 flex flex-col" style={{ background: 'var(--bg)' }}>
        {links.map(([id, l]) => <li key={id}><a onClick={() => setOpen(false)} href={`#${id}`} className="block px-3 py-2.5">{l}</a></li>)}</ul>}
    </nav></>)
}
