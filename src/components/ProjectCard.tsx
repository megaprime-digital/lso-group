import ProjectImageGallery, {
  getProjectImageCount,
} from "./ProjectImageGallery"
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
      <ProjectImageGallery project={project} display="cover" />
      <div className="project-card__overlay" />
      <div className="project-card__content">
        {project.placeholder && (
          <span className="placeholder-label">
            Demo project · replace before launch
          </span>
        )}
        <h3>{project.title}</h3>
        <p>{project.category}</p>
        <p className="project-card__image-count">
          {getProjectImageCount(project)} related images
        </p>
        <div className="project-card__services">
          {project.services.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
        <a href={`/projects/${project.slug}`}>
          View project gallery <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}
