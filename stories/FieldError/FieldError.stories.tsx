import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FieldError } from "@/components/FieldError/FieldError";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof FieldError> = {
  title: "Components/Form Layout/FieldError",
  component: FieldError,
  argTypes: {
    content: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof FieldError>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <FieldError {...args} content={t("story_fielderror_error")} />;
  },
};

export const ShortMessage: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <FieldError {...args} content={t("story_fielderror_required")} />;
  },
};
