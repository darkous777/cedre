export type ImageCredit = {
  photographer: string;
  sourceUrl: string;
  license: string;
};

export type ImageAsset = {
  /** Public path — either an optimized WebP or a generated SVG fallback card. */
  file: string;
  /** Smaller variant for constrained layouts (generated at 800w); absent for SVG fallbacks. */
  fileSmall?: string;
  alt: string;
  width: number;
  height: number;
  /** Absent for generated fallback cards. Mirrored in CREDITS.md. */
  credit?: ImageCredit;
};

// Temporary licensed demo photos (Unsplash/Pexels) — final launch uses
// photos supplied by the owner (see TODO.md). Components consume ONLY
// this manifest; never hardcode an image path in a component.
export const images = {
  hero: {
    file: "/images/fallback/hero.svg",
    alt: "Shawarma tranché à la broche verticale",
    width: 1600,
    height: 900,
  },
  mezze: {
    file: "/images/fallback/mezze.svg",
    alt: "Table de mezzés libanais : hommos, salades et pain pita",
    width: 1600,
    height: 1200,
  },
  grillades: {
    file: "/images/fallback/grillades.svg",
    alt: "Brochettes grillées sur charbon de bois",
    width: 1600,
    height: 1200,
  },
  falafel: {
    file: "/images/fallback/falafel.svg",
    alt: "Falafels croustillants en gros plan",
    width: 1200,
    height: 1200,
  },
  salades: {
    file: "/images/fallback/salades.svg",
    alt: "Bol de taboulé au persil frais",
    width: 1200,
    height: 1200,
  },
  baklava: {
    file: "/images/fallback/baklava.svg",
    alt: "Morceaux de baklava aux noix et au sirop",
    width: 1600,
    height: 1200,
  },
  pita: {
    file: "/images/fallback/pita.svg",
    alt: "Pain pita frais tout juste sorti du four",
    width: 1500,
    height: 1000,
  },
  salle: {
    file: "/images/fallback/salle.svg",
    alt: "Salle à manger chaleureuse du restaurant",
    width: 1500,
    height: 1000,
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
