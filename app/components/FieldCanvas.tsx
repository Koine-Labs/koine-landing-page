"use client";

import { useEffect, useRef } from "react";

/**
 * Atmospheric state-field canvas — fixed behind everything, painting
 * drifting teal/cream radial blobs. Used across all routes for ambient
 * brand continuity.
 */
export function FieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let t = 0;
    let scrollY = 0;
    let raf = 0;

    // Cap DPR at 1.5 — full Retina (2–3x) on a 200vw×200vh canvas crushes
    // mobile GPUs. Visual difference is negligible for soft radial gradients.
    const dpr =
      typeof window !== "undefined"
        ? Math.min(window.devicePixelRatio || 1, 1.5)
        : 1;
    const resize = () => {
      const rect = cvs.getBoundingClientRect();
      W = cvs.width = Math.max(1, Math.floor(rect.width * dpr));
      H = cvs.height = Math.max(1, Math.floor(rect.height * dpr));
    };
    resize();
    window.addEventListener("resize", resize);

    const blobs = [
      { x: 0.34, y: 0.40, r: 0.22, c: "rgba(142,197,197," },
      { x: 0.66, y: 0.45, r: 0.20, c: "rgba(240,227,200," },
      { x: 0.50, y: 0.68, r: 0.28, c: "rgba(142,197,197," },
      { x: 0.32, y: 0.65, r: 0.16, c: "rgba(240,227,200," },
    ];

    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const draw = () => {
      t += 0.0025;
      ctx.clearRect(0, 0, W, H);
      const offset = Math.min(scrollY * 0.00015, 0.08);
      blobs.forEach((b, i) => {
        const cx =
          (b.x + Math.sin(t + i) * 0.025 + offset * (i % 2 ? 1 : -1)) * W;
        const cy =
          (b.y + Math.cos(t * 1.2 + i) * 0.025 - offset * 0.5) * H;
        const r = b.r * W * (0.95 + Math.sin(t * 1.5 + i) * 0.05);
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0, b.c + "0.30)");
        g.addColorStop(0.35, b.c + "0.18)");
        g.addColorStop(0.65, b.c + "0.07)");
        g.addColorStop(0.85, b.c + "0.02)");
        g.addColorStop(1, b.c + "0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <canvas className="field-canvas" ref={canvasRef} aria-hidden="true" />;
}
