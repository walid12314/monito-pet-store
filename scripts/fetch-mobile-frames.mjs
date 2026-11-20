import fs from "node:fs";

const envContent = fs.readFileSync(".env.local", "utf8");
const tokenMatch = envContent.match(/FIGMA_TOKEN\s*=\s*["']?([^"'\r\n]+)["']?/);
const token = tokenMatch ? tokenMatch[1].trim() : "";

const outFile = "figma-mobile.json";
let data;
if (fs.existsSync(outFile)) {
  data = JSON.parse(fs.readFileSync(outFile, "utf8"));
} else {
  const url =
    "https://api.figma.com/v1/files/usRRigl3Fk4mIYklri5kNj/nodes?ids=42:235,108:7310,108:8882";
  const res = await fetch(url, { headers: { "X-Figma-Token": token } });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
  data = await res.json();
  fs.writeFileSync(outFile, JSON.stringify(data, null, 2));
  console.log(`Saved ${outFile}`);
}

for (const id of ["42:235", "108:7310", "108:8882"]) {
  const doc = data.nodes[id]?.document;
  console.log(`\n========================================`);
  console.log(`Mobile Frame ${id} "${doc?.name}" bbox:`, doc?.absoluteBoundingBox);
  console.log(`========================================`);
  for (const child of doc?.children || []) {
    console.log(
      `  - ${child.id} "${child.name}" (${child.type}) visible=${child.visible !== false} bbox:`,
      child.absoluteBoundingBox,
      child.type === "TEXT"
        ? `text="${child.characters}" font=${child.style?.fontSize}/${child.style?.lineHeightPx} w=${child.style?.fontWeight}`
        : ""
    );
    if (child.children && child.children.length <= 12) {
      for (const sub of child.children) {
        console.log(
          `      * ${sub.id} "${sub.name}" (${sub.type}) bbox:`,
          sub.absoluteBoundingBox,
          sub.type === "TEXT"
            ? `text="${sub.characters}" font=${sub.style?.fontSize}/${sub.style?.lineHeightPx} w=${sub.style?.fontWeight}`
            : ""
        );
      }
    }
  }
}

