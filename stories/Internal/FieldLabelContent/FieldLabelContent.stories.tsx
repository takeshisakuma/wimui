import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FieldLabelContent } from "../../../src/components/_internal/FieldLabelContent";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof FieldLabelContent> = {
  title: "Components/Internal/FieldLabelContent",
  component: FieldLabelContent,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof FieldLabelContent>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <FieldLabelContent {...args} label={t("username")} />;
  },
};

export const Required: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <FieldLabelContent {...args} label={t("doc.ft_email_label")} required />;
  },
};

export const Optional: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <FieldLabelContent {...args} label={t("phone.number")} showOptional />;
  },
};
