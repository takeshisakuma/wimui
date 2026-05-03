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
  intent?: "primary" | "error" | "warning" | "success" | "neutral";
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

    return (
      <Component
        ref={containerRef}
        className={classNames(localStyles.container, className)}
        onMouseLeave={handleEnd}
        {...props}
      >
        {leftWidth > 0 && (
          <div className={classNames(localStyles.actions, localStyles.left)} style={{ width: leftWidth }}>
            {leftActions.map((action, i) => (
              <button
                key={i}
                className={classNames(localStyles.action, action.intent && localStyles[action.intent])}
                style={{ backgroundColor: action.color }}
                onClick={() => { 
                  action.onClick(); 
                  if (closeOnAction) {
                    setOffset(0);
                    listContext?.reportClose(id);
                  }
                }}
                type="button"
              >
                <Icon name={action.icon} size="md" />
                <span className={localStyles.label}>{action.label}</span>
              </button>
            ))}
          </div>
        )}
        {rightWidth > 0 && (
          <div className={classNames(localStyles.actions, localStyles.right)} style={{ width: rightWidth }}>
            {rightActions.map((action, i) => (
              <button
                key={i}
                className={classNames(localStyles.action, action.intent && localStyles[action.intent])}
                style={{ backgroundColor: action.color }}
                onClick={() => { 
                  action.onClick(); 
                  if (closeOnAction) {
                    setOffset(0);
                    listContext?.reportClose(id);
                  }
                }}
                type="button"
              >
                <Icon name={action.icon} size="md" />
                <span className={localStyles.label}>{action.label}</span>
              </button>
            ))}
          </div>
        )}
        <ContentComponent
          className={localStyles.content}
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
      </Component>
    );
  }
);

SwipeAction.displayName = "SwipeAction";
