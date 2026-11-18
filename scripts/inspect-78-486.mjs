import fs from "node:fs";

const data = JSON.parse(fs.readFileSync("figma-homepage.json", "utf8"));
const homepage = data.nodes["8:32"].document;
const frame42 = homepage.children.find((c) => c.id === "78:486");

console.log("=== Frame 42 (78:486) ===");
console.log(JSON.stringify(frame42, null, 2));

