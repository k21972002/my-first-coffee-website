import { useState } from 'react'
import { FAQ } from '../data/site'
import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const revealRef = useReveal()

  return (
    <section className="faq section">
      <div className="container container--narrow">
        <div ref={revealRef} className="reveal">
          <SectionHeading
            align="center"
            label="FAQ"
            title="Common questions"
            desc="Everything you need to know before your first visit or partnership enquiry."
          />

          <div className="faq__list">
            {FAQ.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div key={item.q} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
                  <button
                    type="button"
                    className="faq__question"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{item.q}</span>
                    <span className="faq__icon" aria-hidden="true" />
                  </button>
                  <div className="faq__answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
