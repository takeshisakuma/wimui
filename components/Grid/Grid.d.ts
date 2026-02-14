import { default as React } from '../../../node_modules/react';
import { ResponsiveProp } from './grid-utils';
export declare const Grid: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    cols?: ResponsiveProp<number | string>;
    rows?: number | string;
    gap?: ResponsiveProp<number | string>;
    columnGap?: ResponsiveProp<number | string>;
    rowGap?: ResponsiveProp<number | string>;
    align?: "start" | "center" | "end" | "stretch";
    justify?: "start" | "center" | "end" | "between" | "around" | "stretch";
    flow?: "row" | "column" | "dense" | "row dense" | "column dense";
    inline?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
