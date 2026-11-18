import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const svgPath = path.resolve(__dirname, "../public/images/hero-banner.svg");
const svg = fs.readFileSync(svgPath, "utf-8");

// Remove the base64 image in defs: <image id="image0_10_88" ... />
const cleanDefs = svg.replace(/<image id="image0_10_88"[\s\S]*?\/>\s*/, "");

// In the body, find the rect that fills with pattern0_10_88:
// <rect ... fill="url(#pattern0_10_88)"/>
// and remove it!
let cleanSvg = cleanDefs.replace(
  /<rect[^>]*fill="url\(#pattern0_10_88\)"[^>]*\/>/g,
  ""
);

// Also remove the text / button paths!
// Let's check which elements in cleanSvg are text/buttons.
// Let's parse each element inside <g clip-path="url(#clip0_10_88)">
const gStart = cleanSvg.indexOf('<g clip-path="url(#clip0_10_88)">');
const gEnd = cleanSvg.indexOf("</g>", gStart);
const innerG = cleanSvg.slice(gStart + '<g clip-path="url(#clip0_10_88)">'.length, gEnd);

// Separate elements
const elements = [];
let depth = 0;
let current = "";
const regex = /<(\/?[a-zA-Z0-9_:-]+)([^>]*?)(\/?)>/g;

console.log("Inner elements length:", innerG.length);
fs.writeFileSync(
  path.resolve(__dirname, "../public/images/hero-full-vector.svg"),
  cleanSvg
);
console.log("Saved hero-full-vector.svg!");

