import { GALLERY } from '../data/site'
import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

export default function Gallery() {
  const revealRef = useReveal()

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div ref={revealRef} className="reveal">
          <SectionHeading
            align="center"
            number="04"
            label="The Space"
            title="A stand designed for the ritual"
            desc="Warm light, open counter, and the smell of fresh roast — every detail considered for the daily coffee moment."
          />

          <div className="gallery__grid">
            {GALLERY.map((item) => (
              <figure
                key={item.src}
                className={`gallery__item gallery__item--${item.span}`}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
