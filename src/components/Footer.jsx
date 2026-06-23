import { PROFILE, NAV, SOCIAL } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner footer__inner">
        <div className="footer__top">
          <span className="footer__name">{PROFILE.name}</span>
          <nav className="footer__nav" aria-label="Footer">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <div className="footer__social">
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
              {SOCIAL.instagramHandle}
            </a>
            <a href={SOCIAL.line} target="_blank" rel="noopener noreferrer">
              {SOCIAL.lineHandle}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
