import React from "react";
import { Box, type BoxProps } from "wimui";

/**
 * Shared chrome for layout-teaching Storybook cells (Flex/Grid/Stack/…).
 *
 * Use when children exist only to reveal gap / align / columns / flow.
 * Do NOT use for: Box API demos, product-like compositions (real Buttons,
 * AppShell, Patterns), or host frames (surface-variant outer + surface inner).
 *
 * Neutral 1px border keeps cell edges visible on surface-app when intent
 * tints (especially secondary) would otherwise sink into the canvas.
 */
export type DemoCellIntent =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "secondary"
  | "neutral";

export const DEMO_CELL_INTENTS: Exclude<DemoCellIntent, "neutral">[] = [
  "primary",
  "success",
  "warning",
  "danger",
  "info",
  "secondary",
];

export function demoCellIntent(index: number): Exclude<DemoCellIntent, "neutral"> {
  return DEMO_CELL_INTENTS[index % DEMO_CELL_INTENTS.length];
}

const INTENT_STYLES: Record<DemoCellIntent, { bg: string; color: string }> = {
  primary: {
    bg: "color-mix(in srgb, var(--wim-color-primary) 12%, var(--wim-color-surface))",
    color: "var(--wim-color-text-accent)",
  },
  success: {
    bg: "color-mix(in srgb, var(--wim-color-success) 12%, var(--wim-color-surface))",
    color: "var(--wim-color-text-success)",
  },
  warning: {
    bg: "color-mix(in srgb, var(--wim-color-warning) 12%, var(--wim-color-surface))",
    color: "var(--wim-color-text-warning)",
  },
  danger: {
    bg: "color-mix(in srgb, var(--wim-color-danger) 12%, var(--wim-color-surface))",
    color: "var(--wim-color-text-danger)",
  },
  info: {
    bg: "color-mix(in srgb, var(--wim-color-info) 12%, var(--wim-color-surface))",
    color: "var(--wim-color-text-info)",
  },
  secondary: {
    bg: "color-mix(in srgb, var(--wim-color-secondary) 12%, var(--wim-color-surface))",
    color: "var(--wim-color-text-secondary)",
  },
  neutral: {
    bg: "var(--wim-color-surface-variant)",
    color: "var(--wim-color-text-primary)",
  },
};

export type DemoCellProps = Omit<BoxProps, "bg" | "color"> & {
  intent?: DemoCellIntent;
};

export function DemoCell({
  intent = "primary",
  p = "md",
  radius = "md",
  display = "flex",
  style,
  children,
  ...rest
}: DemoCellProps) {
  const { bg, color } = INTENT_STYLES[intent];

  return (
    <Box
      bg={bg}
      color={color}
      p={p}
      radius={radius}
      display={display}
      style={{
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid var(--wim-color-border)",
        fontWeight: "bold",
        boxSizing: "border-box",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}
