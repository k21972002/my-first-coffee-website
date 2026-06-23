import { BRAND, NAV, HOURS } from '../data/site'
import SocialButtons from './SocialButtons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">{BRAND.name}</span>
            <p>{BRAND.tagline}</p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <span className="footer__nav-title">Navigate</span>
            <ul>
              {NAV.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__hours">
            <span className="footer__nav-title">Hours</span>
            <ul>
              {HOURS.map((row) => (
                <li key={row.days}>
                  <span>{row.days}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__connect">
            <span className="footer__nav-title">Connect</span>
            <p>{BRAND.email}</p>
            <p>{BRAND.phone}</p>
            <SocialButtons variant="footer" />
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="footer__credit">
            Designed as a commercial web concept · Taipei, Taiwan
          </p>
        </div>
      </div>
    </footer>
  )
}
