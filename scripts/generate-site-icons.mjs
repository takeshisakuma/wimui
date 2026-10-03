#!/usr/bin/env node
/**
 * 公開 Storybook のアイコン（PNG）を `public/images/icons/favicon.svg` から作る。
 *
 * SVG の favicon だけだと、Android（ホーム画面への追加・タブ一覧）と iOS
 * （apple-touch-icon）は PNG を要求するので、縮小した代替や頭文字のタイルになる。
 * PNG は手で書き出さず、ここで作る ── SVG を直したら流し直して両方コミットする。
 *
 * 置き場が `public/images/` の下なのは、ライブラリのビルドが `public/` を丸ごと
 * `dist/` へコピーし、`scripts/prune-dist-assets.js` が `images/` を刈るため
 * （直下に置くと npm パッケージに同梱される）。
 *
 * maskable は Android が外周を円や角丸に切り抜く。**切り抜かれないのは中央の
 * 直径 80% の円**なので、図案を縮めて同じ地色で外側を埋める。出力を測ると、
 * 文字のいちばん遠い画素は中心から辺の 47.7%（そのままでは切られる）で、
 * 80% に縮めると 38.2% ── 安全域（半径 40%）に収まる。
 *
 * Usage:
 *   npm run site-icons:build
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const DIR = path.join(root, "public", "images", "icons");
const SOURCE = path.join(DIR, "favicon.svg");

const MASKABLE_SCALE = 0.8;

// manifest の sizes と apple-touch-icon の寸法は、この表が決める
const ICONS = [
  { file: "icon-192.png", size: 192, purpose: "any" },
  { file: "icon-512.png", size: 512, purpose: "any" },
  { file: "icon-maskable-512.png", size: 512, purpose: "maskable" },
  // iOS は透過を黒で埋め、角は自分で丸める。全面を塗った正方形のまま渡す
  { file: "apple-touch-icon.png", size: 180 },
];

const svg = fs.readFileSync(SOURCE);
const { width: svgWidth } = await sharp(svg).metadata();

// SVG は既定の 72dpi で画素にしてから拡大されるとぼやける。出力寸法で直接描かせる
const render = (size) =>
  sharp(svg, { density: (72 * size) / svgWidth })
    .resize(size, size)
    .flatten({ background: "#fff" });

for (const { file, size, purpose } of ICONS) {
  let image = render(size);
  if (purpose === "maskable") {
    const inner = Math.round(size * MASKABLE_SCALE);
    const pad = (size - inner) / 2;
    const { data } = await render(inner).raw().toBuffer({ resolveWithObject: true });
    // 地色は SVG の角の画素から取る（色を 2 か所に書かない）
    const [r, g, b] = data;
    image = render(inner).extend({
      top: Math.floor(pad),
      bottom: Math.ceil(pad),
      left: Math.floor(pad),
      right: Math.ceil(pad),
      background: { r, g, b },
    });
  }
  await image.png({ compressionLevel: 9 }).toFile(path.join(DIR, file));
  console.log(`✓ ${file} (${size}×${size}${purpose ? ` / ${purpose}` : ""})`);
}

// start_url / scope は manifest の置き場からの相対（サイトのルート = 2 つ上）。
// display は browser ── ホーム画面から開いても普通のタブで開く（オフライン対応は無い）
const manifest = {
  name: "WIM UI",
  short_name: "WIM UI",
  start_url: "../../",
  scope: "../../",
  display: "browser",
  icons: ICONS.filter((i) => i.purpose).map(({ file, size, purpose }) => ({
    src: file,
    sizes: `${size}x${size}`,
    type: "image/png",
    purpose,
  })),
};
fs.writeFileSync(path.join(DIR, "manifest.webmanifest"), JSON.stringify(manifest, null, 2) + "\n");
console.log("✓ manifest.webmanifest");
