import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { PromptInput } from "@/components/ai/PromptInput/PromptInput";

const meta: Meta<typeof PromptInput> = {
  title: "Components/AI/PromptInput",
  component: PromptInput,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    showAttach: { control: "boolean" },
    maxRows: { control: { type: "number", min: 2, max: 20 } },
    maxLength: { control: "number" },
    placeholder: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof PromptInput>;

const InteractiveDemo = (args: React.ComponentProps<typeof PromptInput>) => {
  const { t } = useTranslation(ALL_NAMESPACES);
  const [submitted, setSubmitted] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--wim-spacing-md)" }}>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {submitted.length > 0 && (
        <div style={{ padding: "var(--wim-spacing-sm)", background: "var(--wim-color-ghost-bg)", borderRadius: "var(--wim-radius-md)", fontSize: "var(--wim-font-size-sm)", color: "var(--wim-color-text-secondary)" }}>
          {t("story.promptinput_submitted")}{submitted[submitted.length - 1]}
        </div>
      )}
      {fileName && (
        <div style={{ padding: "var(--wim-spacing-sm)", background: "var(--wim-color-primary-subtle)", border: "1px solid var(--wim-color-primary)", borderRadius: "var(--wim-radius-md)", fontSize: "var(--wim-font-size-sm)", color: "var(--wim-color-text-accent)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>{t("story.promptinput_attached")}: <strong>{fileName}</strong></span>
          <button
            type="button"
            onClick={() => setFileName(null)}
            style={{ background: "transparent", border: "none", color: "inherit", cursor: "pointer", fontSize: "1.2em", lineHeight: 1 }}
          >
            ×
          </button>
        </div>
      )}
      <PromptInput
        {...args}
        onSubmit={(v) => {
          setSubmitted((prev) => [...prev, v]);
          setFileName(null);
        }}
        onAttach={() => fileInputRef.current?.click()}
      />
    </div>
  );
};

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <InteractiveDemo {...args} placeholder={args.placeholder ?? t("story.promptinput_placeholder")} />;
  },
  args: {},
};

export const WithAttachment: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <InteractiveDemo {...args} placeholder={args.placeholder ?? t("story.promptinput_placeholder_attach")} />;
  },
  args: {
    showAttach: true,
  },
};

export const WithCharCount: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <InteractiveDemo {...args} placeholder={args.placeholder ?? t("story.promptinput_placeholder_char")} />;
  },
  args: {
    maxLength: 500,
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <InteractiveDemo {...args} defaultValue={args.defaultValue ?? t("story.promptinput_disabled_val")} />;
  },
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <InteractiveDemo {...args} defaultValue={args.defaultValue ?? t("story.promptinput_loading_val")} />;
  },
  args: {
    loading: true,
  },
};
