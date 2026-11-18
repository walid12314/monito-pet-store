import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, "../.env.local");
const envContent = fs.readFileSync(envPath, "utf-8");

let token = "";
for (const line of envContent.split(/\r?\n/)) {
  const m = line.match(/^\s*FIGMA_TOKEN\s*=\s*["']?([^"'\r\n]+)["']?/);
  if (m) {
    token = m[1].trim();
    break;
  }
}

async function run() {
  const fileKey = "usRRigl3Fk4mIYklri5kNj";
  const url = `https://api.figma.com/v1/images/${fileKey}?ids=10:88&format=svg`;
  const res = await fetch(url, { headers: { "X-Figma-Token": token } });
  const json = await res.json();
  console.log("SVG response:", json);

  if (json.images && json.images["10:88"]) {
    const svgRes = await fetch(json.images["10:88"]);
    const svgText = await svgRes.text();
    const dest = path.resolve(__dirname, "../public/images/hero-banner.svg");
    fs.writeFileSync(dest, svgText);
    console.log("Saved hero-banner.svg, length:", svgText.length);
  }
}

run().catch((e) => console.error(e));

