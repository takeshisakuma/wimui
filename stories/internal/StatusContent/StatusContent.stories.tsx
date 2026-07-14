import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { StatusContent } from "@/components/_internal/StatusContent";
import { Button, Icon } from "wimui";
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
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <StatusContent
        {...args}
        icon={<Icon name="CheckCircleIcon" size="lg" />}
        title={t("story.statuscontent_title")}
        description={t("story.statuscontent_desc")}
        actions={
          <>
            <Button variant="solid">{t("story.statuscontent_continue")}</Button>
            <Button variant="outline">{t("story.statuscontent_back")}</Button>
          </>
        }
      />
    );
  },
};
