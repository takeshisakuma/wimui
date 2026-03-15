import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { RichTextEditor } from "@/components/RichTextEditor/RichTextEditor";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";

const meta: Meta<typeof RichTextEditor> = {
  title: "Components/Basic Inputs/RichTextEditor",
  component: RichTextEditor,
  argTypes: {
    status: {
      control: { type: "select" },
      options: ["default", "error", "disabled"],
    },
    variant: {
      control: { type: "select" },
      options: ["outline", "ghost"],
    },
    fullWidth: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RichTextEditor>;

export const Basic: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <RichTextEditor
        {...args}
        label={t("story_rte_label_content")}
        placeholder={t("story_rte_placeholder_default")}
      />
    );
  },
};

export const WithDefaultValue: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <RichTextEditor
        {...args}
        label={t("story_rte_label_article")}
        defaultValue={`<h2>${t("story_rte_default_heading")}</h2><p>${t("story_rte_default_body")}</p>`}
      />
    );
  },
};

export const Controlled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = React.useState(`<p>${t("story_rte_controlled_initial")}</p>`);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <RichTextEditor
          {...args}
          label={t("story_rte_label_content")}
          value={value}
          onChange={setValue}
        />
        <div>
          <strong>{t("story_rte_output_label")}</strong>
          <pre style={{ fontSize: "0.75rem", whiteSpace: "pre-wrap", wordBreak: "break-all", padding: "8px", background: "#f5f5f5", borderRadius: "4px" }}>
            {value}
          </pre>
        </div>
      </div>
    );
  },
};

export const ErrorStatus: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <RichTextEditor
        {...args}
        label={t("story_rte_label_content")}
        status="error"
        error={t("story_rte_error_required")}
        placeholder={t("story_rte_placeholder_default")}
      />
    );
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <RichTextEditor
        {...args}
        label={t("story_rte_label_content")}
        disabled
        defaultValue={`<p>${t("story_rte_disabled_content")}</p>`}
      />
    );
  },
};

export const Ghost: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <RichTextEditor
        {...args}
        label={t("story_rte_label_note")}
        variant="ghost"
        placeholder={t("story_rte_placeholder_default")}
      />
    );
  },
};

export const FullWidth: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <RichTextEditor
        {...args}
        label={t("story_rte_label_article")}
        fullWidth
        placeholder={t("story_rte_placeholder_default")}
      />
    );
  },
};

export const MinimalToolbar: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <RichTextEditor
        {...args}
        label={t("story_rte_label_comment")}
        toolbar={["bold", "italic", "underline", "separator", "link"]}
        placeholder={t("story_rte_placeholder_comment")}
      />
    );
  },
};
