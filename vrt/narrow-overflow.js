/**
 * 狭い画面でページ自体が横スクロールしていないかを測る（DESIGN.md の狭幅チェック ①）。
 *
 * **測る側（spec）とベースラインを作る側（script）で同じ関数を通す。** 別々に書くと、
 * 片方だけ直したときに「凍結された正解」が実測とずれる（T204 と同じ形）。
 *
 * `vrt/` は tsconfig の対象外で `allowJs: true` なので、素の JS で置いて双方から
 * import する（`nondeterministic-stories.js` と同じ作法）。ブラウザ側へ渡すので
 * 型注釈を書かないこと ── `page.evaluate` は関数のソースを送る。
 */

/** スマートフォンの実機に近い幅（Pixel 6a の CSS ピクセルは 390〜411）。 */
export const NARROW_WIDTH = 390;
export const NARROW_HEIGHT = 844;

/**
 * ブラウザの中で走る本体。戻り値:
 *   declared … `documentElement.scrollWidth - clientWidth`（0 なら横スクロールしない）
 *   actual   … 実際にスクロールできた量。**宣言と実際は別物**なので両方見る
 *   culprits … はみ出しを作っている要素（切っている祖先の中にあるものは除く）
 */
export function measureNarrowOverflowInPage() {
  const de = document.documentElement;
  const declared = de.scrollWidth - de.clientWidth;

  const before = window.scrollX;
  window.scrollTo(99999, 0);
  const actual = Math.round(window.scrollX);
  window.scrollTo(before, 0);

  const w = de.clientWidth;
  // 切っている祖先（overflow-x が auto/scroll/hidden）の中にある要素は、
  // ページのはみ出しを作っていないので除く。
  const clipped = (el) => {
    let p = el.parentElement;
    while (p && p !== de) {
      const ox = getComputedStyle(p).overflowX;
      if (ox === "auto" || ox === "scroll" || ox === "hidden") return true;
      p = p.parentElement;
    }
    return false;
  };

  const rows = [];
  for (const el of Array.from(document.querySelectorAll("body *"))) {
    const b = el.getBoundingClientRect();
    if (b.width === 0 || b.right <= w + 0.5) continue;
    if (clipped(el)) continue;
    rows.push({
      tag: el.tagName.toLowerCase(),
      cls: String(el.className || "").slice(0, 50),
      right: Math.round(b.right),
      width: Math.round(b.width),
      left: Math.round(b.left),
    });
  }
  // 一番外側だけ残す（子は親の巻き添え）
  const culprits = rows
    .filter(
      (r, i) =>
        !rows.some(
          (o, j) =>
            j !== i && o.left <= r.left && o.right >= r.right && o.right - o.left > r.right - r.left,
        ),
    )
    .slice(0, 3)
    .map((c) => ({ tag: c.tag, cls: c.cls, right: c.right, width: c.width }));

  return { declared, actual, culprits };
}
