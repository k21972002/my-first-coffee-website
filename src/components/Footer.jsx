import { BRAND } from '../data/site'
import SocialButtons from './SocialButtons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">{BRAND.name}</span>
          <p>{BRAND.tagline}</p>
        </div>
        <SocialButtons variant="footer" />
        <p className="footer__copy">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
