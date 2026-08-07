import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Avatar, Chip, Icon, Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, Button } from "wimui";


/**
 * Selection Controls/Chip Component
 */
const meta: Meta<typeof Chip> = {
  title: "Components/Selection Controls/Chip",
  component: Chip,
  tags: [], // mdxファイルがあるためautodocsは無効にする
  argTypes: {
    disabled: { control: "boolean" },
    intent: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "danger", "info", "neutral"],
    },
    variant: {
      control: "select",
      options: ["solid", "outline"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    onClick: { control: false },
    onDelete: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args}>{t("docs_stories_display:story.chip_default")}</Chip>;
  },
};

export const Clickable: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Chip
        {...args}
        onClick={(e: React.MouseEvent) => console.log("Chip clicked", e)}
      >
        {t("docs_stories_display:story.chip_clickable")}
      </Chip>
    );
  },
};

export const Deletable: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [open, setOpen] = useState(false);

    return (
      <>
        <Chip
          {...args}
          onDelete={() => setOpen(true)}
        >
          {t("docs_stories_display:story.chip_deletable")}
        </Chip>

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
              <Button variant="solid" intent="danger" onClick={() => setOpen(false)}>
                {t("docs_stories_display:story.dialog_confirm")}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  },
};

export const WithAvatar: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} avatar={<Avatar initials="JD" size="sm" />}>{t("story.chip_sample_name")}</Chip>;
  },
};

export const WithIcon: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Chip
        {...args}
        icon={<Icon name="CircleIcon" size="sm" />}
      >
        {t("docs_stories_inputs:story.select_opt4")}
      </Chip>
    );
  },
};

export const Selected: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} selected={true} onClick={() => {}}>{t("docs_stories_display:story.chip_selected")}</Chip>;
  },
};

export const Variants: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <Chip {...args} variant="solid" onClick={() => {}}>{t("docs_stories_display:story.chip_solid")}</Chip>
        <Chip {...args} variant="outline" onClick={() => {}}>{t("docs_stories_display:story.chip_outline")}</Chip>
        {/* subtle は 3 つの variant のうちここだけ**どのストーリーにも出ていなかった**。
            Badge と Tag は写っているので、subtle を変えたとき Chip だけ VRT が
            何も言わない状態だった。 */}
        <Chip {...args} variant="subtle" onClick={() => {}}>{t("docs_stories_display:story.chip_subtle")}</Chip>
        <Chip
          {...args}
          variant="outline"
          selected
          onClick={() => {}}
        >
          {t("docs_stories_display:story.chip_selected_label")}
        </Chip>
      </div>
    );
  },
};
