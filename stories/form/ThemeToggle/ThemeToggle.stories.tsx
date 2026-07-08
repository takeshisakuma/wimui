import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeToggle, ThemeMode } from "@/components/form/ThemeToggle/ThemeToggle";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";

const meta: Meta<typeof ThemeToggle> = {
  title: "Components/Form/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    layout: "centered",
  },
  // Stories preview the control without hijacking Storybook's own theme.
  args: {
    applyToDocument: false,
    storageKey: null,
  },
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {};

export const WithSystem: Story = {
  args: {
    modes: ["light", "dark", "system"],
    defaultValue: "system",
  },
};

export const Segmented: Story = {
  args: {
    variant: "segmented",
    modes: ["light", "dark", "system"],
    defaultValue: "light",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <ThemeToggle {...args} size="sm" />
      <ThemeToggle {...args} size="md" />
      <ThemeToggle {...args} size="lg" />
    </div>
  ),
};

export const LivePreview: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [mode, setMode] = useState<ThemeMode>("light");
    return (
      <div
        data-theme={mode === "system" ? undefined : mode}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "320px",
          padding: "24px",
          background: "var(--wim-color-bg-component)",
          border: "1px solid var(--wim-color-border)",
          borderRadius: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <strong style={{ color: "var(--wim-color-text-primary)" }}>
            {t("story.themetoggle_preview_title")}
          </strong>
          <ThemeToggle
            {...args}
            variant="segmented"
            modes={["light", "dark"]}
            value={mode}
            onChange={setMode}
          />
        </div>
        <p style={{ margin: 0, color: "var(--wim-color-text-secondary)" }}>
          {t("story.themetoggle_preview_body")}
        </p>
      </div>
    );
  },
};
