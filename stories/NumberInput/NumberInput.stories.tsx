import type { Meta, StoryObj } from "@storybook/react-vite";
import { NumberInput } from "@/components/NumberInput/NumberInput";
import { Label } from "@/components/Label/Label";

const meta: Meta<typeof NumberInput> = {
  title: "Components/Basic Inputs/NumberInput",
  component: NumberInput,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  render: (args) => (
    <Label label="数量">
      <NumberInput {...args} />
    </Label>
  ),
  args: {
    placeholder: "100",
  },
};
