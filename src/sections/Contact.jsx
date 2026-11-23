import { useState } from 'react'
import { Github, Linkedin, Mail, Download, MessageCircle } from 'lucide-react'
import Chapter from '../components/Chapter'
import { profile } from '../data/profile'
const ok = v => v.trim().length > 0
export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' }), [err, setErr] = useState({}), [sent, setSent] = useState('')
  const validate = () => {
    const er = {}
    if (!ok(f.name)) er.name = 'Enter your name.'
    if (f.email.trim() && !/^\S+@\S+\.\S+$/.test(f.email)) er.email = 'Enter a valid email address.'
    if (!ok(f.subject)) er.subject = 'Enter a subject.'
    if (f.message.trim().length < 10) er.message = 'Write at least 10 characters.'
    setErr(er); return !Object.keys(er).length
  }
  // No backend: each button opens the chosen app with the message prefilled in that app's own style.
  const send = via => {
    if (!validate()) return
    const reply = f.email.trim() ? `\nReply to: ${f.email.trim()}` : ''
    if (via === 'whatsapp') {
      const text = `Hi Irfan 👋\n*${f.subject.trim()}*\n\n${f.message.trim()}\n\n– ${f.name.trim()}${reply}`
      window.open(`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    } else {
      const body = `Dear Irfan,\n\n${f.message.trim()}\n\nBest regards,\n${f.name.trim()}${reply}`
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent(f.subject.trim())}&body=${encodeURIComponent(body)}`, '_blank', 'noopener')
    }
    setSent(via)
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
          <a className="btn w-full" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} target="_blank" rel="noreferrer"><Mail size={18}/> {profile.email}</a>
          <a className="btn btn-p w-full" href={profile.resume} download><Download size={18}/> Download Resume</a>
        </div>
        <form onSubmit={e => e.preventDefault()} noValidate className="card p-6 space-y-4">
          {field('name', 'Name')}{field('email', 'Your email (optional)')}{field('subject', 'Subject')}{field('message', 'Message', 'textarea')}
          <p className="text-sm mut">Choose how you would like to reach me:</p>
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => send('whatsapp')} className="btn btn-p"><MessageCircle size={16}/> Send via WhatsApp</button>
            <button type="button" onClick={() => send('gmail')} className="btn"><Mail size={16}/> Send via Gmail</button>
          </div>
          {sent && <p className="mut text-sm" role="status">{sent === 'whatsapp' ? 'WhatsApp opened with your message ready.' : 'Gmail opened with your message ready.'} Press send there to deliver it.</p>}
        </form>
      </div>
    </Chapter>)
}
