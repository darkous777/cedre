import type { Metadata, Viewport } from "next";
import { Figtree, Young_Serif } from "next/font/google";
import { site } from "@/content/site";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Topbar } from "@/components/Topbar";
import { restaurantJsonLd } from "@/lib/jsonld";
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
  metadataBase: new URL(site.domain),
  title: {
    default: "Restaurant Le Cèdre | Cuisine libanaise à Québec — Sainte-Foy & L'Ancienne-Lorette",
    template: "%s | Restaurant Le Cèdre",
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    siteName: site.name,
    title: "Restaurant Le Cèdre — Cuisine libanaise à Québec",
    description: site.description,
    url: site.domain,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Restaurant Le Cèdre — Cuisine libanaise à Québec",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
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
      <body>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <Topbar />
        <Nav />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
        {/* Plausible prêt pour le lancement :
        <script defer data-domain="restaurantlecedre.ca" src="https://plausible.io/js/script.js"></script>
        */}
      </body>
    </html>
  );
}
