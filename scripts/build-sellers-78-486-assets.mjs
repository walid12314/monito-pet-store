import fs from "node:fs";
import path from "node:path";

const imageFillsData = JSON.parse(fs.readFileSync("figma-image-fills.json", "utf8"));
const imagesMap = imageFillsData.meta.images;

const outDir = path.join("public", "images", "sellers");
fs.mkdirSync(outDir, { recursive: true });

const sellers = [
  { name: "sheba", imageRef: "02b6b26658915815ebfb624ccd4b8f8bc9d06ecf", file: "seller-1-sheba.png" },
  { name: "whiskas", imageRef: "69262552e00bed606afe9e77f1cc9c7f2e95597b", file: "seller-2-whiskas.png" },
  { name: "bakers", imageRef: "4400db70058110bfc32e5bc6e602a644bb081932", file: "seller-3-bakers.png" },
  { name: "felix", imageRef: "e25c6f9e2a2af258ba0090ef77ead6e78aec992d", file: "seller-4-felix.png" },
  { name: "goodboy", imageRef: "abf81bf3b261ca3e4e94dccf723b6ed12db2575b", file: "seller-5-goodboy.png" },
  { name: "butchers", imageRef: "a10a1b4370e851524fa4db43a4f7d590708a8d8b", file: "seller-6-butchers.png" },
  { name: "pedigree", imageRef: "d46b554b89025a0019d8f8d0409d4bc87affc11e", file: "seller-7-pedigree.png" },
];

for (const seller of sellers) {
  const url = imagesMap[seller.imageRef];
  if (!url) throw new Error(`Missing URL for ${seller.name} (${seller.imageRef})`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const outPath = path.join(outDir, seller.file);
  fs.writeFileSync(outPath, buf);
  console.log(`Downloaded ${seller.name} -> ${outPath} (${buf.length} bytes)`);
}

