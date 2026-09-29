import React, { useState, useRef, useEffect, useId, useImperativeHandle } from "react";
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import localStyles from "./swipe-action.module.scss";
import { Icon } from "../../media/Icon/Icon";
import { IconName } from "../../../icon";
import { useSwipeableList } from "./SwipeableList";

export interface SwipeActionItem {
  /** Icon to display */
  icon: IconName;
  /** Label to display */
  label: string;
  /** Callback when action is clicked */
  onClick: () => void;
  /** Semantic intent for background color */
  intent?: "primary" | "danger" | "warning" | "success" | "neutral";
  /** Custom background color */
  color?: string;
}

export interface SwipeActionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The element to render as the root container. Default is 'div'. */
  as?: React.ElementType;
  /** Actions revealed when swiping from left to right */
  leftActions?: SwipeActionItem[];
  /** Actions revealed when swiping from right to left */
  rightActions?: SwipeActionItem[];
  /** The content to be wrapped and swiped */
  children: React.ReactNode;
  /** If true, the content div will be rendered as its child */
  asChild?: boolean;
  /** Unique ID for the item. Automatically generated if not provided. */
  id?: string;
  /** Whether to automatically close the actions when an action is clicked. Default is true. */
  closeOnAction?: boolean;
  /**
   * Sides where swiping all the way across runs the outermost action without a tap
   * (`leftActions[0]` / the last of `rightActions`), as in iOS Mail. Off by default so a
   * destructive action is never triggered by momentum; the action stays available as a button.
   */
  fullSwipe?: "left" | "right" | "both";
}

export interface SwipeActionRef {
  /** Method to programmatically close the swipe actions */
  close: () => void;
}

/**
 * SwipeAction component provides mobile-native swipe gestures to reveal actions behind a list item.
 * 
 * Composition Contract:
 * - Managed by: List container
 * - Scroll lock: No (allows vertical scrolling)
 */
export const SwipeAction = React.forwardRef<SwipeActionRef, SwipeActionProps>(
  ({ as: Component = "div", leftActions = [], rightActions = [], children, asChild = false, id: propsId, closeOnAction = true, fullSwipe, className, ...props }, ref) => {
    const generatedId = useId();
    const id = propsId || generatedId;
    const listContext = useSwipeableList();

    const [offset, setOffset] = useState(0);
    const [swiping, setSwiping] = useState(false);
    const startX = useRef(0);
    const currentOffset = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      close: () => {
        setOffset(0);
        listContext?.reportClose(id);
      },
    }));

    const wasSwiping = useRef(false);

    // Handle exclusive mode: close if another item is opened
    useEffect(() => {
      if (swiping) {
        wasSwiping.current = true;
        return;
      }

      // If we just finished swiping, don't reset immediately based on (potentially stale) context
      if (wasSwiping.current) {
        const timer = setTimeout(() => {
          wasSwiping.current = false;
        }, 100);
        return () => clearTimeout(timer);
      }

      if (listContext?.openedId && listContext.openedId !== id) {
        setOffset(0);
      }
    }, [listContext?.openedId, id, swiping]);

    const actionWidth = 80;
    const leftWidth = leftActions.length * actionWidth;
    const rightWidth = rightActions.length * actionWidth;

    // **full swipe（T276）。** 引き切ったら外側の端の操作を実行する。閾値は「開いた幅 + 余白」と
    // 「行の幅の半分」の大きいほう ── 開いた位置の少し先で誤って越えないように。
    const fullLeft = leftWidth > 0 && (fullSwipe === "left" || fullSwipe === "both");
    const fullRight = rightWidth > 0 && (fullSwipe === "right" || fullSwipe === "both");
    const FULL_SWIPE_MARGIN = 40; /* Exception: Structural Logic — 開いた幅から閾値までの余白（px） */
    const rowWidth = containerRef.current?.offsetWidth ?? 0;
    const threshold = (sideWidth: number) => Math.max(sideWidth + FULL_SWIPE_MARGIN, rowWidth / 2);
    const armedSide: "left" | "right" | null =
      swiping && fullLeft && offset >= threshold(leftWidth)
        ? "left"
        : swiping && fullRight && -offset >= threshold(rightWidth)
          ? "right"
          : null;

    const handleStart = (e: React.TouchEvent | React.MouseEvent) => {
      startX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
      currentOffset.current = offset;
      setSwiping(true);
    };

    const handleMove = (e: React.TouchEvent | React.MouseEvent) => {
      if (!swiping) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      const diff = x - startX.current;
      let newOffset = currentOffset.current + diff;

      // Report to context as soon as we start swiping significantly to close others
      if (Math.abs(diff) > 5 && listContext?.openedId !== id) {
        listContext?.reportOpen(id);
      }

      // Rubber banding（full swipe を有効にした側は、指について行く）
      if (newOffset > leftWidth && !fullLeft) newOffset = leftWidth + (newOffset - leftWidth) * 0.3;
      if (newOffset < -rightWidth && !fullRight) newOffset = -rightWidth + (newOffset + rightWidth) * 0.3;

      setOffset(newOffset);
    };

    // commit=false はポインタが行の外へ出た場合。引き切った状態でも実行しない
    // （指やマウスが離れたかどうかが分からないまま、削除を走らせない）。
    const handleEnd = (commit = true) => {
      if (!swiping) return;
      setSwiping(false);

      if (armedSide) {
        const outer = armedSide === "left" ? leftActions[0] : rightActions[rightActions.length - 1];
        if (commit) {
          runAction(outer);
          if (!closeOnAction) {
            setOffset(armedSide === "left" ? leftWidth : -rightWidth);
            listContext?.reportOpen(id);
          }
          return;
        }
      }

      if (offset > leftWidth / 2) {
        setOffset(leftWidth);
        listContext?.reportOpen(id);
      } else if (offset < -rightWidth / 2) {
        setOffset(-rightWidth);
        listContext?.reportOpen(id);
      } else {
        setOffset(0);
        listContext?.reportClose(id);
      }
    };

    const ContentComponent = asChild ? Slot : "div";
    const contentRef = useRef<HTMLDivElement>(null);
    const hasActions = leftWidth > 0 || rightWidth > 0;

    // **キーボードで操作ボタンに来たら、その側を開いて見せる（T275）。** 操作ボタンは行の内容の
    // 裏（z-index が下）にあり、以前は Tab でフォーカスが当たっても内容に完全に覆われて
    // 見えなかった（WCAG 2.4.11）。スワイプできない利用者は、見えないボタンを押すことになっていた。
    const reveal = (side: "left" | "right") => {
      const next = side === "left" ? leftWidth : -rightWidth;
      if (offset !== next) setOffset(next);
      listContext?.reportOpen(id);
    };

    // フォーカスが行の外へ出たら閉じる（開いたまま見えない位置へ置き去りにしない）。
    const handleBlur = (e: React.FocusEvent) => {
      const next = e.relatedTarget as Node | null;
      if (next && containerRef.current?.contains(next)) return;
      if (offset !== 0 && !swiping) {
        setOffset(0);
        listContext?.reportClose(id);
      }
    };

    // target はボタンを押したときだけ渡る（full swipe はボタンを経由しない）。
    const runAction = (action: SwipeActionItem, target?: HTMLElement) => {
      action.onClick();
      if (!closeOnAction) return;
      setOffset(0);
      listContext?.reportClose(id);
      // 閉じると押したボタンは内容の裏へ戻るので、フォーカスをそこに残さず行の内容へ戻す。
      // 行が操作で消えた（削除など）ときは、要素ごと無くなるので何もしない。
      if (target && document.activeElement === target) contentRef.current?.focus();
    };

    const renderActions = (side: "left" | "right", actions: SwipeActionItem[], width: number) => {
      // full swipe の側は、引いた分だけ列を広げて外側の端の操作で埋める（隙間に背景を見せない）。
      const full = side === "left" ? fullLeft : fullRight;
      const pulled = side === "left" ? Math.max(0, offset) : Math.max(0, -offset);
      const outerIndex = side === "left" ? 0 : actions.length - 1;
      return (
      <div
        className={classNames(
          localStyles.actions,
          localStyles[side],
          full && pulled > width && localStyles.stretched,
          armedSide === side && localStyles.armed,
        )}
        style={{ width: full ? Math.max(width, pulled) : width, "--_action-w": `${actionWidth}px` } as React.CSSProperties}
      >
        {actions.map((action, i) => (
          <button
            key={i}
            className={classNames(
              localStyles.action,
              action.intent && localStyles[action.intent],
              full && i === outerIndex && localStyles.outer,
            )}
            style={{ backgroundColor: action.color }}
            onFocus={() => reveal(side)}
            onClick={(e) => runAction(action, e.currentTarget)}
            type="button"
          >
            <Icon name={action.icon} size="md" />
            <span className={localStyles.label}>{action.label}</span>
          </button>
        ))}
      </div>
      );
    };

    return (
      <Component
        ref={containerRef}
        className={classNames("wim-swipe-action", localStyles.container, className)}
        onMouseLeave={() => handleEnd(false)}
        onBlur={handleBlur}
        {...props}
      >
        {/* 内容を先、操作を後に置く。見た目の位置は position / z-index で決まるので変わらない。
            以前は操作が先にあり、読み上げとフォーカスの順が「削除・編集 → 行の中身」になっていた。 */}
        <ContentComponent
          ref={contentRef}
          className={localStyles.content}
          // 操作を押して閉じたときのフォーカスの戻り先。Tab の順には入れない。
          tabIndex={hasActions ? -1 : undefined}
          style={{
            transform: `translateX(${offset}px)`,
            transition: swiping ? "none" : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={() => handleEnd()}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={() => handleEnd()}
        >
          {children}
        </ContentComponent>
        {leftWidth > 0 && renderActions("left", leftActions, leftWidth)}
        {rightWidth > 0 && renderActions("right", rightActions, rightWidth)}
      </Component>
    );
  }
);

SwipeAction.displayName = "SwipeAction";
