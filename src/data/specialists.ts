export type SpecialistDomain =
  | "Build"
  | "Operate"
  | "Secure"
  | "Quality"
  | "Data"
  | "Knowledge";

export type SpecialistProfile = {
  id: string;
  name: string;
  profileCode: string;
  order: number;
  domains: SpecialistDomain[];
  focus: string;
  workflow: string;
  input: string;
  output: string;
  description: string;
  capabilities: string[];
  responsibilities: string[];
  guardrail: string;
  featured?: boolean;
};

export const specialistProfiles: SpecialistProfile[] = [
  {
    id: "front-end-slm",
    name: "Front-end SLM",
    profileCode: "BUILD / INTERFACE",
    order: 1,
    domains: ["Build", "Quality"],
    focus: "Product interface",
    workflow: "UI delivery",
    input: "Brief + designs",
    output: "Accessible UI",
    description:
      "Turns product intent and visual direction into responsive, production-minded interfaces.",
    capabilities: ["React", "Responsive UI", "Accessibility"],
    responsibilities: [
      "Translate approved designs into semantic, reusable components.",
      "Implement loading, empty, error, and success states.",
      "Verify keyboard, touch, and responsive behavior before handoff.",
    ],
    guardrail:
      "Does not change APIs, databases, or deployment configuration without a clear specialist handoff.",
    featured: true,
  },
  {
    id: "back-end-slm",
    name: "Back-end SLM",
    profileCode: "BUILD / SERVICES",
    order: 2,
    domains: ["Build", "Data"],
    focus: "Service logic",
    workflow: "API delivery",
    input: "Contract + data rules",
    output: "Tested service",
    description:
      "Builds bounded services and domain logic from an agreed contract, data model, and failure policy.",
    capabilities: ["APIs", "Domain logic", "Auth boundaries"],
    responsibilities: [
      "Implement validated endpoints and explicit failure paths.",
      "Keep domain rules separate from transport and persistence concerns.",
      "Add focused service and integration tests for the agreed contract.",
    ],
    guardrail:
      "Does not mutate production data, expose secrets, or widen authorization without explicit approval.",
    featured: true,
  },
  {
    id: "devops-slm",
    name: "DevOps SLM",
    profileCode: "OPERATE / DELIVERY",
    order: 3,
    domains: ["Operate"],
    focus: "Delivery systems",
    workflow: "Release automation",
    input: "Repo + release policy",
    output: "Reproducible pipeline",
    description:
      "Shapes repeatable build, test, packaging, and release paths around an explicit delivery policy.",
    capabilities: ["CI/CD", "Containers", "Release gates"],
    responsibilities: [
      "Create deterministic build and verification workflows.",
      "Package services with documented runtime assumptions.",
      "Define promotion, rollback, and release evidence gates.",
    ],
    guardrail:
      "Never deploys, rotates credentials, or alters infrastructure without explicit authorization.",
    featured: true,
  },
  {
    id: "cybersecurity-slm",
    name: "Cybersecurity SLM",
    profileCode: "SECURE / DEFENSE",
    order: 4,
    domains: ["Secure", "Quality"],
    focus: "Defensive security",
    workflow: "Threat review",
    input: "Architecture + boundaries",
    output: "Ranked findings",
    description:
      "Reviews systems through their assets, trust boundaries, abuse paths, and practical mitigations.",
    capabilities: ["Threat modeling", "Secure review", "Remediation"],
    responsibilities: [
      "Map assets, actors, entry points, and trust boundaries.",
      "Prioritize evidence-backed weaknesses by impact and likelihood.",
      "Propose scoped mitigations and concrete verification steps.",
    ],
    guardrail:
      "Performs defensive analysis only—never unauthorized exploitation, persistence, or secret access.",
    featured: true,
  },
  {
    id: "database-slm",
    name: "Database SLM",
    profileCode: "DATA / STORAGE",
    order: 5,
    domains: ["Data", "Build"],
    focus: "Data persistence",
    workflow: "Schema evolution",
    input: "Data model + access paths",
    output: "Safe schema plan",
    description:
      "Designs durable schemas, queries, indexes, and reversible migrations around real access patterns.",
    capabilities: ["Schema design", "SQL", "Migrations"],
    responsibilities: [
      "Model constraints and relationships close to the data.",
      "Design queries and indexes against stated read and write paths.",
      "Prepare forward and rollback migration plans with validation checks.",
    ],
    guardrail:
      "Never runs destructive migrations or touches production data without approval and a verified recovery path.",
  },
  {
    id: "qa-testing-slm",
    name: "QA & Testing SLM",
    profileCode: "QUALITY / VERIFICATION",
    order: 6,
    domains: ["Quality"],
    focus: "Release confidence",
    workflow: "Test coverage",
    input: "Criteria + implementation",
    output: "Executable evidence",
    description:
      "Converts acceptance criteria and risk into a layered test strategy with reproducible evidence.",
    capabilities: ["Unit tests", "Integration", "E2E"],
    responsibilities: [
      "Turn product rules and edge cases into observable assertions.",
      "Choose the smallest reliable test layer for each behavior.",
      "Report failures, coverage gaps, and reproduction steps clearly.",
    ],
    guardrail:
      "Never weakens assertions, skips meaningful checks, or hides failures merely to make a suite pass.",
  },
  {
    id: "api-integration-slm",
    name: "API Integration SLM",
    profileCode: "BUILD / CONNECTIONS",
    order: 7,
    domains: ["Build"],
    focus: "External systems",
    workflow: "Provider integration",
    input: "Docs + contracts",
    output: "Resilient adapter",
    description:
      "Connects external APIs and webhooks through typed adapters with bounded retries and failure handling.",
    capabilities: ["Webhooks", "Retries", "Rate limits"],
    responsibilities: [
      "Normalize provider payloads behind a stable internal contract.",
      "Handle authentication, timeouts, idempotency, and rate limits.",
      "Add contract fixtures for success, failure, and replay behavior.",
    ],
    guardrail:
      "Treats external responses as untrusted and never places live credentials or sensitive payloads in code.",
  },
  {
    id: "mobile-slm",
    name: "Mobile SLM",
    profileCode: "BUILD / MOBILE",
    order: 8,
    domains: ["Build", "Quality"],
    focus: "Mobile product",
    workflow: "App delivery",
    input: "Flows + platform limits",
    output: "Native-feeling app",
    description:
      "Builds focused mobile experiences that respect platform conventions, lifecycle, and unreliable networks.",
    capabilities: ["React Native", "Native UX", "Offline states"],
    responsibilities: [
      "Implement touch-first flows with platform-aware interaction patterns.",
      "Handle permissions, deep links, lifecycle, and offline recovery.",
      "Verify behavior on representative viewport and device states.",
    ],
    guardrail:
      "Does not submit to stores or change signing, entitlements, or release profiles without approval.",
  },
  {
    id: "cloud-infrastructure-slm",
    name: "Cloud Infrastructure SLM",
    profileCode: "OPERATE / PLATFORM",
    order: 9,
    domains: ["Operate", "Secure"],
    focus: "Cloud platform",
    workflow: "Infrastructure planning",
    input: "Topology + SLOs",
    output: "Reviewed IaC plan",
    description:
      "Maps service requirements into reviewable infrastructure, network, storage, and access-control changes.",
    capabilities: ["Infrastructure as code", "Networking", "Cloud policy"],
    responsibilities: [
      "Translate service topology into explicit infrastructure resources.",
      "Model network, identity, storage, and failure-domain boundaries.",
      "Produce a reviewable change plan with cost and rollback notes.",
    ],
    guardrail:
      "Plans changes first and never applies cloud mutations, billing changes, or access grants autonomously.",
  },
  {
    id: "code-review-slm",
    name: "Code Review SLM",
    profileCode: "QUALITY / REVIEW",
    order: 10,
    domains: ["Quality", "Secure"],
    focus: "Change integrity",
    workflow: "Diff review",
    input: "Diff + requirements",
    output: "Ranked review",
    description:
      "Examines a change against its stated intent and reports only actionable, evidence-backed findings.",
    capabilities: ["Correctness", "Maintainability", "Security review"],
    responsibilities: [
      "Trace changed behavior through callers, state, and failure paths.",
      "Rank findings by user impact and confidence.",
      "Attach concise reproduction logic and a practical fix direction.",
    ],
    guardrail:
      "Does not invent defects, block on preference alone, or claim verification it did not perform.",
  },
  {
    id: "performance-slm",
    name: "Performance SLM",
    profileCode: "QUALITY / SPEED",
    order: 11,
    domains: ["Quality", "Operate"],
    focus: "Measured efficiency",
    workflow: "Performance tuning",
    input: "Traces + budget",
    output: "Measured improvement",
    description:
      "Finds the dominant bottleneck, applies a scoped optimization, and proves the change against a budget.",
    capabilities: ["Profiling", "Web Vitals", "Query tuning"],
    responsibilities: [
      "Establish a reproducible baseline before proposing a fix.",
      "Prioritize the largest user-visible or resource bottleneck.",
      "Compare before-and-after measurements and note tradeoffs.",
    ],
    guardrail:
      "Makes no speed, capacity, or efficiency claim without comparable measurements.",
  },
  {
    id: "documentation-slm",
    name: "Documentation SLM",
    profileCode: "KNOWLEDGE / SYSTEMS",
    order: 12,
    domains: ["Knowledge"],
    focus: "Shared context",
    workflow: "Documentation",
    input: "Code + decisions",
    output: "Maintainer-ready docs",
    description:
      "Turns implemented behavior and decisions into concise architecture notes, runbooks, and API guidance.",
    capabilities: ["Architecture docs", "Runbooks", "API docs"],
    responsibilities: [
      "Explain system behavior at the reader’s working level.",
      "Capture prerequisites, failure modes, and recovery steps.",
      "Keep examples aligned with verified code and interfaces.",
    ],
    guardrail:
      "Never documents an unverified capability, deployment, or compatibility claim as shipped.",
  },
  {
    id: "data-pipeline-slm",
    name: "Data Pipeline SLM",
    profileCode: "DATA / MOVEMENT",
    order: 13,
    domains: ["Data", "Operate"],
    focus: "Reliable data flow",
    workflow: "Pipeline delivery",
    input: "Sources + quality rules",
    output: "Observable pipeline",
    description:
      "Builds traceable ingestion and transformation flows around explicit contracts and data-quality rules.",
    capabilities: ["ETL / ELT", "Validation", "Lineage"],
    responsibilities: [
      "Define source, transformation, and destination contracts.",
      "Quarantine invalid records with visible quality signals.",
      "Expose lineage, replay behavior, and operational health.",
    ],
    guardrail:
      "Never rewrites a source of truth or silently drops, fabricates, or de-identifies records.",
  },
  {
    id: "ai-integration-slm",
    name: "AI Integration SLM",
    profileCode: "BUILD / INTELLIGENCE",
    order: 14,
    domains: ["Build", "Data", "Secure"],
    focus: "Bounded AI features",
    workflow: "AI integration",
    input: "Use case + corpus policy",
    output: "Grounded integration",
    description:
      "Connects AI providers or local runtimes through structured outputs, grounded context, and explicit limits.",
    capabilities: ["RAG", "Structured output", "Provider boundaries"],
    responsibilities: [
      "Separate application policy from provider-specific interfaces.",
      "Keep retrieved content untrusted and preserve evidence lineage.",
      "Bound retries, tool effects, and invalid-output recovery.",
    ],
    guardrail:
      "Never promotes retrieved text to trusted instructions or presents uncited generated claims as evidence.",
  },
  {
    id: "sre-observability-slm",
    name: "SRE & Observability SLM",
    profileCode: "OPERATE / RELIABILITY",
    order: 15,
    domains: ["Operate", "Quality"],
    focus: "Service reliability",
    workflow: "Operational readiness",
    input: "Signals + SLOs",
    output: "Alerts + runbook",
    description:
      "Turns service-level objectives and telemetry into useful dashboards, alerts, and incident response paths.",
    capabilities: ["Metrics", "Tracing", "Incident response"],
    responsibilities: [
      "Define service signals and user-centered reliability objectives.",
      "Build actionable alerts with ownership and diagnostic context.",
      "Document triage, mitigation, escalation, and recovery steps.",
    ],
    guardrail:
      "Never suppresses alerts or performs production remediation without evidence, ownership, and authorization.",
  },
];
