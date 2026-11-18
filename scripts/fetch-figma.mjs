import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, "../.env.local");

if (!fs.existsSync(envPath)) {
  console.error("Error: .env.local not found at", envPath);
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, "utf-8");
let figmaToken = "";
for (const line of envContent.split(/\r?\n/)) {
  const match = line.match(/^\s*FIGMA_TOKEN\s*=\s*["']?([^"'\r\n]+)["']?/);
  if (match) {
    figmaToken = match[1].trim();
    break;
  }
}

if (!figmaToken) {
  console.error("Error: FIGMA_TOKEN variable not found in .env.local");
  process.exit(1);
}

const fileKey = "usRRigl3Fk4mIYklri5kNj";
const nodeId = "10:88";
const url = `https://api.figma.com/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeId)}`;

console.log(`Querying Figma API for node ${nodeId} in file ${fileKey}...`);

const req = https.get(
  url,
  {
    headers: {
      "X-Figma-Token": figmaToken,
    },
  },
  (res) => {
    let rawData = "";
    res.on("data", (chunk) => {
      rawData += chunk;
    });

    res.on("end", () => {
      if (res.statusCode !== 200) {
        console.error(`Figma API returned HTTP ${res.statusCode}:`, rawData);
        process.exit(1);
      }

      try {
        const json = JSON.parse(rawData);
        const outputPath = path.resolve(__dirname, "../figma-node-10-88.json");
        fs.writeFileSync(outputPath, JSON.stringify(json, null, 2), "utf-8");

        const nodeData = json.nodes && json.nodes[nodeId];
        if (nodeData && nodeData.document) {
          const doc = nodeData.document;
          console.log(`Success! Node fetched:`);
          console.log(`- Name: "${doc.name}"`);
          console.log(`- Type: ${doc.type}`);
          console.log(
            `- Children count: ${doc.children ? doc.children.length : 0}`
          );
          if (doc.children) {
            console.log(
              "- Top children:",
              doc.children.slice(0, 10).map((c) => `[${c.type}] "${c.name}"`)
            );
          }
        } else {
          console.log("Success! File saved to figma-node-10-88.json");
        }
      } catch (e) {
        console.error("Failed to parse JSON response:", e.message);
      }
    });
  }
);

req.on("error", (err) => {
  console.error("Network request error:", err.message);
});

