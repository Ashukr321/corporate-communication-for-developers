# React Versions

## Major milestones
| Version | Year | Highlights |
|---------|------|-----------|
| 16.8 | 2019 | **Hooks** (`useState`, `useEffect`) |
| 17 | 2020 | No new features; gradual upgrades, new JSX transform |
| 18 | 2022 | Concurrent rendering, automatic batching, `createRoot`, `useTransition` |
| 19 | 2024 | Actions, `use()`, `useActionState`, `useOptimistic`, Server Components stable, `ref` as a prop |

## Common upgrade notes
- **17 → 18:** replace `ReactDOM.render` with `createRoot`.
- **18 → 19:** `forwardRef` no longer needed for most cases; removed legacy APIs (`propTypes` checks, string refs, `defaultProps` on function components).

## Checking the version
```bash
npm ls react
```

## How it's said
- "We're still on React 17 — upgrading to 18 needs the `createRoot` change."
- "This hook is only available in React 19."
- "Let's check if our UI library supports React 19 before upgrading."

Official: https://react.dev/versions
