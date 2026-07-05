import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function ReviewCta() {
  return (
    <section className="section review-section" aria-labelledby="avis-title">
      <div className="wrap">
        <Reveal className="review-inner">
          <div className="review-stars" aria-hidden="true">
            ★★★★★
          </div>
          <h2 id="avis-title">Vous avez aimé votre repas? Dites-le à Québec.</h2>
          <a className="btn" href={site.ordering.googleReview} rel="noopener" target="_blank">
            Laisser un avis Google
          </a>
        </Reveal>
      </div>
    </section>
  );
}
