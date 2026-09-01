import { useEffect, useState, type ReactNode } from "react"
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
      <span className="brand__mark">LSO</span>
      <span>
        <strong>LSO Group</strong>
        <small>Built Environment</small>
      </span>
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
