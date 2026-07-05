import { site } from "@/content/site";
import { ImageSlot } from "@/components/ImageSlot";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function OrderCards() {
  return (
    <section className="section order-section" id="commander">
      <div className="wrap">
        <Reveal>
          <SectionHeading title="Commander">
            Le plus avantageux pour vous — et pour nous : appelez directement. Nous préparons votre commande pendant que
            vous vous déplacez.
          </SectionHeading>
        </Reveal>
        <div className="order-layout">
          <Reveal className="order-image">
            <ImageSlot slot="pita" sizes="(min-width: 900px) 34vw, 100vw" className="image-cover" />
          </Reveal>
          <div className="order-grid">
            <Reveal className="order-card order-card-primary">
              <h3>À emporter</h3>
              <p>Commandez par téléphone et passez la prendre — prête en 15 à 20 minutes, sans frais de plateforme.</p>
              <a className="btn" href={`tel:${site.locations[0].phoneHref}`}>
                Appeler pour commander
              </a>
            </Reveal>
            <Reveal className="order-card">
              <h3>DoorDash</h3>
              <p>Livraison à domicile via DoorDash pour les deux succursales.</p>
              <a className="btn btn-outline" href={site.ordering.doordash} rel="noopener" target="_blank">
                Commander sur DoorDash
              </a>
            </Reveal>
            <Reveal className="order-card">
              <h3>Uber Eats</h3>
              <p>Livraison à domicile via Uber Eats pour les deux succursales.</p>
              <a className="btn btn-outline" href={site.ordering.ubereats} rel="noopener" target="_blank">
                Commander sur Uber Eats
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
