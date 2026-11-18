import fs from "node:fs";

const data = JSON.parse(fs.readFileSync("figma-homepage.json", "utf8"));
const homepage = data.nodes["8:32"].document;
const banner = homepage.children.find((c) => c.id === "78:487");

console.log("=== Banner (78:487) ===");
console.log(JSON.stringify(banner, null, 2));

