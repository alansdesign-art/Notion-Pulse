import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Font secundária — body/texto corrido
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
});

// Font primária — display e headings (Gran proprietary)
// Adicione os arquivos .woff2 em public/fonts/margins/
const margins = localFont({
  src: [
    {
      path: "../../public/fonts/margins/Margins-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/margins/Margins-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/margins/Margins-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/margins/Margins-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/margins/Margins-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/margins/Margins-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-margins",
  display: "swap",
  fallback: ["Georgia", "serif"],
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
      className={`${margins.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
