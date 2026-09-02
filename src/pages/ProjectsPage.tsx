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
        description="Explore selected LSO Group project galleries across modular construction, residential renovation and industrial facility work."
      />

      <PageHero
        eyebrow="Our Work"
        title="Selected Projects"
        intro="Browse a focused selection of LSO Group project galleries. Select an image to view related work from the same project."
        image="https://raw.githubusercontent.com/megaprime-digital/LSO-Projects/main/images/projects/2.jpeg"
      />

      <section className="section" aria-labelledby="project-list-heading">
        <div className="container">
          <div className="section-intro">
            <Eyebrow>Project Portfolio</Eyebrow>
            <h2 id="project-list-heading">Selected project galleries</h2>
            <p>
              Each gallery groups related project photography together, making
              it easy to explore the work in context.
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
