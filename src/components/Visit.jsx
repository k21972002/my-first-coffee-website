import { BRAND, HOURS } from '../data/site'
import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import SocialButtons from './SocialButtons'

export default function Visit() {
  const revealRef = useReveal()

  return (
    <section id="visit" className="visit section">
      <div className="container">
        <div ref={revealRef} className="visit__layout reveal">
          <div className="visit__info">
            <SectionHeading
              number="05"
              label="Visit Us"
              title="Find us in Da'an"
              desc="Five minutes from Technology Building MRT. Walk-ins welcome — no reservation needed for groups under eight."
            />

            <address className="visit__address">
              <p className="visit__address-line">{BRAND.address}</p>
              <p className="visit__address-line">{BRAND.district}</p>
            </address>

            <a
              href={BRAND.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="visit__maps btn btn--secondary"
            >
              Open in Google Maps
            </a>

            <SocialButtons variant="contact" className="visit__social" />

            <ul className="visit__hours">
              {HOURS.map((row) => (
                <li key={row.days} className="visit__hours-row">
                  <span>{row.days}</span>
                  <span className="visit__hours-dots" aria-hidden="true" />
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="visit__map">
            <div className="visit__map-frame">
              <iframe
                title="Good Chap Coffee Stand location"
                src="https://maps.google.com/maps?q=Daan+District+Taipei&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="visit__map-meta">
              <div>
                <span className="visit__meta-label">Nearest MRT</span>
                <span>Technology Building · 5 min walk</span>
              </div>
              <div>
                <span className="visit__meta-label">Parking</span>
                <span>Street parking on Lane 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
