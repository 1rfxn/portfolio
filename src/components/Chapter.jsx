import Reveal from './Reveal'
export default function Chapter({ id, num, title, children }) {
  return (
    <section id={id} className="relative px-5 md:px-10 py-24 md:py-32 max-w-6xl mx-auto">
      <Reveal><p className="mut text-sm mb-3">Chapter {num}</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] max-w-3xl mb-12">{title}</h2></Reveal>
      {children}
    </section>
  )
}
