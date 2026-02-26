import type { Meta, StoryObj } from "@storybook/react-vite";
import { PasswordInput } from "@/components/PasswordInput/PasswordInput";
import { Label } from "@/components/Label/Label";

const meta: Meta<typeof PasswordInput> = {
  title: "Components/Basic Inputs/PasswordInput",
  component: PasswordInput,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  render: (args) => (
    <Label label="パスワード">
      <PasswordInput {...args} />
    </Label>
  ),
  args: {
    placeholder: "P@ssw0rd123",
  },
};
