# Next.js Versions

## Major milestones
| Version | Year | Highlights |
|---------|------|-----------|
| 9 | 2019 | API routes, dynamic routes |
| 12 | 2021 | Rust compiler (SWC), middleware |
| 13 | 2022 | **App Router** (`app/` directory, beta), Server Components |
| 13.4 | 2023 | App Router stable |
| 14 | 2023 | Server Actions stable |
| 15 | 2024 | React 19 support, async request APIs, caching no longer default for `fetch` |
| 16 | 2025 | Turbopack default bundler, Cache Components |

## Pages Router vs App Router
| | Pages Router | App Router |
|--|--------------|-----------|
| Folder | `pages/` | `app/` |
| Data fetching | `getServerSideProps`, `getStaticProps` | `async` Server Components, `fetch` |
| Layouts | `_app.js` | `layout.js` (nested) |

## How it's said
- "This project uses the Pages Router; the new features need the App Router."
- "After upgrading to 15, `cookies()` and `headers()` are async."
- "Let's run the Next.js codemod for the upgrade."

```bash
npx @next/codemod@latest upgrade latest
```

Official: https://nextjs.org/blog
