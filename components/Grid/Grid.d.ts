import { default as React } from '../../../node_modules/react';
export declare const Grid: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    cols?: number | string;
    rows?: number | string;
    gap?: number | string;
    columnGap?: number | string;
    rowGap?: number | string;
    align?: "start" | "center" | "end" | "stretch";
    justify?: "start" | "center" | "end" | "between" | "around" | "stretch";
    flow?: "row" | "column" | "dense" | "row dense" | "column dense";
    inline?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
