import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { IndicatorBase } from "@/components/_internal/IndicatorBase";
import type { IndicatorIntent, IndicatorVariant } from "@/types/tokens";
import demoStyles from "./indicator-base-demo.module.scss";

const meta: Meta<typeof IndicatorBase> = {
  title: "Components/Internal/IndicatorBase",
  component: IndicatorBase,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof IndicatorBase>;

const intents: IndicatorIntent[] = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "neutral",
];

const variants: IndicatorVariant[] = ["solid", "outline", "subtle"];

export const Default: Story = {
  args: {
    styles: demoStyles,
    intent: "primary",
    variant: "solid",
    size: "md",
    children: "Label",
  },
};

export const Intents: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--wim-spacing-sm)", alignItems: "center" }}>
      {intents.map((intent) => (
        <IndicatorBase key={intent} styles={demoStyles} intent={intent} variant="solid">
          {intent}
        </IndicatorBase>
      ))}
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--wim-spacing-md)" }}>
      {variants.map((variant) => (
        <div
          key={variant}
          style={{ display: "flex", flexWrap: "wrap", gap: "var(--wim-spacing-sm)", alignItems: "center" }}
        >
          {intents.map((intent) => (
            <IndicatorBase key={`${variant}-${intent}`} styles={demoStyles} intent={intent} variant={variant}>
              {variant}
            </IndicatorBase>
          ))}
        </div>
      ))}
    </div>
  ),
};
