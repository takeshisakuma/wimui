import React from "react";

const STOP_SELECTOR = "a[href], button, input, select, textarea, [tabindex]";

/**
 * フォーカスを持ったまま `root` が消えるとき、文書の順でその外の直前の停止点へ渡す
 * （前に無ければ、残っている最初の停止点）。T392 の閉じるボタンと同じ。
 * 画面は動かさない。`root` の中にフォーカスが無いときは、呼ぶ側が何もしない。
 */
export function moveFocusOutside(root: Element) {
  const stops = Array.from(document.querySelectorAll<HTMLElement>(STOP_SELECTOR)).filter(
    (el) =>
      el.tabIndex >= 0 &&
      !(el as HTMLButtonElement).disabled &&
      !root.contains(el) &&
      // jsdom には無い（テストでは、見えているものとして扱う）
      (el.checkVisibility?.({ checkVisibilityCSS: true }) ?? true),
  );
  const before = stops.filter(
    (el) => root.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_PRECEDING,
  );
  (before[before.length - 1] ?? stops[0])?.focus({ preventScroll: true });
}

/** `root` が外れるとき、その中にフォーカスが残っていれば外へ渡す。 */
export function useFocusHandoff(ref: React.RefObject<Element | null>) {
  React.useLayoutEffect(() => {
    const root = ref.current;
    return () => {
      if (!root) return;
      const active = document.activeElement;
      if (!active || (active !== root && !root.contains(active))) return;
      moveFocusOutside(root);
    };
  }, [ref]);
}
