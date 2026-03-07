import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { ToggleGroup } from "@/components/ToggleGroup/ToggleGroup";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof ToggleGroup> = {
  title: "Components/Selection Controls/ToggleGroup",
  component: ToggleGroup,
  // tags: ["autodocs"],
  argTypes: {
    selectionMode: {
      control: "select",
      options: ["single", "multiple"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

const useDefaultOptions = () => {
  const { t } = useTranslation(["docs", "common", "components"]);
  return [
    { label: t("story_toggle_left"), value: "left", iconName: "CircleIcon" },
    { label: t("story_toggle_center"), value: "center", iconName: "SquareIcon" },
    { label: t("story_toggle_right"), value: "right", iconName: "LoadingIcon" },
  ];
};

export const SingleSelection: Story = {
  render: function Render(args) {
    const options = useDefaultOptions();
    return (
      <ToggleGroup
        {...args}
        options={options}
        selectionMode="single"
        defaultValue="left"
      />
    );
  },
};

export const MultipleSelection: Story = {
  render: function Render(args) {
    const options = useDefaultOptions();
    return (
      <ToggleGroup
        {...args}
        options={options}
        selectionMode="multiple"
        defaultValue={["left", "right"]}
      />
    );
  },
};

export const IconOnly: Story = {
  args: {
    options: [
      { value: "bold", iconName: "CircleIcon" },
      { value: "italic", iconName: "SquareIcon" },
      { value: "underline", iconName: "LoadingIcon" },
    ],
    selectionMode: "multiple",
    defaultValue: ["bold"],
  },
};

export const Sizes: Story = {
  render: function Render(args) {
    const options = useDefaultOptions();
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <ToggleGroup {...args} options={options} size="small" />
        <ToggleGroup {...args} options={options} size="medium" />
        <ToggleGroup {...args} options={options} size="large" />
      </div>
    );
  },
  args: {
    selectionMode: "single",
    defaultValue: "center",
  },
};

export const FullWidth: Story = {
  render: function Render(args) {
    const options = useDefaultOptions();
    return (
      <ToggleGroup
        {...args}
        options={options}
        selectionMode="single"
        defaultValue="center"
        fullWidth={true}
      />
    );
  },
};

export const DisabledOptions: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <ToggleGroup
        {...args}
        options={[
          { label: t("story_toggle_available"), value: "avail" },
          { label: t("story_toggle_disabled"), value: "disabled", disabled: true },
          {
            label: t("story_toggle_selected_disabled"),
            value: "sel-disabled",
            disabled: true,
          },
        ]}
        selectionMode="multiple"
        defaultValue={["sel-disabled"]}
      />
    );
  },
};
