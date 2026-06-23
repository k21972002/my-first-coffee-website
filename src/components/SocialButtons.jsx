import { SOCIAL } from '../data/site'

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

function LineIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19.5 10.5c0-4.2-4-7.5-9-7.5S1.5 6.3 1.5 10.5c0 3.7 3.3 6.8 7.8 7.4.3.1.7.2 1 .4l1.7 1c.4.2.8.1 1-.2.2-.2.2-.5 0-.8l-1.2-1.4c-.1-.2-.1-.4 0-.6.1-.2.3-.3.5-.3 3.5-.5 6.2-3.2 6.2-6.5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function SocialButtons({ variant = 'dark', className = '' }) {
  return (
    <div className={`social-buttons social-buttons--${variant} ${className}`}>
      <a
        href={SOCIAL.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="social-buttons__btn social-buttons__btn--instagram"
      >
        <InstagramIcon />
        <span>{SOCIAL.instagramHandle}</span>
      </a>
      <a
        href={SOCIAL.line}
        target="_blank"
        rel="noopener noreferrer"
        className="social-buttons__btn social-buttons__btn--line"
      >
        <LineIcon />
        <span>{SOCIAL.lineHandle}</span>
      </a>
    </div>
  )
}
