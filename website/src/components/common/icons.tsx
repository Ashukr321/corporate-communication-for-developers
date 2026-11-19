type P = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const SearchIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);
export const SidebarIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18" />
  </svg>
);
export const ChevronIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);
export const ArrowIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const FileIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
    <path d="M14 3v6h6M8 13h8M8 17h5" />
  </svg>
);
export const MoonIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);
export const SunIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

/** Brand mark: a speech bubble with a code chevron — same artwork as public/icons/icon.svg. */
export const LogoMark = ({ className }: P) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <defs>
      <linearGradient id="lm" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#6366f1" />
        <stop offset="1" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="url(#lm)" />
    <path
      d="M16 18h32a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H30l-9 7v-7h-5a4 4 0 0 1-4-4V22a4 4 0 0 1 4-4z"
      fill="#fff"
    />
    <path
      d="m26 26-5 5 5 5M38 26l5 5-5 5M34 24l-4 14"
      fill="none"
      stroke="#4f46e5"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
