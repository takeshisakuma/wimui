import { default as React } from '../../../../node_modules/react';
export interface SourceCitationProps {
    /** Title of the source */
    title: string;
    /** Source URL. When provided, renders as a clickable link. */
    url?: string;
    /** Brief excerpt or description of the source */
    description?: string;
    /** Numeric citation index shown as a badge (e.g. 1, 2, 3) */
    index?: number;
    /** Domain label shown below the title (auto-derived from url when omitted) */
    domain?: string;
    /** Additional CSS class */
    className?: string;
}
/**
 * SourceCitation displays a single cited source with optional link, index badge, and description.
 * Use SourceCitationList to render multiple sources in a row.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const SourceCitation: ({ title, url, description, index, domain: domainProp, className, }: SourceCitationProps) => React.JSX.Element;
export interface SourceCitationListProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Array of sources to display */
    sources: SourceCitationProps[];
    /** Additional CSS class */
    className?: string;
}
/**
 * SourceCitationList renders a horizontal scrollable list of SourceCitation items,
 * automatically assigning sequential index values.
 */
export declare const SourceCitationList: React.ForwardRefExoticComponent<SourceCitationListProps & React.RefAttributes<HTMLDivElement>>;
