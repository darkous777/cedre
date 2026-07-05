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

const UNSPLASH_LICENSE = "Unsplash License (commercial use, no attribution required)";

// Temporary licensed demo photos (Unsplash) — final launch uses photos
// supplied by the owner (see TODO.md). Components consume ONLY this
// manifest; never hardcode an image path in a component.
// Regenerate variants with `npm run images` (scripts/optimize-images.mjs).
export const images = {
  hero: {
    file: "/images/opt/hero-1600.webp",
    fileSmall: "/images/opt/hero-800.webp",
    alt: "Comptoir de mezzés, falafels et assiettes du Restaurant Le Cèdre",
    width: 1600,
    height: 900,
    credit: {
      photographer: "Restaurant Le Cèdre",
      sourceUrl: "http://restaurantlecedre.ca/images/banner01.jpg",
      license: "Actif client existant",
    },
  },
  mezze: {
    file: "/images/opt/mezze-1600.webp",
    fileSmall: "/images/opt/mezze-800.webp",
    alt: "Assiette de mezzés et panier de pain sur une table sombre",
    width: 1600,
    height: 1200,
    credit: {
      photographer: "Louis Hansel",
      sourceUrl: "https://unsplash.com/photos/IgGFGxULsWg",
      license: UNSPLASH_LICENSE,
    },
  },
  grillades: {
    file: "/images/opt/grillades-1600.webp",
    fileSmall: "/images/opt/grillades-800.webp",
    alt: "Brochettes de poulet et de kafta grillées sur le charbon",
    width: 1600,
    height: 1200,
    credit: {
      photographer: "Muha Ajjan",
      sourceUrl: "https://unsplash.com/photos/nsr_303jGyY",
      license: UNSPLASH_LICENSE,
    },
  },
  falafel: {
    file: "/images/opt/falafel-1600.webp",
    fileSmall: "/images/opt/falafel-800.webp",
    alt: "Falafels dorés, l'un ouvert montrant son cœur vert aux herbes",
    width: 1600,
    height: 1600,
    credit: {
      photographer: "Anton",
      sourceUrl: "https://unsplash.com/photos/illep4eI8HQ",
      license: UNSPLASH_LICENSE,
    },
  },
  salades: {
    file: "/images/opt/salades-1600.webp",
    fileSmall: "/images/opt/salades-800.webp",
    alt: "Salade fraîche au persil, aux tomates et à la menthe",
    width: 1600,
    height: 1600,
    credit: {
      photographer: "Alex Bayev",
      sourceUrl: "https://unsplash.com/photos/7nfjR-hPbbQ",
      license: UNSPLASH_LICENSE,
    },
  },
  baklava: {
    file: "/images/opt/baklava-1600.webp",
    fileSmall: "/images/opt/baklava-800.webp",
    alt: "Rangées de baklavas croustillants garnis de pistaches",
    width: 1600,
    height: 1200,
    credit: {
      photographer: "Benjamin Chambon",
      sourceUrl: "https://unsplash.com/photos/OEDeQheVySQ",
      license: UNSPLASH_LICENSE,
    },
  },
  pita: {
    file: "/images/opt/pita-1600.webp",
    fileSmall: "/images/opt/pita-800.webp",
    alt: "Pains pita gonflés à la sortie du four",
    width: 1600,
    height: 1067,
    credit: {
      photographer: "Nancy Hann",
      sourceUrl: "https://unsplash.com/photos/cnktbiZJICw",
      license: UNSPLASH_LICENSE,
    },
  },
  salle: {
    file: "/images/opt/salle-1600.webp",
    fileSmall: "/images/opt/salle-800.webp",
    alt: "Salle à manger du Restaurant Le Cèdre avec banquettes et décor libanais",
    width: 1600,
    height: 1067,
    credit: {
      photographer: "Restaurant Le Cèdre",
      sourceUrl: "http://restaurantlecedre.ca/resto2.jpg",
      license: "Actif client existant",
    },
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
