import { MENU, FEATURED } from '../data/site'
import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

export default function Menu() {
  const revealRef = useReveal()

  return (
    <section id="menu" className="menu section">
      <div className="container">
        <div ref={revealRef} className="reveal">
          <SectionHeading
            align="center"
            number="03"
            label="The Menu"
            title="Seasonal offerings, priced transparently"
            desc="All prices in USD. Origins rotate quarterly — ask our baristas for today&apos;s cupping notes and brew recommendations."
          />

          <div className="menu__featured">
            <div className="menu__featured-content">
              <span className="menu__featured-tag">Barista&apos;s Pick</span>
              <h3 className="menu__featured-name">{FEATURED.name}</h3>
              <p className="menu__featured-origin">{FEATURED.origin}</p>
              <p className="menu__featured-notes">{FEATURED.notes}</p>
              <p className="menu__featured-desc">{FEATURED.desc}</p>
            </div>
            <div className="menu__featured-price">
              <span className="menu__featured-price-label">Pour Over</span>
              <span className="menu__featured-price-value">${FEATURED.price}</span>
            </div>
          </div>

          <div className="menu__grid">
            {MENU.map((category) => (
              <div key={category.name} className="menu__category">
                <h3 className="menu__category-title">{category.name}</h3>
                <ul className="menu__list">
                  {category.items.map((item) => (
                    <li key={item.name} className="menu__item">
                      <div className="menu__item-info">
                        <span className="menu__item-name">
                          {item.name}
                          {item.tag && <span className="menu__item-tag">{item.tag}</span>}
                        </span>
                        <span className="menu__item-desc">{item.desc}</span>
                      </div>
                      <span className="menu__item-leader" aria-hidden="true" />
                      <span className="menu__item-price">${item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
