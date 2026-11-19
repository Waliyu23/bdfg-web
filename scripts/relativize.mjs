/**
 * Post-export step: rewrite the root-absolute URLs Next.js emits (`/_next/...`,
 * `/images/...`, `/about/`) into document-relative URLs, so the exported `out/`
 * folder can be hosted from any sub-path (a preview proxy, a GitHub Pages
 * project site, a CDN folder) and not only from a domain root.
 *
 * Run automatically by `npm run build`.
 */
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";

const OUT = path.resolve("out");

/** Asset and file URLs that live at the export root. */
const ROOT_FILES = [
  "_next/",
  "fonts/",
  "images/",
  "favicon.svg",
  "favicon.png",
  "apple-touch-icon.png",
  "robots.txt",
  "sitemap.xml",
];

/** Routes that must resolve to a folder index in a static export. */
const ROUTES = new Set();

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

function prefixFor(file) {
  const depth = path.relative(OUT, file).split(path.sep).length - 1;
  return depth === 0 ? "" : "../".repeat(depth);
}

function collectRoutes(files) {
  for (const file of files) {
    if (path.basename(file) !== "index.html") continue;
    const route = path.relative(OUT, path.dirname(file)).split(path.sep).join("/");
    if (route) ROUTES.add(route);
  }
}

function rewrite(text, prefix) {
  let out = text;

  // Assets: "/_next/static/..." -> "../_next/static/..."
  // Escaped quotes are covered too: inline RSC payloads embed \"/images/...\".
  for (const root of ROOT_FILES) {
    out = out.split(`\\"/${root}`).join(`\\"${prefix}${root}`);
    out = out.split(`"/${root}`).join(`"${prefix}${root}`);
    out = out.split(`'/${root}`).join(`'${prefix}${root}`);
    out = out.split(`(/${root}`).join(`(${prefix}${root}`);
    // srcset/imagesrcset carry several URLs in one attribute: "a 480w, /b 768w".
    out = out.split(`, /${root}`).join(`, ${prefix}${root}`);
    out = out.split(`,/${root}`).join(`,${prefix}${root}`);
  }

  // Home link: href="/" -> href="../" (Vercel resolves directory indexes).
  out = out.split('href="/"').join(`href="${prefix || "./"}"`);

  // Route links, with any hash kept intact:
  // href="/news/" -> "../news/", href="/about/#x" -> "../about/#x"
  for (const route of ROUTES) {
    const pattern = new RegExp(`href="/${route}/?(#[^"]*)?"`, "g");
    out = out.replace(pattern, (_m, hash = "") => `href="${prefix}${route}/${hash || ""}"`);
  }

  return out;
}

/**
 * The webpack runtime hard-codes `/_next/` as its public path. Derive it from
 * the running script instead, so lazily loaded chunks resolve under any prefix.
 */
function patchRuntime(text) {
  const dynamic =
    '(function(){try{var s=(document.currentScript&&document.currentScript.src)||"";' +
    'var i=s.indexOf("/_next/");return i>-1?s.slice(0,i+7):"/_next/"}catch(e){return"/_next/"}})()';
  return text.split('.p="/_next/"').join(`.p=${dynamic}`);
}

const files = await walk(OUT);
collectRoutes(files);

let rewritten = 0;
for (const file of files) {
  const ext = path.extname(file);
  if (![".html", ".txt", ".js", ".xml", ".css"].includes(ext)) continue;

  const original = await readFile(file, "utf8");
  let next = original;

  if (ext === ".html" || ext === ".txt") next = rewrite(next, prefixFor(file));
  if (ext === ".js") next = patchRuntime(next);
  // Stylesheets live at _next/static/css/, so their url() references need the
  // prefix of the stylesheet itself, not of the page including it.
  if (ext === ".css") {
    const prefix = prefixFor(file);
    for (const root of ROOT_FILES) {
      next = next.split(`url(/${root}`).join(`url(${prefix}${root}`);
      next = next.split(`url("/${root}`).join(`url("${prefix}${root}`);
    }
  }

  if (next !== original) {
    await writeFile(file, next);
    rewritten += 1;
  }
}

const { size } = await stat(path.join(OUT, "index.html"));
console.log(
  `relativize: rewrote ${rewritten} files across ${ROUTES.size + 1} routes (index.html ${size} bytes)`,
);
