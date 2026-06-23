import { BRAND } from '../data/site'

export default function CTA() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div className="cta__content">
          <p className="cta__label">Work With Us</p>
          <h2 className="cta__title">Ready to bring Good Chap to your event or team?</h2>
          <p className="cta__desc">
            Private events, wholesale roasting, and barista workshops —
            tell us what you need and we&apos;ll respond within one business day.
          </p>
        </div>
        <div className="cta__actions">
          <a href="#contact" className="btn btn--light">Start an Enquiry</a>
          <a href={`mailto:${BRAND.email}`} className="btn btn--ghost">{BRAND.email}</a>
        </div>
      </div>
    </section>
  )
}
