// Rasterises public/icons/icon.svg into favicon + PWA icons, and copies the repo banner as the OG image.
// Run: npm run icons
import fs from "node:fs";
import sharp from "sharp";

const svg = fs.readFileSync("public/icons/icon.svg");
// Maskable icons need the artwork inside the central 80% safe zone on a full-bleed background.
const maskable = Buffer.from(
  svg
    .toString()
    .replace('<rect width="64" height="64" rx="14" fill="url(#g)"/>', '<rect width="64" height="64" fill="url(#g)"/>')
    .replace(/<path/g, '<path transform="translate(6.4 6.4) scale(0.8)"'),
);

const png = (src, size, out) => sharp(src, { density: 600 }).resize(size, size).png().toFile(out);

await Promise.all([
  png(svg, 192, "public/icons/icon-192x192.png"),
  png(svg, 512, "public/icons/icon-512x512.png"),
  png(maskable, 512, "public/icons/icon-maskable-512x512.png"),
  png(maskable, 180, "public/icons/apple-touch-icon.png"),
]);

// favicon.ico: a single 48px PNG wrapped in an ICO container (all modern browsers accept PNG-in-ICO).
const ico48 = await sharp(svg, { density: 600 }).resize(48, 48).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // count
header.writeUInt8(48, 6); // width
header.writeUInt8(48, 7); // height
header.writeUInt16LE(1, 10); // planes
header.writeUInt16LE(32, 12); // bpp
header.writeUInt32LE(ico48.length, 14); // size
header.writeUInt32LE(22, 18); // offset
fs.writeFileSync("public/favicon.ico", Buffer.concat([header, ico48]));

await sharp("../resources/coporate communication img.png")
  .resize(1200)
  .jpeg({ quality: 85 })
  .toFile("public/og.jpg");
console.log("icons + og image generated");
