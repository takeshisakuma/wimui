import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { InlineEdit } from "@/components/form/InlineEdit/InlineEdit";

const meta: Meta<typeof InlineEdit> = {
  title: "Components/Basic Inputs/InlineEdit",
  component: InlineEdit,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    defaultValue: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof InlineEdit>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <InlineEdit
        {...args}
        defaultValue={t("story.inlineedit_default_value")}
        placeholder={t("story.inlineedit_placeholder_edit")}
      />
    );
  },
};

export const Empty: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <InlineEdit {...args} placeholder={t("story.inlineedit_placeholder_enter")} />;
  },
};

export const Disabled: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <InlineEdit {...args} defaultValue={t("story.inlineedit_disabled_value")} disabled />;
  },
};

export const FullWidth: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <InlineEdit {...args} defaultValue={t("story.inlineedit_fullwidth_value")} fullWidth />;
  },
  parameters: {
    layout: "padded",
  },
};

export const Controlled: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState(t("story.inlineedit_controlled_value"));
    return (
      <InlineEdit
        {...args}
        value={value}
        onChange={setValue}
        onSave={(val) => console.log("Saved:", val)}
      />
    );
  },
};
