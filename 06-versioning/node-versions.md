# Node.js Versions

## Release model
- A new **major** version ships every **April** and **October**.
- **Even** numbers (18, 20, 22, 24...) become **LTS** (Long-Term Support) in October.
- **Odd** numbers (19, 21, 23...) are **Current** only — short-lived, never LTS.

## Release phases
| Phase | Meaning |
|-------|---------|
| Current | Latest features, ~6 months |
| Active LTS | Recommended for production, gets fixes & some features |
| Maintenance LTS | Critical bug & security fixes only |
| EOL (End of Life) | No more updates — upgrade! |

Each LTS line gets roughly **30 months** of support in total.

## Checking & switching
```bash
node -v
npm -v
nvm install --lts
nvm use 22
```

Pin the version for your team with a `.nvmrc` file (`22`) or `package.json`:
```json
"engines": { "node": ">=20" }
```

## How it's said
- "We're on Node 18, which is EOL — we should upgrade to the latest LTS."
- "Please use the version in `.nvmrc` to avoid build issues."
- "This API is only available from Node 20 onwards."

Always check the current schedule: https://nodejs.org/en/about/previous-releases
