import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "@/components/data-display/Chip/Chip";
import { Icon } from "@/components/media/Icon/Icon";
import { Avatar } from "@/components/data-display/Avatar/Avatar";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


/**
 * Data Display/Chip Component
 */
const meta: Meta<typeof Chip> = {
  title: "Components/Selection Controls/Chip",
  component: Chip,
  tags: [], // mdxファイルがあるためautodocsは無効にする
  argTypes: {
    disabled: { control: "boolean" },
    status: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error", "info", "neutral"],
    },
    variant: {
      control: "select",
      options: ["solid", "outline"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    onClick: { action: "clicked" },
    onDelete: { action: "deleted" },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args}>{t("story.chip_default")}</Chip>;
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
        {t("story.chip_clickable")}
      </Chip>
    );
  },
};

export const Deletable: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Chip
        {...args}
        onDelete={(e: React.SyntheticEvent) => console.log("Chip deleted", e)}
      >
        {t("story.chip_deletable")}
      </Chip>
    );
  },
};

export const WithAvatar: Story = {
  render: function Render(args) {
    return <Chip {...args} avatar={<Avatar initials="JD" size="sm" />}>Jane Doe</Chip>;
  },
};

export const WithIcon: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Chip
        {...args}
        label={t("story.selectbox_opt4")}
        icon={<Icon name="CircleIcon" size="sm" />}
      />
    );
  },
};

export const Selected: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Chip {...args} selected={true} onClick={() => {}}>{t("story.chip_selected")}</Chip>;
  },
};

export const Variants: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <Chip {...args} variant="solid" onClick={() => {}}>{t("story.chip_solid")}</Chip>
        <Chip {...args} variant="outline" onClick={() => {}}>{t("story.chip_outline")}</Chip>
        <Chip
          {...args}
          variant="outline"
          selected
          onClick={() => {}}
        >
          {t("story.chip_selected_label")}
        </Chip>
      </div>
    );
  },
};
