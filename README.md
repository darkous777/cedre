# Restaurant Le Cèdre

Refonte Next.js statique pour une présentation client de Restaurant Le Cèdre.
Le site est en français canadien, sans CMS ni données à l'exécution : le contenu
source vit dans `src/content/`.

## Stack

- Next.js 16 App Router, TypeScript strict
- Tailwind CSS v4 avec jetons dans `src/app/globals.css`
- Export statique avec `output: "export"` et `trailingSlash: true`
- Images préoptimisées avec `sharp` dans `public/images/opt/`

## Scripts

```bash
npm run dev
npm run images
npm run build
npm run lint
npx tsc --noEmit
```

`npm run build` exécute `npm run images` via `prebuild`, puis génère `out/`.

## Remplacer les photos

1. Remplacer le fichier voulu dans `public/images/source/` en gardant le même
   nom, par exemple `hero.jpg`.
2. Lancer `npm run images`.
3. Les composants consomment automatiquement les variantes WebP depuis
   `src/content/images.ts`.

Les photos actuelles sont temporaires et créditées dans `CREDITS.md`. Les
photos originales du client conservées en référence sont dans
`public/images/client-originals/`.

## Déploiement statique

Cloudflare Pages ou Netlify peuvent servir directement `out/`.

- Build command : `npm run build`
- Publish directory : `out`
- Node : version compatible Next.js 16

Avant mise en ligne, compléter `TODO.md`, relancer `npm run build`, puis refaire
la vérification Lighthouse mobile sur le dossier exporté.
