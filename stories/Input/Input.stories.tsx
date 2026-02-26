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
    <Label label="お名前">
      <Input {...args} />
    </Label>
  ),
  args: {
    placeholder: "山田太郎",
  },
};

export const SelectLike: Story = {
  render: (args) => {
    const handleClick = () => alert("Dropdown or Modal would open here!");
    return (
      <Label label="部署">
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
    placeholder: "営業部",
    readOnly: true,
    style: { cursor: "pointer" },
  },
};

export const Clearable: Story = {
  render: (args) => (
    <Label label="キーワード">
      <Input {...args} allowClear placeholder="Tシャツ" />
    </Label>
  ),
  args: {
    defaultValue: "Yシャツ",
  },
};

export const Outline: Story = {
  render: (args) => (
    <Label label="会社名">
      <Input {...args} />
    </Label>
  ),
  args: {
    variant: "outline",
    placeholder: "株式会社Example",
  },
};

export const Ghost: Story = {
  render: (args) => (
    <Label label="備考">
      <Input {...args} />
    </Label>
  ),
  args: {
    variant: "ghost",
    placeholder: "機能の改善点について",
  },
};


export const ErrorStatus: Story = {
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
      <Label label="メールアドレス" required>
        <Input {...args} placeholder="taro.yamada@example.com" />
      </Label>
      <FieldError content="有効なメールアドレスを入力してください。" />
    </div>
  ),
  args: {
    state: "error",
    defaultValue: "invalid-email@",
  },
};


export const Disabled: Story = {
  render: (args) => (
    <Label label="ユーザーID">
      <Input {...args} />
    </Label>
  ),
  args: {
    disabled: true,
    placeholder: "WIM-1234",
  },
};

export const FullWidth: Story = {
  render: (args) => (
    <Label label="連絡先" style={{ width: "100%" }}>
      <Input {...args} />
    </Label>
  ),
  args: {
    fullWidth: true,
    placeholder: "info@example.com",
  },
  parameters: {
    layout: "padded",
  },
};







export const SearchIndicator: Story = {
  render: (args) => (
    <Label label="コンポーネント検索">
      <Input {...args} leftIcon="SearchIcon" />
    </Label>
  ),
  args: {
    placeholder: "Button",
  },
};
