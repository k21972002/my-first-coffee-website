import { PROFILE } from '../data/site'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">{PROFILE.role}</p>
        <h1 className="hero__title">
          {PROFILE.tagline}
        </h1>
        <p className="hero__desc">
          Front-end developer based in {PROFILE.location}.
          I build websites that are fast, responsive, and designed to leave a lasting impression.
        </p>
        <div className="hero__actions">
          <a href="#work" className="btn btn--primary">View my work</a>
          <a href="#about" className="link-arrow">Learn more about me</a>
        </div>
      </div>
    </section>
  )
}
