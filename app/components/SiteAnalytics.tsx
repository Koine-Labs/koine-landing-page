"use client";

// Visitor statistics through Vercel Web Analytics, which sets no cookies and stores no IP addresses (see /privacy).
// Two further limits are applied here, before anything is sent:
// - nothing at all is sent when the browser asks not to be tracked (Global Privacy Control or Do Not Track);
// - the query string and fragment are removed from every page address, so nothing typed into a link is collected.
import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";

type PrivacyNavigator = Navigator & { globalPrivacyControl?: boolean };

export function optedOut(): boolean {
  if (typeof navigator === "undefined") return false;
  const nav = navigator as PrivacyNavigator;
  return nav.globalPrivacyControl === true || nav.doNotTrack === "1";
}

function beforeSend(event: BeforeSendEvent): BeforeSendEvent | null {
  if (optedOut()) return null;
  try {
    const url = new URL(event.url);
    url.search = "";
    url.hash = "";
    return { ...event, url: url.toString() };
  } catch {
    return null;
  }
}

export default function SiteAnalytics() {
  return <Analytics beforeSend={beforeSend} />;
}
