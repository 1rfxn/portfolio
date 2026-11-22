import Chapter from '../components/Chapter'
import Reveal from '../components/Reveal'
import { philosophy } from '../data/profile'
export default function Philosophy() {
  return (
    <Chapter id="philosophy" num="07" title="I Don't Just Write Code. I Solve Problems.">
      <ol className="divide-y" style={{ borderColor: 'var(--line)' }}>{philosophy.map((p, i) => <Reveal key={p}>
        <li className="py-6 flex gap-6 items-baseline"><span className="font-display text-3xl grad w-12 shrink-0">{String(i + 1).padStart(2, '0')}</span>
          <span className="text-xl md:text-3xl font-display">{p}</span></li></Reveal>)}</ol>
    </Chapter>)
}
