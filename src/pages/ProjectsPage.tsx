import ProjectCard from "../components/ProjectCard"
import {
  ButtonLink,
  Eyebrow,
  PageHero,
  PageMeta,
} from "../components/SiteLayout"
import { projects } from "../siteData"

export default function ProjectsPage() {
  return (
    <>
      <PageMeta
        title="Our Work | LSO Group Projects"
        description="Explore selected LSO Group project examples across commercial, industrial and public-sector environments."
      />

      <PageHero
        eyebrow="Our Work"
        title="Selected Projects"
        intro="A focused project portfolio will show the environments, services and scopes LSO Group has delivered."
        image="https://images.unsplash.com/photo-1541976590-713941681591?w=1800&h=900&fit=crop&auto=format"
      />

      <section
        className="project-placeholder-notice"
        aria-label="Project content status"
      >
        <div className="container">
          <strong>Demo content</strong>
          <p>
            The projects below use dummy names, images, locations, dates and
            descriptions for layout review. They are not claims about completed
            LSO Group work and must be replaced before launch.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="project-list-heading">
        <div className="container">
          <div className="section-intro">
            <Eyebrow>Project Portfolio</Eyebrow>
            <h2 id="project-list-heading">Selected project examples</h2>
            <p>
              Each record demonstrates the information and imagery that will be
              used once verified project content and publication approval are
              available.
            </p>
          </div>

          <div className="project-index-grid">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta__inner">
          <div>
            <Eyebrow>Start a Project</Eyebrow>
            <h2>Have a construction or maintenance requirement?</h2>
          </div>
          <div>
            <p>Share your location, scope and timing with LSO Group.</p>
            <ButtonLink href="/contact#quote">Request a Quote</ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
