import type { Meta, StoryObj } from "@storybook/react-vite";
import { FieldCharacterCount } from "@/components/_internal/FieldCharacterCount/FieldCharacterCount";

const meta: Meta<typeof FieldCharacterCount> = {
  title: "Components/Internal/FieldCharacterCount",
  component: FieldCharacterCount,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof FieldCharacterCount>;

export const Default: Story = {
  args: {
    count: 12,
    maxLength: 100,
    alwaysShow: true,
  },
};

export const NearLimit: Story = {
  args: {
    count: 92,
    maxLength: 100,
    alwaysShow: true,
  },
};

export const OverLimit: Story = {
  args: {
    count: 108,
    maxLength: 100,
    alwaysShow: true,
    isError: true,
  },
};
