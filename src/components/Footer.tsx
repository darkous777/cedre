import Link from "next/link";
import { site } from "@/content/site";
import { CedarMark } from "@/components/Ornaments";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <Link className="brand footer-brand" href="/">
          <CedarMark className="brand-mark" />
          Le Cèdre
        </Link>
        <nav aria-label="Navigation de pied de page">
          <Link href="/menu">Menu</Link>
          <Link href="/#galerie">Galerie</Link>
          <Link href="/#commander">Commander</Link>
          <Link href="/#succursales">Succursales</Link>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </nav>
        <p className="copyright">© 2026 Restaurant Le Cèdre — Tous droits réservés.</p>
      </div>
    </footer>
  );
}
