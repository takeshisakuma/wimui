import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "@/components/form/Radio/Radio";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof Radio> = {
  title: "Components/Selection Controls/Radio",
  component: Radio,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Radio {...args} value="option1">{t("story.radio_option1")}</Radio>;
  },
};

export const Checked: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Radio
        {...args}
        value="checked"
      >
        {t("story.radio_checked")}
      </Radio>
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
        value="disabled"
      >
        {t("story.radio_disabled")}
      </Radio>
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
        value="disabled-checked"
      >
        {t("story.radio_dis_checked")}
      </Radio>
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
    return <Radio {...args} value="long">{t("story.radio_long_label")}</Radio>;
  },
};
