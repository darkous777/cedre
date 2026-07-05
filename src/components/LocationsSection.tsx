import { site } from "@/content/site";
import { ImageSlot } from "@/components/ImageSlot";
import { LocationCard } from "@/components/LocationCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function LocationsSection() {
  return (
    <section className="section locations-section" id="succursales">
      <div className="wrap">
        <Reveal>
          <SectionHeading title="Nos succursales">
            Mêmes recettes, même accueil — choisissez l&apos;adresse la plus proche.
          </SectionHeading>
        </Reveal>
        <Reveal className="locations-image">
          <ImageSlot slot="salle" sizes="100vw" className="image-cover" />
        </Reveal>
        <div className="locations-grid">
          {site.locations.map((location) => (
            <Reveal key={location.id}>
              <LocationCard location={location} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
