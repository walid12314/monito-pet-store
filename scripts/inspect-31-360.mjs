import fs from "node:fs";

const raw = fs.readFileSync("figma-homepage.json", "utf8");
const data = JSON.parse(raw);
const homepage = data.nodes["8:32"].document;

console.log("=== HOMEPAGE TOP-LEVEL SECTIONS ===");
for (const child of homepage.children) {
  console.log(
    `${child.id} | "${child.name}" | ${child.type} | bbox:`,
    child.absoluteBoundingBox
  );
}

const banner = homepage.children.find((c) => c.id === "31:360");
fs.writeFileSync("figma-node-31-360.json", JSON.stringify(banner, null, 2));
console.log("\nSaved figma-node-31-360.json (" + JSON.stringify(banner).length + " bytes)");

