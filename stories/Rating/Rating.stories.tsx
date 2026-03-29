import React, { useState, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Rating } from "@/components/Rating/Rating";
import { useTranslation } from "react-i18next";
import { Label } from "@/components/Label/Label";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Rating> = {
  title: "Components/Advanced Inputs/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: { control: "number" },
    count: { control: "number" },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.rating_default")}>
        <Rating {...args} />
      </Label>
    );
  },
  args: {
    defaultValue: 3,
  },
};

export const AllowHalf: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.rating_half")}>
        <Rating {...args} />
      </Label>
    );
  },
  args: {
    defaultValue: 2.5,
    allowHalf: true,
  },
};

export const CustomCount: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.rating_custom")}>
        <Rating {...args} />
      </Label>
    );
  },
  args: {
    defaultValue: 7,
    count: 10,
  },
};

export const Sizes: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Label label={t("story.rating_sizes")}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Rating {...args} size="small" defaultValue={3} />
            <Rating {...args} size="medium" defaultValue={3} />
            <Rating {...args} size="large" defaultValue={3} />
          </div>
        </Label>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.rating_disabled")}>
        <Rating {...args} disabled />
      </Label>
    );
  },
  args: {
    defaultValue: 4,
  },
};

export const ReadOnly: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Label label={t("story.rating_readonly")}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Rating {...args} value={5} readOnly />
            <Rating {...args} value={4} readOnly />
            <Rating {...args} value={3} readOnly />
            <Rating {...args} value={2} readOnly />
            <Rating {...args} value={1} readOnly />
          </div>
        </Label>
      </div>
    );
  },
};

export const Controlled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState(args.value ?? 3);

    useEffect(() => {
      setValue(args.value ?? 3);
    }, [args.value]);

    const handleChange = (newVal: number) => {
      setValue(newVal);
      args.onChange?.(newVal);
    };

    return (
      <Label label={t("story.rating_controlled")}>
        <Rating {...args} value={value} onChange={handleChange} />
      </Label>
    );
  },
};
