import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const env = fs.readFileSync(path.resolve(__dirname, "../.env.local"), "utf-8");
let token = "";
for (const line of env.split(/\r?\n/)) {
  const m = line.match(/^\s*FIGMA_TOKEN\s*=\s*["']?([^"'\r\n]+)["']?/);
  if (m) {
    token = m[1].trim();
    break;
  }
}

const fileKey = "usRRigl3Fk4mIYklri5kNj";
const res = await fetch(
  `https://api.figma.com/v1/images/${fileKey}?ids=101:1100&format=svg`,
  { headers: { "X-Figma-Token": token } }
);
const json = await res.json();
const url = json.images["101:1100"];
if (!url) {
  console.error("No URL returned", json);
  process.exit(1);
}
const svg = await (await fetch(url)).text();
fs.writeFileSync(path.resolve(__dirname, "../public/images/logo.svg"), svg);
console.log("Saved logo.svg, bytes:", svg.length);
console.log(svg.slice(0, 200));
