import Link from "next/link";
import { menu } from "@/content/menu";
import { MenuCategory } from "@/components/MenuCategory";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const highlightedIds = new Set(["sandwichs", "assiettes"]);

export function MenuHighlights() {
  const categories = menu.filter((category) => highlightedIds.has(category.id));

  return (
    <section className="section section-menu" id="menu">
      <div className="wrap">
        <Reveal>
          <SectionHeading title="Le menu">
            Recettes familiales libanaises, préparées sur place. Les plats marqués d&apos;un point{" "}
            <span className="spicy-dot inline-dot" role="img" aria-label="épicé" /> sont relevés.
          </SectionHeading>
        </Reveal>

        <Reveal className="menu-panel">
          <p className="menu-demo-note">
            <strong>Version démonstration :</strong> prix et liste complète à valider avec la maison avant publication.
          </p>
          {categories.map((category) => (
            <MenuCategory category={category} compact key={category.id} />
          ))}
          <div className="menu-cta">
            <Link className="btn btn-dark" href="/menu">
              Menu complet
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
