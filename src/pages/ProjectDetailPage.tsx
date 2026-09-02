import { ButtonLink, Eyebrow, PageMeta } from "../components/SiteLayout"
import ProjectImageGallery from "../components/ProjectImageGallery"
import { ButtonLink, Eyebrow, PageMeta } from "../components/SiteLayout"
import type { Project } from "../siteData"

export default function ProjectDetailPage({ project }: { project: Project }) {
  return (
    <>
      <PageMeta
        title={`${project.title} | LSO Group Our Work`}
        description={`Browse LSO Group's ${project.title.toLowerCase()} photo gallery.`}
      />

      <section
        className="project-detail-hero"
        style={{ backgroundImage: `url('${project.image}')` }}
      >
        <div className="project-detail-hero__overlay" />
        <div className="container project-detail-hero__content">
          {project.placeholder && (
            <span className="placeholder-label">
              Demo project · not a published project claim
            </span>
          )}
          <Eyebrow light>Our Work</Eyebrow>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </div>
      </section>

      <section className="section project-detail-section">
        <div className="container project-detail-layout">
          <div className="project-detail-copy">
            <Eyebrow>Project Overview</Eyebrow>
            <h2>Project gallery overview</h2>
            <p>{project.scope}</p>
            <ButtonLink href="/projects" variant="secondary">
              Back to Our Work
            </ButtonLink>
          </div>

          <dl className="project-facts">
            <div>
              <dt>Location</dt>
              <dd>{project.location}</dd>
            </div>
            <div>
              <dt>Sector</dt>
              <dd>{project.sector}</dd>
            </div>
            <div className="project-facts__wide">
              <dt>Services</dt>
              <dd>{project.services.join(" · ")}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="project-gallery" aria-labelledby="gallery-heading">
        <div className="container">
          <div className="section-intro">
            <Eyebrow>Project Gallery</Eyebrow>
            <h2 id="gallery-heading">Related project imagery</h2>
            <p>Select an image to browse the full gallery for this project.</p>
          </div>
          <ProjectImageGallery project={project} display="grid" />
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta__inner">
          <div>
            <Eyebrow>Discuss Your Project</Eyebrow>
            <h2>Looking for support on a similar scope?</h2>
          </div>
          <div>
            <p>
              Send LSO Group your project location, requirements and preferred
              timing.
            </p>
            <ButtonLink href="/contact#quote">Request a Quote</ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
