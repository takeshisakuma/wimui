import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { NumberInput } from "@/components/NumberInput/NumberInput";
import { Label } from "@/components/Label/Label";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof NumberInput> = {
  title: "Components/Basic Inputs/NumberInput",
  component: NumberInput,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_numberinput_label")}>
        <NumberInput {...args} placeholder="100" />
      </Label>
    );
  },
};
