import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const svgPath = path.resolve(__dirname, "../public/images/hero-banner.svg");
const svg = fs.readFileSync(svgPath, "utf-8");

console.log("SVG total size:", (svg.length / 1024 / 1024).toFixed(2), "MB");

// Let's create hero-bg.svg that contains ALL vector paths, but excludes the <image ...> and text paths!
// That gives us a super lightweight ~15KB pure vector background!
const defsMatch = svg.match(/<defs>([\s\S]*?)<\/defs>/);
const defs = defsMatch ? defsMatch[0] : "";

// Find elements inside the main clip-path
const clipStart = svg.indexOf('<g clip-path="url(#clip0_10_88)">');
const clipEnd = svg.indexOf("</g>\n<defs>");
const innerContent = svg.slice(clipStart, clipEnd);

// Let's see: the image element starts with <rect ... fill="url(#pattern0_10_88)"/> or <image ...
// Let's find patterns in defs
console.log("Defs snippet:", defs.slice(0, 500));

