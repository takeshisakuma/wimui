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
    onValueChange?: (value: string | string[]) => void;
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

const AccordionItemContext = createContext<{ value: string; disabled: boolean; isContentOpen: boolean } | null>(null);

export const AccordionItem = ({ value, disabled = false, className, children }: AccordionItemProps) => {
    const { value: activeValues } = useAccordion();
    const isLogicOpen = activeValues.includes(value);

    // Separating the logic state from the visual state to ensure transitions trigger properly
    const [isContentOpen, setIsContentOpen] = useState(isLogicOpen);
    const [isAnimating, setIsAnimating] = useState(false);
    const prevLogicOpenRef = React.useRef(isLogicOpen);

    React.useEffect(() => {
        if (isLogicOpen === prevLogicOpenRef.current) return;

        if (isLogicOpen) {
            // Opening: 
            // 1. Immediately ensure we're not flagged as animating closure
            setIsAnimating(false);
            // 2. The <details> tag will open immediately via isDetailOpen.
            // 3. We use a tiny delay to allow the browser to register the <details> as open
            //    before shifting the grid from 0fr down to 1fr.
            const timer = setTimeout(() => {
                setIsContentOpen(true);
            }, 10);
            return () => clearTimeout(timer);
        } else {
            // Closing:
            // 1. Immediately start the grid transition to 0fr
            setIsContentOpen(false);
            // 2. Mark as animating so the <details> tag stays open until it finishes
            setIsAnimating(true);
        }
        prevLogicOpenRef.current = isLogicOpen;
    }, [isLogicOpen]);

    const handleTransitionEnd = (e: React.TransitionEvent) => {
        // We only care about the transition ending when we are intentionally closing.
        // Once the height reaches 0fr, we can finally close the <details> element.
        if (!isLogicOpen && e.propertyName === "grid-template-rows") {
            setIsAnimating(false);
        }
    };

    const isDetailOpen = isLogicOpen || isAnimating;

    return (
        <AccordionItemContext.Provider value={{ value, disabled, isContentOpen }}>
            <details
                open={isDetailOpen}
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

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            if (item.disabled) {
                e.preventDefault();
                return;
            }
            // We prevent default to handle the "single" vs "multiple" logic in our context
            e.preventDefault();
            onValueChange(item.value);
        }
    };

    return (
        <summary
            className={["wim-accordion__trigger", className].filter(Boolean).join(" ")}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            {...props}
        >
            <span className="wim-accordion__trigger-content">{children}</span>
            <Icon
                name="ChevronDownIcon"
                className={[
                    "wim-accordion__chevron",
                    item.isContentOpen ? "wim-accordion__chevron--open" : "",
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
                item.isContentOpen ? "wim-accordion__content--open" : "",
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
