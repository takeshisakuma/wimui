import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Loader } from "@/components/Loader/Loader";

const meta: Meta<typeof Loader> = {
  title: "Components/Loading States/Loader",
  component: Loader,
  tags: [],
  argTypes: {
    variant: {
      control: "select",
      options: ["bars", "dots", "pulse"],
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "neutral",
        "currentColor",
      ],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large", "xlarge"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "bars",
    color: "primary",
    size: "medium",
  },
  render: (args) => <Loader {...args} />,
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "48px", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Loader {...args} variant="bars" />
        <span style={{ fontSize: "12px", color: "var(--wim-color-text-secondary)" }}>bars</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Loader {...args} variant="dots" />
        <span style={{ fontSize: "12px", color: "var(--wim-color-text-secondary)" }}>dots</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Loader {...args} variant="pulse" />
        <span style={{ fontSize: "12px", color: "var(--wim-color-text-secondary)" }}>pulse</span>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Loader {...args} color="primary" />
      <Loader {...args} color="secondary" />
      <Loader {...args} color="success" />
      <Loader {...args} color="warning" />
      <Loader {...args} color="error" />
      <Loader {...args} color="neutral" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        <Loader {...args} variant="bars" size="small" />
        <Loader {...args} variant="bars" size="medium" />
        <Loader {...args} variant="bars" size="large" />
        <Loader {...args} variant="bars" size="xlarge" />
      </div>
      <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        <Loader {...args} variant="dots" size="small" />
        <Loader {...args} variant="dots" size="medium" />
        <Loader {...args} variant="dots" size="large" />
        <Loader {...args} variant="dots" size="xlarge" />
      </div>
      <div
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "center",
          height: "48px",
        }}
      >
        <Loader {...args} variant="pulse" size="small" />
        <Loader {...args} variant="pulse" size="medium" />
        <Loader {...args} variant="pulse" size="large" />
        <Loader {...args} variant="pulse" size="xlarge" />
      </div>
    </div>
  ),
};
