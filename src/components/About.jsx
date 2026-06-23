import { PROFILE } from '../data/site'
import useReveal from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="about section">
      <div className="section-inner">
        <div ref={ref} className="about__layout reveal">
          <div className="about__intro">
            <p className="section-eyebrow">About</p>
            <h2 className="section-title">
              Designing and building<br />for the web.
            </h2>
          </div>

          <div className="about__body">
            {PROFILE.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="about__text">{paragraph}</p>
            ))}

            <div className="about__skills">
              <p className="about__skills-label">Tools &amp; focus areas</p>
              <ul className="about__skills-list">
                {PROFILE.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
