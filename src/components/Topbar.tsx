import { site } from "@/content/site";

export function Topbar() {
  const phone = site.locations[0].phoneHref;
  return (
    <div className="topbar">
      <div className="wrap topbar-inner">
        <span>Deux succursales à Québec — Sainte-Foy &amp; L&apos;Ancienne-Lorette</span>
        <span>
          Commande à emporter : <a href={`tel:${phone}`}>{site.locations[0].phoneDisplay}</a>
        </span>
      </div>
    </div>
  );
}
