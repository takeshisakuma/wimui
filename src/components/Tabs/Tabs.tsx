import React, { createContext, useContext, useState, useCallback, useId, useMemo } from "react";
import classNames from "classnames";
import "./tabs.scss";

type TabsContextType = {
    value?: string;
    onValueChange: (val: string) => void;
    orientation?: "horizontal" | "vertical";
    id: string;
    items: string[];
    registerItem: (val: string) => void;
    unregisterItem: (val: string) => void;
};

const TabsContext = createContext<TabsContextType | null>(null);

const useTabs = () => {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error("Tabs components must be used within a Tabs");
    }
    return context;
};

export interface TabsProps extends React.ComponentPropsWithoutRef<"div"> {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    orientation?: "horizontal" | "vertical";
}

const Tabs = ({
    defaultValue,
    value: valueProp,
    onValueChange,
    orientation = "horizontal",
    className,
    children,
    ...props
}: TabsProps) => {
    const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);
    const [items, setItems] = useState<string[]>([]);
    const id = useId();

    const isControlled = valueProp !== undefined;
    const activeValue = isControlled ? valueProp : internalValue;

    const handleValueChange = useCallback(
        (val: string) => {
            if (!isControlled) {
                setInternalValue(val);
            }
            onValueChange?.(val);
        },
        [isControlled, onValueChange]
    );

    const registerItem = useCallback((val: string) => {
        setItems(prev => prev.includes(val) ? prev : [...prev, val]);
    }, []);

    const unregisterItem = useCallback((val: string) => {
        setItems(prev => prev.filter(i => i !== val));
    }, []);

    return (
        <TabsContext.Provider
            value={{
                value: activeValue,
                onValueChange: handleValueChange,
                orientation,
                id,
                items,
                registerItem,
                unregisterItem
            }}
        >
            <div
                className={classNames(
                    "wim-tabs",
                    `wim-tabs--${orientation}`,
                    className,
                )}
                {...props}
            >
                {children}
            </div>
        </TabsContext.Provider>
    );
};

export type TabsListProps = React.ComponentPropsWithoutRef<"div">;

export const TabsList = ({ className, children, ...props }: TabsListProps) => {
    const { orientation, value, items, onValueChange } = useTabs();
    const listRef = React.useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [startX, setStartX] = React.useState(0);
    const [scrollLeft, setScrollLeft] = React.useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (orientation === "vertical") return;
        setIsDragging(true);
        setStartX(e.pageX - (listRef.current?.offsetLeft || 0));
        setScrollLeft(listRef.current?.scrollLeft || 0);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || orientation === "vertical") return;
        e.preventDefault();
        const x = e.pageX - (listRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 1.5; // スクロール速度の倍率
        if (listRef.current) {
            listRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        const currentIndex = value ? items.indexOf(value) : -1;
        let nextIndex = -1;

        if (orientation === "horizontal") {
            if (e.key === "ArrowRight") nextIndex = (currentIndex + 1) % items.length;
            if (e.key === "ArrowLeft") nextIndex = (currentIndex - 1 + items.length) % items.length;
        } else {
            if (e.key === "ArrowDown") nextIndex = (currentIndex + 1) % items.length;
            if (e.key === "ArrowUp") nextIndex = (currentIndex - 1 + items.length) % items.length;
        }

        if (e.key === "Home") nextIndex = 0;
        if (e.key === "End") nextIndex = items.length - 1;

        if (nextIndex !== -1) {
            e.preventDefault();
            const nextValue = items[nextIndex];
            if (nextValue) {
                onValueChange(nextValue);
                // focus the new tab
                const tab = listRef.current?.querySelector(`[data-value="${nextValue}"]`) as HTMLElement;
                tab?.focus();
            }
        }
    };

    return (
        <div
            ref={listRef}
            role="tablist"
            aria-orientation={orientation}
            className={classNames(
                "wim-tabs__list",
                isDragging && "wim-tabs__list--dragging",
                className
            )}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onKeyDown={handleKeyDown}
            {...props}
        >
            {children}
        </div>
    );
};

export interface TabsTriggerProps extends React.ComponentPropsWithoutRef<"button"> {
    value: string;
}

export const TabsTrigger = ({
    value,
    disabled = false,
    className,
    children,
    ...props
}: TabsTriggerProps) => {
    const { value: activeValue, onValueChange, id, registerItem, unregisterItem } = useTabs();
    const isActive = activeValue === value;

    React.useEffect(() => {
        registerItem(value);
        return () => unregisterItem(value);
    }, [value, registerItem, unregisterItem]);

    return (
        <button
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`wim-tabs-${id}-panel-${value}`}
            id={`wim-tabs-${id}-tab-${value}`}
            data-value={value}
            disabled={disabled}
            tabIndex={isActive ? 0 : -1}
            className={classNames(
                "wim-tabs__trigger",
                isActive && "wim-tabs__trigger--active",
                className,
            )}
            onClick={() => onValueChange(value)}
            {...props}
        >
            {children}
        </button>
    );
};

export interface TabsContentProps extends React.ComponentPropsWithoutRef<"div"> {
    value: string;
}

export const TabsContent = ({
    value,
    className,
    children,
    ...props
}: TabsContentProps) => {
    const { value: activeValue, id } = useTabs();
    const isActive = activeValue === value;

    if (!isActive) return null;

    return (
        <div
            role="tabpanel"
            id={`wim-tabs-${id}-panel-${value}`}
            aria-labelledby={`wim-tabs-${id}-tab-${value}`}
            tabIndex={0}
            className={classNames("wim-tabs__content", className)}
            {...props}
        >
            {children}
        </div>
    );
};

const TabsRoot = Tabs as typeof Tabs & {
    List: typeof TabsList;
    Trigger: typeof TabsTrigger;
    Content: typeof TabsContent;
};

TabsRoot.List = TabsList;
TabsRoot.Trigger = TabsTrigger;
TabsRoot.Content = TabsContent;

export { TabsRoot as Tabs };
export default TabsRoot;

