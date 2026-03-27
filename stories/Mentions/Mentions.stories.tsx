import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mentions } from "@/components/Mentions/Mentions";
import { Label } from "@/components/Label/Label";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Mentions> = {
  title: "Components/Basic Inputs/Mentions",
  component: Mentions,
  parameters: {
    layout: "padded",
  },
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
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
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story_mentions_label_user")}>
        <Mentions {...args} options={mockUsers} placeholder={t("story_mentions_placeholder_user")} fullWidth rows={4} />
      </Label>
    );
  },
};

export const CustomTrigger: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <Label label={t("story_mentions_label_char")}>
          <Mentions
            {...args}
            fullWidth
            rows={3}
            trigger="#"
            placeholder={t("story_mentions_placeholder_char")}
            options={[
              { id: 1, display: "SuperMario" },
              { id: 2, display: "Luigi" },
              { id: 3, display: "Peach" },
            ]}
          />
        </Label>
        <Label label={t("story_mentions_label_cmd")}>
          <Mentions
            {...args}
            fullWidth
            rows={3}
            trigger="/"
            placeholder={t("story_mentions_placeholder_cmd")}
            options={[
              { id: 1, display: "help" },
              { id: 2, display: "settings" },
              { id: 3, display: "logout" },
            ]}
          />
        </Label>
      </div>
    );
  },
};
