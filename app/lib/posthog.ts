// PostHog, set up to count visits without identifying anyone. instrumentation-client.ts loads this file on its
// own, after the page is ready; nothing else imports it. /privacy describes this behaviour, so change the two
// together.
//
// - cookieless_mode "always": nothing is stored in the browser. PostHog's servers tell visitors apart by a hash of
//   the day, the IP address, the browser's user agent and this site's address, so the number changes every day.
//   The PostHog project must have "Cookieless tracking" turned on, or it discards every event.
// - person_profiles "never": no profile is built for any visitor.
// - Clicks are recorded on links and buttons only, and only clicks, so nothing typed into a form is picked up.
// - Session recording, heatmaps, surveys, feature flags, and error and performance capture are all off. This is
//   PostHog's "no-external" build, which cannot load further scripts from PostHog.
// - clean() removes everything after "?" or "#" from every address, and drops advertising click identifiers.
import posthog from "posthog-js/no-external";
import type { CaptureResult } from "posthog-js";
import { connect } from "./analytics";

// the per-click identifiers ad networks add to links; PostHog would otherwise record them as properties
const CLICK_ID =
  /^(?:\$initial_|\$session_entry_)?(?:gclid|gclsrc|dclid|gbraid|wbraid|fbclid|msclkid|twclid|li_fat_id|igshid|ttclid|rdt_cid|epik|qclid|sccid|oppref|bfcid|irclid|_kx)$/;

function scrub(bag: Record<string, unknown> | undefined): void {
  if (!bag) return;
  for (const [key, value] of Object.entries(bag)) {
    if (CLICK_ID.test(key)) delete bag[key];
    else if (typeof value === "string" && /^https?:\/\//.test(value)) bag[key] = value.replace(/[?#][\s\S]*$/, "");
  }
}

// Campaign labels (utm_source and the like) are read from the address before this runs, and are kept.
function clean(event: CaptureResult | null): CaptureResult | null {
  if (!event) return null;
  scrub(event.properties);
  scrub(event.$set);
  scrub(event.$set_once);
  return event;
}

export function start(token: string, host: string): void {
  posthog.init(token, {
    api_host: host,
    defaults: "2026-08-30",
    cookieless_mode: "always",
    person_profiles: "never",
    autocapture: { dom_event_allowlist: ["click"], element_allowlist: ["a", "button"] },
    rageclick: false,
    capture_dead_clicks: false,
    capture_heatmaps: false,
    capture_performance: false,
    capture_exceptions: false,
    disable_session_recording: true,
    disable_surveys: true,
    disable_product_tours: true,
    disable_conversations: true,
    // no request for feature flags or remote settings: everything this site uses is set on this page
    advanced_disable_flags: true,
    disable_external_dependency_loading: true,
    before_send: clean,
  });
  connect((event, properties) => posthog.capture(event, properties));
}
