import type { Meta, StoryObj } from "@storybook/react-vite";
import { SpeedDial, SpeedDialAction } from "@/components/navigation/SpeedDial/SpeedDial";
import { Flex } from "@/components/layout/Flex/Flex";

const meta: Meta<typeof SpeedDial> = {
  title: "Components/Navigation Utilities/SpeedDial",
  component: SpeedDial,
  decorators: [
    (Story) => (
      <Flex align="center" justify="center" style={{ minHeight: "300px", width: "100%" }}>
        <Story />
      </Flex>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SpeedDial>;

const actions: SpeedDialAction[] = [
  { icon: "CopyIcon", label: "Copy", onClick: () => console.log("Copy") },
  { icon: "EditIcon", label: "Edit", onClick: () => console.log("Edit") },
  { icon: "ShareIcon", label: "Share", onClick: () => console.log("Share") },
  { icon: "TrashIcon", label: "Delete", onClick: () => console.log("Delete") },
];

export const Default: Story = {
  args: {
    actions,
    direction: "up",
    trigger: "hover",
  },
};

export const ClickTrigger: Story = {
  args: {
    actions,
    direction: "up",
    trigger: "click",
  },
};

export const RightDirection: Story = {
  args: {
    actions,
    direction: "right",
    trigger: "hover",
  },
};

export const CustomIcons: Story = {
  args: {
    actions,
    icon: "SettingsIcon",
    activeIcon: "CheckIcon",
    direction: "up",
    trigger: "hover",
  },
};
