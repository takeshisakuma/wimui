import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mentions } from "@/components/Mentions/Mentions";
import { Label } from "@/components/Label/Label";

const meta: Meta<typeof Mentions> = {
  title: "Components/Basic Inputs/Mentions",
  component: Mentions,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Mentions>;

const mockUsers = [
  { id: 1, display: "Alex" },
  { id: 2, display: "Jordan" },
  { id: 3, display: "WimUI_Admin" },
  { id: 4, display: "Designer_K" },
  { id: 5, display: "Frontend_Dev" },
  { id: 6, display: "Google_Deepmind" },
];

export const Default: Story = {
  render: (args) => (
    <Label label="User Mention (@でユーザーを選択)">
      <Mentions {...args} />
    </Label>
  ),
  args: {
    options: mockUsers,
    placeholder: "@yamada",
    fullWidth: true,
    rows: 4,
  },
};

export const CustomTrigger: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Label label="Character Mention (#でキャラクターを選択)">
        <Mentions
          {...args}
          trigger="#"
          placeholder="#SuperMario"
          options={[
            { id: 1, display: "SuperMario" },
            { id: 2, display: "Luigi" },
            { id: 3, display: "Peach" },
          ]}
        />
      </Label>
      <Label label="Command Mention (/でコマンドを選択)">
        <Mentions
          {...args}
          trigger="/"
          placeholder="/help"
          options={[
            { id: 1, display: "help" },
            { id: 2, display: "settings" },
            { id: 3, display: "logout" },
          ]}
        />
      </Label>
    </div>
  ),
  args: {
    fullWidth: true,
    rows: 3,
  },
};
