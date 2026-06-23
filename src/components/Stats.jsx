import { STATS } from '../data/site'

export default function Stats() {
  return (
    <section className="stats" aria-label="Key figures">
      <div className="container">
        <ul className="stats__grid">
          {STATS.map((stat) => (
            <li key={stat.label} className="stats__item">
              <span className="stats__value">{stat.value}</span>
              <span className="stats__label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
