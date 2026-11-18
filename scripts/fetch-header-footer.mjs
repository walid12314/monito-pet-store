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
  const nodeId = "101:884";
  const url = `https://api.figma.com/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeId)}`;
  const res = await fetch(url, { headers: { "X-Figma-Token": token } });
  const json = await res.json();
  const dest = path.resolve(__dirname, "../figma-header-footer.json");
  fs.writeFileSync(dest, JSON.stringify(json, null, 2));
  console.log("Saved figma-header-footer.json!");
  const doc = json.nodes["101:884"].document;
  console.log(
    "Children of Header & Footer:",
    doc.children.map((c) => `[${c.type}] "${c.name}" id=${c.id}`)
  );
}

run().catch((e) => console.error(e));

