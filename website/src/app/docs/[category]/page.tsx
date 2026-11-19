import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategories } from "@/lib/content";

export const dynamicParams = false;

export const generateStaticParams = () => getCategories().map((c) => ({ category: c.slug }));

type Props = { params: Promise<{ category: string }> };

const find = (slug: string) => getCategories().find((c) => c.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = find((await params).category);
  if (!c) return {};
  const description = `${c.title}: ${c.topics.map((t) => t.title).join(", ")}.`;
  return {
    title: c.title,
    description,
    alternates: { canonical: `/docs/${c.slug}` },
    openGraph: { title: c.title, description, url: `/docs/${c.slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const c = find((await params).category);
  if (!c) notFound();

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-fg">
          DevSpeak
        </Link>{" "}
        › <span className="text-fg">{c.title}</span>
      </nav>
      <h1 className="text-3xl font-bold tracking-tight">{c.title}</h1>
      <p className="mt-2 text-muted">{c.topics.length} guides in this section.</p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {c.topics.map((t) => (
          <Link
            key={t.slug}
            href={`/docs/${c.slug}/${t.slug}`}
            className="rounded-xl border border-line bg-card p-4 hover:border-accent/50"
          >
            <div className="font-semibold">{t.title}</div>
            <p className="mt-1 line-clamp-2 text-sm text-muted">{t.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
