import { PROJECTS } from '../data/site'
import useReveal from '../hooks/useReveal'

function ProjectCard({ project, large = false }) {
  return (
    <article className={`project-card ${large ? 'project-card--featured' : ''}`}>
      <a href={project.link} className="project-card__link">
        <div className="project-card__media">
          <img src={project.image} alt={project.title} loading="lazy" />
        </div>
        <div className="project-card__body">
          <div className="project-card__meta">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__desc">{project.desc}</p>
          <ul className="project-card__tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <span className="link-arrow project-card__cta">View project</span>
        </div>
      </a>
    </article>
  )
}

export default function Projects() {
  const ref = useReveal()
  const featured = PROJECTS.find((p) => p.featured)
  const rest = PROJECTS.filter((p) => !p.featured)

  return (
    <section id="work" className="work section section--dark">
      <div className="section-inner">
        <div ref={ref} className="reveal">
          <div className="work__header">
            <p className="section-eyebrow section-eyebrow--light">Work</p>
            <h2 className="section-title section-title--light">Selected projects.</h2>
            <p className="work__desc">
              A collection of websites and interfaces I&apos;ve designed and built —
              from brand sites to product landing pages.
            </p>
          </div>

          {featured && <ProjectCard project={featured} large />}

          <div className="work__grid">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
