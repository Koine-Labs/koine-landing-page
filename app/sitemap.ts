import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

const PAGES: [path: string, priority: number][] = [
  ["/", 1],
  ["/mentat", 0.9],
  ["/annula", 0.9],
  ["/anchor", 0.9],
  ["/about", 0.7],
  ["/notebook", 0.5],
  ["/contact", 0.6],
  ["/privacy", 0.3],
  ["/terms", 0.3],
  ["/data-ethics", 0.4],
  ["/accessibility", 0.3],
  ["/security", 0.3],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PAGES.map(([path, priority]) => ({ url: `${SITE_URL}${path === "/" ? "" : path}`, lastModified, priority }));
}
