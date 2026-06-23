import { useState, useEffect } from 'react'
import { BRAND } from '../data/site'
import SocialButtons from './SocialButtons'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#story', label: 'Story' },
  { href: '#menu', label: 'Menu' },
  { href: '#hours', label: 'Hours' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        <a href="#home" className="header__logo" onClick={handleNavClick}>
          <span className="header__logo-mark">GC</span>
          <span className="header__logo-text">{BRAND.shortName}</span>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <SocialButtons variant="menu" className="header__social-mobile" />
        </nav>

        <div className="header__actions">
          <SocialButtons variant="header" className="header__social-desktop" />
          <button
            className={`header__toggle ${menuOpen ? 'header__toggle--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
