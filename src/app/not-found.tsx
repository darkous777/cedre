import Link from "next/link";
import { CedarMark } from "@/components/Ornaments";

export default function NotFound() {
  return (
    <main id="contenu" className="not-found">
      <div className="wrap not-found-inner">
        <CedarMark className="hero-mark" title="Restaurant Le Cèdre" />
        <h1>Page introuvable</h1>
        <p>Cette page n&apos;existe pas ou a été déplacée.</p>
        <Link className="btn" href="/">
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
