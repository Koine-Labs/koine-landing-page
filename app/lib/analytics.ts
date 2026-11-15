// Visitor statistics (see /privacy). The rest of the site reaches them only through this file. The forms call
// track(), which does nothing until the statistics library has been loaded and started (instrumentation-client.ts),
// so it is safe to call on any build, with or without statistics.

type Properties = Record<string, string | boolean>;
type Capture = (event: string, properties?: Properties) => void;

let capture: Capture | null = null;

/** Called once by the statistics library after it starts. */
export function connect(fn: Capture): void {
  capture = fn;
}

/** Count one thing a visitor did, such as joining a waitlist. Never pass an email address or anything typed. */
export function track(event: string, properties?: Properties): void {
  capture?.(event, properties);
}

type PrivacyNavigator = Navigator & { globalPrivacyControl?: boolean };

/** True when the browser asks not to be tracked (Global Privacy Control or Do Not Track). */
export function optedOut(): boolean {
  if (typeof navigator === "undefined") return false;
  const nav = navigator as PrivacyNavigator;
  return nav.globalPrivacyControl === true || nav.doNotTrack === "1";
}
