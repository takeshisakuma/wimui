import { default as React } from '../../../node_modules/react';
type AccordionProps = {
    type?: "single" | "multiple";
    defaultValue?: string | string[];
    value?: string | string[];
    onValueChange?: (value: string | string[]) => void;
    collapsible?: boolean;
    className?: string;
    children: React.ReactNode;
};
export declare const Accordion: {
    ({ type, defaultValue, value: valueProp, onValueChange, collapsible, className, children, }: AccordionProps): import("react/jsx-runtime").JSX.Element;
    Item: ({ value, disabled, className, children }: AccordionItemProps) => import("react/jsx-runtime").JSX.Element;
    Trigger: ({ children, className, ...props }: React.ComponentPropsWithoutRef<"summary">) => import("react/jsx-runtime").JSX.Element;
    Content: ({ children, className, ...props }: React.ComponentPropsWithoutRef<"div">) => import("react/jsx-runtime").JSX.Element;
};
type AccordionItemProps = {
    value: string;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
};
export declare const AccordionItem: ({ value, disabled, className, children }: AccordionItemProps) => import("react/jsx-runtime").JSX.Element;
export declare const AccordionTrigger: ({ children, className, ...props }: React.ComponentPropsWithoutRef<"summary">) => import("react/jsx-runtime").JSX.Element;
export declare const AccordionContent: ({ children, className, ...props }: React.ComponentPropsWithoutRef<"div">) => import("react/jsx-runtime").JSX.Element;
export {};
