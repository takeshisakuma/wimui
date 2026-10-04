import React, { useId } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { FieldTemplate, Input } from "wimui";


const meta: Meta<typeof FieldTemplate> = {
  title: "Components/Form Layout/FieldTemplate",
  component: FieldTemplate,
};

export default meta;
type Story = StoryObj<typeof FieldTemplate>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const fieldId = useId();
    return (
      // FieldTemplate は枠だけで、中の入力欄を知らない。ラベルは `htmlFor` と入力欄の `id` で結ぶ
      // （結ばないと、入力欄の名前がプレースホルダだけになる）。
      <FieldTemplate {...args} label={args.label || t("doc.ft_email_label")} htmlFor={fieldId}>
        <Input id={fieldId} placeholder="example@example.com" fullWidth />
      </FieldTemplate>
    );
  },
  args: {
    required: true,
  },
};

export const Horizontal: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const fieldId = useId();
    return (
      <FieldTemplate {...args} label={t("doc.ft_email_label")} layout="horizontal" htmlFor={fieldId}>
        <Input id={fieldId} placeholder="example@example.com" fullWidth />
      </FieldTemplate>
    );
  },
  args: {
    ...Default.args,
  },
};

export const WithError: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const fieldId = useId();
    const errorId = useId();
    return (
      // FieldTemplate は枠だけなので、中の入力欄とラベル・エラー文は自分で結ぶ: `htmlFor` と `id`、`errorId` を渡し、
      // 入力欄の `aria-describedby` に同じ id を、`intent="danger"`（`aria-invalid`）と一緒に付ける（T316）。
      <FieldTemplate {...args} label={t("doc.ft_email_label")} error={t("doc.ft_email_error")} htmlFor={fieldId} errorId={errorId}>
        <Input id={fieldId} placeholder="example@example.com" fullWidth intent="danger" aria-describedby={errorId} />
      </FieldTemplate>
    );
  },
  args: {
    ...Default.args,
  },
};

export const NoLabel: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <FieldTemplate {...args}>
        <Input placeholder={t("doc.ft_no_label")} fullWidth />
      </FieldTemplate>
    );
  },
  args: {},
};
