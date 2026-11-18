import fs from "node:fs";
import path from "node:path";

const banner = JSON.parse(fs.readFileSync("figma-node-31-360.json", "utf8"));
const fillsData = JSON.parse(fs.readFileSync("figma-image-fills.json", "utf8"));

const fx = banner.absoluteBoundingBox.x; // 335
const fy = banner.absoluteBoundingBox.y; // 1315
const fw = banner.absoluteBoundingBox.width; // 1180
const fh = banner.absoluteBoundingBox.height; // 378

function solveRotatedRect(node) {
  const theta = node.rotation; // radians > 0
  const deg = (theta * 180) / Math.PI;
  const c = Math.cos(theta);
  const s = Math.sin(theta);
  const bw = node.absoluteBoundingBox.width;
  const bh = node.absoluteBoundingBox.height;
  const denom = c * c - s * s;
  const W = (bw * c - bh * s) / denom;
  const H = (bh * c - bw * s) / denom;
  const x0 = node.absoluteBoundingBox.x - fx + H * s;
  const y0 = node.absoluteBoundingBox.y - fy;
  return {
    x: Number(x0.toFixed(4)),
    y: Number(y0.toFixed(4)),
    width: Number(W.toFixed(4)),
    height: Number(H.toFixed(4)),
    deg: Number(deg.toFixed(4)),
    rx: node.cornerRadius || 0,
  };
}

const rect9 = solveRotatedRect(banner.children.find((c) => c.id === "37:376"));
const rect1 = solveRotatedRect(banner.children.find((c) => c.id === "37:370"));

console.log("Rectangle 9 (Cream #FCEED5):", rect9);
console.log("Rectangle 1 (Navy #002A48):", rect1);

const svgContent = `<svg width="${fw}" height="${fh}" viewBox="0 0 ${fw} ${fh}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_31_360)">
    <rect width="${fw}" height="${fh}" rx="20" fill="#003459"/>
    <rect x="${rect9.x}" y="${rect9.y}" width="${rect9.width}" height="${rect9.height}" rx="${rect9.rx}" transform="rotate(${rect9.deg} ${rect9.x} ${rect9.y})" fill="#FCEED5"/>
    <rect x="${rect1.x}" y="${rect1.y}" width="${rect1.width}" height="${rect1.height}" rx="${rect1.rx}" transform="rotate(${rect1.deg} ${rect1.x} ${rect1.y})" fill="#002A48"/>
  </g>
  <defs>
    <clipPath id="clip0_31_360">
      <rect width="${fw}" height="${fh}" rx="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
`;

const svgPath = path.resolve(process.cwd(), "public/images/secondary-banner-bg.svg");
fs.writeFileSync(svgPath, svgContent);
console.log("Saved public/images/secondary-banner-bg.svg");

async function downloadCutout() {
  const imgNode = banner.children.find((c) => c.id === "40:68");
  const imageRef = imgNode.fills[0].imageRef;
  const url = fillsData.meta.images[imageRef];
  if (!url) throw new Error("Missing imageRef URL for " + imageRef);
  const res = await fetch(url);
  const buffer = Buffer.from(await res.arrayBuffer());
  const outPath = path.resolve(process.cwd(), "public/images/girl-kissing-puppy.png");
  fs.writeFileSync(outPath, buffer);
  console.log(`Saved public/images/girl-kissing-puppy.png (${(buffer.length / 1024).toFixed(1)} KB)`);
}

downloadCutout();

