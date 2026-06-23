import { HIGHLIGHTS } from '../data/site'
import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

export default function Story() {
  const revealRef = useReveal()

  return (
    <section id="about" className="story section">
      <div className="container">
        <div ref={revealRef} className="story__grid reveal">
          <div className="story__visual">
            <div className="story__image">
              <div className="story__image-inner" aria-hidden="true" />
            </div>
            <div className="story__badge">
              <span className="story__badge-number">SCA</span>
              <span className="story__badge-text">Certified baristas</span>
            </div>
          </div>

          <div className="story__content">
            <SectionHeading
              number="01"
              label="About Us"
              title="Rooted in origin. Refined at the bar."
              desc="Founded in 2019, Good Chap began as a single counter with one conviction: specialty coffee should be transparent, approachable, and consistently excellent."
            />

            <p className="story__text">
              What started as weekend pop-ups evolved into a permanent stand
              on Fuxing South Road. Today we roast on-site, cup every release,
              and maintain direct relationships with producers across three continents.
            </p>
            <p className="story__text">
              Our space is deliberately unhurried — designed for the morning
              regular, the remote worker, and anyone who believes a well-made
              cup is worth five extra minutes.
            </p>

            <div className="story__highlights">
              {HIGHLIGHTS.map((item) => (
                <div key={item.number} className="story__highlight">
                  <span className="story__highlight-number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
