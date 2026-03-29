import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BaseListItem } from "../../../src/components/_internal/BaseListItem/BaseListItem";
import { Icon } from "../../../src/components/Icon/Icon";
import { Chip } from "../../../src/components/Chip/Chip";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof BaseListItem> = {
  title: "Components/Internal/BaseListItem",
  component: BaseListItem,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof BaseListItem>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <BaseListItem {...args}>{args.children || t("standard_list_item")}</BaseListItem>;
  },
  args: {
    style: { width: "240px" },
  },
};

export const WithIcon: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <BaseListItem {...args} icon={<Icon name="EditIcon" />}>{t("home")}</BaseListItem>;
  },
  args: {
    ...Default.args,
  },
};

export const WithRightSection: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <BaseListItem 
        {...args} 
        icon={<Icon name="SettingsIcon" />} 
        rightSection={<Icon name="ChevronRightIcon" size="small" />}
      >
        {t("a11y_settings")}
      </BaseListItem>
    );
  },
  args: {
    ...Default.args,
  },
};

export const WithBadge: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <BaseListItem 
        {...args} 
        icon={<Icon name="BellIcon" />} 
        rightSection={<Chip size="small">{t("new")}</Chip>}
      >
        {t("notifications")}
      </BaseListItem>
    );
  },
  args: {
    ...Default.args,
  },
};

export const States: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
        <div style={{ width: "240px", display: "flex", flexDirection: "column", gap: "4px" }}>
            <BaseListItem {...args}>{t("home")}</BaseListItem>
            <BaseListItem {...args} active>{t("profile")}</BaseListItem>
            <BaseListItem {...args} disabled>{t("a11y_settings")}</BaseListItem>
            <BaseListItem {...args} danger icon={<Icon name="TrashIcon" />}>{t("a11y_delete")}</BaseListItem>
        </div>
    );
  }
};
