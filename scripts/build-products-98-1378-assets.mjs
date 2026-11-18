import fs from "node:fs";
import path from "node:path";

const homepageData = JSON.parse(fs.readFileSync("figma-homepage.json", "utf8"));
const imageFillsData = JSON.parse(fs.readFileSync("figma-image-fills.json", "utf8"));
const imagesMap = imageFillsData.meta.images;

const homepage = homepageData.nodes["8:32"].document;
const frame53 = homepage.children.find((c) => c.id === "98:1378");

const outDir = path.join("public", "images", "products");
fs.mkdirSync(outDir, { recursive: true });

// 1. Inspect Gift Box Icon inside Card 1
const card1 = frame53.children[1].children[0];
const giftBadge = card1.children[1].children[1];
console.log("=== Gift Badge Structure ===");
console.log(JSON.stringify(giftBadge, null, 2));

// 2. Collect all 8 cards and download their images
const rows = [frame53.children[1], frame53.children[2]];
const filenames = [
  "product-1-reflex-plus-salmon-dog.png",
  "product-2-reflex-plus-salmon-cat.png",
  "product-3-cat-scratching-ball.png",
  "product-4-cute-pet-cat-warm-nest.png",
  "product-5-naturvet-salmon-oil.png",
  "product-6-costumes-cowboy-rider.png",
  "product-7-costumes-chicken-headband.png",
  "product-8-plush-pet-toy.png",
];

let idx = 0;
for (const row of rows) {
  for (const card of row.children) {
    const imgFrame = card.children[0];
    const imgRect = imgFrame.children[0];
    const fill = imgRect.fills[0];
    const imageRef = fill.imageRef;
    const filename = filenames[idx];
    const filePath = path.join(outDir, filename);

    console.log(`\nCard ${idx + 1} (${card.id}):`);
    console.log(`  imgFrame bbox:`, imgFrame.absoluteBoundingBox);
    console.log(`  imgRect bbox:`, imgRect.absoluteBoundingBox);
    console.log(`  scaleMode: ${fill.scaleMode}, imageRef: ${imageRef}`);
    if (fill.imageTransform) {
      console.log(`  imageTransform:`, JSON.stringify(fill.imageTransform));
    }

    const url = imagesMap[imageRef];
    if (!url) {
      console.error(`  ERROR: Missing URL for imageRef ${imageRef}`);
    } else {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(filePath, buf);
      console.log(`  Downloaded -> ${filePath} (${buf.length} bytes)`);
    }
    idx++;
  }
}

