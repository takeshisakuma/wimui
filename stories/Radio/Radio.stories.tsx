import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "@/components/Radio/Radio";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Radio> = {
  title: "Components/Selection Controls/Radio",
  component: Radio,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} label={t("story_radio_option1")} value="option1" />;
  },
};

export const Checked: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Radio
        {...args}
        label={t("story_radio_checked")}
        value="checked"
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
    return (
      <Radio
        {...args}
        label={t("story_radio_disabled")}
        value="disabled"
      />
    );
  },
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Radio
        {...args}
        label={t("story_radio_dis_checked")}
        value="disabled-checked"
      />
    );
  },
  args: {
    disabled: true,
    checked: true,
  },
};

export const LongLabel: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} label={t("story_radio_long_label")} value="long" />;
  },
};
