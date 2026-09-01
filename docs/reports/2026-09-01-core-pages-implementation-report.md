# LSO Group Core Pages & Homepage Refinement — Implementation Report

**Repository:** `megaprime-digital/lso-group`  
**Branch:** `feat/core-pages-and-homepage-refinement`  
**Base:** `main` at `627511a4c9a4237471a712c497eaba41e1cadad3`  
**Date:** 1 September 2026  
**Status:** Implemented on a feature branch; not merged to `main`

## Executive summary

The single-page Figma Make prototype was converted into a small multi-page website structure with dedicated About Us, Services and Contact pages. The homepage hero was shortened, the global navigation was simplified, shared company/service/contact data was centralised, and unsupported or incomplete homepage material was removed from the published IA.

The implementation follows the evidence gates in the existing LSO homepage IA. The newly requested project showcase uses conspicuous dummy-data labels on the index and detail pages so that examples cannot be mistaken for verified company work. Placeholder credentials, fabricated insights, response-time promises and broken company-profile downloads remain excluded.

## Repository audit findings

Before implementation, the repository contained:

- one 54 KB `src/App.tsx` component containing the full homepage, navigation, footer and enquiry form;
- anchor-only navigation with no dedicated page routes;
- example project names, locations and outcomes that were not verified project records;
- placeholder credentials and an inactive company-profile download;
- example insights/articles presented as though published;
- an email address, office hours and one-business-day response promise that were not supported by the canonical project context;
- a mobile header where the primary conversion action was available only after opening the menu.

## Planning and two refinement passes

### Plan v1

The initial plan added the three routes, refactored shared UI, shortened the hero, updated navigation, created page-specific content, and added build/accessibility/SEO verification.

### Refinement pass 1 — evidence and IA

The first refinement compared the proposed implementation with the canonical homepage information architecture and project sitemap. It changed the plan by:

- initially withholding Projects, Industries, Capabilities and Insights from global navigation until their publication gates were met; Projects was subsequently added at the owner's direction using explicitly labelled dummy data;
- removing invented project proof, unverified delivery-process wording, placeholder credentials and fabricated editorial content from the homepage;
- defining a compact public IA, later expanded to `Home | About Us | Services | Our Work | Contact`, with a persistent `Request a Quote` CTA;
- limiting page copy to verified company identity, six supported services, confirmed audiences and confirmed operating coverage;
- replacing the fake form-success interaction with an email-client handoff and direct contact fallbacks.

### Refinement pass 2 — implementation risk and verification

The second refinement:

- avoided introducing a routing dependency into the Figma Make/Vite scaffold;
- centralised shared facts before building pages to prevent content drift;
- required direct-path production-preview checks for every route;
- added an explicit not-found state;
- preserved a mobile-visible quote action;
- defined launch dependencies separately from completed code.

## Information architecture implemented

### Global navigation

1. Home — `/`
2. About Us — `/about-us`
3. Services — `/services`
4. Our Work — `/projects`
5. Contact — `/contact`
6. Primary CTA — `/contact#quote`

### Homepage

1. Short hero and primary conversion
2. About LSO Group and company capability
3. Six-service overview
4. Confirmed audience groups
5. Compliance & Credentials
6. Selected project examples
7. One-row partner-logo carousel
8. Request a Quote conversion block

The project section appears immediately before Partners. It presents three selected dummy examples and links to the Our Work index and project-detail templates. Every project card and page carries a visible `Demo project · replace before launch` warning; these records are layout content, not claims about completed LSO work.

The former “Where We Work” / “LSO Group at a Glance” section now follows the approved **Compliance & Credentials** reference layout. The left column contains the “Capability You Can Rely On” narrative and a clearly disabled company-profile download action pending the approved PDF. The right column uses a two-column, three-row credential grid for B-BBEE Level 1, CIDB Grade 7 GB, company registration number, established year, all-nine-province coverage and the four-province stronger-presence summary.

The Partners section uses six clearly labelled dummy logo placeholders duplicated for a continuous one-row carousel. Animation pauses on hover and is disabled in reduced-motion mode. No organisation names or relationships are implied by the placeholders.

### Our Work

1. Our Work page hero and dummy-content notice
2. Selected project grid
3. Individual project-detail routes
4. Project overview, placeholder facts and image gallery
5. Quote CTA

The three dummy project routes are:

- `/projects/commercial-building-example`
- `/projects/industrial-upgrade-example`
- `/projects/public-sector-refurbishment-example`

### About Us

1. Page hero and company positioning
2. Company overview
3. Registered identity and operating facts
4. Confirmed client/audience groups
5. Company capability summary
6. National coverage
7. Quote CTA

### Services

1. Page hero and services introduction
2. Six service descriptions
3. Connected-capability explanation
4. Service-level enquiry links and quote CTA

The six service areas are:

- General Building
- Construction & Civil Works
- Turnkey Projects
- Project Management
- Drywall & Ceiling Installations
- Factory Maintenance & Upgrades

### Contact

1. Page hero
2. Direct phone, email and office details
3. Project-brief checklist
4. Validated enquiry form that prepares an email for the visitor to review and send
5. National coverage reminder

## Homepage hero refinement

The former multi-line hero and long supporting paragraph were replaced with:

- **Eyebrow:** `Established 2015 · South Africa`
- **Headline:** `Construction Built Around Delivery.`
- **Support:** `Construction, civil works, project management and maintenance across South Africa.`
- **Primary CTA:** `Request a Quote`
- **Secondary CTA:** `Explore Our Services`

## Technical implementation

- Added a lightweight path resolver for `/`, `/about-us`, `/services`, `/projects`, `/projects/:slug` and `/contact`.
- Added a not-found page for unknown paths.
- Extracted shared layout, header, footer, page hero, metadata and button components.
- Centralised company facts, navigation, audiences and service content in `src/siteData.ts`.
- Centralised dummy project records in `src/siteData.ts` and added reusable project-card and project-detail components.
- Moved the enquiry interaction into a reusable accessible form component.
- Added page-specific document titles and meta descriptions.
- Updated the HTML language to `en-ZA` and added default metadata/theme colour.
- Replaced the former inline-style-heavy implementation with responsive shared CSS.
- Added visible keyboard focus, skip navigation, labelled mobile navigation, active-page states, form labels and reduced-motion handling.
- Kept `Request a Quote` reachable from the mobile header without opening the menu.

## Content and claims corrections

Removed from the public implementation:

- the unapproved Black-owned statement;
- derived experience counters;
- invented project case studies presented as verified work; the later owner-requested dummy records are visibly labelled throughout;
- unverified placeholder CIDB/NHBRC/credential content, replaced only where the owner supplied current values;
- fabricated insight articles and dates;
- unsupported response-time and operating-hours promises;
- broken company-profile downloads, replaced with a clearly disabled pending-upload affordance;
- empty top-level page destinations.

The email address and physical address were corrected and confirmed by the authorised LSO owner on 1 September 2026. The phone number remains sourced from LSO's existing first-party contact page:

- `admin@lsogroup.co.za`
- `+27 71 7740 674`
- `1 Protea Pl, Sandown, Sandton, 2191`

The phone number should still receive final owner confirmation before production launch.

The authorised LSO owner confirmed the following credential values on 1 September 2026:

- B-BBEE status: `Level 1`
- CIDB grading: `Grade 7 GB`

## Verification completed

| Check | Result |
| --- | --- |
| Dependency install with locked versions | PASS |
| TypeScript `tsc --noEmit` | PASS |
| Repository formatter check | PASS |
| Vite production build | PASS |
| Production preview `/` | PASS — HTTP 200 |
| Production preview `/about-us` | PASS — HTTP 200 |
| Production preview `/services` | PASS — HTTP 200 |
| Production preview `/projects` | PASS — HTTP 200 |
| Production preview three project-detail paths | PASS — HTTP 200 |
| Production preview `/contact` | PASS — HTTP 200 |
| Production preview unknown path | PASS — application serves the not-found route |
| Unsupported-claim source scan | PASS for public source files |
| Mobile/responsive implementation review | PASS at CSS/source level |
| Automated screenshot rendering | NOT VERIFIED — Playwright Chromium CDN timed out twice |

Build output at verification time:

- CSS: 29.88 KB (7.13 KB gzip)
- JavaScript: 228.36 KB (68.38 KB gzip)

## Outstanding before production launch

### Business/content decisions

1. Confirm the published phone number with the LSO owner.
2. Replace all three dummy project records and stock images with verified project names, locations, dates, services, scopes, outcomes, approved imagery and publication consent before launch.
3. Validate the real project delivery process before publishing delivery-process wording.
4. Archive current supporting evidence for the published CIDB Grade 7 GB and B-BBEE Level 1, and supply evidence before adding any other accreditation, certification, insurance or compliance claim.
5. Supply and approve the company profile PDF before enabling a download CTA.
6. Replace stock photography with approved LSO project/team photography where available.
7. Replace all dummy partner-logo placeholders with official logo assets and internally confirm each relationship and label before launch.

### Contact, privacy and operations

1. Decide whether quote requests will stay on `/contact` or move to a dedicated route.
2. Implement a production form endpoint, routing/notification process, abuse protection, failure recovery and confirmation state.
3. Approve a privacy notice before the site stores or transmits personal data through a backend form.
4. Define an authorised response expectation only if LSO wants one published.

### SEO, hosting and measurement

1. Confirm the canonical production host and the relationship between the LSO Group identity and `lsoprojects.co.za`.
2. Complete a current-site crawl and approved old-to-new redirect map.
3. Ensure the production host rewrites direct SPA paths to `index.html`.
4. Add canonical tags, XML sitemap/robots rules and structured data after the canonical-host decision.
5. Configure analytics, Search Console and conversion measurement.

### QA limitation

Run final desktop/tablet/mobile screenshot review in CI, Figma Make preview or another environment with an available browser binary. The local Playwright runtime was present, but its Chromium download timed out twice; no visual defect was observed because automated rendering could not start.

## Recommended next release step

Review the draft pull request in Figma Make or a PR preview, confirm contact details and copy, then complete the launch dependencies above before merging to `main` and deploying to production.
