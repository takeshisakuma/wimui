import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useId,
} from "react";
import classNames from "classnames";
import styles from "./accordion.module.scss";
import { Icon } from "../../media/Icon/Icon";

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
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
  id?: string;
}

/**
 * 折りたたみ可能なコンテンツのセット。
 * type="single" の場合は一度に一つ、"multiple" の場合は複数開くことができます。
 */
export const Accordion = ({
  type = "single",
  defaultValue: _defaultValue,
  value: valueProp,
  onChange,
  collapsible = true,
  className,
  children,
  id: customId,
}: AccordionProps) => {
  const generatedId = useId();
  const accordionId = customId || generatedId;

  const [internalValue, setInternalValue] = useState<string[]>(() => {
    if (!_defaultValue) return [];
    return Array.isArray(_defaultValue) ? _defaultValue : [_defaultValue];
  });
  const containerRef = React.useRef<HTMLDivElement>(null);

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
      <div
        ref={containerRef}
        className={classNames(styles.root, className)}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export interface AccordionItemProps {
  value: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
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
export const AccordionItem = ({
  value,
  disabled = false,
  className,
  children,
}: AccordionItemProps) => {
  const { value: activeValues, accordionId } = useAccordion();
  const isLogicOpen = activeValues.includes(value);
  const triggerId = `wim-accordion-trigger-${accordionId}-${value}`;
  const contentId = `wim-accordion-content-${accordionId}-${value}`;

  return (
    <AccordionItemContext.Provider
      value={{ value, disabled, isLogicOpen, triggerId, contentId }}
    >
      <div
        className={classNames(
          styles.item,
          disabled && styles.disabled,
          isLogicOpen && styles.open,
          className,
        )}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

/**
 * アコーディオンを切り替えるトリガー。
 */
export const AccordionTrigger = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"button">) => {
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

  return (
    <button
      type="button"
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
        name="ChevronDownIcon"
        className={classNames(
          styles.chevron,
          item.isLogicOpen && styles.open,
        )}
      />
    </button>
  );
};

/**
 * アコーディオンのコンテンツ領域。
 */
export const AccordionContent = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  const item = useContext(AccordionItemContext);
  if (!item)
    throw new Error("AccordionContent must be used within AccordionItem");

  return (
    <div
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
    </div>
  );
};

Accordion.displayName = "Accordion";
AccordionItem.displayName = "Accordion.Item";
AccordionTrigger.displayName = "Accordion.Trigger";
AccordionContent.displayName = "Accordion.Content";

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export default Accordion;
