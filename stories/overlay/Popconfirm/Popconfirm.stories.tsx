import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popconfirm } from "@/components/overlay/Popconfirm/Popconfirm";
import { Button } from "@/components/form/Button/Button";
import { useTranslation } from "react-i18next";
import React from "react";
import { ALL_NAMESPACES } from "../../i18nConstants";


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
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Popconfirm
        {...args}
        title={t("story.popconfirm_delete_title")}
        okText={t("story.popconfirm_yes")}
        cancelText={t("story.popconfirm_no")}
        okType="destructive"
      >
        <Button variant="solid">{t("story.popconfirm_delete_btn")}</Button>
      </Popconfirm>
    );
  },
};

export const WithDescription: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Popconfirm
        {...args}
        title={t("story.popconfirm_delete_btn")} // Using "Delete the task" title logic in simpler way or re-t
        description={t("story.popconfirm_delete_desc")}
        okText={t("story.popconfirm_yes")}
        cancelText={t("story.popconfirm_no")}
      >
        <Button >{t("story.popconfirm_delete_btn")}</Button>
      </Popconfirm>
    );
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Popconfirm {...args} title={t("story.popconfirm_yes")} disabled>
        <Button >{t("story.popconfirm_disabled_btn")}</Button>
      </Popconfirm>
    );
  },
};
