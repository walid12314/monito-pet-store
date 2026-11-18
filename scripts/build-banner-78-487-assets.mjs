import fs from "node:fs";
import path from "node:path";

const homepageData = JSON.parse(fs.readFileSync("figma-homepage.json", "utf8"));
const homepage = homepageData.nodes["8:32"].document;
const banner2 = homepage.children.find((c) => c.id === "78:487");

const fx = banner2.absoluteBoundingBox.x; // 335
const fy = banner2.absoluteBoundingBox.y; // 3066
const fw = banner2.absoluteBoundingBox.width; // 1180
const fh = banner2.absoluteBoundingBox.height; // 378

/**
 * Because Banner 2 (78:487) is horizontally mirrored (rotation = pi on parent frame),
 * in local unflipped coordinates (where x_unflipped = fw - (bbox.x - fx + bbox.width)),
 * each child rectangle with rotation theta > 0 has standard solveRotatedRect geometry,
 * and is then rendered inside <g transform="translate(1180, 0) scale(-1, 1)">!
 */
function solveMirroredRect(node) {
  const theta = Math.abs(node.rotation);
  const deg = (theta * 180) / Math.PI;
  const c = Math.cos(theta);
  const s = Math.sin(theta);
  const bw = node.absoluteBoundingBox.width;
  const bh = node.absoluteBoundingBox.height;
  const denom = c * c - s * s;
  const W = (bw * c - bh * s) / denom;
  const H = (bh * c - bw * s) / denom;

  // Unflipped bbox left edge inside 1180-wide frame:
  const unflippedBboxX = fw - (node.absoluteBoundingBox.x - fx + bw);
  const unflippedBboxY = node.absoluteBoundingBox.y - fy;

  const x0 = unflippedBboxX + H * s;
  const y0 = unflippedBboxY;

  return {
    x: Number(x0.toFixed(4)),
    y: Number(y0.toFixed(4)),
    width: Number(W.toFixed(4)),
    height: Number(H.toFixed(4)),
    deg: Number(deg.toFixed(4)),
    rx: node.cornerRadius || 0,
  };
}

const rect9 = solveMirroredRect(banner2.children.find((c) => c.id === "78:488"));
const rect1 = solveMirroredRect(banner2.children.find((c) => c.id === "78:489"));
const pawHand = solveMirroredRect(banner2.children.find((c) => c.id === "78:512"));

console.log("Solved Rect 9 (78:488):", rect9);
console.log("Solved Rect 1 (78:489):", rect1);
console.log("Solved PawHand (78:512):", pawHand);

const svgContent = `<svg width="${fw}" height="${fh}" viewBox="0 0 ${fw} ${fh}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_78_487)">
    <rect width="${fw}" height="${fh}" rx="20" fill="#FFB775"/>
    <g transform="translate(${fw}, 0) scale(-1, 1)">
      <rect x="${rect9.x}" y="${rect9.y}" width="${rect9.width}" height="${rect9.height}" rx="${rect9.rx}" transform="rotate(${rect9.deg} ${rect9.x} ${rect9.y})" fill="#FCEED5"/>
      <rect x="${rect1.x}" y="${rect1.y}" width="${rect1.width}" height="${rect1.height}" rx="${rect1.rx}" transform="rotate(${rect1.deg} ${rect1.x} ${rect1.y})" fill="url(#paint0_linear_78_487)" fill-opacity="0.3"/>
    </g>
  </g>
  <defs>
    <linearGradient id="paint0_linear_78_487" x1="${rect1.x}" y1="${rect1.y}" x2="${(rect1.x + rect1.width * 1.04618).toFixed(2)}" y2="${(rect1.y + rect1.height * 1.0259).toFixed(2)}" gradientUnits="userSpaceOnUse">
      <stop offset="0.0616933" stop-color="#FCEED5"/>
      <stop offset="0.751415" stop-color="#FCEED5"/>
      <stop offset="1" stop-color="#FFE7BA"/>
    </linearGradient>
    <clipPath id="clip0_78_487">
      <rect width="${fw}" height="${fh}" rx="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
`;

const svgPath = path.resolve(process.cwd(), "public/images/adoption-banner-bg.svg");
fs.writeFileSync(svgPath, svgContent);
console.log("Saved public/images/adoption-banner-bg.svg");
