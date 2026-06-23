const highlights = [
  {
    number: '01',
    title: 'Direct Trade',
    desc: 'We partner with small farms in Ethiopia and Colombia for traceable, seasonally rotated beans.',
  },
  {
    number: '02',
    title: 'Small-Batch Roast',
    desc: 'Roasted in-house in limited runs to preserve clarity, aroma, and origin character.',
  },
  {
    number: '03',
    title: 'Neighbourhood Stand',
    desc: 'More than a counter — a place to pause, read, and meet the people around you.',
  },
]

export default function Story() {
  return (
    <section id="story" className="story section">
      <div className="container">
        <div className="story__grid">
          <div className="story__visual">
            <div className="story__image">
              <div className="story__image-inner" aria-hidden="true" />
            </div>
            <div className="story__badge">
              <span className="story__badge-number">6+</span>
              <span className="story__badge-text">Years brewing</span>
            </div>
          </div>

          <div className="story__content">
            <p className="section__label">Our Story</p>
            <h2 className="section__title">Built on a single pour-over</h2>
            <p className="story__text">
              Good Chap Coffee Stand opened in 2019 with one idea: great coffee
              should feel approachable, not intimidating. Founder Jamie set up
              a modest counter in a Taipei side street and started pulling shots
              for anyone who walked by.
            </p>
            <p className="story__text">
              Today, we still roast small, brew carefully, and treat every cup
              as a quiet ritual — from origin to glass, with nothing rushed
              and nothing wasted.
            </p>

            <div className="story__highlights">
              {highlights.map((item) => (
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
