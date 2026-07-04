import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { SmartSearchInput } from "wimui";

const meta: Meta<typeof SmartSearchInput> = {
  title: "Components/Basic Inputs/SmartSearchInput",
  component: SmartSearchInput,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof SmartSearchInput>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <SmartSearchInput {...args} placeholder={t("story.smartsearchinput_placeholder")} />;
  },
  args: {
    width: "md",
  },
};

export const Interactive: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("");
    const [submitted, setSubmitted] = useState<string[]>([]);

    const handleSubmit = (val: string) => {
      setSubmitted((prev) => [val, ...prev]);
      setValue("");
    };

    return (
      <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
        <div>
          <p style={{ marginBottom: "8px", fontSize: "14px", color: "var(--wim-color-text-secondary)" }}>
            {t("story.smartsearchinput_interactive_hint")}
          </p>
          <SmartSearchInput
            value={value}
            onChange={setValue}
            onSubmit={handleSubmit}
            placeholder={t("story.smartsearchinput_ai_placeholder")}
            allowClear
            fullWidth
          />
        </div>
        {submitted.length > 0 && (
          <div>
            <p style={{ marginBottom: "8px", fontSize: "13px", fontWeight: 600, color: "var(--wim-color-text-secondary)" }}>
              {t("story.smartsearchinput_submitted_label")}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {submitted.map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: "8px 12px",
                    background: "var(--wim-color-ghost-bg)",
                    borderRadius: "var(--wim-radius-md)",
                    fontSize: "14px",
                    border: "1px solid var(--wim-color-border)",
                    overflowWrap: "break-word",
                    minWidth: 0,
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%", maxWidth: "800px", margin: "0 auto" }}>
        <SmartSearchInput variant="outline" placeholder={t("story.smartsearchinput_placeholder")} fullWidth />
        <SmartSearchInput variant="ghost" placeholder={t("story.smartsearchinput_placeholder")} fullWidth />
        <SmartSearchInput intent="error" error={t("story.smartsearch_error_invalid")} defaultValue="error example" fullWidth />
      </div>
    );
  },
};

export const WithMaxLength: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <SmartSearchInput
        placeholder={t("story.smartsearchinput_placeholder")}
        maxLength={200}
        fullWidth
      />
    );
  },
};
