export default function SectionHeading({ label, title, desc, align = 'left', number }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      {number && <span className="section-heading__number">{number}</span>}
      {label && <p className="section__label">{label}</p>}
      {title && <h2 className="section__title">{title}</h2>}
      {desc && <p className="section__desc">{desc}</p>}
    </header>
  )
}
