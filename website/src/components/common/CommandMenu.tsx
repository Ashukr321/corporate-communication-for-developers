"use client";

import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import type { Category } from "@/lib/content";
import { FileIcon, SearchIcon } from "./icons";

export default function CommandMenu({
  categories,
  open,
  onOpenChange,
}: {
  categories: Category[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();

  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      label="Search topics"
      overlayClassName="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
      contentClassName="fixed left-1/2 top-[15vh] z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 overflow-hidden rounded-xl border border-line bg-panel shadow-2xl"
    >
      <div className="flex items-center gap-2 border-b border-line px-3">
        <SearchIcon className="h-4 w-4 text-muted" />
        <Command.Input
          autoFocus
          placeholder="Search guides, phrases, terms..."
          className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted"
        />
      </div>
      <Command.List className="max-h-[60vh] overflow-y-auto p-2">
        <Command.Empty className="py-6 text-center text-sm text-muted">
          No results found.
        </Command.Empty>
        {categories.map((c) => (
          <Command.Group
            key={c.slug}
            heading={c.title}
            className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted"
          >
            {c.topics.map((t) => (
              <Command.Item
                key={t.slug}
                value={`${c.title} ${t.title}`}
                keywords={[t.description]}
                onSelect={() => {
                  onOpenChange(false);
                  router.push(`/docs/${c.slug}/${t.slug}`);
                }}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 text-sm data-[selected=true]:bg-hover"
              >
                <FileIcon className="h-4 w-4 shrink-0 text-muted" />
                <span className="truncate">{t.title}</span>
              </Command.Item>
            ))}
          </Command.Group>
        ))}
      </Command.List>
    </Command.Dialog>
  );
}
