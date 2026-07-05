import Link from "next/link";
import { site } from "@/content/site";
import { CedarMark, LatticePattern } from "@/components/Ornaments";
import { ImageSlot } from "@/components/ImageSlot";

export function Hero() {
  return (
    <section className="hero">
      <LatticePattern className="hero-pattern" />
      <div className="hero-media" aria-hidden="true">
        <ImageSlot slot="hero" fill priority sizes="100vw" className="image-cover" />
      </div>
      <div className="wrap hero-inner">
        <div className="hero-content hero-load">
          <CedarMark className="hero-mark" title={site.name} />
          <p className="eyebrow">Restaurant libanais · Québec</p>
          <h1>La cuisine du cèdre, servie comme à la maison</h1>
          <p className="hero-copy">
            Shawarma tranché à la commande, grillades sur charbon, falafels croustillants et mezzés préparés chaque matin.
            Sur place, à emporter ou livré chez vous.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-large" href="/menu">
              Voir le menu
            </Link>
            <a className="btn btn-large btn-outline" href="#commander">
              Commander en ligne
            </a>
          </div>
          <dl className="hero-facts">
            {site.locations.map((location) => (
              <div key={location.id}>
                <dt>{location.label}</dt>
                <dd>{location.city}</dd>
              </div>
            ))}
            <div>
              <dt>Aujourd&apos;hui</dt>
              <dd>
                {site.hours[0].open} – {site.hours[0].close}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
