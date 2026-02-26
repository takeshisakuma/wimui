import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import { Label } from "@/components/Label/Label";

const meta: Meta<typeof SearchInput> = {
  title: "Components/Basic Inputs/SearchInput",
  component: SearchInput,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  render: (args) => (
    <Label label="検索">
      <SearchInput {...args} />
    </Label>
  ),
  args: {
    placeholder: "機能やキーワード",
  },
};
