import fs from "node:fs";
import path from "node:path";

const envPath = path.resolve(process.cwd(), ".env.local");
const envContent = fs.readFileSync(envPath, "utf8");
const FIGMA_TOKEN = envContent.match(/FIGMA_TOKEN=(.+)/)[1].trim();
const FILE_KEY = "usRRigl3Fk4mIYklri5kNj";

const IMAGE_REFS = [
  { ref: "24e2536ae8951f7e58a6a251b78040d254e6a249", file: "pet-1-pomeranian-white.png" },
  { ref: "7a0782734148161cacc96954a826ffc3289184f5", file: "pet-2-poodle-tiny-yellow.png" },
  { ref: "de56e2ad1bc5c988b7f2f1c902b04343b33db4b8", file: "pet-3-poodle-tiny-sepia.png" },
  { ref: "e7f53699cabeeebe1148580b0bf3867e88b40d6e", file: "pet-4-alaskan-malamute-grey.png" },
  { ref: "83bfee261c595ef8d9ccb544066f9692c48a068b", file: "pet-5-pembroke-corgi-cream.png" },
  { ref: "865cfc8be8becb4c33e3be0be27489c8df8ffe0f", file: "pet-6-pembroke-corgi-tricolor.png" },
  { ref: "d36f9b5a36ff33370c382f781520c0e462642d58", file: "pet-7-pomeranian-white-2.png" },
  { ref: "3914ac4041489c742055122b18baafc268372fe5", file: "pet-8-poodle-tiny-dairy-cow.png" },
];

async function main() {
  const url = `https://api.figma.com/v1/files/${FILE_KEY}/images`;
  const res = await fetch(url, {
    headers: { "X-Figma-Token": FIGMA_TOKEN },
  });
  console.log("Status:", res.status);
  if (!res.ok) {
    console.log("Headers:", Object.fromEntries(res.headers.entries()));
    console.log("Body:", await res.text());
    return;
  }
  const data = await res.json();
  fs.writeFileSync("figma-image-fills.json", JSON.stringify(data, null, 2));
  const images = data.meta?.images || {};
  const outDir = path.resolve(process.cwd(), "public/images/pets");
  fs.mkdirSync(outDir, { recursive: true });

  for (const item of IMAGE_REFS) {
    const imgUrl = images[item.ref];
    if (!imgUrl) {
      console.error("Missing ref:", item.ref);
      continue;
    }
    const imgRes = await fetch(imgUrl);
    const buffer = Buffer.from(await imgRes.arrayBuffer());
    fs.writeFileSync(path.join(outDir, item.file), buffer);
    console.log(`Downloaded ${item.file} (${(buffer.length / 1024).toFixed(1)} KB)`);
  }
}

main();
