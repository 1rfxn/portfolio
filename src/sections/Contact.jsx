import { useState } from 'react'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import Chapter from '../components/Chapter'
import { profile } from '../data/profile'
const ok = v => v.trim().length > 0
export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' }), [err, setErr] = useState({}), [sent, setSent] = useState(false)
  const submit = e => {
    e.preventDefault()
    const er = {}
    if (!ok(f.name)) er.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = 'Enter a valid email address.'
    if (!ok(f.subject)) er.subject = 'Enter a subject.'
    if (f.message.trim().length < 10) er.message = 'Write at least 10 characters.'
    setErr(er); if (Object.keys(er).length) return
    // No backend is configured, so open the visitor's mail app with the message prefilled.
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(`${f.message}\n\n— ${f.name} (${f.email})`)}`
    setSent(true)
  }
  const field = (k, label, tag = 'input') => { const T = tag; return (
    <label className="block"><span className="text-sm mut">{label}</span>
      <T value={f[k]} onChange={e => setF({ ...f, [k]: e.target.value })} rows={tag === 'textarea' ? 5 : undefined} aria-invalid={!!err[k]}
        className="mt-1 w-full rounded-xl px-4 py-3 bg-transparent border" style={{ borderColor: err[k] ? '#f87171' : 'var(--line)' }}/>
      {err[k] && <span role="alert" className="text-sm text-red-400">{err[k]}</span>}</label>) }
  return (
    <Chapter id="contact" num="10" title="Have an Idea? Let's Make It Real.">
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-10">
        <div className="space-y-3">
          <a className="btn w-full" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
          <a className="btn w-full" href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
          <a className="btn w-full" href={`mailto:${profile.email}`}><Mail size={18}/> {profile.email}</a>
          <a className="btn btn-p w-full" href={profile.resume} download><Download size={18}/> Download Resume</a>
        </div>
        <form onSubmit={submit} noValidate className="card p-6 space-y-4">
          {field('name', 'Name')}{field('email', 'Email')}{field('subject', 'Subject')}{field('message', 'Message', 'textarea')}
          <button className="btn btn-p" type="submit">Send Message</button>
          {sent && <p className="mut text-sm" role="status">Your email app should open with the message ready to send. This form has no server, so nothing is sent until you press send there.</p>}
        </form>
      </div>
    </Chapter>)
}
