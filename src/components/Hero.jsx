import { BRAND } from '../data/site'
import SocialButtons from './SocialButtons'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content container">
        <p className="hero__tag">Est. 2019 · Taipei</p>
        <h1 className="hero__title">
          {BRAND.name}
        </h1>
        <p className="hero__subtitle">
          {BRAND.tagline} Single-origin pours, thoughtful espresso,
          and a stand built for unhurried mornings.
        </p>
        <div className="hero__actions">
          <a href="#menu" className="btn btn--primary">
            View Menu
          </a>
          <a href="#story" className="btn btn--outline">
            Our Story
          </a>
        </div>
        <SocialButtons variant="hero" className="hero__social" />
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
