import Chapter from '../components/Chapter'
import Reveal from '../components/Reveal'
import { interests } from '../data/profile'
export default function Next() {
  return (
    <Chapter id="next" num="09" title="The Journey Is Still Loading...">
      <Reveal><p className="text-xl md:text-2xl max-w-3xl mb-8">I am looking forward to opportunities where I can contribute to meaningful software products, collaborate with talented engineers, solve challenging problems, and continue growing as a developer.</p></Reveal>
      <div className="flex flex-wrap gap-3 mb-10">{interests.map(i => <span key={i} className="chip text-base">{i}</span>)}</div>
      <a href="#contact" className="btn btn-p">Let's Build Something Meaningful.</a>
    </Chapter>)
}
