import type { Meta, StoryObj } from "@storybook/react-vite";
import { PasswordInput } from "@/components/PasswordInput/PasswordInput";

const meta: Meta<typeof PasswordInput> = {
  title: "Components/Basic Inputs/PasswordInput",
  component: PasswordInput,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    placeholder: "パスワードを入力してください",
  },
};
