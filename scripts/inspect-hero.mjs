import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(__dirname, "../figma-node-10-88.json");
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
const doc = data.nodes["10:88"].document;

console.log("=== FRAME SPECS ===");
console.log("Name:", doc.name);
console.log("BoundingBox:", doc.absoluteBoundingBox);
console.log("CornerRadius:", doc.cornerRadius);
console.log("Fills:", JSON.stringify(doc.fills, null, 2));

console.log("\n=== CHILDREN (TOTAL " + doc.children.length + ") ===");
doc.children.forEach((c, idx) => {
  console.log(`\n--- Child #${idx}: [${c.type}] "${c.name}" ---`);
  console.log("BoundingBox:", c.absoluteBoundingBox);
  if (c.relativeTransform) {
    console.log("RelativeTransform:", c.relativeTransform);
  }
  if (c.cornerRadius !== undefined) {
    console.log("CornerRadius:", c.cornerRadius);
  }
  if (c.style) {
    console.log("Typography Style:", {
      fontFamily: c.style.fontFamily,
      fontWeight: c.style.fontWeight,
      fontSize: c.style.fontSize,
      letterSpacing: c.style.letterSpacing,
      lineHeightPx: c.style.lineHeightPx,
      lineHeightPercentFontSize: c.style.lineHeightPercentFontSize,
    });
    console.log("Text Content:", JSON.stringify(c.characters));
  }
  if (c.fills && c.fills.length > 0) {
    console.log(
      "Fills:",
      JSON.stringify(
        c.fills.map((f) => {
          if (f.color) {
            const r = Math.round(f.color.r * 255);
            const g = Math.round(f.color.g * 255);
            const b = Math.round(f.color.b * 255);
            const hex =
              "#" +
              [r, g, b]
                .map((x) => x.toString(16).padStart(2, "0"))
                .join("")
                .toUpperCase();
            return { type: f.type, hex, opacity: f.opacity };
          }
          if (f.gradientStops) {
            return {
              type: f.type,
              gradientStops: f.gradientStops.map((s) => ({
                position: s.position,
                color: s.color,
              })),
            };
          }
          return { type: f.type };
        }),
        null,
        2
      )
    );
  }
  if (c.children) {
    console.log(
      `   Sub-children (${c.children.length}):`,
      c.children.map((sc) => `[${sc.type}] "${sc.name}"`).join(", ")
    );
  }
});

