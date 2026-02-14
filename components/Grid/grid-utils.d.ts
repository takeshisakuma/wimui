export type ResponsiveProp<T> = T | {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
};
export declare const generateResponsiveVars: (prop: ResponsiveProp<number | string> | undefined, baseVarName: string, transform?: (value: number | string) => string) => Record<string, string>;
