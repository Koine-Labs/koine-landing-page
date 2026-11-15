// Runs in the browser before the site starts (a Next.js convention, and where PostHog's guide starts it).
// Visitor statistics are loaded only when all three hold:
// - this build was given a PostHog project (NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN and NEXT_PUBLIC_POSTHOG_HOST);
// - the browser has not asked not to be tracked (Global Privacy Control or Do Not Track);
// - the page has finished loading and the browser is idle, so counting never delays reading.
import { optedOut } from "./app/lib/analytics";

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

if (token && host && !optedOut()) {
  const start = () => {
    import("./app/lib/posthog").then((m) => m.start(token, host)).catch(() => {});
  };
  // Safari has no requestIdleCallback, so it waits a moment instead
  const whenIdle = () => {
    if (typeof window.requestIdleCallback === "function") window.requestIdleCallback(start, { timeout: 3000 });
    else setTimeout(start, 300);
  };
  if (document.readyState === "complete") whenIdle();
  else window.addEventListener("load", whenIdle, { once: true });
}
