# Helios Marketplace

A curated, local-first marketplace for discovering small language models for the Helios runtime.

The first release is a single premium catalog experience with:

- 15 hardcoded SLM profiles backed by official model-card links
- search across model names, makers, roles, capabilities, and licenses
- capability filters and parameter/context sorting
- explicit licensing and compatibility caveats
- responsive, keyboard-friendly interactions
- a bespoke Open Graph preview and production metadata

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

The catalog is deliberately hardcoded while the model registry and installation flow are being designed. Profiles do not currently certify Helios runtime compatibility, install weights, or validate a user’s hardware.
