import type { Project } from "../siteData"

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project
  featured?: boolean
}) {
  return (
    <article
      className={`project-card${featured ? " project-card--featured" : ""}`}
    >
      <img src={project.image} alt="Placeholder construction project imagery" />
      <div className="project-card__overlay" />
      <div className="project-card__content">
        <span className="placeholder-label">
          Demo project · replace before launch
        </span>
        <h3>{project.title}</h3>
        <p>{project.location}</p>
        <div className="project-card__services">
          {project.services.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
        <a href={`/projects/${project.slug}`}>
          View project example <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}
