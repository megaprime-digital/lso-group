import { useState, useEffect, useRef } from 'react'

/* ─── Palette (light theme, primary #0067a4) ───────────────────────── */
const C = {
  primary:    '#0067a4',
  hi:         '#005a8e',   /* darker on light — readable hover */
  lo:         '#0089d6',   /* lighter blue — accents, tags */
  ground:     '#f5f8fb',   /* page background */
  g2:         '#ffffff',   /* card / panel white */
  g3:         '#eaf2f9',   /* tinted section background */
  g4:         '#ddeaf5',   /* deeper tint — borders, dividers */
  white:      '#0a1e32',   /* foreground text (dark navy) */
  steel:      '#2d4f6e',   /* body text */
  dim:        '#5a7f9a',   /* muted / captions */
  rule:       'rgba(0,103,164,0.12)',
  ruleHi:     'rgba(0,103,164,0.25)',
}

const slab: React.CSSProperties = { fontFamily: "'Roboto Slab', serif" }

/* ─── Data ─────────────────────────────────────────────────────────── */
const NAV = ['About', 'Services', 'Projects', 'Industries', 'Capabilities', 'Insights', 'Contact']

const SERVICES = [
  { n:'01', title:'General Building',         desc:'Construction and building solutions delivered with attention to quality, programme and client requirements across commercial and residential environments.' },
  { n:'02', title:'Construction & Civil Works',desc:'Building and civil construction capabilities for commercial, industrial and infrastructure projects including groundworks, concrete and structural works.' },
  { n:'03', title:'Turnkey Projects',          desc:'Integrated project delivery from planning through construction and completion — single-point accountability for the full project lifecycle.' },
  { n:'04', title:'Project Management',        desc:'Professional coordination focused on programme, quality, cost and client communication throughout every phase of the build.' },
  { n:'05', title:'Factory Maintenance',       desc:'Maintenance, refurbishment and upgrade solutions designed around operational requirements — minimising disruption to live facilities.' },
  { n:'06', title:'Drywall & Ceilings',        desc:'Professional interior construction and finishing solutions including partition systems, suspended ceilings and fit-out works.' },
]

const INDUSTRIES = [
  { label:'Commercial',           img:'https://images.unsplash.com/photo-1686947078751-cc721eb86b9e?w=600&h=400&fit=crop&auto=format' },
  { label:'Industrial',           img:'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=600&h=400&fit=crop&auto=format' },
  { label:'Government & Public',  img:'https://images.unsplash.com/photo-1638739415392-b4db2a40e0a8?w=600&h=400&fit=crop&auto=format' },
  { label:'Infrastructure',       img:'https://images.unsplash.com/photo-1671917058078-a1c6fa23f137?w=600&h=400&fit=crop&auto=format' },
  { label:'Corporate Facilities', img:'https://images.unsplash.com/photo-1674252281682-2eec258cfa30?w=600&h=400&fit=crop&auto=format' },
  { label:'Manufacturing',        img:'https://images.unsplash.com/photo-1720036236697-018370867320?w=600&h=400&fit=crop&auto=format' },
]

const PROJECTS = [
  {
    img:  'https://images.unsplash.com/photo-1700469919563-ef267d459da5?w=900&h=620&fit=crop&auto=format',
    name: 'Commercial Office Development',
    location: 'Johannesburg, Gauteng',
    sector: 'Commercial',
    services: 'General Building · Project Management',
    desc: 'Construction and delivery of a multi-storey commercial office development, managing programme and quality from foundation to handover.',
    wide: true,
  },
  {
    img:  'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=700&h=500&fit=crop&auto=format',
    name: 'Industrial Facility Upgrade',
    location: 'Ekurhuleni, Gauteng',
    sector: 'Industrial',
    services: 'Factory Maintenance · Civil Works',
    desc: 'Refurbishment and upgrade works delivered within an operational industrial environment with minimal production disruption.',
    wide: false,
  },
  {
    img:  'https://images.unsplash.com/photo-1707410148802-fe08fe956398?w=700&h=500&fit=crop&auto=format',
    name: 'Turnkey Construction Project',
    location: 'Pretoria, Gauteng',
    sector: 'Mixed-Use',
    services: 'Turnkey · Civil Works · Drywall & Ceilings',
    desc: 'Full turnkey delivery including planning, construction and interior fit-out on a defined programme and budget.',
    wide: false,
  },
]

const WHY = [
  { title:'Project Delivery',          body:'Focused on delivering projects safely, professionally and according to agreed requirements — on programme, on budget.' },
  { title:'Integrated Capability',     body:'Construction, civil works, project management and maintenance under one organisation. No sub-contractor confusion.' },
  { title:'Quality & Accountability',  body:'A delivery-focused approach with clear responsibility throughout the project lifecycle and formal close-out processes.' },
  { title:'Client-Centred Approach',   body:'Solutions built around the client\'s operational, technical and commercial requirements — not a one-size approach.' },
  { title:'Built Environment Expertise', body:'Experience across construction, infrastructure, commercial and industrial environments built over more than a decade.' },
  { title:'South African Footprint',   body:'A proudly 100% Black-owned business rooted in South Africa, delivering projects across Gauteng and beyond.' },
]

const PROCESS = [
  { step:'01', title:'Understand', body:'Understand the client\'s requirements, project objectives and constraints before any commitment is made.' },
  { step:'02', title:'Plan',       body:'Develop the delivery approach, programme, resourcing and risk plan with the client.' },
  { step:'03', title:'Deliver',    body:'Execute construction and project activities with structured site management and quality control.' },
  { step:'04', title:'Manage',     body:'Control quality, coordination, safety, programme and client communication throughout.' },
  { step:'05', title:'Complete',   body:'Formal handover, project close-out and ongoing support where applicable.' },
]

const CREDENTIALS = [
  { label:'B-BBEE Status',        value:'100% Black-Owned',       note:'' },
  { label:'CIDB Registration',    value:'[Placeholder]',          note:'Confirm grade with LSO' },
  { label:'Company Registration', value:'Registered Entity',      note:'RSA registered company' },
  { label:'Health & Safety',      value:'Compliance Programme',   note:'Site H&S in place' },
  { label:'NHBRC',                value:'[Placeholder]',          note:'Confirm registration' },
  { label:'Insurance',            value:'Professional Cover',     note:'Public liability & works' },
]

const INSIGHTS = [
  {
    img:    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop&auto=format',
    cat:    'Construction',
    title:  'How to Prepare for a Commercial Construction Project',
    date:   'August 2026',
    excerpt:'Understanding the planning, design and procurement stages before breaking ground can save significant time and cost on commercial builds.',
  },
  {
    img:    'https://images.unsplash.com/photo-1608303588026-884930af2559?w=600&h=400&fit=crop&auto=format',
    cat:    'Project Management',
    title:  'What Is Turnkey Construction and When Should You Use It?',
    date:   'July 2026',
    excerpt:'Turnkey delivery places full project accountability with one partner — from concept and design through to construction and handover.',
  },
  {
    img:    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&auto=format',
    cat:    'Industrial Maintenance',
    title:  'Planning a Factory Upgrade Without Disrupting Operations',
    date:   'June 2026',
    excerpt:'Effective maintenance and upgrade planning requires understanding operational windows, critical systems and acceptable downtime thresholds.',
  },
]

/* ─── Utility ──────────────────────────────────────────────────────── */
function Eyebrow({ text }: { text: string }) {
  return (
    <p style={{ color: C.primary, fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>
      {text}
    </p>
  )
}

function Btn({
  href, label, variant = 'solid', small = false,
}: { href: string; label: string; variant?: 'solid' | 'outline' | 'ghost'; small?: boolean }) {
  const [hov, setHov] = useState(false)
  const base: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none',
    fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
    fontSize: small ? 11 : 13, padding: small ? '8px 18px' : '13px 28px',
    transition: 'all 0.2s', cursor: 'pointer', fontFamily: "'Work Sans', sans-serif",
    border: '2px solid transparent',
  }
  const styles: Record<string, React.CSSProperties> = {
    solid:   { ...base, backgroundColor: hov ? C.hi : C.primary, color: C.white, borderColor: hov ? C.hi : C.primary },
    outline: { ...base, backgroundColor: 'transparent', color: hov ? C.hi : C.steel, borderColor: hov ? C.hi : C.ruleHi },
    ghost:   { ...base, backgroundColor: 'transparent', color: hov ? C.hi : C.dim, borderColor: 'transparent', padding: small ? '8px 0' : '13px 0' },
  }
  return (
    <a href={href} style={styles[variant]}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {label}
      {variant !== 'ghost' && <span style={{ fontSize: 16 }}>→</span>}
    </a>
  )
}

/* ─── Main ─────────────────────────────────────────────────────────── */
export default function App() {
  const [scrollY, setScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navSolid = scrollY > 60

  return (
    <div style={{ backgroundColor: C.ground, color: C.white, fontFamily: "'Work Sans', sans-serif", overflowX: 'hidden', minHeight: '100vh' }}>

      {/* ══════════════════════════════════ NAV */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.3s',
        backgroundColor: navSolid ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: navSolid ? 'blur(16px)' : 'none',
        borderBottom: navSolid ? `1px solid ${C.rule}` : '1px solid transparent',
        boxShadow: navSolid ? '0 1px 20px rgba(0,103,164,0.08)' : 'none',
      }}>
        <nav style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div style={{
              ...slab, width: 38, height: 38, backgroundColor: C.primary,
              color: '#fff', fontSize: 11, fontWeight: 800, letterSpacing: '0.05em',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              clipPath: 'polygon(0 0,100% 0,100% 68%,68% 100%,0 100%)',
            }}>LSO</div>
            <div>
              <div style={{ ...slab, fontSize: 16, fontWeight: 700, color: C.white, lineHeight: 1.1 }}>LSO Group</div>
              <div style={{ fontSize: 10, color: C.dim, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Built Environment</div>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex" style={{ listStyle: 'none', margin: 0, padding: 0, gap: 28, alignItems: 'center' }}>
            {NAV.map(l => (
              <li key={l}>
                <NavLink href={`#${l.toLowerCase().replace(/\s+/g, '-')}`} label={l} />
              </li>
            ))}
          </ul>

          <a href="#contact" className="hidden lg:inline-flex" style={{
            padding: '10px 22px', backgroundColor: C.primary, color: C.white,
            fontWeight: 700, fontSize: 12, letterSpacing: '0.07em', textTransform: 'uppercase',
            textDecoration: 'none', transition: 'background 0.2s',
            clipPath: 'polygon(0 0,100% 0,100% 68%,88% 100%,0 100%)',
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = C.hi}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = C.primary}
          >
            Discuss Your Project
          </a>

          {/* Hamburger */}
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: C.white }}>
            <div style={{ width: 22, height: 2, backgroundColor: 'currentColor', marginBottom: 5, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : '' }} />
            <div style={{ width: 22, height: 2, backgroundColor: 'currentColor', marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
            <div style={{ width: 22, height: 2, backgroundColor: 'currentColor', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : '' }} />
          </button>
        </nav>

        {/* Mobile drawer */}
        {menuOpen && (
          <div style={{ backgroundColor: '#fff', borderTop: `1px solid ${C.rule}`, padding: '8px 32px 20px', boxShadow: '0 8px 24px rgba(0,103,164,0.08)' }}>
            {NAV.map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '11px 0', borderBottom: `1px solid ${C.rule}`, color: C.steel, fontSize: 13, fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase', textDecoration: 'none' }}>
                {l}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
              style={{ display: 'block', marginTop: 16, padding: '12px 0', backgroundColor: C.primary, color: '#fff', textAlign: 'center', fontWeight: 700, fontSize: 13, letterSpacing: '0.07em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Discuss Your Project
            </a>
          </div>
        )}
      </header>

      {/* ══════════════════════════════════ HERO */}
      <section ref={heroRef} id="home" style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'flex-end', paddingBottom: 80,
        backgroundImage: "url('https://images.unsplash.com/photo-1700469919563-ef267d459da5?w=1800&h=1100&fit=crop&auto=format')",
        backgroundSize: 'cover', backgroundPosition: 'center 20%',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(4,14,22,0.97) 35%, rgba(4,14,22,0.75) 60%, rgba(4,14,22,0.35) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4,14,22,1) 0%, transparent 40%)' }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: `linear-gradient(180deg, ${C.hi} 0%, ${C.lo} 100%)` }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', padding: '0 32px', paddingTop: 140, width: '100%' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 28,
            padding: '6px 16px', border: '1px solid rgba(255,255,255,0.35)', backgroundColor: 'rgba(255,255,255,0.12)',
            color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#fff' }} />
            100% Black-Owned · South African Built-Environment Company · Est. 2015
          </div>

          <h1 style={{ ...slab, fontSize: 'clamp(2.6rem,6.5vw,5.2rem)', fontWeight: 800, lineHeight: 1.0, marginBottom: 28, maxWidth: 780 }}>
            Building Infrastructure.<br />
            <span style={{ color: C.hi }}>Delivering Projects.</span><br />
            Creating Long-Term Value.
          </h1>

          <p style={{ fontSize: 'clamp(15px,1.8vw,18px)', color: C.steel, maxWidth: 580, lineHeight: 1.7, marginBottom: 44, fontWeight: 300 }}>
            LSO Group is a South African built-environment company delivering construction, civil works, project management, turnkey solutions and maintenance services for commercial, industrial and public-sector clients.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Btn href="#contact" label="Discuss Your Project" variant="solid" />
            <Btn href="#services" label="Explore Our Services" variant="outline" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ TRUST STRIP */}
      <div style={{ backgroundColor: C.primary, boxShadow: '0 2px 20px rgba(0,103,164,0.18)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }} className="trust-grid">
            {[
              { v:'10+ Years',        l:'Industry Experience' },
              { v:'Multi-Sector',     l:'Project Delivery' },
              { v:'Nationwide',       l:'South Africa Coverage' },
              { v:'100% Black-Owned', l:'B-BBEE Compliant' },
            ].map((s, i) => (
              <div key={s.l} style={{
                padding: '22px 28px',
                borderRight: i < 3 ? 'rgba(255,255,255,0.2) 1px solid' : 'none',
                display: 'flex', flexDirection: 'column', gap: 4,
              }}>
                <div style={{ ...slab, fontSize: 22, fontWeight: 700, color: '#fff' }}>{s.v}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.72)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════ ABOUT */}
      <section id="about" style={{ padding: '112px 0', backgroundColor: C.g2 }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="two-col">
          <div>
            <Eyebrow text="About LSO Group" />
            <h2 style={{ ...slab, fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: 24 }}>
              A Construction Partner Built Around Delivery
            </h2>
            <p style={{ color: C.steel, lineHeight: 1.8, fontSize: 15, marginBottom: 20, fontWeight: 300 }}>
              LSO Group is a South African construction and built-environment company established in 2015. We provide professional construction, civil works, project management and maintenance services to commercial, industrial and public-sector clients across South Africa.
            </p>
            <p style={{ color: C.dim, lineHeight: 1.8, fontSize: 14, marginBottom: 36, fontWeight: 300 }}>
              As a 100% Black-owned enterprise, we are committed to professional delivery, quality outcomes and meaningful contribution to the South African built environment. Our clients include property developers, corporate occupiers, government departments, municipalities, SOEs and industrial operators.
            </p>
            <Btn href="#capabilities" label="Our Capabilities" variant="outline" />
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', top: -16, left: -16, right: 16, bottom: 16,
              border: `2px solid ${C.g4}`, zIndex: 0,
            }} />
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=560&fit=crop&auto=format"
              alt="LSO Group construction team on site"
              style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '4/3', position: 'relative', zIndex: 1 }}
            />
            <div style={{
              position: 'absolute', bottom: -20, right: -20, zIndex: 2,
              backgroundColor: C.primary, padding: '18px 24px', textAlign: 'center',
            }}>
              <div style={{ ...slab, fontSize: 28, fontWeight: 800, color: C.white }}>2015</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>Established</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ SERVICES */}
      <section id="services" style={{ padding: '112px 0', backgroundColor: C.g3, borderTop: `1px solid ${C.g4}` }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <Eyebrow text="What We Deliver" />
              <h2 style={{ ...slab, fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, lineHeight: 1.1 }}>Our Capabilities</h2>
            </div>
            <Btn href="#contact" label="Discuss Your Requirements" variant="outline" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, backgroundColor: C.rule }} className="services-grid">
            {SERVICES.map(s => <ServiceCard key={s.n} s={s} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ INDUSTRIES */}
      <section id="industries" style={{ padding: '112px 0', backgroundColor: C.g2 }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ marginBottom: 56 }}>
            <Eyebrow text="Sectors We Serve" />
            <h2 style={{ ...slab, fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, lineHeight: 1.1, maxWidth: 560 }}>
              Built for the Environments That Matter
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }} className="industries-grid">
            {INDUSTRIES.map(ind => <IndustryCard key={ind.label} ind={ind} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ PROJECTS */}
      <section id="projects" style={{ padding: '112px 0', backgroundColor: C.g3, borderTop: `1px solid ${C.g4}` }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <Eyebrow text="Our Work" />
              <h2 style={{ ...slab, fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, lineHeight: 1.1 }}>Selected Projects</h2>
            </div>
            <Btn href="#contact" label="View All Projects" variant="outline" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gridTemplateRows: 'auto auto', gap: 8 }} className="projects-grid">
            {PROJECTS.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ WHY LSO */}
      <section id="capabilities" style={{ padding: '112px 0', backgroundColor: C.g2, borderTop: `1px solid ${C.g4}` }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ marginBottom: 56 }}>
            <Eyebrow text="Our Value Proposition" />
            <h2 style={{ ...slab, fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, lineHeight: 1.1, maxWidth: 480 }}>
              Why Work With LSO Group?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, backgroundColor: C.rule }} className="why-grid">
            {WHY.map((w, i) => <WhyCard key={w.title} w={w} i={i} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ PROCESS */}
      <section style={{ padding: '112px 0', backgroundColor: C.g3, borderTop: `1px solid ${C.g4}` }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }} className="two-col">
            <div>
              <Eyebrow text="How We Work" />
              <h2 style={{ ...slab, fontSize: 'clamp(2rem,4vw,2.75rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: 20 }}>
                From Concept to Completion
              </h2>
              <p style={{ color: C.dim, fontSize: 14, lineHeight: 1.8, fontWeight: 300 }}>
                A structured delivery approach gives our clients confidence that every project is managed professionally from the first engagement to final handover.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {PROCESS.map((p, i) => <ProcessStep key={p.step} p={p} last={i === PROCESS.length - 1} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ CREDENTIALS */}
      <section style={{ padding: '112px 0', backgroundColor: C.g2, borderTop: `1px solid ${C.g4}` }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="two-col">
            <div>
              <Eyebrow text="Compliance & Credentials" />
              <h2 style={{ ...slab, fontSize: 'clamp(2rem,4vw,2.75rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: 20 }}>
                Capability You Can Rely On
              </h2>
              <p style={{ color: C.dim, fontSize: 14, lineHeight: 1.8, fontWeight: 300, marginBottom: 36 }}>
                LSO Group operates with the compliance, insurance and credentials expected of a professional South African construction partner. Items marked as placeholders will be updated as information is confirmed.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <a href="#" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10, padding: '13px 24px',
                  border: `2px solid ${C.primary}`, color: C.white, backgroundColor: C.primary,
                  fontWeight: 700, fontSize: 12, letterSpacing: '0.07em', textTransform: 'uppercase', textDecoration: 'none',
                  transition: 'all 0.2s', alignSelf: 'flex-start',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.hi; (e.currentTarget as HTMLElement).style.borderColor = C.hi }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = C.primary; (e.currentTarget as HTMLElement).style.borderColor = C.primary }}
                >
                  ↓ Download Company Profile
                </a>
                <p style={{ fontSize: 11, color: C.dim }}>Company profile PDF — for procurement and tender submissions</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, backgroundColor: C.rule }}>
              {CREDENTIALS.map(cr => (
                <div key={cr.label} style={{ backgroundColor: C.g3, padding: '24px 22px' }}>
                  <div style={{ fontSize: 10, color: C.dim, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>{cr.label}</div>
                  <div style={{ ...slab, fontSize: 15, fontWeight: 600, color: cr.value.includes('[') ? C.dim : C.white, marginBottom: 4 }}>{cr.value}</div>
                  {cr.note && <div style={{ fontSize: 11, color: C.dim, fontStyle: 'italic' }}>{cr.note}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ INSIGHTS */}
      <section id="insights" style={{ padding: '112px 0', backgroundColor: C.g3, borderTop: `1px solid ${C.g4}` }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <Eyebrow text="Knowledge & Perspectives" />
              <h2 style={{ ...slab, fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, lineHeight: 1.1 }}>LSO Insights</h2>
            </div>
            <Btn href="#insights" label="View All Insights" variant="ghost" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, backgroundColor: C.rule }} className="insights-grid">
            {INSIGHTS.map(a => <InsightCard key={a.title} a={a} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ FINAL CTA */}
      <section style={{
        position: 'relative', padding: '120px 32px', overflow: 'hidden',
        backgroundImage: "url('https://images.unsplash.com/photo-1686947078751-cc721eb86b9e?w=1800&h=700&fit=crop&auto=format')",
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(4,14,22,0.91)' }} />
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 20% 50%, rgba(0,103,164,0.22) 0%, transparent 55%)` }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: `linear-gradient(180deg, ${C.hi}, ${C.lo})` }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <Eyebrow text="Start the Conversation" />
          <h2 style={{ ...slab, fontSize: 'clamp(2.2rem,5.5vw,4rem)', fontWeight: 800, lineHeight: 1.05, marginBottom: 20 }}>
            Have a Project in Mind?<br />
            <span style={{ color: C.hi }}>Let's Build It.</span>
          </h2>
          <p style={{ color: C.steel, fontSize: 16, lineHeight: 1.75, marginBottom: 44, fontWeight: 300 }}>
            Whether you're planning a new development, upgrading an existing facility or looking for a reliable construction partner, speak to LSO Group about your requirements.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Btn href="#contact" label="Discuss Your Project" variant="solid" />
            <Btn href="#" label="Download Company Profile" variant="outline" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ CONTACT */}
      <section id="contact" style={{ padding: '112px 0', backgroundColor: C.g2, borderTop: `1px solid ${C.g4}` }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }} className="two-col">
          <div>
            <Eyebrow text="Get In Touch" />
            <h2 style={{ ...slab, fontSize: 'clamp(2rem,4vw,2.75rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: 24 }}>
              Discuss Your Project
            </h2>
            <p style={{ color: C.dim, lineHeight: 1.8, fontSize: 15, fontWeight: 300, marginBottom: 40 }}>
              Contact LSO Group to discuss your construction, civil works, project management or maintenance requirements. We respond to all enquiries within one business day.
            </p>
            {[
              { label:'Email',   value:'info@lsogroup.co.za' },
              { label:'Website', value:'lsoprojects.co.za' },
              { label:'Region',  value:'Gauteng & Nationwide, South Africa' },
              { label:'Hours',   value:'Monday – Friday, 07:00 – 17:00' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: 20, marginBottom: 18 }}>
                <span style={{ width: 60, flexShrink: 0, fontSize: 10, fontWeight: 700, color: C.hi, letterSpacing: '0.1em', textTransform: 'uppercase', paddingTop: 2 }}>{item.label}</span>
                <span style={{ color: C.steel, fontSize: 15, fontWeight: 300 }}>{item.value}</span>
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ══════════════════════════════════ FOOTER */}
      <footer style={{ backgroundColor: C.white, borderTop: `1px solid ${C.g4}`, padding: '64px 32px 32px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }} className="footer-grid">

            {/* Brand col */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{ ...slab, width: 34, height: 34, backgroundColor: C.primary, color: C.white, fontSize: 10, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(0 0,100% 0,100% 68%,68% 100%,0 100%)' }}>LSO</div>
                <span style={{ ...slab, fontSize: 16, fontWeight: 700, color: C.white }}>LSO Group</span>
              </div>
              <p style={{ color: C.dim, fontSize: 13, lineHeight: 1.8, fontWeight: 300, maxWidth: 280 }}>
                A South African built-environment company delivering construction, civil works, project management and maintenance services since 2015.
              </p>
              <p style={{ color: C.primary, fontSize: 12, marginTop: 16, fontWeight: 600 }}>100% Black-Owned · Est. 2015</p>
            </div>

            {/* Navigation */}
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: C.hi, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Company</div>
              {['About', 'Services', 'Projects', 'Industries', 'Capabilities', 'Insights', 'Contact'].map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} style={{ display: 'block', color: C.dim, fontSize: 13, fontWeight: 300, marginBottom: 10, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = C.steel}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = C.dim}
                >{l}</a>
              ))}
            </div>

            {/* Services */}
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: C.hi, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Services</div>
              {['General Building', 'Civil Works', 'Turnkey Projects', 'Project Management', 'Factory Maintenance', 'Drywall & Ceilings'].map(s => (
                <a key={s} href="#services" style={{ display: 'block', color: C.dim, fontSize: 13, fontWeight: 300, marginBottom: 10, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = C.steel}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = C.dim}
                >{s}</a>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: C.hi, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Contact</div>
              {[
                { l:'Email',   v:'info@lsogroup.co.za' },
                { l:'Website', v:'lsoprojects.co.za' },
                { l:'Region',  v:'Gauteng & Nationwide' },
              ].map(({ l, v }) => (
                <div key={l} style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 10, color: C.lo, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>{l}</div>
                  <div style={{ color: C.dim, fontSize: 13, fontWeight: 300 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${C.rule}`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <p style={{ color: C.dim, fontSize: 12 }}>© {new Date().getFullYear()} LSO Group (Pty) Ltd. All rights reserved.</p>
            <div style={{ display: 'flex', gap: 24 }}>
              {['Privacy Policy', 'Terms of Use', 'POPIA Notice'].map(l => (
                <a key={l} href="#" style={{ color: C.dim, fontSize: 12, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = C.primary}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = C.dim}
                >{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ─── Responsive overrides ─── */}
      <style>{`
        @media (max-width: 1024px) {
          .two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .trust-grid { grid-template-columns: 1fr 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .industries-grid { grid-template-columns: 1fr 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
          .insights-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .trust-grid { grid-template-columns: 1fr !important; }
          .industries-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

/* ─── Sub-components ───────────────────────────────────────────────── */

function NavLink({ href, label }: { href: string; label: string }) {
  const [hov, setHov] = useState(false)
  return (
    <a href={href}
      style={{ color: hov ? C.hi : C.dim, fontSize: 12, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {label}
    </a>
  )
}

function ServiceCard({ s }: { s: typeof SERVICES[0] }) {
  const [hov, setHov] = useState(false)
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ backgroundColor: hov ? C.g4 : C.g2, padding: '36px 30px', transition: 'background-color 0.25s', cursor: 'default', boxShadow: hov ? '0 4px 20px rgba(0,103,164,0.07)' : 'none' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: C.hi, fontFamily: 'monospace', letterSpacing: '0.04em' }}>{s.n}</span>
        <h3 style={{ ...slab, fontSize: 16, fontWeight: 600, color: C.white, margin: 0 }}>{s.title}</h3>
      </div>
      <p style={{ color: C.dim, fontSize: 13, lineHeight: 1.75, fontWeight: 300, marginBottom: 20 }}>{s.desc}</p>
      <a href="#contact" style={{ fontSize: 11, fontWeight: 700, color: hov ? C.hi : C.lo, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s' }}>
        Learn More →
      </a>
    </div>
  )
}

function IndustryCard({ ind }: { ind: typeof INDUSTRIES[0] }) {
  const [hov, setHov] = useState(false)
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3', backgroundColor: C.g3, cursor: 'default' }}>
      <img src={ind.img} alt={ind.label}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s', transform: hov ? 'scale(1.07)' : 'scale(1)' }} />
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(4,14,22,0.90) 0%, rgba(4,14,22,0.25) 60%)`, transition: 'opacity 0.3s', opacity: hov ? 1 : 0.8 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <span style={{ ...slab, fontSize: 15, fontWeight: 600, color: C.white }}>{ind.label}</span>
        {hov && <span style={{ fontSize: 10, color: C.hi, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Explore →</span>}
      </div>
    </div>
  )
}

function ProjectCard({ p, i }: { p: typeof PROJECTS[0]; i: number }) {
  const [hov, setHov] = useState(false)
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ position: 'relative', overflow: 'hidden', backgroundColor: C.g3, gridColumn: i === 0 ? '1' : 'auto', gridRow: i === 0 ? 'span 2' : 'auto' }}>
      <img src={p.img} alt={p.name}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: i === 0 ? 500 : 220, transition: 'transform 0.6s', transform: hov ? 'scale(1.05)' : 'scale(1)' }} />
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(4,14,22,0.95) 0%, rgba(4,14,22,0.2) 60%)`, opacity: hov ? 1 : 0.75, transition: 'opacity 0.3s' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 24px' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: C.hi, letterSpacing: '0.1em', textTransform: 'uppercase', backgroundColor: 'rgba(0,103,164,0.20)', padding: '3px 8px', border: `1px solid ${C.ruleHi}` }}>{p.sector}</span>
        </div>
        <h3 style={{ ...slab, fontSize: i === 0 ? 20 : 15, fontWeight: 700, color: C.white, margin: '0 0 6px' }}>{p.name}</h3>
        <p style={{ fontSize: 11, color: C.steel, margin: '0 0 4px' }}>{p.location}</p>
        {hov && <p style={{ fontSize: 12, color: C.dim, margin: '8px 0 0', lineHeight: 1.6, fontWeight: 300 }}>{p.desc}</p>}
        {hov && <div style={{ marginTop: 12 }}><a href="#" style={{ fontSize: 11, fontWeight: 700, color: C.hi, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}>View Project →</a></div>}
      </div>
    </div>
  )
}

function WhyCard({ w, i }: { w: typeof WHY[0]; i: number }) {
  const [hov, setHov] = useState(false)
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ backgroundColor: hov ? C.g3 : C.g2, padding: '36px 30px', transition: 'background-color 0.25s', cursor: 'default', boxShadow: hov ? '0 4px 20px rgba(0,103,164,0.07)' : 'none' }}>
      <div style={{ display: 'flex', gap: 14 }}>
        <div style={{ width: 3, flexShrink: 0, marginTop: 4, height: hov ? 52 : 28, backgroundColor: C.primary, transition: 'height 0.3s' }} />
        <div>
          <h3 style={{ ...slab, fontSize: 16, fontWeight: 600, color: C.white, margin: '0 0 10px' }}>{w.title}</h3>
          <p style={{ color: C.dim, fontSize: 13, lineHeight: 1.75, fontWeight: 300, margin: 0 }}>{w.body}</p>
        </div>
      </div>
    </div>
  )
}

function ProcessStep({ p, last }: { p: typeof PROCESS[0]; last: boolean }) {
  return (
    <div style={{ display: 'flex', gap: 24, paddingBottom: last ? 0 : 32, position: 'relative' }}>
      {/* Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, backgroundColor: C.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontSize: 11, fontWeight: 800, color: C.white, fontFamily: 'monospace' }}>{p.step}</span>
        </div>
        {!last && <div style={{ width: 1, flex: 1, minHeight: 20, backgroundColor: C.rule, marginTop: 4 }} />}
      </div>
      <div style={{ paddingTop: 8, paddingBottom: last ? 0 : 24 }}>
        <h4 style={{ ...slab, fontSize: 16, fontWeight: 600, color: C.white, margin: '0 0 8px' }}>{p.title}</h4>
        <p style={{ color: C.dim, fontSize: 13, lineHeight: 1.75, fontWeight: 300, margin: 0 }}>{p.body}</p>
      </div>
    </div>
  )
}

function InsightCard({ a }: { a: typeof INSIGHTS[0] }) {
  const [hov, setHov] = useState(false)
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ backgroundColor: C.g2, cursor: 'pointer', transition: 'all 0.25s', boxShadow: hov ? '0 8px 32px rgba(0,103,164,0.10)' : '0 1px 4px rgba(0,0,0,0.05)', transform: hov ? 'translateY(-2px)' : 'none' }}>
      <div style={{ overflow: 'hidden', aspectRatio: '16/9', backgroundColor: C.g3 }}>
        <img src={a.img} alt={a.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s', transform: hov ? 'scale(1.05)' : 'scale(1)' }} />
      </div>
      <div style={{ padding: '24px 24px' }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'center' }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: C.hi, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{a.cat}</span>
          <span style={{ fontSize: 10, color: C.lo }}>·</span>
          <span style={{ fontSize: 11, color: C.lo }}>{a.date}</span>
        </div>
        <h3 style={{ ...slab, fontSize: 15, fontWeight: 600, color: C.white, margin: '0 0 10px', lineHeight: 1.4 }}>{a.title}</h3>
        <p style={{ color: C.dim, fontSize: 13, lineHeight: 1.7, fontWeight: 300, margin: '0 0 16px' }}>{a.excerpt}</p>
        <span style={{ fontSize: 11, fontWeight: 700, color: hov ? C.hi : C.lo, letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s' }}>Read Article →</span>
      </div>
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 40 }}>
        <div style={{ width: 52, height: 52, backgroundColor: C.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.white, fontSize: 22, marginBottom: 20 }}>✓</div>
        <h3 style={{ ...slab, fontSize: 22, fontWeight: 700, marginBottom: 10, color: C.white }}>Enquiry Submitted</h3>
        <p style={{ color: C.dim, fontWeight: 300, fontSize: 14, lineHeight: 1.75 }}>Thank you for contacting LSO Group. A member of our team will respond to your enquiry within one business day.</p>
      </div>
    )
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', backgroundColor: C.g3, border: `1px solid ${C.g4}`,
    color: C.white, padding: '11px 14px', fontSize: 14, outline: 'none',
    fontFamily: "'Work Sans', sans-serif", transition: 'border-color 0.2s',
  }
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: 10, fontWeight: 700, color: C.hi,
    letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 7,
  }
  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = C.primary
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = C.rule
  }

  return (
    <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input required type="text" placeholder="Jane Dube" value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
        </div>
        <div>
          <label style={labelStyle}>Company</label>
          <input type="text" placeholder="Acme (Pty) Ltd" value={form.company}
            onChange={e => setForm({ ...form, company: e.target.value })}
            style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <label style={labelStyle}>Email Address *</label>
          <input required type="email" placeholder="jane@company.co.za" value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
        </div>
        <div>
          <label style={labelStyle}>Phone Number</label>
          <input type="tel" placeholder="+27 11 000 0000" value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Service Required</label>
        <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
          style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }} onFocus={onFocus} onBlur={onBlur}>
          <option value="">Select a service…</option>
          {['General Building', 'Civil Works', 'Turnkey Projects', 'Project Management', 'Factory Maintenance', 'Drywall & Ceilings', 'Not Sure / Multiple'].map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label style={labelStyle}>Project Details *</label>
        <textarea required rows={5} placeholder="Briefly describe your project — location, scope, timeline and any specific requirements…"
          value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
          style={{ ...inputStyle, resize: 'none' }} onFocus={onFocus} onBlur={onBlur} />
      </div>
      <button type="submit" style={{
        padding: '14px 0', backgroundColor: C.primary, color: C.white,
        fontWeight: 700, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
        border: 'none', cursor: 'pointer', fontFamily: "'Work Sans', sans-serif",
        transition: 'background-color 0.2s',
      }}
        onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.backgroundColor = C.hi}
        onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.backgroundColor = C.primary}
      >
        Submit Enquiry
      </button>
      <p style={{ fontSize: 11, color: C.lo, textAlign: 'center' }}>
        Your information is handled in accordance with our Privacy Policy and POPIA obligations.
      </p>
    </form>
  )
}
