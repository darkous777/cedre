// Single source of truth for business facts.
// Every TODO below is a client placeholder — tracked in TODO.md. Do not invent values.
export const site = {
  name: "Restaurant Le Cèdre",
  domain: "https://restaurantlecedre.ca",
  description:
    "Cuisine libanaise authentique à Québec : shawarma, shish taouk, falafels et grillades. Deux succursales — Sainte-Foy et L'Ancienne-Lorette.",
  email: "info@restaurantlecedre.com", // TODO confirm — domain mismatch (.com vs .ca) on current site
  locations: [
    {
      id: "sainte-foy",
      label: "Sainte-Foy",
      street: "[ADRESSE À CONFIRMER], chemin Sainte-Foy", // TODO
      city: "Québec",
      region: "QC",
      phoneDisplay: "418 000-0000", // TODO — placeholder, do not invent
      phoneHref: "+14180000000",
      mapsQuery: "Restaurant Le Cèdre Sainte-Foy Québec",
    },
    {
      id: "ancienne-lorette",
      label: "L'Ancienne-Lorette",
      street: "[ADRESSE À CONFIRMER]", // TODO
      city: "L'Ancienne-Lorette",
      region: "QC",
      phoneDisplay: "418 000-0000", // TODO
      phoneHref: "+14180000000",
      mapsQuery: "Restaurant Le Cèdre L'Ancienne-Lorette",
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
    doordash: "https://www.doordash.com/", // TODO exact store URL
    ubereats: "https://www.ubereats.com/ca-fr", // TODO exact store URL
    googleReview:
      "https://www.google.com/maps/search/?api=1&query=Restaurant+Le+C%C3%A8dre+Qu%C3%A9bec", // TODO replace with GBP review shortlink
  },
} as const;

export type SiteLocation = (typeof site.locations)[number];
