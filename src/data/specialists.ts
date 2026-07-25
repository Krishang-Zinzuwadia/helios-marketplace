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
    profileCode: "BUILD / FRONT END",
    order: 1,
    domains: ["Build", "Quality"],
    focus: "Web interfaces",
    workflow: "Design to code",
    input: "Brief + design",
    output: "Working, accessible UI",
    description:
      "Give it a brief and a design. It builds the interface, covers the awkward states, and checks that it works beyond one perfect screen.",
    capabilities: ["React", "Responsive layouts", "Accessibility"],
    responsibilities: [
      "Build clean, reusable components from the approved design.",
      "Cover loading, empty, error, and success states, not just the happy path.",
      "Check keyboard, touch, and small-screen behavior before handoff.",
    ],
    guardrail:
      "Stays on the client side. API, database, and deployment changes go to the right specialist first.",
    featured: true,
  },
  {
    id: "back-end-slm",
    name: "Back-end SLM",
    profileCode: "BUILD / BACK END",
    order: 2,
    domains: ["Build", "Data"],
    focus: "APIs and services",
    workflow: "Contract to API",
    input: "API contract + data rules",
    output: "Tested API",
    description:
      "Takes an agreed contract and builds the service behind it, including bad inputs and the failure paths people usually forget.",
    capabilities: ["API design", "Business logic", "Permissions"],
    responsibilities: [
      "Build endpoints with useful validation and predictable errors.",
      "Keep business rules separate from transport and storage code.",
      "Test the full contract from request through persistence.",
    ],
    guardrail:
      "Won’t touch production data, expose secrets, or loosen permissions without approval.",
    featured: true,
  },
  {
    id: "devops-slm",
    name: "DevOps SLM",
    profileCode: "OPERATE / RELEASE",
    order: 3,
    domains: ["Operate"],
    focus: "Build and release",
    workflow: "Commit to release",
    input: "Repo + release rules",
    output: "Repeatable pipeline",
    description:
      "Makes the trip from commit to release boring, repeatable, and easy to roll back.",
    capabilities: ["CI/CD", "Containers", "Release checks"],
    responsibilities: [
      "Keep builds deterministic and checks easy to reproduce.",
      "Package each service with its runtime assumptions written down.",
      "Put approval, rollback, and release checks in the pipeline.",
    ],
    guardrail:
      "It can prepare and check a release. Deploying, rotating credentials, or changing infrastructure still needs a human go-ahead.",
    featured: true,
  },
  {
    id: "cybersecurity-slm",
    name: "Cybersecurity SLM",
    profileCode: "SECURE / REVIEW",
    order: 4,
    domains: ["Secure", "Quality"],
    focus: "Security risks",
    workflow: "Risk review",
    input: "Architecture + trust map",
    output: "Prioritized fixes",
    description:
      "Looks for the ways a system could be misused or broken, then points to the fixes that matter first.",
    capabilities: ["Threat models", "Security review", "Fix plans"],
    responsibilities: [
      "Map what needs protecting, who can reach it, and where trust changes.",
      "Check risky assumptions against the architecture and available evidence.",
      "Pair each finding with a practical fix and a way to verify it.",
    ],
    guardrail:
      "Defense only. It won’t exploit systems without permission, establish persistence, or go looking for secrets.",
    featured: true,
  },
  {
    id: "database-slm",
    name: "Database SLM",
    profileCode: "DATA / DATABASE",
    order: 5,
    domains: ["Data", "Build"],
    focus: "Schemas and queries",
    workflow: "Change the schema",
    input: "Data model + query patterns",
    output: "Safe migration plan",
    description:
      "Designs schemas around the queries the product really runs, with a safe way forward and a way back.",
    capabilities: ["Schema design", "SQL", "Safe migrations"],
    responsibilities: [
      "Put important relationships and constraints close to the data.",
      "Shape queries and indexes around real read and write patterns.",
      "Plan migrations with validation, rollout, and rollback steps.",
    ],
    guardrail:
      "Destructive migrations and production data are off-limits until someone approves the change and confirms the recovery path.",
  },
  {
    id: "qa-testing-slm",
    name: "QA & Testing SLM",
    profileCode: "QUALITY / TESTING",
    order: 6,
    domains: ["Quality"],
    focus: "Tests that matter",
    workflow: "Risk to tests",
    input: "Requirements + code",
    output: "Tests + results",
    description:
      "Turns “it should work” into tests that show when it doesn’t, and where to look next.",
    capabilities: ["Unit tests", "Integration tests", "End-to-end tests"],
    responsibilities: [
      "Turn product rules and edge cases into checks people can see fail.",
      "Use the smallest reliable test layer for each behavior.",
      "Report failures, blind spots, and reproduction steps in plain language.",
    ],
    guardrail:
      "It won’t weaken assertions, skip meaningful checks, or bury failures just to turn the suite green.",
  },
  {
    id: "api-integration-slm",
    name: "API Integration SLM",
    profileCode: "BUILD / INTEGRATIONS",
    order: 7,
    domains: ["Build"],
    focus: "Third-party APIs",
    workflow: "Hook up a provider",
    input: "API docs + sample events",
    output: "Reliable adapter",
    description:
      "Wraps a messy provider API in a small, stable interface the rest of the product can rely on.",
    capabilities: ["Webhooks", "Retries", "Rate limits"],
    responsibilities: [
      "Translate provider payloads into a clean internal shape.",
      "Handle authentication, timeouts, retries, idempotency, and rate limits.",
      "Keep fixtures for successful calls, failures, and webhook replays.",
    ],
    guardrail:
      "Outside data is treated as untrusted. Real credentials and sensitive payloads stay out of the codebase.",
  },
  {
    id: "mobile-slm",
    name: "Mobile SLM",
    profileCode: "BUILD / MOBILE",
    order: 8,
    domains: ["Build", "Quality"],
    focus: "Mobile flows",
    workflow: "Flow to app",
    input: "Product flow + device limits",
    output: "Mobile app",
    description:
      "Builds mobile flows that feel at home on the device and keep working when the network disappears.",
    capabilities: ["React Native", "Platform UX", "Offline support"],
    responsibilities: [
      "Build touch-first flows that follow the platform instead of fighting it.",
      "Handle permissions, deep links, app lifecycle, and offline recovery.",
      "Check the experience across realistic screen sizes and device states.",
    ],
    guardrail:
      "Store submissions, signing, entitlements, and release profiles stay untouched until someone approves them.",
  },
  {
    id: "cloud-infrastructure-slm",
    name: "Cloud Infrastructure SLM",
    profileCode: "OPERATE / CLOUD",
    order: 9,
    domains: ["Operate", "Secure"],
    focus: "Cloud setup",
    workflow: "Service to infrastructure",
    input: "Services + SLOs",
    output: "Infrastructure code",
    description:
      "Turns a service diagram into infrastructure a teammate can review, price, and roll back before anything changes.",
    capabilities: ["Infrastructure as code", "Networking", "Access policy"],
    responsibilities: [
      "Write the resources each service actually needs.",
      "Make network, identity, storage, and failure boundaries easy to inspect.",
      "Call out expected cost, blast radius, and rollback steps.",
    ],
    guardrail:
      "It plans cloud changes. It won’t apply them, change billing, or grant access on its own.",
  },
  {
    id: "code-review-slm",
    name: "Code Review SLM",
    profileCode: "QUALITY / CODE REVIEW",
    order: 10,
    domains: ["Quality", "Secure"],
    focus: "Pull requests",
    workflow: "Review the diff",
    input: "Diff + intended behavior",
    output: "Useful review",
    description:
      "Reads the diff in context, follows the changed behavior, and calls out problems worth fixing.",
    capabilities: ["Correctness", "Maintainability", "Security"],
    responsibilities: [
      "Follow the change through callers, state, and failure paths.",
      "Rank findings by likely impact and confidence.",
      "Show why each issue matters and point toward a practical fix.",
    ],
    guardrail:
      "No invented bugs, style-only blockers, or claims about checks it didn’t run.",
  },
  {
    id: "performance-slm",
    name: "Performance SLM",
    profileCode: "QUALITY / PERFORMANCE",
    order: 11,
    domains: ["Quality", "Operate"],
    focus: "Speed and cost",
    workflow: "Measure, fix, recheck",
    input: "Traces + target",
    output: "Measured fix",
    description:
      "Finds the slow part, fixes the biggest bottleneck, and measures whether it helped.",
    capabilities: ["Profiling", "Web Vitals", "Query tuning"],
    responsibilities: [
      "Capture a baseline the team can reproduce.",
      "Focus on the biggest user-facing or resource bottleneck.",
      "Record the before, the after, and any tradeoffs introduced by the fix.",
    ],
    guardrail:
      "No “faster” or “cheaper” claim without comparable numbers.",
  },
  {
    id: "documentation-slm",
    name: "Documentation SLM",
    profileCode: "KNOWLEDGE / DOCS",
    order: 12,
    domains: ["Knowledge"],
    focus: "Docs and runbooks",
    workflow: "Code to docs",
    input: "Code + decisions",
    output: "Docs people can use",
    description:
      "Writes the docs you wish were there when you joined the project, or when something breaks at 2 a.m.",
    capabilities: ["Architecture notes", "Runbooks", "API guides"],
    responsibilities: [
      "Explain the system at the level its reader needs.",
      "Include setup, common failures, and recovery steps.",
      "Check every example against the code and interfaces that exist today.",
    ],
    guardrail:
      "If a feature, deployment, or compatibility claim hasn’t been checked, the docs won’t present it as live.",
  },
  {
    id: "data-pipeline-slm",
    name: "Data Pipeline SLM",
    profileCode: "DATA / PIPELINES",
    order: 13,
    domains: ["Data", "Operate"],
    focus: "Moving data safely",
    workflow: "Source to destination",
    input: "Sources + quality rules",
    output: "Traceable pipeline",
    description:
      "Moves data from source to destination without hiding what changed, failed, or got rejected along the way.",
    capabilities: ["ETL / ELT", "Data checks", "Lineage"],
    responsibilities: [
      "Define what enters the pipeline, how it changes, and where it lands.",
      "Quarantine bad records and make quality problems visible.",
      "Show lineage, replay behavior, and day-to-day pipeline health.",
    ],
    guardrail:
      "It won’t rewrite a source of truth or quietly drop, invent, or de-identify records.",
  },
  {
    id: "ai-integration-slm",
    name: "AI Integration SLM",
    profileCode: "BUILD / AI",
    order: 14,
    domains: ["Build", "Data", "Secure"],
    focus: "RAG and model APIs",
    workflow: "Add AI to the product",
    input: "Use case + source data",
    output: "Working AI feature",
    description:
      "Adds AI to a product without turning the whole codebase into one giant prompt.",
    capabilities: ["RAG", "Structured output", "Provider adapters"],
    responsibilities: [
      "Keep product rules separate from provider-specific plumbing.",
      "Treat retrieved text as data and keep the source attached.",
      "Cap retries, tool calls, and recovery when output misses the schema.",
    ],
    guardrail:
      "Retrieved text stays data, not instructions. Model output is never presented as proof on its own.",
  },
  {
    id: "sre-observability-slm",
    name: "SRE & Observability SLM",
    profileCode: "OPERATE / RELIABILITY",
    order: 15,
    domains: ["Operate", "Quality"],
    focus: "Monitoring and incidents",
    workflow: "Signals to response",
    input: "Telemetry + SLOs",
    output: "Alerts + runbook",
    description:
      "Sets up the signals, alerts, and runbooks people need when a service starts going sideways.",
    capabilities: ["Metrics", "Tracing", "Incident response"],
    responsibilities: [
      "Choose service signals that reflect what users are feeling.",
      "Give every alert an owner, useful context, and a reason to wake someone up.",
      "Write the triage, mitigation, escalation, and recovery path.",
    ],
    guardrail:
      "It won’t silence alerts or make production repairs without evidence, an owner, and approval.",
  },
];
