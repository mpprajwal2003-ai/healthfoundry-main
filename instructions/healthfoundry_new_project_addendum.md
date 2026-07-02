# HealthFoundry.ai — New Project Build Addendum
### Updates to the Website Content Plan for a Fresh Astro Project
**Read this alongside: healthfoundry_website_content_plan.md + healthfoundry_visual_design_spec.md**

---

## What the Existing Plan Assumes (and Why It Needs Updating)

The content plan and visual spec were written against the **compiled output** of the existing site. Several references are patch instructions ("fix this broken link," "update this placeholder") that only make sense if you're editing the old codebase. A new project needs those translated into clean build instructions.

This addendum replaces all patch language with fresh build specifications.

---

## 1. Tech Stack — Confirmed & Specified

The existing site confirmed the following. **Carry all of these forward into the new project:**

| Item | Confirmed Value |
|------|----------------|
| Framework | Astro v5 (use latest v5.x) |
| Font | Inter (Google Fonts) — weights 300, 400, 500, 600, 700 |
| Icons | Lucide (already integrated as React components in existing site) |
| UI components | React islands via `@astrojs/react` (used for animated components like MissionStatement) |
| Styling approach | **Hybrid** — Tailwind CSS for layout/utility + scoped CSS for custom components |
| Animation | Intersection Observer API with `reveal`, `reveal-left`, `reveal-scale` CSS classes + `delay-100`, `delay-200`, `delay-300` utilities |
| Analytics | Umami (keep the existing website ID: `42b75c2c-49d3-4a7d-9e27-0f81848e4826`) |
| Theme | Dark — black background, white/neutral-400 text, white accent |

**New project setup command:**
```bash
npm create astro@latest healthfoundry-web -- --template minimal
cd healthfoundry-web
npx astro add react tailwind
npm install lucide-react
```

---

## 2. Design Tokens — Extracted from Existing Site

The existing site uses a dark theme. Define these as CSS custom properties in a global stylesheet (`src/styles/global.css`) so all components reference them consistently:

```css
:root {
  /* Background */
  --bg-primary: #000000;
  --bg-secondary: #0a0a0a;
  --bg-card: rgba(255, 255, 255, 0.04);
  --bg-card-hover: rgba(255, 255, 255, 0.08);

  /* Text */
  --text-primary: #ffffff;
  --text-secondary: #a3a3a3;    /* neutral-400 */
  --text-muted: #525252;        /* neutral-600 */

  /* Accents — white-based (existing site style) */
  --accent-primary: #ffffff;
  --accent-glow: rgba(255, 255, 255, 0.5);

  /* Domain colours — NEW, defined in content plan */
  --domain-cx: #0d9488;         /* teal-600 — Customer Experience */
  --domain-cx-muted: rgba(13, 148, 136, 0.15);
  --domain-finops: #d97706;     /* amber-600 — FinOps */
  --domain-finops-muted: rgba(217, 119, 6, 0.15);
  --domain-grc: #1d4ed8;        /* blue-700 — GRC */
  --domain-grc-muted: rgba(29, 78, 216, 0.15);
  --domain-platform: #ffffff;   /* Platform / Intelligence Fabric */

  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-default: rgba(255, 255, 255, 0.12);

  /* Spacing — container widths */
  --container-max: 1200px;
  --container-padding: 1.5rem;

  /* Typography scale */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
}
```

---

## 3. Project Structure — For New Build

Replace the old site's file references with this clean structure:

```
src/
├── components/
│   ├── layout/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   └── Layout.astro          ← base layout with <head>, nav, footer
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── ProblemStatement.astro
│   │   ├── PlatformOverview.astro
│   │   ├── HowItWorks.astro
│   │   ├── HumanInTheLoop.astro
│   │   ├── OutcomeStats.astro
│   │   ├── Mission.tsx            ← React island (animated)
│   │   ├── Values.astro
│   │   ├── Team.astro
│   │   ├── SecurityTeaser.astro
│   │   └── FooterCTA.astro
│   ├── ui/
│   │   ├── StatCard.astro
│   │   ├── DomainCard.astro
│   │   ├── AgentCard.astro
│   │   ├── TimelineStep.astro
│   │   ├── LayerDiagram.astro
│   │   ├── HITLSpectrum.astro
│   │   └── Button.astro
│   └── diagrams/                  ← SVG diagram components
│       ├── ArchitectureLayers.astro
│       ├── ClaimsTimeline.astro
│       ├── BlueprintCycle.astro
│       ├── IntegrationMap.astro
│       ├── ContinuousVsPeriodic.astro
│       └── PainPoints.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro               ← Homepage
│   ├── platform.astro            ← Intelligence Fabric
│   ├── solutions/
│   │   ├── customer-experience.astro
│   │   ├── finops.astro
│   │   └── governance.astro
│   ├── why-us.astro
│   ├── security.astro
│   ├── company.astro
│   ├── careers.astro
│   ├── blog/
│   │   └── index.astro
│   └── contact.astro
├── styles/
│   ├── global.css               ← CSS custom properties + resets
│   └── animations.css           ← reveal/scroll animation classes
└── assets/
    └── images/
        ├── logo.png
        ├── dashboard-mockup.png
        ├── opd-snapshot.png
        ├── claims-snapshot.png
        ├── grc.png
        ├── rajesh.jpg
        ├── kiran.jpg
        ├── karthik.jpg
        ├── manoj.jpg
        └── Rithesh.jpg
```

---

## 4. Navigation — Clean Spec (Replacing Patch Instructions)

Build the nav fresh with this structure. No empty anchors:

```astro
<!-- Nav links -->
<a href="/platform">Platform</a>

<div class="dropdown">
  <button>Solutions</button>
  <div class="dropdown-menu">
    <a href="/solutions/customer-experience">Customer Experience</a>
    <a href="/solutions/finops">FinOps</a>
    <a href="/solutions/governance">Governance & Risk</a>
  </div>
</div>

<div class="dropdown">
  <button>Company</button>
  <div class="dropdown-menu">
    <a href="/company#mission">Mission</a>
    <a href="/company#values">Values</a>
    <a href="/company#team">Team</a>
    <a href="/why-us">Why Us</a>
  </div>
</div>

<a href="/security">Security</a>
<a href="/blog">Blog</a>
<a href="/careers">Careers</a>
<a href="/contact" class="nav-cta">Book a Call</a>
```

**Mobile nav:** Mirrors the desktop structure. All links fully labelled. No empty `<a>` tags anywhere.

---

## 5. Footer — Clean Spec

```astro
<!-- Column 1: Brand -->
<img src="/images/logo.png" alt="HealthFoundry" />
<p>The Intelligence Fabric for Healthcare Operations.</p>
<p>HealthFoundry Private Limited, Bengaluru</p>

<!-- Column 2: Platform -->
<h4>Platform</h4>
<a href="/platform">Intelligence Fabric</a>
<a href="/solutions/customer-experience">Customer Experience</a>
<a href="/solutions/finops">FinOps</a>
<a href="/solutions/governance">Governance & Risk</a>

<!-- Column 3: Company -->
<h4>Company</h4>
<a href="/company">About Us</a>
<a href="/why-us">Why HealthFoundry</a>
<a href="/security">Security</a>
<a href="/careers">Careers</a>
<a href="/blog">Blog</a>

<!-- Column 4: Connect -->
<h4>Connect</h4>
<a href="/contact">Book a Call</a>
<a href="mailto:hello@healthfoundry.ai">hello@healthfoundry.ai</a>
<a href="https://linkedin.com/company/healthfoundry" target="_blank">LinkedIn</a>
<!-- Only add Twitter/X if handle is confirmed — otherwise omit entirely -->

<!-- Bottom bar -->
<p>© 2026 HealthFoundry Private Limited. All rights reserved.</p>
<a href="/privacy">Privacy Policy</a>
```

---

## 6. Scroll Animation System — Clean Implementation

The existing site uses a `reveal` class system with IntersectionObserver. Implement this cleanly in the new project:

**`src/styles/animations.css`:**
```css
.reveal,
.reveal-left,
.reveal-scale {
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal        { transform: translateY(24px); }
.reveal-left   { transform: translateX(-24px); }
.reveal-scale  { transform: scale(0.95); }

.reveal.visible,
.reveal-left.visible,
.reveal-scale.visible {
  opacity: 1;
  transform: none;
}

.delay-100 { transition-delay: 0.1s; }
.delay-200 { transition-delay: 0.2s; }
.delay-300 { transition-delay: 0.3s; }
```

**`src/scripts/animations.ts`:**
```typescript
export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal-left, .reveal-scale')
    .forEach((el) => observer.observe(el));
}
```

Include in `Layout.astro`:
```astro
<script>
  import { initScrollAnimations } from '../scripts/animations';
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
</script>
```

---

## 7. Umami Analytics — Carry Forward

Include in `Layout.astro` `<head>`:
```html
<script
  defer
  src="https://cloud.umami.is/script.js"
  data-website-id="42b75c2c-49d3-4a7d-9e27-0f81848e4826"
></script>
```

---

## 8. Team Data — Confirmed From Source

These are the confirmed team members, roles, photos, and LinkedIn URLs from the existing site. Use as a data array in the new project:

```typescript
// src/data/team.ts
export const team = [
  {
    name: "Rajesh Arasu",
    role: "Founder, CEO",
    photo: "/images/rajesh.jpg",
    linkedin: "https://www.linkedin.com/in/rajesharasu/"
  },
  {
    name: "Kiran Kirugavalu",
    role: "Founder, Head of Programs and Services",
    photo: "/images/kiran.jpg",
    linkedin: "https://www.linkedin.com/in/kiran-kirugavalu-a872b714/"
  },
  {
    name: "Karthik Srinivasan",
    role: "Founder, Head of Technology and Engineering",
    photo: "/images/karthik.jpg",
    linkedin: "https://www.linkedin.com/in/karthik-srinivasan001/"
  },
  {
    name: "Manoj Kumar Mohan",
    role: "Principal Data Scientist",
    photo: "/images/manoj.jpg",
    linkedin: "https://www.linkedin.com/in/manoj-kumar-mohan-3971037/"
  },
  {
    name: "Rithesh Sreenivasan",
    role: "Principal Data Scientist",
    photo: "/images/Rithesh.jpg",
    linkedin: "https://www.linkedin.com/in/ritheshsreenivasan/"
  }
];
```

---

## 9. Assets to Carry Forward from Old Site

These files exist in the old site and should be copied into `src/assets/images/` of the new project:

| File | Used on |
|------|---------|
| `logo.png` | Nav + Footer (all pages) |
| `favicon.svg` | All pages |
| `dashboard-mockup.png` | Homepage hero |
| `opd-snapshot.png` | Homepage + CX solution hero |
| `claims-snapshot.png` | Homepage + FinOps solution hero |
| `grc.png` | Homepage + GRC solution hero |
| `rajesh.jpg` | Team section (all pages with team) |
| `kiran.jpg` | Team section |
| `karthik.jpg` | Team section |
| `manoj.jpg` | Team section |
| `Rithesh.jpg` | Team section (note capital R) |

**Note:** The `hospital_agentic_ai_marketecture_v3.html` architecture diagram should be converted to an SVG or PNG and added as `platform-architecture.svg` for use on the Platform page.

---

## 10. Pages NOT in the Old Site — Build Fresh

These pages are specified in the content plan but don't exist in the current site at all. Build entirely from the plan:

| Page | Route | Status |
|------|-------|--------|
| Platform / Intelligence Fabric | `/platform` | 🆕 New |
| Customer Experience Solution | `/solutions/customer-experience` | 🆕 New |
| FinOps Solution | `/solutions/finops` | 🆕 New |
| GRC Solution | `/solutions/governance` | 🆕 New |
| Company / About | `/company` | 🆕 New |

---

## 11. Pages That Exist — Build Fresh With New Content

Don't port old HTML. Build each from scratch using the content plan as the spec. The old pages are a reference for what elements existed, not a template:

| Page | Route | Notes |
|------|-------|-------|
| Homepage | `/` | Restructure all sections per plan |
| Why Us | `/why-us` | Major content overhaul |
| Security | `/security` | Keep icon card structure, update copy + fix CTA |
| Contact | `/contact` | Keep form, update surrounding copy |
| Blog | `/blog` | Build index page; no posts yet — add placeholder message |
| Careers | `/careers` | Keep existing structure |

---

## 12. What to Ignore from the Old Codebase

These items from the compiled output should **not** be carried forward:

- `data-astro-cid-*` attributes — these are Astro's compiled scoping hashes, auto-generated in the new build
- `_astro/` folder references in `<link>` tags — Astro handles this automatically
- HTTrack metadata, comments, and redirect tags
- The commented-out testimonials template block (`{content.testimonials.label}`, `{testimonial.quote}`)
- The empty `<a href="contact/index.html"></a>` tags anywhere
- The `backblue.gif` and `fade.gif` HTTrack assets

---

## 13. Claude Code Prompt to Kick Off the Build

Use this as the opening prompt when starting the new project in Claude Code:

---

> **Prompt:**
>
> You are building a new Astro v5 website for HealthFoundry.ai — a healthcare Agentic AI platform company based in Bengaluru, India.
>
> Three reference documents are attached:
> 1. `healthfoundry_website_content_plan.md` — full page-by-page content specification (copy, section structure, meta tags, CTAs)
> 2. `healthfoundry_visual_design_spec.md` — visual component specifications for each page (diagrams, cards, timelines, grids)
> 3. `healthfoundry_new_project_addendum.md` — tech stack, design tokens, project structure, navigation spec, and assets list for the new build (this document — read this first)
>
> **Start by:**
> 1. Reading all three documents in full
> 2. Creating the Astro project with the structure defined in the addendum (Section 3)
> 3. Setting up global CSS with the design tokens (Section 2)
> 4. Setting up the scroll animation system (Section 6)
> 5. Building `Layout.astro`, `Nav.astro`, and `Footer.astro` using the specs in Sections 4 and 5
>
> **Then build pages one at a time in this order:**
> 1. Homepage (`/`)
> 2. Platform (`/platform`)
> 3. Customer Experience (`/solutions/customer-experience`)
> 4. FinOps (`/solutions/finops`)
> 5. GRC (`/solutions/governance`)
> 6. Why Us (`/why-us`)
> 7. Security (`/security`)
> 8. Company (`/company`)
> 9. Contact (`/contact`)
> 10. Blog index (`/blog`)
>
> **For each page:**
> - Follow the section structure from the content plan exactly
> - Implement the visual components specified in the visual design spec
> - Use Tailwind for layout, scoped CSS for custom styles, Lucide React for icons
> - Apply the domain colour coding system (teal=CX, amber=FinOps, navy=GRC)
> - Apply reveal/scroll animations to all major sections
> - Run `astro dev` after each page to verify it renders correctly before moving on
>
> **Do not:**
> - Use any placeholder lorem ipsum text
> - Skip the visual components in favour of text-only implementations
> - Combine multiple pages into one prompt — complete each page fully before starting the next
> - Use localStorage or sessionStorage
>
> Start with the project setup and Layout components. Confirm when ready to begin the Homepage.

---

*This addendum supersedes all patch-language in the content plan and visual spec.*
*Use all three documents together as the complete build brief.*
*Prepared July 2026*
