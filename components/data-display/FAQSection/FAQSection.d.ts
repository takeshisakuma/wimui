import { default as React } from '../../../../node_modules/react';
import { AccordionProps } from '../../data-display/Accordion/Accordion';
export interface FAQItem {
    /** Question. */
    question: React.ReactNode;
    /** Answer. */
    answer: React.ReactNode;
}
export interface FAQSectionProps {
    /** FAQ items. */
    items: FAQItem[];
    /** Main title of the section. */
    title?: React.ReactNode;
    /** Supplementary description shown below the title. */
    description?: React.ReactNode;
    /**
     * Layout.
     * - top: title and description above the accordion.
     * - left: title and description on the left, accordion on the right (desktop and up).
     */
    layout?: "top" | "left";
    /** Props passed to the inner Accordion component. */
    accordionProps?: Omit<AccordionProps, "children">;
    /** Additional class names. */
    className?: string;
}
/**
 * Section component for displaying frequently asked questions (FAQ).
 * Built on top of the existing Accordion component.
 */
export declare const FAQSection: ({ items, title, description, layout, accordionProps, className, }: FAQSectionProps) => React.JSX.Element;
