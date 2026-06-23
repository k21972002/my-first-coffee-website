import { useState } from 'react'
import { PROFILE, SOCIAL } from '../data/site'
import useReveal from '../hooks/useReveal'

const initial = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [sent, setSent] = useState(false)
  const ref = useReveal()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm(initial)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="contact section">
      <div className="section-inner">
        <div ref={ref} className="contact__layout reveal">
          <div className="contact__info">
            <p className="section-eyebrow">Contact</p>
            <h2 className="section-title">
              Let&apos;s build<br />something together.
            </h2>
            <p className="contact__desc">
              Have a project in mind or want to collaborate?
              Send me a message — I typically respond within one business day.
            </p>

            <ul className="contact__list">
              <li>
                <span className="contact__label">Email</span>
                <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              </li>
              <li>
                <span className="contact__label">Instagram</span>
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
                  {SOCIAL.instagramHandle}
                </a>
              </li>
              <li>
                <span className="contact__label">LINE</span>
                <a href={SOCIAL.line} target="_blank" rel="noopener noreferrer">
                  {SOCIAL.lineHandle}
                </a>
              </li>
              <li>
                <span className="contact__label">Location</span>
                <span>{PROFILE.location}</span>
              </li>
            </ul>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn--primary btn--full">Send message</button>
            {sent && (
              <p className="contact__success" role="status">
                Message sent — I&apos;ll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
