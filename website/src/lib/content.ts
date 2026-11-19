import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

// Guides live in the repo root (../01-*, ../02-*, ...). Override with CONTENT_DIR.
const CONTENT_DIR =
  process.env.CONTENT_DIR || path.join(/* turbopackIgnore: true */ process.cwd(), "..");

export type Topic = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryTitle: string;
  file: string; // e.g. "01-corporate-communication/standup.md"
};

export type Category = {
  slug: string;
  title: string;
  order: string;
  topics: Topic[];
};

const titleCase = (s: string) =>
  s
    .split("-")
    .map((w) => (w === "sde" ? "SDE" : w[0].toUpperCase() + w.slice(1)))
    .join(" ");

const stripMd = (s: string) =>
  s
    .replace(/[*_`>]/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();

function readTopic(dir: string, file: string, category: string, categoryTitle: string): Topic {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, dir, file), "utf8");
  const lines = raw.split(/\r?\n/);
  const title = (lines.find((l) => l.startsWith("# ")) ?? file).replace(/^#\s+/, "").trim();
  const firstPara = lines.find(
    (l) => l.trim() && !/^(#|\||-|\d+\.|>|```|See also)/.test(l.trim()),
  );
  return {
    slug: file.replace(/\.md$/, ""),
    title,
    description: firstPara ? stripMd(firstPara) : `${title} — ${categoryTitle}`,
    category,
    categoryTitle,
    file: `${dir}/${file}`,
  };
}

let cache: Category[] | null = null;

export function getCategories(): Category[] {
  if (cache) return cache;
  cache = fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && /^\d{2}-/.test(d.name))
    .map((d) => d.name)
    .sort()
    .map((dir) => {
      const [order, ...rest] = dir.split("-");
      const slug = rest.join("-");
      const title = titleCase(slug);
      const topics = fs
        .readdirSync(path.join(CONTENT_DIR, dir))
        .filter((f) => f.endsWith(".md"))
        .sort()
        .map((f) => readTopic(dir, f, slug, title));
      return { slug, title, order, topics };
    });
  return cache;
}

export const getAllTopics = () => getCategories().flatMap((c) => c.topics);

export function getTopic(category: string, slug: string) {
  const all = getAllTopics();
  const i = all.findIndex((t) => t.category === category && t.slug === slug);
  if (i === -1) return null;
  return { topic: all[i], prev: all[i - 1] ?? null, next: all[i + 1] ?? null };
}

/** Repo-relative .md links (e.g. ../04-meeting-language/standup.md) → site URLs. */
function rewriteHref(href: string, fromDir: string) {
  if (/^[a-z]+:|^#|^\//i.test(href)) return href;
  const [p, hash] = href.split("#");
  const resolved = path.posix.normalize(path.posix.join(fromDir, p)).replace(/\/$/, "");
  const m = resolved.match(/^\d{2}-([^/]+)(?:\/([^/]+)\.md)?$/);
  if (!m) return href;
  const url = m[2] ? `/docs/${m[1]}/${m[2]}` : `/docs/${m[1]}`;
  return hash ? `${url}#${hash}` : url;
}

export function renderTopic(topic: Topic) {
  const dir = path.posix.dirname(topic.file);
  const raw = fs.readFileSync(path.join(CONTENT_DIR, topic.file), "utf8");
  // Drop the H1: the page renders its own title.
  const body = raw.replace(/^#\s+.*\r?\n/, "");
  const renderer = new marked.Renderer();
  const link = renderer.link.bind(renderer);
  renderer.link = (token) => link({ ...token, href: rewriteHref(token.href, dir) });
  // Content is this repo's own markdown, so rendering raw HTML is trusted.
  return marked.parse(body, { renderer, gfm: true, async: false }) as string;
}

export const site = {
  name: "DevSpeak",
  title: "DevSpeak — Corporate Tech Communication for Developers",
  description:
    "Speak like a senior engineer — the words, phrases and habits developers use in standups, PRs, Slack, emails, and incident calls.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  repo: "https://github.com/Ashukr321/corporate-communication-for-developers",
};
