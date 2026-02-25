import type { Meta, StoryObj } from "@storybook/react-vite";
import { CopyButton } from "@/components/CopyButton/CopyButton";

const meta: Meta<typeof CopyButton> = {
  title: "Components/Buttons/CopyButton",
  component: CopyButton,
  tags: [],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
  args: {
    value: "Hello, wimui!",
  },
};

export const Small: Story = {
  args: {
    value: "Small CopyButton",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    value: "Large CopyButton",
    size: "large",
  },
};
