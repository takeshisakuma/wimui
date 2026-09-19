import { default as React } from '../../../../node_modules/react';
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
/**
 * 各アコーディオン項目。
 */
export declare const AccordionItem: React.ForwardRefExoticComponent<AccordionItemProps & React.RefAttributes<HTMLDivElement>>;
/**
 * アコーディオンを切り替えるトリガー。
 */
export interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<"button"> {
    /** Whether to render as a child element. */
    asChild?: boolean;
}
export declare const AccordionTrigger: React.ForwardRefExoticComponent<AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>>;
/**
 * アコーディオンのコンテンツ領域。
 */
export interface AccordionContentProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Whether to render as a child element. */
    asChild?: boolean;
}
export declare const AccordionContent: React.ForwardRefExoticComponent<AccordionContentProps & React.RefAttributes<HTMLDivElement>>;
export type AccordionComponent = React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>> & {
    Item: typeof AccordionItem;
    Trigger: typeof AccordionTrigger;
    Content: typeof AccordionContent;
};
export declare const Accordion: AccordionComponent;
export default Accordion;
