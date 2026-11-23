// 読み上げの告知（先に在る status の領域）と、F8 で移るトーストの領域は、モーダルの間も生かす
const KEEP_ALIVE = '[aria-live],[role=status],[role=alert],[aria-keyshortcuts]';

/**
 * `keep` とその祖先以外の、文書の要素を `inert` にする。戻す関数を返す。
 * `aria-modal` は、モーダルの外にある引き金（ヘッダーの ×）まで支援技術から隠すので、
 * 外に操作を残す面はこちらを使う。元から `inert` だった要素は戻さない。
 */
export function inertOutside(keep: Array<Element | null>) {
  const changed: Element[] = [];
  const walk = (parent: Element) => {
    for (const el of parent.children) {
      if (keep.includes(el) || el.matches(KEEP_ALIVE)) continue;
      if (keep.some((k) => el.contains(k)) || el.querySelector(KEEP_ALIVE)) walk(el);
      else if (!el.hasAttribute("inert")) changed.push(el);
    }
  };
  walk(document.body);
  changed.forEach((el) => el.setAttribute("inert", ""));
  return () => changed.forEach((el) => el.removeAttribute("inert"));
}
