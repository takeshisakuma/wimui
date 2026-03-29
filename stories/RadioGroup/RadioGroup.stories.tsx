import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup } from "@/components/RadioGroup/RadioGroup";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof RadioGroup> = {
  title: "Components/Selection Controls/RadioGroup",
  component: RadioGroup,
  argTypes: {
    disabled: { control: "boolean" },
    direction: {
      control: "radio",
      options: ["vertical", "horizontal"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const useDefaultOptions = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return [
    { label: t("story.radio_option1"), value: "opt1" },
    { label: `${t("story.radio_option1")} 2`, value: "opt2" },
    { label: `${t("story.radio_option1")} 3`, value: "opt3" },
  ];
};

export const Default: Story = {
  render: function Render(args) {
    const options = useDefaultOptions();
    return (
      <RadioGroup
        {...args}
        options={options}
        name="default-group"
        defaultValue="opt1"
      />
    );
  },
};

export const Horizontal: Story = {
  render: function Render(args) {
    const options = useDefaultOptions();
    return (
      <RadioGroup
        {...args}
        options={options}
        direction="horizontal"
        name="horizontal-group"
        defaultValue="opt1"
      />
    );
  },
};

export const WithDisabledOption: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <RadioGroup
        {...args}
        options={[
          { label: t("story.radio_option1"), value: "opt1" },
          {
            label: `${t("story.radio_option1")} 2 ${t("story.option_disabled")}`,
            value: "opt2",
            disabled: true,
          },
          { label: `${t("story.radio_option1")} 3`, value: "opt3" },
        ]}
        name="disabled-option-group"
        defaultValue="opt1"
      />
    );
  },
};

export const Controlled: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = useDefaultOptions();
    const [value, setValue] = useState("opt1");
    return (
      <div>
        <div style={{ marginBottom: "1rem" }}>
          {t("story.radiogroup_selected")}: {value}
        </div>
        <RadioGroup
          options={options}
          value={value}
          onChange={setValue}
          name="controlled-group"
        />
      </div>
    );
  },
};

export const LongLabel: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <RadioGroup
        {...args}
        options={[
          {
            label: t("story.radio_long_label"),
            value: "long1",
          },
          {
            label: t("story.radio_long_label"),
            value: "long2",
          },
        ]}
        name="long-label-group"
      />
    );
  },
};
