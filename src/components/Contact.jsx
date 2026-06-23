import { useState } from 'react'
import { BRAND, HOURS } from '../data/site'
import SocialButtons from './SocialButtons'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <p className="section__label">Contact</p>
            <h2 className="section__title">Get in touch</h2>
            <p className="contact__desc">
              Private events, wholesale enquiries, or just a question about
              our beans — send a message and we&apos;ll reply within one business day.
            </p>

            <SocialButtons variant="contact" className="contact__social" />

            <ul className="contact__details">
              <li>
                <span className="contact__detail-label">Address</span>
                <p>{BRAND.address}</p>
              </li>
              <li>
                <span className="contact__detail-label">Phone</span>
                <p>{BRAND.phone}</p>
              </li>
              <li>
                <span className="contact__detail-label">Email</span>
                <p>{BRAND.email}</p>
              </li>
              <li>
                <span className="contact__detail-label">Hours</span>
                <p>{HOURS[0].time} · Mon–Fri</p>
                <p>{HOURS[1].time} · Sat–Sun</p>
              </li>
            </ul>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form-group">
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
            <div className="form-group">
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
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="How can we help?"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn--primary btn--full">
              Send Message
            </button>
            {submitted && (
              <p className="contact__success" role="status">
                Thank you — we&apos;ll be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
