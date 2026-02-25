import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "@/components/Avatar/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Data Indicators/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    shape: {
      control: "radio",
      options: ["circle", "rounded"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "neutral", "error", "success"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120",
    alt: "User",
  },
};

export const Initials: Story = {
  args: {
    initials: "JD",
    color: "primary",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Avatar {...args} size="sm" initials="SM" color="neutral" />
      <Avatar {...args} size="md" initials="MD" color="neutral" />
      <Avatar {...args} size="lg" initials="LG" color="neutral" />
    </div>
  ),
};

export const Shapes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Avatar {...args} shape="circle" initials="C" color="secondary" />
      <Avatar {...args} shape="rounded" initials="R" color="secondary" />
    </div>
  ),
};

export const Fallback: Story = {
  args: {
    src: "https://invalid-image-url.com",
    initials: "FB",
  },
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Avatar {...args} initials="P" color="primary" />
      <Avatar {...args} initials="S" color="secondary" />
      <Avatar {...args} initials="N" color="neutral" />
      <Avatar {...args} initials="E" color="error" />
      <Avatar {...args} initials="SU" color="success" />
    </div>
  ),
};
