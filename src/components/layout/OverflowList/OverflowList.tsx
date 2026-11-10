import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useMergedRef } from "@/hooks/useMergedRef";
import { getSpacingValue } from "@/utilities/style-utils";
import type { WimSpacing } from "@/types/tokens";
import { getVisibleCount, pinnedCount, splitItems, type CollapseFrom } from "./getVisibleCount";
import localStyles from "./overflow-list.module.scss";

export type OverflowListProps<T> = Omit<React.ComponentPropsWithoutRef<"div">, "children"> & {
  /**
   * Items to lay out in a single row, in reading order.
   */
  items: T[];
  /**
   * Renders one item. Return a single element: each top-level element is measured as one item.
   */
  renderItem: (item: T, index: number) => React.ReactNode;
  /**
   * Renders the overflow indicator from the items that did not fit (for example a "+N" button
   * that opens a Popover listing them). Return a single element. Not rendered while every item
   * fits, unless `alwaysRenderOverflow` is set. The hidden items are not in the DOM, so the
   * indicator is how users — including keyboard and screen reader users — reach them.
   */
  renderOverflow: (hiddenItems: T[]) => React.ReactNode;
  /**
   * The side items are collapsed from. `"end"` keeps the first items (tags, toolbars);
   * `"start"` keeps the last ones (a path keeps the current folder); `"middle"` keeps the first
   * item and collapses from the second one, with the indicator right after the first item
   * (a breadcrumb keeps its root and the current page).
   * @default "end"
   */
  collapseFrom?: CollapseFrom;
  /**
   * Renders the row as a list. `renderItem` and `renderOverflow` must then return `<li>`
   * elements. Without it, the row is a `div`, which a list may not contain.
   */
  listElement?: "ul" | "ol";
  /**
   * Items that stay visible however narrow the row gets. They may then overflow the row.
   * @default 0
   */
  minVisibleItems?: number;
  /**
   * Renders the overflow indicator even when every item fits (it receives an empty array).
   * @default false
   */
  alwaysRenderOverflow?: boolean;
  /**
   * Called with the hidden items whenever the set of hidden items changes.
   */
  onOverflow?: (hiddenItems: T[]) => void;
  /**
   * Gap between items: a spacing token name (`"sm"`, `"md"`, …).
   * @default "sm"
   */
  gap?: WimSpacing;
  /**
   * If true, the list will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /**
   * The element that becomes the root (in place of `div`) when `asChild` is set. The items are
   * rendered inside it. Ignored without `asChild`.
   */
  children?: React.ReactNode;
};

const OverflowListInner = <T,>(
  {
    items,
    renderItem,
    renderOverflow,
    collapseFrom = "end",
    minVisibleItems = 0,
    alwaysRenderOverflow = false,
    onOverflow,
    gap = "sm",
    listElement,
    asChild = false,
    className,
    style,
    children,
    ...props
  }: OverflowListProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLElement | null>(null);
  const setRefs = useMergedRef(ref, rootRef);

  // 最初は全部を並べる（測れない環境・サーバーでの描画でも、項目が消えない）
  const [visibleCount, setVisibleCount] = useState(items.length);

  // 測るのは、画面に見えない層に全項目と「+N」を並べた幅。見えている並びは畳んだあとの姿なので、
  // そちらを測ると、畳んだ項目の幅が分からず、広がったときに戻せない。
  const measure = useCallback(() => {
    const root = rootRef.current;
    const layer = measureRef.current;
    if (!root || !layer) return;

    const rootStyle = getComputedStyle(root);
    const available =
      root.clientWidth -
      (parseFloat(rootStyle.paddingLeft) || 0) -
      (parseFloat(rootStyle.paddingRight) || 0);
    const gapWidth = parseFloat(getComputedStyle(layer).columnGap) || 0;

    // 外側の余白も足す。項目を負のマージンで重ねる並び（AvatarGroup）は、幅だけを足すと実際より
    // 広く見積もり、入る項目まで畳んだ
    const outerWidth = (node: HTMLElement) => {
      const nodeStyle = getComputedStyle(node);
      return (
        node.getBoundingClientRect().width +
        (parseFloat(nodeStyle.marginLeft) || 0) +
        (parseFloat(nodeStyle.marginRight) || 0)
      );
    };
    const nodes = Array.from(layer.children) as HTMLElement[];
    const widths = nodes.slice(0, items.length).map(outerWidth);
    const overflowWidth = nodes[items.length] ? outerWidth(nodes[items.length]) : 0;

    // "middle" は先頭の 1 つを先に並べ、その幅と間隔を除いた残りで数える
    const pinned = pinnedCount(collapseFrom, widths.length);
    const pinnedWidth = widths.slice(0, pinned).reduce((total, width) => total + width + gapWidth, 0);
    const rest = widths.slice(pinned);
    const next =
      pinned +
      getVisibleCount({
        itemWidths: collapseFrom === "end" ? rest : [...rest].reverse(),
        overflowWidth,
        available: available - pinnedWidth,
        gap: gapWidth,
        minVisibleItems: Math.max(minVisibleItems - pinned, 0),
        alwaysRenderOverflow,
      });
    setVisibleCount((current) => (current === next ? current : next));
  }, [items.length, collapseFrom, minVisibleItems, alwaysRenderOverflow]);

  // 項目や renderItem が変われば幅も変わりうるので、描画のたびに測る（state は変わったときだけ書く）
  useLayoutEffect(measure);

  // 器の幅が変わったとき・項目の幅だけが変わったとき（フォントの読み込みなど）
  useEffect(() => {
    const root = rootRef.current;
    const layer = measureRef.current;
    if (!root || !layer || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => measure());
    observer.observe(root);
    observer.observe(layer);
    return () => observer.disconnect();
  }, [measure]);

  const { visible, hidden, overflowAt } = splitItems(collapseFrom, items.length, visibleCount);
  const hiddenCount = hidden.length;
  const hiddenItems = hidden.map((index) => items[index]);
  const showOverflow = hiddenCount > 0 || alwaysRenderOverflow;

  // 畳んだ項目の組が変わったときだけ知らせる（同じ数でも、items が差し替わったら知らせる）
  // （利用者が毎回新しい関数を渡しても、それだけでは知らせない）
  const onOverflowRef = useRef(onOverflow);
  useLayoutEffect(() => {
    onOverflowRef.current = onOverflow;
  });
  const notifiedRef = useRef<{ items: T[]; count: number; from: string } | null>(null);
  useEffect(() => {
    const last = notifiedRef.current;
    if (last && last.items === items && last.count === hiddenCount && last.from === collapseFrom) return;
    notifiedRef.current = { items, count: hiddenCount, from: collapseFrom };
    // 何も畳んでいない最初の描画では知らせない
    if (!last && hiddenCount === 0) return;
    onOverflowRef.current?.(
      splitItems(collapseFrom, items.length, items.length - hiddenCount).hidden.map((index) => items[index]),
    );
  }, [items, hiddenCount, collapseFrom]);

  const overflow = showOverflow ? (
    <React.Fragment key="overflow">{renderOverflow(hiddenItems)}</React.Fragment>
  ) : null;

  // 行は、リストとして描くなら ol / ul（リストの直下に div を置けないため。測る層の写しも同じ要素にする）
  const Row = listElement ?? "div";
  const rowItems: React.ReactNode[] = visible.map((index) => (
    <React.Fragment key={index}>{renderItem(items[index], index)}</React.Fragment>
  ));
  // 「+N」は、見えている項目のうち overflowAt 番目の手前に入れる（"end" は末尾、"start" は先頭）
  const overflowSlot = visible.filter((index) => index < overflowAt).length;
  rowItems.splice(overflowSlot, 0, overflow);

  // 見えている行と測る層は、根（1 列の grid）の同じセルに重ねる。測る層は高さ 0 で、幅の寄与だけを持つ
  const content = (
    <>
      <Row className={localStyles.row}>{rowItems}</Row>
      {/* 幅を測るためだけの写し。支援技術とフォーカスからは外す */}
      <div className={localStyles.measure} aria-hidden="true" inert>
        <Row ref={measureRef as React.Ref<never>} className={localStyles.measureRow}>
          {items.map((item, index) => (
            <React.Fragment key={index}>{renderItem(item, index)}</React.Fragment>
          ))}
          {/* 「+N」は、全部を畳んだときの姿で測る（一番幅をとる数を見込んでおく） */}
          {renderOverflow(items)}
        </Row>
      </div>
    </>
  );

  const Root = asChild ? Slot : "div";

  return (
    <Root
      ref={setRefs}
      className={classNames("wim-overflow-list", localStyles.root, className)}
      data-collapse-from={collapseFrom}
      data-hidden-count={hiddenCount}
      {...props}
      style={{ ...style, "--wim-overflow-list-gap": getSpacingValue(gap) } as React.CSSProperties}
    >
      {content}
      {asChild ? <Slottable>{children}</Slottable> : null}
    </Root>
  );
};

/**
 * Lays out items in a single row and collapses the ones that do not fit into an overflow
 * indicator ("+N"), recomputed whenever the row or an item changes width. It measures and
 * collapses; what the indicator shows (a count, a Popover, a Menu) is up to `renderOverflow`.
 *
 * The list fills its container. Its own minimum width is 0 and its preferred width is every item
 * in one row, whatever is folded at the moment, so it also folds inside a table cell or an
 * inline-block and grows back when there is room.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 * - Does not own the hidden items' disclosure — compose Popover / Menu in `renderOverflow`
 * - Renders each item twice: once visible, once in an invisible, inert measuring layer
 */
export const OverflowList = React.forwardRef(OverflowListInner) as (<T>(
  props: OverflowListProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> },
) => React.ReactElement) & { displayName?: string };

OverflowList.displayName = "OverflowList";
