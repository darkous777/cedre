import type { Metadata } from "next";
import Link from "next/link";
import { menu } from "@/content/menu";
import { MenuCategory } from "@/components/MenuCategory";
import { Reveal } from "@/components/Reveal";
import { StarOrnament } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Menu — shawarma, grillades et mezzés",
  description:
    "Menu du Restaurant Le Cèdre à Québec : entrées, salades, sandwichs, assiettes, desserts et breuvages.",
  alternates: {
    canonical: "/menu",
  },
};

export default function MenuPage() {
  return (
    <main id="contenu" className="menu-page">
      <section className="menu-hero">
        <div className="wrap">
          <Reveal className="menu-hero-inner">
            <StarOrnament className="section-star" />
            <p className="eyebrow">Menu complet</p>
            <h1>Shawarma, grillades et mezzés</h1>
            <p>
              Prix de démonstration à confirmer avec la maison avant publication. Les plats marqués d&apos;un point{" "}
              <span className="spicy-dot inline-dot" role="img" aria-label="épicé" /> sont relevés.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section-menu complete-menu" aria-labelledby="menu-complet-title">
        <div className="wrap">
          <Reveal className="menu-panel">
            <h2 id="menu-complet-title" className="visually-hidden">
              Catégories du menu
            </h2>
            <nav className="category-pills" aria-label="Catégories du menu">
              {menu.map((category) => (
                <a href={`#cat-${category.id}`} key={category.id}>
                  {category.title}
                </a>
              ))}
            </nav>
            <p className="menu-demo-note">
              <strong>Version démonstration :</strong> tous les prix doivent être validés par le propriétaire avant mise en ligne.
            </p>
            {menu.map((category) => (
              <MenuCategory category={category} key={category.id} />
            ))}
            <div className="menu-cta">
              <Link className="btn btn-dark" href="/#commander">
                Commander
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
