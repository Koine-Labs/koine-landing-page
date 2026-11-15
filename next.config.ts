import type { NextConfig } from "next";

// Security headers for every response. The content policy is applied to production builds only, because the
// development server needs eval for hot reloading. 'unsafe-inline' is needed for the scripts Next.js writes into
// each page and for a few inline style values; everything else is limited to this site.
//
// The one outside address a page may contact is PostHog, for visitor statistics, and only when this build was
// given a PostHog project (see instrumentation-client.ts). No script is ever loaded from it.
function statisticsOrigin(): string {
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  if (!process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN || !host) return "";
  try {
    return ` ${new URL(host).origin}`;
  } catch {
    return "";
  }
}

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  `connect-src 'self'${statisticsOrigin()}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' mailto:",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const headers = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  ...(process.env.NODE_ENV === "production" ? [{ key: "Content-Security-Policy", value: csp }] : []),
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers }];
  },
};

export default nextConfig;
