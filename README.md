# Helios Marketplace

A local-first marketplace concept for discovering specialist small language
model roles for the Helios runtime.

The current single-page release includes:

- 15 hardcoded specialist SLM profiles spanning build, operations, security,
  quality, data, and knowledge work
- clear accepted inputs, expected outputs, responsibilities, and guardrails for
  every profile
- search across roles, workflows, capabilities, inputs, and outputs
- domain filters plus workflow, alphabetical, and domain sorting
- expandable role blueprints with keyboard-friendly native interactions
- responsive monochrome UI, a bespoke Open Graph preview, and production
  metadata

## Development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
```

## Preview status

The catalog is deliberately hardcoded while the runtime registry is being
designed. The profiles are functional role definitions, not trained models:
they do not install weights, connect runtime manifests, certify compatibility,
or provide evaluation evidence yet.
