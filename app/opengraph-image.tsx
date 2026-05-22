import { ImageResponse } from "next/og";

export const alt =
  "Koine Labs — An AI that knows how you feel before you do.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PALETTE = {
  bg: "#f8f4ec",
  bg2: "#fbf9f3",
  ink: "#0f0e0c",
  ink2: "#3a352d",
  ink3: "#857d6e",
  teal: "#8ec5c5",
  tealDeep: "#5a9b9b",
  tealSoft: "#bcdada",
  cream: "#f0e3c8",
};

async function loadGoogleFont(
  family: string,
  text: string
): Promise<ArrayBuffer> {
  // Google Fonts serves WOFF2 to modern browsers but Satori (the OG-image
  // renderer) only supports TTF/OTF. Spoofing an old UA forces Google to
  // return a TTF-format URL.
  const url = `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`;
  const cssRes = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)",
    },
  });
  const css = await cssRes.text();
  const fontUrl = css.match(/src: url\((.+?)\) format/)?.[1];
  if (!fontUrl) throw new Error(`Couldn't extract font url for ${family}`);
  const fontRes = await fetch(fontUrl);
  return fontRes.arrayBuffer();
}

export default async function OpengraphImage() {
  const glyphText =
    "An AI that knows how you feel before you do. KOINE LABS · AMBIENT AI koinelabs.com κοινή";

  const [serifItalic, sansRegular, monoRegular] = await Promise.all([
    loadGoogleFont("Instrument+Serif:ital@1", glyphText),
    loadGoogleFont("Inter+Tight:wght@400", glyphText),
    loadGoogleFont("JetBrains+Mono:wght@400", glyphText),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          background: `linear-gradient(135deg, ${PALETTE.bg} 0%, ${PALETTE.bg2} 50%, ${PALETTE.tealSoft}55 100%)`,
          fontFamily: "Inter Tight",
          color: PALETTE.ink,
          position: "relative",
        }}
      >
        {/* faded greek watermark */}
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            fontFamily: "Instrument Serif",
            fontStyle: "italic",
            fontSize: 360,
            color: PALETTE.tealDeep,
            opacity: 0.08,
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
          }}
        >
          κοινή
        </div>

        {/* top — eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontFamily: "JetBrains Mono",
            fontSize: 18,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: PALETTE.ink3,
          }}
        >
          <div
            style={{ width: 56, height: 1, background: PALETTE.ink3, opacity: 0.5 }}
          />
          <span>Koine Labs · Ambient AI</span>
        </div>

        {/* middle — the headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Instrument Serif",
            fontStyle: "italic",
            fontSize: 116,
            lineHeight: 1.02,
            letterSpacing: "-0.028em",
            color: PALETTE.ink,
            marginTop: 24,
          }}
        >
          <div>An AI that knows</div>
          <div style={{ color: PALETTE.tealDeep }}>how you feel</div>
          <div style={{ opacity: 0.72 }}>before you do.</div>
        </div>

        {/* bottom — caption + url */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "JetBrains Mono",
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: PALETTE.ink3,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: PALETTE.tealDeep,
              }}
            />
            <span>koinelabs.com</span>
          </div>
          <span style={{ fontFamily: "Instrument Serif", fontStyle: "italic", fontSize: 22, color: PALETTE.tealDeep }}>
            κοινή · common
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: serifItalic,
          style: "italic",
          weight: 400,
        },
        {
          name: "Inter Tight",
          data: sansRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "JetBrains Mono",
          data: monoRegular,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
