/**
 * Generates responsive WebP variants for every photo in `public/images`, plus
 * small logo crests. `next.config.mjs` sets `images.unoptimized` (required by
 * `output: "export"`), so the responsive set is produced here at author time and
 * served through `components/photo.tsx` as a plain `srcset`.
 *
 * Run with `npm run images` after adding or replacing a source photo.
 */
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DIR = path.resolve("public/images");
const WIDTHS = [480, 768, 1200, 1536];
const SKIP = /^(logo|favicon|apple-)/;

const files = (await readdir(DIR)).filter(
  (f) => /\.(webp|jpg|jpeg|png)$/i.test(f) && !SKIP.test(f) && !/-(480|768|1200|1536|64|128|256)\.webp$/.test(f),
);

let saved = 0;
for (const file of files) {
  const base = file.replace(/\.[^.]+$/, "");
  const src = path.join(DIR, file);
  const meta = await sharp(src).metadata();
  for (const w of WIDTHS) {
    if (w > (meta.width ?? 0)) continue;
    const dest = path.join(DIR, `${base}-${w}.webp`);
    await sharp(src).resize({ width: w }).webp({ quality: w >= 1200 ? 70 : 74 }).toFile(dest);
    saved += (await stat(dest)).size;
  }
  console.log(`  ${base}: ${WIDTHS.filter((w) => w <= (meta.width ?? 0)).join(", ")}`);
}

// Crest: used at 36–64px in the header, footer, watermark and leadership cards.
for (const w of [64, 128, 256]) {
  await sharp(path.join(DIR, "logo-crest.png"))
    .resize({ width: w })
    .webp({ quality: 88 })
    .toFile(path.join(DIR, `logo-crest-${w}.webp`));
}

console.log(`images: ${files.length} photos -> ${(saved / 1024 / 1024).toFixed(2)} MB of variants`);
