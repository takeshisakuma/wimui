import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FieldError } from "@/components/form/FieldError/FieldError";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


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
    const { t } = useTranslation(ALL_NAMESPACES);
    return <FieldError {...args} content={t("story.fielderror_error")} />;
  },
};

export const ShortMessage: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <FieldError {...args} content={t("story.fielderror_required")} />;
  },
};
