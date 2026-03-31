import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@/components/form/Checkbox/Checkbox";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Checkbox> = {
  title: "Components/Selection Controls/Checkbox",
  component: Checkbox,
  // tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    indeterminate: { control: "boolean" },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} label={t("story.checkbox_accept")} />;
  },
};

export const Checked: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Checkbox
        {...args}
        label={t("story.checkbox_newsletter")}
        onChange={args.onChange ?? (() => {})}
      />
    );
  },
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} label={t("story.checkbox_disabled")} />;
  },
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Checkbox
        {...args}
        label={t("story.checkbox_dis_checked")}
        onChange={args.onChange ?? (() => {})}
      />
    );
  },
  args: {
    disabled: true,
    checked: true,
  },
};

export const Indeterminate: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Checkbox
        {...args}
        label={t("story.checkbox_indeterminate")}
        onChange={args.onChange ?? (() => {})}
      />
    );
  },
  args: {
    indeterminate: true,
    checked: true,
  },
};

export const Controlled = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label={`${t("story.checkbox_controlled")}: ${
        checked ? t("story.checkbox_on") : t("story.checkbox_off")
      }`}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export const LongLabel: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} label={t("story.checkbox_long_label")} />;
  },
};
