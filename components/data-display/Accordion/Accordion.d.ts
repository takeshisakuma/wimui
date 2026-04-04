import { default as React } from '../../../../node_modules/react';
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
export declare const Accordion: {
    ({ type, defaultValue: _defaultValue, value: valueProp, onChange, collapsible, className, children, id: customId, }: AccordionProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
    Item: {
        ({ value, disabled, className, children, }: AccordionItemProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Trigger: {
        ({ children, className, ...props }: React.ComponentPropsWithoutRef<"button">): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Content: {
        ({ children, className, ...props }: React.ComponentPropsWithoutRef<"div">): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export interface AccordionItemProps {
    value: string;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
}
/**
 * 各アコーディオン項目。
 */
export declare const AccordionItem: {
    ({ value, disabled, className, children, }: AccordionItemProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
/**
 * アコーディオンを切り替えるトリガー。
 */
export declare const AccordionTrigger: {
    ({ children, className, ...props }: React.ComponentPropsWithoutRef<"button">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
/**
 * アコーディオンのコンテンツ領域。
 */
export declare const AccordionContent: {
    ({ children, className, ...props }: React.ComponentPropsWithoutRef<"div">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default Accordion;
