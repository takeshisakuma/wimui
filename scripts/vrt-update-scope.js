#!/usr/bin/env node
/**
 * VRT の update が**書き換えてよい範囲**を、ブランチの変更から決める（T258）。
 *
 * ## なぜ要るか
 *
 * update は `--update-snapshots=all` で全量を撮り直す（閾値未満の変更もベースラインへ入れるため。
 * `vrt.yml` の T45 のコメント）。その代償として、**PR と無関係の絵が毎回 55〜91 枚書き換わる**
 * （2026-10-02 に、何も変えない update を 5 回流して実測。動く絵の 83% は「main の絵か、もう 1 つの
 * 絵か」の 2 通りに落ちる描画の揺れで、compare は main 版のベースラインで毎回通る）。書き換わった
 * 絵は、手で `scripts/vrt-diff-report.js` にかけて仕分け、PR が持つ絵だけを残して、ほかを main 版へ
 * 戻していた（2026-10-01〜04 の update は毎回これをやった）。
 *
 * ## 決め方
 *
 *   - **all**     全量を撮り直す（従来どおり）。**全部の絵が閾値未満で動きうる変更**のとき:
 *                 トークン・共通のスタイル・Storybook の設定・VRT の撮り方・ブラウザやフォントの版。
 *                 T45（ページ色の変更で 852 枚が古いまま残った）は、この経路で防ぐ。
 *   - **scoped**  それ以外。ワークフローは 2 段で撮る:
 *                   1. 全量を `--update-snapshots=changed` で流す。**比較に落ちた絵と、新しい絵だけ**が
 *                      書き換わる（判定は `vrt.spec.ts` と同じ比較器・同じ閾値。Playwright 自身がやる）
 *                   2. このスクリプトが出した **owned** のストーリーだけを `--update-snapshots=all` で
 *                      撮り直す（PR が触った部品は、閾値未満の変更もベースラインへ入れる）
 *
 * owned は「変更したファイルと同じ部品のストーリー」:
 *   - `src/components/<カテゴリ>/<Name>/**`  → `stories/**​/<Name>/` のストーリー
 *   - `stories/<...>/<Dir>/**`               → そのディレクトリのストーリー
 *
 * ## 割り切り（「見ていないもの」）
 *
 *   - **ほかの部品を中で使っている画面**（Patterns など）は owned に入れない。そこに出る変更は、
 *     1 段目の比較に落ちたときだけ書き換わる。閾値未満なら古いベースラインのまま残る（手で戻して
 *     いたときと同じ）。
 *   - 共有コード（`src/components/_internal` / `src/hooks` / `src/utilities` など）の変更は all に
 *     しない。見た目が変われば 1 段目で拾える、という前提。
 *   - 変更ファイルの一覧が取れなかった・多すぎて切れた、のときは **all に倒す**（黙って範囲を
 *     狭めない）。
 *
 * ## 使い方
 *
 *   node scripts/vrt-update-scope.js --files changed.txt [--index storybook-static/index.json] [--ids-out ids.txt]
 *   node scripts/vrt-update-scope.js --force-all "<理由>"       # 一覧が取れなかったとき
 *   npm run prove:vrt-update-scope
 *
 * 標準出力は 1 行の JSON（`{ mode, reason, owned, ids }`。ids は件数）。`--ids-out` に、owned の
 * ストーリー ID を 1 行 1 件で書く（scoped で owned が 0 件なら空のファイル）。
 */
import fs from "fs";
import path from "path";

/** 全部の絵が閾値未満で動きうる変更。理由は、ジョブのログに出す。 */
export const GLOBAL_PATTERNS = [
  [/^tokens\//, "デザイントークン"],
  [/^src\/tokens\//, "生成済みのトークン"],
  [/^src\/styles\//, "共通のスタイル"],
  [/^src\/base\.scss$/, "ベースのスタイル"],
  [/^\.storybook\//, "Storybook の設定（フォント・テーマ・デコレータ）"],
  [/^vrt\/(vrt\.spec\.ts|story-ready\.ts|nondeterministic-stories\.js)$/, "VRT の撮り方"],
  [/^playwright\.config\.ts$/, "Playwright の設定"],
  [/^package-lock\.json$/, "依存の版（ブラウザ・Storybook・フォント）"],
  [/^\.github\/workflows\/vrt\.yml$/, "VRT のワークフロー"],
  [/^scripts\/(ci-install-playwright\.sh|vrt-update-scope\.js)$/, "VRT の環境・範囲の決め方"],
];

const normalise = (f) => f.trim().replace(/\\/g, "/").replace(/^\.\//, "");

/**
 * @param {string[]} changedFiles リポジトリの根からの相対パス
 * @param {{ id: string, type: string, importPath: string }[]} entries index.json の entries
 */
export function decideScope(changedFiles, entries) {
  const files = changedFiles.map(normalise).filter(Boolean);
  for (const file of files) {
    const hit = GLOBAL_PATTERNS.find(([re]) => re.test(file));
    if (hit) return { mode: "all", reason: `${hit[1]}（${file}）`, owned: [], ids: [] };
  }

  const componentNames = new Set();
  const storyDirs = new Set();
  for (const file of files) {
    const component = file.match(/^src\/components\/[^/]+\/([^/]+)\/.+/);
    // `_internal` などの共有ディレクトリは部品ではない（下の「割り切り」）
    if (component && !component[1].startsWith("_")) componentNames.add(component[1]);
    const story = file.match(/^(stories\/.+)\/[^/]+$/);
    if (story) storyDirs.add(story[1]);
  }

  const ids = [];
  for (const entry of entries) {
    if (entry.type !== "story") continue;
    const dir = normalise(path.posix.dirname(normalise(entry.importPath)));
    if (!dir.startsWith("stories/")) continue;
    const owned = storyDirs.has(dir) || componentNames.has(path.posix.basename(dir));
    if (owned) ids.push(entry.id);
  }
  return {
    mode: "scoped",
    reason: ids.length > 0 ? "部品の変更だけ" : "ベースラインを持つ部品の変更なし",
    owned: [...new Set([...componentNames, ...[...storyDirs].map((d) => path.posix.basename(d))])].sort(),
    ids: ids.sort(),
  };
}

const isMain = normalise(process.argv[1] ?? "").endsWith("scripts/vrt-update-scope.js");
if (isMain) {
  const args = process.argv.slice(2);
  const opt = (name, fallback) => {
    const i = args.indexOf(name);
    return i >= 0 ? args[i + 1] : fallback;
  };
  const idsOut = opt("--ids-out", null);
  const forceAll = opt("--force-all", null);
  let result;
  if (forceAll !== null) {
    result = { mode: "all", reason: forceAll || "変更ファイルの一覧が取れなかった", owned: [], ids: [] };
  } else {
    const filesPath = opt("--files", null);
    const indexPath = opt("--index", "storybook-static/index.json");
    if (!filesPath || !fs.existsSync(filesPath)) {
      console.error("[vrt-update-scope] --files が要ります（変更ファイルの一覧。1 行 1 パス）。");
      process.exit(1);
    }
    if (!fs.existsSync(indexPath)) {
      console.error(`[vrt-update-scope] ${indexPath} がありません。先に build-storybook を流してください。`);
      process.exit(1);
    }
    const entries = Object.values(JSON.parse(fs.readFileSync(indexPath, "utf8")).entries);
    result = decideScope(fs.readFileSync(filesPath, "utf8").split(/\r?\n/), entries);
  }
  if (idsOut) fs.writeFileSync(idsOut, result.ids.join("\n") + (result.ids.length > 0 ? "\n" : ""));
  console.log(JSON.stringify({ mode: result.mode, reason: result.reason, owned: result.owned, ids: result.ids.length }));
}
