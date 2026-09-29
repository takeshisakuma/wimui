import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { CounterTextarea, Label } from "wimui";

const meta: Meta<typeof CounterTextarea> = {
  title: "Components/Basic Inputs/CounterTextarea",
  component: CounterTextarea,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof CounterTextarea>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ width: "100%", maxWidth: 800, margin: "0 auto" }}>
        <Label label={t("story.counter_textarea_label")}>
          <CounterTextarea
            {...args}
            placeholder={t("story.counter_textarea_placeholder")}
            maxLength={100}
          />
        </Label>
      </div>
    );
  },
};

// T280: この値は VRT が撮るストーリーのどれにも描かれていなかった（Audit / ChatUI は撮影対象外）。
export const Variants: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--wim-spacing-lg)", width: "100%", maxWidth: 800, margin: "0 auto" }}>
        {(["outline", "ghost"] as const).map((variant) => (
          <Label key={variant} label={t("story.counter_textarea_label")}>
            <CounterTextarea {...args} variant={variant} placeholder={t("story.counter_textarea_placeholder")} maxLength={100} />
          </Label>
        ))}
      </div>
    );
  },
};
