// news-image-20261119 — one-page newspaper image of Thursday 19 November 2026.
// Node 22+, standard library only. No network, no dependencies.
// Copies the entry.png beside this file to the grader's output directory
// (MAKEFUN_OUTPUT_DIR outside the grader, /output inside it).
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = dirname(fileURLToPath(import.meta.url));
const png = readFileSync(join(here, 'entry.png'));
// The gate only accepts a whole PNG: refuse anything that is not one
// instead of copying a truncated or non-PNG file to the output.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47]);
if (!png.subarray(0, 4).equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a PNG file (bad magic bytes)');
}
if (png.length > 1048576) {
  throw new Error(`entry.png is ${png.length} bytes, over the 1 MiB gate cap`);
}
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'entry.png');
writeFileSync(outPath, png);
// Fail loudly instead of silently shipping a partial copy: the gate
// rejects anything that is not a whole image, so verify the round trip.
const written = readFileSync(outPath);
if (!written.equals(png)) {
  throw new Error(`entry.png round-trip mismatch: wrote ${written.length} bytes, expected ${png.length}`);
}
console.log(`wrote ${outPath} (${png.length} bytes)`);
