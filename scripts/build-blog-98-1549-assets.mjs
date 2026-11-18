import fs from "node:fs";
import path from "node:path";

const imageFillsData = JSON.parse(fs.readFileSync("figma-image-fills.json", "utf8"));
const imagesMap = imageFillsData.meta.images;

const outDir = path.join("public", "images", "blog");
fs.mkdirSync(outDir, { recursive: true });

const articles = [
  {
    name: "blog-1-pomeranian",
    imageRef: "164b8551c113c74555b6aeaec9a5b979c2ee53d4",
    file: "blog-1-pomeranian.png",
  },
  {
    name: "blog-2-dog-diet",
    imageRef: "5e976f4f0a476f3dabcbcedb02310d51a05973ad",
    file: "blog-2-dog-diet.png",
  },
  {
    name: "blog-3-dog-bite-furniture",
    imageRef: "9c94ebaa40056d6caaf1af31cf6dd3725c34eb7f",
    file: "blog-3-dog-bite-furniture.png",
  },
];

for (const item of articles) {
  const url = imagesMap[item.imageRef];
  if (!url) throw new Error(`Missing URL for ${item.name} (${item.imageRef})`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const outPath = path.join(outDir, item.file);
  fs.writeFileSync(outPath, buf);
  console.log(`Downloaded ${item.name} -> ${outPath} (${buf.length} bytes)`);
}

