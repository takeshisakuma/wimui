import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useId,
  forwardRef,
} from "react";
import { Slot } from "@radix-ui/react-slot";
import classNames from "classnames";
import styles from "./accordion.module.scss";
import { Icon } from "../../media/Icon/Icon";
import { ChevronDownIcon } from "@/icon";

type AccordionContextType = {
  value: string[];
  onValueChange: (val: string) => void;
  type: "single" | "multiple";
  accordionId: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
};

export interface AccordionProps {
  /** Whether one or multiple items can be open at a time */
  type?: "single" | "multiple";
  /** Initially open item value(s) (uncontrolled) */
  defaultValue?: string | string[];
  /** Open item value(s) (controlled) */
  value?: string | string[];
  /** Callback when the open items change */
  onChange?: (value: string | string[]) => void;
  /** Whether the open item can be collapsed (type="single") */
  collapsible?: boolean;
  /** Additional class names */
  className?: string;
  /** Accordion.Item elements */
  children: React.ReactNode;
  /** Unique ID for the component */
  id?: string;
  /** Whether to render as a child element. */
  asChild?: boolean;
}

/**
 * A set of collapsible content.
 * With type="single" only one item can be open at a time; with "multiple" several can be open.
 */
const AccordionRoot = forwardRef<HTMLDivElement, AccordionProps>(function AccordionRoot({
  type = "single",
  defaultValue: _defaultValue,
  value: valueProp,
  onChange,
  collapsible = true,
  className,
  children,
  id: customId,
  asChild,
  ...props
}, ref) {
  const generatedId = useId();
  const accordionId = customId || generatedId;

  const [internalValue, setInternalValue] = useState<string[]>(() => {
    if (!_defaultValue) return [];
    return Array.isArray(_defaultValue) ? _defaultValue : [_defaultValue];
  });
  const containerRef = React.useRef<HTMLDivElement>(null);
  const combinedRef = (node: HTMLDivElement | null) => {
    (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
  };

  const isControlled = valueProp !== undefined;
  const activeValue = useMemo(() => {
    const val = isControlled ? valueProp : internalValue;
    return Array.isArray(val) ? val : val ? [val] : [];
  }, [isControlled, valueProp, internalValue]);

  const handleValueChange = useCallback(
    (itemValue: string) => {
      let newValue: string[];

      if (type === "single") {
        const isCurrentlyOpen = activeValue.includes(itemValue);
        if (isCurrentlyOpen) {
          newValue = collapsible ? [] : [itemValue];
        } else {
          newValue = [itemValue];
        }
      } else {
        if (activeValue.includes(itemValue)) {
          newValue = activeValue.filter((v) => v !== itemValue);
        } else {
          newValue = [...activeValue, itemValue];
        }
      }

      if (!isControlled) {
        setInternalValue(newValue);
      }

      onChange?.(type === "single" ? (newValue[0] ?? "") : newValue);
    },
    [activeValue, collapsible, isControlled, onChange, type],
  );

  const Component = asChild ? Slot : "div";

  return (
    <AccordionContext.Provider
      value={{
        value: activeValue as string[],
        onValueChange: handleValueChange,
        type,
        accordionId,
        containerRef,
      }}
    >
      <Component
        ref={combinedRef}
        className={classNames(styles.root, className)}
        {...props}
      >
        {children}
      </Component>
    </AccordionContext.Provider>
  );
});

export interface AccordionItemProps {
  /** Unique value identifying the item */
  value: string;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Additional class names */
  className?: string;
  /** Accordion.Trigger and Accordion.Content */
  children: React.ReactNode;
  /** Whether to render as a child element. */
  asChild?: boolean;
}

const AccordionItemContext = createContext<{
  value: string;
  disabled: boolean;
  isLogicOpen: boolean;
  triggerId: string;
  contentId: string;
} | null>(null);

/**
 * 各アコーディオン項目。
 */
export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(function AccordionItem({
  value,
  disabled = false,
  className,
  children,
  asChild,
  ...props
}, ref) {
  const { value: activeValues, accordionId } = useAccordion();
  const isLogicOpen = activeValues.includes(value);
  const triggerId = `wim-accordion-trigger-${accordionId}-${value}`;
  const contentId = `wim-accordion-content-${accordionId}-${value}`;

  const Component = asChild ? Slot : "div";

  return (
    <AccordionItemContext.Provider
      value={{ value, disabled, isLogicOpen, triggerId, contentId }}
    >
      <Component
        ref={ref}
        className={classNames(
          styles.item,
          disabled && styles.disabled,
          isLogicOpen && styles.open,
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    </AccordionItemContext.Provider>
  );
});

/**
 * アコーディオンを切り替えるトリガー。
 */
export interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<"button"> {
  /** Whether to render as a child element. */
  asChild?: boolean;
}

export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(function AccordionTrigger({
  children,
  className,
  asChild,
  ...props
}, ref) {
  const { onValueChange } = useAccordion();
  const item = useContext(AccordionItemContext);
  if (!item)
    throw new Error("AccordionTrigger must be used within AccordionItem");

  const handleClick = (e: React.MouseEvent) => {
    if (item.disabled) {
      e.preventDefault();
      return;
    }
    onValueChange(item.value);
  };

  const { containerRef } = useAccordion();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (item.disabled) return;

    const triggers = Array.from(
      containerRef.current?.querySelectorAll(`.${styles.trigger}:not(:disabled)`) || [],
    ) as HTMLElement[];
    const index = triggers.indexOf(e.currentTarget as HTMLElement);

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        triggers[(index + 1) % triggers.length]?.focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        triggers[(index - 1 + triggers.length) % triggers.length]?.focus();
        break;
      case "Home":
        e.preventDefault();
        triggers[0]?.focus();
        break;
      case "End":
        e.preventDefault();
        triggers[triggers.length - 1]?.focus();
        break;
    }

    props.onKeyDown?.(e);
  };

  const Component = asChild ? Slot : "button";

  return (
    <Component
      ref={ref}
      type={asChild ? undefined : "button"}
      id={item.triggerId}
      className={classNames(styles.trigger, className)}
      aria-expanded={item.isLogicOpen}
      aria-controls={item.contentId}
      aria-disabled={item.disabled}
      disabled={item.disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <span className={styles.triggerContent}>{children}</span>
      <Icon
        component={ChevronDownIcon}
        className={classNames(
          styles.chevron,
          item.isLogicOpen && styles.open,
        )}
      />
    </Component>
  );
});

/**
 * アコーディオンのコンテンツ領域。
 */
export interface AccordionContentProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Whether to render as a child element. */
  asChild?: boolean;
}

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(function AccordionContent({
  children,
  className,
  asChild,
  ...props
}, ref) {
  const item = useContext(AccordionItemContext);
  if (!item)
    throw new Error("AccordionContent must be used within AccordionItem");

  const Component = asChild ? Slot : "div";

  return (
    <Component
      ref={ref}
      id={item.contentId}
      role="region"
      aria-labelledby={item.triggerId}
      className={classNames(
        styles.content,
        item.isLogicOpen && styles.open,
        className,
      )}
      {...props}
    >
      <div className={styles.contentInner}>
        <div className={styles.contentBody}>{children}</div>
      </div>
    </Component>
  );
});

export type AccordionComponent = React.ForwardRefExoticComponent<
  AccordionProps & React.RefAttributes<HTMLDivElement>
> & {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
};

export const Accordion = AccordionRoot as AccordionComponent;

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

Accordion.displayName = "Accordion";
AccordionItem.displayName = "Accordion.Item";
AccordionTrigger.displayName = "Accordion.Trigger";
AccordionContent.displayName = "Accordion.Content";

export default Accordion;
