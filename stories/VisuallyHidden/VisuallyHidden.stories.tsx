import type { Meta, StoryObj } from "@storybook/react-vite";
import { VisuallyHidden } from "@/components/VisuallyHidden/VisuallyHidden";

const meta: Meta<typeof VisuallyHidden> = {
  title: "Components/Utilities/VisuallyHidden",
  component: VisuallyHidden,
  tags: [],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof VisuallyHidden>;

export const Primary: Story = {
  args: {
    children:
      "このテキストは視覚的に隠されていますが、スクリーンリーダーでは読み上げられます。",
  },
};

export const WithinButton: Story = {
  render: () => (
    <button aria-label="閉じる">
      <span aria-hidden="true">×</span>
      <VisuallyHidden>閉じる</VisuallyHidden>
    </button>
  ),
};
