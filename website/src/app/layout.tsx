import type { Metadata, Viewport } from "next";
// Bundled fonts: no Google Fonts fetch at build time (works offline / behind TLS proxies).
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Providers from "@/providers/Providers";
import Shell from "@/components/common/Shell";
import ServiceWorker from "@/components/common/ServiceWorker";
import { getCategories, site } from "@/lib/content";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "corporate communication",
    "software engineer",
    "developer communication",
    "standup",
    "code review",
    "tech terminology",
    "SDE interview",
    "workplace english",
  ],
  authors: [{ name: "Ashukr321", url: "https://github.com/Ashukr321" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: "/",
    images: [{ url: "/og.jpg", width: 1200, height: 400, alt: site.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: site.name },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
};

// Set the theme class before paint to avoid a flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const categories = getCategories();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
  };
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-bg font-sans text-fg">
        <Providers>
          <Shell categories={categories}>{children}</Shell>
        </Providers>
        <ServiceWorker />
      </body>
    </html>
  );
}
