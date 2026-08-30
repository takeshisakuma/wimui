import { default as React } from '../../../../node_modules/react';
import { ResponsiveProp } from '../../layout/Grid/grid-utils';
export declare const SimpleGrid: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    /** Number of columns (or a responsive object per breakpoint) */
    cols?: ResponsiveProp<number>;
    /** Spacing between cells */
    spacing?: number | string;
    /** Vertical spacing between rows (defaults to `spacing`) */
    verticalSpacing?: number | string;
    /** Minimum width of each child; columns wrap automatically to fit */
    minChildWidth?: number | string;
} & React.RefAttributes<HTMLDivElement>>;
