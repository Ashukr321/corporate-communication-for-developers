import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="mt-2 text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-muted">Try the search (Ctrl K) or head back home.</p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-lg bg-fg px-4 py-2 text-sm font-medium text-bg"
      >
        Go home
      </Link>
    </div>
  );
}
