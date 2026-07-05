// Single source of truth for business facts.
// Verified contact/delivery facts come from the live legacy site.
// Remaining TODO values are tracked in TODO.md. Do not invent values.
export const site = {
  name: "Restaurant Le Cèdre",
  domain: "https://restaurantlecedre.ca",
  description:
    "Cuisine libanaise authentique à Québec : shawarma, shish taouk, falafels et grillades. Deux succursales — Sainte-Foy et L'Ancienne-Lorette.",
  email: "info@restaurantlecedre.com",
  locations: [
    {
      id: "sainte-foy",
      label: "Sainte-Foy",
      street: "2750 Chemin Ste-Foy",
      city: "Québec",
      region: "QC",
      postalCode: "G1V 1V6",
      phoneDisplay: "581 300-3002",
      phoneHref: "+15813003002",
      mapsQuery: "2750 Chemin Ste-Foy, Québec, QC G1V 1V6",
    },
    {
      id: "ancienne-lorette",
      label: "L'Ancienne-Lorette",
      street: "1875 Rue Notre-Dame",
      city: "L'Ancienne-Lorette",
      region: "QC",
      postalCode: "G2E 3E1",
      phoneDisplay: "581 300-1080",
      phoneHref: "+15813001080",
      mapsQuery: "1875 Rue Notre-Dame, L'Ancienne-Lorette, QC G2E 3E1",
    },
  ],
  hours: [
    // TODO — placeholders, absent from current site, confirm with owner
    {
      days: "Lundi – Mercredi",
      open: "11 h",
      close: "21 h",
      schema: {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
        opens: "11:00",
        closes: "21:00",
      },
    },
    {
      days: "Jeudi – Samedi",
      open: "11 h",
      close: "22 h",
      schema: {
        dayOfWeek: ["Thursday", "Friday", "Saturday"],
        opens: "11:00",
        closes: "22:00",
      },
    },
    {
      days: "Dimanche",
      open: "12 h",
      close: "21 h",
      schema: { dayOfWeek: ["Sunday"], opens: "12:00", closes: "21:00" },
    },
  ],
  ordering: {
    doordash: "https://www.doordash.com/store/restaurant-le-c%C3%A8dre-qu%C3%A9bec-937697/",
    ubereats: "https://www.ubereats.com/ca/store/restaurant-le-cedre/tVsBQlQtSGuFNsfJCAi81Q",
    googleReview:
      "https://www.google.ca/search?q=restaurant+le+c%C3%A8dre",
    tripadvisor:
      "https://fr.tripadvisor.ca/Restaurant_Review-g155033-d9451540-Reviews-Le_Cedre_Restaurant_Libanais-Quebec_City_Quebec.html",
  },
} as const;

export type SiteLocation = (typeof site.locations)[number];
