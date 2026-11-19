import Link from "next/link";
import { ArrowIcon } from "@/components/common/icons";
import { getAllTopics, getCategories } from "@/lib/content";

export default function Home() {
  const categories = getCategories();
  const first = getAllTopics()[0];

  return (
    <>
      <section className="border-b border-line pb-12">
        <span className="inline-block rounded-full border border-line bg-panel px-2.5 py-0.5 text-xs font-medium">
          {getAllTopics().length} guides · {categories.length} sections
        </span>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
          Speak like a senior engineer.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          A practical guide to the words, phrases, and habits developers use at work — in
          standups, PRs, Slack, emails, and incident calls.
        </p>
        <Link
          href={`/docs/${first.category}/${first.slug}`}
          className="mt-7 inline-flex items-center gap-2 rounded-lg bg-fg px-4 py-2 text-sm font-medium text-bg hover:opacity-90"
        >
          Start reading <ArrowIcon className="h-4 w-4" />
        </Link>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {categories.map((c) => (
          <div
            key={c.slug}
            className="rounded-2xl border border-line bg-card p-5 transition-colors hover:border-accent/50"
          >
            <Link href={`/docs/${c.slug}`} className="flex items-baseline gap-2 font-semibold">
              <span className="font-mono text-xs text-muted">{c.order}</span>
              {c.title}
            </Link>
            <ul className="mt-3 space-y-1.5">
              {c.topics.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/docs/${c.slug}/${t.slug}`}
                    className="text-sm text-muted hover:text-fg"
                  >
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
