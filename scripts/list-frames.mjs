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
  const url = "https://api.figma.com/v1/files/usRRigl3Fk4mIYklri5kNj?depth=2";
  const res = await fetch(url, { headers: { "X-Figma-Token": token } });
  const json = await res.json();
  const summary = json.document.children.map((p) => ({
    pageName: p.name,
    frameCount: p.children ? p.children.length : 0,
    frames: p.children ? p.children.map((f) => ({ id: f.id, name: f.name })) : [],
  }));
  console.log(JSON.stringify(summary, null, 2));
}

run().catch((e) => console.error(e));

