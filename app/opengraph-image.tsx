/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SERPENTINE — The Unified Security Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "radial-gradient(120% 90% at 50% 10%, #15131a 0%, #0a0a0e 55%, #07070a 100%)",
          padding: "72px 80px",
          color: "#f3eeda",
          position: "relative",
        }}
      >
        {/* Subtle bronze grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(201,166,106,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,166,106,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(180deg, #000 0%, transparent 90%)",
          }}
        />

        {/* Header — wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          {/* Geometric serpent mark — drawn inline */}
          <svg width="44" height="44" viewBox="0 0 32 32">
            <path
              d="M 6 10 C 6 5, 14 5, 16 10 C 18 15, 26 15, 26 10"
              fill="none"
              stroke="#f3eeda"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M 26 22 C 26 27, 18 27, 16 22 C 14 17, 6 17, 6 22"
              fill="none"
              stroke="#f3eeda"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <circle cx="9" cy="22" r="1.8" fill="#c9a66a" />
          </svg>
          <span
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: "#f3eeda",
            }}
          >
            SERPENTINE
          </span>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1, minHeight: 80 }} />

        {/* Eyebrow rule + label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            zIndex: 1,
          }}
        >
          <div style={{ width: 32, height: 2, background: "#c9a66a" }} />
          <span
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#c9a66a",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            The Unified Security Platform
          </span>
        </div>

        {/* H1 */}
        <div
          style={{
            display: "flex",
            marginTop: 22,
            fontSize: 76,
            fontWeight: 600,
            lineHeight: 1.02,
            letterSpacing: "-0.028em",
            color: "#f3eeda",
            maxWidth: 980,
            zIndex: 1,
          }}
        >
          Security operations, unified by architecture.
        </div>

        {/* Footer strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 40,
            paddingTop: 24,
            borderTop: "1px solid rgba(243,238,218,0.18)",
            zIndex: 1,
            fontSize: 16,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(243,238,218,0.55)",
          }}
        >
          <span>Sovereign EU · ISO 27001 · SOC 2 II · HDS · GDPR-native</span>
          <span style={{ color: "#c9a66a" }}>spnt.io</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
