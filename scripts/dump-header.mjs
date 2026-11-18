import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../figma-header-footer.json"), "utf8")
);
const defaultHeader = data.nodes["101:884"].document.children
  .find((c) => c.name === "Header Desktop")
  .children.find((c) => c.name.includes("Status=Default"));

function dump(node, depth = 0) {
  const indent = " ".repeat(depth * 2);
  let info = `${node.type} "${node.name}"`;
  if (node.absoluteBoundingBox) {
    info += ` [${Math.round(node.absoluteBoundingBox.width)}x${Math.round(node.absoluteBoundingBox.height)}]`;
  }
  if (node.characters) {
    info += ` text: "${node.characters}"`;
  }
  if (node.style) {
    info += ` (${node.style.fontFamily} wt:${node.style.fontWeight} ${node.style.fontSize}px lh:${Math.round(node.style.lineHeightPx)}px)`;
  }
  if (node.fills && node.fills.length) {
    const f = node.fills[0];
    if (f.color) {
      const hex =
        "#" +
        [f.color.r, f.color.g, f.color.b]
          .map((x) => Math.round(x * 255).toString(16).padStart(2, "0"))
          .join("")
          .toUpperCase();
      info += ` fill:${hex}`;
    }
  }
  if (node.itemSpacing !== undefined) info += ` gap:${node.itemSpacing}`;
  if (node.paddingLeft !== undefined)
    info += ` pad:[${node.paddingTop},${node.paddingRight},${node.paddingBottom},${node.paddingLeft}]`;

  console.log(indent + info);
  if (node.children) node.children.forEach((c) => dump(c, depth + 1));
}

dump(defaultHeader);

