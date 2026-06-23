const categories = [
  {
    name: 'Pour Over',
    items: [
      { name: 'Ethiopia Yirgacheffe', desc: 'Floral · citrus · bright acidity', price: '6.50' },
      { name: 'Colombia Huila', desc: 'Caramel · nut · balanced body', price: '6.00' },
      { name: 'Kenya AA', desc: 'Blackcurrant · tomato · full finish', price: '7.00' },
    ],
  },
  {
    name: 'Espresso Bar',
    items: [
      { name: 'Classic Latte', desc: 'Double shot · steamed milk', price: '5.50' },
      { name: 'Flat White', desc: 'Double ristretto · microfoam', price: '5.75' },
      { name: 'Mocha', desc: 'Dark chocolate · espresso · milk', price: '6.25' },
    ],
  },
  {
    name: 'Beyond Coffee',
    items: [
      { name: 'Matcha Latte', desc: 'Ceremonial grade · oat or dairy', price: '5.75' },
      { name: 'Seasonal Refresher', desc: 'Rotating fruit & botanical', price: '6.00' },
      { name: 'House Scone', desc: 'Baked daily · served with jam', price: '3.50' },
    ],
  },
]

export default function Menu() {
  return (
    <section id="menu" className="menu section">
      <div className="container">
        <div className="section__header">
          <p className="section__label">Menu</p>
          <h2 className="section__title">What we serve</h2>
          <p className="section__desc">
            Prices in USD. Seasonal rotations available — ask our baristas
            for today&apos;s featured single origin.
          </p>
        </div>

        <div className="menu__grid">
          {categories.map((category) => (
            <div key={category.name} className="menu__category">
              <h3 className="menu__category-title">{category.name}</h3>
              <ul className="menu__list">
                {category.items.map((item) => (
                  <li key={item.name} className="menu__item">
                    <div className="menu__item-info">
                      <span className="menu__item-name">{item.name}</span>
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
    </section>
  )
}
