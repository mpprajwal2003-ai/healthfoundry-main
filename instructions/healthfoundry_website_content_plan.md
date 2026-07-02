# HealthFoundry.ai — Website Content Generation Plan
### A Complete Brief for Claude Design to Generate a New Website

**Version 1.0 | July 2026**

---

## Design Principles & Constraints

Before generating any content, Claude Design must internalize these non-negotiable guidelines:

**1. Semi-autonomous, not fully autonomous.** Agents are described as semi-autonomous with humans always in control and holding final decision-making authority. Never use language like "fully automated," "autonomous decision-making," or "replaces human judgment." Use instead: "augments," "assists," "works alongside," "surfaces," "flags," "recommends," "drafts for human review."

**2. Outcomes-led, not technology-led.** Every claim about AI must be anchored in a specific measurable outcome. No generic AI hype. Every agent capability ties to a KPI improvement.

**3. Healthcare-domain credibility.** Use correct industry terminology throughout: HL7, FHIR, ICD-10, HBP codes, HIPAA, HITRUST, EMR/EHR, HIS, RCM, pre-authorisation, care continuity, discharge TAT. This signals genuine domain expertise.

**4. Honest about complexity.** The platform helps customers navigate genuinely hard problems. Tone should be confident and substantive — not breathless or startup-generic.

**5. Agentic AI Platform is the core.** The three domain products (CX, FinOps, GRC) are applications built on the Intelligence Fabric platform. The platform story comes first; the domain applications are the proof points.

---

## Site Architecture

```
healthfoundry.ai/
├── index.html              (Homepage)
├── platform/               (The Intelligence Fabric — core platform page)
├── solutions/
│   ├── customer-experience/   (Patient/Customer CX Platform)
│   ├── finops/                (Revenue Cycle & Supply Chain)
│   └── governance/            (GRC Platform)
├── why-us/                 (Differentiators — updated from current)
├── security/               (Security & Compliance — updated from current)
├── company/                (About — founding story, team, mission, values)
├── careers/
├── blog/
└── contact/
```

---

## Page 1: Homepage (`index.html`)

### Meta

```
<title>HealthFoundry | Agentic AI for Healthcare Operations</title>
<meta name="description" content="HealthFoundry's Intelligence Fabric platform deploys semi-autonomous AI agents across healthcare FinOps, patient experience, and governance — measurable outcomes in 8 weeks.">
```

### Section 1 — Hero

**Headline (H1):**
> The Intelligence Fabric for Healthcare Operations

**Sub-headline:**
> Semi-autonomous AI agents that work alongside your teams to improve revenue, retention, and compliance — built on the same clinical and operational data your hospital already generates.

**Supporting copy (below sub-headline):**
> HealthFoundry deploys purpose-built AI agents across revenue cycle, patient engagement, and governance — each operating with human oversight at every decision point. Measurable outcomes in 8 weeks, starting where your data already lives.

**Hero CTA buttons:**
- Primary: "Book a Discovery Call"
- Secondary: "See the Platform"

**Hero stats bar (4 stats):**
| Stat | Label |
|------|-------|
| 8 Weeks | Median time to first measurable outcome |
| 40–60% | Reduction in claim submission TAT |
| 30–50% | Improvement in care gap follow-up rate |
| Human-in-the-loop | At every consequential decision |

---

### Section 2 — The Problem We Solve

**Label:** The Challenge

**Headline:**
> Healthcare operations generate the data. Most organisations can't act on it.

**Body copy:**
> Every hospital produces the information it needs to recover more revenue, retain more patients, and stay compliant — in discharge summaries, EMR records, lab reports, payer portals, and clinical documentation. The problem is that this data is fragmented, unstructured, and scattered across systems that don't talk to each other. The result: care gaps go unfollowed, claims take weeks to submit, deductions go unchallenged, and feedback goes unresolved.

> HealthFoundry's Intelligence Fabric sits on top of your existing systems — Epic, Cerner, Meditech, your HIS, your payer portals — and deploys AI agents that read, analyse, and act on that data, with your team in control of every consequential decision.

---

### Section 3 — The Platform (Intelligence Fabric Overview)

**Label:** The Platform

**Headline:**
> One platform. Three domains. Every agent answerable to a human.

**Intro:**
> The HealthFoundry Intelligence Fabric is a domain-aware agentic AI platform built specifically for hospital operations. It is not a chatbot. It is not a dashboard. It is a network of purpose-built agents that orchestrate real operational work — reading clinical documents, checking payer portals, tracking follow-up queues, flagging compliance risks — and surfacing the right information to the right person at the right moment.

**Three platform pillars (as cards):**

**Card 1 — Customer / Patient Experience**
Icon: 🤝
> Agents that support patient acquisition, care continuity, and follow-up — so no care gap goes unacted on and no patient falls through the cracks.
> [Learn more →]

**Card 2 — FinOps**
Icon: 💰
> Agents that support revenue cycle operations — from eligibility verification and pre-authorisation through claim assembly, query management, and deduction analysis.
> [Learn more →]

**Card 3 — Governance, Risk & Control**
Icon: 🛡️
> Agents that monitor billing compliance, clinical documentation quality, regulatory adherence, and audit readiness — continuously, not periodically.
> [Learn more →]

---

### Section 4 — How It Works (3-step)

**Label:** How We Work

**Headline:**
> From your existing data to measurable outcomes in 8 weeks

**Step 1 — Audit & Discover**
> We map your current operations against a structured framework — revenue cycle, patient engagement, or GRC. We validate your KPIs, identify the root causes of performance gaps, and build an evidence-based improvement blueprint. We call this the Outcomes-Driven Optimization Blueprint.

**Step 2 — Deploy Agents**
> We configure and deploy AI agents against the specific bottlenecks identified in the audit. Each agent is connected to your existing systems via HL7, FHIR, or API — no rip-and-replace. Your team reviews agent outputs and retains decision authority throughout.

**Step 3 — Learn & Optimise**
> Agents improve continuously from operational feedback. We track outcomes against target KPIs, tune agent configuration, and expand scope as confidence builds. Human oversight governs every stage.

---

### Section 5 — The Human-in-the-Loop Commitment

**Label:** Our Approach

**Headline:**
> AI that assists. Humans who decide.

**Body copy:**
> Every HealthFoundry agent is designed as a semi-autonomous system. Agents read, analyse, draft, flag, and recommend. Humans review, confirm, approve, and act. For every consequential workflow — claim submissions, patient communications, compliance decisions, write-off approvals — a human holds authority.

> This isn't a limitation. It's the right design for healthcare. We build agent confidence incrementally, through a structured pilot-to-rollout process that earns trust before expanding scope. Your teams aren't replaced — they're elevated from manual data-chasing to high-judgment oversight.

**Supporting callouts (3):**
- 🧠 **Semi-autonomous by design** — agents surface, recommend, and draft; humans confirm and approve
- 👤 **Structured escalation** — every agent has defined thresholds above which a human must decide
- 📚 **Continuously improving** — agents learn from staff feedback, exceptions, and outcome data

---

### Section 6 — Key Stats / Outcome Ranges

**Label:** What to Expect

**Headline:**
> Indicative outcomes from deployed agents

*Small caveat line:* "Ranges based on design-phase targets refined from Audit findings. Actual outcomes vary by starting baseline."

| Domain | Metric | Indicative Range |
|--------|--------|-----------------|
| FinOps | Claim submission TAT reduction | 40–60% |
| FinOps | First-pass acceptance rate improvement | 10–15 pp |
| FinOps | Query closure TAT reduction | 40–60% |
| Customer CX | Care gap follow-up completion improvement | 30–50% |
| Customer CX | Appointment no-show rate reduction | 20–35% |
| Customer CX | Feedback coverage improvement | 30–50 pp |
| GRC | TAT breach rate reduction | 20–40% |
| All | Median time to first measurable outcome | 8 weeks |

---

### Section 7 — Mission

**Label:** Mission

**Headline:**
> Build the system of intelligence to drive reliable, frictionless, and scalable healthcare outcomes.

**Mission pillars (5 cards — keep existing content, update wording):**

1. **Unify** — Clean and integrate data from fragmented legacy systems into a unified foundation for AI agents to act on.
2. **Intelligence** — Build a system of intelligence on your existing systems of record — leaping from raw data to operational action.
3. **Reliable** — Automate repeatable patient, operational, and financial workflows that deliver consistent outcomes at scale.
4. **Frictionless** — Orchestrate seamless data transfer across departments and systems — from patient acquisition through billing, claims, and chronic care.
5. **Scale** — Replicate operational excellence across multiple facilities and care settings, regardless of staff experience.

---

### Section 8 — Team

*(Keep existing team section. Update intro copy.)*

**Updated intro copy:**
> Built by clinicians, healthcare technology engineers, revenue cycle specialists, and data scientists — people who have lived inside healthcare operations and understand the difference between a promising demo and a workflow that survives Monday morning.

---

### Section 9 — Security Teaser

*(Update the existing section — fix the broken CTA button)*

**Updated body:**
> Enterprise-grade security infrastructure designed specifically for healthcare. HIPAA and HITRUST CSF compliant. Deployed in your infrastructure of choice — on-premise Kubernetes, Google Cloud, AWS, Azure, or air-gapped hybrid. Patient data stays in your environment.

**CTA:** "Read our security posture →"

---

### Section 10 — Footer CTA

**Headline:** Ready to see the Intelligence Fabric in your environment?

**Sub:** Most engagements begin with a structured discovery session — we map your current operations, validate your KPIs, and show you where agents can move the needle first.

**CTA Button:** "Book a Discovery Call"

---

## Page 2: Platform (`/platform/`)

### Meta

```
<title>The Intelligence Fabric | HealthFoundry Platform</title>
<meta name="description" content="HealthFoundry's Intelligence Fabric: a domain-aware agentic AI platform for healthcare operations. Semi-autonomous agents across FinOps, patient experience, and GRC — human-in-the-loop throughout.">
```

### Section 1 — Hero

**H1:**
> The Intelligence Fabric
> A domain-aware agentic AI platform for hospital operations

**Sub:**
> Not a dashboard. Not a chatbot. A network of purpose-built, semi-autonomous AI agents that read your clinical and operational data, identify what needs to happen, and support your teams to act — with human oversight built into every consequential step.

---

### Section 2 — Architecture Overview

**Label:** Platform Architecture

**Headline:**
> Built in layers. Deployed in weeks.

**Architecture narrative (4 layers, described in prose with supporting visual reference):**

**Layer 1 — Integration & Data**
> The Intelligence Fabric connects to your existing systems via HL7, FHIR, HL7 v2, REST API, or flat file. Pre-built connectors for Epic, Cerner, Meditech, and major HIS, CRM, and SCM platforms. File, API, and CDC ingestion. Real-time and batch pipelines. Your data stays in your environment.

**Layer 2 — Domain Data Foundation**
> Raw system data is cleaned, normalised, and structured into domain-specific data cubes — clinical, financial, operational. Governed metric definitions. Historical and real-time views. Cross-domain federation for workflows that span departments. This is the factual foundation agents reason over.

**Layer 3 — Agent Platform (the Intelligence Fabric core)**
> The core of the platform: the agent runtime, orchestration layer, and human-in-the-loop governance framework. Key capabilities:
> - **Agent lifecycle management** — deploy, monitor, retrain, and retire agents systematically
> - **Multi-agent orchestration** — agents that coordinate across domains (e.g., a care gap agent triggering a follow-up agent)
> - **Human-in-the-loop (HITL) governance** — every agent has defined confidence thresholds and impact boundaries above which a human must confirm
> - **Self-learning (RLHF/GEPA)** — agents improve from operational feedback, exception analysis, and outcome data
> - **LLM observability** — full visibility into model behaviour, prompt performance, and output quality
> - **Cost-aware model execution** — task-specific model routing to balance accuracy and cost
> - **Conversational mode** — natural language query across operational data cubes, beyond fixed dashboards

**Layer 4 — Domain Agent Applications**
> Six domain-specific agent types operate across the three platform applications:

| Agent | Domain | What it does |
|-------|--------|-------------|
| Patient Engagement Agent | Customer CX | Automates outreach, reminders, and care coordination across acquisition and retention workflows |
| Care Continuity Agent | Customer CX | Monitors care plan transitions, identifies care gaps, and manages follow-up orchestration |
| RCM Optimisation Agent | FinOps | Supports claim review, denial prediction, coding assistance, and query management |
| Supply Intelligence Agent | FinOps | Analyses demand signals and supports procurement orchestration for supply chain |
| GRC Compliance Agent | GRC | Monitors policy adherence, flags risk, and supports audit trail preparation |
| Analytics & Insights Agent | Cross-domain | Natural language query across operational data cubes for any domain |

---

### Section 3 — The Human-in-the-Loop Model (expanded)

**Label:** Governance Model

**Headline:**
> Every agent has a human in the loop. Here's what that means in practice.

**Body:**
> Semi-autonomous means agents do the work that doesn't require human judgment, and surface the decisions that do — with the context needed to make them well.

> We classify every agent action into one of three categories:

**Category 1 — Agent handles autonomously**
> Continuous monitoring, KPI computation, pattern detection, routine alerting, scheduling reminders, feedback routing, data quality monitoring. No human needed in the loop for each individual event — only for the exceptions.

**Category 2 — Agent handles, human validates**
> Ambiguous guideline interpretations, high-impact configuration changes, novel failure modes, clinical content for patient communications, write-off approvals above defined thresholds. Agent does the work and presents a bounded decision for human confirmation. Typically 15–40 minutes of human time per occurrence.

**Category 3 — Human-led, agent supports**
> Payer relationship negotiation, automation roadmap strategy, process redesign, staff adoption and change management, accountability for consequential errors. Agent prepares the evidence and analysis; human leads the decision and the action.

> The practical result: your team's time shifts from manual data-chasing and routine tracking toward high-judgment oversight of a system that handles the operational load.

---

### Section 4 — Deployment Options

**Label:** Infrastructure

**Headline:**
> Deployed in your environment. Not ours.

**Options (4 cards):**

1. **On-Premise Kubernetes** — Full deployment within your own data centre. Air-gap capable for maximum data sovereignty.
2. **Google Cloud** — Managed cloud deployment with customer-controlled access and data residency.
3. **AWS / Azure** — Standard cloud deployment options with your existing cloud agreements.
4. **Hybrid / Air-Gapped** — For environments requiring split deployment across on-premise and cloud components.

**Supporting copy:**
> The Intelligence Fabric is Kubernetes-native — designed for portability across any compliant infrastructure. Your patient data never leaves your environment without your explicit authorisation.

---

### Section 5 — AI Models

**Label:** AI Engine

**Headline:**
> Models built for healthcare, not adapted from general purpose.

**Body:**
> The Intelligence Fabric uses a combination of model types, selected by task and optimised for cost and accuracy:

- **Large Language Models** — for document understanding, clinical content extraction, and natural language query
- **Deep Learning models** — for pattern recognition across operational and financial data
- **Task-specific fine-tuned models** — fine-tuned on customer data for domain-specific accuracy (coding validation, care gap extraction, denial prediction)
- **RLHF / GEPA** — reinforcement learning from human feedback, driving continuous improvement from operational use

> Model selection is cost-aware — the platform routes each task to the right model at the right cost, avoiding LLM overhead for deterministic tasks.

---

### Section 6 — Platform CTA

**Headline:** See the Intelligence Fabric mapped to your operations.

**Sub:** We begin every engagement with a structured discovery session — mapping your current workflows, validating your KPIs, and identifying where agents can be deployed first for the fastest measurable impact.

**CTA:** "Book a Discovery Call"

---

## Page 3: Customer / Patient Experience Solution (`/solutions/customer-experience/`)

### Meta

```
<title>Patient & Customer Experience | HealthFoundry</title>
<meta name="description" content="HealthFoundry's Patient Experience agents support acquisition, care continuity, and feedback management — helping healthcare providers retain patients and close care gaps at scale.">
```

### Section 1 — Hero

**H1:**
> Patient Experience, at scale
> From first enquiry to long-term care continuity

**Sub:**
> Care gaps buried in discharge summaries. Follow-up care that never gets scheduled. Feedback that gets collected but never resolved. HealthFoundry's Patient Experience agents surface what your operational data already knows — and support your teams to act on it.

---

### Section 2 — The Four Systems

**Label:** What We Address

**Headline:**
> Customer relationship management in healthcare is four interacting systems — not one.

**Intro:**
> Our engagement begins with an Outcomes-Driven Optimization Blueprint — a structured audit of your current state across all four CRM systems, before we configure a single agent.

**System 1 — Customer Acquisition**
> Converting enquiries, referrals, and digital leads into confirmed appointments and admissions. Agents that support: lead pipeline management, estimate generation, appointment reminder and confirmation sequences, no-show risk identification.

**System 2 — Customer Retention**
> Re-engaging existing patients for follow-up care — before, during, and after the clinical episode. The highest-leverage system in the domain.
>
> The core challenge: actionable follow-up requirements exist in every discharge summary, prescription, lab report, and radiology result your hospital generates. Most are never systematically acted on — because extracting them manually at scale is not feasible.
>
> Agents that support: care gap identification from unstructured clinical documents, outreach orchestration, personalised follow-up communication (with human review for clinical content), post-discharge care management, chronic disease programme continuity.

**System 3 — Customer Feedback**
> Capturing, routing, resolving, and learning from patient experience signals across all channels. Agents that support: feedback collection triggering at the right point in the patient journey, sentiment classification and routing, service ticket management and escalation alerting, external platform monitoring (Google Reviews, social media), resolution TAT tracking.

**System 4 — Service Excellence**
> The operational efficiency of care delivery as the patient experiences it: waiting times, diagnostic TATs, admission and discharge workflows. Agents that support: real-time TAT monitoring, breach alerts before they happen (not after), bottleneck identification within radiology and lab workflows, discharge readiness coordination.

---

### Section 3 — Key Agent Capabilities

**Label:** Agents

**Patient Engagement Agent:**
> Manages outreach queues for acquisition leads and retention follow-ups. Triggers communications at the right point in the patient journey. Tracks responses and non-responses. Escalates non-responders to phone-based follow-up. Human agents review all communications before dispatch for clinical content.

**Care Continuity Agent:**
> Reads discharge summaries, prescriptions, radiology reports, and lab results to identify follow-up requirements. Generates structured care gap records for the retention team's review. Orchestrates the outreach sequence with human oversight at each stage.

*Note for Claude Design: Use language like "reads and identifies," "surfaces," "generates for review" — not "automatically decides" or "autonomously acts on."*

---

### Section 4 — Indicative Outcomes

| Metric | Indicative Improvement |
|--------|----------------------|
| Care gap follow-up completion rate | 30–50% improvement |
| Lead-to-appointment conversion | 15–25 pp improvement |
| Appointment no-show rate | 20–35% reduction |
| Post-discharge follow-up completion | 30–50% improvement |
| Feedback coverage (inpatient + outpatient) | 30–50 pp improvement |
| Service ticket resolution TAT | 30–50% reduction |

*"Ranges are indicative. Actual outcomes are defined during the Audit phase based on your current baseline."*

---

### Section 5 — How We Start

**Our Outcomes-Driven Optimization Blueprint — CRM Edition:**

1. **Audit** — We validate your current KPIs across all four systems and attribute performance gaps to People, Process, Tools, or Data root causes.
2. **Discover** — We map your actual workflows (not just the SOPs) through structured sessions and shadowing — covering all significant workflow variants by patient type and service line.
3. **Design** — We specify the agent interventions that address your highest-impact, most addressable bottlenecks — with target KPIs for each.
4. **Deploy** — Staged pilot in one system or unit, before broader rollout. Change management is built in.
5. **Learn & Optimise** — Continuous improvement from operational feedback, exception analysis, and outcome tracking.

---

## Page 4: FinOps Solution (`/solutions/finops/`)

### Meta

```
<title>Healthcare FinOps | Revenue Cycle & Supply Chain | HealthFoundry</title>
<meta name="description" content="HealthFoundry's FinOps agents support claims management, pre-authorisation, revenue cycle optimisation, and supply chain intelligence for healthcare providers.">
```

### Section 1 — Hero

**H1:**
> Revenue Cycle Operations, Rethought
> From claim assembly to settlement — with agents working alongside your team

**Sub:**
> Claims take too long to submit. Queries pile up. Deductions go unchallenged. Payer guidelines change faster than SOPs. HealthFoundry's FinOps agents address the root causes — data fragmentation, manual data assembly, and missing operational visibility — while keeping your team in control of every consequential decision.

---

### Section 2 — The Claims Lifecycle

**Label:** What We Address

**Headline:**
> The claims lifecycle has eight stages. Bottlenecks exist at each one.

**Lifecycle stages with agent support:**

**1. Patient Registration & Eligibility Verification**
Agent support: Automated eligibility checks at point of registration. Structured alerts when verification fails or returns uncertain results.

**2. Pre-Authorisation**
Agent support: Pre-auth package assembly from source systems. Portal status monitoring. Query response drafting for human review. Reauthorisation triggering for multi-cycle treatment cases (oncology, dialysis, rehabilitation). Supports PM-JAY Tumor Board certification workflow.

**3. Clinical Documentation & Coding**
Agent support: Coding validation against ICD-10 and payer package definitions (including PM-JAY HBP codes) before submission. Flagging of mismatched or unsupported code combinations for coding team review.

**4. Claim Assembly & Submission**
Agent support: Automated retrieval and assembly of required data elements from HIS, EMR, RIS, pharmacy, and lab systems. Submission TAT tracking. Internal quality check support before submission.

**5. Query Management**
Agent support: Query classification by type and payer. Documentation retrieval for response assembly. Draft responses surfaced for human review. Open query ageing alerts.

**6. Adjudication Monitoring & Settlement Reconciliation**
Agent support: Adjudication status monitoring across payer portals. Settlement-to-submission reconciliation. Discrepancy flagging for human investigation.

**7. Deduction & Rejection Management**
Agent support: Automatic classification of deduction and rejection reasons. Historical overturn rate analysis for appeal viability scoring. Appeal package assembly for human review and approval. Write-off recommendations below defined value thresholds (above threshold, human must approve).

**8. Reauthorisation**
Agent support: Reauthorisation initiation alerts for multi-cycle cases approaching authorisation expiry. Clinical evidence assembly for reauth package. Human clinical review before submission.

---

### Section 3 — Payer Intelligence

**Label:** Payer Rule Intelligence

**Headline:**
> Payer guidelines change. Agents that stay current.

**Body:**
> For government scheme payers like PM-JAY, package and guideline changes are frequent — and non-absorption is directly penalised through deductions. HealthFoundry's Payer Rule Intelligence capability continuously monitors payer publication channels for changes to package definitions, documentation requirements, and coding guidelines.

> When a change is detected, the agent parses it, identifies the operational delta, and surfaces a structured update for the claims team to review. Unambiguous, low-impact updates can be applied to agent configuration after human confirmation. Ambiguous changes — where the interpretation is unclear — are presented with both interpretations and their expected financial impact, for the claims manager to confirm.

> Payer guideline currency is a continuous operational risk, not a one-time onboarding exercise.

---

### Section 4 — Key Agent Capabilities

**RCM Optimisation Agent:**
> Supports claims review, denial prediction, and coding assistance. Reviews assembled claim packages against payer rules before submission. Identifies patterns in deduction and rejection data that indicate upstream process changes needed.

**Supply Intelligence Agent:**
> Analyses demand signals across clinical departments. Supports procurement orchestration and inventory optimisation. Surfaces forecasts for human procurement team review and approval.

---

### Section 5 — Indicative Outcomes

| Metric | Indicative Improvement |
|--------|----------------------|
| Claim submission TAT | 40–60% reduction |
| First-pass acceptance rate | 10–15 pp improvement |
| Query rate | 30–50% reduction |
| Query closure TAT | 40–60% reduction |
| Deduction rate | 20–40% reduction |
| Rejection rate | 30–50% reduction |
| Revenue recovered through appeals | 15–30% improvement |
| Staff time per claim | 30–50% reduction |

*"Indicative ranges based on the Design phase. Actual improvement is anchored in your Audit baseline."*

---

### Section 6 — The Workflow Variant Reality

**Body:**
> No two payer relationships work the same way. A PM-JAY oncology claim has fundamentally different documentation requirements, authorisation logic, and portal workflows than a commercial insurer elective surgery claim. Our methodology maps each significant payer type and claim category as a distinct workflow variant — not a generic process with exceptions.

> This matters because automation targeted at the wrong variant produces the wrong result. Our Outcomes-Driven Optimization Blueprint for claims starts with your specific payer mix, procedure mix, and current KPI baseline — before we configure a single agent.

---

## Page 5: GRC Solution (`/solutions/governance/`)

### Meta

```
<title>Healthcare Governance, Risk & Compliance | HealthFoundry</title>
<meta name="description" content="HealthFoundry's GRC agents monitor billing compliance, clinical documentation quality, and regulatory adherence — continuously, not periodically.">
```

### Section 1 — Hero

**H1:**
> Governance, Risk & Control
> Continuous monitoring, not periodic audits

**Sub:**
> Compliance in healthcare is not a quarterly exercise. Billing errors, documentation gaps, and regulatory deviations accumulate continuously — and are typically discovered after the damage is done. HealthFoundry's GRC agents monitor your operations in real time, surfacing risks for human review before they become findings.

---

### Section 2 — What We Address

**Billing Compliance Monitoring**
> Continuous monitoring of billing activity against applicable regulatory standards, payer rules, and package definitions. Risk-scoring of billing patterns. Human-reviewed alerts for anomalies that may indicate documentation gaps, upcoding risk, or guideline non-compliance.

**Clinical Documentation Quality**
> Monitoring of clinical documentation completeness and quality relative to billing requirements. Flags for missing or insufficient documentation that would generate claim queries or deductions. Surfaced to clinical and coding teams for correction before submission.

**Audit Trail Management**
> Automated maintenance of structured audit trails for clinical, billing, and operational actions. Audit-ready reporting generated on demand, not compiled under pressure when an inspection is announced.

**Regulatory Adherence Monitoring**
> Monitoring for adherence to applicable regulatory frameworks and operational standards. Alert generation when patterns deviate from policy. Structured escalation to the appropriate human authority.

**Risk Scoring**
> Continuous risk scoring across operational domains — identifying which cases, departments, or billing patterns carry the highest compliance risk — so human reviewers can prioritise their attention effectively.

---

### Section 3 — GRC Agent

**GRC Compliance Agent:**
> Monitors policy adherence, flags risk, generates audit preparation reports, and supports CAPA documentation. Operates continuously — not on a monthly or quarterly cycle. Human compliance team reviews flagged cases and approves remediation actions.

---

### Section 4 — Indicative Outcomes

| Metric | Indicative Improvement |
|--------|----------------------|
| TAT breach rate by service type | 20–40% reduction |
| Audit preparation time | Significant reduction (on-demand vs. manual compilation) |
| Documentation completeness at billing | Measurable improvement (baseline-dependent) |
| Risk identification lead time | From after-the-fact to real-time |

---

## Page 6: Why Us (`/why-us/`) — Major Update

### Meta

```
<title>Why HealthFoundry | Purpose-Built Healthcare AI Agents</title>
<meta name="description" content="HealthFoundry: domain-aware agentic AI that works with your existing systems, starts with evidence not technology, and keeps humans in control of every consequential decision.">
```

### Section 1 — Hero

**H1:**
> Why HealthFoundry

**Sub:**
> The only platform that starts with your operational data, maps your actual bottlenecks before configuring a single agent, and keeps your team in control throughout.

---

### Section 2 — Three Core Differentiators (major update from current)

**Differentiator 1: Evidence Before Automation**

**Headline:** We audit before we automate.

**Body:**
> Every HealthFoundry engagement begins with the Outcomes-Driven Optimization Blueprint — a structured audit and discovery process that validates your current KPIs, maps your actual workflows (not just the SOPs), attributes performance gaps to People, Process, Tools, or Data root causes, and identifies the specific bottlenecks where agents will have the greatest measurable impact.

> Most platforms arrive with a pre-configured product and try to fit your operations around it. We arrive with a methodology and configure agents against the specific, validated reality of how your operations work. This is why our outcomes are measurable — because they're designed against a baseline.

---

**Differentiator 2: Agents That Understand Healthcare**

**Headline:** Purpose-built for clinical and revenue workflows — not adapted from generic AI.

**Body:**
> HealthFoundry agents are configured against the actual data structures of healthcare operations: HL7, FHIR, and C-CDA data streams; ICD-10 and procedure code validation against payer package definitions; PM-JAY HBP code logic; discharge summary extraction; pre-authorisation portal workflows; care plan milestones.

> They integrate with Epic, Cerner, Meditech, and major HIS platforms. No rip-and-replace required — we sit on top of your systems of record and orchestrate the intelligence layer between them.

> Forget generic chatbots. Our agents can read a discharge summary and identify care gap requirements. They can check a claim against a payer's package rules before submission. They can monitor payer portal status and alert your team before a query deadline is missed.

---

**Differentiator 3: Humans Always in Control**

**Headline:** Semi-autonomous by design. Not a constraint — a principle.

**Body:**
> We are deliberate about what agents do and what humans decide. Agents monitor, read, extract, classify, draft, and recommend. For every consequential action — patient communications with clinical content, claim submissions, appeal approvals, compliance findings, write-offs above threshold — a human holds the decision.

> This is not because we lack the technology for full autonomy. It is because healthcare decisions carry real consequences for real patients and real revenue, and the right trust between human and AI is built incrementally through structured pilots, demonstrated accuracy, and earned confidence — not assumed on day one.

> We structure every deployment around a pilot-to-rollout process, explicitly designed to build that confidence before expanding agent scope.

---

**Differentiator 4: Domain Expertise, Not Platform Vendors**

**Headline:** We close the loop from technology to outcomes. No handoffs.

**Body:**
> HealthFoundry is built by clinicians, healthcare product engineers, revenue cycle specialists, and data scientists. We understand the difference between a technically functional agent and one that handles the real workflow — including the informal decision rules, the edge cases, the payer-specific nuances, and the variance between what the SOP says and what actually happens on a Monday morning.

> We don't hand off implementation to a third party. We don't sell software and leave you to figure it out. We own the outcome — from the initial audit through deployment, learning, and optimisation — as a continuous engagement.

---

### Section 3 — Replace placeholder "Security Architecture Visual"

**Replace with:** A simple 3-column table showing the Human-in-the-Loop framework:

| Agent handles autonomously | Agent + Human validation | Human-led, agent supports |
|---------------------------|--------------------------|--------------------------|
| KPI monitoring | Ambiguous guideline interpretation | Payer negotiation |
| Pattern detection | High-impact config changes | Automation strategy |
| Routine alerting | Clinical content review | Process redesign |
| Data quality monitoring | Write-offs above threshold | Staff change management |
| Feedback routing | Appeal approval | Accountability |

---

## Page 7: Security (`/security/`) — Content Update

*(Structure is good — update copy and fix broken CTA)*

### Updated hero sub-copy:
> Enterprise-grade security infrastructure built specifically for healthcare. Patient data stays in your environment. We are HIPAA compliant, HITRUST CSF certified, and DPDP compliant — with SOC 2 and ISO 27001 readiness built into the platform architecture.

### Fix CTA button:
**Button text:** "Talk to us about your security requirements →"

### Add one new card: **"Deployment in Your Infrastructure"**
> The Intelligence Fabric is deployed in your infrastructure — on-premise Kubernetes, Google Cloud, AWS, Azure, or hybrid/air-gapped. No patient data is processed in HealthFoundry's own cloud. Customer-controlled deployment is a structural feature of the platform, not an option.

---

## Page 8: Company / About (`/company/`)

*This page does not currently exist — needs to be created.*

### Meta

```
<title>About HealthFoundry | Healthcare AI Built by Domain Experts</title>
<meta name="description" content="HealthFoundry was founded by clinicians, healthcare technology engineers, and revenue cycle specialists to solve the hardest operational problems in healthcare.">
```

### Section 1 — Founding Story

**Label:** Our Story

**Headline:**
> Built by people who have lived inside healthcare operations.

**Body (suggested — to be refined with founder input):**
> HealthFoundry was founded by a team that has spent years at the intersection of clinical care, healthcare technology, and revenue cycle operations. We have seen what happens when AI is applied to healthcare without understanding how healthcare actually works — generic tools that look impressive in demos and fail under the operational reality of real hospitals.

> We built HealthFoundry to do something different: start with the evidence, map the actual operations, and deploy agents that handle real workflows — not idealised ones. Every engagement begins with a structured audit. Every agent is configured against a validated bottleneck. Every deployment is governed by human oversight from day one.

> HealthFoundry is registered as HealthFoundry Private Limited, Bengaluru. Our team spans clinical informatics, revenue cycle management, agentic AI engineering, and data science.

---

### Section 2 — Mission, Values (move from homepage)

*(Move the existing mission and values content here, keep on homepage as a teaser)*

---

### Section 3 — Team

*(Move existing team section here, keep on homepage as a teaser)*

---

## Navigation — Fixes Required

### Current nav issues to fix:

1. **"Contact" link is empty** — replace `<a href="contact/index.html"></a>` with `<a href="contact/index.html">Contact</a>` across all pages

2. **Update nav structure:**

```
Platform | Solutions ▾ | Why Us | Security | Resources ▾ | Careers | Book a Call
                  ↓
       Customer Experience
       FinOps
       Governance & Risk
```

3. **Fix mobile nav** — same empty contact link exists in mobile menu

---

## Footer — Fixes Required

1. **Fix empty contact link** in Connect column
2. **Fix dead Twitter link** — update to actual X/Twitter handle or remove
3. **Add email address** visibly (currently hidden behind Cloudflare obfuscation — make it readable)
4. **Uncomment Resources column** — add Blog and Case Studies links when content exists

---

## Meta Tags — Full Site Update

| Page | Title | Description |
|------|-------|-------------|
| Homepage | HealthFoundry \| Agentic AI for Healthcare Operations | HealthFoundry's Intelligence Fabric platform deploys semi-autonomous AI agents across healthcare FinOps, patient experience, and governance — measurable outcomes in 8 weeks. |
| Platform | The Intelligence Fabric \| HealthFoundry Platform | A domain-aware agentic AI platform for hospital operations. Semi-autonomous agents across revenue cycle, patient experience, and GRC — human-in-the-loop throughout. |
| Customer CX | Patient & Customer Experience \| HealthFoundry | AI agents that support patient acquisition, care continuity, and feedback management — helping healthcare providers close care gaps at scale. |
| FinOps | Healthcare FinOps \| HealthFoundry | Semi-autonomous agents supporting claims management, pre-authorisation, revenue cycle optimisation, and supply chain intelligence. |
| GRC | Governance, Risk & Compliance \| HealthFoundry | Continuous monitoring of billing compliance, clinical documentation quality, and regulatory adherence — surfaced to your team in real time. |
| Why Us | Why HealthFoundry \| Purpose-Built Healthcare AI | Evidence-first. Domain-aware. Human-in-the-loop throughout. The only platform that audits your operations before automating them. |
| Security | Security & Compliance \| HealthFoundry | HIPAA, HITRUST CSF, DPDP compliant. Deployed in your infrastructure. Patient data never leaves your environment. |
| Company | About HealthFoundry \| Built by Healthcare Domain Experts | Founded by clinicians, revenue cycle specialists, and healthcare AI engineers to solve the hardest operational problems in healthcare. |
| Contact | Book a Discovery Call \| HealthFoundry | Start with a structured discovery session — we map your operations, validate your KPIs, and show you where AI agents can move the needle first. |

---

## Content Tone Guide

**Write as:** A confident, domain-expert team speaking to a sophisticated healthcare operations audience — CFOs, CMOs, revenue cycle directors, CIOs. Not to a generic SaaS buyer.

**Use:**
- Specific clinical and operational terminology (discharge summaries, care gaps, pre-authorisation, ICD-10, HBP codes, FHIR, payer portals)
- Outcome ranges with caveats ("indicative," "baseline-dependent")
- "Augments," "supports," "surfaces," "flags," "recommends" — not "automates," "replaces," "fully autonomous"
- "Human-in-the-loop," "semi-autonomous," "human oversight," "human review"
- Confident claims anchored in specific evidence or process

**Avoid:**
- Generic AI hype: "revolutionary," "game-changing," "transformative," "cutting-edge"
- Overstatement of autonomy: "automatically decides," "eliminates human judgment," "fully automated"
- Vague claims: "improves efficiency," "drives better outcomes" without specifics
- Healthcare BI/analytics positioning: "data intelligence," "insights platform," "dashboard"

---

## Technical Requirements for Claude Design

1. **Astro framework** — the site is built with Astro v5. Maintain this stack.
2. **All pages need unique `<title>` and `<meta name="description">`** — see table above
3. **Fix team photo `src` paths in subdirectory pages** — change `rajesh.html` → `../rajesh.jpg` etc. across security, contact, why-us pages
4. **Fix empty `<a>` tags** — contact link in nav and footer across all pages
5. **Fix Security CTA button** — add visible text: "Book a Security Briefing →"
6. **Remove commented-out testimonial template code** — delete the entire commented block
7. **Replace "Our True North" placeholder** in hero stats with real content (see Section 1 above)
8. **og:title and og:description** — add Open Graph tags to all pages using same content as title/description
9. **Testimonials** — do not add until real quotes are available; section should be removed from source until ready

---

*This document is the complete brief for website content regeneration.*
*All copy is suggested and should be reviewed by the HealthFoundry founding team before publication.*
*Agent capability claims and outcome ranges should be verified against actual pilot data before going live.*

*Prepared by Claude Sonnet 4.6 | July 2026*
