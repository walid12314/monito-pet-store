import fs from "node:fs";

const data = JSON.parse(fs.readFileSync("figma-homepage.json", "utf8"));
const homepage = data.nodes["8:32"].document;
const footer = homepage.children.find((c) => c.id === "102:1465");

function dumpTree(node, depth = 0) {
  const indent = "  ".repeat(depth);
  const info = {
    id: node.id,
    name: node.name,
    type: node.type,
    bbox: node.absoluteBoundingBox,
  };
  if (node.cornerRadius) info.rx = node.cornerRadius;
  if (node.rectangleCornerRadii) info.radii = node.rectangleCornerRadii;
  if (node.paddingTop || node.paddingBottom || node.paddingLeft || node.paddingRight) {
    info.pad = { pt: node.paddingTop, pb: node.paddingBottom, pl: node.paddingLeft, pr: node.paddingRight };
  }
  if (node.itemSpacing) info.gap = node.itemSpacing;
  if (node.fills?.length && node.fills[0].visible !== false) {
    info.fill = node.fills[0].type === "SOLID" ? node.fills[0].color : node.fills[0].type;
  }
  if (node.strokes?.length && node.strokes[0].visible !== false) {
    info.stroke = { weight: node.strokeWeight, individual: node.individualStrokeWeights, color: node.strokes[0].color };
  }
  if (node.type === "TEXT") {
    info.text = node.characters;
    info.font = {
      size: node.style.fontSize,
      lh: node.style.lineHeightPx,
      weight: node.style.fontWeight,
      case: node.style.textCase,
    };
  }
  console.log(`${indent}* ${JSON.stringify(info)}`);
  if (node.children && depth < 4) {
    for (const c of node.children) dumpTree(c, depth + 1);
  }
}

dumpTree(footer);
