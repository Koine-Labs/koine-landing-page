// Shared checks for the two form endpoints (/api/waitlist and /api/contact).
// Nothing here logs or keeps what people type; the endpoints log only what kind of request arrived.
import { NextResponse } from "next/server";

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function cleanEmail(value: unknown): string {
  return typeof value === "string" ? value.trim().toLowerCase().slice(0, 254) : "";
}

export function cleanText(value: unknown, max: number): string {
  return typeof value === "string" ? value.replace(/\r\n/g, "\n").trim().slice(0, max) : "";
}

export function reply(status: number, body: Record<string, unknown>) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

// A bot fills the hidden "website" field, or submits faster than a person can type.
export function looksAutomated(body: Record<string, unknown>, minMs: number): boolean {
  const elapsed = typeof body.elapsed === "number" ? body.elapsed : 0;
  return (typeof body.website === "string" && body.website.trim() !== "") || elapsed < minMs;
}

// A small per-address limit. It lives in memory, so it holds per server instance only: a brake on floods, not a wall.
const hits = new Map<string, number[]>();

export function tooMany(request: Request, key: string, limit: number, windowMs: number): boolean {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const id = `${key}:${ip}`;
  const now = Date.now();
  const recent = (hits.get(id) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(id, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > limit;
}

export async function readJson(request: Request): Promise<Record<string, unknown> | null> {
  try {
    const body = await request.json();
    return body && typeof body === "object" ? (body as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}
