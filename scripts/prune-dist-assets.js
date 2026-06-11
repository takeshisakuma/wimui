/**
 * ビルド後に dist から配布不要なアセットを除去する。
 *
 * Vite は publicDir（public/）を dist へ丸ごとコピーするが、その大半は
 * Storybook / デモ専用アセットでありライブラリ利用者には不要:
 *   - demo/ images/ wimlogo.svg … ストーリー用のメディアアセット
 *   - locales/<lang>/docs_*.json, audit.json … ドキュメントページ専用の翻訳
 *   - locales/.sync-snapshot.json … i18n:sync の内部状態
 *
 * コンポーネントが実行時に参照しうるロケール（common / components / form /
 * data-display）のみを残す。`wimui/locales/＊` export の対象もこの4種。
 */

import fs from "fs";
import path from "path";

const distDir = "./dist";
const KEEP_NAMESPACES = new Set([
  "common.json",
  "components.json",
  "form.json",
  "data-display.json",
]);

let removed = 0;

function rm(target) {
  if (!fs.existsSync(target)) return;
  fs.rmSync(target, { recursive: true, force: true });
  removed++;
  console.log(`[prune-dist-assets] removed: ${target}`);
}

// ストーリー専用アセット
rm(path.join(distDir, "demo"));
rm(path.join(distDir, "images"));
rm(path.join(distDir, "wimlogo.svg"));

// ロケール: コンポーネント用 namespace 以外を削除
const localesDir = path.join(distDir, "locales");
if (fs.existsSync(localesDir)) {
  for (const entry of fs.readdirSync(localesDir, { withFileTypes: true })) {
    const full = path.join(localesDir, entry.name);
    if (entry.isFile()) {
      rm(full); // .sync-snapshot.json など locales 直下のファイル
      continue;
    }
    for (const file of fs.readdirSync(full)) {
      if (!KEEP_NAMESPACES.has(file)) rm(path.join(full, file));
    }
  }
}

console.log(`[prune-dist-assets] done (${removed} entries removed)`);
