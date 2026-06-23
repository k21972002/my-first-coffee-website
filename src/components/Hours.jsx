import { HOURS } from '../data/site'

export default function Hours() {
  return (
    <section id="hours" className="hours section">
      <div className="container">
        <div className="hours__card">
          <div className="hours__intro">
            <p className="section__label">Visit Us</p>
            <h2 className="section__title">Opening Hours</h2>
            <p className="hours__desc">
              Drop in for a pour-over before work, or linger over an afternoon flat white.
              We&apos;re here most days — check the schedule below.
            </p>
          </div>

          <ul className="hours__list">
            {HOURS.map((row) => (
              <li key={row.days} className="hours__row">
                <span className="hours__days">{row.days}</span>
                <span className="hours__dots" aria-hidden="true" />
                <span className="hours__time">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
