import fs from "node:fs";
import path from "node:path";

const imageFillsData = JSON.parse(fs.readFileSync("figma-image-fills.json", "utf8"));
const imagesMap = imageFillsData.meta.images;

const detailDir = path.join("public", "images", "detail");
const customerDir = path.join("public", "images", "customers");
fs.mkdirSync(detailDir, { recursive: true });
fs.mkdirSync(customerDir, { recursive: true });

const assets = [
  // 6 Shiba Inu gallery photos
  { dir: detailDir, file: "shiba-1.png", imageRef: "f49001215e7c62bfb1ba4c89b22807b33ac45cb7" },
  { dir: detailDir, file: "shiba-2.png", imageRef: "ed983856e3a6954a2b20e00d7381454e58aa5f21" },
  { dir: detailDir, file: "shiba-3.png", imageRef: "c015c4d66cffb2c9eaf940c3cd6e643672d288e2" },
  { dir: detailDir, file: "shiba-4.png", imageRef: "5bbf0fe9f94c346bcd3d90f4b0e033642098257e" },
  { dir: detailDir, file: "shiba-5.png", imageRef: "a21bff08d7407df37de834d656c84bedba62c8be" },
  { dir: detailDir, file: "shiba-6.png", imageRef: "8c735279d3027592cb16678e1f38032890d8ac6f" },

  // 5 Customer gallery photos
  { dir: customerDir, file: "customer-1.png", imageRef: "a6b28d204ba56e7f5906fa106dc3cc0ce1d96e19" },
  { dir: customerDir, file: "customer-2.png", imageRef: "f5b114a3205683314a7f0fc08b6c7c503b854502" },
  { dir: customerDir, file: "customer-3.png", imageRef: "08a6075e3726edceba44ef371181fe6d9a54f95f" },
  { dir: customerDir, file: "customer-4.png", imageRef: "3e02ff4e7eaef2a99c1ac0eafa98f9ffca3adc4a" },
  { dir: customerDir, file: "customer-5.png", imageRef: "e6117de4da116490514fd3c8955113428a8386e3" },
];

for (const item of assets) {
  const url = imagesMap[item.imageRef];
  if (!url) throw new Error(`Missing URL for ${item.file} (${item.imageRef})`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const outPath = path.join(item.dir, item.file);
  fs.writeFileSync(outPath, buf);
  console.log(`Downloaded ${outPath} (${buf.length} bytes)`);
}

