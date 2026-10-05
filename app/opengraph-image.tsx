import { ImageResponse } from "next/og";

export const alt = "Strony internetowe Opole - szymonjurkun.pl";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Satori (next/og) nie czyta WOFF2. CSS v1 + stary Safari UA zwraca TTF.
 */
async function loadFraunces() {
  const css = await fetch(
    "https://fonts.googleapis.com/css?family=Fraunces:600&subset=latin,latin-ext",
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    }
  ).then((response) => response.text());

  const match = css.match(
    /url\(([^)]+)\)\s*format\(['"](?:truetype|opentype|woff)['"]\)/i
  );
  if (!match?.[1]) {
    throw new Error("Nie znaleziono URL TTF/OTF/WOFF dla Fraunces.");
  }

  const fontResponse = await fetch(match[1]);
  if (!fontResponse.ok) {
    throw new Error(`Fraunces fetch failed: ${fontResponse.status}`);
  }

  const data = await fontResponse.arrayBuffer();
  const signature = String.fromCharCode(...new Uint8Array(data).slice(0, 4));
  if (signature === "wOF2") {
    throw new Error("Google Fonts zwróciło WOFF2, a Satori go nie obsługuje.");
  }

  return data;
}

export default async function OpenGraphImage() {
  const fraunces = await loadFraunces();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#f2ede2",
          color: "#1a1a17",
        }}
      >
        <div
          style={{
            fontSize: 72,
            lineHeight: 1.1,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            fontFamily: "Fraunces",
          }}
        >
          Strony internetowe Opole
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            color: "#5a584f",
            fontFamily: "Fraunces",
          }}
        >
          szymonjurkun.pl
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Fraunces",
          data: fraunces,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
