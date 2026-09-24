# Semantic Versioning (SemVer)

Format: **`MAJOR.MINOR.PATCH`** — e.g. `2.4.1`

| Part | Bump when | Example |
|------|-----------|---------|
| MAJOR | Breaking changes | `1.9.3` → `2.0.0` |
| MINOR | New features, backward compatible | `2.0.0` → `2.1.0` |
| PATCH | Bug fixes, backward compatible | `2.1.0` → `2.1.1` |

## Pre-release & build metadata
- `3.0.0-alpha.1` — early, unstable
- `3.0.0-beta.2` — feature complete, testing
- `3.0.0-rc.1` — release candidate
- `3.0.0+build.45` — build metadata (ignored for precedence)

## `0.x` versions
`0.y.z` = initial development; anything may change at any time.

## npm ranges (package.json)
| Range | Allows | Example `^1.2.3` / `~1.2.3` |
|-------|--------|------------------------------|
| `^` (caret) | Minor + patch updates | `>=1.2.3 <2.0.0` |
| `~` (tilde) | Patch updates only | `>=1.2.3 <1.3.0` |
| `1.2.3` | Exact version | only `1.2.3` |
| `*` / `latest` | Anything | avoid in production |

## How it's said
- "This is a breaking change, so it needs a major version bump."
- "Let's release it as a patch — it's just a bug fix."
- "We're pinned to `4.x`; upgrading to 5 has breaking changes."
- "Can you bump the version and update the changelog?"

Spec: https://semver.org
