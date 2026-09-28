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
  ({ as: Component = "div", leftActions = [], rightActions = [], children, asChild = false, id: propsId, closeOnAction = true, className, ...props }, ref) => {
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

      // Rubber banding
      if (newOffset > leftWidth) newOffset = leftWidth + (newOffset - leftWidth) * 0.3;
      if (newOffset < -rightWidth) newOffset = -rightWidth + (newOffset + rightWidth) * 0.3;

      setOffset(newOffset);
    };

    const handleEnd = () => {
      if (!swiping) return;
      setSwiping(false);

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

    const runAction = (action: SwipeActionItem, e: React.MouseEvent<HTMLButtonElement>) => {
      action.onClick();
      if (!closeOnAction) return;
      setOffset(0);
      listContext?.reportClose(id);
      // 閉じると押したボタンは内容の裏へ戻るので、フォーカスをそこに残さず行の内容へ戻す。
      // 行が操作で消えた（削除など）ときは、要素ごと無くなるので何もしない。
      if (document.activeElement === e.currentTarget) contentRef.current?.focus();
    };

    const renderActions = (side: "left" | "right", actions: SwipeActionItem[], width: number) => (
      <div className={classNames(localStyles.actions, localStyles[side])} style={{ width }}>
        {actions.map((action, i) => (
          <button
            key={i}
            className={classNames(localStyles.action, action.intent && localStyles[action.intent])}
            style={{ backgroundColor: action.color }}
            onFocus={() => reveal(side)}
            onClick={(e) => runAction(action, e)}
            type="button"
          >
            <Icon name={action.icon} size="md" />
            <span className={localStyles.label}>{action.label}</span>
          </button>
        ))}
      </div>
    );

    return (
      <Component
        ref={containerRef}
        className={classNames("wim-swipe-action", localStyles.container, className)}
        onMouseLeave={handleEnd}
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
          onTouchEnd={handleEnd}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
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
