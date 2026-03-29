/**
 * Utility to convert spacing tokens (sm, md, lg, etc.) to CSS variables.
 */
export const getSpacingValue = (val?: number | string): string | undefined => {
  if (val === undefined || val === null) return undefined;
  if (typeof val === "number") return `${val}px`;

  const tokens = [
    "3xs",
    "2xs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
  ];

  if (tokens.includes(val)) {
    return `var(--wim-spacing-${val})`;
  }

  return val;
};
