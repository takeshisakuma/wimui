import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusContent } from "../../../src/components/_internal/StatusContent";
import { Icon } from "../../../src/components/Icon/Icon";
import { Button } from "../../../src/components/Button/Button";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
        <StatusContent 
            {...args}
            title={t("doc_status_success_title")}
            description={t("doc_status_success_desc")}
            actions={
                <>
                    <Button label={t("button_label")} priority="primary" />
                    <Button label={t("doc_RefTable_desc")} priority="secondary" />
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
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
        <StatusContent 
            {...args}
            title={t("doc_status_success_title")}
            description={t("doc_status_success_desc")}
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
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
        <StatusContent 
            {...args}
            title={t("doc_status_success_title")}
            description={t("doc_status_success_desc")}
        />
    );
  },
  args: {
    ...Default.args,
  },
};
