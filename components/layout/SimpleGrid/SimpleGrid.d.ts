import { default as React } from '../../../../node_modules/react';
import { ResponsiveProp } from '../../layout/Grid/grid-utils';
export declare const SimpleGrid: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    /** Number of columns (or a responsive object per breakpoint) */
    cols?: ResponsiveProp<number>;
    /**
     * Spacing between cells: a spacing token name (`"md"`, `"2xl"`, …) or a raw
     * number of pixels. Prefer the token so the gap follows the theme.
     * @default "2xl"
     */
    spacing?: number | string;
    /** Vertical spacing between rows (defaults to `spacing`) */
    verticalSpacing?: number | string;
    /** Minimum width of each child; columns wrap automatically to fit */
    minChildWidth?: number | string;
} & React.RefAttributes<HTMLDivElement>>;
