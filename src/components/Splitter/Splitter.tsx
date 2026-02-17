import React, { useState, useCallback, useRef, useEffect, createContext, useContext } from "react";
import classNames from "classnames";
import "./splitter.scss";

type SplitterContextType = {
    orientation: "horizontal" | "vertical";
    onResizeStart: (index: number, e: React.MouseEvent | React.TouchEvent) => void;
};

const SplitterContext = createContext<SplitterContextType | null>(null);

const useSplitter = () => {
    const context = useContext(SplitterContext);
    if (!context) throw new Error("Splitter components must be used within Splitter");
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
        (child) => (child as any).type?.displayName === "SplitterPanel"
    );

    useEffect(() => {
        const initialSizes = panels.map(
            (p) => (p as any).props.defaultSize ?? 100 / panels.length
        );
        const sum = initialSizes.reduce((a, b) => a + b, 0);
        setPanelSizes(initialSizes.map((s) => (s / sum) * 100));
    }, [panels.length]);

    const handleResizeStart = useCallback(
        (index: number, e: React.MouseEvent | React.TouchEvent) => {
            setResizingIndex(index);
            e.preventDefault();
        },
        []
    );

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (resizingIndex === null || !containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const totalSize = orientation === "horizontal" ? rect.width : rect.height;
            const currentPos =
                orientation === "horizontal" ? e.clientX - rect.left : e.clientY - rect.top;
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
                const panelI = panels[resizingIndex] as React.ReactElement<any>;
                const panelIPlus1 = panels[resizingIndex + 1] as React.ReactElement<any>;

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
        [resizingIndex, orientation, panels]
    );

    const handleMouseUp = useCallback(() => {
        setResizingIndex(null);
    }, []);

    useEffect(() => {
        if (resizingIndex !== null) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
                window.removeEventListener("mouseup", handleMouseUp);
            };
        }
    }, [resizingIndex, handleMouseMove, handleMouseUp]);

    let panelIdx = 0;
    let handleIdx = 0;
    const items = childrenArray.map((child) => {
        if ((child as any).type?.displayName === "SplitterPanel") {
            const index = panelIdx++;
            return React.cloneElement(child as any, {
                size: panelSizes[index],
            });
        }
        if ((child as any).type?.displayName === "SplitterHandle") {
            const index = handleIdx++;
            return React.cloneElement(child as any, {
                index,
                active: resizingIndex === index,
            });
        }
        return child;
    });

    return (
        <SplitterContext.Provider value={{ orientation, onResizeStart: handleResizeStart }}>
            <div
                ref={containerRef}
                className={classNames(
                    "wim-splitter",
                    `wim-splitter--${orientation}`,
                    resizingIndex !== null && "wim-splitter--resizing",
                    className
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
    defaultSize,
    minSize,
    maxSize,
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

const SplitterHandle = ({ index, active, className, ...props }: SplitterHandleProps) => {
    const { onResizeStart } = useSplitter();

    return (
        <div
            className={classNames(
                "wim-splitter-handle",
                active && "wim-splitter-handle--active",
                className
            )}
            onMouseDown={(e) => index !== undefined && onResizeStart(index, e)}
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
