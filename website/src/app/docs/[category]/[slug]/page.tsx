import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllTopics, getTopic, renderTopic, site } from "@/lib/content";

export const dynamicParams = false;

export const generateStaticParams = () =>
  getAllTopics().map((t) => ({ category: t.category, slug: t.slug }));

type Props = { params: Promise<{ category: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const found = getTopic(category, slug);
  if (!found) return {};
  const { topic } = found;
  const url = `/docs/${category}/${slug}`;
  return {
    title: `${topic.title} — ${topic.categoryTitle}`,
    description: topic.description,
    alternates: { canonical: url },
    openGraph: { type: "article", title: topic.title, description: topic.description, url },
    twitter: { title: topic.title, description: topic.description },
  };
}

export default async function TopicPage({ params }: Props) {
  const { category, slug } = await params;
  const found = getTopic(category, slug);
  if (!found) notFound();
  const { topic, prev, next } = found;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: topic.title,
        description: topic.description,
        url: `${site.url}/docs/${category}/${slug}`,
        isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: site.name, item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: topic.categoryTitle,
            item: `${site.url}/docs/${category}`,
          },
          { "@type": "ListItem", position: 3, name: topic.title },
        ],
      },
    ],
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-fg">
          DevSpeak
        </Link>{" "}
        ›{" "}
        <Link href={`/docs/${category}`} className="hover:text-fg">
          {topic.categoryTitle}
        </Link>{" "}
        › <span className="text-fg">{topic.title}</span>
      </nav>
      <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">{topic.title}</h1>
      <div className="prose" dangerouslySetInnerHTML={{ __html: renderTopic(topic) }} />

      <div className="mt-12 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/docs/${prev.category}/${prev.slug}`}
            className="rounded-xl border border-line p-4 hover:border-accent/50"
          >
            <div className="text-xs text-muted">← Previous</div>
            <div className="font-medium">{prev.title}</div>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/docs/${next.category}/${next.slug}`}
            className="rounded-xl border border-line p-4 text-right hover:border-accent/50"
          >
            <div className="text-xs text-muted">Next →</div>
            <div className="font-medium">{next.title}</div>
          </Link>
        )}
      </div>
      <a
        href={`${site.repo}/blob/main/${topic.file}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-sm text-muted hover:text-fg"
      >
        Edit this page on GitHub ↗
      </a>
    </article>
  );
}
