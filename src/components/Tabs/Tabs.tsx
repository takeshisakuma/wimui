import React, { createContext, useContext, useState, useCallback } from "react";
import classNames from "classnames";
import "./tabs.scss";

type TabsContextType = {
    value?: string;
    onValueChange: (val: string) => void;
    orientation?: "horizontal" | "vertical";
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

    return (
        <TabsContext.Provider
            value={{ value: activeValue, onValueChange: handleValueChange, orientation }}
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

export interface TabsListProps extends React.ComponentPropsWithoutRef<"div"> { }

export const TabsList = ({ className, children, ...props }: TabsListProps) => {
    const { orientation } = useTabs();
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
    const { value: activeValue, onValueChange } = useTabs();
    const isActive = activeValue === value;

    return (
        <button
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${value}`}
            id={`tab-${value}`}
            disabled={disabled}
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
    const { value: activeValue } = useTabs();
    const isActive = activeValue === value;

    if (!isActive) return null;

    return (
        <div
            role="tabpanel"
            id={`panel-${value}`}
            aria-labelledby={`tab-${value}`}
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
