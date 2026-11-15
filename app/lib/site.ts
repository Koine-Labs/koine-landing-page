// Facts used in more than one place on the site.

// koinelabs.com redirects to www.koinelabs.com, so links and canonical addresses use the www form.
export const SITE_URL = "https://www.koinelabs.com";
export const CONTACT_EMAIL = "team@koinelabs.com";
export const NORTH_STAR = "Shaping the future through the present, by understanding the past.";

// The date shown on the policy pages. Change it whenever one of them changes.
export const POLICIES_UPDATED = "14 November 2026";

export const PRODUCTS = {
  mentat: { name: "Mentat", cat: "An interface for AI agents" },
  annula: { name: "Annula", cat: "Research software for investors" },
  anchor: { name: "Anchor", cat: "An app that learns how you live" },
} as const;

export type ProductKey = keyof typeof PRODUCTS;

export const NAV = [
  { href: "/mentat", label: "Mentat" },
  { href: "/annula", label: "Annula" },
  { href: "/anchor", label: "Anchor" },
  { href: "/about", label: "About" },
  { href: "/notebook", label: "Notebook" },
  { href: "/contact", label: "Contact" },
] as const;

export const LEGAL = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/data-ethics", label: "Data ethics" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/security", label: "Security" },
] as const;
