/**
 * リンク・画像に置いてよい URL か（T278）。
 *
 * エディタの出力はスキーマに通して組み立て直すので、タグ・属性の無害化はスキーマが担う。
 * スキーマの外に残る危険は `href` / `src` の中身だけ ── `javascript:` / `data:` / `vbscript:` のような
 * スキームは、利用者の画面にそのまま差し込まれるとクリックでスクリプトが走る。
 *
 * 判定は URL の先頭のスキームだけを見る。ブラウザはスキーム名の途中の空白・制御文字を読み飛ばすので
 * （`java\tscript:` も `javascript:` として動く）、それらを除いてから比べる。
 * スキームを持たない相対 URL（`/path` / `#id` / `?q` / `page.html`）は許可する。
 */
const LINK_SCHEMES = new Set(["http:", "https:", "mailto:"]);
// 画像は http / https / 相対だけ。mailto: は画像に意味が無く、data: / blob: は保存した HTML では
// 使い物にならない（blob: はそのタブが閉じると消え、data: は文書の中に画像を丸ごと抱える）。
const IMAGE_SCHEMES = new Set(["http:", "https:"]);

const isAllowed = (raw: string | null | undefined, schemes: Set<string>): boolean => {
  if (raw == null) return false;
  // 空白と制御文字（U+0000〜U+0020、U+007F）を取り除いてからスキームを読む
  const url = Array.from(raw)
    .filter((ch) => {
      const code = ch.charCodeAt(0);
      return code > 0x20 && code !== 0x7f;
    })
    .join("");
  if (url === "") return false;
  const scheme = /^([a-z][a-z0-9+.-]*):/i.exec(url);
  if (!scheme) return true; // 相対 URL
  return schemes.has(`${scheme[1].toLowerCase()}:`);
};

/** リンクの href に置いてよいか（http / https / mailto / 相対）。 */
export const isSafeLinkUrl = (raw: string | null | undefined): boolean => isAllowed(raw, LINK_SCHEMES);

/** 画像の src に置いてよいか（http / https / 相対）。 */
export const isSafeImageUrl = (raw: string | null | undefined): boolean => isAllowed(raw, IMAGE_SCHEMES);
