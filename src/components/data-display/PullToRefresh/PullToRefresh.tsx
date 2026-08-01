import React, { useState, useRef, useEffect, useCallback } from "react";
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import localStyles from "./pull-to-refresh.module.scss";
import { Icon } from "../../media/Icon/Icon";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { LoadingIcon, ChevronDownIcon } from "@/icon";

export interface PullToRefreshProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Callback when refresh is triggered. Should return a promise. */
  onRefresh: () => Promise<void> | void;
  /** Whether the refreshing is currently in progress (controlled) */
  refreshing?: boolean;
  /** Distance in pixels to pull before triggering refresh */
  threshold?: number;
  /** Maximum distance in pixels the container can be pulled */
  maxDistance?: number;
  /** The content to be wrapped and pulled */
  children: React.ReactNode;
  /** If true, the content div will be rendered as its child */
  asChild?: boolean;
}

/**
 * PullToRefresh component allows users to pull down a list to trigger a data refresh.
 * 
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No (handles pull-to-refresh at the top of the scroll container)
 */
export const PullToRefresh = React.forwardRef<HTMLDivElement, PullToRefreshProps>(
  (
    {
      onRefresh,
      refreshing: controlledRefreshing,
      threshold = 60,
      maxDistance = 120,
      children,
      asChild = false,
      className,
      ...props
    },
    ref
  ) => {
    const { t } = useWimTranslation();
    const [pullDistance, setPullDistance] = useState(0);
    const [internalRefreshing, setInternalRefreshing] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [state, setState] = useState<"pulling" | "releasing" | "refreshing" | "idle">("idle");
    
    const startY = useRef(0);
    const isPulling = useRef(false);
    // Use a ref for immediate access in handlers, and state for re-renders
    const isDraggingRef = useRef(false);
    // The settle timer started after `onRefresh` resolves. It has to be
    // cancellable: unmounting while it is pending would otherwise land a
    // setState on a component that is gone.
    const settleTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    useEffect(() => () => clearTimeout(settleTimer.current), []);

    const refreshing = controlledRefreshing ?? internalRefreshing;

    useEffect(() => {
      if (refreshing) {
        setState("refreshing");
        setPullDistance(threshold);
      } else {
        setState("idle");
        setPullDistance(0);
      }
    }, [refreshing, threshold]);

    const handleMove = useCallback((e: MouseEvent | TouchEvent) => {
      if (!isPulling.current || refreshing) return;

      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      const diff = clientY - startY.current;

      if (diff > 0) {
        if (e.cancelable) e.preventDefault();
        const distance = Math.min(diff * 0.4, maxDistance);
        setPullDistance(distance);
        setState(distance > threshold ? "releasing" : "pulling");
      } else if (diff < -10) {
        isPulling.current = false;
        isDraggingRef.current = false;
        setIsDragging(false);
        setPullDistance(0);
        setState("idle");
      }
    }, [maxDistance, threshold, refreshing]);

    const handleEnd = useCallback(async () => {
      if (!isPulling.current) return;
      
      const canRefresh = pullDistance >= threshold;
      isPulling.current = false;
      isDraggingRef.current = false;
      setIsDragging(false);

      if (canRefresh && !refreshing) {
        setInternalRefreshing(true);
        setState("refreshing");
        setPullDistance(threshold);
        try {
          await onRefresh();
        } finally {
          clearTimeout(settleTimer.current);
          settleTimer.current = setTimeout(() => {
            setInternalRefreshing(false);
            if (controlledRefreshing === undefined) {
              setState("idle");
              setPullDistance(0);
            }
          }, 50);
        }
      } else if (!refreshing) {
        setPullDistance(0);
        setState("idle");
      }
    }, [pullDistance, threshold, refreshing, onRefresh, controlledRefreshing]);

    const handleStart = (e: React.TouchEvent | React.MouseEvent) => {
      const container = (e.currentTarget as HTMLElement);
      if (container.scrollTop > 0 || refreshing) return;
      
      startY.current = "touches" in e ? e.touches[0].clientY : e.clientY;
      isPulling.current = true;
      isDraggingRef.current = true;
      setIsDragging(true);
    };

    useEffect(() => {
      if (!isDragging) return;

      const onMove = (e: MouseEvent | TouchEvent) => handleMove(e);
      const onEnd = () => handleEnd();

      window.addEventListener("mousemove", onMove, { passive: false });
      window.addEventListener("mouseup", onEnd);
      window.addEventListener("touchmove", onMove, { passive: false });
      window.addEventListener("touchend", onEnd);

      return () => {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onEnd);
        window.removeEventListener("touchmove", onMove);
        window.removeEventListener("touchend", onEnd);
      };
    }, [isDragging, handleMove, handleEnd]);

    const ContentComponent = asChild ? Slot : "div";

    return (
      <div
        className={classNames("wim-pull-to-refresh", localStyles.container, className)}
        role="none"
        onTouchStart={handleStart}
        onMouseDown={handleStart}
        {...props}
      >
        <div
          className={classNames(localStyles.indicator, localStyles[state])}
          style={{ 
            height: pullDistance, 
            opacity: pullDistance > 0 ? 1 : 0,
            transition: isDragging ? "none" : "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          <div className={localStyles.indicatorContent}>
            {state === "refreshing" ? (
              <Icon component={LoadingIcon} spin className={localStyles.spinner} />
            ) : (
              <Icon
                component={ChevronDownIcon}
                className={classNames(localStyles.arrow, state === "releasing" && localStyles.rotate)}
              />
            )}
            <span className={localStyles.text}>
              {state === "refreshing"
                ? t("pullToRefresh.loading")
                : state === "releasing"
                ? t("pullToRefresh.release")
                : t("pullToRefresh.pull")}
            </span>
          </div>
        </div>
        <ContentComponent ref={ref} className={localStyles.content}>
          {children}
        </ContentComponent>
      </div>
    );
  }
);

PullToRefresh.displayName = "PullToRefresh";
