import {
  ButtonLink,
  Eyebrow,
  PageHero,
  PageMeta,
} from "../components/SiteLayout"
import { services } from "../siteData"

const serviceIds = [
  "general-building",
  "civil-works",
  "turnkey-projects",
  "project-management",
  "drywall-ceilings",
  "factory-maintenance",
]

export default function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Construction & Built-Environment Services | LSO Group"
        description="Explore LSO Group services: general building, construction and civil works, turnkey projects, project management, drywall and ceilings, and factory maintenance."
      />

      <PageHero
        eyebrow="LSO Group Services"
        title="Construction Capability Across the Project Lifecycle"
        intro="Building, civil works, project coordination, specialised interiors and maintenance within one service offering."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&h=900&fit=crop&auto=format"
      />

      <section className="section" aria-labelledby="services-intro-heading">
        <div className="container split-layout split-layout--top services-intro">
          <div className="section-copy">
            <Eyebrow>What We Deliver</Eyebrow>
            <h2 id="services-intro-heading">
              Six service areas, one clear point of contact
            </h2>
          </div>
          <div className="section-copy section-copy--smaller">
            <p>
              LSO Group provides services for new construction, civil works,
              project coordination, interior installations and the ongoing needs
              of existing facilities.
            </p>
            <p>
              The right service mix depends on the scope, location, project
              stage and operating environment. Share those details with us and
              we can start the conversation around your requirements.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section section--tint"
        id="all-services"
        aria-label="All LSO Group services"
      >
        <div className="container service-detail-grid">
          {services.map((service, index) => (
            <article
              className="service-detail"
              id={serviceIds[index]}
              key={service.title}
            >
              <div className="service-detail__number">{service.number}</div>
              <div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <a href={`/contact#quote`}>
                  Discuss this service <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section service-connection"
        aria-labelledby="connected-heading"
      >
        <div className="container split-layout">
          <div className="image-frame image-frame--wide">
            <img
              alt="Construction planning materials and project drawings"
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1100&h=850&fit=crop&auto=format"
            />
          </div>
          <div className="section-copy">
            <Eyebrow>Connected Capability</Eyebrow>
            <h2 id="connected-heading">
              Match the service to the project requirement
            </h2>
            <p>
              A project may need a single specialised service or a coordinated
              combination of building, civil, management, interiors and
              maintenance capability.
            </p>
            <p>
              LSO Group starts with the project brief so the conversation
              remains grounded in the actual scope and delivery environment.
            </p>
            <ButtonLink href="/contact#quote">Request a Quote</ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
