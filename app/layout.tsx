import type { Metadata, Viewport } from "next";
import SiteFooter from "./components/SiteFooter";
import SiteNav from "./components/SiteNav";
import { SITE_URL } from "./lib/site";
import "./globals.css";

// Visitor statistics are started from instrumentation-client.ts, not from here.
const TITLE = "Koine Labs";
const DESCRIPTION = "Koine Labs is a research lab with three products in development: Mentat, Annula and Anchor.";

// Icons come from the files beside this one: favicon.ico, icon.svg and apple-icon.png.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Koine Labs",
    locale: "en_US",
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    images: [{ url: "/og/og-home.png", width: 1200, height: 630, alt: "Koine Labs" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og/og-home.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f4ec",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // data-scroll-behavior tells Next.js to switch smooth scrolling off while it moves to another page, so the new
    // page starts at its top at once. Smooth scrolling (globals.css) still applies to jumps within a page.
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
