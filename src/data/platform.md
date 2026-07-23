---
hero:
  label: The Platform
  title: The Intelligence Fabric
  titleSub: A domain-aware agentic AI platform for hospital operations
  subtitle: >-
    A network of purpose-built, semi-autonomous AI agents that read your clinical and
    operational data, identify what needs to happen, and support your teams to act —
    with human oversight built into every consequential step.
  ctaPrimary: Book a Discovery Call
  ctaSecondary: See the Architecture

architecture:
  label: Platform Architecture
  title: Built in layers. Deployed in weeks.
  intro: >-
    The Intelligence Fabric is structured as four distinct layers — from data ingestion at the
    bottom through to domain agent applications at the top. Each layer is independently
    deployable and connects cleanly to the next. Click any layer to see the full detail.

agents:
  label: Agents
  title: Six agents across three domains
  intro: >-
    Each agent is purpose-built for a specific operational domain and configured against the
    validated bottlenecks identified during your Audit & Discover phase. No generic
    assistants — every agent has a defined role, defined confidence thresholds, and defined
    escalation rules.
  items:
    - name: Patient Engagement Agent
      domain: cx
      description: "Manages outreach queues for acquisition leads and retention follow-ups. Triggers communications at the right point in the patient journey. Tracks responses and escalates non-responders to phone-based follow-up."
      capabilityTag: Care gap extraction
    - name: Care Continuity Agent
      domain: cx
      description: "Reads discharge summaries, prescriptions, radiology reports, and lab results to identify follow-up requirements. Generates structured care gap records for the retention team's review."
      capabilityTag: Discharge summary analysis
    - name: RCM Optimisation Agent
      domain: finops
      description: "Supports claim review, denial prediction, and coding assistance. Reviews assembled claim packages against payer rules before submission. Identifies patterns in deduction and rejection data."
      capabilityTag: Coding validation
    - name: Supply Intelligence Agent
      domain: finops
      description: "Analyses demand signals across clinical departments. Supports procurement orchestration and inventory optimisation. Surfaces forecasts for human procurement team review and approval."
      capabilityTag: Demand forecasting
    - name: GRC Compliance Agent
      domain: grc
      description: "Monitors policy adherence, flags risk, and supports audit trail preparation. Operates continuously — not on a monthly or quarterly cycle. Human compliance team reviews flagged cases."
      capabilityTag: Continuous monitoring
    - name: Analytics & Insights Agent
      domain: cross
      description: "Natural language query across operational data cubes for any domain. Enables conversational drill-down into clinical, financial, and operational data — beyond fixed dashboards."
      capabilityTag: Natural language query

hitl:
  label: Governance Model
  title: Every agent has a human in the loop. Here's what that means in practice.
  intro: >-
    Semi-autonomous means agents do the work that doesn't require human judgment, and surface
    the decisions that do — with the context needed to make them well.
  categories:
    - num: "01"
      title: Agent handles autonomously
      body: >-
        Continuous monitoring, KPI computation, pattern detection, routine alerting, scheduling
        reminders, feedback routing, data quality monitoring. No human needed in the loop for
        each individual event — only for the exceptions.
    - num: "02"
      title: Agent handles, human validates
      body: >-
        Ambiguous guideline interpretations, high-impact configuration changes, novel failure
        modes, clinical content for patient communications, write-off approvals above defined
        thresholds. Agent does the work and presents a bounded decision for human confirmation.
        Typically 15–40 minutes of human time per occurrence.
    - num: "03"
      title: Human-led, agent supports
      body: >-
        Payer relationship negotiation, automation roadmap strategy, process redesign, staff
        adoption and change management, accountability for consequential errors. Agent prepares
        the evidence and analysis; human leads the decision and the action.
  result: >-
    The practical result: your team's time shifts from manual data-chasing and routine tracking
    toward high-judgment oversight of a system that handles the operational load.

deployment:
  label: Infrastructure
  title: Deployed in your environment. Not ours.
  cards:
    - title: On-Premise Kubernetes
      description: >-
        Full deployment within your own data centre. Air-gap capable for maximum data
        sovereignty. Patient data never leaves your infrastructure.
    - title: Google Cloud
      description: >-
        Managed cloud deployment with customer-controlled access and data residency.
        Deployed in your GCP project — not HealthFoundry's.
    - title: AWS / Azure
      description: >-
        Standard cloud deployment options with your existing cloud agreements and IAM
        policies. Kubernetes-native — portable across providers.
    - title: Hybrid / Air-Gapped
      description: >-
        For environments requiring split deployment across on-premise and cloud components.
        Designed for the most stringent data residency requirements.
  note: >-
    The Intelligence Fabric is Kubernetes-native — designed for portability across any compliant
    infrastructure. Your patient data never leaves your environment without your explicit
    authorisation.

aiModels:
  label: AI Engine
  title: Models built for healthcare, not adapted from general purpose.
  intro: >-
    The Intelligence Fabric uses a combination of model types, selected by task and optimised
    for cost and accuracy. Model selection is cost-aware — the platform routes each task to the
    right model at the right cost, avoiding LLM overhead for deterministic tasks.
  cards:
    - title: Large Language Models
      description: >-
        For document understanding, clinical content extraction, and natural language query.
        Fine-tuned on healthcare terminology and workflow context.
      tags:
        - Document understanding
        - Clinical extraction
        - NL query
    - title: Deep Learning Models
      description: >-
        For pattern recognition across operational and financial data — denial prediction,
        care gap identification, supply demand forecasting.
      tags:
        - Pattern recognition
        - Denial prediction
        - Forecasting
    - title: Task-Specific Fine-Tuned Models
      description: >-
        Fine-tuned on customer data for domain-specific accuracy — coding validation against
        ICD-10 and payer package definitions, care gap extraction, deduction analysis.
      tags:
        - Coding validation
        - ICD-10
        - Customer-tuned
    - title: RLHF / GEPA
      description: >-
        Reinforcement learning from human feedback, driving continuous improvement from
        operational use. Agents improve from staff feedback, exceptions, and outcome data
        — automatically, without manual retraining cycles.
      tags:
        - Continuous improvement
        - Feedback loop
        - GEPA

cta:
  headline: See the Intelligence Fabric mapped to your operations.
  subtitle: >-
    We begin every engagement with a structured discovery session — mapping your current
    workflows, validating your KPIs, and identifying where agents can be deployed first
    for the fastest measurable impact.
  button: Book a Discovery Call
---

Platform page content
