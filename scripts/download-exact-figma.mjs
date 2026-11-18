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
  const url = `https://api.figma.com/v1/images/${fileKey}?ids=10:88,102:1367&format=png&scale=2`;
  const res = await fetch(url, { headers: { "X-Figma-Token": token } });
  const json = await res.json();
  console.log("Images response:", json);

  for (const [id, imgUrl] of Object.entries(json.images)) {
    const filename = id === "10:88" ? "figma-hero-exact.png" : "figma-header-exact.png";
    const dest = path.resolve(__dirname, "../public/images", filename);
    console.log(`Downloading ${id} to ${filename}...`);
    const imgRes = await fetch(imgUrl);
    const buf = await imgRes.arrayBuffer();
    fs.writeFileSync(dest, Buffer.from(buf));
    console.log(`Saved ${filename}, size: ${buf.byteLength}`);
  }
}

run().catch((e) => console.error(e));

