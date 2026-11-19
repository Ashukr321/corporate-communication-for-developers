"use client";

import Link from "next/link";

export default function ErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl border border-red-200 bg-white p-8 text-center shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Error
        </p>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Please try again or return to the home page.
        </p>
        <Link
          href="/"
          className="mt-5 inline-flex rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
