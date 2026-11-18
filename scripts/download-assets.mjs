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
  const url =
    "https://api.figma.com/v1/images/usRRigl3Fk4mIYklri5kNj?ids=19:93&format=png&scale=2";
  const res = await fetch(url, { headers: { "X-Figma-Token": token } });
  const json = await res.json();
  console.log("Image API response:", json);

  if (json.images && json.images["19:93"]) {
    const imgUrl = json.images["19:93"];
    console.log("Downloading image from", imgUrl);
    const imgRes = await fetch(imgUrl);
    const arrayBuffer = await imgRes.arrayBuffer();
    const dest = path.resolve(
      __dirname,
      "../public/images/corgi-girl-cutout.png"
    );
    fs.writeFileSync(dest, Buffer.from(arrayBuffer));
    console.log("Successfully saved to public/images/corgi-girl-cutout.png!");
  }
}

run().catch((e) => console.error(e));

