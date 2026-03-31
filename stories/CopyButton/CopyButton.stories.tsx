import type { Meta, StoryObj } from "@storybook/react-vite";
import { CopyButton } from "@/components/misc/CopyButton/CopyButton";

const meta: Meta<typeof CopyButton> = {
  title: "Components/Buttons/CopyButton",
  component: CopyButton,
  tags: [],
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
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
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    value: "Large CopyButton",
    size: "lg",
  },
};
