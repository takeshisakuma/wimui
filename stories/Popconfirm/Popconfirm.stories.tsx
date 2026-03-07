import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popconfirm } from "@/components/Popconfirm/Popconfirm";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "react-i18next";
import React from "react";

const meta: Meta<typeof Popconfirm> = {
  title: "Components/Alerts & Notifications/Popconfirm",
  component: Popconfirm,
  tags: [],
  argTypes: {
    onConfirm: { action: "confirmed" },
    onCancel: { action: "cancelled" },
  },
};

export default meta;
type Story = StoryObj<typeof Popconfirm>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Popconfirm
        {...args}
        title={t("story_popconfirm_delete_title")}
        okText={t("story_popconfirm_yes")}
        cancelText={t("story_popconfirm_no")}
        okType="destructive"
      >
        <Button priority="primary" label={t("story_popconfirm_delete_btn")} />
      </Popconfirm>
    );
  },
};

export const WithDescription: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Popconfirm
        {...args}
        title={t("story_popconfirm_delete_btn")} // Using "Delete the task" title logic in simpler way or re-t
        description={t("story_popconfirm_delete_desc")}
        okText={t("story_popconfirm_yes")}
        cancelText={t("story_popconfirm_no")}
      >
        <Button label={t("story_popconfirm_delete_btn")} />
      </Popconfirm>
    );
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Popconfirm {...args} title={t("story_popconfirm_yes")} disabled>
        <Button label={t("story_popconfirm_disabled_btn")} />
      </Popconfirm>
    );
  },
};
