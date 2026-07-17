import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useId,
} from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useIndicator } from "../../_internal/useIndicator";
import { useMergedRef } from "../../../hooks/useMergedRef";
import styles from "./tabs.module.scss";

type TabsContextType = {
  value?: string;
  onValueChange: (val: string) => void;
  orientation?: "horizontal" | "vertical";
  id: string;
  items: string[];
  registerItem: (val: string) => void;
  unregisterItem: (val: string) => void;
  panels: string[];
  registerPanel: (val: string) => void;
  unregisterPanel: (val: string) => void;
};

const TabsContext = createContext<TabsContextType | null>(null);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs");
  }
  return context;
};

export interface TabsProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  /**
   * If true, the tabs root will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /**
   * Value of the tab selected initially, for uncontrolled usage.
   */
  defaultValue?: string;
  /**
   * Controlled value of the selected tab. Use together with onChange.
   */
  value?: string;
  /**
   * Called with the value of the newly selected tab.
   */
  onChange?: (value: string) => void;
  /**
   * Orientation of the tab list, affecting layout and arrow-key navigation.
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      asChild = false,
      defaultValue,
      value: valueProp,
      onChange,
      orientation = "horizontal",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState<string | undefined>(
      defaultValue,
    );
    const [items, setItems] = useState<string[]>([]);
    const [panels, setPanels] = useState<string[]>([]);
    const id = useId();

    const isControlled = valueProp !== undefined;
    const activeValue = isControlled ? valueProp : internalValue;

    const handleValueChange = useCallback(
      (val: string) => {
        if (!isControlled) {
          setInternalValue(val);
        }
        onChange?.(val);
      },
      [isControlled, onChange],
    );

    const registerItem = useCallback((val: string) => {
      setItems((prev) => (prev.includes(val) ? prev : [...prev, val]));
    }, []);

    const unregisterItem = useCallback((val: string) => {
      setItems((prev) => prev.filter((i) => i !== val));
    }, []);

    const registerPanel = useCallback((val: string) => {
      setPanels((prev) => (prev.includes(val) ? prev : [...prev, val]));
    }, []);

    const unregisterPanel = useCallback((val: string) => {
      setPanels((prev) => prev.filter((i) => i !== val));
    }, []);

    const Root = asChild ? Slot : "div";

    return (
      <TabsContext.Provider
        value={{
          value: activeValue,
          onValueChange: handleValueChange,
          orientation,
          id,
          items,
          registerItem,
          unregisterItem,
          panels,
          registerPanel,
          unregisterPanel,
        }}
      >
        <div className={styles.container}>
          <Root
            ref={ref}
            className={classNames(
              "wim-tabs",
              styles.root,
              styles[orientation],
              className,
            )}
            {...props}
          >
            <Slottable>{children}</Slottable>
          </Root>
        </div>
      </TabsContext.Provider>
    );
  },
);

export type TabsListProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * If true, the tab list will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
};

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ asChild = false, className, children, ...props }, ref) => {
    const { orientation, value, items, onValueChange } = useTabs();
    const [isDragging, setIsDragging] = React.useState(false);
    const [startX, setStartX] = React.useState(0);
    const [scrollLeft, setScrollLeft] = React.useState(0);

    const { containerRef, sliderStyle, isReady } = useIndicator({
      activeSelector: `.${styles.trigger}.${styles.active}`,
      orientation,
      dependence: value,
    });
    const mergedRef = useMergedRef(containerRef, ref);

    const handleMouseDown = (e: React.MouseEvent) => {
      if (orientation === "vertical") return;
      setIsDragging(true);
      setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
      setScrollLeft(containerRef.current?.scrollLeft || 0);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDragging || orientation === "vertical") return;
      e.preventDefault();
      const x = e.pageX - (containerRef.current?.offsetLeft || 0);
      const walk = (x - startX) * 1.5;
      if (containerRef.current) {
        containerRef.current.scrollLeft = scrollLeft - walk;
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      const currentIndex = value ? items.indexOf(value) : -1;
      let nextIndex = -1;

      if (orientation === "horizontal") {
        if (e.key === "ArrowRight") nextIndex = (currentIndex + 1) % items.length;
        if (e.key === "ArrowLeft")
          nextIndex = (currentIndex - 1 + items.length) % items.length;
      } else {
        if (e.key === "ArrowDown") nextIndex = (currentIndex + 1) % items.length;
        if (e.key === "ArrowUp")
          nextIndex = (currentIndex - 1 + items.length) % items.length;
      }

      if (e.key === "Home") nextIndex = 0;
      if (e.key === "End") nextIndex = items.length - 1;

      if (nextIndex !== -1) {
        e.preventDefault();
        const nextValue = items[nextIndex];
        if (nextValue) {
          onValueChange(nextValue);
          const tab = containerRef.current?.querySelector(
            `[data-value="${nextValue}"]`,
          ) as HTMLElement;
          tab?.focus();
        }
      }
    };

    const Component = asChild ? Slot : "div";

    return (
      <Component
        ref={mergedRef}
        role="tablist"
        aria-orientation={orientation}
        tabIndex={0}
        className={classNames(
          styles.list,
          isDragging && styles.dragging,
          isReady && styles.ready,
          className,
        )}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <div
          className={styles.slider}
          style={sliderStyle}
          aria-hidden="true"
        />
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

export interface TabsTriggerProps extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * If true, the trigger will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  value: string;
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  (
    {
      asChild = false,
      value,
      disabled = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const {
      value: activeValue,
      onValueChange,
      id,
      registerItem,
      unregisterItem,
      panels,
    } = useTabs();
    const isActive = activeValue === value;

    React.useEffect(() => {
      registerItem(value);
      return () => unregisterItem(value);
    }, [value, registerItem, unregisterItem]);

    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={ref}
        type={asChild ? undefined : "button"}
        role="tab"
        aria-selected={isActive}
        // TabsContent を使わない構成では参照先が存在せず
        // aria-valid-attr-value 違反になるため、パネル登録時のみ付与
        aria-controls={panels.includes(value) ? `wim-tabs-${id}-panel-${value}` : undefined}
        id={`wim-tabs-${id}-tab-${value}`}
        data-value={value}
        disabled={disabled}
        tabIndex={isActive ? 0 : -1}
        className={classNames(
          styles.trigger,
          isActive && styles.active,
          className,
        )}
        onClick={() => onValueChange(value)}
        {...props}
      >
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

export interface TabsContentProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * If true, the panel will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  value: string;
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ asChild = false, value, className, children, ...props }, ref) => {
    const { value: activeValue, id, registerPanel, unregisterPanel } = useTabs();
    const isActive = activeValue === value;

    React.useEffect(() => {
      registerPanel(value);
      return () => unregisterPanel(value);
    }, [value, registerPanel, unregisterPanel]);

    if (!isActive) return null;

    const Component = asChild ? Slot : "div";

    return (
      <Component
        ref={ref}
        role="tabpanel"
        id={`wim-tabs-${id}-panel-${value}`}
        aria-labelledby={`wim-tabs-${id}-tab-${value}`}
        tabIndex={0}
        className={classNames(styles.content, className)}
        {...props}
      >
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

Tabs.displayName = "Tabs";
TabsList.displayName = "Tabs.List";
TabsTrigger.displayName = "Tabs.Trigger";
TabsContent.displayName = "Tabs.Content";

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
