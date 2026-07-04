import type { Metadata, Viewport } from "next";
import { Figtree, Young_Serif } from "next/font/google";
import "./globals.css";

const youngSerif = Young_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-young-serif",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Restaurant Le Cèdre",
  description: "Cuisine libanaise authentique à Québec.",
};

export const viewport: Viewport = {
  themeColor: "#123A2E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CA" className={`${youngSerif.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
