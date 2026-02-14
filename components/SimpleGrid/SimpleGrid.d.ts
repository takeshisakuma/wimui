import { default as React } from '../../../node_modules/react';
import { ResponsiveProp } from '../Grid/grid-utils';
export declare const SimpleGrid: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    cols?: ResponsiveProp<number>;
    spacing?: number | string;
    verticalSpacing?: number | string;
    minChildWidth?: number | string;
} & React.RefAttributes<HTMLDivElement>>;
