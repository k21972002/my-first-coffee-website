import { useState } from 'react'
import { BRAND, INQUIRY_TYPES, SOCIAL } from '../data/site'
import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import SocialButtons from './SocialButtons'

const initialForm = { name: '', email: '', type: INQUIRY_TYPES[0], message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const revealRef = useReveal()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div ref={revealRef} className="contact__grid reveal">
          <div className="contact__info">
            <SectionHeading
              number="06"
              label="Contact"
              title="Let's start a conversation"
              desc="Whether it's a private event, wholesale partnership, or a simple question about our current roast — we read every message and respond within one business day."
            />

            <SocialButtons variant="contact" className="contact__social" />

            <ul className="contact__details">
              <li>
                <span className="contact__detail-label">Email</span>
                <p><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></p>
              </li>
              <li>
                <span className="contact__detail-label">Instagram</span>
                <p>
                  <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
                    {SOCIAL.instagramHandle}
                  </a>
                </p>
              </li>
              <li>
                <span className="contact__detail-label">LINE</span>
                <p>
                  <a href={SOCIAL.line} target="_blank" rel="noopener noreferrer">
                    {SOCIAL.lineHandle}
                  </a>
                </p>
              </li>
              <li>
                <span className="contact__detail-label">Phone</span>
                <p><a href={`tel:${BRAND.phone.replace(/\D/g, '')}`}>{BRAND.phone}</a></p>
              </li>
              <li>
                <span className="contact__detail-label">Address</span>
                <p>{BRAND.address}, {BRAND.district}</p>
              </li>
            </ul>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="type">Enquiry Type</label>
              <select
                id="type"
                name="type"
                value={form.type}
                onChange={handleChange}
              >
                {INQUIRY_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your event, team size, or question..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn--primary btn--full">
              Send Enquiry
            </button>
            {submitted && (
              <p className="contact__success" role="status">
                Thank you — your enquiry has been received. We&apos;ll be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
