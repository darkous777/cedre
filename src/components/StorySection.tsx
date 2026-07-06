import { ImageSlot } from "@/components/ImageSlot";
import { Reveal } from "@/components/Reveal";

export function StorySection() {
  return (
    <section className="section story-section section-clair" id="a-propos">
      <div className="wrap story-grid">
        <Reveal>
          <h2>Une table libanaise, deux adresses à Québec</h2>
          <p>
            Au Cèdre, tout part du charbon et du pain chaud. Le shawarma tourne lentement sur la broche, les brochettes
            grillent à la commande et les mezzés sont préparés chaque matin, comme dans les cuisines familiales du Liban.
          </p>
          <p>
            Que ce soit pour un dîner rapide en semaine, un souper en famille ou une commande à emporter, l&apos;équipe vous
            accueille à Sainte-Foy et à L&apos;Ancienne-Lorette.
          </p>
          <a className="btn" href="#succursales">
            Nous trouver
          </a>
        </Reveal>
        <Reveal className="story-image">
          <ImageSlot slot="mezze" sizes="(min-width: 900px) 42vw, 100vw" className="image-cover" />
        </Reveal>
      </div>
    </section>
  );
}
