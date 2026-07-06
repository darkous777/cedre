// Build-time image pipeline (static export has no runtime optimizer).
// - public/images/source/<key>.jpg  →  public/images/opt/<key>-{1600,800}.webp
//   center-cropped to each slot's aspect ratio, quality 78, metadata stripped
// - missing sources get a dignified SVG fallback card in public/images/fallback/
// - regenerates favicon PNGs and the 1200×630 Open Graph image from SVG templates
//
// Swap procedure: replace the file in source/ keeping the same name, run
// `npm run images`, done. See README.md.
import { existsSync } from "node:fs";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SOURCE_DIR = path.join(ROOT, "public/images/source");
const OPT_DIR = path.join(ROOT, "public/images/opt");
const FALLBACK_DIR = path.join(ROOT, "public/images/fallback");
const GALLERY_SOURCE_DIR = path.join(SOURCE_DIR, "gallery");
const GALLERY_OPT_DIR = path.join(OPT_DIR, "gallery");

// Gallery = the owner's own promotional dish photos (public/images/source/gallery/*.jpg).
// Unlike the hero/story slots, these keep their native aspect ratio (no crop — a
// name tag sits in the bottom corner) and are never upscaled beyond the source.
const GALLERY_WIDTH = 640;

const QUALITY = 78;
// The hero is the full-bleed LCP banner — encode it richer than the thumbnails.
const HERO_QUALITY = 90;
const LARGE_WIDTH = 1600;
const SMALL_WIDTH = 800;

// Slot key → aspect ratio (width / height). Must stay in sync with
// src/content/images.ts.
const SLOTS = {
  hero: 16 / 9,
  mezze: 4 / 3,
  grillades: 4 / 3,
  falafel: 1,
  salades: 1,
  baklava: 4 / 3,
  pita: 3 / 2,
  salle: 3 / 2,
};

const CEDAR_MARK = `
  <g fill="#D8A24A">
    <path d="M32 4 19 17h26z"/>
    <path d="M32 13 13 28h38z"/>
    <path d="M32 24 8 41h48z"/>
    <rect x="29" y="41" width="6" height="15" rx="1"/>
  </g>`;

const STAR_PATH =
  "M12 0l2.6 7.4L22 8.6l-5.7 5 1.7 7.7L12 17.6l-6 3.7 1.7-7.7L2 8.6l7.4-1.2z";

function faviconSvg(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="12" fill="#123A2E"/>
    ${CEDAR_MARK}
  </svg>`;
}

function fallbackCardSvg(width, height) {
  const cx = width / 2;
  const cy = height / 2;
  const star = Math.round(Math.min(width, height) * 0.14);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" fill="#123A2E"/>
    <rect x="14" y="14" width="${width - 28}" height="${height - 28}" fill="none" stroke="#F5EBD8" stroke-opacity="0.35" stroke-width="2"/>
    <g transform="translate(${cx - star / 2} ${cy - star / 2}) scale(${star / 24})">
      <path fill="#D8A24A" d="${STAR_PATH}" transform="rotate(22 12 12)"/>
    </g>
  </svg>`;
}

function ogSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#123A2E"/>
    <rect x="28" y="28" width="1144" height="574" fill="none" stroke="#2A5445" stroke-width="2"/>
    <g transform="translate(568 118) scale(2.6)">${CEDAR_MARK}</g>
    <text x="600" y="400" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="72" fill="#FBF6EA">Restaurant Le Cèdre</text>
    <text x="600" y="472" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="34" fill="#E7BE77">Cuisine libanaise à Québec</text>
    <g transform="translate(556 508) scale(0.9)">
      <path fill="#D8A24A" d="${STAR_PATH}" transform="rotate(22 12 12)"/>
    </g>
    <g transform="translate(620 508) scale(0.9)">
      <path fill="#D8A24A" d="${STAR_PATH}" transform="rotate(22 12 12)"/>
    </g>
  </svg>`;
}

async function optimizeSlot(key, aspect) {
  const source = path.join(SOURCE_DIR, `${key}.jpg`);
  if (!existsSync(source)) {
    const width = 1600;
    const height = Math.round(width / aspect);
    await writeFile(
      path.join(FALLBACK_DIR, `${key}.svg`),
      fallbackCardSvg(width, height),
    );
    console.warn(`! ${key}: no source, wrote fallback SVG`);
    return;
  }
  const quality = key === "hero" ? HERO_QUALITY : QUALITY;
  for (const width of [LARGE_WIDTH, SMALL_WIDTH]) {
    const height = Math.round(width / aspect);
    await sharp(source)
      .resize(width, height, { fit: "cover", position: "attention" })
      .webp({ quality })
      .toFile(path.join(OPT_DIR, `${key}-${width}.webp`));
  }
  console.log(`✓ ${key} → ${key}-1600.webp, ${key}-800.webp`);
}

async function optimizeGallery() {
  if (!existsSync(GALLERY_SOURCE_DIR)) return;
  const files = (await readdir(GALLERY_SOURCE_DIR))
    .filter((name) => name.toLowerCase().endsWith(".jpg"))
    .sort();
  for (const file of files) {
    const source = path.join(GALLERY_SOURCE_DIR, file);
    const slug = path.basename(file, path.extname(file));
    const { width = GALLERY_WIDTH } = await sharp(source).metadata();
    // Never upscale small source photos; cap the display width at the source width.
    const target = Math.min(GALLERY_WIDTH, width);
    await sharp(source)
      .resize({ width: target, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(path.join(GALLERY_OPT_DIR, `${slug}-${target}.webp`));
    console.log(`✓ gallery/${slug} → ${slug}-${target}.webp`);
  }
}

async function main() {
  await Promise.all(
    [OPT_DIR, FALLBACK_DIR, GALLERY_OPT_DIR].map((dir) =>
      mkdir(dir, { recursive: true }),
    ),
  );

  for (const [key, aspect] of Object.entries(SLOTS)) {
    await optimizeSlot(key, aspect);
  }

  await optimizeGallery();

  const favicons = [
    { file: "apple-touch-icon.png", size: 180 },
    { file: "icon-192.png", size: 192 },
    { file: "icon-512.png", size: 512 },
  ];
  for (const { file, size } of favicons) {
    await sharp(Buffer.from(faviconSvg(size)))
      .resize(size, size)
      .png()
      .toFile(path.join(ROOT, "public", file));
  }
  console.log("✓ favicons → apple-touch-icon.png, icon-192.png, icon-512.png");

  await sharp(Buffer.from(ogSvg())).png().toFile(path.join(ROOT, "public/og.png"));
  console.log("✓ og.png (1200×630)");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
