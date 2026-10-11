import type React from "react";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** はみ出した面を、画面の端からこの幅だけ内側へ寄せる（`useFloatingElement` の `shift` と同じ値）。 */
const EDGE_PADDING = 10;
/** 向きを決めるときに見込む、引き金と面のあいだの間隔。実際の間隔は CSS が決める（数 px の違いは、向きの判定に効かない）。 */
const SIDE_GAP = 8;
/** 面に付けている横のずれ（CSS 変数）の名前。値は px。 */
const SHIFT_VAR = "--wim-floating-shift-x";

export type InlineFloatingSide = "top" | "bottom";

/**
 * 面を、引き金の下と上のどちらに開くか。
 *
 * 既定は下。下に収まらず、上のほうが広いときだけ上へ返す ── どちらにも収まらないときは、広いほう。
 */
export const computeInlineSide = (input: {
  referenceTop: number;
  referenceBottom: number;
  floatingHeight: number;
  viewportHeight: number;
}): InlineFloatingSide => {
  const below = input.viewportHeight - input.referenceBottom;
  const above = input.referenceTop;
  const needed = input.floatingHeight + SIDE_GAP;
  return needed > below && above > below ? "top" : "bottom";
};

/**
 * 面を、横に何 px 寄せるか。`left` / `right` は、**寄せる前の**面の位置（画面の左端から）。
 *
 * **はみ出しているときだけ動かす。** 画面に収まっている面は、端から 10px 以内でも触らない ──
 * 余白なしで端まで置いた入力欄（狭い画面の全幅の Select など）の面を、引き金からずらさないため。
 * はみ出していたら、端から 10px 内側へ寄せる。寄せた結果、反対側がはみ出すなら（面が画面より
 * 広い）、反対側の端で止める。
 */
export const computeInlineShift = (left: number, right: number, viewportWidth: number): number => {
  if (right > viewportWidth) {
    const x = viewportWidth - EDGE_PADDING - right;
    return left + x < 0 ? -left : x;
  }
  if (left < 0) {
    const x = EDGE_PADDING - left;
    return right + x > viewportWidth ? viewportWidth - right : x;
  }
  return 0;
};

export interface InlineFloatingOptions {
  /** 面が開いているか。閉じているあいだは測らない。 */
  open: boolean;
}

/**
 * 引き金の隣に描く面（Select のリストなど）の、向きと横のずれを決める（T342）。
 *
 * ポータルへ出す部品（Tooltip / Popover / Dropdown）は `useFloatingElement`（floating-ui）が位置を
 * 計算するが、こちらは**面の位置を CSS が決めたままにする**。返すのは「どちら側に開くか」と「横に
 * 何 px ずらすか」だけで、部品はそれを `data-side` と CSS 変数で受ける。
 *
 * こうする理由は 3 つ:
 * - 面をポータルへ出さない（ユーザー判断）。Tab の順と、面の中のフォーカスの扱いを変えない
 * - 既定の向きの見た目を 1px も動かさない。位置を inline style で上書きすると、いまの CSS の間隔
 *   （トークン・密度に追従する）と揃わなくなる
 * - floating-ui を読まない。入力系がこれを読むと、フォーム画面の束が 22 kB の予算に対して 29.9 kB に
 *   なった（+7.9 kB。2026-10-11 に実測）。向きと横のずれは、矩形を 2 つ測れば決まる
 *
 * 見るのは画面（ビューポート）だけ。スクロールしない入れ物（`overflow: hidden`）による切り取りは
 * 見ない ── 面をポータルへ出さない以上、向きを変えても切り取りは解けないので。
 */
export const useInlineFloating = ({ open }: InlineFloatingOptions) => {
  // 要素は state で持つ。ref の関数は、要素が付いた・外れたときに effect を張り直すため。
  const [reference, setReference] = useState<HTMLElement | null>(null);
  const [floating, setFloating] = useState<HTMLElement | null>(null);
  const [position, setPosition] = useState<{ side: InlineFloatingSide; shiftX: number }>({ side: "bottom", shiftX: 0 });

  const update = useCallback(() => {
    if (!reference || !floating) return;
    const root = floating.ownerDocument.documentElement;
    const referenceRect = reference.getBoundingClientRect();
    const floatingRect = floating.getBoundingClientRect();
    const side = computeInlineSide({
      referenceTop: referenceRect.top,
      referenceBottom: referenceRect.bottom,
      floatingHeight: floatingRect.height,
      viewportHeight: root.clientHeight,
    });
    // いま付いているずれを引いて、「ずらす前の位置」から測る（引かないと、寄せた結果を見て
    // 「もう寄せなくてよい」と戻り、行ったり来たりする）。
    const applied = parseFloat(floating.style.getPropertyValue(SHIFT_VAR)) || 0;
    const shiftX = Math.round(computeInlineShift(floatingRect.left - applied, floatingRect.right - applied, root.clientWidth));
    setPosition((prev) => (prev.side === side && prev.shiftX === shiftX ? prev : { side, shiftX }));
  }, [reference, floating]);

  useIsomorphicLayoutEffect(() => {
    if (!open || !reference || !floating) return;
    update();
    const view = floating.ownerDocument.defaultView;
    if (!view) return;
    view.addEventListener("resize", update);
    // 祖先のどれがスクロールしても測り直す（capture で拾う）。
    view.addEventListener("scroll", update, true);
    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
    observer?.observe(floating);
    observer?.observe(reference);
    return () => {
      view.removeEventListener("resize", update);
      view.removeEventListener("scroll", update, true);
      observer?.disconnect();
    };
  }, [open, reference, floating, update]);

  // 閉じているあいだは、既定の向きに戻しておく（次に開いた 1 フレーム目を、前回の向きで描かない）。
  const side = open ? position.side : "bottom";
  const shiftX = open ? position.shiftX : 0;

  return {
    /** 引き金（位置の基準）に渡す ref。 */
    setReference,
    /** 面に渡す ref。 */
    setFloating,
    /** 面に付ける属性と CSS 変数。 */
    floatingProps: {
      "data-side": side,
      style: shiftX ? ({ [SHIFT_VAR]: `${shiftX}px` } as React.CSSProperties) : undefined,
    },
  };
};
