const HTML_CHARS: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
};

export function escapeHtml(str: string): string {
  return str.replace(/[&<>"']/g, (ch) => HTML_CHARS[ch]);
}

export function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, "");
}

export function sanitizeInput(str: string): string {
  return stripHtml(str).trim();
}
