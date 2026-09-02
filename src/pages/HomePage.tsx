import { ButtonLink, Eyebrow, PageMeta } from "../components/SiteLayout"
import ProjectCard from "../components/ProjectCard"
import { audiences, company, partnerLogos, services } from "../siteData"
import { projects } from "../siteData"

export default function HomePage() {
  const carouselLogos = [...partnerLogos, ...partnerLogos]

  return (
    <>
      <PageMeta
        title="LSO Group | Construction Built Around Delivery"
        description="LSO Group provides construction, civil works, project management and maintenance services across South Africa."
      />

      <section className="home-hero">
        <div className="home-hero__overlay" />
        <div className="container home-hero__content">
          <Eyebrow>Established 2015 · South Africa</Eyebrow>
          <h1>Construction Built Around Delivery.</h1>
          <p>
            Construction, civil works, project management and maintenance across
            South Africa.
          </p>
          <div className="button-row">
            <ButtonLink href="/contact#quote">Request a Quote</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Explore Our Services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section" id="about" aria-labelledby="about-heading">
        <div className="container split-layout">
          <div className="image-frame">
            <img
              alt="Construction team coordinating work on site"
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1000&h=820&fit=crop&auto=format"
            />
            <div className="image-frame__fact">
              <strong>{company.established}</strong>
              <span>Established</span>
            </div>
          </div>

          <div className="section-copy">
            <Eyebrow>About LSO Group</Eyebrow>
            <h2 id="about-heading">
              A construction partner built around delivery
            </h2>
            <p>
              LSO Group is a South African construction and built-environment
              company established in 2015. We provide construction, civil works,
              project management and maintenance services to commercial,
              industrial and public-sector clients across South Africa.
            </p>
            <p>
              Our work brings building, project coordination, specialised
              interiors and maintenance capability together within one
              organisation.
            </p>
            <dl className="fact-list">
              <div>
                <dt>Registered entity</dt>
                <dd>{company.legalName}</dd>
              </div>
              <div>
                <dt>Enterprise number</dt>
                <dd>{company.enterpriseNumber}</dd>
              </div>
            </dl>
            <ButtonLink href="/about-us" variant="secondary">
              Learn More About LSO
            </ButtonLink>
          </div>
        </div>
      </section>

      <section
        className="section section--tint"
        id="services"
        aria-labelledby="services-heading"
      >
        <div className="container">
          <div className="section-heading-row">
            <div className="section-intro">
              <Eyebrow>What We Deliver</Eyebrow>
              <h2 id="services-heading">
                Core construction and project services
              </h2>
              <p>
                Six connected service areas support new work, project delivery,
                interiors and ongoing maintenance.
              </p>
            </div>
            <ButtonLink href="/services" variant="secondary">
              View All Services
            </ButtonLink>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <a href="/services">
                  Explore service <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="audience-strip" aria-labelledby="audience-heading">
        <div className="container">
          <div className="section-intro section-intro--compact">
            <Eyebrow>Who We Serve</Eyebrow>
            <h2 id="audience-heading">
              Built-environment support for a wide range of clients
            </h2>
          </div>
          <div className="audience-grid">
            {audiences.map((audience, index) => (
              <article key={audience}>
                <span>0{index + 1}</span>
                <h3>{audience}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="compliance-section"
        aria-labelledby="credentials-heading"
      >
        <div className="container compliance-layout">
          <div className="compliance-copy">
            <Eyebrow>Compliance & Credentials</Eyebrow>
            <h2 id="credentials-heading">Capability You Can Rely On</h2>
            <p>
              LSO Group's company registration, B-BBEE status, CIDB grading and
              national operating footprint support procurement and project
              evaluation across South Africa.
            </p>
            <button
              className="profile-download"
              type="button"
              disabled
              aria-describedby="profile-download-note"
            >
              <span aria-hidden="true">↓</span>
              Download Company Profile
            </button>
            <p className="profile-download-note" id="profile-download-note">
              Company profile PDF — pending approved file upload
            </p>
          </div>

          <dl className="compliance-grid">
            <CredentialCard
              label="B-BBEE status"
              value={company.bbbeeLevel}
              note="Owner confirmed"
            />
            <CredentialCard
              label="CIDB registration"
              value={company.cidbGrade}
              note="General Building"
            />
            <CredentialCard
              label="Company registration"
              value="Registered Entity"
              note={company.enterpriseNumber}
            />
            <CredentialCard
              label="Established"
              value={company.established}
              note="Operating since 2015"
            />
            <CredentialCard
              label="National coverage"
              value="All 9 Provinces"
              note="South Africa"
            />
            <CredentialCard
              label="Stronger presence"
              value="4 Provinces"
              note={company.strongerPresence.join(" · ")}
            />
          </dl>
        </div>
      </section>

      <section className="projects-section" aria-labelledby="projects-heading">
        <div className="container">
          <div className="section-heading-row">
            <div className="section-intro">
              <Eyebrow>Our Work</Eyebrow>
              <h2 id="projects-heading">Selected Project Examples</h2>
              <p>
                Dummy project content for layout review. Replace every record,
                image and outcome with approved project evidence before launch.
              </p>
            </div>
            <ButtonLink href="/projects" variant="secondary">
              View Our Work
            </ButtonLink>
          </div>

          <div className="home-project-grid">
            {projects.map((project, index) => (
              <ProjectCard
                project={project}
                featured={index === 0}
                key={project.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="partners-section" aria-labelledby="partners-heading">
        <div className="container partners-heading">
          <div>
            <Eyebrow>Partners</Eyebrow>
            <h2 id="partners-heading">Our Partners</h2>
          </div>
        </div>

        <div className="partner-carousel" aria-label="Partner logos">
          <div className="partner-track" role="list">
            {carouselLogos.map((partner, index) => {
              const duplicate = index >= partnerLogos.length
              return (
                <div
                  className="partner-logo"
                  key={`${partner.name}-${index}`}
                  role={duplicate ? undefined : "listitem"}
                  aria-hidden={duplicate ? true : undefined}
                >
                  <img src={partner.image} alt={`${partner.name} logo`} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta__inner">
          <div>
            <Eyebrow>Start the Conversation</Eyebrow>
            <h2>Planning a construction or maintenance project?</h2>
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

function CredentialCard({
  label,
  value,
  note,
}: {
  label: string
  value: string
  note: string
}) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value}</dd>
      <dd className="compliance-note">{note}</dd>
    </div>
  )
}
