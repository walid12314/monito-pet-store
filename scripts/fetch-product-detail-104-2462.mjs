import fs from "node:fs";

const data = JSON.parse(fs.readFileSync("figma-product-detail.json", "utf8"));
const doc = data.nodes["104:2462"].document;
const frame137 = doc.children.find((c) => c.id === "117:1721");

const frame92 = frame137.children.find((c) => c.id === "106:1286");
const frame117 = frame137.children.find((c) => c.id === "108:6569");
const frame52 = frame137.children.find((c) => c.id === "108:1626");

function extractTextsAndImages(node) {
  const texts = [];
  const images = [];
  function walk(n) {
    if (n.type === "TEXT" && n.visible !== false) {
      texts.push({ id: n.id, text: n.characters, size: n.style?.fontSize, lh: n.style?.lineHeightPx, weight: n.style?.fontWeight, color: n.fills?.[0]?.color, bbox: n.absoluteBoundingBox });
    }
    if (n.fills?.[0]?.type === "IMAGE") {
      images.push({ id: n.id, name: n.name, imageRef: n.fills[0].imageRef, bbox: n.absoluteBoundingBox, rx: n.cornerRadius });
    }
    if (n.children && n.visible !== false) n.children.forEach(walk);
  }
  walk(node);
  return { texts, images };
}

console.log("=== 1. Main Detail Card (106:1286 - Frame 92) ===");
const leftCol = frame92.children[0];
const rightCol = frame92.children[1];
console.log("Left Column (108:1522):", JSON.stringify(extractTextsAndImages(leftCol), null, 2));
console.log("\nRight Column Header & Buttons:", JSON.stringify(extractTextsAndImages({ children: rightCol.children.slice(0, 3) }), null, 2));

const specTable = rightCol.children[3];
console.log("\n12-Row Spec Table (108:1303):");
for (const row of specTable.children) {
  const { texts } = extractTextsAndImages(row);
  console.log(`  Row ${row.id} (${row.absoluteBoundingBox.width}x${row.absoluteBoundingBox.height}):`, texts.map((t) => t.text));
}

console.log("\n=== 2. Our Lovely Customer (108:6569 - Frame 117) ===");
console.log(JSON.stringify(extractTextsAndImages(frame117), null, 2));

console.log("\n=== 3. See More Puppies (108:1626 - Frame 52) ===");
console.log(JSON.stringify(extractTextsAndImages(frame52), null, 2));
