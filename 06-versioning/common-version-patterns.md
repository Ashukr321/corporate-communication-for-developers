# Common Version Patterns

## Formats you'll see
| Pattern | Example | Used by |
|---------|---------|---------|
| SemVer | `2.4.1` | npm packages, most libraries |
| Pre-release | `3.0.0-beta.1`, `5.0.0-rc.2` | Upcoming releases |
| Calendar (CalVer) | `2024.10`, `24.04` | Ubuntu, pip, some internal apps |
| Major-only | `Node 22`, `Java 21` | Runtimes (when talking casually) |
| `v` prefix | `v1.4.0` | Git tags |
| Build number | `1.4.0 (1045)` | Mobile apps (version + build) |
| API version | `/api/v1/`, `/api/v2/` | REST APIs |

## Release channels
| Channel | Meaning |
|---------|---------|
| Nightly / Canary | Built daily, unstable |
| Alpha | Early, incomplete |
| Beta | Feature complete, testing |
| RC (Release Candidate) | Final testing before release |
| Stable / GA | Production ready |
| LTS | Long-term support |

## Related terms
- **Breaking change** — requires consumers to change their code.
- **Backward compatible** — old clients still work.
- **Deprecated** — still works, will be removed later. Stop using it.
- **EOL** — no more updates or security fixes.
- **Lock file** — `package-lock.json` / `yarn.lock` / `pnpm-lock.yaml` pins exact versions.
- **Bump** — increase the version.
- **Pin** — lock to a specific version.

## How it's said
- "This API is deprecated in v2 and removed in v3."
- "Don't forget to commit the lock file."
- "Let's pin the version until the bug is fixed upstream."
- "The mobile build is `3.2.0 (412)` on TestFlight."
