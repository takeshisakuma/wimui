import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { InlineEdit } from "@/components/form/InlineEdit/InlineEdit";

const meta: Meta<typeof InlineEdit> = {
  title: "Components/Basic Inputs/InlineEdit",
  component: InlineEdit,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    defaultValue: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof InlineEdit>;

export const Default: Story = {
  args: {
    defaultValue: "Hello, WIM UI!",
    placeholder: "Click to edit...",
  },
};

export const Empty: Story = {
  args: {
    placeholder: "Click to enter text...",
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "Cannot edit this text",
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    defaultValue: "This takes up the full width",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("Controlled Value");
    return (
      <InlineEdit
        {...args}
        value={value}
        onChange={setValue}
        onSave={(val) => console.log("Saved:", val)}
      />
    );
  },
};
