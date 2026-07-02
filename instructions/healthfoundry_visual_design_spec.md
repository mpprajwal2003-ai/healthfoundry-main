# HealthFoundry.ai — Visual Design Specification
### Page-by-Page Visual & Text Balance Guide
**Companion to: healthfoundry_website_content_plan.md**

---

## Design Philosophy

The site serves a sophisticated B2B healthcare audience — CFOs, CMOs, revenue cycle directors. They are time-poor and sceptical of generic AI claims. The visual design must do two things simultaneously:

1. **Stop the scroll** — establish at a glance what HealthFoundry is and who it's for
2. **Reward depth** — give the reader who leans in something substantive to engage with

Every page should follow a rhythm: **visual hook → text substance → visual proof → text detail → CTA**. Never more than two consecutive text-only sections without a visual break.

---

## Page 1: Homepage

### Current balance: ❌ Too text-heavy in the middle

---

**Section 1 — Hero**
- **Visual:** Full-width dark hero with the dashboard mockup image (keep existing) positioned right. Left side: headline + sub + CTAs + 4 stats bar.
- **Enhancement:** The stats bar should use large numerals with subtle animated count-up on scroll. "Human-in-the-loop" stat should visually differ from the numeric stats — use an icon (👤) rather than a number, to signal it's a principle not a metric.
- **Balance:** ✅ Good — image + text + stats

---

**Section 2 — The Problem We Solve**
- **Current plan:** Pure prose block
- **Fix:** Convert to a **split visual**:
  - Left: 3 stacked "pain point" cards with icons
    - 🗂️ Care gaps buried in unstructured documents
    - ⏱️ Claims that take weeks because data is scattered
    - 🔔 Feedback collected, never resolved
  - Right: prose explanation
- **Balance:** ✅ After fix

---

**Section 3 — The Platform (3 domain cards)**
- **Visual:** 3 large cards with product screenshot thumbnails (existing opd-snapshot.png, claims-snapshot.png, grc.png). Keep lightbox on click.
- **Enhancement:** Add a thin connecting line or arc above the cards with the label "Powered by the Intelligence Fabric" — this visually communicates the platform-under-products relationship without needing a separate section.
- **Balance:** ✅ Good — screenshots carry the visual weight

---

**Section 4 — How It Works (3 steps)**
- **Current plan:** 3 text blocks
- **Fix:** Horizontal numbered step flow with icons and connecting arrows:

```
[1 Audit & Discover] ——→ [2 Deploy Agents] ——→ [3 Learn & Optimise]
     🔍                        🤖                       📈
  "We map your               "Agents connect         "Outcomes tracked
   actual ops"                to your systems"        against KPIs"
```

- On mobile: stack vertically with downward arrows
- **Balance:** ✅ After fix

---

**Section 5 — Human-in-the-Loop Commitment**
- **Current plan:** Text + 3 callout boxes
- **Fix:** Add a simple **3-zone visual** — a horizontal bar or triangle showing:
  - Zone A (left, lighter): Agent handles alone
  - Zone B (centre): Agent + Human together
  - Zone C (right, darker): Human leads
  - Example activities listed inside each zone in small text
- This is the most important conceptual communication on the site. It needs a visual, not just bullets.
- **Balance:** ✅ After fix

---

**Section 6 — Outcome Stats Table**
- **Current plan:** Markdown table
- **Fix:** Replace with a **3-column stat card grid** grouped by domain, with coloured domain labels:

```
[🤝 Customer CX]          [💰 FinOps]              [🛡️ GRC]
30–50% care gap           40–60% claim TAT          20–40% TAT
improvement               reduction                 breach reduction

20–35% no-show            10–15pp first-pass        Real-time vs
reduction                 rate improvement          periodic monitoring
```

- Small italicised caveat line below the grid
- **Balance:** ✅ After fix

---

**Section 7 — Mission (5 pillars)**
- **Visual:** Keep existing animated card grid (5 icons + titles + descriptions). This works well.
- **Balance:** ✅ Already good

---

**Section 8 — Team**
- **Visual:** Keep existing photo grid with LinkedIn links. Works well.
- **Balance:** ✅ Already good

---

**Section 9 — Security Teaser**
- **Visual:** Single icon (shield) + short text + arrow CTA. Simple and intentional.
- **Balance:** ✅ Good as-is

---

**Section 10 — Footer CTA**
- **Visual:** Full-width dark section, centred text, single CTA button.
- **Balance:** ✅ Good

---

## Page 2: Platform — Intelligence Fabric

### Current balance: ❌ Critical — entirely text and tables. This is the most important page to fix.

---

**Section 1 — Hero**
- **Visual:** Text-left, visual-right.
- **Right side visual:** The marketecture diagram from `hospital_agentic_ai_marketecture_v3.html` — either embedded as an SVG or rendered as a static image. This is exactly the right visual for this page and already exists. Use it.
- **Balance:** ✅ After fix (use existing architecture diagram)

---

**Section 2 — Architecture (4 Layers)**
- **Current plan:** 4 prose paragraphs
- **Fix:** A **vertical layer stack diagram** — the most natural representation of a layered architecture:

```
┌─────────────────────────────────────────────────┐
│  DOMAIN AGENT APPLICATIONS                       │  ← Layer 4
│  [CX Agents] [FinOps Agents] [GRC Agents]       │
├─────────────────────────────────────────────────┤
│  AGENT PLATFORM (Intelligence Fabric Core)       │  ← Layer 3
│  Orchestration · HITL Governance · Self-learning│
├─────────────────────────────────────────────────┤
│  DOMAIN DATA FOUNDATION                          │  ← Layer 2
│  Clinical cubes · Financial cubes · Ops cubes   │
├─────────────────────────────────────────────────┤
│  INTEGRATION & DATA                              │  ← Layer 1
│  HL7 · FHIR · Epic · Cerner · Meditech · HIS   │
└─────────────────────────────────────────────────┘
```

- Each layer is a clickable/expandable card that reveals the prose detail on click or hover
- On mobile: layers stack with expand toggles
- **Balance:** ✅ After fix

---

**Section 3 — Agent Table**
- **Current plan:** Markdown table of 6 agents
- **Fix:** **6 agent cards in a 2×3 grid**, each with:
  - Icon (distinct per agent)
  - Agent name
  - Domain badge (CX / FinOps / GRC / Cross-domain)
  - 1-sentence description
  - Key capability tag (e.g., "Care gap extraction", "Coding validation")

```
[🤝 Patient Engagement]  [🔄 Care Continuity]
[💰 RCM Optimisation]    [📦 Supply Intelligence]
[🛡️ GRC Compliance]      [📊 Analytics & Insights]
```

- **Balance:** ✅ After fix

---

**Section 4 — Human-in-the-Loop (3 categories)**
- **Current plan:** 3 labelled text blocks
- **Fix:** A **horizontal spectrum visual** with 3 zones, showing example activities in each:

```
◄─────────────────────────────────────────────────►
AGENT AUTONOMOUS    AGENT + HUMAN        HUMAN LEADS
     
KPI monitoring    Guideline changes    Payer negotiation
Pattern detection  High-impact configs  Strategy decisions
Routine alerts    Clinical content     Process redesign
                  review
                  Write-off approvals
```

- Gradient fill from light (left) to dark (right) to reinforce the spectrum concept
- **Balance:** ✅ After fix

---

**Section 5 — Deployment Options (4 infrastructure)**
- **Current plan:** 4 text cards
- **Fix:** 4 icon cards with cloud/server icons. Keep the text minimal. Add a row of small partner/platform logos (Google Cloud, AWS, Azure, Kubernetes) as visual proof.
- **Balance:** ✅ After fix

---

**Section 6 — AI Models**
- **Current plan:** Bullet list of 4 model types
- **Fix:** Simple 2×2 icon grid:

```
[🧠 LLMs]              [🔬 Deep Learning]
Document understanding  Pattern recognition
Clinical extraction     Financial data

[⚙️ Fine-tuned Models]  [♻️ RLHF/GEPA]
Domain-specific         Improves from
accuracy               operational feedback
```

- **Balance:** ✅ After fix

---

## Page 3: Customer Experience Solution

### Current balance: ⚠️ Moderate — outcome table helps, but the four systems are walls of text

---

**Section 1 — Hero**
- **Visual:** Text-left, screenshot-right (use existing opd-snapshot.png)
- **Balance:** ✅ Good

---

**Section 2 — The Four CRM Systems**
- **Current plan:** 4 labelled prose blocks
- **Fix:** **2×2 card grid** with system diagram inside each card:

```
[📞 Acquisition]          [🔁 Retention]
Enquiry → Estimate        Care Gap → Outreach
→ Counselling → Appt      → Appointment
[Mini funnel diagram]     [Mini flow diagram]

[💬 Feedback]             [⚡ Service Excellence]
Collect → Route           TAT Monitoring
→ Resolve → Learn         Real-time alerts
[Loop diagram]            [Timeline diagram]
```

- Each card has a short summary + "Key agent support:" line
- Clicking a card expands to show full detail
- **Balance:** ✅ After fix

---

**Section 3 — Care Gap Extraction (highlight)**
- This is the highest-ROI capability and deserves its own visual callout
- **Visual:** A **before/after split**:
  - Before: A blurred/redacted discharge summary PDF with highlighted text showing "follow-up in 6 weeks," "repeat imaging advised" — representing unstructured clinical text
  - Arrow →
  - After: A structured care gap card: Patient name, gap type, urgency, recommended action, outreach status
- **Copy:** "Every discharge summary contains actionable follow-up requirements. Most are never systematically acted on — because extracting them manually at scale isn't feasible. Our Care Continuity Agent reads the document and surfaces the care gap for your team to act on."
- **Balance:** ✅ New section — high visual impact

---

**Section 4 — Outcome Stats**
- **Current plan:** Table
- **Fix:** Stat cards (same pattern as homepage, same CX domain colour)
- **Balance:** ✅ After fix

---

**Section 5 — The Blueprint Process (6 phases)**
- **Current plan:** Numbered text list
- **Fix:** **Horizontal timeline** (or vertical on mobile):

```
[Audit] → [Discover] → [Design] → [Deploy] → [Learn] → [Optimise]
   🔍          🗺️           📐          🚀          📊          🔄
```

- Each phase has a 1-line description below it
- **Balance:** ✅ After fix

---

## Page 4: FinOps Solution

### Current balance: ⚠️ The 8-stage lifecycle is the strongest content on the site — it just looks like a list

---

**Section 1 — Hero**
- **Visual:** Text-left, claims screenshot-right (use existing claims-snapshot.png)
- **Balance:** ✅ Good

---

**Section 2 — The Claims Lifecycle (8 stages)**
- **Current plan:** 8 labelled prose blocks
- **Fix:** This is a **process flow** — it must look like one.

Option A — **Vertical timeline with agent callouts** (recommended for clarity):
```
● Patient Registration & Eligibility
  └─ 🤖 Automated eligibility check at registration

● Pre-Authorisation
  └─ 🤖 Package assembly + portal monitoring + query drafting

● Clinical Documentation & Coding
  └─ 🤖 ICD-10 validation against payer rules pre-submission

● Claim Assembly & Submission
  └─ 🤖 Data retrieval from HIS, EMR, RIS, pharmacy, lab

● Query Management
  └─ 🤖 Query classification + documentation retrieval + draft response

● Adjudication & Settlement
  └─ 🤖 Status monitoring + discrepancy flagging

● Deduction & Rejection Management
  └─ 🤖 Appeal viability scoring + package assembly for human review

● Reauthorisation
  └─ 🤖 Expiry alerts + evidence assembly for multi-cycle cases
```

- Each stage alternates: stage label (left) + agent support (right), connected by a vertical line
- Colour-coded by agent type (data retrieval / validation / orchestration / communication)
- **Balance:** ✅ After fix

---

**Section 3 — Payer Intelligence**
- **Current plan:** Prose
- **Fix:** Add a **monitoring flow visual**:

```
[Payer Portal] → [NHA Circulars] → [TPA Notices]
        ↓               ↓                ↓
    ┌────────────────────────────────────────┐
    │     Payer Rule Intelligence Agent      │
    │  Detects change → Parses delta →       │
    │  Flags for human review or             │
    │  auto-applies (if unambiguous + low    │
    │  impact)                               │
    └────────────────────────────────────────┘
        ↓                   ↓
  [Claims team alert]  [Agent config updated]
```

- **Balance:** ✅ After fix

---

**Section 4 — Outcome Stats**
- **Fix:** Stat cards in FinOps domain colour (gold/amber to suggest revenue)
- **Balance:** ✅ After fix

---

**Section 5 — Workflow Variant Reality**
- **Current plan:** Prose paragraph
- **Fix:** A simple **2-column comparison** showing why generic doesn't work:

| PM-JAY Oncology Claim | Commercial Insurer Elective Surgery |
|----------------------|-------------------------------------|
| Tumor Board certification required | Standard pre-auth |
| HBP package code validation | ICD-10 + policy terms alignment |
| NHA portal workflow | TPA portal or EDI |
| Multi-cycle reauthorisation | Single episode |
| Strict documentation checklist | Insurer-specific checklist |

- Caption: "Two claims. Same hospital. Completely different workflows. We map each as a distinct variant — not exceptions to a generic process."
- **Balance:** ✅ After fix

---

## Page 5: GRC Solution

### Current balance: ⚠️ Lightest content page — needs the most visual help to make abstract concepts tangible

---

**Section 1 — Hero**
- **Visual:** Text-left, GRC screenshot-right (use existing grc.png)
- **Balance:** ✅ Good

---

**Section 2 — What We Address (5 capabilities)**
- **Current plan:** 5 prose blocks
- **Fix:** **Icon card grid** — same pattern as the Security page (which already works):

```
[📊 Billing Compliance]    [📋 Documentation Quality]
[🗂️ Audit Trail]           [⚖️ Regulatory Adherence]
[🎯 Risk Scoring]
```

Each card: icon + title + 2-line description + "Human reviews:" note

- **Balance:** ✅ After fix

---

**Section 3 — Continuous vs Periodic (key differentiator)**
- This is the most important conceptual point on this page. It needs a visual.
- **Fix:** A **timeline comparison**:

```
TRADITIONAL (Periodic):
Jan ─────────────────── Mar ─────────────────── Jun
              ↑                       ↑
         Audit finds              Audit finds
         problems from            problems from
         last 3 months            last 3 months
         [Damage already done]    [Damage already done]

HEALTHFOUNDRY (Continuous):
Jan ──●──●──●──●──●──●──●──●──●──●──●──●── Jun
     Real-time risk flags surfaced for human review
     [Issues caught before they become findings]
```

- **Balance:** ✅ New visual — makes the abstract concept concrete

---

**Section 4 — Outcome Stats**
- **Fix:** Stat cards in GRC domain colour (deep blue/navy to suggest trust)
- **Balance:** ✅ After fix

---

## Page 6: Why Us

### Current balance: ⚠️ Four strong differentiators but all prose — the HITL table is the only visual

---

**Section 1 — Hero**
- **Visual:** Simple centred hero — no image needed here. The strength of the headline carries it.
- **Balance:** ✅ Acceptable

---

**Section 2 — Differentiator 1: Evidence Before Automation**
- **Fix:** Show the **Outcomes-Driven Optimization Blueprint** as a visual cycle:

```
        [Audit]
       ↗       ↘
[Optimise]    [Discover]
    ↑               ↓
[Learn]       [Design]
       ↖       ↙
        [Deploy]
```

- Circular flow with 6 nodes. Brief label under each. This immediately communicates "we have a methodology" without saying it.
- **Balance:** ✅ After fix

---

**Section 3 — Differentiator 2: Agents That Understand Healthcare**
- **Fix:** A **systems integration diagram**:

```
[Epic] [Cerner] [Meditech] [HIS] [Payer Portals]
              ↓    ↓    ↓    ↓
     ┌─────────────────────────────┐
     │   Intelligence Fabric       │
     │   HL7 · FHIR · REST · API  │
     └─────────────────────────────┘
              ↓    ↓    ↓
     [CX Agents] [FinOps Agents] [GRC Agents]
```

- Keeps the "no rip-and-replace" message visual and concrete
- **Balance:** ✅ After fix

---

**Section 4 — Differentiator 3: Humans Always in Control**
- **Fix:** The 3-zone HITL table already planned. Make it a **visual spectrum bar** not a table:

```
AGENT AUTONOMOUS ◄─────────────────────► HUMAN LEADS

[Low stakes,          [Consequential,         [Strategy,
 high volume]          bounded decision]       relationship,
                                               accountability]

KPI monitoring      Clinical content        Payer negotiation
Pattern detection   Write-off approval      Roadmap decisions
Routine alerts      Guideline changes       Process redesign
```

- Colour gradient: light grey → medium → dark
- **Balance:** ✅ After fix

---

**Section 5 — Differentiator 4: No Handoffs**
- **Fix:** A simple **contrast visual**:

```
TYPICAL VENDOR:                 HEALTHFOUNDRY:
[Vendor] → sells licence        [HealthFoundry]
[SI Partner] → implements            ↕
[Another vendor] → supports     [Your team]
[You] → hope for outcomes       Audit → Deploy → Optimise
                                Owned end-to-end
```

- **Balance:** ✅ After fix

---

## Page 7: Security

### Current balance: ✅ Already well structured — icon cards work

**Only enhancement needed:**

- Add a **deployment topology visual** for the "Deployed in Your Infrastructure" card:

```
Your Environment
┌──────────────────────────────────────┐
│  ┌────────────┐  or  ┌────────────┐  │
│  │ On-Premise │      │   Cloud    │  │
│  │ Kubernetes │      │ GCP/AWS/   │  │
│  │            │      │   Azure    │  │
│  └────────────┘      └────────────┘  │
│         Intelligence Fabric          │
│         Patient data stays here      │
└──────────────────────────────────────┘
              ↕ (no data leaves)
         HealthFoundry team
         (configuration only)
```

- **Balance:** ✅ After fix

---

## Page 8: Company / About

### Current balance: ⚠️ Currently planned as mostly prose — needs anchoring visuals

---

**Section 1 — Founding Story**
- **Visual:** Pull quote treatment — a single bold sentence from the founding philosophy, styled large, centred, over a subtle background texture. Not a photo (no office/lifestyle shots until you have real ones). Typography as the visual.
- **Quote to style:** *"We built HealthFoundry because we've seen what happens when AI is applied to healthcare without understanding how healthcare actually works."*
- **Balance:** ✅ After fix

---

**Section 2 — Company Facts Bar**
- 4 quick-fact tiles, centred, between the story and the values:

```
[📍 Bengaluru, India]  [🏥 Healthcare Only]  [🤝 5 Founders]  [🚀 Founded 2024]
```

- **Balance:** ✅ New addition

---

**Section 3 — Mission & Values**
- Keep existing animated mission pillars and numbered values list
- **Balance:** ✅ Already good

---

**Section 4 — Team**
- Keep existing photo grid
- **Balance:** ✅ Already good

---

## Summary: Visual Component Inventory

This is the complete set of visual components needed across the site, in priority order for Claude Design:

### Tier 1 — Must Have (site doesn't work without these)

| Component | Page | Type |
|-----------|------|------|
| Intelligence Fabric architecture diagram (4 layers) | Platform | SVG diagram |
| HITL spectrum bar (3 zones) | Platform + Why Us | CSS/SVG visual |
| Claims lifecycle vertical timeline (8 stages) | FinOps | SVG/CSS timeline |
| Care gap before/after split | CX | Styled content blocks |
| Continuous vs periodic monitoring timeline | GRC | SVG/CSS timeline |

### Tier 2 — High Impact

| Component | Page | Type |
|-----------|------|------|
| 6-agent card grid | Platform | CSS cards |
| 4-system 2×2 grid (CRM) | CX | CSS cards |
| Payer intelligence monitoring flow | FinOps | SVG/CSS flow |
| Outcomes-Driven Blueprint cycle | Why Us | SVG circular flow |
| Systems integration diagram | Why Us | SVG diagram |
| How It Works 3-step flow | Homepage | CSS/SVG flow |
| Pain point split visual | Homepage | CSS cards |

### Tier 3 — Polish

| Component | Page | Type |
|-----------|------|------|
| Stat card grids (replace tables) | All solution pages | CSS cards |
| Deployment options with cloud logos | Platform | CSS cards + logos |
| AI model 2×2 grid | Platform | CSS cards |
| Payer workflow comparison table | FinOps | Styled table |
| Deployment topology diagram | Security | SVG diagram |
| Company facts bar | Company | CSS tiles |
| Traditional vs continuous audit contrast | GRC | CSS split |

---

## Colour & Domain Coding System

Use consistent colour coding across all domain references:

| Domain | Primary Colour | Use for |
|--------|---------------|---------|
| Customer / Patient CX | Teal / Cyan | CX cards, stats, badges |
| FinOps | Amber / Gold | Revenue, claims, financial |
| GRC | Deep Blue / Navy | Trust, compliance, governance |
| Platform / Intelligence Fabric | White / Neutral | Core platform elements |
| Human-in-the-Loop | Warm White | HITL indicators throughout |

This colour system lets a visitor immediately know which domain they're reading about, even without reading the label.

---

## Icon System

Use **Lucide icons** throughout (already in the codebase). Consistent icon assignments:

| Concept | Icon |
|---------|------|
| Patient / CX | `users` or `heart` |
| Revenue / FinOps | `dollar-sign` or `trending-up` |
| Compliance / GRC | `shield-check` |
| AI Agent | `bot` or `cpu` |
| Human-in-the-loop | `user-check` |
| Care gap | `clipboard-list` |
| Claim | `file-text` |
| Data / Integration | `database` |
| Learning | `refresh-cw` |
| Alert | `bell` |
| Audit | `search` |

---

## Responsive Behaviour Notes for Claude Design

- All diagrams: horizontal on desktop → vertical stack on mobile
- All card grids: 3-col desktop → 2-col tablet → 1-col mobile
- Timeline components: horizontal desktop → vertical mobile with downward arrows
- HITL spectrum bar: horizontal desktop → 3 stacked labelled sections on mobile
- Architecture layer stack: always vertical (works naturally on all screen sizes)
- Stats bars: 4-col desktop → 2×2 tablet → single col mobile

---

*This document should be used alongside healthfoundry_website_content_plan.md*
*All visual components should use the existing Astro + Tailwind stack and Lucide icon library already in the codebase.*
*Prepared July 2026*
