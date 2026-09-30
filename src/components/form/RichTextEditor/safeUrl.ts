/**
 * リンクに置いてよい URL か（T278）。
 *
 * エディタの出力はスキーマに通して組み立て直すので、タグ・属性の無害化はスキーマが担う。
 * スキーマの外に残る危険は `href` の中身だけ ── `javascript:` / `data:` / `vbscript:` のような
 * スキームは、利用者の画面にそのまま差し込まれるとクリックでスクリプトが走る。
 *
 * 許可するのは `http:` / `https:` / `mailto:` と、スキームを持たない相対 URL（`/path` / `#id` / `?q` / `page.html`）。
 * 判定は URL の先頭のスキームだけを見る。ブラウザはスキーム名の途中の空白・制御文字を読み飛ばすので
 * （`java\tscript:` も `javascript:` として動く）、それらを除いてから比べる。
 */
const ALLOWED_SCHEMES = new Set(["http:", "https:", "mailto:"]);

export const isSafeLinkUrl = (raw: string): boolean => {
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
  return ALLOWED_SCHEMES.has(`${scheme[1].toLowerCase()}:`);
};
