import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { profile } from '../data/profile'
import ProfilePhoto from '../components/ProfilePhoto'
export default function Hero() {
  const { scrollY } = useScroll(); const y = useTransform(scrollY, [0, 600], [0, 90])
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-5 md:px-10 pt-28 pb-16 overflow-hidden">
      <motion.div aria-hidden style={{ y }} className="absolute -z-0 inset-0">
        <div className="absolute top-10 -left-20 w-[480px] h-[480px] rounded-full bg-sky-500/20 blur-[120px] animate-pulse"/>
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-violet-600/20 blur-[130px]"/>
      </motion.div>
      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }} className="mut mb-4">{profile.title}</motion.p>
          <h1 className="font-display font-bold leading-[.95] text-[clamp(3.2rem,11vw,8rem)]">
            {['IRFAN', 'BASHA'].map((w, i) => <span key={w} className="block overflow-hidden"><motion.span className={`block ${i ? 'grad' : ''}`} initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: .9, delay: .15 + i * .15, ease: [.2,.7,.2,1] }}>{w}</motion.span></span>)}
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }} className="mt-6 text-xl mut max-w-md">{profile.tagline}</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#story" className="btn btn-p">Explore My Journey</a>
            <a href="#projects" className="btn">View My Projects</a>
            <a href={profile.resume} download className="btn"><Download size={16}/> Download Resume</a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .5, duration: .9 }} className="relative mx-auto w-full max-w-[320px]">
          <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-sky-400 to-violet-500 opacity-40 blur-xl"/>
          <ProfilePhoto className="relative w-full aspect-[4/5] object-cover rounded-[28px] card"/>
        </motion.div>
      </div>
      <a href="#story" aria-label="Scroll to story" className="absolute bottom-6 left-1/2 -translate-x-1/2 mut"><ArrowDown className="animate-bounce"/></a>
    </section>)
}
