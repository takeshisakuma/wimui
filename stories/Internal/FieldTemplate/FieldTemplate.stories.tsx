import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FieldTemplate } from "../../../src/components/_internal/FieldTemplate/FieldTemplate";
import { Input } from "../../../src/components/Input/Input";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof FieldTemplate> = {
  title: "Components/Internal/FieldTemplate",
  component: FieldTemplate,
};

export default meta;
type Story = StoryObj<typeof FieldTemplate>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs"]);
    return (
      <FieldTemplate {...args} label={args.label || t("doc_ft_email_label")}>
        <Input placeholder="example@example.com" fullWidth />
      </FieldTemplate>
    );
  },
  args: {
    required: true,
  },
};

export const Horizontal: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs"]);
    return (
      <FieldTemplate {...args} label={t("doc_ft_email_label")} layout="horizontal">
        <Input placeholder="example@example.com" fullWidth />
      </FieldTemplate>
    );
  },
  args: {
    ...Default.args,
  },
};

export const WithError: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs"]);
    return (
      <FieldTemplate {...args} label={t("doc_ft_email_label")} error={t("doc_ft_email_error")}>
        <Input placeholder="example@example.com" fullWidth />
      </FieldTemplate>
    );
  },
  args: {
    ...Default.args,
  },
};

export const NoLabel: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs"]);
    return (
      <FieldTemplate {...args}>
        <Input placeholder={t("doc_ft_no_label")} fullWidth />
      </FieldTemplate>
    );
  },
  args: {},
};
