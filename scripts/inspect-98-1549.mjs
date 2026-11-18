import fs from "node:fs";

const data = JSON.parse(fs.readFileSync("figma-homepage.json", "utf8"));
const homepage = data.nodes["8:32"].document;
const frame56 = homepage.children.find((c) => c.id === "98:1549");

for (const card of frame56.children.slice(2)) {
  const imgFrame = card.children[0];
  const imgRect = imgFrame.children[0];
  const bodyFrame = card.children[1];
  const badgeFrame = bodyFrame.children[0];
  const badgeText = badgeFrame.children[0];
  const textStack = bodyFrame.children[1];
  const titleNode = textStack.children[0];
  const descNode = textStack.children[1];

  console.log(`\n=== ${card.name} (${card.id}) ===`);
  console.log("  card bbox:", card.absoluteBoundingBox, "pad:", {
    pt: card.paddingTop,
    pb: card.paddingBottom,
    pl: card.paddingLeft,
    pr: card.paddingRight,
    gap: card.itemSpacing,
    rx: card.cornerRadius,
  });
  console.log("  imgFrame bbox:", imgFrame.absoluteBoundingBox, "rx:", imgFrame.cornerRadius);
  console.log("  imgRect bbox:", imgRect.absoluteBoundingBox, "fill:", imgRect.fills[0]);
  console.log("  bodyFrame bbox:", bodyFrame.absoluteBoundingBox, "pad:", {
    pt: bodyFrame.paddingTop,
    pb: bodyFrame.paddingBottom,
    pl: bodyFrame.paddingLeft,
    pr: bodyFrame.paddingRight,
    gap: bodyFrame.itemSpacing,
  });
  console.log("  badgeFrame bbox:", badgeFrame.absoluteBoundingBox, "rx:", badgeFrame.cornerRadius, "pad:", {
    pt: badgeFrame.paddingTop,
    pb: badgeFrame.paddingBottom,
    pl: badgeFrame.paddingLeft,
    pr: badgeFrame.paddingRight,
  }, "fill:", badgeFrame.fills[0]?.color);
  console.log("  badgeText:", JSON.stringify(badgeText.characters), "style:", badgeText.style, "color:", badgeText.fills[0]?.color);
  console.log("  textStack bbox:", textStack.absoluteBoundingBox, "gap:", textStack.itemSpacing);
  console.log("  title:", JSON.stringify(titleNode.characters), "bbox:", titleNode.absoluteBoundingBox, "style:", {
    fontSize: titleNode.style.fontSize,
    lineHeightPx: titleNode.style.lineHeightPx,
    fontWeight: titleNode.style.fontWeight,
  });
  console.log("  desc:", JSON.stringify(descNode.characters), "bbox:", descNode.absoluteBoundingBox, "style:", {
    fontSize: descNode.style.fontSize,
    lineHeightPx: descNode.style.lineHeightPx,
    fontWeight: descNode.style.fontWeight,
  });
}
