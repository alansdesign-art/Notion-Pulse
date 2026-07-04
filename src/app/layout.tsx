import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// ── Font secundária — corpo de texto ──────────────────────────────────────────
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800", "900"],
  display: "swap",
});

// ── MargemTest Regular — largura padrão ──────────────────────────────────────
const margemRegular = localFont({
  variable: "--font-margem",
  display: "swap",
  src: [
    { path: "../../public/fonts/margem/MargemTest-Thin.ttf",        weight: "100", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-ThinItalic.ttf",  weight: "100", style: "italic" },
    { path: "../../public/fonts/margem/MargemTest-Light.ttf",       weight: "300", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../../public/fonts/margem/MargemTest-Regular.ttf",     weight: "400", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-Italic.ttf",      weight: "400", style: "italic" },
    { path: "../../public/fonts/margem/MargemTest-Medium.ttf",      weight: "500", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-MediumItalic.ttf",weight: "500", style: "italic" },
    { path: "../../public/fonts/margem/MargemTest-Bold.ttf",        weight: "700", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-BoldItalic.ttf",  weight: "700", style: "italic" },
    { path: "../../public/fonts/margem/MargemTest-XBold.ttf",       weight: "800", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-XBoldItalic.ttf", weight: "800", style: "italic" },
    { path: "../../public/fonts/margem/MargemTest-Black.ttf",       weight: "900", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
});

// ── MargemTest Condensed ─────────────────────────────────────────────────────
const margemCondensed = localFont({
  variable: "--font-margem-condensed",
  display: "swap",
  src: [
    { path: "../../public/fonts/margem/MargemTest-CondensedThin.ttf",        weight: "100", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-CondensedThinItalic.ttf",  weight: "100", style: "italic" },
    { path: "../../public/fonts/margem/MargemTest-CondensedLight.ttf",       weight: "300", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-CondensedLightItalic.ttf", weight: "300", style: "italic" },
    { path: "../../public/fonts/margem/MargemTest-CondensedRegular.ttf",     weight: "400", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-CondensedItalic.ttf",      weight: "400", style: "italic" },
    { path: "../../public/fonts/margem/MargemTest-CondensedMedium.ttf",      weight: "500", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-CondensedMediumItalic.ttf",weight: "500", style: "italic" },
    { path: "../../public/fonts/margem/MargemTest-CondensedBold.ttf",        weight: "700", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-CondensedBoldItalic.ttf",  weight: "700", style: "italic" },
    { path: "../../public/fonts/margem/MargemTest-CondensedXBold.ttf",       weight: "800", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-CondensedXBoldItalic.ttf", weight: "800", style: "italic" },
    { path: "../../public/fonts/margem/MargemTest-CondensedBlack.ttf",       weight: "900", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-CondensedBlackItalic.ttf", weight: "900", style: "italic" },
  ],
});

// ── MargemTest Narrow ────────────────────────────────────────────────────────
const margemNarrow = localFont({
  variable: "--font-margem-narrow",
  display: "swap",
  src: [
    { path: "../../public/fonts/margem/MargemTest-NarrowThin.ttf",        weight: "100", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-NarrowThinItalic.ttf",  weight: "100", style: "italic" },
    { path: "../../public/fonts/margem/MargemTest-NarrowLight.ttf",       weight: "300", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-NarrowRegular.ttf",     weight: "400", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-NarrowItalic.ttf",      weight: "400", style: "italic" },
    { path: "../../public/fonts/margem/MargemTest-NarrowMedium.ttf",      weight: "500", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-NarrowMediumItalic.ttf",weight: "500", style: "italic" },
    { path: "../../public/fonts/margem/MargemTest-NarrowBold.ttf",        weight: "700", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-NarrowBoldItalic.ttf",  weight: "700", style: "italic" },
    { path: "../../public/fonts/margem/MargemTest-NarrowXBold.ttf",       weight: "800", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-NarrowXBoldItalic.ttf", weight: "800", style: "italic" },
    { path: "../../public/fonts/margem/MargemTest-NarrowBlack.ttf",       weight: "900", style: "normal" },
    { path: "../../public/fonts/margem/MargemTest-NarrowBlackItalic.ttf", weight: "900", style: "italic" },
  ],
});

export const metadata: Metadata = {
  title: "Notion Pulse",
  description: "Notion Pulse — Gestão de contratos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${margemRegular.variable} ${margemCondensed.variable} ${margemNarrow.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
