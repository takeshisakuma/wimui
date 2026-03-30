import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusContent } from "../../../src/components/_internal/StatusContent";
import { Icon } from "../../../src/components/Icon/Icon";
import { Button } from "../../../src/components/Button/Button";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof StatusContent> = {
  title: "Components/Internal/StatusContent",
  component: StatusContent,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof StatusContent>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
        <StatusContent 
            {...args}
            title={t("doc.status_success_title")}
            description={t("doc.status_success_desc")}
            actions={
                <>
                    <Button label={t("button.label")} variant="filled" />
                    <Button label={t("doc.RefTable_desc")} variant="outlined" />
                </>
            }
        />
    );
  },
  args: {
    icon: <Icon name="CheckCircleIcon" color="primary" />,
  },
};

export const Small: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
        <StatusContent 
            {...args}
            title={t("doc.status_success_title")}
            description={t("doc.status_success_desc")}
        />
    );
  },
  args: {
    ...Default.args,
    size: "small",
  },
};

export const NoAction: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
        <StatusContent 
            {...args}
            title={t("doc.status_success_title")}
            description={t("doc.status_success_desc")}
        />
    );
  },
  args: {
    ...Default.args,
  },
};
