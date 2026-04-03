import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SwitchGroup } from "@/components/form/SwitchGroup/SwitchGroup";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof SwitchGroup> = {
  title: "Components/Selection Controls/SwitchGroup",
  component: SwitchGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: { control: "boolean" },
    direction: {
      control: "radio",
      options: ["vertical", "horizontal"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SwitchGroup>;

const useOptions = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return [
    { label: t("story.switch_wifi"), value: "wifi" },
    { label: t("story.switch_bluetooth"), value: "bluetooth" },
    { label: t("story.switch_airplane"), value: "airplane" },
  ];
};

export const Default: Story = {
  render: function Render(args) {
    const options = useOptions();
    return <SwitchGroup {...args} options={options} defaultValue={["wifi"]} />;
  },
};

export const Horizontal: Story = {
  render: function Render(args) {
    const options = useOptions();
    return (
      <SwitchGroup
        {...args}
        options={options}
        direction="horizontal"
        defaultValue={["wifi"]}
      />
    );
  },
};

export const WithDisabledOption: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const options = useOptions();
    return (
      <SwitchGroup
        {...args}
        options={[
          ...options,
          {
            label: `${t("story.mobile_data")} ${t("story.option_disabled")}`,
            value: "mobile_data",
            disabled: true,
          },
        ]}
        defaultValue={["wifi"]}
      />
    );
  },
};
