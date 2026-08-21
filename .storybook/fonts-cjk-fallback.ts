/**
 * CI-8 ② B — **CJK のフォールバックを自前配信にする**（Storybook の描画だけの話）。
 *
 * ── なぜ要るのか ─────────────────────────────────────────────────────
 * `--wim-font-family-default` / `--wim-font-family-mono` に **`"Noto Sans JP"` は
 * 入っていない**（JP を当てるのは `src/lang.scss` 経由の `--wim-font-family-ja` だけ）。
 * そのため、日本語を描くストーリーの CJK は**候補にすら入らず OS 側の解決に落ちて
 * いた** ── CI では `playwright install-deps`（apt）が入れる `fonts-wqy-zenhei` の
 * **WenQuanYi Zen Hei**（中国語フォント）が拾っていた。
 *
 * 実測（2026-08-21・dispatch run 32473587835 / 32475747762）:
 *   - apt を抜くと CJK は**自前配信の Noto Sans が .notdef を描く**＝豆腐
 *     （幅 16→10 / 14→9 / 13→8）
 *   - 全 1007 ストーリーのうち **apt 依存は 9 枚**、供給していたのは
 *     `WenQuanYi Zen Hei`（178 文字 × ストーリー）と `FreeSerif`（`⎋` 1 文字）だけ
 *
 * ── なぜこの書き方なのか ─────────────────────────────────────────────
 * **`font-family` のスタックには手を触れない。** 代わりに、**スタックに既にある
 * 名前**（`Noto Sans` / `Noto Sans Mono`）へ **`unicode-range` で CJK だけを担当する
 * 面**を足す。CSS の font matching は同じ family の複数の `@font-face` を
 * `unicode-range` で振り分けるので、**latin は既存の面、CJK はこの面**になる。
 * トークン（＝ライブラリの公開契約）は変わらない。
 *
 * `preview.ts` の警告「**1 ファミリー × 1 ウェイトにつき 1 面だけ**」は
 * **`unicode-range` を持たない面どうし**の話（最後に宣言した面が全文字を担当し、
 * 平均字幅が変わって `<input>` の既定幅が動いた実績がある）。ここは範囲が交わらない
 * ので当たらない ── だから `unicode-range` を**自分で書く**必要がある。
 *
 * ── 範囲に穴があっても豆腐にはならない（実測）─────────────────────────
 * 「`unicode-range` で担当を宣言した面にグリフが無いと、次の候補へ進まず豆腐に
 * なる」と最初は書いたが、**測ったら違った**。`龦`(U+9FA6) は宣言した範囲
 * `U+4E00-9FFF` に入るのに `japanese` サブセットには無く、**OS 側の解決（Windows
 * では SimSun）へ素通りした**。CSS の font matching は「範囲で候補を絞る」だけで、
 * **グリフが無ければ次のファミリーへ進む**。
 *
 * （唯一そうならなかったのは `＀`(U+FF00)＝**未割り当ての符号位置**で、これは
 * どのフォントも持たないので最初の候補の .notdef が出る。実在する文字の話ではない。）
 *
 * つまり範囲を広めに宣言しても**今より悪くはならない** ── 持っていない文字は
 * 従来どおり OS 側へ落ちるだけ。それでも日常的な日本語のブロックに絞ってあるのは、
 * **担当を宣言した範囲だけ 1MB のファイルを取りに行かせる**ため。
 */
import jp400 from "@fontsource/noto-sans-jp/files/noto-sans-jp-japanese-400-normal.woff2";
import jp500 from "@fontsource/noto-sans-jp/files/noto-sans-jp-japanese-500-normal.woff2";
import jp700 from "@fontsource/noto-sans-jp/files/noto-sans-jp-japanese-700-normal.woff2";

/**
 * 日常的な日本語が入るブロックだけ。上のコメントのとおり、**広げるとフォールバック
 * ではなく豆腐になる**ので、迷ったら足さない。
 *
 *   U+3000-303F  … 句読点・記号（、。「」）
 *   U+3040-309F  … ひらがな
 *   U+30A0-30FF  … カタカナ（長音符 ー を含む）
 *   U+4E00-9FFF  … CJK 統合漢字
 *   U+FF00-FFEF  … 全角英数・半角カナ
 */
const JAPANESE_RANGE =
  "U+3000-303F, U+3040-309F, U+30A0-30FF, U+4E00-9FFF, U+FF00-FFEF";

/**
 * `--wim-font-family-mono` の先頭でもある `Noto Sans Mono` にも同じ面を足す。
 * 日本語の等幅フォントは同梱していないので、**プロポーショナルの JP グリフ**が
 * 入る（CJK は元々ほぼ全角固定なので、コードブロック内でも並びは崩れない）。
 * ここを塞がないと `code--long-content` が apt 依存のまま残る。
 */
const FAMILIES = ["Noto Sans", "Noto Sans Mono"];

const FACES: { weight: number; url: string }[] = [
  { weight: 400, url: jp400 },
  { weight: 500, url: jp500 },
  { weight: 700, url: jp700 },
];

const css = FAMILIES.flatMap((family) =>
  FACES.map(
    ({ weight, url }) => `@font-face {
  font-family: "${family}";
  font-style: normal;
  font-weight: ${weight};
  font-display: swap;
  src: url(${url}) format("woff2");
  unicode-range: ${JAPANESE_RANGE};
}`,
  ),
).join("\n");

/**
 * `<style>` を 1 枚差し込む。`preview.ts` の**先頭で呼ぶ**ので、どのストーリーが
 * マウントされるより前に入る。
 *
 * **副作用だけの `import "./fonts-cjk-fallback"` にしてはいけない。**
 * `package.json` の `sideEffects` は CSS / SCSS と 3 ファイルしか挙げていないので、
 * **副作用だけの `.ts` は tree-shaking で黙って消える** ──
 * 実際に最初はそう書いてビルドし、`storybook-static` 全 1377 ファイルを走査しても
 * `U+3000-303F` が 1 度も出てこなかった（`preview.ts` 自体は入っているのに）。
 * **エラーも警告も出ない**ので、そのまま出していたら「ベースラインが動かない＝
 * 効いている」と読み違えるところだった。呼び出しの形にすれば消えない。
 */
export function installCjkFallback(): void {
  if (typeof document === "undefined") return;
  if (document.querySelector("style[data-wim-cjk-fallback]")) return;
  const style = document.createElement("style");
  style.setAttribute("data-wim-cjk-fallback", "");
  style.textContent = css;
  document.head.appendChild(style);
}
