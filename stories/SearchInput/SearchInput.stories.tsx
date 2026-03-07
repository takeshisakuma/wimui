import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import { Label } from "@/components/Label/Label";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof SearchInput> = {
  title: "Components/Basic Inputs/SearchInput",
  component: SearchInput,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("doc_search")}>
        <SearchInput {...args} placeholder={t("story_searchinput_placeholder")} />
      </Label>
    );
  },
};
