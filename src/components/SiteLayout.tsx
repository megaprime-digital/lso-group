import { useEffect, useState, type ReactNode } from "react"
const lsoGroupLogo = "data:image/png;base64,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"
import { company, navigation } from "../siteData"

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: "primary" | "secondary" | "text"
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <a className={`button-link button-link--${variant}`} href={href}>
      <span>{children}</span>
      {variant !== "text" && <span aria-hidden="true">→</span>}
    </a>
  )
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode
  light?: boolean
}) {
  return (
    <p className={`eyebrow${light ? " eyebrow--light" : ""}`}>{children}</p>
  )
}

export function PageMeta({
  title,
  description,
}: {
  title: string
  description: string
}) {
  useEffect(() => {
    document.title = title
    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    if (!meta) {
      meta = document.createElement("meta")
      meta.name = "description"
      document.head.appendChild(meta)
    }
    meta.content = description
  }, [title, description])

  return null
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string
  title: string
  intro: string
  image: string
}) {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="page-hero__overlay" />
      <div className="container page-hero__content">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  )
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`brand${light ? " brand--light" : ""}`}
      href="/"
      aria-label="LSO Group home"
    >
      <img
        className="brand__logo"
        src={lsoGroupLogo}
        alt="LSO Group (Pty) Ltd"
        width="384"
        height="176"
      />
    </a>
  )
}

export function SiteHeader({ currentPath }: { currentPath: string }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => setMenuOpen(false), [currentPath])

  return (
    <header className="site-header">
      <nav
        className="container site-header__inner"
        aria-label="Primary navigation"
      >
        <Brand />

        <div className="site-header__links">
          {navigation.map((item) => {
            const active =
              item.href === "/projects"
                ? currentPath.startsWith("/projects")
                : item.href === currentPath
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <a className="header-quote" href="/contact#quote">
          Request a Quote
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-navigation"
          aria-label="Mobile navigation"
        >
          <div className="container">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={
                  item.href === "/projects"
                    ? currentPath.startsWith("/projects")
                      ? "page"
                      : undefined
                    : item.href === currentPath
                      ? "page"
                      : undefined
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Brand light />
          <p>
            A South African construction and built-environment company
            delivering building, civil works, project management and maintenance
            services.
          </p>
        </div>

        <div>
          <h2>Navigate</h2>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div>
          <h2>Services</h2>
          <a href="/services#general-building">General Building</a>
          <a href="/services#civil-works">Construction & Civil Works</a>
          <a href="/services#turnkey-projects">Turnkey Projects</a>
          <a href="/services#all-services">View all services</a>
        </div>

        <div>
          <h2>Contact</h2>
          <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <p>Sandown, Sandton</p>
          <p>South Africa</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {company.legalName}. All rights reserved.
        </p>
        <p>Enterprise number {company.enterpriseNumber}</p>
      </div>
    </footer>
  )
}

export function SiteLayout({
  currentPath,
  children,
}: {
  currentPath: string
  children: ReactNode
}) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader currentPath={currentPath} />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  )
}
