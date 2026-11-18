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
  // Export flag and caret down
  const url = `https://api.figma.com/v1/images/${fileKey}?ids=101:1219,2:588&format=svg`;
  const res = await fetch(url, { headers: { "X-Figma-Token": token } });
  const json = await res.json();
  console.log("Export response:", json);

  if (json.images["101:1219"]) {
    const flagSvg = await (await fetch(json.images["101:1219"])).text();
    fs.writeFileSync(
      path.resolve(__dirname, "../public/images/figma-vn-flag.svg"),
      flagSvg
    );
    console.log("Saved figma-vn-flag.svg!");
  }
  if (json.images["2:588"]) {
    const caretSvg = await (await fetch(json.images["2:588"])).text();
    fs.writeFileSync(
      path.resolve(__dirname, "../public/images/figma-caret-down.svg"),
      caretSvg
    );
    console.log("Saved figma-caret-down.svg!");
  }
}

run().catch((e) => console.error(e));

