import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { ToggleGroup, type Option } from "@/components/form/ToggleGroup/ToggleGroup";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";

const meta: Meta<typeof ToggleGroup> = {
  title: "Components/Selection Controls/ToggleGroup",
  component: ToggleGroup,
  // tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    selectionMode: {
      control: "select",
      options: ["single", "multiple"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

const useDefaultOptions = (): Option[] => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return [
    { label: t("story.toggle_left"), value: "left", iconName: "CircleIcon" },
    { label: t("story.toggle_center"), value: "center", iconName: "SquareIcon" },
    { label: t("story.toggle_right"), value: "right", iconName: "LoadingIcon" },
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
    ] satisfies Option[],
    selectionMode: "multiple",
    defaultValue: ["bold"],
  },
};

export const Sizes: Story = {
  render: function Render(args) {
    const options = useDefaultOptions();
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <ToggleGroup {...args} options={options} size="sm" />
        <ToggleGroup {...args} options={options} size="md" />
        <ToggleGroup {...args} options={options} size="lg" />
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
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ToggleGroup
        {...args}
        options={[
          { label: t("story.toggle_available"), value: "avail" },
          { label: t("story.toggle_disabled"), value: "disabled", disabled: true },
          {
            label: t("story.toggle_selected_disabled"),
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
