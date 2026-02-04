import React, { createContext, useContext, useState, useCallback } from "react";
import PropTypes from "prop-types";
import "./accordion.scss";
import { Icon } from "../Icon/Icon";

type AccordionContextType = {
    value: string[];
    onValueChange: (val: string) => void;
    type: "single" | "multiple";
};

const AccordionContext = createContext<AccordionContextType | null>(null);

const useAccordion = () => {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error("Accordion components must be used within an Accordion");
    }
    return context;
};

type AccordionProps = {
    type?: "single" | "multiple";
    defaultValue?: string | string[];
    value?: string | string[];
    onValueChange?: (value: any) => void;
    collapsible?: boolean;
    className?: string;
    children: React.ReactNode;
};

export const Accordion = ({
    type = "single",
    defaultValue,
    value: valueProp,
    onValueChange,
    collapsible = true,
    className,
    children,
}: AccordionProps) => {
    const [internalValue, setInternalValue] = useState<string[]>(() => {
        if (defaultValue) {
            return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
        }
        return [];
    });

    const isControlled = valueProp !== undefined;
    const activeValue = isControlled
        ? Array.isArray(valueProp)
            ? valueProp
            : [valueProp]
        : internalValue;

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

            onValueChange?.(type === "single" ? newValue[0] : newValue);
        },
        [activeValue, collapsible, isControlled, onValueChange, type]
    );

    return (
        <AccordionContext.Provider
            value={{ value: activeValue as string[], onValueChange: handleValueChange, type }}
        >
            <div className={["wim-accordion", className].filter(Boolean).join(" ")}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

type AccordionItemProps = {
    value: string;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
};

const AccordionItemContext = createContext<{ value: string; disabled: boolean; isVisualOpen: boolean } | null>(null);

export const AccordionItem = ({ value, disabled = false, className, children }: AccordionItemProps) => {
    const { value: activeValues } = useAccordion();
    const isLogicOpen = activeValues.includes(value);

    // Track if we are in the middle of a transition
    const [isAnimating, setIsAnimating] = useState(false);
    const prevOpenRef = React.useRef(isLogicOpen);

    React.useEffect(() => {
        if (prevOpenRef.current !== isLogicOpen) {
            setIsAnimating(true);
        }
        prevOpenRef.current = isLogicOpen;
    }, [isLogicOpen]);

    const handleTransitionEnd = (e: React.TransitionEvent) => {
        // We only care about transitions finishing on the content area when closing
        if (!isLogicOpen) {
            setIsAnimating(false);
        }
    };

    const isVisualOpen = isLogicOpen || isAnimating;

    return (
        <AccordionItemContext.Provider value={{ value, disabled, isVisualOpen }}>
            <details
                open={isVisualOpen}
                onTransitionEnd={handleTransitionEnd}
                className={[
                    "wim-accordion__item",
                    disabled ? "wim-accordion__item--disabled" : "",
                    isLogicOpen ? "wim-accordion__item--open" : "",
                    className,
                ]
                    .filter(Boolean)
                    .join(" ")}
            >
                {children}
            </details>
        </AccordionItemContext.Provider>
    );
};

export const AccordionTrigger = ({
    children,
    className,
    ...props
}: React.ComponentPropsWithoutRef<"summary">) => {
    const { value, onValueChange } = useAccordion();
    const item = useContext(AccordionItemContext);
    if (!item) throw new Error("AccordionTrigger must be used within AccordionItem");

    const isOpen = value.includes(item.value);

    const handleClick = (e: React.MouseEvent) => {
        if (item.disabled) {
            e.preventDefault();
            return;
        }
        // We prevent default to handle the "single" vs "multiple" logic in our context
        e.preventDefault();
        onValueChange(item.value);
    };

    return (
        <summary
            className={["wim-accordion__trigger", className].filter(Boolean).join(" ")}
            onClick={handleClick}
            {...props}
        >
            <span className="wim-accordion__trigger-content">{children}</span>
            <Icon
                name="ChevronDownIcon"
                className={[
                    "wim-accordion__chevron",
                    item.isVisualOpen ? "wim-accordion__chevron--open" : "",
                ].join(" ")}
            />
        </summary>
    );
};

export const AccordionContent = ({
    children,
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) => {
    const item = useContext(AccordionItemContext);
    if (!item) throw new Error("AccordionContent must be used within AccordionItem");

    return (
        <div
            className={[
                "wim-accordion__content",
                item.isVisualOpen ? "wim-accordion__content--open" : "",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            {...props}
        >
            <div className="wim-accordion__content-inner">{children}</div>
        </div>
    );
};

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

Accordion.propTypes = {
    type: PropTypes.oneOf(["single", "multiple"]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    onValueChange: PropTypes.func,
    collapsible: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
};
