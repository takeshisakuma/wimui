import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Icon, Tag, Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, Button } from "wimui";


/**
 * Data Display/Tag Component
 */
const meta: Meta<typeof Tag> = {
  title: "Components/Data Indicators/Tag",
  component: Tag,
  tags: [], // mdxファイルがあるためautodocsは無効にする
  argTypes: {
    intent: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "info",
        "neutral",
      ],
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "subtle"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Tag {...args}>{t("docs_stories_display:story.tag_content")}</Tag>;
  },
  args: {
    intent: "primary",
    variant: "solid",
    size: "md",
  },
};

export const Variants: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <Tag {...args} variant="solid">
          {t("docs_stories_display:story.tag_solid")}
        </Tag>
        <Tag {...args} variant="outline">
          {t("docs_stories_display:story.tag_outline")}
        </Tag>
        <Tag {...args} variant="subtle">
          {t("docs_stories_display:story.tag_subtle")}
        </Tag>
      </div>
    );
  },
};

export const Colors: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <Tag {...args} intent="primary">
          {t("docs_stories_display:story.tag_primary")}
        </Tag>
        <Tag {...args} intent="secondary">
          {t("docs_stories_display:story.tag_secondary")}
        </Tag>
        <Tag {...args} intent="success">
          {t("docs_stories_display:story.tag_success")}
        </Tag>
        <Tag {...args} intent="warning">
          {t("docs_stories_display:story.tag_warning")}
        </Tag>
        <Tag {...args} intent="error">
          {t("docs_stories_display:story.tag_error")}
        </Tag>
        <Tag {...args} intent="neutral">
          {t("docs_stories_display:story.tag_neutral")}
        </Tag>
        <Tag {...args} intent="info">
          {t("docs_stories_display:story.tag_info")}
        </Tag>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Tag {...args} size="sm">
          {t("docs_stories_display:story.tag_small")}
        </Tag>
        <Tag {...args} size="md">
          {t("docs_stories_display:story.tag_medium")}
        </Tag>
      </div>
    );
  },
};

export const WithIcon: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Tag {...args} icon={<Icon name="CircleIcon" size="sm" />}>
        {t("docs_stories_display:story.tag_with_icon")}
      </Tag>
    );
  },
};

export const Deletable: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [open, setOpen] = useState(false);
    const [lastAction, setLastAction] = useState("");

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <Tag {...args} onDelete={() => { setOpen(true); setLastAction("Solid Tag"); }}>
            {t("docs_stories_display:story.tag_deletable")}
          </Tag>
          <Tag {...args} variant="outline" onDelete={() => { setOpen(true); setLastAction("Outline Tag"); }}>
            {t("docs_stories_display:story.tag_deletable")}
          </Tag>
          <Tag {...args} variant="subtle" onDelete={() => { setOpen(true); setLastAction("Subtle Tag"); }}>
            {t("docs_stories_display:story.tag_deletable")}
          </Tag>
        </div>

        {lastAction && (
          <p style={{ fontSize: "14px", color: "var(--wim-color-text-secondary)" }}>
            Last action: {lastAction} delete requested.
          </p>
        )}

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("docs_stories_display:story.dialog_confirm_title")}</DialogTitle>
              <DialogDescription>
                {t("docs_stories_display:story.dialog_confirm_desc")}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter style={{ flexDirection: "row", justifyContent: "flex-end", gap: "8px" }}>
              <DialogClose asChild>
                <Button variant="outline">{t("docs_stories_display:story.dialog_cancel")}</Button>
              </DialogClose>
              <Button variant="solid" intent="destructive" onClick={() => setOpen(false)}>
                {t("docs_stories_display:story.dialog_confirm")}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};
