import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SegmentedControl } from "@/components/SegmentedControl/SegmentedControl";

const meta: Meta<typeof SegmentedControl> = {
  title: "Components/Selection Controls/SegmentedControl",
  component: SegmentedControl,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    fullWidth: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

const options = [
  { label: "Day", value: "day" },
  { label: "Week", value: "week" },
  { label: "Month", value: "month" },
];

export const Small: Story = {
  args: {
    size: "small",
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const [value, setValue] = useState("day");
    return (
      <SegmentedControl
        {...args}
        options={options}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const [value, setValue] = useState("day");
    return (
      <SegmentedControl
        {...args}
        options={options}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Large: Story = {
  args: {
    size: "large",
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const [value, setValue] = useState("day");
    return (
      <SegmentedControl
        {...args}
        options={options}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const TwoOptions: Story = {
  args: {
    size: "medium",
    fullWidth: true,
  },
  render: (args) => {
    const [value, setValue] = useState("on");
    const twoOptions = [
      { label: "On", value: "on" },
      { label: "Off", value: "off" },
    ];
    return (
      <SegmentedControl
        {...args}
        options={twoOptions}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const WithIcons: Story = {
  args: {
    size: "medium",
    fullWidth: false,
  },
  render: (args) => {
    const [value, setValue] = useState("circle");
    const iconOptions = [
      { label: "Circle", value: "circle", iconName: "CircleIcon" },
      { label: "Square", value: "square", iconName: "SquareIcon" },
      { label: "External", value: "external", iconName: "ExternalLinkIcon" },
    ] as const;
    return (
      <SegmentedControl
        {...args}
        options={iconOptions as any}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const IconOnly: Story = {
  args: {
    size: "medium",
    fullWidth: false,
  },
  render: (args) => {
    const [value, setValue] = useState("circle");
    const iconOnlyOptions = [
      { value: "circle", iconName: "CircleIcon" },
      { value: "square", iconName: "SquareIcon" },
      { value: "external", iconName: "ExternalLinkIcon" },
    ] as const;
    return (
      <SegmentedControl
        {...args}
        options={iconOnlyOptions as any}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const LongLabel: Story = {
  args: {
    size: "medium",
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const [value, setValue] = useState("long1");
    const longOptions = [
      {
        label: "This is a very long text label that might cause overflow",
        value: "long1",
      },
      { label: "Another long text variant", value: "long2" },
      { label: "Short", value: "short" },
    ];
    return (
      <SegmentedControl
        {...args}
        options={longOptions}
        value={value}
        onChange={setValue}
      />
    );
  },
};
