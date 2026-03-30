import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "@/components/Progress/Progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Loading States/Progress",
  component: Progress,
  tags: [],
  argTypes: {
    status: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "neutral",
        "info",
      ],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
    label: "Processing...",
    showValue: true,
  },
  render: (args) => <Progress {...args} />,
};

export const Colors: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
      }}
    >
      <Progress {...args} status="primary" value={20} label="Primary" />
      <Progress {...args} status="secondary" value={40} label="Secondary" />
      <Progress {...args} status="success" value={60} label="Success" />
      <Progress {...args} status="warning" value={80} label="Warning" />
      <Progress {...args} status="error" value={90} label="Error" />
      <Progress {...args} status="neutral" value={50} label="Neutral" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
      }}
    >
      <Progress {...args} size="sm" value={50} label="Small" />
      <Progress {...args} size="md" value={50} label="Medium" />
      <Progress {...args} size="lg" value={50} label="Large" />
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: "Uploading...",
  },
  render: (args) => <Progress {...args} />,
};
