import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Story from './sections/Story'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import { Experience, Achievements } from './sections/Timeline'
import Philosophy from './sections/Philosophy'
import Human from './sections/Human'
import Next from './sections/Next'
import Contact from './sections/Contact'
import { profile } from './data/profile'
function NotFound() {
  return <main className="min-h-screen grid place-items-center text-center px-6"><div>
    <p className="font-display text-8xl grad font-bold">404</p><p className="mut my-4">This chapter doesn't exist.</p><a href="/" className="btn btn-p">Back to the story</a></div></main>
}
export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [top, setTop] = useState(false), [pos, setPos] = useState({ x: -400, y: -400 })
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('theme', theme) }, [theme])
  useEffect(() => {
    const s = () => setTop(window.scrollY > 800), m = e => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('scroll', s); window.addEventListener('mousemove', m)
    return () => { window.removeEventListener('scroll', s); window.removeEventListener('mousemove', m) }
  }, [])
  if (window.location.pathname !== '/') return <NotFound/>
  return (<>
    <div className="cursor-glow" style={{ left: pos.x, top: pos.y }} aria-hidden/>
    <Nav theme={theme} setTheme={setTheme}/>
    <main><Hero/><Story/><Skills/><Projects/><Experience/><Achievements/><Philosophy/><Human/><Next/><Contact/></main>
    <footer className="text-center mut text-sm py-10">© {new Date().getFullYear()} {profile.name}</footer>
    {top && <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0 })} className="fixed bottom-6 right-6 z-50 h-11 w-11 grid place-items-center card"><ArrowUp size={18}/></button>}
  </>)
}
