import { SERVICES } from '../data/site'
import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

export default function Services() {
  const revealRef = useReveal()

  return (
    <section id="services" className="services section">
      <div className="container">
        <div ref={revealRef} className="reveal">
          <SectionHeading
            align="center"
            number="02"
            label="Beyond the Counter"
            title="Built for brands, teams, and coffee lovers"
            desc="From one-off events to ongoing wholesale partnerships — we extend the Good Chap standard beyond our stand."
          />

          <div className="services__grid">
            {SERVICES.map((service) => (
              <article key={service.title} className="services__card">
                <h3 className="services__title">{service.title}</h3>
                <p className="services__desc">{service.desc}</p>
                <a href={service.href} className="services__link">{service.cta} →</a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
