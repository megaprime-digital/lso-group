import QuoteForm from "../components/QuoteForm"
import { Eyebrow, PageHero, PageMeta } from "../components/SiteLayout"
import { company } from "../siteData"

export default function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact LSO Group | Request a Construction Quote"
        description="Contact LSO Group about construction, civil works, project management, interiors or factory maintenance requirements in South Africa."
      />

      <PageHero
        eyebrow="Contact LSO Group"
        title="Start With Your Project Brief"
        intro="Tell us where the project is, what you need and when you would like the work to begin."
        image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1800&h=900&fit=crop&auto=format"
      />

      <section
        className="section contact-section"
        aria-labelledby="contact-heading"
      >
        <div className="container contact-layout">
          <div>
            <div className="section-copy">
              <Eyebrow>Get in Touch</Eyebrow>
              <h2 id="contact-heading">Contact details</h2>
              <p>
                Use the direct details below or prepare an email enquiry with
                the project form.
              </p>
            </div>

            <address className="contact-details">
              <div>
                <span>Email</span>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
              <div>
                <span>Phone</span>
                <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
              </div>
              <div>
                <span>Office</span>
                <p>
                  {company.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
              </div>
            </address>

            <div className="project-brief-card">
              <h3>Useful details to include</h3>
              <ul>
                <li>Project location and site type</li>
                <li>Required service or scope</li>
                <li>Preferred timing</li>
                <li>Any operational or access constraints</li>
              </ul>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>

      <section
        className="coverage-section coverage-section--compact"
        aria-labelledby="contact-coverage-heading"
      >
        <div className="container coverage-grid">
          <div>
            <Eyebrow light>Project Coverage</Eyebrow>
            <h2 id="contact-coverage-heading">
              Enquiries from across South Africa
            </h2>
            <p>
              LSO Group operates nationally, with a stronger presence in
              Gauteng, KwaZulu-Natal, Mpumalanga and the Free State.
            </p>
          </div>
          <div className="province-list">
            {company.strongerPresence.map((province) => (
              <span key={province}>{province}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
