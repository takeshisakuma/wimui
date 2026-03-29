import React, { useState, useMemo } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SegmentedControl } from "@/components/SegmentedControl/SegmentedControl";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof SegmentedControl> = {
  title: "Components/Selection Controls/SegmentedControl",
  component: SegmentedControl,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: { control: "boolean" },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    fullWidth: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

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
    const { t } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("day");
    const options = useMemo(
      () => [
        { label: t("story.segmented_day"), value: "day" },
        { label: t("story.segmented_week"), value: "week" },
        { label: t("story.segmented_month"), value: "month" },
      ],
      [t],
    );
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
    const { t } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("day");
    const options = useMemo(
      () => [
        { label: t("story.segmented_day"), value: "day" },
        { label: t("story.segmented_week"), value: "week" },
        { label: t("story.segmented_month"), value: "month" },
      ],
      [t],
    );
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
    const { t } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("day");
    const options = useMemo(
      () => [
        { label: t("story.segmented_day"), value: "day" },
        { label: t("story.segmented_week"), value: "week" },
        { label: t("story.segmented_month"), value: "month" },
      ],
      [t],
    );
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
    const { t } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("on");
    const options = useMemo(
      () => [
        { label: t("story.segmented_on"), value: "on" },
        { label: t("story.segmented_off"), value: "off" },
      ],
      [t],
    );
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

export const WithIcons: Story = {
  args: {
    size: "medium",
    fullWidth: false,
  },
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("circle");
    const options = useMemo(
      () =>
        [
          {
            label: t("story.segmented_circle"),
            value: "circle",
            iconName: "CircleIcon",
          },
          {
            label: t("story.segmented_square"),
            value: "square",
            iconName: "SquareIcon",
          },
          {
            label: t("story.segmented_external"),
            value: "external",
            iconName: "ExternalLinkIcon",
          },
        ] as const,
      [t],
    );
    return (
      <SegmentedControl
        {...args}
        options={[...options] as Parameters<typeof SegmentedControl>[0]["options"]}
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
        options={[...iconOnlyOptions] as Parameters<typeof SegmentedControl>[0]["options"]}
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
    const { t } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("long1");
    const options = useMemo(
      () => [
        {
          label: t("story.segmented_long_label"),
          value: "long1",
        },
        {
          label: t("story.segmented_another_long"),
          value: "long2",
        },
        { label: t("story.segmented_short"), value: "short" },
      ],
      [t],
    );
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
