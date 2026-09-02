import { ButtonLink, Eyebrow, PageMeta } from "../components/SiteLayout"

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <PageMeta
        title="Page Not Found | LSO Group"
        description="The requested LSO Group page could not be found."
      />
      <div className="container">
        <Eyebrow>404 · Page Not Found</Eyebrow>
        <h1>This page is not available.</h1>
        <p>
          Return to the LSO Group homepage or explore our construction and
          built-environment services.
        </p>
        <div className="button-row">
          <ButtonLink href="/">Return Home</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            Explore Services
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
