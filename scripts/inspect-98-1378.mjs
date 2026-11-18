import fs from "node:fs";

const data = JSON.parse(fs.readFileSync("figma-homepage.json", "utf8"));
const homepage = data.nodes["8:32"].document;
const frame53 = homepage.children.find((c) => c.id === "98:1378");

function inspectRow(rowFrame, rowName) {
  console.log(`\n=== ${rowName} (${rowFrame.id}) bbox:`, rowFrame.absoluteBoundingBox, "gap:", rowFrame.itemSpacing);
  for (const card of rowFrame.children) {
    console.log(`  * Card ${card.id} "${card.name}" bbox:`, card.absoluteBoundingBox, "rx:", card.cornerRadius, "pad:", {
      pt: card.paddingTop,
      pb: card.paddingBottom,
      pl: card.paddingLeft,
      pr: card.paddingRight,
      gap: card.itemSpacing,
    });
    const imgFrame = card.children?.[0];
    const imgRect = imgFrame?.children?.[0];
    const textWrapper = card.children?.[1];
    const infoStack = textWrapper?.children?.[0];
    const giftBadge = textWrapper?.children?.[1];

    const titleNode = infoStack?.children?.[0];
    const metaRow = infoStack?.children?.[1];
    const priceNode = infoStack?.children?.[2];

    const metaItems = [];
    function walkMeta(n) {
      if (!n) return;
      if (n.type === "TEXT") {
        metaItems.push({
          text: n.characters,
          visible: n.visible !== false,
          weight: n.style?.fontWeight,
          lineTypes: n.lineTypes,
        });
      }
      if (n.children && n.visible !== false) n.children.forEach(walkMeta);
    }
    walkMeta(metaRow);

    const giftItems = [];
    function walkGift(n) {
      if (!n) return;
      if (n.type === "TEXT") giftItems.push(n.characters);
      if (n.children && n.visible !== false) n.children.forEach(walkGift);
    }
    walkGift(giftBadge);

    console.log(`    - ImageFrame (${imgFrame?.id}): ${imgFrame?.absoluteBoundingBox?.width}x${imgFrame?.absoluteBoundingBox?.height}, rx=${imgFrame?.cornerRadius}, imageRef=${imgRect?.fills?.[0]?.imageRef}`);
    console.log(`    - TextWrapper (${textWrapper?.id}): bbox=${JSON.stringify(textWrapper?.absoluteBoundingBox)}, pad=(pt:${textWrapper?.paddingTop}, pb:${textWrapper?.paddingBottom}, pl:${textWrapper?.paddingLeft}, pr:${textWrapper?.paddingRight}), gap=${textWrapper?.itemSpacing}`);
    console.log(`    - Title: "${titleNode?.characters}" (bbox h=${titleNode?.absoluteBoundingBox?.height}, font=${titleNode?.style?.fontSize}/${titleNode?.style?.lineHeightPx} w=${titleNode?.style?.fontWeight})`);
    console.log(`    - MetaRow (visible=${metaRow?.visible !== false}):`, JSON.stringify(metaItems));
    console.log(`    - Price: "${priceNode?.characters}" (font=${priceNode?.style?.fontSize}/${priceNode?.style?.lineHeightPx} w=${priceNode?.style?.fontWeight})`);
    console.log(`    - GiftBadge (${giftBadge?.id}): bbox=${JSON.stringify(giftBadge?.absoluteBoundingBox)}, rx=${giftBadge?.cornerRadius}, pad=(pt:${giftBadge?.paddingTop}, pb:${giftBadge?.paddingBottom}, pl:${giftBadge?.paddingLeft}, pr:${giftBadge?.paddingRight}), gap=${giftBadge?.itemSpacing}, fill=${JSON.stringify(giftBadge?.fills?.[0]?.color)}, texts=${JSON.stringify(giftItems)}`);
  }
}

inspectRow(frame53.children[1], "Row 1 - Frame 54");
inspectRow(frame53.children[2], "Row 2 - Frame 55");
