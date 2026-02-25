import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  createContext,
  useContext,
} from "react";
import classNames from "classnames";
import "./splitter.scss";

type SplitterContextType = {
  orientation: "horizontal" | "vertical";
  onResizeStart: (
    index: number,
    e: React.MouseEvent | React.TouchEvent,
  ) => void;
};

const SplitterContext = createContext<SplitterContextType | null>(null);

const useSplitter = () => {
  const context = useContext(SplitterContext);
  if (!context)
    throw new Error("Splitter components must be used within Splitter");
  return context;
};

export interface SplitterProps extends React.ComponentPropsWithoutRef<"div"> {
  /** The orientation of the splitter. */
  orientation?: "horizontal" | "vertical";
  /** The components to render within the splitter. Usually a combination of `Splitter.Panel` and `Splitter.Handle`. */
  children: React.ReactNode;
}

/**
 * Splitter component that allows resizing of multiple panels.
 * Supports both mouse and touch events.
 */
const Splitter = ({
  orientation = "horizontal",
  className,
  children,
  ...props
}: SplitterProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [panelSizes, setPanelSizes] = useState<number[]>([]);
  const [resizingIndex, setResizingIndex] = useState<number | null>(null);

  const childrenArray = React.Children.toArray(children);
  const panels = childrenArray.filter(
    (child) =>
      (child as React.ReactElement<{ displayName?: string }>).type &&
      (child as React.ReactElement).type === SplitterPanel,
  );

  useEffect(() => {
    const initialSizes = panels.map(
      (p) =>
        (p as React.ReactElement<SplitterPanelProps>).props.defaultSize ??
        100 / panels.length,
    );
    const sum = initialSizes.reduce((a, b) => a + b, 0);
    setPanelSizes(initialSizes.map((s) => (s / sum) * 100));
    // panels.length だけを依存にすることで初期化を一度だけ行う
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panels.length]);

  const handleResizeStart = useCallback(
    (index: number, e: React.MouseEvent | React.TouchEvent) => {
      setResizingIndex(index);
      e.preventDefault();
    },
    [],
  );

  /** マウス・タッチ両対応の座標取得 */
  const getClientPos = (e: MouseEvent | TouchEvent) => {
    if ("touches" in e) {
      return orientation === "horizontal"
        ? e.touches[0].clientX
        : e.touches[0].clientY;
    }
    return orientation === "horizontal" ? e.clientX : e.clientY;
  };

  const handleMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (resizingIndex === null || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalSize = orientation === "horizontal" ? rect.width : rect.height;
      const origin = orientation === "horizontal" ? rect.left : rect.top;
      const currentPos = getClientPos(e) - origin;
      const currentPercentage = (currentPos / totalSize) * 100;

      setPanelSizes((prev) => {
        const next = [...prev];
        let startOfI = 0;
        for (let j = 0; j < resizingIndex; j++) {
          startOfI += prev[j];
        }

        const combinedSize = prev[resizingIndex] + prev[resizingIndex + 1];
        let newSizeI = currentPercentage - startOfI;

        // Constraints
        const panelI = panels[
          resizingIndex
        ] as React.ReactElement<SplitterPanelProps>;
        const panelIPlus1 = panels[
          resizingIndex + 1
        ] as React.ReactElement<SplitterPanelProps>;

        const minI = panelI.props.minSize ?? 0;
        const maxI = panelI.props.maxSize ?? 100;
        const minIPlus1 = panelIPlus1.props.minSize ?? 0;
        const maxIPlus1 = panelIPlus1.props.maxSize ?? 100;

        newSizeI = Math.max(minI, Math.min(newSizeI, maxI));

        let newSizeIPlus1 = combinedSize - newSizeI;
        if (newSizeIPlus1 < minIPlus1) {
          newSizeIPlus1 = minIPlus1;
          newSizeI = combinedSize - newSizeIPlus1;
        } else if (newSizeIPlus1 > maxIPlus1) {
          newSizeIPlus1 = maxIPlus1;
          newSizeI = combinedSize - newSizeIPlus1;
        }

        next[resizingIndex] = newSizeI;
        next[resizingIndex + 1] = newSizeIPlus1;
        return next;
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [resizingIndex, orientation, panels],
  );

  const handleEnd = useCallback(() => {
    setResizingIndex(null);
  }, []);

  useEffect(() => {
    if (resizingIndex !== null) {
      // マウスイベント
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleEnd);
      // タッチイベント（passive: false で preventDefault を有効化）
      window.addEventListener("touchmove", handleMove, { passive: false });
      window.addEventListener("touchend", handleEnd);
      return () => {
        window.removeEventListener("mousemove", handleMove);
        window.removeEventListener("mouseup", handleEnd);
        window.removeEventListener("touchmove", handleMove);
        window.removeEventListener("touchend", handleEnd);
      };
    }
  }, [resizingIndex, handleMove, handleEnd]);

  let panelIdx = 0;
  let handleIdx = 0;
  const items = childrenArray.map((child) => {
    if ((child as React.ReactElement).type === SplitterPanel) {
      const index = panelIdx++;
      return React.cloneElement(
        child as React.ReactElement<SplitterPanelProps>,
        {
          size: panelSizes[index],
        },
      );
    }
    if ((child as React.ReactElement).type === SplitterHandle) {
      const index = handleIdx++;
      return React.cloneElement(
        child as React.ReactElement<SplitterHandleProps>,
        {
          index,
          active: resizingIndex === index,
        },
      );
    }
    return child;
  });

  return (
    <SplitterContext.Provider
      value={{ orientation, onResizeStart: handleResizeStart }}
    >
      <div
        ref={containerRef}
        className={classNames(
          "wim-splitter",
          `wim-splitter--${orientation}`,
          resizingIndex !== null && "wim-splitter--resizing",
          className,
        )}
        {...props}
      >
        {items}
      </div>
    </SplitterContext.Provider>
  );
};

export interface SplitterPanelProps extends React.ComponentPropsWithoutRef<"div"> {
  /** The default size of the panel in percentage. */
  defaultSize?: number;
  /** The minimum size of the panel in percentage. */
  minSize?: number;
  /** The maximum size of the panel in percentage. */
  maxSize?: number;
  /** @internal Injected size from parent Splitter. */
  size?: number;
}

const SplitterPanel = ({
  defaultSize: _defaultSize,
  minSize: _minSize,
  maxSize: _maxSize,
  size,
  style,
  className,
  children,
  ...props
}: SplitterPanelProps) => {
  return (
    <div
      className={classNames("wim-splitter-panel", className)}
      style={{
        ...style,
        flex: size !== undefined ? `0 0 ${size}%` : "1 1 0%",
      }}
      {...props}
    >
      {children}
    </div>
  );
};
SplitterPanel.displayName = "SplitterPanel";

export interface SplitterHandleProps extends React.ComponentPropsWithoutRef<"div"> {
  /** @internal Injected index from parent Splitter. */
  index?: number;
  /** @internal Injected active state from parent Splitter. */
  active?: boolean;
}

const SplitterHandle = ({
  index,
  active,
  className,
  ...props
}: SplitterHandleProps) => {
  const { onResizeStart, orientation } = useSplitter();

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      aria-label="Resize panel"
      tabIndex={0}
      className={classNames(
        "wim-splitter-handle",
        active && "wim-splitter-handle--active",
        className,
      )}
      onMouseDown={(e) => index !== undefined && onResizeStart(index, e)}
      onTouchStart={(e) => index !== undefined && onResizeStart(index, e)}
      {...props}
    />
  );
};
SplitterHandle.displayName = "SplitterHandle";

const SplitterRoot = Splitter as typeof Splitter & {
  Panel: typeof SplitterPanel;
  Handle: typeof SplitterHandle;
};

SplitterRoot.Panel = SplitterPanel;
SplitterRoot.Handle = SplitterHandle;

export { SplitterRoot as Splitter };
export default SplitterRoot;
