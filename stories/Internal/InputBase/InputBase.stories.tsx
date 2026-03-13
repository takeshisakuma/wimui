import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputBase } from "../../../src/components/_internal/InputBase/InputBase";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof InputBase> = {
  title: "Components/Internal/InputBase",
  component: InputBase,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof InputBase>;

const DummyInput = ({ placeholder }: { placeholder?: string }) => (
  <input
    style={{
      flex: 1,
      border: "none",
      background: "transparent",
      outline: "none",
      padding: "8px 0",
      color: "inherit",
    }}
    placeholder={placeholder}
  />
);

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs"]);
    return <InputBase {...args}><DummyInput placeholder={t("doc_inputBase_placeholder")} /></InputBase>;
  },
  args: {
    width: "md",
  },
};

export const WithIcons: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common"]);
    return (
      <InputBase 
        {...args} 
        leftIcon="SearchIcon" 
        rightIcons={[{ name: "CloseIcon", onClick: () => alert(t("button_clear")) }]}
      >
        <DummyInput placeholder={t("doc_inputBase_placeholder")} />
      </InputBase>
    );
  },
  args: {
    ...Default.args,
  },
};

export const Error: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs"]);
    return (
      <InputBase {...args} status="error" leftIcon="AlertCircleIcon">
        <DummyInput placeholder={t("doc_inputBase_placeholder")} />
      </InputBase>
    );
  },
  args: {
    ...Default.args,
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs"]);
    return (
      <InputBase {...args} status="disabled" leftIcon="ClockIcon">
        <DummyInput placeholder={t("doc_inputBase_placeholder")} />
      </InputBase>
    );
  },
  args: {
    ...Default.args,
  },
};

export const Ghost: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs"]);
    return (
      <InputBase {...args} variant="ghost" leftIcon="SearchIcon">
        <DummyInput placeholder={t("doc_inputBase_placeholder")} />
      </InputBase>
    );
  },
  args: {
    ...Default.args,
  },
};

export const MultipleRightIcons: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common"]);
    return (
      <InputBase 
        {...args} 
        rightIcons={[
          { name: "EyeIcon", onClick: () => alert(t("a11y_play")) },
          { name: "SettingsIcon", onClick: () => alert(t("settings")) }
        ]}
      >
        <DummyInput placeholder={t("doc_inputBase_placeholder")} />
      </InputBase>
    );
  },
  args: {
    ...Default.args,
  },
};
