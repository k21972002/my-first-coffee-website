import { useState, useEffect } from 'react'
import { NAV, PROFILE } from '../data/site'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#home" className="header__logo" onClick={close}>
          {PROFILE.name}
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__links">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={close}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a href="#contact" className="header__cta" onClick={close}>Get in touch</a>
          <button
            type="button"
            className={`header__toggle ${menuOpen ? 'header__toggle--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
