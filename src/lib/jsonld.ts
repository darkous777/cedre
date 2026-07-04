import { site } from "@/content/site";

/**
 * Structured data for Google local results: one @graph holding a
 * Restaurant node per location, derived entirely from site.ts so it
 * can never drift from the visible content.
 */
export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": site.locations.map((location) => ({
      "@type": "Restaurant",
      "@id": `${site.domain}/#${location.id}`,
      name: `${site.name} — ${location.label}`,
      servesCuisine: ["Libanaise", "Moyen-orientale"],
      priceRange: "$$",
      url: `${site.domain}/`,
      menu: `${site.domain}/menu`,
      telephone: location.phoneHref,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: location.street,
        addressLocality: location.city,
        addressRegion: location.region,
        addressCountry: "CA",
      },
      openingHoursSpecification: site.hours.map((slot) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...slot.schema.dayOfWeek],
        opens: slot.schema.opens,
        closes: slot.schema.closes,
      })),
    })),
  };
}
