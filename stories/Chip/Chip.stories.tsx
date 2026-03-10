import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "@/components/Chip/Chip";
import { Icon } from "@/components/Icon/Icon";
import { Avatar } from "@/components/Avatar/Avatar";
import { useTranslation } from "react-i18next";

/**
 * Data Display/Chip Component
 */
const meta: Meta<typeof Chip> = {
  title: "Components/Selection Controls/Chip",
  component: Chip,
  tags: [], // mdxファイルがあるためautodocsは無効にする
  argTypes: {
    status: {
      control: "select",
      options: ["primary", "secondary", "neutral"],
    },
    variant: {
      control: "select",
      options: ["solid", "outline"],
    },
    size: {
      control: "select",
      options: ["small", "medium"],
    },
    onClick: { action: "clicked" },
    onDelete: { action: "deleted" },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return <Chip {...args} label={t("story_chip_default")} />;
  },
};

export const Clickable: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Chip
        {...args}
        label={t("story_chip_clickable")}
        onClick={(e: React.MouseEvent) => console.log("Chip clicked", e)}
      />
    );
  },
};

export const Deletable: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Chip
        {...args}
        label={t("story_chip_deletable")}
        onDelete={(e: React.MouseEvent) => console.log("Chip deleted", e)}
      />
    );
  },
};

export const WithAvatar: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return <Chip {...args} label="Jane Doe" avatar={<Avatar initials="JD" size="sm" />} />;
  },
};

export const WithIcon: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Chip
        {...args}
        label={t("story_selectbox_opt4")}
        icon={<Icon name="CircleIcon" size="small" />}
      />
    );
  },
};

export const Selected: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return <Chip {...args} label={t("story_chip_selected")} selected={true} onClick={() => {}} />;
  },
};

export const Variants: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <Chip {...args} label={t("story_chip_solid")} variant="solid" onClick={() => {}} />
        <Chip {...args} label={t("story_chip_outline")} variant="outline" onClick={() => {}} />
        <Chip
          {...args}
          label={t("story_chip_selected_label")}
          variant="outline"
          selected
          onClick={() => {}}
        />
      </div>
    );
  },
};
