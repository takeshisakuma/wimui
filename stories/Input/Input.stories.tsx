import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@/components/Input/Input";
import { Label } from "@/components/Label/Label";
import { FieldError } from "@/components/FieldError/FieldError";
import { Button } from "@/components/Button/Button";

const meta: Meta<typeof Input> = {
  title: "Components/Basic Inputs/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    leftIcon: {
      control: "select",
      options: ["SearchIcon"],
    },
    rightIcon: {
      control: "select",
      options: ["ChevronDownIcon"],
    },
    leftIconColor: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "destructive",
        "positive",
        "caution",
        "informative",
        "disabled",
      ],
    },
    rightIconColor: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "destructive",
        "positive",
        "caution",
        "informative",
        "disabled",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => (
    <Label label="Default Input">
      <Input {...args} />
    </Label>
  ),
  args: {
    placeholder: "入力テキスト",
  },
};

export const SelectLike: Story = {
  render: (args) => {
    const handleClick = () => alert("Dropdown or Modal would open here!");
    return (
      <Label label="Select-like Input">
        <Input
          {...args}
          onClick={handleClick}
          onRightIconClick={(e) => {
            e.stopPropagation(); // Prevent duplicate alert
            handleClick();
          }}
        />
      </Label>
    );
  },
  args: {
    rightIcon: "ChevronDownIcon",
    placeholder: "選択肢1",
    readOnly: true,
    style: { cursor: "pointer" },
  },
};

export const Clearable: Story = {
  render: (args) => (
    <Label label="Auto-Clearable Input">
      <Input {...args} allowClear placeholder="入力するとクリアボタンが表示されます" />
    </Label>
  ),
  args: {
    defaultValue: "Clear me!",
  },
};

export const Outline: Story = {
  render: (args) => (
    <Label label="Outline Input">
      <Input {...args} />
    </Label>
  ),
  args: {
    variant: "outline",
    placeholder: "アウトライン入力",
  },
};

export const Ghost: Story = {
  render: (args) => (
    <Label label="Ghost Input">
      <Input {...args} />
    </Label>
  ),
  args: {
    variant: "ghost",
    placeholder: "ゴースト入力",
  },
};

export const ErrorStatus: Story = {
  render: (args) => (
    <Label label="Error Input">
      <Input {...args} />
    </Label>
  ),
  args: {
    state: "error",
    defaultValue: "Invalid input",
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Label label="Disabled Input">
      <Input {...args} />
    </Label>
  ),
  args: {
    disabled: true,
    defaultValue: "Disabled input",
  },
};

export const FullWidth: Story = {
  render: (args) => (
    <Label label="Full Width Input" style={{ width: "100%" }}>
      <Input {...args} />
    </Label>
  ),
  args: {
    fullWidth: true,
    placeholder: "幅いっぱいの入力",
  },
  parameters: {
    layout: "padded",
  },
};

export const WithLabelAndError: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        width: "100%",
        maxWidth: "320px",
      }}
    >
      <Label label="User Name" required>
        <Input {...args} placeholder="山田 太郎" />
      </Label>
      {args.state === "error" && (
        <FieldError content="This field is required." />
      )}
    </div>
  ),
  args: {
    state: "default",
  },
};

export const InputWithError: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        width: "100%",
        maxWidth: "320px",
      }}
    >
      <Label label="Email" required>
        <Input {...args} placeholder="taro.yamada@example.com" />
      </Label>
      <FieldError content="Invalid email address." />
    </div>
  ),
  args: {
    state: "error",
    defaultValue: "invalid-email@",
  },
};

export const PasswordToggle: Story = {
  render: (args) => (
    <Label label="Password Input">
      <Input {...args} type="password" />
    </Label>
  ),
  args: {
    defaultValue: "password123",
  },
};

export const SearchIndicator: Story = {
  render: (args) => (
    <Label label="Search Input">
      <Input {...args} leftIcon="SearchIcon" />
    </Label>
  ),
  args: {
    placeholder: "Button",
  },
};
