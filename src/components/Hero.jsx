import { BRAND } from '../data/site'
import SocialButtons from './SocialButtons'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__inner container">
        <div className="hero__content">
          <p className="hero__tag">Est. 2019 · Da&apos;an, Taipei</p>
          <h1 className="hero__title">
            Coffee worth
            <br />
            <em>slowing down for.</em>
          </h1>
          <p className="hero__subtitle">
            {BRAND.name} is a specialty coffee stand sourcing traceable
            single-origin beans through direct trade — roasted in small batches
            and served with precision at our counter in Taipei.
          </p>
          <div className="hero__actions">
            <a href="#menu" className="btn btn--primary">Explore the Menu</a>
            <a href="#visit" className="btn btn--outline">Plan Your Visit</a>
          </div>
          <SocialButtons variant="hero" className="hero__social" />
        </div>

        <div className="hero__aside">
          <div className="hero__card">
            <span className="hero__card-label">Now Serving</span>
            <p className="hero__card-title">Ethiopia Yirgacheffe</p>
            <p className="hero__card-desc">Floral · bergamot · stone fruit</p>
            <a href="#menu" className="hero__card-link">View full menu →</a>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
