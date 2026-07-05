import { site, type SiteLocation } from "@/content/site";

function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function LocationCard({ location }: { location: SiteLocation }) {
  return (
    <article className="location-card">
      <h3>{location.label}</h3>
      <p className="address">
        {location.street}, {location.city} ({location.region})
      </p>
      <a className="phone" href={`tel:${location.phoneHref}`}>
        {location.phoneDisplay}
      </a>
      <table className="hours">
        <caption>Heures d&apos;ouverture — {location.label}</caption>
        <tbody>
          {site.hours.map((slot) => (
            <tr key={slot.days}>
              <th scope="row">{slot.days}</th>
              <td>
                {slot.open} – {slot.close}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="location-actions">
        <a className="btn btn-dark" href={mapsUrl(location.mapsQuery)} rel="noopener" target="_blank">
          Itinéraire
        </a>
        <a className="btn btn-dark" href={`tel:${location.phoneHref}`}>
          Appeler
        </a>
      </div>
    </article>
  );
}
