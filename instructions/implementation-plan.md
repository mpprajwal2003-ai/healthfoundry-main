# HealthFoundry Website — Page-wise Implementation Plan

## How to use this plan

Each session below is self-contained. Copy the **Session Prompt** verbatim into a new Claude Code session. The prompt includes all decisions already made, so no context is lost between sessions. Complete sessions in order — each builds on the output of the previous one.

**Reference documents** (always in `instructions/` folder):
- `healthfoundry_new_project_addendum.md`
- `healthfoundry_theme_system.md`
- `healthfoundry_website_content_plan.md`
- `healthfoundry_visual_design_spec.md`

**Verification rule** (applies to every session): After building, run `astro dev` and manually check **both dark and light modes** before marking the session complete.

---

## Session 0 — Project Setup & Shared Infrastructure

**Scope:** Astro project init, global styles (full token system), animation system, Layout, Nav, Footer, ThemeToggle, shared data files.

**Deliverables:**
- `src/styles/global.css` — complete dark + light token set from theme_system.md §1
- `src/styles/animations.css` — reveal/reveal-left/reveal-scale + delay utilities
- `src/scripts/animations.ts` — IntersectionObserver init
- `src/components/ui/ThemeToggle.astro` — sun/moon toggle, FOUT prevention
- `src/layouts/Layout.astro` — base layout with FOUT inline script as first `<head>` child, Umami analytics, scroll animation init
- `src/components/layout/Nav.astro` — full desktop + mobile nav with dropdowns, ThemeToggle integrated
- `src/components/layout/Footer.astro` — 4-column footer per addendum §5
- `src/components/ui/Button.astro` — primary/secondary variants using CSS tokens
- `src/data/team.ts` — team array from addendum §8
- `tailwind.config.mjs` — hybrid config per theme_system.md §5
- Assets copied: logo, favicon, all team photos, all screenshot images

**No pages built in this session.**

---

### Session 0 Prompt

```
You are building a new Astro v5 website for HealthFoundry.ai — a healthcare Agentic AI platform company based in Bengaluru, India.

Read all four documents in the instructions/ folder before writing any code:
1. instructions/healthfoundry_new_project_addendum.md — tech stack, project structure, navigation spec, assets, team data
2. instructions/healthfoundry_theme_system.md — dark/light theme token system, ThemeToggle component, FOUT prevention, component authoring rules (HIGHEST PRIORITY)
3. instructions/healthfoundry_website_content_plan.md — page-by-page content specification
4. instructions/healthfoundry_visual_design_spec.md — visual component specifications

This session covers ONLY the project infrastructure — no pages yet.

TASKS:
1. Initialise a new Astro v5 project in the current working directory with React and Tailwind integrations. Install lucide-react.
2. Create src/styles/global.css with the COMPLETE token set from theme_system.md §1 — both dark tokens (`:root, [data-theme="dark"]`) and light tokens (`[data-theme="light"]`), plus domain colours in a separate `:root` block. Also add the base styles and scrollbar rules from that section.
3. Create src/styles/animations.css from addendum §6 — all reveal classes and delay utilities.
4. Create src/scripts/animations.ts from addendum §6.
5. Create src/components/ui/ThemeToggle.astro exactly as specified in theme_system.md §2.
6. Create src/layouts/Layout.astro with:
   - FOUT prevention inline script as the FIRST child of <head> (theme_system.md §3)
   - Google Fonts Inter (weights 300 400 500 600 700)
   - global.css and animations.css imported
   - Umami analytics script (addendum §7, website ID: 42b75c2c-49d3-4a7d-9e27-0f81848e4826)
   - Nav and Footer components
   - Scroll animation init script (addendum §6)
   - Props: title, description, ogTitle, ogDescription
7. Create src/components/layout/Nav.astro:
   - Logo (logo.png), all nav links with dropdowns per addendum §4
   - ThemeToggle between nav links and CTA button
   - Mobile hamburger menu that mirrors desktop structure
   - All colours via CSS tokens only (never hardcode)
8. Create src/components/layout/Footer.astro per addendum §5 — 4 columns, bottom bar with copyright.
9. Create src/components/ui/Button.astro with primary and secondary variants using CSS token variables.
10. Create src/data/team.ts with the exact team array from addendum §8.
11. Configure tailwind.config.mjs per theme_system.md §5 — disable Tailwind dark mode, map token colours.
12. Copy all image assets listed in addendum §9 into src/assets/images/.

NON-NEGOTIABLE RULES (apply to every file you write now and in future sessions):
- ALL colours via var(--token-name). Never hardcode hex, rgb, or named colours (#ffffff, black, white, rgba...).
- Tailwind for layout only: flex, grid, gap, p, m, rounded, w, h, max-w. Not for colours.
- SVG diagrams must use currentColor and var() references, never hardcoded fills.

Run `astro dev` at the end. Verify the nav renders correctly, the theme toggle switches between dark and light, and the footer displays all links. Confirm when done.
```

---

## Session 1 — Homepage (`/`)

**Scope:** `src/pages/index.astro` + all section components used only on homepage.

**Deliverables:**
- `src/pages/index.astro`
- `src/components/sections/Hero.astro` — H1, sub, CTAs, 4-stat bar (count-up animation on the numeric stats, icon for HITL stat)
- `src/components/sections/ProblemStatement.astro` — split visual: 3 pain-point cards left, prose right
- `src/components/sections/PlatformOverview.astro` — 3 domain cards with screenshot thumbnails + "Powered by Intelligence Fabric" connector
- `src/components/sections/HowItWorks.astro` — 3-step horizontal flow with icons and arrows
- `src/components/sections/HumanInTheLoop.astro` — 3-zone HITL spectrum bar visual
- `src/components/sections/OutcomeStats.astro` — 3-column stat card grid grouped by domain with colour coding
- `src/components/sections/Mission.tsx` — React island, animated 5-pillar card grid, all colours via CSS tokens
- `src/components/sections/Team.astro` — photo grid with LinkedIn links
- `src/components/sections/SecurityTeaser.astro` — shield icon, short copy, arrow CTA to /security
- `src/components/sections/FooterCTA.astro` — full-width dark CTA section

**Content source:** content_plan.md Page 1 (all 10 sections)
**Visual spec:** visual_design_spec.md Page 1

---

### Session 1 Prompt

```
You are continuing the HealthFoundry.ai Astro v5 website build. Session 0 set up the project infrastructure (Layout, Nav, Footer, ThemeToggle, global styles, token system). Do NOT touch those files unless a bug requires it.

Read all four documents in instructions/ before starting:
1. instructions/healthfoundry_new_project_addendum.md
2. instructions/healthfoundry_theme_system.md (colour rules — HIGHEST PRIORITY)
3. instructions/healthfoundry_website_content_plan.md — use Page 1 (Homepage) as the content spec
4. instructions/healthfoundry_visual_design_spec.md — use Page 1 (Homepage) as the visual spec

THIS SESSION: Build the Homepage only (src/pages/index.astro and its section components).

Build these components and sections in order:

1. src/components/ui/StatCard.astro — reusable stat card with value, label, optional domain colour prop
2. src/components/sections/Hero.astro
   - Full-width dark hero, text left, dashboard-mockup.png right
   - H1: "The Intelligence Fabric for Healthcare Operations"
   - Sub-headline and supporting copy from content_plan.md §1
   - Two CTA buttons: "Book a Discovery Call" (primary → /contact) + "See the Platform" (secondary → /platform)
   - Stats bar: 8 Weeks | 40–60% | 30–50% | Human-in-the-loop. Numeric stats animate count-up on scroll (IntersectionObserver). The HITL stat uses a user-check icon instead of a number.
3. src/components/sections/ProblemStatement.astro
   - Split layout: left = 3 icon cards (data-scattered, claims-slow, feedback-lost), right = prose from content_plan.md §2
   - Icons from Lucide: database, clock, bell
4. src/components/sections/PlatformOverview.astro
   - 3 domain cards: CX (teal, opd-snapshot.png), FinOps (amber, claims-snapshot.png), GRC (blue, grc.png)
   - "Powered by the Intelligence Fabric" connector label above the cards
   - Each card links to its solution page
5. src/components/sections/HowItWorks.astro
   - Horizontal 3-step flow: [Audit & Discover] → [Deploy Agents] → [Learn & Optimise]
   - Icons: search, bot, trending-up. Connecting arrows between steps.
   - Stacks vertically on mobile with downward arrows.
6. src/components/sections/HumanInTheLoop.astro
   - 3-zone horizontal spectrum bar: Agent Autonomous | Agent + Human | Human Leads
   - Gradient fill left-to-right (lighter → darker) using CSS token values
   - Example activities listed in each zone in small text
   - Stacks to 3 labelled sections on mobile
7. src/components/sections/OutcomeStats.astro
   - 3-column StatCard grid: CX (teal), FinOps (amber), GRC (blue)
   - Data from content_plan.md §6 outcome table
   - Caveat line below in muted text
8. src/components/sections/Mission.tsx (React island)
   - 5 animated pillar cards: Unify, Intelligence, Reliable, Frictionless, Scale
   - All colours via CSS token var() references — NO hardcoded Tailwind colour classes (text-white, bg-black, etc.)
   - Entrance animation using IntersectionObserver or CSS transitions
9. src/components/sections/Team.astro
   - Photo grid using src/data/team.ts
   - Each card: photo, name, role, LinkedIn link (external, target="_blank")
   - Updated intro copy from content_plan.md §8
10. src/components/sections/SecurityTeaser.astro
    - Shield icon, updated body copy from content_plan.md §9
    - CTA: "Read our security posture →" linking to /security
11. src/components/sections/FooterCTA.astro
    - Full-width section, centred, headline + sub + "Book a Discovery Call" button → /contact

Assemble all sections in src/pages/index.astro in order.
Apply reveal/reveal-left/reveal-scale scroll animation classes to all major sections (not the hero — it's immediately visible).
Set page meta: title and description from content_plan.md Page 1 meta block. Add og:title and og:description.

NON-NEGOTIABLE:
- ALL colours via var(--token-name). Zero hardcoded colours.
- Lucide icons for all icon needs.
- Domain colours: CX=teal (--domain-cx), FinOps=amber (--domain-finops), GRC=blue (--domain-grc)
- Run astro dev. Test dark mode AND light mode. Confirm all sections visible and readable in both themes before marking complete.
```

---

## Session 2 — Platform Page (`/platform`)

**Scope:** `src/pages/platform.astro` + platform-specific components and diagrams.

**Deliverables:**
- `src/pages/platform.astro`
- `src/components/sections/PlatformHero.astro` — text left, marketecture diagram right
- `src/components/diagrams/ArchitectureLayers.astro` — vertical 4-layer stack, expandable on click/hover
- `src/components/ui/AgentCard.astro` — reusable agent card with icon, name, domain badge, description, capability tag
- `src/components/diagrams/HITLSpectrum.astro` — 3-zone spectrum (shared with Why Us)
- Deployment options — 4 icon cards with cloud platform names
- AI models — 2×2 icon grid
- Platform CTA section

**Content source:** content_plan.md Page 2
**Visual spec:** visual_design_spec.md Page 2

---

### Session 2 Prompt

```
You are continuing the HealthFoundry.ai Astro v5 website build. Sessions 0–1 are complete (project setup + Homepage). Do NOT modify existing components unless a bug requires it.

Read all four documents in instructions/ before starting.

THIS SESSION: Build the Platform page only (src/pages/platform.astro and its components).

Content spec: instructions/healthfoundry_website_content_plan.md — Page 2: Platform
Visual spec: instructions/healthfoundry_visual_design_spec.md — Page 2: Platform

Build in this order:

1. src/components/diagrams/ArchitectureLayers.astro
   - Vertical 4-layer stack diagram, each layer a distinct bordered block
   - Layer 1 (bottom): Integration & Data — HL7, FHIR, Epic, Cerner, Meditech, HIS
   - Layer 2: Domain Data Foundation — clinical, financial, operational cubes
   - Layer 3: Agent Platform (Intelligence Fabric Core) — orchestration, HITL governance, self-learning, LLM observability
   - Layer 4 (top): Domain Agent Applications — CX, FinOps, GRC agent groups
   - Each layer is an expandable section: clicking reveals the full prose detail from content_plan.md §2
   - All colours via CSS tokens. SVG/CSS borders, no hardcoded colours.
   - Use --diagram-bg, --diagram-border, --layer-connector tokens.

2. src/components/ui/AgentCard.astro — props: icon (Lucide name), agentName, domain ('cx'|'finops'|'grc'|'cross'), description, capabilityTag
   - Domain badge colour driven by domain prop: cx→teal, finops→amber, grc→blue, cross→text-secondary
   - Card style using --card-bg, --card-border, --card-shadow tokens

3. src/components/diagrams/HITLSpectrum.astro
   - Horizontal spectrum bar, 3 zones
   - Zone backgrounds: --hitl-zone-a-bg, --hitl-zone-b-bg, --hitl-zone-c-bg
   - Overall gradient: --hitl-gradient
   - Activity list in each zone from content_plan.md Platform §3
   - Stacks to 3 vertical sections on mobile

4. src/pages/platform.astro — assemble sections:
   Section 1 — Hero:
     - H1: "The Intelligence Fabric / A domain-aware agentic AI platform for hospital operations"
     - Sub from content_plan.md Platform §1
     - Right side: embed the architecture diagram from instructions/hospital_agentic_ai_marketecture_v3.html as an inline SVG or iframe (themed, with CSS variable fills where possible)
   Section 2 — Architecture Overview:
     - Label: "Platform Architecture", H2: "Built in layers. Deployed in weeks."
     - ArchitectureLayers component
   Section 3 — Agent Grid:
     - Label: "Agents", H2: "Six agents across three domains"
     - 2×3 grid of AgentCard components — 6 agents from content_plan.md Platform §2 Layer 4 table
   Section 4 — HITL Governance:
     - Label: "Governance Model", H2: "Every agent has a human in the loop."
     - Category 1/2/3 prose from content_plan.md Platform §3
     - HITLSpectrum component
   Section 5 — Deployment Options:
     - Label: "Infrastructure", H2: "Deployed in your environment. Not ours."
     - 4 cards: On-Premise Kubernetes, Google Cloud, AWS/Azure, Hybrid/Air-Gapped
     - Icons: server, cloud, layers, shield-check (Lucide)
     - Supporting copy from content_plan.md Platform §4
   Section 6 — AI Models:
     - Label: "AI Engine", H2: "Models built for healthcare, not adapted from general purpose."
     - 2×2 icon grid: LLMs, Deep Learning, Fine-tuned Models, RLHF/GEPA
     - Body copy from content_plan.md Platform §5
   Section 7 — CTA:
     - Headline + sub from content_plan.md Platform §6, "Book a Discovery Call" → /contact

Apply scroll animations. Set meta tags. Run astro dev, verify both themes.
```

---

## Session 3 — Customer Experience Solution (`/solutions/customer-experience`)

**Scope:** `src/pages/solutions/customer-experience.astro` + CX-specific components.

**Deliverables:**
- `src/pages/solutions/customer-experience.astro`
- `src/components/diagrams/CXSystemsGrid.astro` — 2×2 card grid with mini flow diagrams
- `src/components/diagrams/CareGapCallout.astro` — before/after split visual
- Blueprint timeline component (reusable, also used in FinOps and GRC)
- CX stat cards section

**Content source:** content_plan.md Page 3
**Visual spec:** visual_design_spec.md Page 3

---

### Session 3 Prompt

```
You are continuing the HealthFoundry.ai Astro v5 website build. Sessions 0–2 are complete (setup, Homepage, Platform). Do NOT modify existing components unless a bug requires it.

Read all four documents in instructions/ before starting.

THIS SESSION: Build the Customer Experience solution page only.

Content spec: instructions/healthfoundry_website_content_plan.md — Page 3: Customer Experience
Visual spec: instructions/healthfoundry_visual_design_spec.md — Page 3: Customer Experience

Build in this order:

1. src/components/diagrams/CXSystemsGrid.astro
   - 2×2 card grid, domain teal colour (--domain-cx, --domain-cx-muted, --domain-cx-border)
   - Card 1 — Acquisition: mini funnel Enquiry → Estimate → Counselling → Appointment
   - Card 2 — Retention: mini flow Care Gap → Outreach → Appointment (highest-ROI callout)
   - Card 3 — Feedback: loop Collect → Route → Resolve → Learn
   - Card 4 — Service Excellence: TAT Monitoring timeline with real-time alerts
   - Each card: icon + title + summary + "Key agent support:" line
   - Clicking a card expands to full detail from content_plan.md §2 (CSS accordion, no JS library)

2. src/components/diagrams/CareGapCallout.astro
   - Before/after split visual (two panels, arrow between)
   - Before panel: styled discharge summary block with highlighted phrases ("follow-up in 6 weeks", "repeat imaging advised") — use a CSS-styled div, not a real image
   - After panel: structured care gap card — patient reference, gap type, urgency badge, recommended action, outreach status
   - Copy from visual_design_spec.md Page 3 §3
   - All colours via tokens

3. src/components/ui/TimelineStep.astro — reusable timeline step, props: stepNumber, label, icon, description
   (Used for Blueprint process here, and claimed lifecycle in FinOps)

4. Blueprint timeline component inline in the page or as a small component:
   - 6 horizontal steps: Audit → Discover → Design → Deploy → Learn → Optimise
   - Icons: search, map, drafting-compass, rocket, bar-chart-2, refresh-cw (Lucide)
   - Stacks vertically on mobile

5. src/pages/solutions/customer-experience.astro — assemble:
   Section 1 — Hero: H1, sub from content_plan.md CX §1. opd-snapshot.png right.
   Section 2 — Four CRM Systems: label "What We Address", CXSystemsGrid
   Section 3 — Care Gap Callout: standalone highlight section, CareGapCallout
   Section 4 — Agent Capabilities: Patient Engagement Agent + Care Continuity Agent copy from content_plan.md CX §3. Use two cards side by side.
   Section 5 — Outcomes: stat card grid in teal (--domain-cx), data from content_plan.md CX §4 table. Caveat line.
   Section 6 — How We Start (Blueprint): Blueprint timeline, content from content_plan.md CX §5
   Section 7 — Footer CTA: reuse FooterCTA component

Domain colour: ALL CX elements use --domain-cx (teal). Badge backgrounds use --domain-cx-muted. Borders use --domain-cx-border.
Scroll animations on all sections. Meta tags. Run astro dev, both themes.
```

---

## Session 4 — FinOps Solution (`/solutions/finops`)

**Scope:** `src/pages/solutions/finops.astro` + FinOps-specific components.

**Deliverables:**
- `src/pages/solutions/finops.astro`
- `src/components/diagrams/ClaimsTimeline.astro` — vertical 8-stage timeline with agent callouts
- `src/components/diagrams/PayerIntelligenceFlow.astro` — monitoring flow diagram
- `src/components/diagrams/WorkflowVariantTable.astro` — 2-column comparison table

**Content source:** content_plan.md Page 4
**Visual spec:** visual_design_spec.md Page 4

---

### Session 4 Prompt

```
You are continuing the HealthFoundry.ai Astro v5 website build. Sessions 0–3 are complete. Do NOT modify existing components unless a bug requires it.

Read all four documents in instructions/ before starting.

THIS SESSION: Build the FinOps solution page only.

Content spec: instructions/healthfoundry_website_content_plan.md — Page 4: FinOps
Visual spec: instructions/healthfoundry_visual_design_spec.md — Page 4: FinOps

Build in this order:

1. src/components/diagrams/ClaimsTimeline.astro
   - Vertical timeline, 8 stages, alternating left/right layout on desktop (stage label left, agent support right), connected by a vertical line
   - All 8 stages from content_plan.md FinOps §2
   - Each stage: numbered circle on the line, stage name, agent support text
   - Agent callouts use a bot icon (Lucide) and are coloured --domain-finops (amber)
   - The vertical line uses --timeline-line token
   - Stacks to a single-column vertical list on mobile

2. src/components/diagrams/PayerIntelligenceFlow.astro
   - 3 sources at top: [Payer Portal] [NHA Circulars] [TPA Notices]
   - Arrows down to central box: "Payer Rule Intelligence Agent" with internal logic description
   - Two outputs below: [Claims team alert] [Agent config updated]
   - All elements are CSS/SVG styled boxes using --diagram-bg and --diagram-border tokens
   - Copy from content_plan.md FinOps §3

3. src/components/diagrams/WorkflowVariantTable.astro
   - Styled comparison table, 2 columns: PM-JAY Oncology | Commercial Insurer Elective Surgery
   - 5 rows from visual_design_spec.md Page 4 §5
   - Caption below: "Two claims. Same hospital. Completely different workflows."
   - Table uses --border-default for cell borders, --bg-card for alternating rows

4. src/pages/solutions/finops.astro — assemble:
   Section 1 — Hero: H1, sub from content_plan.md FinOps §1. claims-snapshot.png right.
   Section 2 — Claims Lifecycle: label "What We Address", H2 "The claims lifecycle has eight stages...", ClaimsTimeline
   Section 3 — Payer Intelligence: label, H2, prose from content_plan.md FinOps §3, PayerIntelligenceFlow
   Section 4 — Agent Capabilities: RCM Optimisation Agent + Supply Intelligence Agent cards
   Section 5 — Outcomes: stat cards in amber (--domain-finops). Data from content_plan.md FinOps §5 table. Caveat line.
   Section 6 — Workflow Variant Reality: prose from content_plan.md FinOps §6, WorkflowVariantTable
   Section 7 — Footer CTA

Domain colour: ALL FinOps elements use --domain-finops (amber).
Scroll animations. Meta tags. Run astro dev, both themes.
```

---

## Session 5 — GRC Solution (`/solutions/governance`)

**Scope:** `src/pages/solutions/governance.astro` + GRC-specific components.

**Deliverables:**
- `src/pages/solutions/governance.astro`
- `src/components/ui/DomainCard.astro` — icon card for GRC capabilities (also retroactively usable for Security page)
- `src/components/diagrams/ContinuousVsPeriodic.astro` — timeline comparison visual

**Content source:** content_plan.md Page 5
**Visual spec:** visual_design_spec.md Page 5

---

### Session 5 Prompt

```
You are continuing the HealthFoundry.ai Astro v5 website build. Sessions 0–4 are complete. Do NOT modify existing components unless a bug requires it.

Read all four documents in instructions/ before starting.

THIS SESSION: Build the GRC solution page only.

Content spec: instructions/healthfoundry_website_content_plan.md — Page 5: GRC
Visual spec: instructions/healthfoundry_visual_design_spec.md — Page 5: GRC

Build in this order:

1. src/components/ui/DomainCard.astro — reusable icon card, props: icon, title, description, humanNote (optional), domainColor
   - Used for GRC capabilities here. Same card pattern usable on Security page.
   - Background: --card-bg. Border coloured by domainColor prop with 0.25 opacity.

2. src/components/diagrams/ContinuousVsPeriodic.astro
   - Two-row comparison:
     Row 1 — "Traditional (Periodic)": A horizontal timeline bar for Jan → Jun with two audit spike markers, each labelled "Audit finds problems from last 3 months [Damage already done]". Use a muted/grey colour.
     Row 2 — "HealthFoundry (Continuous)": Same Jan → Jun bar but dotted with continuous monitor markers (●) throughout, labelled "Real-time risk flags surfaced for human review [Issues caught before they become findings]". Use --domain-grc (blue).
   - Section label above each row. CSS-drawn, no external libraries.
   - Responsive: both rows visible on desktop, stacked on mobile.

3. src/pages/solutions/governance.astro — assemble:
   Section 1 — Hero: H1 "Governance, Risk & Control / Continuous monitoring, not periodic audits", sub from content_plan.md GRC §1. grc.png right.
   Section 2 — What We Address: label, H2. 5 DomainCards in a grid (2+2+1): Billing Compliance, Documentation Quality, Audit Trail Management, Regulatory Adherence, Risk Scoring. Icons: bar-chart-2, clipboard-list, folder-open, scale, target (Lucide). Content from content_plan.md GRC §2.
   Section 3 — Continuous vs Periodic: standalone highlight section. ContinuousVsPeriodic diagram. Short callout copy above: "Compliance risk accumulates daily. Agents that monitor daily."
   Section 4 — GRC Agent: single agent card. Copy from content_plan.md GRC §3.
   Section 5 — Outcomes: stat cards in --domain-grc (blue). Data from content_plan.md GRC §4. Note: "Real-time vs periodic" outcome gets special visual treatment — no percentage number, use a split icon instead.
   Section 6 — Footer CTA

Domain colour: ALL GRC elements use --domain-grc (blue).
Scroll animations. Meta tags. Run astro dev, both themes.
```

---

## Session 6 — Why Us (`/why-us`)

**Scope:** `src/pages/why-us.astro` + Why Us-specific components.

**Deliverables:**
- `src/pages/why-us.astro`
- `src/components/diagrams/BlueprintCycle.astro` — circular 6-node cycle flow
- `src/components/diagrams/IntegrationMap.astro` — systems integration diagram
- HITL spectrum reused from Session 2 (`HITLSpectrum.astro`)
- Vendor contrast visual

**Content source:** content_plan.md Page 6
**Visual spec:** visual_design_spec.md Page 6

---

### Session 6 Prompt

```
You are continuing the HealthFoundry.ai Astro v5 website build. Sessions 0–5 are complete. Do NOT modify existing components unless a bug requires it.

Read all four documents in instructions/ before starting.

THIS SESSION: Build the Why Us page only.

Content spec: instructions/healthfoundry_website_content_plan.md — Page 6: Why Us
Visual spec: instructions/healthfoundry_visual_design_spec.md — Page 6: Why Us

Build in this order:

1. src/components/diagrams/BlueprintCycle.astro
   - Circular flow with 6 nodes arranged in a circle (CSS positioned or inline SVG)
   - Nodes in clockwise order: Audit (top) → Discover → Design → Deploy → Optimise → Learn → back to Audit
   - Each node: icon + label + 1-line description below the circle
   - Icons: search, map, drafting-compass, rocket, refresh-cw, bar-chart-2 (Lucide)
   - Connecting arcs/arrows between nodes
   - All colours via tokens. Works in both themes.

2. src/components/diagrams/IntegrationMap.astro
   - Three rows of boxes, connected by arrows:
     Row 1 (top): [Epic] [Cerner] [Meditech] [HIS] [Payer Portals]
     Row 2 (middle): [Intelligence Fabric] box spanning full width with "HL7 · FHIR · REST · API" label
     Row 3 (bottom): [CX Agents] [FinOps Agents] [GRC Agents]
   - Arrows from row 1 boxes down into the Fabric, and from Fabric down to row 3
   - CSS/SVG layout using --diagram-bg, --diagram-border, domain colours for agent boxes
   - "No rip-and-replace" caption below

3. src/pages/why-us.astro — assemble:
   Section 1 — Hero: centred (no image). H1 "Why HealthFoundry", sub from content_plan.md WhyUs §1.
   Section 2 — Differentiator 1 (Evidence Before Automation): H2, prose from content_plan.md WhyUs §2 Diff1. BlueprintCycle below the prose.
   Section 3 — Differentiator 2 (Agents That Understand Healthcare): H2, prose from content_plan.md WhyUs §2 Diff2. IntegrationMap below.
   Section 4 — Differentiator 3 (Humans Always in Control): H2, prose from content_plan.md WhyUs §2 Diff3. Reuse HITLSpectrum component (already built in Session 2 at src/components/diagrams/HITLSpectrum.astro).
   Section 5 — Differentiator 4 (No Handoffs): H2, prose from content_plan.md WhyUs §2 Diff4. Add a simple 2-column contrast box (CSS only):
     Left column "Typical Vendor": bullet list Vendor → sells licence → SI Partner implements → support vendor → hope for outcomes
     Right column "HealthFoundry": HealthFoundry ↔ Your team, Audit → Deploy → Optimise, Owned end-to-end
   Section 6 — Footer CTA

Scroll animations. Meta tags. Run astro dev, both themes.
```

---

## Session 7 — Security (`/security`)

**Scope:** `src/pages/security.astro` + deployment topology diagram.

**Deliverables:**
- `src/pages/security.astro`
- `src/components/diagrams/DeploymentTopology.astro` — your-environment wrapper diagram

**Content source:** content_plan.md Page 7
**Visual spec:** visual_design_spec.md Page 7

---

### Session 7 Prompt

```
You are continuing the HealthFoundry.ai Astro v5 website build. Sessions 0–6 are complete. Do NOT modify existing components unless a bug requires it.

Read all four documents in instructions/ before starting.

THIS SESSION: Build the Security page only.

Content spec: instructions/healthfoundry_website_content_plan.md — Page 7: Security
Visual spec: instructions/healthfoundry_visual_design_spec.md — Page 7: Security

The existing site has a Security page with icon cards that work well. The task is to build it fresh with updated content (not port old HTML).

Build in this order:

1. src/components/diagrams/DeploymentTopology.astro
   - Outer box labelled "Your Environment" with a dashed border (--border-default dashed)
   - Inside: two sub-boxes side by side — [On-Premise Kubernetes] and [Cloud GCP/AWS/Azure] — with "or" between them
   - Below both: a bar labelled "Intelligence Fabric — Patient data stays here"
   - Outside/below the outer box: "HealthFoundry team (configuration only)" with a ↕ arrow indicating the limited connection (config only, no data)
   - Caption: "Patient data never leaves your environment without your explicit authorisation."
   - All CSS box-model, no SVG needed. Colours: --diagram-bg, --diagram-border, dashed border on outer box.

2. src/pages/security.astro — assemble:
   Section 1 — Hero: H1 "Security & Compliance", sub from content_plan.md Security §1. Centred or left-aligned.
   Section 2 — Icon card grid (use DomainCard.astro from Session 5):
     - HIPAA Compliant — shield icon
     - HITRUST CSF Certified — check-circle icon
     - DPDP Compliant — scale icon
     - SOC 2 Readiness — layers icon
     - ISO 27001 Readiness — lock icon
     - Deployment in Your Infrastructure — server icon (this card should expand or link to the DeploymentTopology below)
   Section 3 — Deployment Topology: heading "Deployed in your environment. Not ours." + DeploymentTopology component + supporting copy from content_plan.md Security (new infrastructure card copy).
   Section 4 — CTA: button "Talk to us about your security requirements →" → /contact

Meta tags. Scroll animations. Run astro dev, both themes.
```

---

## Session 8 — Company (`/company`)

**Scope:** `src/pages/company.astro` — new page, does not exist in the old site.

**Deliverables:**
- `src/pages/company.astro`
- Company facts bar component (4 tiles: location, focus, founders, founded)

**Content source:** content_plan.md Page 8
**Visual spec:** visual_design_spec.md Page 8
**Reuses:** Mission.tsx, Team.astro (already built in Session 1)

---

### Session 8 Prompt

```
You are continuing the HealthFoundry.ai Astro v5 website build. Sessions 0–7 are complete. Do NOT modify existing components unless a bug requires it.

Read all four documents in instructions/ before starting.

THIS SESSION: Build the Company/About page only. This page is new — it did not exist in the old site.

Content spec: instructions/healthfoundry_website_content_plan.md — Page 8: Company
Visual spec: instructions/healthfoundry_visual_design_spec.md — Page 8: Company

Build in this order:

1. Company facts bar (inline in the page or a small Astro component):
   - 4 tiles centred in a row: 📍 Bengaluru, India | 🏥 Healthcare Only | 🤝 5 Founders | 🚀 Founded 2024
   - Each tile: icon + label + sub-label
   - Background: --bg-card. Border: --border-subtle.

2. src/pages/company.astro — assemble:
   Section 1 — Founding Story:
     - Label: "Our Story"
     - H1: "Built by people who have lived inside healthcare operations."
     - Prose from content_plan.md Company §1
     - Pull quote styled large and centred (typography as the visual — no photo):
       "We built HealthFoundry because we've seen what happens when AI is applied to healthcare without understanding how healthcare actually works."
       Style: ~2rem font-size, italic, centred, light border-left or subtle background block, colour --text-secondary
   Section 2 — Company Facts Bar (4 tiles)
   Section 3 — Mission & Values:
     - Label: "Mission"
     - Reuse Mission.tsx React island (built in Session 1)
     - Add the Values content from homepage below: numbered list of 5 values if included in the content plan
   Section 4 — Team:
     - Label: "The Team"
     - Reuse Team.astro (built in Session 1) — same component, same data
   Section 5 — Footer CTA

Anchor links: The nav links /company#mission and /company#values must resolve correctly. Add id="mission" and id="values" to the respective sections.

Meta tags from content_plan.md Page 8 meta block. Scroll animations. Run astro dev, both themes.
```

---

## Session 9 — Contact, Careers & Blog (`/contact`, `/careers`, `/blog`)

**Scope:** Three lighter pages in one session. All simpler than solution pages.

**Deliverables:**
- `src/pages/contact.astro`
- `src/pages/careers.astro`
- `src/pages/blog/index.astro`

**Content source:** content_plan.md contact meta block + existing site patterns

---

### Session 9 Prompt

```
You are continuing the HealthFoundry.ai Astro v5 website build. Sessions 0–8 are complete. Do NOT modify existing components unless a bug requires it.

Read all four documents in instructions/ before starting.

THIS SESSION: Build three lightweight pages — Contact, Careers, and Blog index.

CONTACT PAGE (src/pages/contact.astro):
- H1: "Book a Discovery Call"
- Sub: "Start with a structured discovery session — we map your operations, validate your KPIs, and show you where AI agents can move the needle first."
- Contact form: name (required), email (required), organisation (required), message/notes (optional), submit button "Send Message"
- Form should have proper HTML5 validation. No JS form library needed.
- Form action: keep as a basic HTML form (mailto or a placeholder action="/contact-success"). Do NOT wire up a backend — leave a clear HTML comment saying "<!-- TODO: wire up form action to backend handler -->".
- Side panel next to the form: email address hello@healthfoundry.ai, LinkedIn link https://linkedin.com/company/healthfoundry
- Meta: title "Book a Discovery Call | HealthFoundry", description from content_plan.md meta table.

CAREERS PAGE (src/pages/careers.astro):
- H1: "Join HealthFoundry"
- Sub: "We're building the Intelligence Fabric for healthcare operations. If you care deeply about healthcare and love hard engineering problems, we'd like to hear from you."
- Positions section: display a "No open positions right now" card with a message to send speculative applications to hello@healthfoundry.ai
- Optional: one placeholder card showing what a job listing would look like (role title, team, location, type) — clearly marked as a placeholder
- Include a "Why work here" section with 3 brief points about the team and mission.
- Meta: title "Careers | HealthFoundry"

BLOG INDEX (src/pages/blog/index.astro):
- H1: "HealthFoundry Blog"
- Sub: "Perspectives on agentic AI, healthcare operations, and the Intelligence Fabric."
- No posts yet — display a single "Coming soon" message: "We're publishing soon. Follow us on LinkedIn for updates."
- LinkedIn link: https://linkedin.com/company/healthfoundry
- Meta: title "Blog | HealthFoundry"

For all three: apply Layout wrapper with correct meta, include FooterCTA section, add scroll animations. Run astro dev, verify both themes.
```

---

## Session 10 — Final Audit & Cross-site Polish

**Scope:** Cross-page consistency check, broken links, accessibility basics, meta tag audit, both-theme verification for all pages.

**Deliverables:**
- All internal links verified working
- All nav dropdown links resolve to correct pages
- og:title and og:description on every page
- No hardcoded colours remaining (grep audit)
- Scroll animations firing on all section components
- Mobile nav working on all pages
- Footer links working on all pages

---

### Session 10 Prompt

```
You are doing a final audit of the HealthFoundry.ai Astro v5 website. All 10 pages have been built across Sessions 0–9. This session is about verification and fixing issues — no new features.

Read all four documents in instructions/ for reference.

AUDIT TASKS:

1. LINK AUDIT — check every href in Nav.astro and Footer.astro resolves to a real page:
   /platform, /solutions/customer-experience, /solutions/finops, /solutions/governance, /company, /company#mission, /company#values, /why-us, /security, /blog, /careers, /contact
   Fix any that are broken or missing.

2. COLOUR AUDIT — run a grep across all src/ files for hardcoded colours:
   grep -r "#[0-9a-fA-F]\{3,6\}\|rgba\|rgb(\|: black\|: white\|color: #\|background: #" src/
   Investigate each result. Replace any that should be CSS tokens with var(--token-name). Exceptions allowed: the token definitions in global.css themselves.

3. META AUDIT — verify every page in src/pages/ has:
   - Unique <title>
   - <meta name="description">
   - <meta property="og:title">
   - <meta property="og:description">
   Fix any missing.

4. THEME AUDIT — for each page, manually verify in astro dev:
   □ Dark mode loads correctly with no flash on first visit
   □ Light mode: toggle works, all text readable, all diagrams visible
   □ No white text on white background or black text on black background
   □ Domain colour badges (teal, amber, blue) legible in both themes

5. SCROLL ANIMATION AUDIT — verify reveal classes are applied consistently:
   - Hero sections: no reveal (immediately visible)
   - All other sections: at least one reveal class on the section wrapper
   - Cards within sections: staggered delay-100, delay-200, delay-300

6. MOBILE AUDIT — verify on a simulated mobile viewport (375px):
   - Nav hamburger opens and closes correctly
   - Dropdown menus accessible on mobile
   - All timeline/diagram components stack vertically
   - HITL spectrum bar stacks to 3 sections
   - Card grids collapse to single column

7. ACCESSIBILITY BASICS:
   - All images have alt text
   - All Lucide icon wrappers have aria-hidden="true" where decorative
   - Nav has proper aria-label="Main navigation"
   - Mobile nav toggle has aria-expanded and aria-label
   - Form inputs on /contact have associated <label> elements

Run astro build at the end to confirm zero build errors. Report any issues found and fixed.
```

---

## Quick Reference — Component Map

| Component | Built in session | Used on pages |
|---|---|---|
| Layout.astro | S0 | All |
| Nav.astro | S0 | All |
| Footer.astro | S0 | All |
| ThemeToggle.astro | S0 | Nav (all pages) |
| Button.astro | S0 | Multiple |
| StatCard.astro | S1 | Homepage, CX, FinOps, GRC |
| Hero.astro | S1 | Homepage |
| ProblemStatement.astro | S1 | Homepage |
| PlatformOverview.astro | S1 | Homepage |
| HowItWorks.astro | S1 | Homepage |
| HumanInTheLoop.astro | S1 | Homepage |
| OutcomeStats.astro | S1 | Homepage |
| Mission.tsx | S1 | Homepage, Company |
| Team.astro | S1 | Homepage, Company |
| SecurityTeaser.astro | S1 | Homepage |
| FooterCTA.astro | S1 | All pages |
| ArchitectureLayers.astro | S2 | Platform |
| AgentCard.astro | S2 | Platform |
| HITLSpectrum.astro | S2 | Platform, Why Us |
| CXSystemsGrid.astro | S3 | CX |
| CareGapCallout.astro | S3 | CX |
| TimelineStep.astro | S3 | CX, FinOps |
| ClaimsTimeline.astro | S4 | FinOps |
| PayerIntelligenceFlow.astro | S4 | FinOps |
| WorkflowVariantTable.astro | S4 | FinOps |
| DomainCard.astro | S5 | GRC, Security |
| ContinuousVsPeriodic.astro | S5 | GRC |
| BlueprintCycle.astro | S6 | Why Us |
| IntegrationMap.astro | S6 | Why Us |
| DeploymentTopology.astro | S7 | Security |

---

## Key rules to reinforce in every session

1. **All colours via `var(--token-name)` — zero hardcoded hex/rgb/colour names.** Tailwind layout only.
2. **SVG components use `var()` and `currentColor`** — never hardcoded fills.
3. **Theme toggle must work** — verify both dark and light after every session.
4. **Domain colour coding**: CX = `--domain-cx` (teal), FinOps = `--domain-finops` (amber), GRC = `--domain-grc` (blue).
5. **No lorem ipsum** — all copy from `content_plan.md` or the addendum exactly.
6. **Responsive diagrams**: horizontal desktop → vertical mobile for all timelines and spectrum bars.
7. **`astro build` must pass** before marking a session complete — not just `astro dev`.
