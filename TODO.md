# TODO avant lancement

Ces éléments sont des placeholders assumés pour la démonstration. Ne pas les
remplacer par des valeurs plausibles sans confirmation du propriétaire.

## Faits d'entreprise à confirmer

- `src/content/site.ts:8` — courriel `info@restaurantlecedre.com`; confirmer le
  domaine final, car le site cible utilise `.ca`.
- `src/content/site.ts:13` — adresse Sainte-Foy :
  `[ADRESSE À CONFIRMER], chemin Sainte-Foy`.
- `src/content/site.ts:16` — téléphone Sainte-Foy : `418 000-0000` et
  `+14180000000`.
- `src/content/site.ts:23` — adresse L'Ancienne-Lorette :
  `[ADRESSE À CONFIRMER]`.
- `src/content/site.ts:26` — téléphone L'Ancienne-Lorette : `418 000-0000` et
  `+14180000000`.
- `src/content/site.ts:32` à `src/content/site.ts:54` — heures d'ouverture de
  démonstration; confirmer chaque plage avec le propriétaire.
- `src/content/site.ts:58` — URL exacte DoorDash.
- `src/content/site.ts:59` — URL exacte Uber Eats.
- `src/content/site.ts:61` — lien court du profil Google Business pour les avis.

## Menu

- `src/content/menu.ts` — tous les prix sont des placeholders de démonstration;
  confirmer les montants et la disponibilité des plats avant publication.

## Photos

- `public/images/source/` — photos temporaires Unsplash; remplacer par les
  photos fournies par le propriétaire avant la mise en ligne finale.
- `public/images/client-originals/` — photos originales du site actuel
  conservées comme référence seulement.

## Sortie attendue du grep placeholders

```text
src/content/site.ts:8:  email: "info@restaurantlecedre.com", // TODO confirm — domain mismatch (.com vs .ca) on current site
src/content/site.ts:13:      street: "[ADRESSE À CONFIRMER], chemin Sainte-Foy", // TODO
src/content/site.ts:16:      phoneDisplay: "418 000-0000", // TODO — placeholder, do not invent
src/content/site.ts:23:      street: "[ADRESSE À CONFIRMER]", // TODO
src/content/site.ts:26:      phoneDisplay: "418 000-0000", // TODO
```
