import { TESTIMONIALS } from '../data/site'
import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

export default function Testimonials() {
  const revealRef = useReveal()

  return (
    <section className="testimonials section">
      <div className="container">
        <div ref={revealRef} className="reveal">
          <SectionHeading
            align="center"
            label="Testimonials"
            title="Trusted by regulars and partners alike"
          />

          <div className="testimonials__grid">
            {TESTIMONIALS.map((item) => (
              <blockquote key={item.name} className="testimonials__card">
                <p className="testimonials__quote">&ldquo;{item.quote}&rdquo;</p>
                <footer>
                  <cite className="testimonials__name">{item.name}</cite>
                  <span className="testimonials__role">{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
