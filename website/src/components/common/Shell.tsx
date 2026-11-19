"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Category } from "@/lib/content";
import CommandMenu from "./CommandMenu";
import { ChevronIcon, LogoMark, MoonIcon, SearchIcon, SidebarIcon, SunIcon } from "./icons";

export default function Shell({
  categories,
  children,
}: {
  categories: Category[];
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false); // desktop
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSidebar = () =>
    matchMedia("(min-width: 768px)").matches
      ? setCollapsed((c) => !c)
      : setMobileOpen((o) => !o);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((o) => !o);
        return;
      }
      // shortcuts below are skipped while typing in a field
      const t = e.target as HTMLElement;
      if (e.ctrlKey || e.metaKey || t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
      if (e.key === "?" || (e.shiftKey && (e.key === "/" || e.code === "Slash"))) {
        // Shift + / toggles the sidebar
        e.preventDefault();
        toggleSidebar();
      } else if (e.key === "/") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleTheme = () => {
    const next = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <div className="flex min-h-screen">
      {mobileOpen && (
        <button
          aria-label="Close menu"
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 shrink-0 overflow-x-hidden overflow-y-auto border-r border-line bg-panel transition-all duration-300 ease-in-out md:sticky md:top-0 md:h-screen md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } ${collapsed ? "md:invisible md:w-0 md:border-r-0" : ""}`}
      >
        <div className="w-64">
        <Link href="/" className="flex h-14 items-center gap-2 px-4 font-semibold">
          <LogoMark className="h-6 w-6" />
          DevSpeak
        </Link>
        <nav
          aria-label="Guides"
          onClick={(e) => (e.target as Element).closest("a") && setMobileOpen(false)}
        >
          {categories.map((c) => {
            const active = pathname.startsWith(`/docs/${c.slug}`);
            return (
              <details key={c.slug} open={active} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-2.5 text-sm font-semibold hover:bg-hover [&::-webkit-details-marker]:hidden">
                  {c.title}
                  <ChevronIcon className="h-4 w-4 text-muted transition-transform group-open:rotate-90" />
                </summary>
                <ul className="pb-2 pl-6">
                  {c.topics.map((t) => {
                    const href = `/docs/${c.slug}/${t.slug}`;
                    const current = pathname === href;
                    return (
                      <li key={t.slug}>
                        <Link
                          href={href}
                          aria-current={current ? "page" : undefined}
                          className={`block rounded-md px-3 py-1.5 text-sm ${
                            current ? "bg-hover font-medium text-fg" : "text-muted hover:text-fg"
                          }`}
                        >
                          {t.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </details>
            );
          })}
        </nav>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-line bg-bg/80 px-4 backdrop-blur">
          <button
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
            title="Toggle sidebar (Shift + /)"
            className="rounded-md p-2 text-muted hover:bg-hover hover:text-fg"
          >
            <SidebarIcon className="h-4 w-4" />
          </button>
          <button
            onClick={() => {
              setMobileOpen(false);
              setSearchOpen(true);
            }}
            className="flex w-full max-w-xs items-center gap-2 rounded-lg border border-line bg-panel px-3 py-1.5 text-sm text-muted hover:text-fg"
          >
            <SearchIcon className="h-4 w-4" />
            <span className="flex-1 text-left">Search topics...</span>
            <kbd className="hidden rounded border border-line px-1.5 font-mono text-xs sm:inline">
              Ctrl K
            </kbd>
          </button>
          <div className="flex-1" />
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-md p-2 text-muted hover:bg-hover hover:text-fg"
          >
            <SunIcon className="hidden h-4 w-4 dark:block" />
            <MoonIcon className="h-4 w-4 dark:hidden" />
          </button>
        </header>
        <main className="w-full min-w-0 flex-1 px-5 py-8 sm:px-8 lg:px-12 xl:px-16">{children}</main>
      </div>

      <CommandMenu categories={categories} open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
