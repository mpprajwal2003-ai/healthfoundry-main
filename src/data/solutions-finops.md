---
meta:
  title: "Healthcare FinOps | Revenue Cycle & Supply Chain | HealthFoundry"
  description: "HealthFoundry's FinOps agents reduce revenue leakage across claims management, package profitability, payer intelligence, and supply chain optimisation."

hero:
  pill: "FinOps-Power"
  titleLine1: "Revenue Cycle Operations, "
  titleAccent: "Rethought & Automated"

  subtitle: "Reduce revenue leakage across the full revenue cycle — not just claims"
  body: "Revenue is lost at every stage: claims delayed by manual data assembly, deductions that go unchallenged, packages priced below their true cost, payer guidelines absorbed too late. HealthFoundry's FinOps agents work across the full revenue cycle — surfacing leakage, quantifying its financial impact, and supporting your team to act on it — while keeping humans in control of every consequential decision."
  ctaPrimary: "Book a Discovery Call"
  ctaSecondary: "See the Platform"
  imageAlt: "Claims management interface"

lifecycle:
  label: "What We Address"
  titleLine1: "Revenue leakage occurs across three domains."
  titleLine2: "We address all three."
  intro: "Most RCM programmes focus on claims submission speed. The bigger opportunity is systematically closing every channel through which revenue leaks — claim denials and deductions, packages that cost more to deliver than they reimburse, and payer guideline changes that erode margins before anyone notices."
  domains:
    - num: "01"
      title: "Claims Management"
      desc: "The eight-stage claims lifecycle — from eligibility verification through settlement reconciliation — with agents reducing manual assembly time, query backlogs, and rejection rates."
    - num: "02"
      title: "Package Profitability"
      desc: "Analysing actual billing against reimbursable amounts to identify where packages are delivered at a loss — and recommending package master optimisations that improve margins without compromising care quality."
    - num: "03"
      title: "Payer Intelligence"
      desc: "Continuous monitoring of payer portals, scheme bulletins, and insurer notices for guideline changes — so deductions from non-absorbed updates are caught before they hit your settlement."
  subHeading: "The Claims Lifecycle: eight stages, bottlenecks at each one"
  subIntro: "Every stage from patient registration through settlement carries a distinct failure mode. HealthFoundry agents support your team at each stage, reducing manual data assembly and surfacing exceptions for human review."
  diagramAlt: "Eight-stage claims lifecycle: Patient Registration, Pre-Authorisation, Clinical Documentation & Coding, Claim Assembly & Submission, Query Management, Adjudication Monitoring & Settlement Reconciliation, Deduction & Rejection Management, Reauthorisation"

payer:
  label: "Payer Rule Intelligence"
  titleLine1: "Payer guidelines change."
  titleLine2: "Agents that stay current."
  prose:
    - "For government scheme payers and large insurers, package and guideline changes are frequent — and non-absorption is directly penalised through deductions. HealthFoundry's Payer Rule Intelligence capability continuously monitors payer publication channels for changes to package definitions, documentation requirements, and coding guidelines."
    - "When a change is detected, the agent parses it, identifies the operational delta, and surfaces a structured update for the claims team to review. Unambiguous, low-impact updates can be applied to agent configuration after human confirmation. Ambiguous changes — where the interpretation is unclear — are presented with both interpretations and their expected financial impact, for the claims manager to confirm."
  note: "Payer guideline currency is a continuous operational responsibility — one that demands ongoing attention."

pkg:
  label: "Package Profitability"
  titleLine1: "Not every package generates a margin."
  titleLine2: "Most hospitals don't know which ones don't."
  intro: "The gap between what a procedure costs to deliver and what the payer reimburses is often invisible — until it accumulates into a structural profitability problem. Our Package Profitability capability makes that gap visible, attributable, and actionable."
  steps:
    - title: "Actual billing analysis"
      desc: "Agent reads actual billing data across procedures, service lines, and payer categories — building a granular picture of what was charged for each episode of care and how it was reimbursed."
    - title: "Compare with reimbursable amount"
      desc: "Actual cost-to-deliver is compared against the reimbursable package rate for each payer. Packages where the delta is consistently negative — delivered at a structural loss — are identified and ranked by financial impact."
    - title: "Review the package master"
      desc: "The agent maps loss-generating packages against the package master — reviewing the included components, consumable assumptions, and procedure bundling — to identify where the cost-reimbursement gap originates."
  outputStep:
    title: "Package optimisation recommendations"
    desc: "Agent surfaces structured recommendations — adjustments to package composition, consumable substitutions, or bundling changes — that can improve profitability for specific packages without compromising care quality. Finance and clinical leadership review before any changes are made to the package master."
    hitl: "Finance and clinical leadership review all recommendations. No package master changes without human approval."

agents:
  label: "Agents"
  title: "Two agents covering the revenue cycle"
  intro: "Every agent in the platform is semi-autonomous — it reads, analyses, surfaces, and recommends. Your team retains decision authority at every consequential step."
  cards:
    - badge: "RCM Optimisation Agent"
      desc: "Works across claims management and package profitability — reviewing claims against payer rules before submission, identifying patterns in deductions and rejections, and analysing actual billing data against reimbursable amounts to surface packages that are structurally unprofitable."
      hitl: "Claims team approves submissions and appeals. Finance and clinical leadership review all package optimisation recommendations."
      capabilities:
        - "Pre-submission coding validation (ICD-10, CPT, scheme package codes)"
        - "Denial prediction and appeal viability scoring"
        - "Query response drafting for human review"
        - "Actual billing vs. reimbursable amount analysis"
        - "Package master review and profitability gap identification"
        - "Package optimisation recommendations for human approval"
    - badge: "Package Profitability Agent"
      desc: "Continuously monitors package-level profitability across service lines and payer categories. Reads actual billing data, compares it to reimbursable package rates, and identifies packages where the cost-to-deliver consistently exceeds reimbursement. Recommends package master changes for clinical and finance review."
      hitl: "Agent surfaces analysis and recommendations only. No package master changes without joint finance and clinical review."
      capabilities:
        - "Package-level margin analysis by payer and service line"
        - "Structural loss identification ranked by financial impact"
        - "Package master component and bundling review"
        - "Profitability optimisation recommendations"
        - "Runtime package selection support to maximise margin per episode"
  supply:
    label: "Also in the FinOps domain"
    heading: "Supply Chain Optimisation"
    intro: "Healthcare supply chain sits within the FinOps domain — procurement costs, inventory levels, and demand forecasting directly affect operational margins. The Supply Intelligence Agent extends FinOps coverage beyond revenue cycle into the supply side of the financial picture."
    badge: "Supply Intelligence Agent"
    desc: "Analyses demand signals across clinical departments. Supports procurement orchestration and inventory optimisation. Surfaces forecasts for human procurement team review and approval."
    capabilities:
      - "Demand signal analysis across clinical departments"
      - "Inventory optimisation recommendations"
      - "Procurement orchestration support"
      - "Supply forecast surfacing for human review"

outcomes:
  label: "What to Expect"
  titleLine1: "Indicative outcomes across claims,"
  titleLine2: "package profitability, and payer intelligence"
  caveat: "Indicative ranges based on the Design phase. Actual improvement is anchored in your Audit baseline."
  stats:
    - value: "40–60%"
      label: "Claim submission TAT reduction"
    - value: "10–15 pp"
      label: "First-pass acceptance rate improvement"
    - value: "30–50%"
      label: "Query rate reduction"
    - value: "40–60%"
      label: "Query closure TAT reduction"
    - value: "20–40%"
      label: "Deduction rate reduction"
    - value: "15–30%"
      label: "Revenue recovered through appeals"
    - value: "8–15%"
      label: "Improvement in package-level margin through optimisation"
    - value: "30–50%"
      label: "Reduction in structurally loss-making package episodes"
    - value: "30–50%"
      label: "Staff time per claim reduction"

variants:
  label: "Workflow Variant Reality"
  title: "No two payer relationships work the same way."
  prose:
    - "A government scheme oncology claim has fundamentally different documentation requirements, authorisation logic, and portal workflows than a commercial insurer elective surgery claim. Our methodology maps each significant payer type and claim category as a distinct workflow variant, each with its own logic and requirements."
    - "This matters because automation targeted at the wrong variant produces the wrong result. Our Outcomes-Driven Optimization Blueprint for claims starts with your specific payer mix, procedure mix, and current KPI baseline — before we configure a single agent."
---

FinOps solution page content
