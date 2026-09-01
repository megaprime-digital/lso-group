import {
  ButtonLink,
  Eyebrow,
  PageHero,
  PageMeta,
} from "../components/SiteLayout"
import { audiences, company, services } from "../siteData"

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About LSO Group | South African Construction Company"
        description="Learn about LSO Group, a South African construction and built-environment company established in 2015."
      />

      <PageHero
        eyebrow="About LSO Group"
        title="A Construction Partner Built Around Delivery"
        intro="Established in 2015, LSO Group supports public-sector, commercial, industrial and residential projects across South Africa."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&h=900&fit=crop&auto=format"
      />

      <section className="section" aria-labelledby="company-heading">
        <div className="container split-layout split-layout--top">
          <div className="section-copy">
            <Eyebrow>Our Company</Eyebrow>
            <h2 id="company-heading">
              Professional built-environment capability, grounded in South
              Africa
            </h2>
            <p>
              LSO Group is a South African construction and built-environment
              company established in 2015. We provide professional construction,
              civil works, project management and maintenance services to
              commercial, industrial and public-sector clients across South
              Africa.
            </p>
            <p>
              Our clients include property developers, private companies,
              government departments, municipalities, SOEs, industrial and
              factory clients, and homeowners.
            </p>
          </div>

          <aside
            className="identity-panel"
            aria-label="LSO Group company facts"
          >
            <div>
              <span>Legal name</span>
              <strong>{company.legalName}</strong>
            </div>
            <div>
              <span>Enterprise number</span>
              <strong>{company.enterpriseNumber}</strong>
            </div>
            <div>
              <span>Established</span>
              <strong>{company.established}</strong>
            </div>
            <div>
              <span>Operating coverage</span>
              <strong>All South African provinces</strong>
            </div>
          </aside>
        </div>
      </section>

      <section
        className="section section--tint"
        aria-labelledby="clients-heading"
      >
        <div className="container">
          <div className="section-intro">
            <Eyebrow>Clients & Environments</Eyebrow>
            <h2 id="clients-heading">Who we work with</h2>
            <p>
              Our service offering is relevant across public, commercial,
              industrial and residential environments.
            </p>
          </div>
          <div className="audience-grid audience-grid--cards">
            {audiences.map((audience, index) => (
              <article key={audience}>
                <span>0{index + 1}</span>
                <h3>{audience}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="capability-heading">
        <div className="container split-layout split-layout--top">
          <div className="section-copy">
            <Eyebrow>Company Capability</Eyebrow>
            <h2 id="capability-heading">
              Connected services for the built environment
            </h2>
            <p>
              LSO Group’s offering spans building and civil works, coordinated
              turnkey delivery, project management, interior installations and
              ongoing factory maintenance and upgrades.
            </p>
            <ButtonLink href="/services" variant="secondary">
              Explore Our Services
            </ButtonLink>
          </div>
          <ol className="capability-list">
            {services.map((service) => (
              <li key={service.title}>
                <span>{service.number}</span>
                <strong>{service.title}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="coverage-section"
        aria-labelledby="about-coverage-heading"
      >
        <div className="container coverage-grid">
          <div>
            <Eyebrow light>National Coverage</Eyebrow>
            <h2 id="about-coverage-heading">Across South Africa</h2>
            <p>
              LSO Group operates across all nine provinces. Its stronger
              presence is currently in Gauteng, KwaZulu-Natal, Mpumalanga and
              the Free State.
            </p>
          </div>
          <div className="province-list">
            {company.strongerPresence.map((province) => (
              <span key={province}>{province}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta__inner">
          <div>
            <Eyebrow>Work With LSO</Eyebrow>
            <h2>Looking for a construction and project delivery partner?</h2>
          </div>
          <div>
            <p>
              Start with your project location, requirements and preferred
              timing.
            </p>
            <ButtonLink href="/contact#quote">Request a Quote</ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
