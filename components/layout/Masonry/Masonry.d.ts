import { default as React } from '../../../../node_modules/react';
export type MasonryProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * Number of columns. Pick it from how many items there are — three columns
     * holding four cards leaves a ragged row that reads as a template, not a choice.
     * @default 3
     */
    columns?: number;
    /**
     * Gap between items: a spacing token name (`"md"`, `"2xl"`, …) or a raw number
     * of pixels. Prefer the token so the gap follows the theme.
     * @default "2xl"
     */
    spacing?: number | string;
};
/**
 * Masonry layout component.
 * It arranges items in columns, filling in gaps to minimize empty space.
 */
export declare const Masonry: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    /**
     * Number of columns. Pick it from how many items there are — three columns
     * holding four cards leaves a ragged row that reads as a template, not a choice.
     * @default 3
     */
    columns?: number;
    /**
     * Gap between items: a spacing token name (`"md"`, `"2xl"`, …) or a raw number
     * of pixels. Prefer the token so the gap follows the theme.
     * @default "2xl"
     */
    spacing?: number | string;
} & React.RefAttributes<HTMLDivElement>>;
