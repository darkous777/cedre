export type MenuItem = {
  name: string;
  price: number; // CAD — ALL prices are demo placeholders, flagged in TODO.md
  desc?: string;
  spicy?: boolean;
  veg?: boolean;
  image?: string; // key into images.ts, optional
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

// Menu approved in the demo — do not add or rename dishes.
export const menu: MenuCategory[] = [
  {
    id: "entrees",
    title: "Entrées",
    items: [
      {
        name: "Hommos",
        price: 7.5,
        desc: "Purée de pois chiches, tahini, citron et huile d'olive, servie avec pain pita.",
      },
      {
        name: "Baba ghannouj",
        price: 8.25,
        desc: "Caviar d'aubergine grillée au charbon, tahini et citron.",
      },
      {
        name: "Feuilles de vigne (6)",
        price: 8.75,
        desc: "Farcies au riz, tomates et fines herbes, arrosées d'huile d'olive.",
      },
      {
        name: "Kebbé (2)",
        price: 7.95,
        desc: "Croquettes de bœuf et boulgour farcies aux oignons et noix de pin.",
      },
      {
        name: "Falafels (4)",
        price: 6.95,
        veg: true,
        desc: "Boulettes de pois chiches et fèves, herbes fraîches, sauce tahini.",
      },
      {
        name: "Assiette de mezzés à partager",
        price: 16.95,
        desc: "Hommos, baba ghannouj, feuilles de vigne, falafels et pita chaud.",
      },
    ],
  },
  {
    id: "salades",
    title: "Salades",
    items: [
      {
        name: "Taboulé",
        price: 8.5,
        veg: true,
        desc: "Persil frais, boulgour, tomates, menthe, citron et huile d'olive.",
      },
      {
        name: "Fattouche",
        price: 8.5,
        veg: true,
        desc: "Laitue, tomates, concombres, radis, sumac et croustilles de pita.",
      },
    ],
  },
  {
    id: "sandwichs",
    title: "Sandwichs",
    note: "Roulés dans un pain pita frais. En trio : ajoutez 4,75 $ pour patates et breuvage.",
    items: [
      {
        name: "Shawarma au poulet",
        price: 9.95,
        desc: "Poulet mariné tranché à la broche, sauce à l'ail, cornichons et navets marinés.",
      },
      {
        name: "Shawarma au bœuf",
        price: 10.5,
        desc: "Bœuf mariné aux épices libanaises, tahini, tomates et oignons.",
      },
      {
        name: "Shish taouk",
        price: 9.95,
        desc: "Brochette de poulet grillée au charbon, sauce à l'ail crémeuse.",
      },
      {
        name: "Kafta",
        price: 9.95,
        spicy: true,
        desc: "Bœuf haché grillé au persil et aux oignons, légèrement relevé.",
      },
      {
        name: "Falafel",
        price: 8.95,
        veg: true,
        desc: "Falafels croustillants, tahini, persil, tomates et navets marinés.",
      },
    ],
  },
  {
    id: "assiettes",
    title: "Assiettes",
    note: "Servies avec riz ou patates, salade et sauce à l'ail ou hommos.",
    items: [
      { name: "Assiette shawarma poulet", price: 17.95 },
      { name: "Assiette shawarma bœuf", price: 18.95 },
      { name: "Assiette shawarma mixte", price: 19.95 },
      { name: "Assiette shish taouk", price: 18.5 },
      { name: "Brochettes de kafta", price: 18.5, spicy: true },
      {
        name: "Grillades mixtes Le Cèdre",
        price: 23.95,
        desc: "Shish taouk, kafta et shawarma sur un même plat — la table du chef.",
      },
      {
        name: "Assiette végétarienne",
        price: 16.95,
        veg: true,
        desc: "Falafels, hommos, feuilles de vigne, taboulé et pita chaud.",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts & breuvages",
    items: [
      {
        name: "Baklava (2 morceaux)",
        price: 4.5,
        desc: "Pâte filo, noix et sirop parfumé à la fleur d'oranger.",
      },
      { name: "Café libanais", price: 3.25 },
      { name: "Thé à la menthe", price: 2.95 },
      { name: "Boissons gazeuses & jus", price: 2.5 },
    ],
  },
];
