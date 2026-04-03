import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckboxGroup } from "@/components/form/CheckboxGroup/CheckboxGroup";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";

const meta: Meta<typeof CheckboxGroup> = {
  title: "Components/Selection Controls/CheckboxGroup",
  component: CheckboxGroup,
  // tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    direction: {
      control: "radio",
      options: ["vertical", "horizontal"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

const useOptions = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return [
    { label: t("story.fruit_apple"), value: "apple" },
    { label: t("story.fruit_banana"), value: "banana" },
    { label: t("story.fruit_cherry"), value: "cherry" },
    { label: `${t("story.fruit_date")} ${t("story.option_disabled")}`, value: "date", disabled: true },
  ];
};

export const Default: Story = {
  render: function Render(args) {
    const options = useOptions();
    return <CheckboxGroup {...args} options={options} defaultValue={["banana"]} />;
  },
};

export const Horizontal: Story = {
  render: function Render(args) {
    const options = useOptions();
    return (
      <CheckboxGroup
        {...args}
        options={options}
        direction="horizontal"
        defaultValue={["apple", "cherry"]}
      />
    );
  },
};

export const Controlled = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  const options = useOptions();
  const [value, setValue] = useState<string[]>(["apple"]);
  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        {t("story.checkboxgroup_selected")}: {value.join(", ")}
      </div>
      <CheckboxGroup options={options} value={value} onChange={setValue} />
    </div>
  );
};

export const LongLabel: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <CheckboxGroup
        {...args}
        options={[
          {
            label: t("story.checkbox_long_label"),
            value: "long1",
          },
          {
            label: t("story.checkbox_long_label"), // Reusing similar text
            value: "long2",
          },
        ]}
        defaultValue={["long1"]}
      />
    );
  },
};
