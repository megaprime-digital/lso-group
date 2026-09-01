import { ButtonLink, Eyebrow, PageMeta } from "../components/SiteLayout"
import { audiences, company, services } from "../siteData"

export default function HomePage() {
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
            <Eyebrow>About LSO Group & Company Capability</Eyebrow>
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

      <section className="coverage-section" aria-labelledby="coverage-heading">
        <div className="container coverage-grid">
          <div>
            <Eyebrow light>Where We Work</Eyebrow>
            <h2 id="coverage-heading">Operating across South Africa</h2>
            <p>
              LSO Group works across all South African provinces, with a
              stronger presence in Gauteng, KwaZulu-Natal, Mpumalanga and the
              Free State.
            </p>
          </div>
          <div
            className="province-list"
            aria-label="Regions with a stronger LSO Group presence"
          >
            {company.strongerPresence.map((province) => (
              <span key={province}>{province}</span>
            ))}
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
