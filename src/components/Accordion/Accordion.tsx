import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useId,
} from "react";
import classNames from "classnames";
import "./accordion.scss";
import { Icon } from "../Icon/Icon";

type AccordionContextType = {
  value: string[];
  onValueChange: (val: string) => void;
  type: "single" | "multiple";
  accordionId: string;
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
  onValueChange?: (value: string | string[]) => void;
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
  defaultValue,
  value: valueProp,
  onValueChange,
  collapsible = true,
  className,
  children,
  id: customId,
}: AccordionProps) => {
  const generatedId = useId();
  const accordionId = customId || generatedId;

  const [internalValue, setInternalValue] = useState<string[]>(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [];
  });

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

      onValueChange?.(type === "single" ? (newValue[0] ?? "") : newValue);
    },
    [activeValue, collapsible, isControlled, onValueChange, type],
  );

  return (
    <AccordionContext.Provider
      value={{
        value: activeValue as string[],
        onValueChange: handleValueChange,
        type,
        accordionId,
      }}
    >
      <div className={classNames("wim-accordion", className)}>{children}</div>
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
          "wim-accordion__item",
          disabled && "wim-accordion__item--disabled",
          isLogicOpen && "wim-accordion__item--open",
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

  return (
    <button
      type="button"
      id={item.triggerId}
      className={classNames("wim-accordion__trigger", className)}
      aria-expanded={item.isLogicOpen}
      aria-controls={item.contentId}
      aria-disabled={item.disabled}
      disabled={item.disabled}
      onClick={handleClick}
      {...props}
    >
      <span className="wim-accordion__trigger-content">{children}</span>
      <Icon
        name="ChevronDownIcon"
        className={classNames(
          "wim-accordion__chevron",
          item.isLogicOpen && "wim-accordion__chevron--open",
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
        "wim-accordion__content",
        item.isLogicOpen && "wim-accordion__content--open",
        className,
      )}
      {...props}
    >
      <div className="wim-accordion__content-inner">
        <div className="wim-accordion__content-body">{children}</div>
      </div>
    </div>
  );
};

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export default Accordion;
