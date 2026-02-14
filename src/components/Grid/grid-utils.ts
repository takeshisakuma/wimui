export type ResponsiveProp<T> =
    | T
    | {
        base?: T;
        sm?: T;
        md?: T;
        lg?: T;
        xl?: T;
    };

export const generateResponsiveVars = (
    prop: ResponsiveProp<number | string> | undefined,
    baseVarName: string,
    transform?: (value: number | string) => string
) => {
    if (prop === undefined) return {};
    const t = transform || ((v) => String(v));

    // Check if it's an object with breakpoint keys
    // Simple check: if typeof is object and not null. 
    // Note: we assume users won't pass other objects that look like this but aren't.
    if (
        typeof prop === "object" &&
        prop !== null &&
        !Array.isArray(prop)
    ) {
        const styles: Record<string, string> = {};
        const p = prop as any;

        if (p.base !== undefined) styles[baseVarName] = t(p.base);
        if (p.sm !== undefined) styles[`${baseVarName}-sm`] = t(p.sm);
        if (p.md !== undefined) styles[`${baseVarName}-md`] = t(p.md);
        if (p.lg !== undefined) styles[`${baseVarName}-lg`] = t(p.lg);
        if (p.xl !== undefined) styles[`${baseVarName}-xl`] = t(p.xl);

        return styles;
    }

    // Primitive value
    return { [baseVarName]: t(prop as number | string) };
};
