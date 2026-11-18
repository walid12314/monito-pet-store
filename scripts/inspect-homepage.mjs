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
  const nodeId = "8:32";

  console.log("Fetching Homepage node 8:32 structure...");
  const url = `https://api.figma.com/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeId)}`;
  const res = await fetch(url, { headers: { "X-Figma-Token": token } });
  const json = await res.json();
  fs.writeFileSync(
    path.resolve(__dirname, "../figma-homepage.json"),
    JSON.stringify(json, null, 2)
  );

  const doc = json.nodes["8:32"].document;
  console.log("Homepage Frame:", doc.name, doc.absoluteBoundingBox);
  console.log(
    "Children of Homepage:",
    doc.children.map((c) => ({
      id: c.id,
      name: c.name,
      type: c.type,
      bbox: c.absoluteBoundingBox,
    }))
  );

  // Also export rendered PNG of node 8:32 so we can see the exact Figma output
  console.log("Requesting PNG render of Homepage 8:32...");
  const imgApiUrl = `https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(nodeId)}&format=png&scale=1`;
  const imgRes = await fetch(imgApiUrl, { headers: { "X-Figma-Token": token } });
  const imgJson = await imgRes.json();
  if (imgJson.images && imgJson.images["8:32"]) {
    console.log("Downloading rendered Figma Homepage PNG...");
    const downloadRes = await fetch(imgJson.images["8:32"]);
    const buf = await downloadRes.arrayBuffer();
    fs.writeFileSync(
      path.resolve(__dirname, "../public/images/figma-homepage-rendered.png"),
      Buffer.from(buf)
    );
    console.log(
      "Saved to public/images/figma-homepage-rendered.png, size:",
      buf.byteLength
    );
  }
}

run().catch((e) => console.error(e));

