import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "@/components/feedback/Progress/Progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Loading States/Progress",
  component: Progress,
  tags: [],
  argTypes: {
    intent: {
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
  render: (args: any) => <Progress {...args} />,
};

export const Colors: Story = {
  render: (args: any) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
      }}
    >
      <Progress {...args} intent="primary" value={20} label="Primary" />
      <Progress {...args} intent="secondary" value={40} label="Secondary" />
      <Progress {...args} intent="success" value={60} label="Success" />
      <Progress {...args} intent="warning" value={80} label="Warning" />
      <Progress {...args} intent="error" value={90} label="Error" />
      <Progress {...args} intent="neutral" value={50} label="Neutral" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args: any) => (
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
  render: (args: any) => <Progress {...args} />,
};
